import type {Ref, UnwrapRef} from "vue";

export interface SpinConfig {
    logoColor?: string // default: '#fff'
    size?: string // default: '5em'
    bgColor?: string // default: '#ddd'
    opacity?: number // default: 0.5
}

export declare function show(targetRef: Ref<Element>, config?: SpinConfig): void

export declare function hide(targetRef: Ref<Element>): void
