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

            <Transition enter-active-class="transition-transform duration-300 ease-out transform"
                enter-from-class="translate-x-full" enter-to-class="translate-x-0"
                leave-active-class="transition-transform duration-300 ease-in transform"
                leave-from-class="translate-x-0" leave-to-class="translate-x-full">
                <div v-if="isOpen"
                    class="fixed inset-y-0 right-0 z-[101] w-full sm:w-[544px] bg-primary h-full sm:rounded-l-[32px] px-4 sm:px-6 pt-5 pb-6 shadow-2xl flex flex-col overflow-hidden">

                    <button @click="$emit('close')"
                        class="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 rounded-full border border-[#0F11141A] flex items-center justify-center text-[#0F1114] hover:bg-slate-50 transition-colors z-10 p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <div class="mb-[17px] sm:mb-[18px] mt-2 sm:mt-0 pr-12">
                        <h2 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[3px]">Invite applicant</h2>
                        <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Send a link to
                            apply for a specific property (demo).</p>
                    </div>

                    <div class="flex-1 flex flex-col justify-between overflow-y-auto scrollbar-hide pr-0 sm:pr-2">

                        <div>
                            <div class="mb-[14px]">
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">PROPERTY</label>
                                <div class="relative">
                                    <select
                                        class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] appearance-none uppercase leading-[100%] tracking-[-2%] focus:outline-none">
                                        <option>123 OAK ST • UNIT 4</option>
                                    </select>
                                    <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0F1114] pointer-events-none"
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>

                            <div class="mb-[14px]">
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">UNIT</label>
                                <input type="text" placeholder="UNIT 4 / MAIN / ADU"
                                    class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111499] uppercase leading-[100%] tracking-[-2%] focus:outline-none" />
                            </div>

                            <div class="mb-[14px]">
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">EMAIL</label>
                                <input type="email" placeholder="EMAIL@DOMAIN.COM"
                                    class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] placeholder:uppercase leading-[100%] tracking-[-2%] focus:outline-none" />
                            </div>

                            <div class="mb-[14px]">
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">MESSAGE</label>
                                <textarea
                                    placeholder="Hi — please complete your rental application using the link below. Let me know if you have any questions."
                                    class="w-full h-[108px] px-5 py-[15px] rounded-xl border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F1114] resize-none focus:outline-none leading-[100%] tracking-[-2%]"></textarea>
                            </div>
                        </div>

                        <div class="flex items-center justify-end gap-2">
                            <button @click="$emit('close')"
                                class="h-10 px-5 py-[13px] rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] hover:bg-slate-50 transition-colors">CANCEL</button>
                            <button
                                class="h-10 px-5 py-[13px] rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] hover:opacity-95 transition-opacity"
                                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">SEND
                                INVITE</button>
                        </div>

                    </div>
                </div>
            </Transition>
        </div>
    </Teleport>
</template>
