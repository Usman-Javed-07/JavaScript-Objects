//   address Object

const address = {
street : 437,
city : 'islamabad',
zipCode : 143
};

function showAddress (address) {
    for (let key in address)
    console.log(key, address[key]);
}
showAddress(address);