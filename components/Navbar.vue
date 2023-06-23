<template>
  <div class="div-block-tran">
      <div class="icon-menu" id="icon-menu">
        <img src="../assets/navbar/menu.svg" alt="">
      </div>
      <div class="div-block-7">
        <a
          href="https://sanhanats-stunning-site.webflow.io/#"
          class="link-block-2 w-inline-block"
          ><div class="text-block-9">Logout</div>
          <img
            src="../assets/sidebar-navbar-dashboard/6458b98c5f4e30a6c1bda778_logout.png"
            loading="lazy"
            alt=""
        /></a>
        <div class="div-block-4-tranin">
          <div><div class="text-block-10">Account:</div></div>
          <div><div class="text-block-11">Sanhanat Sukkoram</div></div>
          <img
            src="../assets/sidebar-navbar-dashboard/6457cdde93a9b2235ddae9e7_Screenshot 2023-05-07 231145.jpg"
            loading="lazy"
            sizes="39px"
            srcset="
              https://uploads-ssl.webflow.com/645569763f0d3435f5862bb1/6457cdde93a9b2235ddae9e7_Screenshot%202023-05-07%20231145-p-500.jpg 500w,
              https://uploads-ssl.webflow.com/645569763f0d3435f5862bb1/6457cdde93a9b2235ddae9e7_Screenshot%202023-05-07%20231145.jpg       538w
            "
            alt=""
            class="image-3"
          />
        </div>
      </div>
    </div>
</template>

<script>
// import { CButton } from '@chakra-ui/vue';


export default {
   async mounted() {
    await this.pressMenu();

   },
   methods: {
    async pressMenu() {

      let sidebar = document.getElementById("div-block-6");
      let menuBtn = document.getElementById("icon-menu");
      menuBtn.onclick = function() {
        sidebar.classList.remove("sidebar-close");
        sidebar.classList.add("sidebar-active");
        console.log(sidebar);
        
      };

    }
   }

}

</script>

<style scoped>
  /* @import url(../styles/navbar.css); */
  @import url(../styles/NavbarSidebarDashboard.css);

  .div-block-tran {
    margin: 0;
    padding: 0;
    top: 0;
    justify-content: flex-end;
    padding-right: 40px;
  }


  @media screen and (max-width: 1920px)   {
    
    .icon-menu {
      display: none;
    }

  }

  @media screen and (max-width: 991px) {

    .icon-menu {
      display: flex;
    }

    .div-block-tran {
      justify-content: space-between !important;
    }
  }




</style>


