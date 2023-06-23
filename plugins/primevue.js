import PrimeVue from 'primevue/config'
import { createApp } from 'vue';
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import TreeTable from 'primevue/treetable';
import Column from 'primevue/column';
import Textarea from 'primevue/textarea';
import Timeline from 'primevue/timeline';
import Dropdown from 'primevue/dropdown';
import FileUpload from 'primevue/fileupload';
import Avatar from 'primevue/avatar';
import Galleria from 'primevue/galleria';


const app = createApp();
app.use(PrimeVue);

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true })
    nuxtApp.vueApp.use(ToastService)
    nuxtApp.vueApp.component('Button', Button)
    nuxtApp.vueApp.component('InputText', InputText)
    nuxtApp.vueApp.component('Toast', Toast)
    nuxtApp.vueApp.component('TreeTable', TreeTable)
    nuxtApp.vueApp.component('Column', Column)
    nuxtApp.vueApp.component('Textarea', Textarea)
    nuxtApp.vueApp.component('Timeline', Timeline)
    nuxtApp.vueApp.component('Dropdown', Dropdown)
    nuxtApp.vueApp.component('fileupload', FileUpload);
    nuxtApp.vueApp.component('Avatar', Avatar);
    nuxtApp.vueApp.component('Galleria', Galleria);
    
    
    //other components that you need
})
