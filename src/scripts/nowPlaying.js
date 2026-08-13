/**
 * Now Playing Widget Component
 */

const NowPlayingWidget = {
  // State
  container: null,
  audioElement: null,
  previewUrl: null,
  isPlayingPreview: false,
  currentTrackKey: null,
  pollInterval: null,
  isUserDismissed: false,
  isCollapsed: (function() {
    try {
      const saved = localStorage.getItem("np_widget_collapsed");
      if (saved !== null) return saved === "true";
    } catch (e) {}
    return true; // Default collapsed on PC and Mobile
  })(),

  init() {
    this._injectStyles();

    // Initialize Audio Object
    this.audioElement = new Audio();
    this.audioElement.volume = 0.5;
    this.audioElement.onended = () => {
      this.isPlayingPreview = false;
      this.updatePlayButton();
    };

    // Create container
    this.container = document.createElement("div");
    this.container.id = "now-playing-widget";
    this.container.className = `np-widget hidden ${this.isCollapsed ? 'np-collapsed' : ''}`;

    // Inner HTML structure
    this.container.innerHTML = `
      <div class="np-art-container">
        <img id="np-art" src="" alt="Album Art" class="np-art" />
        
        <!-- Play Button Overlay -->
        <button id="np-play-btn" class="np-play-btn hidden">
            <i class="fa-solid fa-play" id="np-play-icon"></i>
        </button>

        <div id="np-equalizer" class="np-equalizer">
           <div class="np-bar np-bar-1"></div>
           <div class="np-bar np-bar-2"></div>
           <div class="np-bar np-bar-3"></div>
        </div>
      </div>
      <div class="np-info">
        <span id="np-label" class="np-label">
          <!-- Icon and Text injected via JS -->
        </span>
        <a id="np-link" href="#" target="_blank" class="np-track-name"></a>
        <span id="np-artist" class="np-artist-name"></span>
        <span id="np-time-ago" class="np-time-ago"></span>
      </div>
      <button id="np-toggle-btn" class="np-toggle-btn" aria-label="Toggle Details">
        <i class="fa-solid ${this.isCollapsed ? 'fa-chevron-up' : 'fa-chevron-down'}" id="np-toggle-icon"></i>
      </button>
    `;

    document.body.appendChild(this.container);

    // Container click listener: expand on click if collapsed
    this.container.addEventListener("click", (e) => {
      if (this.isCollapsed && !e.target.closest("#np-play-btn")) {
        this.toggleCollapse(false);
      }
    });

    const toggleBtn = document.getElementById("np-toggle-btn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.toggleCollapse();
      });
    }

    // Event Listeners
    const btn = document.getElementById("np-play-btn");
    if (btn) btn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.togglePreview();
    });

    // Touch Swipe Left to Dismiss
    this.initSwipeToDismiss();

    this.startPolling();
  },

  initSwipeToDismiss() {
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let isSwiping = false;

    this.container.addEventListener("touchstart", (e) => {
      if (e.touches.length !== 1) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      currentX = startX;
      isSwiping = false;
      this.container.style.transition = "none";
    }, { passive: true });

    this.container.addEventListener("touchmove", (e) => {
      if (e.touches.length !== 1) return;
      currentX = e.touches[0].clientX;
      const deltaX = currentX - startX;
      const deltaY = e.touches[0].clientY - startY;

      // Check if swiping left primarily
      if (deltaX < 0 && Math.abs(deltaX) > Math.abs(deltaY)) {
        isSwiping = true;
        this.container.style.transform = `translateX(${deltaX}px)`;
        const opacity = Math.max(0, 1 - Math.abs(deltaX) / 180);
        this.container.style.opacity = opacity;
      }
    }, { passive: true });

    this.container.addEventListener("touchend", () => {
      const deltaX = currentX - startX;
      this.container.style.transition = "transform 0.3s ease, opacity 0.3s ease";

      if (isSwiping && deltaX < -40) {
        // Dismiss widget when swiped left
        this.container.style.transform = "translateX(-120%)";
        this.container.style.opacity = "0";
        this.isUserDismissed = true;
        this.stopAudio();
        setTimeout(() => {
          this.hide();
        }, 300);
      } else {
        // Reset position
        this.container.style.transform = "";
        this.container.style.opacity = "";
      }
      isSwiping = false;
    });
  },

  toggleCollapse(explicitState) {
    this.isCollapsed = explicitState !== undefined ? explicitState : !this.isCollapsed;
    try {
      localStorage.setItem("np_widget_collapsed", this.isCollapsed);
    } catch (e) {}
    const toggleIcon = document.getElementById("np-toggle-icon");
    if (this.isCollapsed) {
      this.container.classList.add("np-collapsed");
      if (toggleIcon) toggleIcon.className = "fa-solid fa-chevron-up";
    } else {
      this.container.classList.remove("np-collapsed");
      if (toggleIcon) toggleIcon.className = "fa-solid fa-chevron-down";
    }
  },

  _injectStyles() {
    if (document.getElementById('now-playing-styles')) return;

    const style = document.createElement('style');
    style.id = 'now-playing-styles';
    style.textContent = `
      .np-widget {
        position: fixed;
        bottom: 20px;
        left: 20px;
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 15px;
        background-color: rgba(0, 0, 0, 0.75);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        max-width: 320px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        transform: translateY(0);
        opacity: 1;
        transition: transform 0.5s ease, opacity 0.5s ease, padding 0.3s ease, max-width 0.3s ease, border-radius 0.3s ease;
      }

      .np-widget.hidden {
        transform: translateY(20px);
        opacity: 0;
        pointer-events: none;
      }

      .np-art-container {
        position: relative;
        width: 48px;
        height: 48px;
        flex-shrink: 0;
        transition: width 0.3s ease, height 0.3s ease;
      }

      .np-art {
        width: 100%;
        height: 100%;
        border-radius: 6px;
        object-fit: cover;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
      }
      
      .np-play-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 24px;
        height: 24px;
        background-color: rgba(0, 0, 0, 0.6);
        border: 1px solid rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 10px;
        transition: all 0.2s ease;
        z-index: 10;
      }
      
      .np-play-btn:hover {
        background-color: #1DB954; /* Spotify Green */
        border-color: #1DB954;
        transform: translate(-50%, -50%) scale(1.1);
      }
      
      .np-play-btn.hidden {
        display: none;
      }

      .np-equalizer {
        position: absolute;
        bottom: 2px;
        right: 2px;
        display: flex;
        gap: 2px;
        align-items: flex-end;
        height: 12px;
        z-index: 5;
      }
      
      .np-equalizer.hidden {
        display: none;
      }

      .np-bar {
        width: 3px;
        background-color: #1DB954; /* Spotify Green */
        border-radius: 1px;
      }

      .np-bar-1 { animation: np-bounce 0.6s infinite ease-in-out alternate; }
      .np-bar-2 { animation: np-bounce 0.8s infinite ease-in-out alternate 0.2s; }
      .np-bar-3 { animation: np-bounce 0.5s infinite ease-in-out alternate 0.4s; }

      @keyframes np-bounce {
        0%, 100% { height: 3px; }
        50% { height: 10px; }
      }

      .np-info {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        flex: 1;
        min-width: 0;
      }

      .np-label {
        font-size: 10px;
        color: #1DB954;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        display: flex;
        align-items: center;
        gap: 4px;
        margin-bottom: 2px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      
      .np-label.offline {
        color: #b3b3b3; /* Grey for offline */
      }

      .np-track-name {
        color: #ffffff;
        font-size: 14px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-decoration: none;
      }
      
      .np-track-name:hover {
        text-decoration: underline;
      }

      .np-artist-name {
        color: #b3b3b3;
        text-transform: capitalize;
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      
      .np-time-ago {
        color: #717171;
        font-size: 10px;
        margin-top: 2px;
        font-style: italic;
      }

      .np-toggle-btn {
        background: transparent;
        border: none;
        color: rgba(255, 255, 255, 0.7);
        font-size: 11px;
        cursor: pointer;
        padding: 4px 6px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: color 0.2s ease, background-color 0.2s ease;
        margin-left: auto;
        flex-shrink: 0;
      }

      .np-toggle-btn:hover {
        color: #ffffff;
        background-color: rgba(255, 255, 255, 0.15);
      }

      /* Compact / Collapsed Mode (PC & Mobile) */
      .np-widget.np-collapsed {
        padding: 6px 12px;
        max-width: 250px;
        border-radius: 20px;
        cursor: pointer;
      }

      .np-widget.np-collapsed .np-artist-name,
      .np-widget.np-collapsed .np-time-ago {
        display: none;
      }

      .np-widget.np-collapsed .np-art-container {
        width: 34px;
        height: 34px;
      }

      .np-widget.np-collapsed .np-track-name {
        font-size: 12px;
        max-width: 130px;
      }

      .np-widget.np-collapsed .np-label {
        font-size: 9px;
        margin-bottom: 0px;
      }

      @media (max-width: 640px) {
        .np-widget {
          bottom: 12px;
          left: 12px;
          max-width: calc(100vw - 24px);
          touch-action: pan-y;
        }
      }
    `;
    document.head.appendChild(style);
  },

  updateUI(track) {
    if (this.isUserDismissed) {
      this.hide();
      return;
    }

    if (track) {
      console.log("Widget Update - API Track:", track.name, "Is Playing:", track.isPlaying);
    }

    const art = document.getElementById("np-art");
    const link = document.getElementById("np-link");
    const artist = document.getElementById("np-artist");
    const label = document.getElementById("np-label");
    const equalizer = document.getElementById("np-equalizer");
    const timeAgo = document.getElementById("np-time-ago");

    if (track) {
      this.lastTrackData = track;
      art.src = (track.image && track.image.trim() !== '') ? track.image : "src/images/icons/spotify_icon.png";
      link.textContent = track.name;
      link.href = track.url;

      const artistName = (typeof track.artist === 'object' && track.artist['#text'])
        ? track.artist['#text']
        : (track.artist || "Unknown Artist");

      artist.textContent = artistName;

      // --------------- AUDIO PREVIEW LOGIC ---------------
      const newTrackKey = `${track.name}-${artistName}`;

      if (this.currentTrackKey !== newTrackKey) {
        this.currentTrackKey = newTrackKey;
        this.stopAudio();
        this.fetchAndSetPreview(track.name, artistName);
      }
      // ---------------------------------------------------

      const nowText = (window.I18nManager) ? window.I18nManager.t("spotify.nowListening") : "Talha's Now Listening";
      const lastText = (window.I18nManager) ? window.I18nManager.t("spotify.lastPlayed") : "Talha's Last Played";
      const agoSuffix = (window.I18nManager) ? window.I18nManager.t("spotify.ago") : "ago";

      if (track.isPlaying) {
        label.innerHTML = `<i class="fa-brands fa-spotify"></i> ${nowText}`;
        label.className = "np-label";
        equalizer.classList.remove("hidden");
        timeAgo.textContent = "";
      } else {
        // DIRECT MODE: Even if not playing, show the last track immediately
        label.innerHTML = `<i class="fa-brands fa-spotify"></i> ${lastText}`;
        label.className = "np-label offline";
        equalizer.classList.add("hidden");

        const ago = this.getTimeAgo(track.timestamp);
        timeAgo.textContent = (window.I18nManager && window.I18nManager.currentLang === "tr")
          ? `${ago} ${agoSuffix}`
          : `${ago} ${agoSuffix}`;
      }

      this.show();
    } else {
      this.hide();
    }
  },

  // iTunes Audio Fetch
  async fetchAndSetPreview(trackName, artistName) {
    const btn = document.getElementById("np-play-btn");
    if (btn) btn.classList.add("hidden");
    this.previewUrl = null;

    try {
      if (!trackName || !artistName) return;
      const query = encodeURIComponent(`${artistName} ${trackName}`);
      const res = await fetch(`https://itunes.apple.com/search?term=${query}&media=music&entity=song&limit=1`);
      const data = await res.json();

      if (data.results && data.results.length > 0) {
        this.previewUrl = data.results[0].previewUrl;
        if (this.previewUrl && btn) {
          btn.classList.remove("hidden");
        }
      }
    } catch (e) {
      console.warn("iTunes Preview Error:", e);
    }
  },

  togglePreview() {
    if (!this.previewUrl) return;
    if (this.isPlayingPreview) {
      this.audioElement.pause();
      this.isPlayingPreview = false;
    } else {
      this.audioElement.src = this.previewUrl;
      this.audioElement.play().catch(console.error);
      this.isPlayingPreview = true;
    }
    this.updatePlayButton();
  },

  stopAudio() {
    if (!this.audioElement) return;
    this.audioElement.pause();
    this.audioElement.currentTime = 0;
    this.isPlayingPreview = false;
    this.updatePlayButton();
  },

  updatePlayButton() {
    const icon = document.getElementById("np-play-icon");
    if (!icon) return;
    icon.className = this.isPlayingPreview ? "fa-solid fa-pause" : "fa-solid fa-play";
  },

  getTimeAgo(timestamp) {
    if (!timestamp) return "";
    const now = Math.floor(Date.now() / 1000);
    const diff = now - timestamp;
    if (diff < 60) return `${diff}s`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
    return `${Math.floor(diff / 86400)}d`;
  },

  show() {
    if (this.container) this.container.classList.remove("hidden");
  },

  hide() {
    if (this.container) this.container.classList.add("hidden");
  },

  // Main Polling Loop
  async startPolling() {
    // Önce çalışan eski bir sayaç varsa onu durduruyoruz (Zombi engelleme)
    if (this.pollInterval) clearInterval(this.pollInterval);

    const check = async () => {
      try {
        // API'den veriyi çek
        const track = await LastFmService.fetchRecentTracks();
        this.updateUI(track);
      } catch (e) {
        console.error("Polling Error:", e);
      }
    };

    // İlk çalıştırma
    await check();

    // Sayacı değişkene atıyoruz ki sonra durdurabilelim
    this.pollInterval = setInterval(check, 5000);
  }
};

// Global Init
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => NowPlayingWidget.init());
} else {
  NowPlayingWidget.init();
}
