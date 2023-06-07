<template>
  <div class="body">
    <div class="div-block-2">
      <div class="img-logo">
        <img
          src="../assets/login/6457cdde93a9b2235ddae9e7_Screenshot 2023-05-07 231145.jpg"
          loading="lazy"
          class="image-2"
        />
      </div>
      <div class="content">
        <div class="text-block-4">
          <span class="text-span-3">CYBER</span
          ><span class="text-span-4">PAY</span>
        </div>
        <div class="text-block-5">WALLET</div>
      </div>
    </div>
    <div class="div-block">
      <div class="text-block">
        C&nbsp;Y&nbsp;B&nbsp;E&nbsp;R&nbsp;<span class="text-span-2"
          >P&nbsp;A&nbsp;Y</span
        >
      </div>
      <div class="text-block-6">กรุณาเข้าสู่ระบบก่อนใช้งาน</div>
      <div class="form-block-2 w-form">
        <form
          id="email-form"
          name="email-form"
          data-name="Email Form"
          method="get"
          class="form-2"
          aria-label="Email Form"
        >
          <InputText
            style="width: 100%"
            placeholder="Email"
            id="username"
            aria-describedby="username-help"
          /><label for="name-2" class="field-label-email-error"
            >อีเมลไม่ถูกต้อง</label
          ><InputText
            style="width: 100%"
            placeholder="Password"
            type="password"
            id="username"
            aria-describedby="username-help"
          /><label for="email-2" class="field-label-3-copy"
            >รหัสผ่านไม่ถูกต้อง</label
          ><Button
            style="justify-content: center"
            variant-color="blue"
            type="submit"
            value="เข้าสู่ระบบ"
            data-wait="Please wait..."
            class="button-edit"
            >เข้าสู่ระบบ</Button
          >
        </form>
        <div
          class="w-form-done"
          tabindex="-1"
          role="region"
          aria-label="Email Form success"
        ></div>
        <div
          class="w-form-fail"
          tabindex="-1"
          role="region"
          aria-label="Email Form failure"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url(../styles/login.css);
</style>

<script setup lang="ts">
import { ref } from "vue";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

const value = ref(null);
</script>
