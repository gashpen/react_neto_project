interface FormInterface{
    id?:string;
    name:string;
    price:string;
    product?:{
        name:string,
        price:string
    }
}

export default FormInterface;