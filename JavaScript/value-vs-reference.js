//  value vs reference 


// value

// let x = 10 ;
// let y = x ;
                // in this case the value of x is updated to 20 but the valaue of y is 10 
// x = 20;



// reference 

let x = { value : 20};
let y = x;

x.value = 30;


// another example

let obj = {value : 10};


function increase (obj) {
   obj.value++;
}
increase(obj);
console.log(obj)
