const fs = require('fs');
const fetch = require('node-fetch');
const url = 'https://swapi.dev/api/people/';

fetch(url)
    .then(response => {
        // handle the response
        console.log(response);
    })
    .catch(error => {
        // handle the error
        console.log('error: ', error);
    });
