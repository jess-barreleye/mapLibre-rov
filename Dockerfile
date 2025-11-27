FROM maptiler/tileserver-gl:latest

# Copy all mbtiles files from the maps folder
COPY maps/*.mbtiles /data/

# Copy config to enable all tilesets
COPY tileserver-config.json /data/config.json

# Expose port 8080
EXPOSE 8080
