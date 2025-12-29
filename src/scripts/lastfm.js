/**
 * Service to interact with Last.fm API
 */
const LastFmService = {
  /**
   * Fetches the most recent track for the configured user
   * @returns {Promise<Object|null>} The track object
   */
  async fetchRecentTracks() {
    if (!CONFIG.LASTFM_API_KEY || CONFIG.LASTFM_API_KEY === "YOUR_API_KEY_HERE") {
      console.warn("Last.fm API Key is missing in config.js");
      return null;
    }

    // extended=1 might provide more info, though getrecenttracks is often sparse on duration
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${CONFIG.LASTFM_USERNAME}&api_key=${CONFIG.LASTFM_API_KEY}&format=json&limit=5&extended=1&cb=${Date.now()}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Last.fm API Error: ${response.status}`);
      }

      const data = await response.json();
      const tracks = data.recenttracks.track;

      if (!tracks || tracks.length === 0) {
        return null; // No history at all
      }

      const currentTrack = tracks[0];
      const isNowPlaying = currentTrack["@attr"] && currentTrack["@attr"].nowplaying === "true";
      
      // Attempt to get duration (only works if extended=1 provides it, usually it's 0 for recenttracks)
      // but we treat it as best-effort.
      // Sometimes 'duration' is a property of the track object in extended mode.
      const duration = currentTrack.duration ? parseInt(currentTrack.duration, 10) : 0;

      return {
        isPlaying: isNowPlaying,
        name: currentTrack.name,
        // Safe artist extraction
        artist: currentTrack.artist?.["#text"] || currentTrack.artist?.name || "Unknown Artist",
        // Safe image extraction using optional chaining
        image: currentTrack.image?.[3]?.["#text"] || currentTrack.image?.[2]?.["#text"] || null,
        url: currentTrack.url,
        // If playing, use current time. If history, use the UTS timestamp.
        timestamp: isNowPlaying ? Math.floor(Date.now() / 1000) : parseInt(currentTrack.date.uts, 10),
        duration: duration // In seconds (often 0)
      };

    } catch (error) {
      console.error("Failed to fetch Last.fm data:", error);
      return null;
    }
  }
};
