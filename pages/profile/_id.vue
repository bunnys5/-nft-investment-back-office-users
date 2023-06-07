<template>
  <div>
    <Navbar />
    <Sidebar />

    <div class="section-copy wf-section">
      <div class="div-block-30-tranin-copy">
        <div class="text-block-18-tranin-copy">
          <span class="text-span-7-tranin-copy">Page /</span>Profile
        </div>
        <div class="text-block-19-tranin-copy">Profile</div>
      </div>
      <div class="div-block-34-tranin-copy">
        <div class="div-block-35-tranin-copy">
          <div class="div-block-37-copy">
            <div class="div-block-38-tranin-copy">
              <div class="text-block-22">โปรไฟล์</div>
              <Button label="เพิ่มอุปกรณ์" />
            </div>
          </div>
          <div class="div-block-53">
            <div class="div-block-112">
              <div class="div-block-54">
                <div class="div-block-113">
                  <div class="div-block-98">
                    <div class="div-block-103">
                      <div class="div-block-96">
                        <div class="text-block-64">NAME :</div>
                        <div class="text-block-65">609213570</div>
                      </div>
                    </div>
                    <div class="div-block-103">
                      <div class="div-block-96">
                        <div class="text-block-64">ADDRESS&nbsp;:</div>
                        <div class="text-block-65">
                          1 ถ. สาทรใต้ แขวง ยานนาวา เขต สาทร กรุงเทพมหานคร 10120
                        </div>
                      </div>
                    </div>
                    <div class="div-block-103">
                      <div class="div-block-96">
                        <div class="text-block-64">ROLE :</div>
                        <div class="text-block-65">609213570</div>
                      </div>
                    </div>
                    <div class="div-block-103">
                      <div class="div-block-96">
                        <div class="text-block-64">CREATE AT :</div>
                        <div class="text-block-65">20/12/2023</div>
                      </div>
                    </div>

                    <div class="div-block-103">
                      <div class="div-block-96">
                        <div class="text-block-64">RECEIVING ACCOUNT</div>
                        <div class="text-block-65">609213570</div>
                      </div>
                    </div>
                  </div>
                  <div class="div-block-114">
                    
                  </div>
                </div>
                <div class="div-block-99"></div>
                <div class="div-block-106">
                  <div class="text-block-70">Bank Account</div>
                  <div class="div-block-108">
                    <div class="div-block-109">
                      <div class="div-block-96">
                        <div class="text-block-64">BANK&nbsp;NAME :</div>
                        <div class="text-block-65">609213570</div>
                      </div>
                      <div class="div-block-96">
                        <div class="text-block-64">BANK&nbsp;NUMBER :</div>
                        <div class="text-block-65">609213570</div>
                      </div>
                      <div class="div-block-96">
                        <div class="text-block-64">BANK&nbsp;BRANCH</div>
                        <div class="text-block-65">609213570</div>
                      </div>
                    </div>
                    <div class="div-block-110"></div>
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
@import url(../../styles/profile.css);

.upload-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border: 2px dashed #ccc;
  border-radius: 50%;
  cursor: pointer;
}

.upload-button i {
  font-size: 32px;
  margin-bottom: 8px;
}

.upload-button span {
  font-weight: bold;
}

.avatar-preview {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}
</style>

<script lang="ts">
import { defineComponent, ref } from "vue";
import FileUpload from "primevue/fileupload";
import Avatar from "primevue/avatar";

</script>
