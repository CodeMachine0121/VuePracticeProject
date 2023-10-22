
function RegexValidation(target: any, key: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]){
        let inputValue = args[0];
        let digitRegex = /^$|^[0-9]+$/
        if(!digitRegex.test(inputValue)){
            throw new Error("Validation failed in RegexValidation");
        }
        originalMethod.apply(this, args)
    }
    return descriptor;
}
function lengthValidation(target: any, key: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]){
        let inputValue = args[0];
        const length = inputValue.length;
        if(length> 1){
            throw new Error("Validation failed in LengthValidation");
        }
        originalMethod.apply(this, args)
    }
    return descriptor;
}

export class InputValidator{
    @RegexValidation
    @lengthValidation
    validtion(inputValue: string, index: number){
        return inputValue;
    }
}