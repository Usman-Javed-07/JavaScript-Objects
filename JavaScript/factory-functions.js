

function creteCircle (radius) {
   return {
    radius,
    draw (){
        console.log('draw');
       }
   };
    
};

 const circle1 = creteCircle (1);
 console.log(circle1);

 const circle2 = creteCircle(2);
 console.log (circle2);