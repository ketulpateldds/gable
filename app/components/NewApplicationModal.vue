<script setup>
import { watch, onUnmounted } from 'vue'

const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true
    }
})

defineEmits(['close'])

const statusChecks = [
    { id: 'id', label: 'ID' },
    { id: 'income', label: 'INCOME' },
    { id: 'credit', label: 'CREDIT' },
    { id: 'background', label: 'BACKGROUND' },
    { id: 'references', label: 'REFERENCES' }
]

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
                    class="fixed inset-y-0 right-0 z-[101] w-full sm:w-[544px] bg-white h-full sm:rounded-l-[32px] px-4 sm:px-6 pt-5 pb-6 shadow-2xl flex flex-col overflow-hidden">

                    <button @click="$emit('close')"
                        class="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 rounded-full border border-[#0F11141A] flex items-center justify-center text-[#0F1114] hover:bg-slate-50 transition-colors z-10 p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <div class="mb-[17px] sm:mb-[18px] mt-2 sm:mt-0 pr-12">
                        <h2 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[3px]">New Application</h2>
                        <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Capture applicant
                            info, property, and screening status.</p>
                    </div>

                    <div class="flex-1 overflow-y-auto scrollbar-hide flex flex-col pr-0 sm:pr-2">

                        <div class="mt-2">
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

                        <div class="mt-[14px]">
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">UNIT</label>
                            <input type="text" placeholder="UNIT 4 / MAIN / ADU"
                                class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111499] uppercase leading-[100%] tracking-[-2%] focus:outline-none" />
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px] mt-[14px]">
                            <div>
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">FIRST
                                    NAME</label>
                                <input type="text" placeholder="FIRST NAME"
                                    class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] uppercase leading-[100%] tracking-[-2%] focus:outline-none" />
                            </div>
                            <div>
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">APPLICANT
                                    LAST NAME</label>
                                <input type="text" placeholder="LAST NAME"
                                    class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] uppercase leading-[100%] tracking-[-2%] focus:outline-none" />
                            </div>
                            <div>
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">EMAIL</label>
                                <input type="email" placeholder="EMAIL@DOMAIN.COM"
                                    class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] uppercase leading-[100%] tracking-[-2%] focus:outline-none" />
                            </div>
                            <div>
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">PHONE</label>
                                <input type="text" placeholder="(###) ####-####"
                                    class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] uppercase leading-[100%] tracking-[-2%] focus:outline-none" />
                            </div>
                            <div>
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">DESIRED
                                    MOVE-IN DATE</label>
                                <div class="relative">
                                    <input type="text" placeholder="23-02-2026"
                                        class="w-full h-11 pl-5 pr-10 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F1114] uppercase leading-[100%] tracking-[-2%] focus:outline-none" />
                                    <svg class="absolute right-4 top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">HOUSEHOLD
                                    MONTHLY INCOME</label>
                                <input type="text" placeholder="0"
                                    class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] uppercase leading-[100%] tracking-[-2%] focus:outline-none" />
                            </div>
                        </div>

                        <div class="mt-[22px]">
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">STATUS</label>
                            <div class="relative">
                                <select
                                    class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] appearance-none uppercase leading-[100%] tracking-[-2%] focus:outline-none">
                                    <option>NEW</option>
                                    <option>SCREENING</option>
                                    <option>APPROVED</option>
                                    <option>DENIED</option>
                                </select>
                                <svg class="absolute right-3 top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>

                        <div class="mt-[14px]">
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">STATUS</label>
                            <div class="flex items-center overflow-x-auto gap-2 mb-[5px] scrollbar-hide">
                                <label v-for="check in statusChecks" :key="check.id"
                                    class="flex items-center gap-2 h-8 px-4 py-[9px] rounded-[80px] border border-[#0F11141A] bg-[#0F111405] cursor-pointer">
                                    <div class="w-3 h-3 border border-[#0F1114] flex items-center justify-center">
                                    </div>
                                    <span
                                        class="text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-2%]">
                                        {{ check.label }}</span>
                                </label>
                            </div>
                            <p class="ml-1 text-[12px] font-bold text-[#0F111499] leading-4 tracking-[-2%]">Toggle
                                steps as completed (demo).</p>
                        </div>

                        <div class="mt-[18px]">
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">INTERNAL
                                NOTES</label>
                            <textarea placeholder="Add notes about the applicant..."
                                class="w-full h-[108px] px-5 py-[15px] rounded-xl border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111499] resize-none focus:outline-none leading-[100%] tracking-[-2%]"></textarea>
                        </div>

                        <div class="mt-[14px]">
                            <label
                                class="block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">ATTACHMENTS</label>
                            <div
                                class="flex items-center gap-[11px] w-full h-[56px] px-4 py-3 rounded-[8px] bg-[#FAFAFA] border border-[#0F11141A]">
                                <button
                                    class="h-8 px-[14px] py-2 bg-[#0F1114] text-primary rounded-[16px] flex items-center gap-[6px] text-[12px] font-bold uppercase leading-[100%] tracking-[-2%]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M15 22h3a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h3" />
                                        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                        <path d="M12 12v10" />
                                        <path d="m9 15 3-3 3 3" />
                                    </svg>
                                    CHOOSE FILE
                                </button>
                                <span class="text-[12px] font-bold text-[#0F111499] leading-[100%] tracking-[-2%]">No
                                    file chosen</span>
                            </div>
                            <p class="text-[12px] font-bold text-[#0F111499] leading-4 tracking-[-2%] mt-[5px]">
                                Upload paystubs, IDs, documents (demo only).</p>
                        </div>

                        <div class="flex items-center justify-end gap-2 mt-[36px]">
                            <button @click="$emit('close')"
                                class="h-10 px-5 py-[13px] rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] hover:bg-slate-50 transition-colors">CANCEL</button>
                            <button
                                class="h-10 px-5 py-[13px] rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] hover:opacity-95 transition-opacity"
                                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">SAVE</button>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </Teleport>
</template>
