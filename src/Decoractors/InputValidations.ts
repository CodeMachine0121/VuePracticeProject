import type {InputEventArguments} from "@/Models/InputEventArguments";
import {show} from "uspin";
import {delay} from "msw";
function InputKeyValidation(target: any, key: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]){
        const inputEvent: InputEventArguments = args[0];
        const index = inputEvent.index;
        if(inputEvent.inputKey === 'Backspace'){
          inputEvent.inputValue[index] = '';
          inputEvent.inputRefs[index-1]?.select();
          return;
        }
        originalMethod.apply(this, args)
    }
    return descriptor;
}
function RegexValidation(target: any, key: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]){
        const inputEvent = args[0];
        const digitRegex = /^$|^[0-9]+$/
        if(!digitRegex.test(inputEvent.inputValue[inputEvent.index])){
            throw new Error("Validation failed in RegexValidation");
        }
        originalMethod.apply(this, args)
    }
    return descriptor;
}
function LengthValidation(target: any, key: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]){
        const inputEvent = args[0];
        const length = inputEvent.inputValue[inputEvent.index].length;
        if(length> 1){
            throw new Error("Validation failed in LengthValidation");
        }
        originalMethod.apply(this, args)
    }
    return descriptor;
}

function SubmitValidation(target: any, key: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
        const inputEvent = args[0];
        const inputValue = inputEvent.inputValue.join('');
        const index = inputEvent.index;
        const btn = inputEvent.buttonRef;
        const loading = inputEvent.loadingRef;
        if (index === 3 && inputValue.length === 4) {
            show(loading);
            await delay(5000)
            btn?.click();
        }
        originalMethod.apply(this, args)
    }
    return descriptor;
}
export class InputValidator{
    @InputKeyValidation
    @RegexValidation
    @LengthValidation
    @SubmitValidation
    validate(inputEvent: InputEventArguments){
        inputEvent.inputRefs[inputEvent.index+1]?.select();
    }
}
