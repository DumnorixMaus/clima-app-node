const axios = require('axios');

getDireccionLatLgn = async(direccion) => {
    let encodedUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyBieHfqr6-3PKpl6aTiaR_BAZW5xsqgfB4`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No se encontro resultados para la ciudad ${ direccion}`);
    }

    let direccion = resp.data.results[0];
    let coords = direccion.geometry.location;

    return {
        direccion: direccion.formatted_address,
        lat: coords.lat,
        lgn: coords.lng
    }

}

module.exports = {
    getDireccionLatLgn
}







/*axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyBieHfqr6-3PKpl6aTiaR_BAZW5xsqgfB4`)
    .then(resp => {
        let direccion = resp.data.results[0];
        let coords = direccion.geometry.location;
        console.log('Direccion: ', direccion.formatted_address);
        console.log('Lat: ', coords.lat);
        console.log('Lng: ', coords.lng);
        //console.log(JSON.stringify(resp.data, undefined, 2));
        // console.log(resp);
    })
    .catch(e => console.log('ERROR!!', e)); */