<script setup>

const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true
    }
})

const invitationMessage = ref(`Hi,

You've been invited to join as a Service Pro. Please accept the invitation and complete your profile so you can start receiving job requests.

Thank you!`)

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
                    class="fixed inset-0 z-[101] flex items-center justify-center p-6 pt-[22px] pointer-events-none">

                    <div
                        class="w-full max-w-[856px] bg-primary rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 pt-[22px] shadow-2xl relative pointer-events-auto max-h-[95vh] overflow-y-auto scrollbar-hide">

                        <!-- close button -->
                        <button @click="$emit('close')"
                            class="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#0F11141A] flex items-center justify-center text-[#0F1114] hover:bg-slate-50 transition-colors">
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
                                Invite Service Pro</h2>
                            <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">Send an
                                invitation to a service professional so they can join your network and complete their
                                profile.</p>
                        </div>

                        <!-- invite details -->
                        <div class="mb-[29px]">
                            <h2
                                class="text-[14px] sm:text-[16px] font-bold text-neutral-primary leading-[100%] mb-[18px]">
                                Invite details</h2>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px]">
                                <div class="col-span-1">
                                    <BaseInputField label="First Name" placeholder="Enter first name" />
                                </div>

                                <div class="col-span-1">
                                    <BaseInputField label="Last Name" placeholder="Enter last name" />
                                </div>

                                <div class="col-span-1">
                                    <BaseInputField label="Email" placeholder="name@email.com" type="email" />
                                </div>

                                <div class="col-span-1">
                                    <BaseInputField label="Phone" placeholder="Enter phone number" type="tel" />
                                </div>

                                <div class="col-span-1">
                                    <BaseSelectField label="Category" placeholder="Select category" :options="[]" />
                                </div>

                                <div class="col-span-1">
                                    <BaseSelectField label="Sub-Category" placeholder="Select sub category"
                                        :options="[]" />
                                </div>
                            </div>
                        </div>

                        <!-- invitation message -->
                        <div class="mb-[14px]">
                            <label
                                class="ml-1 block text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] mb-[5px]">
                                INVITATION MESSAGE
                            </label>
                            <textarea v-model="invitationMessage" rows="4"
                                class="w-full px-5 py-[15px] rounded-[12px] border border-neutral-primary/10 text-[12px] font-medium text-neutral-primary leading-[100%] tracking-[-2%] focus:outline-none bg-white resize-none h-[104px] placeholder:text-neutral-primary/40"></textarea>
                        </div>

                        <!-- invitation preview -->
                        <div class="mb-8">
                            <label
                                class="ml-1 block text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] mb-[5px]">
                                INVITATION PREVIEW
                            </label>
                            <div
                                class="w-full px-5 py-[17px] rounded-[12px] bg-neutral-primary/5 border border-neutral-primary/10">
                                <h4
                                    class="text-[14px] font-semibold text-neutral-primary mb-[10px] leading-[100%] tracking-[-2%]">
                                    Message Preview</h4>
                                <div
                                    class="text-[14px] font-semibold text-neutral-primary/60 leading-5 tracking-[-2%] whitespace-pre-wrap">
                                    {{ invitationMessage }}
                                </div>
                            </div>
                        </div>

                        <!-- buttons -->
                        <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 mt-6">
                            <button @click="$emit('close')"
                                class="py-[13px] px-5 rounded-[80px] border border-neutral-primary/10 text-[12px] font-extrabold text-neutral-primary uppercase leading-[100%] tracking-[-2%] w-full sm:w-auto text-center justify-center flex items-center">
                                CANCEL
                            </button>
                            <button
                                class="py-[13px] px-6 rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] flex items-center justify-center gap-2 w-full sm:w-auto"
                                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                                SEND INVITATION
                            </button>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </Teleport>
</template>
