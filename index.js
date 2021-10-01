console.log('Live Corona Cases Running...')

function liveupdatemap() {

    fetch('data.json')
        .then(response => response.json())
        .then(resp => {
            console.log(resp.data);



            // ON Map:-

            resp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                cases = element.infected;

                if (cases>255) {
                    color = 'rgb(255, 0, 0)';
                }
                else{
                    color = `rgb(${cases}, 0, 0)`;
                }

                // Marker (Indicates number of CoVid Cases by color-Strength)

                const marker = new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);

            });
        });
}

liveupdatemap();