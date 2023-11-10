interface Form{
    id?:string;
    name:string;
    price:string;
    product?:{
        name:string,
        price:string
    }
}

export default Form