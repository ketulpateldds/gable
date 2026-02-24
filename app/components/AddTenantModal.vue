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
                    class="fixed inset-y-0 right-0 z-[101] w-full sm:w-[544px] bg-white h-full sm:rounded-l-[32px] px-4 sm:px-6 pt-5 pb-6 shadow-2xl flex flex-col overflow-hidden">

                    <div class="absolute inset-0" @click="$emit('close')"></div>
                    <button @click="$emit('close')"
                        class="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 p-2 rounded-full border border-[#0F11141A] flex items-center justify-center text-[#0F1114] hover:bg-slate-50 transition-colors z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <div class="mb-4 sm:mb-[18px] mt-2 sm:mt-0">
                        <h2 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[3px]">Add tenant</h2>
                        <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Create a tenant
                            record and link it to a property/unit.</p>
                    </div>

                    <div class="flex-1 overflow-y-auto scrollbar-hide flex flex-col pr-0 sm:pr-2">
                        <div>
                            <label
                                class="block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">PROFILE
                                PHOTO</label>
                            <div
                                class="flex items-center gap-[11px] w-full h-14 px-4 py-3 rounded-[8px] bg-[#FAFAFA] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114]">
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
                                <span class="text-[12px] font-bold text-[#0F111499] leading-[100%] tracking-[-2%]">No
                                    file chosen</span>
                            </div>
                            <p class="text-[12px] font-bold text-[#0F111499] leading-4 tracking-[-2%] mt-[5px]">Optional
                                (demo: not uploaded anywhere).
                            </p>
                        </div>

                        <div class="mt-[10px]">
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-2">DISPLAY
                                AS COMPANY?</label>
                            <div class="relative">
                                <select
                                    class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] appearance-none uppercase leading-[100%] tracking-[-2%] focus:outline-none">
                                    <option>NO</option>
                                    <option>YES</option>
                                </select>
                                <svg class="absolute right-3 top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
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
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">MIDDLE
                                    NAME</label>
                                <input type="text" placeholder="MIDDLE NAME (OPTIONAL)"
                                    class="w-full h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] uppercase leading-[100%] tracking-[-2%] focus:outline-none" />
                            </div>
                            <div>
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">LAST
                                    NAME</label>
                                <input type="text" placeholder="LAST NAME"
                                    class="w-full h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] uppercase leading-[100%] tracking-[-2%] focus:outline-none" />
                            </div>
                            <div>
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">DATE
                                    OF BIRTH</label>
                                <div class="relative">
                                    <input type="text" placeholder="DD-MM-YYYY"
                                        class="w-full h-11 pl-5 pr-10 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] uppercase leading-[100%] tracking-[-2%] focus:outline-none" />
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
                        </div>

                        <div class="mt-[21px]">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                                <div>
                                    <h3 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-1">Email</h3>
                                    <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Add
                                        more than 1 email if needed.</p>
                                </div>
                                <button
                                    class="h-10 px-[18px] rounded-[80px] border border-[#0F1114] flex items-center gap-[10px] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] hover:bg-slate-50 transition-colors">
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
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px] mt-[18px]">EMAIL</label>
                            <div class="flex items-center gap-[6px]">
                                <input type="email" placeholder="EMAIL@DOMAIN.COM"
                                    class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] uppercase leading-[100%] tracking-[-2%] focus:outline-none" />
                                <button class="h-8 w-8 flex items-center justify-center text-[#0F1114]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="mt-[21px]">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                                <div>
                                    <h3 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-1">Phones</h3>
                                    <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Add
                                        more than 1 phone if needed.</p>
                                </div>
                                <button
                                    class="h-10 px-[18px] rounded-[80px] border border-[#0F1114] flex items-center gap-[10px] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] hover:bg-slate-50 transition-colors">
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
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px] mt-[18px]">PHONE</label>
                            <div class="flex items-center gap-[6px]">
                                <input type="text" placeholder="(###) ###-####"
                                    class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] uppercase leading-[100%] tracking-[-2%] focus:outline-none" />
                                <button class="h-8 w-8 flex items-center justify-center text-[#0F1114]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px] mt-[22px]">
                            <div>
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">PROPERTY</label>
                                <div class="relative">
                                    <select
                                        class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] appearance-none uppercase leading-[100%] tracking-[-2%] focus:outline-none">
                                        <option>123 OAK ST • UNIT 4</option>
                                    </select>
                                    <svg class="absolute right-3 top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
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
                                    class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] uppercase leading-[100%] tracking-[-2%] focus:outline-none" />
                            </div>
                            <div>
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">STATUS</label>
                                <div class="relative">
                                    <select
                                        class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] appearance-none uppercase leading-[100%] tracking-[-2%] focus:outline-none">
                                        <option>ACTIVE</option>
                                    </select>
                                    <svg class="absolute right-4 top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">RENT
                                    (MONTHLY)</label>
                                <input type="text" placeholder="0"
                                    class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] uppercase leading-[100%] tracking-[-2%] focus:outline-none" />
                            </div>
                            <div>
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">LEASE
                                    START</label>
                                <div class="relative">
                                    <input type="text" placeholder="19-02-2026"
                                        class="w-full h-11 pl-5 pr-10 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] text-[#0F111480] uppercase leading-[100%] tracking-[-2%] focus:outline-none" />
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
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">LEASE
                                    END</label>
                                <div class="relative">
                                    <input type="text" placeholder="19-02-2027"
                                        class="w-full h-11 pl-5 pr-10 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] text-[#0F111480] uppercase leading-[100%] tracking-[-2%] focus:outline-none" />
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
                                    class="block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">BALANCE</label>
                                <input type="text" placeholder="0"
                                    class="w-full h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] text-[#0F111480] uppercase leading-[100%] tracking-[-2%] focus:outline-none" />
                                <p class="text-[12px] font-bold text-[#0F111499] mt-[10px] leading-4 tracking-[-2%]">Use
                                    negative for credit, positive for amount due.</p>
                            </div>
                            <div>
                                <label
                                    class="block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">NOTES</label>
                                <textarea placeholder="Add internal notes (access, preferences, etc.)"
                                    class="w-full h-[108px] px-5 py-[15px] rounded-xl border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] resize-none focus:outline-none leading-4 tracking-[-2%]"></textarea>
                            </div>
                        </div>

                        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-[21px]">
                            <div>
                                <h3 class="text-[16px] font-bold text-[#0F1114] leading-4 mb-1">Forwarding address</h3>
                                <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Add
                                    forwarding / mailing address for notices.</p>
                            </div>
                            <button
                                class="h-10 px-[18px] py-3 rounded-[80px] border border-[#0F1114] flex items-center gap-[10px] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] hover:bg-slate-50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                                ADD ADDRESS
                            </button>
                        </div>

                        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
                            <div>
                                <h3 class="text-[16px] font-bold text-[#0F1114] leading-4 mb-1">Emergency contacts</h3>
                            </div>
                            <button
                                class="h-10 px-[18px] py-3 rounded-[80px] border border-[#0F1114] flex items-center gap-[10px] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] hover:bg-slate-50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                                ADD EMERGENCY CONTACT
                            </button>
                        </div>

                        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
                            <div>
                                <h3 class="text-[16px] font-bold text-[#0F1114] leading-4 mb-1">Pets</h3>
                            </div>
                            <button
                                class="h-10 px-[18px] py-3 rounded-[80px] border border-[#0F1114] flex items-center gap-[10px] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] hover:bg-slate-50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                                ADD A PET
                            </button>
                        </div>

                        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
                            <div>
                                <h3 class="text-[16px] font-bold text-[#0F1114] leading-4 mb-1">Vehicles</h3>
                            </div>
                            <button
                                class="h-10 px-[18px] py-3 rounded-[80px] border border-[#0F1114] flex items-center gap-[10px] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] hover:bg-slate-50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                                ADD A VEHICLE
                            </button>
                        </div>

                        <div class="mt-5 pb-9 ">
                            <div class="mb-[22px]">
                                <h3 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-1">Store documents
                                </h3>
                                <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Upload
                                    leases,
                                    insurance, IDs, templates, and more.</p>
                            </div>

                            <label
                                class="block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">DOCUMENTS</label>
                            <div
                                class="flex items-center gap-[11px] w-full h-[56px] px-4 py-3 rounded-[8px] bg-[#FAFAFA] border border-[#0F11141A]">
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
                                <span class="text-[12px] font-bold text-[#0F111499] leading-[100%] tracking-[-2%]">No
                                    file chosen</span>
                            </div>
                            <p class="text-[12px] font-bold text-[#0F111499] leading-4 tracking-[-2%] mt-[5px]">Upload
                                (demo: files are not stored).
                            </p>
                        </div>

                        <div
                            class="shrink-0 mb-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 sm:gap-2">
                            <button @click="$emit('close')"
                                class="h-10 px-6 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] hover:bg-slate-50 transition-colors">CANCEL</button>
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
