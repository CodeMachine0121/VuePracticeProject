import {UnwrapRef} from "vue/dist/vue";

export type InputEventArguments= {
    inputKey: string;
    inputValue: string;
    index: number;
    buttonRef: UnwrapRef<HTMLButtonElement | null>;
    inputRefs: UnwrapRef<HTMLInputElement | null>[];
}
