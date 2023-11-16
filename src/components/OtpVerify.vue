<script lang="ts" setup>
import {onMounted, ref} from "vue";
import type {InputEventArguments} from "@/Models/InputEventArguments";
import {InputValidator} from "@/Decoractors/InputValidations";
import { show } from 'uspin'

const loadingRef = ref<HTMLElement | null>(null)
const inputRefs = ref<Array<HTMLInputElement | null>>([]);
const buttonRef = ref<HTMLButtonElement | null>(null);
const inputValue = ref(['']);
const onKeyUp = ((index: number, event: KeyboardEvent)=>{
  const inputEventObj :InputEventArguments= {
   inputKey: event.key,
   inputValue: inputValue.value,
   inputRefs: inputRefs.value,
   index: index,
   buttonRef: buttonRef.value
  };

  try {
    const inputValidator = new InputValidator();
    inputValidator.validate(inputEventObj);
  }
  catch (e) {
    alert(e.message)
    console.log(e);
    inputValue.value[index] = "";
  }
})

const handleSubmit = (()=>{
  console.log('submit otp: '+inputValue.value.join(''));
});
onMounted(()=>{
  inputRefs.value[0]?.focus();
});

</script>

<template>
  <form class="otp-form" ref="form" @submit="handleSubmit">
    <div class="otp-container" ref="loadingRef">
      <h3 class="otp-title">Enter verification</h3>
      <div class="input-group">
        <input class="input"
               v-for="(i, index) in 4" :key="`key-${i}`"
               @keyup="onKeyUp(index, $event)"
               v-model="inputValue[index]"
               :ref="el => inputRefs[index] = el as HTMLInputElement"
        >
      </div>
    </div>
    <button hidden ref="buttonRef" type="submit" @click="show(<HTMLElement>loadingRef)">Submit</button>
  </form>
</template>
<style scoped>
.otp-container {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}
.otp-title {
  font-size: 2rem;
}

.input-group {
  display: flex;
  gap: 1rem;
}

.input-group > .input {
  width: 8rem;
  height: 12rem;
  text-align: center;
  font-size: 2rem;
}
</style>
