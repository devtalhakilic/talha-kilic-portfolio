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
    this.container.className = "np-widget hidden";

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
    `;

    document.body.appendChild(this.container);
    
    // Event Listeners
    const btn = document.getElementById("np-play-btn");
    if(btn) btn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.togglePreview();
    });

    this.startPolling();
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
        background-color: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        max-width: 300px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        transform: translateY(0);
        opacity: 1;
        transition: transform 0.5s ease, opacity 0.5s ease;
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
    `;
    document.head.appendChild(style);
  },

  updateUI(track) {
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
      art.src = track.image || "src/Images/spotify_icon.png";
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

      if (track.isPlaying) {
          label.innerHTML = '<i class="fa-brands fa-spotify"></i> Talha\'s Now Listening';
          label.className = "np-label"; 
          equalizer.classList.remove("hidden");
          timeAgo.textContent = "";
      } else {
          // DIRECT MODE: Even if not playing, show the last track immediately
          label.innerHTML = '<i class="fa-brands fa-spotify"></i> Talha\'s Last Played';
          label.className = "np-label offline"; 
          equalizer.classList.add("hidden");
          
          const ago = this.getTimeAgo(track.timestamp);
          timeAgo.textContent = ago + " ago";
      }

      this.show();
    } else {
      this.hide();
    }
  },
  
  // iTunes Audio Fetch
  async fetchAndSetPreview(trackName, artistName) {
      const btn = document.getElementById("np-play-btn");
      if(btn) btn.classList.add("hidden");
      this.previewUrl = null;

      try {
          if(!trackName || !artistName) return;
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
     if(this.container) this.container.classList.remove("hidden");
  },
  
  hide() {
     if(this.container) this.container.classList.add("hidden");
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
          } catch(e) {
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
