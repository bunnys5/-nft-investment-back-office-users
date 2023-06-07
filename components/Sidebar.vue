<template>

    <div class="div-block-6">
      <div class="div-block-8">
        <div class="close-icon" >
          <img class="img-close" src="../assets/sidebar/close.svg" alt="" sizes="50px" />
        </div>
        <div class="div-block-9">
          <img
            src="../assets/sidebar-navbar-dashboard/6457cdde93a9b2235ddae9e7_Screenshot 2023-05-07 231145.jpg"
            loading="lazy"
            sizes="50px"
            alt=""
            class="image-6"
          />
        </div>
        <div class="text-block-12">
          CYBER<span class="text-span-5">PAY</span>
        </div>
        <div class="div-block-11"><div class="div-block-10"></div></div>
        <div class="div-block-15">
          <div class="div-block-16">
            <img
              src="../assets/sidebar-navbar-dashboard/645a06bc33be2c52e0f51299_chartsquare.svg"
              loading="lazy"
              alt=""
              class="image-8"
            /><NuxtLink class="link" to="../dashboard">Dashboard</NuxtLink>
            <img
              src="../assets/sidebar-navbar-dashboard/645a0c25aebb03a1063120a0_Rectangle 111.svg"
              loading="lazy"
              alt=""
              class="image-10"
            />
          </div>
          <div class="div-block-17">
            <img
              src="../assets/sidebar-navbar-dashboard/645a10ad7a6d805d10369ad1_Vector.svg"
              loading="lazy"
              alt=""
              class="image-11"
            />
            <NuxtLink class="link-2" to="../transaction">Transaction</NuxtLink>
          </div>

          <div class="div-block-18-copy-copy">
            <div class="div-block-25-copy-copy">
              <img
                src="../assets/sidebar-navbar-dashboard/645a1cc2e9042e743894a702_Group 1261152691.svg"
                loading="lazy"
                alt=""
                class="image-18"
              />
            </div>
            <div class="div-block-26-copy-copy">
              <NuxtLink class="link-3-copy-copy" to="../dividend">Dividend</NuxtLink>
            </div>
          </div>
          <div class="div-block-18-copy-copy-copy">
            <div class="div-block-25-copy-copy-copy">
              <img
                src="../assets/sidebar-navbar-dashboard/645a1e7249c0961222b90fbd_Vector (1).svg"
                loading="lazy"
                alt=""
                class="image-20"
              />
            </div>
            <div class="div-block-26-copy-copy-copy">
              <NuxtLink class="link-3-copy-copy-copy" to="../Pools">Pools</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>


  </template>

  <script lang="ts">

  </script>

  <style scoped>
  @import url("../styles/sidebar.css");

  .div-block-6 {
    position: fixed;
    top: 0;
    padding: 0;
    margin: 0;
    left: 0;
  }

  @media screen and (max-width: 991px)   {
    
    .div-block-6 {
      display: none !important;
    }

  }

  </style>

