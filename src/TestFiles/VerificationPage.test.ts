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
        test("should be able to enter digit", async () => {
            await inputboxs[0].setValue('1')
            expect(inputboxs[0].element.value ).toBe('1');
            await inputboxs[0].trigger('input')
            expect(inputboxs[0].element.value ).toBe('1');
            expect(inputboxs[1].element.value ).toBe('');
        });
        test("should be able to remove digit", async () => {
            await inputboxs[0].trigger('keydown', {key: '1'});
            await inputboxs[1].trigger('keydown', {key: '2'});
            await inputboxs[1].trigger('keydown', {key: 'Backspace'});
            expect(inputboxs[1].element.value ).toBe('');
        });

        test("should submit form once 4-digit is entered", async () => {
            await inputboxs[0].setValue('1')
            await inputboxs[1].setValue('2')
            await inputboxs[2].setValue('3')
            await inputboxs[3].trigger('input', {key: '4'});

            await wrapper.find('button[type="submit"]').trigger('click');
            expect(wrapper.emitted('click')).toBeTruthy();
        });

        test("should only accept one digit", async () => {
            await inputboxs[0].trigger('keydown',{key: '123'})
            expect(inputboxs[0].element.value).toBe('');
        });
        test("should only accept digit not character", async () => {
            await inputboxs[0].trigger('keydown',{key: 'a'})
            expect(inputboxs[0].element.value).toBe('');
        });
    });


});