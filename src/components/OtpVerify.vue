<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {InputValidator} from "@/Decoractors/InputValidations";

const inputRefs = ref<Array<HTMLInputElement | null>>([]);
const buttonRef = ref<HTMLButtonElement | null>(null);
const inputValue = ref(['']);

const inputEvent = ((index: number)=>{
  if(inputValue.value[index] === ''){
    return;
  }


  try {
    const inputValidator = new InputValidator();
    inputValidator.validtion(inputValue.value[index], index);
    if (index == inputRefs.value.length-1){
      buttonRef.value?.click();
    }
  }
  catch (e) {
    console.log(e);
    inputValue.value[index] = "";
    return;
  }

  inputRefs.value[index+1]?.focus();
})
const onKeyDown = ((index: number, event: KeyboardEvent)=>{
  if(event.key === 'Backspace'){
    if(index === inputValue.value.length-1
        && inputValue.value[index] !== ''){
      inputValue.value[index] = '';
      return;
    }
    inputRefs.value[index-1]?.focus();
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
    <form class="otp-form" ref="form" @submit.prevent="handleSubmit">
      <div class="otp-container">
        <h3 class="otp-title">Enter verification</h3>
        <div class="input-group">
          <input class="input"
                 v-for="(i, index) in 4" :key="`key-${i}`"
                 @input="inputEvent(index)"
                 @keydown="onKeyDown(index, $event)"
                 v-model="inputValue[index]"
                 :ref="el => inputRefs[index] = el as HTMLInputElement"
          >
        </div>
      </div>
      <button ref="buttonRef" type="submit">Submit</button>
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
