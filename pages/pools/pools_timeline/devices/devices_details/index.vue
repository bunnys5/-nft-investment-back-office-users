<template>
  <div>
    <Navbar />
    <Sidebar />
    <div class="section-copy wf-section">
      <div class="div-block-30-tranin-copy">
        <div class="text-block-18-tranin-copy">
          <span class="text-span-7-tranin-copy">Page / </span>Transaction /
          Details
        </div>
        <div class="text-block-19-tranin-copy">Details Transaction</div>
      </div>
      <div class="div-block-34-tranin-copy">
        <div class="div-block-35-tranin-copy">
          <div class="div-block-37-copy">
            <div class="div-block-38-tranin-copy">
              <div class="text-block-22">เงินหมุนเวียนในระบบ</div>
              <div class="button-nameTop">
                <Button class="button-add" label="กลับ" />
              </div>
            </div>
          </div>
          <div class="div-block-49">
            <div class="div-block-50">
              <div class="div-block-55"></div>
              <div class="div-block-58">
                <div class="div-block-61">
                  <div class="text-block-31">Device ID: 0000111</div>
                </div>
                <div class="div-block-60">
                  <div class="text-block-33">
                    1 ถ. สาทรใต้ แขวง ยานนาวา เขต สาทร กรุงเทพมหานคร 10120
                  </div>
                  <div class="div-block-59">
                    <div class="text-block-32">ว่าง</div>
                  </div>
                </div>
                <div class="div-block-62">
                  <div class="div-block-63">
                    <div class="div-block-64">
                      <div class="div-block-66">
                        <img
                          style="width: 22px; height: 22px"
                          src="~/assets/transaction_details/6460b5086a5c7615fcfbf4c1_currency-usd.png"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="div-block-67">
                      <div class="text-block-35">รายได้/เครื่อง</div>
                    </div>
                    <div class="div-block-65">
                      <div class="text-block-34">+$2,000</div>
                    </div>
                  </div>
                  <div class="div-block-63">
                    <div class="div-block-64">
                      <div
                        class="div-block-66"
                        style="background-color: #1a73e7"
                      >
                        <img
                          style="width: 22px; height: 22px"
                          src="~/assets/transaction_details/6460b509d6192761284ee288_account.png"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="div-block-67">
                      <div class="text-block-35">จำนวนการใช้งาน</div>
                    </div>
                    <div class="div-block-65">
                      <div class="text-block-34">+$2,000</div>
                    </div>
                  </div>
                  <div class="div-block-63">
                    <div class="div-block-64">
                      <div
                        class="div-block-66"
                        style="background-color: #16c0e8"
                      >
                        <img
                          style="width: 22px"
                          src="~/assets/transaction_details/text-box.svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="div-block-67">
                      <div class="text-block-35">ค่าใช้จ่าย / เครื่อง</div>
                    </div>
                    <div class="div-block-65">
                      <div class="text-block-34">+$2,000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-block-52">
              <div class="div-block-68">
                <div class="text-block-36">ชื่อ Pools:</div>
                <div class="text-block-41">XXXXXX</div>
              </div>
              <div class="div-block-69">
                <div class="text-block-39">NFT&nbsp;ID:</div>
                <div class="text-block-42">XXXXXX</div>
              </div>
              <div class="div-block-70">
                <div class="text-block-38">สถานที่ตั้ง:</div>
                <div class="text-block-37">
                  1 ถ. สาทรใต้ แขวง ยานนาวา เขต &nbsp;สาทร กรุงเทพมหานคร 10120
                </div>
              </div>
              <div class="div-block-71">
                <div class="text-block-40">สถานะ:</div>
                <div class="text-block-43">HIGH</div>
              </div>
            </div>
          </div>
          <div class="div-block-49">
            <div class="map">
              <div class="text-block-22">แผนที่</div>
              <div class="div-block-50-2"></div>
            </div>
            <div class="pic-upload">
              <div class="text-block-22">รูปภาพ</div>
              <div class="div-block-52-2">
                <Galleria
                  :value="images"
                  :responsiveOptions="responsiveOptions"
                  :numVisible="5"
                  containerStyle="width: 100%"
                  preview
                >
                  <template #item="slotProps">
                    <img
                      :src="slotProps.item.itemImageSrc"
                      :alt="slotProps.item.alt"
                      style="width: 100%"
                      preview
                    />
                  </template>
                  <template #thumbnail="slotProps">
                    <img
                      :src="slotProps.item.thumbnailImageSrc"
                      :alt="slotProps.item.alt"
                      preview
                    />
                  </template>
                </Galleria>
              </div>
            </div>
          </div>

          <div class="div-block-53">
            <div><div class="text-block-27">Transaction</div></div>
            <div class="div-block-54">
              <div class="div-block-74">
                <div class="text-block-44">น้ำยาซักผ้า</div>
                <div class="div-block-73">
                  <div class="text-block-45">
                    จำนวน &nbsp;&nbsp;<span class="text-span-7">15</span>
                  </div>
                  <div class="text-block-47">- THB 3,000.00</div>
                </div>
                <div class="div-block-72">
                  <div class="text-block-46">08 มีนาคม 2022 14:20</div>
                  <img
                    src="~/assets/transaction_details/64626a51b3fe78c183f2b022_Vector.svg"
                    loading="lazy"
                    data-w-id="88ddad91-0736-8614-ed5e-0e4be55c6a82"
                    alt=""
                    class="image-41"
                  />
                </div>
                <div class="div-block-75" style="">
                  <div class="div-block-76">
                    <div>รหัสผู้ใช้ :</div>
                    <div>XXXXXXXXXX</div>
                  </div>
                  <div class="div-block-77">
                    <div>รหัส Pool :</div>
                    <div>XXXXXXXXX</div>
                  </div>
                  <div class="div-block-78">
                    <div>รหัสธุระกรรม :</div>
                    <div>XXXXXXXXXX</div>
                  </div>
                  <div class="div-block-79">
                    <div>เลขอ้างอิง :</div>
                    <div>XXXXXXXXX</div>
                  </div>
                  <div class="div-block-80"></div>
                </div>
              </div>
              <div class="div-block-74">
                <div class="text-block-44">น้ำยาซักผ้า</div>
                <div class="div-block-73">
                  <div class="text-block-45">
                    จำนวน &nbsp;&nbsp;<span class="text-span-7">15</span>
                  </div>
                  <div class="text-block-47">- THB 3,000.00</div>
                </div>
                <div class="div-block-72">
                  <div class="text-block-46">08 มีนาคม 2022 14:20</div>
                  <img
                    src="~/assets/transaction_details/64626a51b3fe78c183f2b022_Vector.svg"
                    loading="lazy"
                    alt=""
                    class="image-41"
                  />
                </div>
                <div class="div-block-80"></div>
              </div>
              <div class="div-block-74">
                <div class="text-block-44">น้ำยาซักผ้า</div>
                <div class="div-block-73">
                  <div class="text-block-45">
                    จำนวน &nbsp;&nbsp;<span class="text-span-7">15</span>
                  </div>
                  <div class="text-block-47">- THB 3,000.00</div>
                </div>
                <div class="div-block-72">
                  <div class="text-block-46">08 มีนาคม 2022 14:20</div>
                  <img
                    src="~/assets/transaction_details/64626a51b3fe78c183f2b022_Vector.svg"
                    loading="lazy"
                    alt=""
                    class="image-41"
                  />
                </div>
                <div class="div-block-80"></div>
              </div>
              <div class="div-block-74">
                <div class="text-block-44">น้ำยาซักผ้า</div>
                <div class="div-block-73">
                  <div class="text-block-45">
                    จำนวน &nbsp;&nbsp;<span class="text-span-7">15</span>
                  </div>
                  <div class="text-block-47">- THB 3,000.00</div>
                </div>
                <div class="div-block-72">
                  <div class="text-block-46">08 มีนาคม 2022 14:20</div>
                  <img
                    src="~/assets/transaction_details/64626a51b3fe78c183f2b022_Vector.svg"
                    loading="lazy"
                    alt=""
                    class="image-41"
                  />
                </div>
                <div class="div-block-80"></div>
              </div>
              <div class="div-block-74">
                <div class="text-block-44">น้ำยาซักผ้า</div>
                <div class="div-block-73">
                  <div class="text-block-45">
                    จำนวน &nbsp;&nbsp;<span class="text-span-7">15</span>
                  </div>
                  <div class="text-block-47">- THB 3,000.00</div>
                </div>
                <div class="div-block-72">
                  <div class="text-block-46">08 มีนาคม 2022 14:20</div>
                  <img
                    src="~/assets/transaction_details/64626a51b3fe78c183f2b022_Vector.svg"
                    loading="lazy"
                    alt=""
                    class="image-41"
                  />
                </div>
                <div class="div-block-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url(~/styles/transaction_details.css);
</style>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from "@/service/PhotoService";

onMounted(() => {
  PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const responsiveOptions = ref([
  {
    breakpoint: "991px",
    numVisible: 4,
  },
  {
    breakpoint: "767px",
    numVisible: 3,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
  },
]);
</script>
