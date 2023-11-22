<script setup lang="ts">
import OtpVerify from '@/components/OtpVerify.vue'
import Profile from '@/components/Profile.vue'
import {useLoginStore} from "@/Storage/Storage";

const store = useLoginStore();
const update= ()=>{
  store.update()
}
</script>

<template>
  <Profile v-if="!store.IsLogin" @logout="update"/>
  <OtpVerify v-else @login="update"/>
</template>
