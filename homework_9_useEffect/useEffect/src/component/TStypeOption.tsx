interface Option{
    id?:number;
    name?:string;
    info?:{
        avatar?:string,
        details?:{
            city?:string,
            company?:string,
            position?:string,
        },
        id?:number|undefined,
        name?:string, 
    }
}

export default Option