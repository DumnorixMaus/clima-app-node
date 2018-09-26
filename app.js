const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obrener el clima',
        demand: true
    }
}).argv;

// el punto (.) argv es para obtener los argumentos

let getInfo = async(direccion) => {

    try {

        let coors = await lugar.getDireccionLatLgn(direccion);
        let temp = await clima.getClima(coors.lat, coors.lgn);

        return `La temperatura de ${ coors.direccion } es de ${ temp }°`;

    } catch (error) {

        return `No se pudo determinar el clima en ${ direccion }`;
    }

}

getInfo(argv.direccion).then(info => console.log(info))
    .catch(e => console.log(e));


// lugar.getDireccionLatLgn(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e));

// clima.getClima(16.7592283, -93.1722497)
//     .then(clim => console.log(clim))
//     .catch(e => console.log(e));