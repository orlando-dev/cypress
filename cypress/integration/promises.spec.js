it('sem testes, ainda', () => {})

const getSomething = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(13);
        }, 1000)
    })
}   


const system = async () => {
    console.log('iniciar');
    const some = await getSomething();
    console.log("Somethung is " + some);
    console.log('terminou');
}


system();