function study(studing, studied, callback){
    //  console.log(studing,'studing')
    //  console.log(studied,'studied');
     callback()
     
}

function sleeping(){
    // console.log('sleeping');
}

study('dushyant','dushyant studied', sleeping);

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