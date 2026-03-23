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
                    class="fixed inset-y-0 right-0 z-[101] w-full sm:w-[544px] bg-white h-full sm:rounded-l-[32px] px-4 sm:px-6 pt-5 pb-6 shadow-2xl flex flex-col overflow-hidden">

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
                    <div class="mb-4 sm:mb-[18px] mt-2 sm:mt-0">
                        <h2 class="text-[20px] font-bold text-neutral-primary leading-[100%] mb-[3px]">Add tenant</h2>
                        <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">Create a
                            tenant record and link it to a property/unit.</p>
                    </div>

                    <!-- Form -->
                    <div class="flex-1 overflow-y-auto scrollbar-hide flex flex-col pr-0 sm:pr-2">
                        <div>
                            <label
                                class="block text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] mb-[5px]">PROFILE
                                PHOTO</label>
                            <div
                                class="flex flex-wrap sm:flex-nowrap items-center gap-[11px] border border-neutral-primary/10 rounded-[8px] pl-4 pr-[25px] py-[11px] bg-[#FAFAFA]">
                                <button
                                    class="flex items-center gap-[6px] bg-neutral-primary text-white px-[14px] py-[8px] rounded-[16px] text-[12px] font-bold uppercase leading-[100%] tracking-[-2%]">
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
                                <span
                                    class="text-[12px] font-bold text-neutral-primary/60 leading-[100%] tracking-[-2%] flex-1">No
                                    file chosen</span>
                            </div>
                            <p class="text-[12px] font-bold text-neutral-primary/60 leading-4 tracking-[-2%] mt-[5px]">
                                Optional
                                (demo: not uploaded anywhere).
                            </p>
                        </div>

                        <!-- Display As Company -->
                        <div class="mt-[10px]">
                            <BaseSelectField label="Display As Company?"
                                :options="[{ label: 'NO', value: 'NO' }, { label: 'YES', value: 'YES' }]" />
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px] mt-[14px]">
                            <div>
                                <BaseInputField label="First Name" placeholder="FIRST NAME" />
                            </div>
                            <div>
                                <BaseInputField label="Middle Name" placeholder="MIDDLE NAME (OPTIONAL)" />
                            </div>
                            <div>
                                <BaseInputField label="Last Name" placeholder="LAST NAME" />
                            </div>
                            <div>
                                <BaseDateField label="Date of Birth" />
                            </div>
                        </div>

                        <!-- Email -->
                        <div class="mt-[21px]">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                                <div>
                                    <h3 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-1">Email
                                    </h3>
                                    <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                        Add
                                        more than 1 email if needed.</p>
                                </div>
                                <button
                                    class="h-10 px-[18px] rounded-[80px] border border-neutral-primary flex items-center gap-[10px] text-[12px] font-extrabold text-neutral-primary uppercase leading-[100%] tracking-[-2%]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    ADD EMAIL
                                </button>
                            </div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] mb-[5px] mt-[18px]">EMAIL</label>
                            <div class="flex items-center gap-[6px]">
                                <input type="email" placeholder="EMAIL@DOMAIN.COM"
                                    class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-neutral-primary/10 text-[12px] font-semibold text-neutral-primary placeholder:text-neutral-primary/60 uppercase leading-[100%] tracking-[-2%] focus:outline-none" />
                                <button class="h-8 w-8 flex items-center justify-center text-neutral-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- Phones -->
                        <div class="mt-[21px]">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                                <div>
                                    <h3 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-1">Phones
                                    </h3>
                                    <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                        Add
                                        more than 1 phone if needed.</p>
                                </div>
                                <button
                                    class="h-10 px-[18px] rounded-[80px] border border-neutral-primary flex items-center gap-[10px] text-[12px] font-extrabold text-neutral-primary uppercase leading-[100%] tracking-[-2%]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    ADD PHONE
                                </button>
                            </div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] mb-[5px] mt-[18px]">PHONE</label>
                            <div class="flex items-center gap-[6px]">
                                <input type="text" placeholder="(###) ###-####"
                                    class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-neutral-primary/10 text-[12px] font-semibold text-neutral-primary placeholder:text-neutral-primary/60 uppercase leading-[100%] tracking-[-2%] focus:outline-none" />
                                <button class="h-8 w-8 flex items-center justify-center text-neutral-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- Property and Unit -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px] mt-[22px]">
                            <div>
                                <BaseSelectField label="Property"
                                    :options="[{ label: '123 OAK ST • UNIT 4', value: '123 OAK ST • UNIT 4' }]" />
                            </div>

                            <div>
                                <BaseInputField label="Unit" placeholder="UNIT 4 / MAIN / ADU" />
                            </div>

                            <div>
                                <BaseSelectField label="Status" :options="[{ label: 'ACTIVE', value: 'ACTIVE' }]" />
                            </div>

                            <div>
                                <BaseInputField label="Rent (Monthly)" placeholder="0" />
                            </div>

                            <div>
                                <BaseDateField label="Lease Start" />
                            </div>

                            <div>
                                <BaseDateField label="Lease End" />
                            </div>

                            <div>
                                <BaseInputField label="Balance" placeholder="0" />
                                <p
                                    class="text-[12px] font-bold text-neutral-primary/60 mt-[10px] leading-4 tracking-[-2%]">
                                    Use negative for credit, positive for amount due.</p>
                            </div>
                            <div>
                                <label
                                    class="block text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] mb-[5px]">NOTES</label>
                                <textarea placeholder="Add internal notes (access, preferences, etc.)"
                                    class="w-full h-[108px] px-5 py-[15px] rounded-xl border border-neutral-primary/10 text-[12px] font-semibold text-neutral-primary placeholder:text-neutral-primary/60 resize-none focus:outline-none leading-4 tracking-[-2%]"></textarea>
                            </div>
                        </div>

                        <!-- Forwarding address -->
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-[21px]">
                            <div>
                                <h3 class="text-[16px] font-bold text-neutral-primary leading-4 mb-1">Forwarding address
                                </h3>
                                <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">Add
                                    forwarding / mailing address for notices.</p>
                            </div>
                            <button
                                class="h-10 px-[18px] py-3 rounded-[80px] border border-neutral-primary flex items-center gap-[10px] text-[12px] font-extrabold text-neutral-primary uppercase leading-[100%] tracking-[-2%]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                                ADD ADDRESS
                            </button>
                        </div>

                        <!-- Emergency contacts -->
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
                            <div>
                                <h3 class="text-[16px] font-bold text-neutral-primary leading-4 mb-1">Emergency contacts
                                </h3>
                            </div>
                            <button
                                class="h-10 px-[18px] py-3 rounded-[80px] border border-neutral-primary flex items-center gap-[10px] text-[12px] font-extrabold text-neutral-primary uppercase leading-[100%] tracking-[-2%]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                                ADD EMERGENCY CONTACT
                            </button>
                        </div>

                        <!-- Pets -->
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
                            <div>
                                <h3 class="text-[16px] font-bold text-neutral-primary leading-4 mb-1">Pets</h3>
                            </div>
                            <button
                                class="h-10 px-[18px] py-3 rounded-[80px] border border-neutral-primary flex items-center gap-[10px] text-[12px] font-extrabold text-neutral-primary uppercase leading-[100%] tracking-[-2%]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                                ADD A PET
                            </button>
                        </div>

                        <!-- Vehicles -->
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
                            <div>
                                <h3 class="text-[16px] font-bold text-neutral-primary leading-4 mb-1">Vehicles</h3>
                            </div>
                            <button
                                class="h-10 px-[18px] py-3 rounded-[80px] border border-neutral-primary flex items-center gap-[10px] text-[12px] font-extrabold text-neutral-primary uppercase leading-[100%] tracking-[-2%]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                                ADD A VEHICLE
                            </button>
                        </div>

                        <!-- Store documents -->
                        <div class="mt-5 pb-9 ">
                            <div class="mb-[22px]">
                                <h3 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-1">Store
                                    documents
                                </h3>
                                <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                    Upload leases, insurance, IDs, templates, and more.</p>
                            </div>

                            <label
                                class="block text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] mb-[5px]">DOCUMENTS</label>
                            <div
                                class="flex items-center gap-[11px] w-full h-[56px] px-4 py-3 rounded-[8px] bg-[#FAFAFA] border border-neutral-primary/10">
                                <button
                                    class="h-8 px-[14px] py-2 bg-[#0F1114] text-white rounded-[16px] flex items-center gap-[6px] text-[12px] font-bold uppercase leading-[100%] tracking-[-2%]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon icon-tabler icons-tabler-outline icon-tabler-file-upload">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                        <path
                                            d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
                                        <path d="M12 11v6" />
                                        <path d="M9.5 13.5l2.5 -2.5l2.5 2.5" />
                                    </svg>
                                    CHOOSE FILE
                                </button>
                                <span
                                    class="text-[12px] font-bold text-neutral-primary/60 leading-[100%] tracking-[-2%]">No
                                    file chosen</span>
                            </div>
                            <p class="text-[12px] font-bold text-neutral-primary/60 leading-4 tracking-[-2%] mt-[5px]">
                                Upload (demo: files are not stored).
                            </p>
                        </div>

                        <!-- Buttons -->
                        <div
                            class="shrink-0 mb-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 sm:gap-2">
                            <button @click="$emit('close')"
                                class="h-10 px-6 rounded-[80px] border border-neutral-primary text-[12px] font-extrabold text-neutral-primary uppercase leading-[100%] tracking-[-2%] hover:bg-slate-50 transition-colors">CANCEL</button>
                            <button
                                class="h-10 px-6 rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] hover:opacity-95 transition-opacity"
                                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                                SEND INVITE
                            </button>
                        </div>
                    </div>
                </div>
            </Transition>

        </div>

    </Teleport>
</template>
