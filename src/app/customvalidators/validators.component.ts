import { AbstractControl } from "@angular/forms";

export class CustomValidators{

    static nameCheck(control:AbstractControl):{[key:string]:any}|null
    {
        const name:string = control.value
        console.log(name.includes('@'))
        if(name.includes('@'))
        {
            return {nameerror:true}
        }
        else{
            return null
        }
    }
}