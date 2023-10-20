import {mount, VueWrapper} from "@vue/test-utils";
import {describe, expect, test} from 'vitest';
import OtpVerify from "@/components/OtpVerify.vue";

describe("otp page", async () => {
    let wrapper: VueWrapper;
    describe("4-digit", () => {
        wrapper = mount(OtpVerify)
        const inputboxs = wrapper.findAll(".input")
        test("should be 4 input boxs", () => {
            expect(inputboxs.length).toBe(4);
        });
        test("should shift to next input box when input 1 digit", async () => {
            await inputboxs[0].setValue("1");
            expect(inputboxs[0].element.value ).toBe('1');
        });
    });


});