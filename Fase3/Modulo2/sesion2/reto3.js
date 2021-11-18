const https = require('https');
var fs = require('fs');
const path = require('path')

const filepath = path.join(__dirname, '/assets/nasa.jpg');

function getAPOD() {
    https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        let data = '';

        resp.setEncoding('utf8');
        //trozos de información recibida
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // La respuesta completa ha sido recibida. Imprime el resultado
        resp.on('end', () => {
            let body = JSON.parse(data);
            console.log(' Título:', body.explanation);
            console.log('\n Explicación: ', body.explanation);
            console.log('\n URL:', body.url);
            descargarImagen(body.url, filepath);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}

function descargarImagen(url, rutaLocal) {
    // const fullUrl = url.split('?')[0];
    // https://www.youtube.com/watch?v=7NykS2kv_k8
    // https://www.youtube.com/embed/7NykS2kv_k8
    // const baseUrl = fullUrl.slice(24, -1);
    // const id = fullUrl.split('/')[4];
    // const nuevaUrl = baseUrl + 'watch?v=' + id;
    // console.log(baseUrl);
    console.log('Descargando imagen ');
    var file = fs.createWriteStream(rutaLocal);
    var request = https.get(url, function (response) {
        response.pipe(file);
        console.log('imagen descargada en ' + filepath);
    });
}

getAPOD();