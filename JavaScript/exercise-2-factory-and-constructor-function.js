//   factor and constructor function


// my code 

// const address = {
//     street : 617,
//     city : 'islamabad',
//     zipCode : 143
//     };


    
    // factory funciton 

    // function factoryFunction (address) {
       
    //     console.log(address)
    // }

    // factoryFunction(address);



    // constructor function 

    // function ConstructorFunction (address) {
    //     this.address = address;
    //     console.log(address);
    // }

    // ConstructorFunction (address);


    // mosh code

    // let address = createAddress ('a' , 'b' , 'c');

    let address = new Address ( 'a' , 'b' , 'c');
    console.log(address);

    console.log ();

    //   factory funciton
        function createAddress (street , city, zipcode){
            return {
                street,
                city,
                zipcode,
            };
        }

    //  constructor function

    function Address (street , city , zipCode) {
        this.street = street;
        this.city = city;
        this.zipCode = zipCode;
    }