<template>
  <div>
    <Navbar />
    <Sidebar />

    <div class="section-copy wf-section">
      <div class="div-block-30-tranin-copy">
        <div class="text-block-18-tranin-copy">
          <span class="text-span-7-tranin-copy">Page / Pools</span>/ Pools
          Details
        </div>
        <div class="text-block-19-tranin-copy">Pools</div>
      </div>
      <div class="div-block-34-tranin-copy">
        <div class="div-block-35-tranin-copy">
          <div class="div-block-37-copy">
            <div class="div-block-38-tranin-copy">
              <div class="text-block-22">รายละเอียด Pool</div>
            </div>
          </div>
          <div class="div-block-53">
            <div>
              <div class="div-block-54">
                <div class="div-block-98">
                  <div class="block-content1">
                    <div class="div-block-103">
                      <div class="div-block-96">
                        <div class="text-block-64">POOLS NO :</div>
                        <div class="text-block-65">609213570</div>
                      </div>
                    </div>
                    <div class="div-block-103">
                      <div class="div-block-96">
                        <div class="text-block-64">NAME&nbsp;:</div>
                        <div class="text-block-65">609213570</div>
                      </div>
                    </div>
                    <div class="div-block-103">
                      <div class="div-block-96">
                        <div class="text-block-64">POOL&nbsp;ID :</div>
                        <div class="text-block-65">609213570</div>
                      </div>
                    </div>
                    <div class="div-block-103">
                      <div class="div-block-96">
                        <div class="text-block-64">ADDRESS :</div>
                        <div class="text-block-65">
                          1 ถ. สาทรใต้ แขวง ยานนาวา เขต สาทร กรุงเทพมหานคร 10120
                        </div>
                      </div>
                    </div>
                    <div class="div-block-103">
                      <div class="div-block-96">
                        <div class="text-block-64">CREATED :</div>
                        <div class="text-block-65">609213570</div>
                      </div>
                    </div>
                    <div class="div-block-103">
                      <div class="div-block-96">
                        <div class="text-block-64">STATUS :</div>
                        <div class="text-block-65">609213570</div>
                      </div>
                    </div>
                    <div class="div-block-103">
                      <div class="div-block-96">
                        <div class="text-block-64">PRICE :</div>
                        <div class="text-block-65">609213570</div>
                      </div>
                    </div>
                  </div>
                  <div class="block-content2">
                    <div class="div-block-96-copy">
                      <div class="text-block-64-copy">MAX PRICE :</div>
                      <div class="text-block-65-copy">609213570</div>
                    </div>
                    <div class="div-block-96-copy">
                      <div class="text-block-64-copy">CAP PRICE :</div>
                      <div class="text-block-65-copy">609213570</div>
                    </div>
                    <div class="div-block-96-copy">
                      <div class="text-block-64-copy">TYPE :</div>
                      <div class="text-block-65-copy">609213570</div>
                    </div>
                  </div>
                </div>
                <div class="div-block-99"></div>
                <div class="div-block-106">
                  <div class="text-block-70">Timeline</div>
                  <div class="div-block-107">
                    <!-- <div class="text-block-71">วันที่ยืนยันรับเรื่อง :</div> -->
                    <!-- <div class="text-block-72">13 เมษายน พ.ศ 2023</div> -->
                  </div>
                  <div class="div-block-108">
                    <div class="div-block-109">
                      <div class="div-block-96">
                        <div class="text-block-64">POOLS NAME :</div>
                        <div class="text-block-65">609213570</div>
                      </div>
                      <div class="div-block-96">
                        <div class="text-block-64">ADDRESS :</div>
                        <div class="text-block-65">609213570</div>
                      </div>
                      <div class="div-block-96">
                        <div class="text-block-64">POOLS ID :</div>
                        <div class="text-block-65">609213570</div>
                      </div>
                      <div class="div-block-96">
                        <div class="text-block-64">DEVICES ID :</div>
                        <div class="text-block-65">609213570</div>
                      </div>
                      <div class="div-block-96">
                        <div class="text-block-64">STATUS :</div>
                        <div class="text-block-65">609213570</div>
                      </div>
                    </div>
                    <div class="div-block-110">
                      <div class="card">
                        <Timeline
                          :value="events"
                          align="alternate"
                          class="customized-timeline"
                        >
                          <template #marker="slotProps">
                            <span
                              class="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1"
                              :style="{ backgroundColor: slotProps.item.color }"
                            >
                              <i :class="slotProps.item.icon"></i>
                            </span>
                          </template>
                          <template #content="slotProps">
                            <Card>
                              <template #title>
                                {{ slotProps.item.status }}
                              </template>
                              <template #subtitle>
                                {{ slotProps.item.date }}
                              </template>
                              <template #content>
                                <img
                                  v-if="slotProps.item.image"
                                  :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.item.image}`"
                                  :alt="slotProps.item.name"
                                  width="200"
                                  class="shadow-1"
                                />
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Inventore sed consequuntur
                                  error repudiandae numquam deserunt quisquam
                                  repellat libero asperiores earum nam nobis,
                                  culpa ratione quam perferendis esse,
                                  cupiditate neque quas!
                                </p>
                                <Button label="Read more" text></Button>
                              </template>
                            </Card>
                          </template>
                        </Timeline>
                      </div>
                    </div>
                  </div>
                  <div class="div-block-101">
                    <div class="div-block-102">
                     
                      <Button
                        class="button-4"
                        style="
                          color: white;
                          font-family: Prompt;
                          font-weight: 500;
                        "
                        label="Devices"
                      />
                      <Button
                        class="button-4"
                        style="
                          color: white;
                          font-family: Prompt;
                          font-weight: 500;
                        "
                        label="กลับ"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url(~/styles/pools_timeline.css);
</style>

<script lang="ts" setup>
import { ref } from "vue";

const events = ref([
  {
    status: "Ordered",
    date: "15/10/2020 10:30",
    icon: "pi pi-shopping-cart",
    color: "#9C27B0",
    image: "game-controller.jpg",
  },
  {
    status: "Processing",
    date: "15/10/2020 14:00",
    icon: "pi pi-cog",
    color: "#673AB7",
  },
  {
    status: "Shipped",
    date: "15/10/2020 16:15",
    icon: "pi pi-shopping-cart",
    color: "#FF9800",
  },
  {
    status: "Delivered",
    date: "16/10/2020 10:00",
    icon: "pi pi-check",
    color: "#607D8B",
  },
]);
</script>
