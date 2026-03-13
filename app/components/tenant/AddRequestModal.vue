<script setup>
import { ref } from 'vue';

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['close']);

const close = () => {
    emit('close');
};

const location = ref('RENTAL ADDRESS');
const priority = ref('NORMAL');
const mainCategory = ref('CATEGORY');
const subCategory = ref('SUB-CATEGORY');
const title = ref('');
const description = ref('');
const code = ref('');

const timeWindows = ref({
    morning: false,
    afternoon: false,
    evening: false
});

const accessAuthorized = ref(false);

const pets = ref({
    cat: false,
    dog: false,
    other: false
});

const date = ref('');

</script>

<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 flex justify-end bg-[#0F1114]/50 backdrop-blur-[2px]"
        @click.self="close">
        <div class="bg-white rounded-none sm:rounded-l-[24px] w-full sm:max-w-[544px] h-full relative shadow-xl flex flex-col">

            <button @click="close"
                class="absolute top-6 right-6 w-10 h-10 rounded-full border border-[#0F11141A] flex items-center justify-center text-[#0F1114] hover:bg-gray-50 transition-colors z-10">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </button>

            <div class="pt-5 px-6 mb-4">
                <h2 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[3px]">Add Request</h2>
                <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Provide details and
                    photos to help the team resolve the issue faster.</p>
            </div>

            <div class="flex-1 overflow-y-auto scrollbar-hide">
                <div class="px-6 mb-5">
                    <h3 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[10px]">Request</h3>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="col-span-1">
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">LOCATION</label>
                            <div class="relative">
                                <select v-model="location"
                                    class="w-full py-[15px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] appearance-none bg-white focus:outline-none">
                                    <option>RENTAL ADDRESS</option>
                                    <option>COMMON AREA</option>
                                </select>
                                <svg class="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none"
                                    width="12" height="6" viewBox="0 0 12 6" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5 5L9 1" stroke="#0F1114" stroke-width="1.25" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div class="col-span-1">
                            <label
                                lass="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">REQUEST
                                PRIORITY</label>
                            <div class="relative">
                                <select v-model="priority"
                                    class="w-full py-[15px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] appearance-none bg-white focus:outline-none">
                                    <option>NORMAL</option>
                                    <option>HIGH</option>
                                    <option>URGENT</option>
                                </select>
                                <svg class="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none"
                                    width="12" height="6" viewBox="0 0 12 6" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5 5L9 1" stroke="#0F1114" stroke-width="1.25" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="px-6 mb-5">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-16 mb-3">
                        <div>
                            <h3 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[1px]">Photos</h3>
                            <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">
                                Provide details and photos to help the team resolve the issue faster.</p>
                        </div>
                        <button
                            class="shrink-0 pl-[18px] pr-[21px] py-3 rounded-[80px] border border-[#0F1114] flex items-center gap-[10px] text-[12px] font-extrabold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] hover:bg-gray-50 transition-colors">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 1V11M1 6H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            ADD PHOTO
                        </button>
                    </div>

                    <div class="grid grid-cols-3 gap-2">
                        <div
                            class="h-24 rounded-[8px] border border-[#0F11141A] bg-[#FAFAFA] flex items-center justify-center">
                            <span
                                class="text-[12px] font-extrabold text-[#0F111466] uppercase leading-[100%] tracking-[-2%]">PHOTO
                                1</span>
                        </div>
                        <div
                            class="h-24 rounded-[8px] border border-[#0F11141A] bg-[#FAFAFA] flex items-center justify-center">
                            <span
                                class="text-[12px] font-extrabold text-[#0F111466] uppercase leading-[100%] tracking-[-2%]">PHOTO
                                2</span>
                        </div>
                        <div
                            class="h-24 rounded-[8px] border border-[#0F11141A] bg-[#FAFAFA] flex items-center justify-center">
                            <span
                                class="text-[12px] font-extrabold text-[#0F111466] uppercase leading-[100%] tracking-[-2%]">PHOTO
                                3</span>
                        </div>
                    </div>
                </div>

                <div class="px-6 mb-5">
                    <h3 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[1px]">Category</h3>
                    <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%] mb-[10px]">Select the
                        issue category. Only the main category is required, but you can choose sub-categories to narrow
                        your request. If you don't see the right category, select "Other".</p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-[14px]">
                        <div class="col-span-1">
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">MAIN
                                CATEGORY</label>
                            <div class="relative">
                                <select v-model="mainCategory"
                                    class="w-full py-[15px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] appearance-none bg-white focus:outline-none">
                                    <option>CATEGORY</option>
                                    <option>PLUMBING</option>
                                    <option>ELECTRICAL</option>
                                    <option>APPLIANCE</option>
                                    <option>OTHER</option>
                                </select>
                                <svg class="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none"
                                    width="12" height="6" viewBox="0 0 12 6" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5 5L9 1" stroke="#0F1114" stroke-width="1.25" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div class="col-span-1">
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">SUB-CATEGORY</label>
                            <div class="relative">
                                <select v-model="subCategory"
                                    class="w-full py-[15px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] appearance-none bg-white focus:outline-none">
                                    <option>SUB-CATEGORY</option>
                                    <option>WATER HEATER</option>
                                    <option>SINK</option>
                                    <option>TOILET</option>
                                </select>
                                <svg class="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none"
                                    width="12" height="6" viewBox="0 0 12 6" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5 5L9 1" stroke="#0F1114" stroke-width="1.25" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="mb-[18px]">
                        <label
                            class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">TITLE</label>
                        <input v-model="title" type="text" placeholder="E.G., WATER HEATER NOT PRODUCING HOT WATER"
                            class="w-full py-[14px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] focus:outline-none" />
                        <p class="text-[12px] font-bold text-[#0F111499] leading-4 tracking-[-2%] mt-[5px] px-2">
                            Tip: Add what's happening + where + when it started.</p>
                    </div>

                    <div>
                        <label
                            class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">DESCRIPTION</label>
                        <textarea v-model="description"
                            placeholder="Describe the issue, any error codes, what you tried, and urgency..."
                            class="w-full h-[108px] px-5 py-[15px] rounded-[12px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] focus:outline-none resize-none"></textarea>
                    </div>
                </div>

                <div class="px-6 mb-4">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-14 mb-[10px]">
                        <div>
                            <h3 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[1px]">Available date &
                                time
                            </h3>
                            <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">
                                Please provide the convenient date and time to arrange the maintenance.</p>
                        </div>
                        <button
                            class="shrink-0 pl-[18px] pr-[21px] py-3 rounded-[80px] border border-[#0F1114] flex items-center gap-[10px] text-[12px] font-extrabold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] hover:bg-gray-50 transition-colors">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 1V11M1 6H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            ADD DATE
                        </button>
                    </div>

                    <div class="relative pr-8 mb-4">
                        <button class="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-[#0F1114]">
                            <svg width="16" height="16" viewBox="0 0 14 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>

                        <div class="mb-[13px]">
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">DATE
                                (MM/DD/YYYY)</label>
                            <div class="relative w-full sm:w-[240px]">
                                <input v-model="date" type="text" placeholder="DD-MM-YYYY"
                                    class="w-full py-[14px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F1114] focus:outline-none" />
                                <svg class="absolute right-[14px] top-1/2 -translate-y-1/2 w-5 h-5 text-[#0F1114]"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                            </div>
                        </div>

                        <div class="mb-[13px]">
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">TIME
                                WINDOWS</label>
                            <div class="flex flex-wrap gap-1">
                                <label class="cursor-pointer">
                                    <input type="checkbox" v-model="timeWindows.morning" class="hidden" />
                                    <div
                                        class="py-[9px] px-4 rounded-[80px] border flex items-center gap-2 border-[#0F11141A] bg-[#0F111405] text-[#0F1114]">
                                        <div :class="[
                                            'w-3 h-3 border flex items-center justify-center shrink-0 transition-colors',
                                            timeWindows.morning ? 'bg-[#004CE5] border-[#004CE5]' : 'border-[#0F1114]'
                                        ]">
                                            <svg v-if="timeWindows.morning" width="9" height="9" viewBox="0 0 24 24"
                                                fill="none" stroke="white" stroke-width="3.5">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span
                                            class="text-[12px] font-semibold uppercase leading-[100%] tracking-[-0.02em]">
                                            8 AM - 12 PM</span>
                                    </div>
                                </label>
                                <label class="cursor-pointer">
                                    <input type="checkbox" v-model="timeWindows.afternoon" class="hidden" />
                                    <div
                                        class="py-[9px] px-4 rounded-[80px] border flex items-center gap-2 border-[#0F11141A] bg-[#0F111405] text-[#0F1114]">
                                        <div :class="[
                                            'w-3 h-3 border flex items-center justify-center shrink-0 transition-colors',
                                            timeWindows.afternoon ? 'bg-[#004CE5] border-[#004CE5]' : 'border-[#0F1114]'
                                        ]">
                                            <svg v-if="timeWindows.afternoon" width="9" height="9" viewBox="0 0 24 24"
                                                fill="none" stroke="white" stroke-width="3.5">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span
                                            class="text-[12px] font-semibold uppercase leading-[100%] tracking-[-0.02em]">
                                            12 PM - 4 PM</span>
                                    </div>
                                </label>
                                <label class="cursor-pointer">
                                    <input type="checkbox" v-model="timeWindows.evening" class="hidden" />
                                    <div
                                        class="py-[9px] px-4 rounded-[80px] border flex items-center gap-2 border-[#0F11141A] bg-[#0F111405] text-[#0F1114]">
                                        <div :class="[
                                            'w-3 h-3 border flex items-center justify-center shrink-0 transition-colors',
                                            timeWindows.evening ? 'bg-[#004CE5] border-[#004CE5]' : 'border-[#0F1114]'
                                        ]">
                                            <svg v-if="timeWindows.evening" width="9" height="9" viewBox="0 0 24 24"
                                                fill="none" stroke="white" stroke-width="3.5">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span
                                            class="text-[12px] font-semibold uppercase leading-[100%] tracking-[-0.02em]">
                                            4 PM - 8 PM</span>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <p class="text-[12px] font-bold text-[#0F111499] leading-4 tracking-[-2%]">Tip: Add what’s
                            happening + where + when it started.</p>
                    </div>
                </div>

                <div class="px-6 mb-5">
                    <h3 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[1px]">Property Access
                        Authorization
                    </h3>
                    <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%] mb-[13px]">Grant
                        permission for the team to use the key in tenant's absence.</p>

                    <label class="cursor-pointer inline-block mb-[14px]">
                        <input type="checkbox" v-model="accessAuthorized" class="hidden" />
                        <div
                            class="py-[9px] px-4 rounded-[80px] border flex items-center gap-2 border-[#0F11141A] bg-[#0F111405] text-[#0F1114]">
                            <div :class="[
                                'w-3 h-3 border flex items-center justify-center shrink-0 transition-colors',
                                accessAuthorized ? 'bg-[#004CE5] border-[#004CE5]' : 'border-[#0F1114]'
                            ]">
                                <svg v-if="accessAuthorized" width="9" height="9" viewBox="0 0 24 24" fill="none"
                                    stroke="white" stroke-width="3.5">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <span class="text-[12px] font-semibold uppercase leading-[100%] tracking-[-0.02em]">
                                ALLOW TO ENTER</span>
                        </div>
                    </label>

                    <div>
                        <label
                            class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">CODE</label>
                        <input v-model="code" type="text" placeholder="DOOR / GATE / LOCKBOX CODE (O..."
                            class="w-full sm:w-[50%] py-[14px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] focus:outline-none" />
                    </div>
                </div>

                <div class="px-6 mb-6">
                    <h3 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-4">Pets in residence</h3>
                    <div class="flex flex-wrap gap-1">
                        <label class="cursor-pointer">
                            <input type="checkbox" v-model="pets.cat" class="hidden" />
                            <div
                                class="py-[9px] px-4 rounded-[80px] border flex items-center gap-2 border-[#0F11141A] bg-[#0F111405] text-[#0F1114]">
                                <div :class="[
                                    'w-3 h-3 border flex items-center justify-center shrink-0 transition-colors',
                                    pets.cat ? 'bg-[#004CE5] border-[#004CE5]' : 'border-[#0F1114]'
                                ]">
                                    <svg v-if="pets.cat" width="9" height="9" viewBox="0 0 24 24" fill="none"
                                        stroke="white" stroke-width="3.5">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <span class="text-[12px] font-semibold uppercase leading-[100%] tracking-[-0.02em]">
                                    CAT</span>
                            </div>
                        </label>
                        <label class="cursor-pointer">
                            <input type="checkbox" v-model="pets.dog" class="hidden" />
                            <div
                                class="py-[9px] px-4 rounded-[80px] border flex items-center gap-2 border-[#0F11141A] bg-[#0F111405] text-[#0F1114]">
                                <div :class="[
                                    'w-3 h-3 border flex items-center justify-center shrink-0 transition-colors',
                                    pets.dog ? 'bg-[#004CE5] border-[#004CE5]' : 'border-[#0F1114]'
                                ]">
                                    <svg v-if="pets.dog" width="9" height="9" viewBox="0 0 24 24" fill="none"
                                        stroke="white" stroke-width="3.5">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <span class="text-[12px] font-semibold uppercase leading-[100%] tracking-[-0.02em]">
                                    Dog</span>
                            </div>
                        </label>
                        <label class="cursor-pointer">
                            <input type="checkbox" v-model="pets.other" class="hidden" />
                            <div
                                class="py-[9px] px-4 rounded-[80px] border flex items-center gap-2 border-[#0F11141A] bg-[#0F111405] text-[#0F1114]">
                                <div :class="[
                                    'w-3 h-3 border flex items-center justify-center shrink-0 transition-colors',
                                    pets.other ? 'bg-[#004CE5] border-[#004CE5]' : 'border-[#0F1114]'
                                ]">
                                    <svg v-if="pets.other" width="9" height="9" viewBox="0 0 24 24" fill="none"
                                        stroke="white" stroke-width="3.5">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <span class="text-[12px] font-semibold uppercase leading-[100%] tracking-[-0.02em]">
                                    Other</span>
                            </div>
                        </label>
                    </div>
                </div>

                <div class="px-6 flex items-center justify-end gap-2 mb-6">
                    <button @click="close"
                        class="px-5 py-[13px] rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase tracking-[-0.02em] leading-[100%] hover:bg-gray-50 transition-colors">
                        CANCEL
                    </button>
                    <button
                        class="px-6 py-[14px] rounded-[80px] text-[12px] font-extrabold text-primary uppercase tracking-[-0.02em] leading-[100%]"
                        style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                        SAVE
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
