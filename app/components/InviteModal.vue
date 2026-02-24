<script setup>
defineProps({
    isOpen: {
        type: Boolean,
        required: true
    }
})

defineEmits(['close'])
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
                    class="fixed inset-y-0 right-0 z-[101] w-full sm:w-[544px] bg-white h-full sm:rounded-l-[32px] px-4 sm:px-6 py-5 shadow-2xl flex flex-col overflow-hidden">

                    <div class="absolute inset-0" @click="$emit('close')"></div>

                    <button @click="$emit('close')"
                        class="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 p-2 rounded-full border border-[#0F11141A] flex items-center justify-center text-[#0F1114] hover:bg-slate-50 transition-colors z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <div class="mb-4 sm:mb-[14px] mt-2 sm:mt-0">
                        <h2
                            class="text-[18px] sm:text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[5px] sm:mb-[3px]">
                            Invite Tenants
                        </h2>
                        <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%] max-w-[400px]">Send
                            an
                            invite so the
                            tenant can create and account and connect.</p>
                    </div>

                    <div class="flex flex-col gap-4 sm:gap-[14px]">
                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">EMAIL</label>
                            <input type="email" placeholder="TENANT@DOMAIN.COM"
                                class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] leading-[100%] tracking-[-2%]" />
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">PROPERTY</label>
                                <div class="relative">
                                    <select
                                        class="w-full h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] appearance-none uppercase leading-[100%] tracking-[-2%]">
                                        <option>123 OAK ST • UNIT 4</option>
                                        <option>55 CRYSTAL FALLS DR</option>
                                    </select>
                                    <svg class="absolute right-3 top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">UNIT</label>
                                <input type="text" placeholder="UNIT 4 / MAIN / ADU"
                                    class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] uppercase leading-[100%] tracking-[-2%]" />
                            </div>
                        </div>

                        <div>
                            <label
                                class="block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">MESSAGE</label>
                            <textarea
                                class="w-full h-[108px] px-5 py-[15px] rounded-xl border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%] resize-none focus:outline-none">You've been invited to join Gable to manage rent, maintenance, and communication.</textarea>
                        </div>

                        <div class="bg-[#F2F6FF] border border-[#004CE51A] rounded-[12px] px-[17px] py-[13px] mt-[2px]">
                            <p class="text-[13px] sm:text-[14px] font-bold text-[#004CE5] leading-[18px]">You’ve been
                                invited to join Gable to manage rent, maintenance, and communication.</p>
                        </div>
                    </div>

                    <div
                        class="mt-6 mb-4 sm:mb-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 sm:gap-2">
                        <button @click="$emit('close')"
                            class="h-10 px-5 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] hover:bg-slate-50 transition-colors">CANCEL</button>
                        <button
                            class="h-10 px-[22px] rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] hover:opacity-95 transition-opacity"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                            SEND INVITE
                        </button>
                    </div>
                </div>
            </Transition>
        </div>
    </Teleport>
</template>
