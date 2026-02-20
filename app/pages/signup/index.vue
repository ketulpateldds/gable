<script setup lang="ts">
definePageMeta({ layout: false })

const router = useRouter()
const email = ref('')

function onContinue() {
    if (!email.value.trim()) return
    router.push('/signup/account-type')
}
</script>

<template>
    <div class="min-h-screen bg-primary font-figtree flex flex-col items-center justify-center px-4 py-2">
        <div class="w-full max-w-[440px] border border-[#0F11141A] rounded-[32px] px-6 pt-[37px] pb-[25px]">
            <NuxtLink to="/" class="flex items-center justify-center gap-[5px] mb-[21px]">
                <span class="w-6 h-6 p-[2px]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2L3 8V18H8V13.5C8 12.119 8.895 11 10 11C11.105 11 12 12.119 12 13.5V18H17V8L10 2Z"
                            fill="#1A56DB" />
                        <path d="M8 18V13.5C8 12.119 8.895 11 10 11C11.105 11 12 12.119 12 13.5V18" fill="#EBF2FF" />
                    </svg>
                </span>
                <span class="text-[#0F1114] font-extrabold text-2xl tracking-[-0.02em] leading-[100%]">Gable</span>
            </NuxtLink>

            <h1 class="text-2xl font-extrabold text-[#0F1114] leading-[100%] tracking-[-0.02em] text-center mb-10">
                Welcome to Gable!
            </h1>

            <form @submit.prevent="onContinue" class="flex flex-col gap-[41px]">
                <div>
                    <input v-model="email" type="email" placeholder="EMAIL" required
                        class="w-full h-[50px] px-6 placeholder:text-[#0F111466] rounded-[80px] border border-[#0F11141A] text-[14px] placeholder:uppercase leading-[100%] font-semibold tracking-[-2%] outline-none" />
                </div>

                <button type="submit"
                    class="w-full h-[50px] rounded-[80px] text-primary text-[14px] font-extrabold uppercase tracking-[-2%] leading-[100%] outline-none"
                    style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                    Continue
                </button>
            </form>

            <div class="flex flex-col gap-2 mt-[7px]">
                <button type="button"
                    class="relative w-full h-[50px] rounded-[80px] border border-[#0F11141A] text-[14px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] outline-none">
                    <div class="absolute left-[17px] top-1/2 -translate-y-1/2">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4" />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853" />
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                                fill="#FBBC05" />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335" />
                        </svg>
                    </div>
                    Sign up with Google
                </button>

                <button type="button"
                    class="relative w-full h-[50px] rounded-[80px] border border-[#0F11141A] text-[14px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] outline-none">
                    <div class="absolute left-[17px] top-1/2 -translate-y-1/2">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"
                                fill="#1877F2" />
                        </svg>
                    </div>
                    Sign up with Facebook
                </button>
            </div>

            <p class="text-center font-medium text-[12px] leading-4 tracking-[-2%] text-[#0F1114CC] mt-[13px]">
                Next, you'll choose your account type
            </p>
        </div>
    </div>
</template>
