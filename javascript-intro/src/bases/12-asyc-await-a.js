const miPromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("Tenemos un valor en la promesa");
            reject('Reject en mi promesa')
        }, 1000);
    });
};

const medirTiempoAsync = async () => {

    try {
        console.log("Inicio");

        const respuesta = await miPromesa()
        console.log(respuesta)

        console.log("Fin");

        return 'Fin de medir tiempo async'

    } catch (error) {
        throw 'Error en medir tiempo asyc'
    }

}

medirTiempoAsync()
.then(valor => console.log(valor))
.catch(err => console.log(err))
