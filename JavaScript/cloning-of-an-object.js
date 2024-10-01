    // cloning of an object 
    //  Object cloning is a way to create an exact copy of an object. Means that inherting all the properties of an another object into itself.


    const circle = {
        radius : 1,
        draw () {
            console.log('draw')
        }
    }

    // first way 

    // const another = {};
    // for (let key in circle)
    //     another[key] = circle[key];
    // console.log(another);



    // 2nd way 

    //   use object.assign  

    // const another = Object.assign ({} , circle);
    // console.log(another);


    // 3rd way 

    // use ...

    const another = {...circle};
    console.log(circle);