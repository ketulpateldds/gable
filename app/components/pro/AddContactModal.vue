<script setup>
import { ref } from 'vue';

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['close']);

const close = () => {
    emit('close');
};

const form = ref({
    firstName: '',
    middleName: '',
    lastName: '',
    displayAsCompany: false,
    companyName: '',
    website: '',
    emails: [''],
    phones: [''],
    address: '',
    city: '',
    state: '',
    zipCode: ''
});

const addEmail = () => {
    form.value.emails.push('');
};

const addPhone = () => {
    form.value.phones.push('');
};

const removeEmail = (index) => {
    if (form.value.emails.length > 1) {
        form.value.emails.splice(index, 1);
    }
};

const removePhone = (index) => {
    if (form.value.phones.length > 1) {
        form.value.phones.splice(index, 1);
    }
};

const handleFileUpload = (event) => {
    // Placeholder for file upload logic
    console.log('File uploaded:', event.target.files[0]);
};
</script>

<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-[#0F1114]/50 backdrop-blur-[2px]"
        @click.self="close">
        <div
            class="bg-primary rounded-none sm:rounded-[24px] w-full max-w-[648px] h-full sm:h-auto sm:max-h-[90vh] relative shadow-xl flex flex-col overflow-hidden">

            <div class="pt-[23px] px-6 pb-[18px] flex items-start justify-between">
                <div>
                    <h2 class="text-[20px] font-bold text-[#0F1114] leading-[100%]">Add New Contact</h2>
                    <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Create or update a
                        contact profile.</p>
                </div>
                <button @click="close"
                    class="w-10 h-10 rounded-full border border-[#0F11141A] flex items-center justify-center text-[#0F1114] hover:bg-gray-50 transition-colors">
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
            </div>

            <div class="flex-1 overflow-y-auto px-6 pb-6 scrollbar-hide">
                <div class="mb-5">
                    <label
                        class="block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">PROFILE
                        PHOTO</label>
                    <div
                        class="flex flex-col sm:flex-row sm:items-center gap-[15px] px-4 py-[11px] bg-[#FAFAFA] border border-[#0F11141A] rounded-[8px]">
                        <input type="file" id="profile-photo" class="hidden" @change="handleFileUpload" />
                        <label for="profile-photo"
                            class="flex items-center justify-center sm:justify-start gap-[6px] bg-[#0F1114] text-white pl-[14px] pr-[15px] py-2 rounded-[16px] text-[12px] font-bold uppercase tracking-[-2%] leading-[100%] cursor-pointer">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.0011 6.66617V11.3348C14.0011 12.8082 12.8067 14.0026 11.3333 14.0026H4.66387C3.1905 14.0026 1.99609 12.8082 1.99609 11.3348V4.66534C1.99609 3.19196 3.1905 1.99756 4.66387 1.99756H8.66554"
                                    stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M1.99609 8.66706L2.85989 7.80325C3.16145 7.50169 3.57045 7.33228 3.99693 7.33228C4.42339 7.33228 4.8324 7.50169 5.13395 7.80325L7.99859 10.6679"
                                    stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M4.66602 14.0025L8.86454 9.80398C9.49251 9.17602 10.5106 9.17602 11.1386 9.80398L13.7658 12.4312"
                                    stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.0013 1.99756L10.334 3.66492" stroke="white" stroke-width="1.25"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.6674 3.66492L12 1.99756" stroke="white" stroke-width="1.25"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.0014 1.99756V5.33228" stroke="white" stroke-width="1.25"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            UPLOAD PHOTO
                        </label>
                        <span
                            class="text-[12px] font-bold text-[#0F111499] tracking-[-2%] leading-[100%] text-center sm:text-left">No
                            file
                            chosen</span>
                    </div>
                </div>

                <div class="mb-4">
                    <h3 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[10px]">General information</h3>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-[18px] mb-4">
                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">FIRST
                                NAME</label>
                            <input v-model="form.firstName" type="text" placeholder="FIRST NAME"
                                class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] focus:outline-none" />
                        </div>
                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">MIDDLE
                                NAME</label>
                            <input v-model="form.middleName" type="text" placeholder="MIDDLE NAME"
                                class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] focus:outline-none" />
                        </div>
                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">LAST
                                NAME</label>
                            <input v-model="form.lastName" type="text" placeholder="LAST NAME"
                                class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] focus:outline-none" />
                        </div>
                    </div>

                    <div class="mb-[14px]">
                        <label
                            class="bg-[#0F111405] border border-[#0F11141A] rounded-[80px] px-4 py-[9px] flex items-center gap-2 cursor-pointer w-fit">
                            <input type="checkbox" v-model="form.displayAsCompany" class="hidden" />
                            <div
                                :class="['w-3 h-3 border flex items-center justify-center transition-colors', form.displayAsCompany ? 'bg-[#004CE5] border-[#004CE5]' : 'border-[#0F1114]']">
                                <svg v-if="form.displayAsCompany" width="10" height="10" viewBox="0 0 24 24" fill="none"
                                    stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <span
                                class="text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%]">DISPLAY
                                AS A COMPANY</span>
                        </label>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px]">
                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">COMPANY
                                NAME</label>
                            <input v-model="form.companyName" type="text" placeholder="COMPANY NAME"
                                class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] focus:outline-none" />
                        </div>
                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">WEBSITE</label>
                            <input v-model="form.website" type="text" placeholder="WEBSITE"
                                class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] focus:outline-none" />
                        </div>
                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">EMAIL</label>
                            <div v-for="(email, index) in form.emails" :key="'email-' + index"
                                class="mb-2 last:mb-0 relative group">
                                <input v-model="form.emails[index]" type="email" placeholder="EMAIL"
                                    class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] focus:outline-none pr-10" />
                                <button v-if="form.emails.length > 1" @click="removeEmail(index)"
                                    class="absolute right-4 top-1/2 -translate-y-1/2 text-[#0F111466] hover:text-[#E02424] transition-colors">
                                    <svg width="10" height="10" viewBox="0 0 14 14" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <button @click="addEmail"
                                class="text-[12px] font-extrabold text-[#004CE5] flex items-center gap-[6px] uppercase tracking-[-2%] leading-[100%] mt-[9px] ml-[6px]">
                                <span class="text-base">+</span> ADD EMAIL
                            </button>
                        </div>
                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">PHONE</label>
                            <div v-for="(phone, index) in form.phones" :key="'phone-' + index"
                                class="mb-2 last:mb-0 relative group">
                                <input v-model="form.phones[index]" type="text" placeholder="PHONE"
                                    class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] focus:outline-none pr-10" />
                                <button v-if="form.phones.length > 1" @click="removePhone(index)"
                                    class="absolute right-4 top-1/2 -translate-y-1/2 text-[#0F111466] hover:text-[#E02424] transition-colors">
                                    <svg width="10" height="10" viewBox="0 0 14 14" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <button @click="addPhone"
                                class="text-[12px] font-extrabold text-[#004CE5] flex items-center gap-[6px] uppercase tracking-[-2%] leading-[100%] mt-[9px] ml-[6px]">
                                <span class="text-base">+</span> ADD PHONE
                            </button>
                        </div>
                    </div>
                </div>

                <div class="mb-6">
                    <h3 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[10px]">Address</h3>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px]">
                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">ADDRESS</label>
                            <input v-model="form.address" type="text" placeholder="ADDRESS"
                                class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] focus:outline-none" />
                        </div>
                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">CITY</label>
                            <input v-model="form.city" type="text" placeholder="CITY"
                                class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] focus:outline-none" />
                        </div>
                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">STATE</label>
                            <input v-model="form.state" type="text" placeholder="STATE"
                                class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] focus:outline-none" />
                        </div>
                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">ZIP
                                CODE</label>
                            <input v-model="form.zipCode" type="text" placeholder="ZIP CODE"
                                class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] focus:outline-none" />
                        </div>
                    </div>
                </div>

                <div class="flex flex-col sm:flex-row items-center justify-end gap-2">
                    <button @click="close"
                        class="w-full sm:w-auto px-5 py-[13px] rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase tracking-[-0.02em] leading-[100%]">
                        CANCEL
                    </button>
                    <button
                        class="w-full sm:w-auto px-5 py-[14px] rounded-[80px] text-primary text-[12px] font-extrabold uppercase tracking-[-0.02em] leading-[100%]"
                        style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                        CREATE
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>