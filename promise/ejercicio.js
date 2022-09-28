    
    ////////////
    const ejercicio1 = new Promise((resolve, reject) => {
        if(true){
            let x = 1;
            setTimeout(()=>{
                resolve(x);
            },2000);
            
        }else {
            reject("fail");
        }
        
       });
       ejercicio1
       .then(value => {
        console.log(value);
        return ++value;
        })
        .then(value => {
        console.log(value);
        return ++value;
        })
        .then(value => {
        console.log(value);
        return ++value;
        })
        .then(value => {
        console.log(value);
        return ++value;
        })
        .then(value => {
        console.log(value);

        })
        .catch(value => {
        console.log(value);
        })
 
        ////intervalos then

        const numIntervalo= new Promise(function(resolve,reject){
            resolve("CONTANDO");
            reject("fail");

        });
        let x= 1;
        let tiempo = 1000;
        setInterval
