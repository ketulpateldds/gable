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
                    class="fixed inset-y-0 right-0 z-[101] w-full sm:w-[544px] bg-white h-full sm:rounded-l-[32px] px-4 sm:px-6 py-5 shadow-2xl flex flex-col overflow-hidden">

                    <!-- Close Button -->
                    <button @click="$emit('close')"
                        class="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 p-2 rounded-full border border-neutral-primary/10 flex items-center justify-center text-neutral-primary z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <!-- Header -->
                    <div class="mb-4 sm:mb-[14px] mt-2 sm:mt-0">
                        <h2
                            class="text-[18px] sm:text-[20px] font-bold text-neutral-primary leading-[100%] mb-[5px] sm:mb-[3px]">
                            Invite Tenants
                        </h2>
                        <p
                            class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%] max-w-[400px]">
                            Send an invite so the tenant can create and account and connect.</p>
                    </div>

                    <!-- Form -->
                    <div class="flex flex-col gap-4 sm:gap-[14px]">
                        <div>
                            <BaseInputField label="email" placeholder="TENANT@DOMAIN.COM" type="email" />
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <BaseSelectField label="property" placeholder="select property"
                                    :options="['123 OAK ST • UNIT 4', '55 CRYSTAL FALLS DR']" />
                            </div>

                            <div>
                                <BaseInputField label="unit" placeholder="UNIT 4 / MAIN / ADU" type="text" />
                            </div>
                        </div>

                        <div>
                            <label
                                class="block text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] mb-[5px]">MESSAGE</label>
                            <textarea
                                class="w-full h-[108px] px-5 py-[15px] rounded-xl border border-neutral-primary/10 text-[12px] font-semibold text-neutral-primary leading-[100%] tracking-[-2%] resize-none focus:outline-none">You've been invited to join Gable to manage rent, maintenance, and communication.</textarea>
                        </div>

                        <div
                            class="bg-[#F2F6FF] border border-brand-blue/10 rounded-[12px] px-[17px] py-[13px] mt-[2px]">
                            <p class="text-[13px] sm:text-[14px] font-bold text-brand-blue leading-[18px]">You’ve been
                                invited to join Gable to manage rent, maintenance, and communication.</p>
                        </div>
                    </div>

                    <!-- Footer -->
                    <div
                        class="mt-6 mb-4 sm:mb-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 sm:gap-2">
                        <button @click="$emit('close')"
                            class="h-10 px-5 rounded-[80px] border border-neutral-primary text-[12px] font-extrabold text-neutral-primary uppercase leading-[100%] tracking-[-2%] hover:bg-slate-50 transition-colors">CANCEL</button>
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
