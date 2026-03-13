<script setup>
import { ref } from 'vue'

const accountType = ref('INDIVIDUAL')
const accountHolder = ref('')
const routingNumber = ref('')
const accountNumber = ref('')
const confirmAccountNumber = ref('')
</script>

<template>
    <div class="border border-[#0F11141A] rounded-[24px] p-[25px] pt-[22px]">
        <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[1px]">Bank Accounts</h2>
        <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-0.02em] mb-3">
            Instantly authenticate your bank accounts.
        </p>

        <div class="border border-[#0F11141A] rounded-[12px] p-4 pt-[13px] mb-4">
            <h3 class="text-[14px] font-bold text-[#0F1114] leading-[100%]">Connect with Stripe</h3>
            <p class="text-[10px] font-medium text-[#0F111499] leading-4 tracking-[-0.02em] mb-[9px]">
                Enter bank account details. Your bank information will be verified with micro-deposits to your account.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[18px] mb-[14px]">
                <div>
                    <label
                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-0.02em] leading-[100%] mb-[5px]">SELECT
                        THE ACCOUNT TYPE</label>
                    <div class="relative">
                        <select v-model="accountType"
                            class="w-full py-[15px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em] outline-none appearance-none bg-white cursor-pointer">
                            <option value="INDIVIDUAL">INDIVIDUAL</option>
                            <option value="BUSINESS">BUSINESS</option>
                        </select>
                        <div class="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#0F1114"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="1 1 5 5 9 1"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>

                <div>
                    <label
                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-0.02em] leading-[100%] mb-[5px]">ACCOUNT
                        HOLDER</label>
                    <input v-model="accountHolder" type="text" placeholder="FULL NAME OR BUSINESS NAME"
                        class="w-full py-[14px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em] placeholder:text-[#0F111466] outline-none" />
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div>
                    <label
                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-0.02em] leading-[100%] mb-[5px]">ROUTING
                        NUMBER</label>
                    <input v-model="routingNumber" type="text" placeholder="XXXXXXX"
                        class="w-full py-[14px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em] placeholder:text-[#0F111466] outline-none" />
                </div>

                <div>
                    <label
                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-0.02em] leading-[100%] mb-[5px]">ACCOUNT
                        NUMBER</label>
                    <input v-model="accountNumber" type="password" placeholder="••••••••"
                        class="w-full py-[14px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] tracking-[0.1em] placeholder:tracking-[0.1em] placeholder:text-[#0F111466] outline-none" />
                </div>

                <div>
                    <label
                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-0.02em] leading-[100%] mb-[5px]">CONFIRM
                        ACCOUNT NUMBER</label>
                    <input v-model="confirmAccountNumber" type="password" placeholder="••••••••"
                        class="w-full py-[14px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] tracking-[0.1em] placeholder:tracking-[0.1em] placeholder:text-[#0F111466] outline-none" />
                </div>
            </div>
        </div>

        <div class="flex items-center justify-end">
            <button
                class="py-[14px] px-[20px] rounded-[80px] text-primary text-[12px] font-extrabold uppercase tracking-[-0.02em] leading-[100%] hover:opacity-90 transition-opacity whitespace-nowrap"
                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                CONTINUE WITH STRIPE
            </button>
        </div>
    </div>
</template>
