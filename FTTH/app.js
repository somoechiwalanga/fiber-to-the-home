document.addEventListener('DOMContentLoaded', function () {
    // Initialize the map
    var map = L.map('map').setView([51.505, -0.09], 13);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    // Function to fetch and parse data from GeoServer
    function fetchGeoServerData() {
        const url = 'http://localhost:8080/geoserver/web/wicket/bookmarkable/org.geoserver.web.demo.MapPreviewPage?5&filter=false';
        
        axios.get(url)
            .then(response => {
                // Parse the HTML response
                const parser = new DOMParser();
                const doc = parser.parseFromString(response.data, 'text/html');

                // Extract relevant information (example: extracting WMS service URL)
                const wmsLayerUrl = extractWMSLayerUrl(doc);
                
                if (wmsLayerUrl) {
                    // Add WMS layer to the map
                    L.tileLayer.wms(wmsLayerUrl, {
                        layers: 'topp:states', // replace with your layer name
                        format: 'image/png',
                        transparent: true
                    }).addTo(map);
                }
            })
            .catch(error => {
                console.error('Error fetching GeoServer data:', error);
            });
    }

    // Function to extract WMS layer URL (customize based on your actual response structure)
    function extractWMSLayerUrl(doc) {
        const wmsLayerLink = doc.querySelector('a[href*="wms"]');
        return wmsLayerLink ? wmsLayerLink.href : null;
    }

    // Expose the function to the global scope
    window.fetchGeoServerData = fetchGeoServerData;
});
