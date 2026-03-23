<script setup>
import { watch, onUnmounted } from 'vue'

const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true
    }
})

const displayedCompany = ref(false)

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
                    class="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-12 pointer-events-none">

                    <div
                        class="w-full max-w-[856px] bg-primary rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 pt-[22px] shadow-2xl relative pointer-events-auto max-h-[90vh] overflow-y-auto scrollbar-hide">

                        <!-- close button -->
                        <button @click="$emit('close')"
                            class="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-neutral-primary/10 flex items-center justify-center text-neutral-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <!-- header -->
                        <div class="mb-[25px]">
                            <h2
                                class="text-[18px] sm:text-[20px] font-bold text-neutral-primary leading-[100%] mb-[3px]">
                                Create Invoice</h2>
                            <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">Create
                                landlord charges like tenant late fees, application fees, and security deposits.</p>
                        </div>

                        <!-- details -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px] mb-4">
                            <div class="col-span-1 sm:col-span-2">
                                <BaseSelectField label="Payee" placeholder="Select Payee" :options="[]" />
                            </div>

                            <div class="col-span-1 sm:col-span-2">
                                <BaseSelectField label="Category" placeholder="Select Category" :options="[]" />
                            </div>

                            <div class="col-span-1">
                                <BaseInputField placeholder="Add Category" />
                            </div>

                            <div class="col-span-1 flex items-center">
                                <button
                                    class="px-6 py-[13px] border border-neutral-primary rounded-[80px] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] text-neutral-primary">
                                    Add</button>
                            </div>

                            <div class="col-span-1">
                                <BaseDateField label="Due On" />
                            </div>

                            <div class="col-span-1">
                                <BaseInputField label="Amount" placeholder="0.00" />
                            </div>

                            <div class="col-span-1">
                                <BaseSelectField label="Payer" placeholder="Select Tenant" :options="[]" />
                            </div>

                            <div class="col-span-1">
                                <BaseSelectField label="Property" placeholder="Select Property" :options="[]" />
                            </div>

                            <div class="col-span-1">
                                <BaseInputField label="Tags" placeholder="Add Tags" />

                                <div class="flex items-center gap-2 mt-2">
                                    <span
                                        class="px-4 py-[10px] bg-[#F5F5F5] rounded-[80px] text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-neutral-primary">Late
                                        Fee</span>
                                    <span
                                        class="px-4 py-[10px] bg-[#F5F5F5] rounded-[80px] text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-neutral-primary">
                                        march</span>
                                </div>
                            </div>

                            <div class="col-span-1 mt-0 sm:mt-5">
                                <button
                                    class="px-6 py-[13px] border border-neutral-primary rounded-[80px] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] text-neutral-primary">
                                    Add</button>
                            </div>

                            <div class="col-span-1 sm:col-span-2">
                                <label
                                    class="ml-1 block text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] mb-[5px]">
                                    Details
                                </label>
                                <textarea placeholder="Enter invoice details"
                                    class="w-full h-[104px] px-5 py-[15px] border border-neutral-primary/10 rounded-[12px] text-[12px] font-medium text-neutral-primary placeholder:text-neutral-primary/40 leading-[100%] tracking-[-2%] focus:outline-none resize-none"></textarea>
                            </div>
                        </div>

                        <!-- upload file -->
                        <div
                            class="py-[47px] bg-[#F2F5FA] border border-dashed border-brand-blue/50 rounded-[12px] text-center">
                            <p class="text-[20px] font-bold text-neutral-primary leading-5 mb-[5px]">
                                Upload File</p>
                            <p class="text-[14px] font-semibold text-brand-blue leading-5">Drag and drop files
                                here or click to browse</p>
                        </div>

                        <!-- buttons -->
                        <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 mt-6">
                            <button @click="$emit('close')"
                                class="py-[13px] px-5 rounded-[80px] border border-neutral-primary text-[12px] font-extrabold text-neutral-primary uppercase leading-[100%] tracking-[-2%] w-full sm:w-auto text-center justify-center flex items-center">
                                CANCEL
                            </button>

                            <button
                                class="py-[10px] px-[18px] rounded-[80px] border border-neutral-primary text-[12px] font-extrabold text-neutral-primary uppercase leading-[100%] tracking-[-2%] flex items-center justify-center gap-2 w-full sm:w-auto text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-send-2">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124" />
                                    <path d="M6.5 12h14.5" />
                                </svg>
                                Send
                            </button>

                            <button
                                class="py-[14px] px-6 rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] flex items-center justify-center gap-2 w-full sm:w-auto"
                                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </Teleport>
</template>
