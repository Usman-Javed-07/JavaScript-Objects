// enumerating properties of an object

const circle = {
    radius : 1,
    draw : function (){
        console,log(draw)
    }
};

// for in 
for (let key in circle)
    console.log(key , circle[key]);


// for of is only use for array and maps 

for (let key of Object.keys(circle))   // keys is a object constructor method
    console.log(key);


    // 
    for (let entry of Object.entries(circle))        
        console.log(entry);


    //  

    if ('draw' in circle)
        console.log('yes');
