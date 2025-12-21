// Configuration Template for MapLibre ROV Visualization
// Copy this file to config.js and update with your settings

export const config = {
    // Tile server configuration
    TILE_SERVER: {
        host: 'localhost',  // Change to your server IP/hostname
        port: 8080,         // Change to your tile server port
        protocol: 'http'    // Use 'https' for production
    },
    
    // WebSocket server URLs
    WS_URLS: {
        SHIP_GPS: 'ws://localhost:8081',           // Ship GPS data
        ROV_GPS: 'ws://localhost:8082',            // ROV GPS data
        ADCP: 'ws://localhost:8083',               // ADCP current data
        ROV_TELEMETRY: 'ws://localhost:8084',      // ROV depth/heading
        MULTIBEAM: 'ws://localhost:8085',          // Multibeam swath data
        OCEANOGRAPHIC: 'ws://localhost:8086'       // Oceanographic sensors
    },
    
    // Optional: External map tile services (if needed)
    EXTERNAL_TILES: {
        // Uncomment and add your API keys if using external tile services
        // MAPTILER_KEY: 'your-maptiler-key-here',
        // MAPBOX_TOKEN: 'your-mapbox-token-here'
    }
};

// Helper function to get tile server URL
export function getTileServerUrl(path = '') {
    const { protocol, host, port } = config.TILE_SERVER;
    return `${protocol}://${host}:${port}${path}`;
}

// Helper function to get WebSocket URL by service
export function getWebSocketUrl(service) {
    return config.WS_URLS[service] || null;
}
