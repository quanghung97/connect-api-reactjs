
var initialState = [
    {
        id : 1,
        name : "Iphone 6 Plus",
        price : 500,
        status : true
    },
    {
        id : 2,
        name : "Samsung",
        price : 323,
        status : false
    },
    {
        id : 3,
        name : "xiaomi",
        price : 443,
        status : true
    },
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];

    }
}

export default products;
