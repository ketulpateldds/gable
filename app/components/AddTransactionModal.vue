<script setup>
import { watch, onUnmounted } from 'vue'

const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true
    }
})

defineEmits(['close'])

watch(() => props.isOpen, (newVal) => {
    if (newVal) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
})

onUnmounted(() => {
    document.body.style.overflow = ''
})
</script>

<template>
    <Teleport to="body">
        <div class="relative z-[100]">
            <Transition enter-active-class="transition-opacity duration-300 ease-out" enter-from-class="opacity-0"
                enter-to-class="opacity-100" leave-active-class="transition-opacity duration-200 ease-in"
                leave-from-class="opacity-100" leave-to-class="opacity-0">
                <div v-if="isOpen" class="fixed inset-0 bg-[#0F111466] backdrop-blur-[2px]" @click="$emit('close')">
                </div>
            </Transition>

            <Transition enter-active-class="transition-all duration-300 ease-out transform"
                enter-from-class="opacity-0 scale-95 translate-y-4" enter-to-class="opacity-100 scale-100 translate-y-0"
                leave-active-class="transition-all duration-200 ease-in transform"
                leave-from-class="opacity-100 scale-100 translate-y-0"
                leave-to-class="opacity-0 scale-95 translate-y-4">
                <div v-if="isOpen"
                    class="fixed inset-0 z-[101] flex items-center justify-center p-6 pt-[23px] pointer-events-none">
                    <div
                        class="w-full max-w-[648px] bg-white rounded-[32px] p-8 shadow-2xl relative pointer-events-auto max-h-[90vh] overflow-y-auto scrollbar-hide">

                        <button @click="$emit('close')"
                            class="absolute top-6 right-6 w-10 h-10 rounded-full border border-[#0F11141A] flex items-center justify-center text-[#0F1114] hover:bg-slate-50 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <div class="mb-5">
                            <h2 class="text-[20px] font-bold text-[#0F1114] leading-[100%]">Add transaction
                            </h2>
                            <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Capture
                                applicant info, property, and screening status.</p>
                        </div>

                        <div class="space-y-4">
                            <div class="grid grid-cols-1 sm:grid-cols-3 gap-[18px]">
                                <div>
                                    <label
                                        class="block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px] ml-1">TYPE</label>
                                    <div class="relative">
                                        <select
                                            class="w-full h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] appearance-none uppercase leading-[100%] tracking-[-2%] focus:outline-none">
                                            <option>RENT</option>
                                        </select>
                                        <svg class="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <label
                                        class="block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px] ml-1">DATE</label>
                                    <div class="relative">
                                        <input type="text" value="23-02-2026"
                                            class="w-full h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%] focus:outline-none">
                                        <svg class="absolute right-5 top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                            width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <label
                                        class="block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px] ml-1">STATUS</label>
                                    <div class="relative">
                                        <select
                                            class="w-full h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] appearance-none uppercase leading-[100%] tracking-[-2%] focus:outline-none">
                                            <option>PAID</option>
                                        </select>
                                        <svg class="absolute right-5 top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
                                <div>
                                    <label
                                        class="block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px] ml-1">PROPERTY</label>
                                    <div class="relative">
                                        <select
                                            class="w-full h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] appearance-none uppercase leading-[100%] tracking-[-2%] focus:outline-none bg-white">
                                            <option>123 OAK ST • UNIT 4</option>
                                        </select>
                                        <svg class="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <label
                                        class="block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px] ml-1">PARTY
                                        (TENANT/VENDOR/OWNER)</label>
                                    <input type="text" placeholder="JORDAN TENANT"
                                        class="w-full h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] focus:outline-none">
                                </div>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-3 gap-[18px]">
                                <div>
                                    <label
                                        class="block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px] ml-1">AMOUNT</label>
                                    <input type="text" placeholder="83.00"
                                        class="w-full h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] leading-[100%] tracking-[-2%] focus:outline-none">
                                </div>
                                <div>
                                    <label
                                        class="block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px] ml-1">CATEGORY</label>
                                    <div class="relative">
                                        <select
                                            class="w-full h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] appearance-none uppercase leading-[100%] tracking-[-2%] focus:outline-none">
                                            <option>RENT</option>
                                        </select>
                                        <svg class="absolute right-4 top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <label
                                        class="block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px] ml-1">PAYMENT
                                        METHOD</label>
                                    <div class="relative">
                                        <select
                                            class="w-full h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] appearance-none uppercase leading-[100%] tracking-[-2%] focus:outline-none bg-white">
                                            <option>ACH</option>
                                        </select>
                                        <svg class="absolute right-4 top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label
                                    class="block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px] ml-1">MEMO</label>
                                <input type="text" placeholder="JANUARY RENT • UNIT 4"
                                    class="w-[188px] h-11 pl-5 pr-8 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%] focus:outline-none bg-white">
                            </div>

                            <div>
                                <label
                                    class="block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px] ml-1">NOTES</label>
                                <textarea placeholder="Optional notes for your records..." rows="4"
                                    class="w-full h-[110px] px-5 py-[15px] rounded-[12px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] leading-[100%] tracking-[-2%] focus:outline-none bg-white resize-none"></textarea>
                            </div>
                        </div>

                        <div class="flex items-center justify-end gap-2 mt-6">
                            <button @click="$emit('close')"
                                class="h-10 px-5 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] hover:bg-slate-50 transition-colors">
                                CANCEL
                            </button>
                            <button
                                class="h-10 px-5 rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] hover:opacity-95 transition-opacity"
                                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                                SAVE
                            </button>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </Teleport>
</template>
