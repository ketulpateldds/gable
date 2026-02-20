<script setup lang="ts">
definePageMeta({ layout: false })

const router = useRouter()

const form = reactive({
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
    confirmPassword: '',
})

const showPassword = ref(false)
const showConfirm = ref(false)

function onContinue() {
    router.push('/signup/select-plan')
}
</script>

<template>
    <div class="min-h-screen bg-primary font-figtree flex flex-col items-center justify-center px-4 py-2">
        <div class="w-full max-w-[440px] border border-[#0F11141A] rounded-[32px] px-6 pt-[21px] pb-[25px]">

            <div class="flex items-center gap-4 mb-5">
                <button @click="router.back()"
                    class="w-10 h-10 rounded-[10px] p-[10px] border border-[#0F11141A] text-[#0F1114] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M19 12H5M5 12l7 7M5 12l7-7" />
                    </svg>
                </button>
                <div class="flex flex-col gap-[3px]">
                    <h1 class="text-2xl font-extrabold text-[#0F1114] leading-[100%] tracking-[-0.02em]">
                        Account details
                    </h1>
                    <p class="text-[12px] font-medium text-[#0F1114CC] leading-4">
                        Please fill out your account details below.
                    </p>
                </div>
            </div>

            <div class="w-full h-1 rounded-[16px] mb-8"
                style="background: linear-gradient(225.01deg, rgba(0, 76, 230, 0.1) 0%, rgba(51, 136, 255, 0.1) 100%);">
                <div class="h-full w-2/3 rounded-[16px]"
                    style="background: linear-gradient(225.01deg, #004CE6 0%, #3388FF 100%);">
                </div>
            </div>

            <form @submit.prevent="onContinue" class="flex flex-col gap-2">

                <input v-model="form.firstName" type="text" placeholder="FIRST NAME" required
                    class="w-full h-[50px] px-6 placeholder:text-[#0F111466] rounded-[80px] border border-[#0F11141A] text-[14px] placeholder:uppercase font-semibold tracking-[-2%] leading-[100%] outline-none" />

                <input v-model="form.lastName" type="text" placeholder="LAST NAME" required
                    class="w-full h-[50px] px-6 placeholder:text-[#0F111466] rounded-[80px] border border-[#0F11141A] text-[14px] placeholder:uppercase font-semibold tracking-[-2%] leading-[100%] outline-none" />

                <input v-model="form.phone" type="tel" placeholder="PHONE NUMBER"
                    class="w-full h-[50px] px-6 placeholder:text-[#0F111466] rounded-[80px] border border-[#0F11141A] text-[14px] placeholder:uppercase font-semibold tracking-[-2%] leading-[100%] outline-none" />

                <div class="relative">
                    <input v-model="form.password" :type="showPassword ? 'text' : 'password'" placeholder="PASSWORD"
                        required
                        class="w-full h-[50px] px-6 pr-14 placeholder:text-[#0F111466] rounded-[80px] border border-[#0F11141A] text-[14px] placeholder:uppercase font-semibold tracking-[-2%] leading-[100%] outline-none" />
                    <button type="button" @click="showPassword = !showPassword"
                        class="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-[#0F1114]">
                        <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path
                                d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                            <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                    </button>
                </div>

                <div class="relative">
                    <input v-model="form.confirmPassword" :type="showConfirm ? 'text' : 'password'"
                        placeholder="CONFIRM PASSWORD" required
                        class="w-full h-[50px] px-6 pr-12 placeholder:text-[#0F111466] rounded-[80px] border border-[#0F11141A] text-[14px] placeholder:uppercase font-semibold tracking-[-2%] leading-[100%] outline-none" />
                    <button type="button" @click="showConfirm = !showConfirm"
                        class="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-[#0F1114]">
                        <svg v-if="!showConfirm" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path
                                d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                            <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                    </button>
                </div>

                <button type="submit"
                    class="w-full h-[50px] rounded-[80px] text-primary text-[14px] font-extrabold uppercase tracking-[-2%] leading-[100%] mt-4 outline-none"
                    style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                    Continue
                </button>
            </form>
        </div>

        <p class="mt-7 max-w-[394px] text-center font-medium text-[12px] leading-4 text-[#0F1114CC]">
            By continuing, you agree to Gable's
            <NuxtLink to="#" class="text-[#004CE5] font-bold">Terms of Service</NuxtLink>
            and
            <NuxtLink to="#" class="text-[#004CE5] font-bold">Privacy Policy</NuxtLink>.
        </p>
    </div>
</template>
