import type {UnwrapRef} from "vue";

export class InputEventArguments {
    inputKey:   string = '';
    inputValue: string[]= [];
    index: number= 0;
    buttonRef: UnwrapRef<HTMLButtonElement | null>= null;
    inputRefs: UnwrapRef<HTMLInputElement | null>[]= [];
}
