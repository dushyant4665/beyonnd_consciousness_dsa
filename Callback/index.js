

// callback hell 

setTimeout(() => {
    console.log('hello');
    setTimeout(() => {
        console.log('buddy');
        setTimeout(() => {
            console.log('how are you');
            setTimeout(() => {
                console.log('whaat are you doing');      
            },2000 );
        },2000);
    },2000)

},2000)
