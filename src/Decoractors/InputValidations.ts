import type {InputEventArguments} from "@/Models/InputEventArguments";
function InputKeyValidation(target: any, key: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]){
        const inputEvent: InputEventArguments = args[0];
        const index = inputEvent.index;
        if(inputEvent.inputKey === 'Backspace'){
          inputEvent.inputValue = '';
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
        if(!digitRegex.test(inputEvent.inputValue)){
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
        const length = inputEvent.inputValue.length;
        if(length> 1){
            throw new Error("Validation failed in LengthValidation");
        }
        originalMethod.apply(this, args)
    }
    return descriptor;
}

function SubmitValidation(target: any, key: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]){
        const inputEvent = args[0];
        const index = inputEvent.index;
        const btn = inputEvent.buttonRef;

        if( index === 3){
            console.log("submit")
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