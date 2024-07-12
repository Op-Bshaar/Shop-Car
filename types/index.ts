import { MouseEventHandler } from "react";

export interface customButtonProps {
    title:string;
    styles?:string;
    handleClick ?: MouseEventHandler<HTMLButtonElement>
    btnType?:"button"|"submit"
    textStyles:string
    rightIcon:string  
}
export interface FiltersProps{
      manufacturer:string,
      year:number,
      fuel:string,
      limit:number,
      model:string
}
export interface searchBarprops{
    manufacturer:string
    setManufacturer:(manufacturer:string)=>void;
}

export interface CarProps{
    city_mpg:number;
    class:string;
    combination_mpg:number,
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:number;
    model:string;
    transmission:string;
    year:number;
}