<script setup>
const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true
    }
})

const emit = defineEmits(['close', 'save'])

const formData = ref({
    title: '',
    category: 'INSPECTION',
    date: '',
    time: '',
    property: '',
    contact: '',
    location: '',
    status: 'SCHEDULED',
    notes: ''
})

const categories = ['INSPECTION', 'MAINTENANCE', 'LEASING', 'REMINDER']
const statuses = ['SCHEDULED', 'COMPLETED', 'CANCELLED']

const handleClose = () => {
    emit('close')
}

const handleSave = () => {
    emit('save', { ...formData.value })
    handleClose()
}
</script>

<template>
    <div v-if="isOpen"
        class="fixed inset-0 z-50 flex justify-center bg-[#0F111466] backdrop-blur-[2px] overflow-y-auto p-4 py-8 sm:py-12"
        @click.self="handleClose">
        <div
            class="bg-primary rounded-[32px] w-full max-w-[648px] p-6 pt-8 relative animate-in fade-in zoom-in duration-200 my-auto h-fit">

            <button @click="handleClose"
                class="absolute top-6 right-6 w-10 h-10 p-2 flex items-center justify-center rounded-full border border-[#0F11141A] hover:bg-gray-50 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F1114" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>

            <h2 class="text-[20px] font-bold text-[#0F1114] mb-[17px] leading-[100%]">Add event</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[18px] gap-y-4 mb-6">
                <div class="flex flex-col gap-[5px]">
                    <label
                        class="ml-1 text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%]">TITLE</label>
                    <input v-model="formData.title" type="text" placeholder="UNIT 4 INSPECTION"
                        class="h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] placeholder:uppercase leading-[100%] tracking-[-2%]" />
                </div>

                <div class="flex flex-col gap-2">
                    <label
                        class="ml-1 text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%]">CATEGORY</label>
                    <div class="relative">
                        <select v-model="formData.category"
                            class="h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] uppercase leading-[100%] tracking-[-2%] w-full appearance-none focus:outline">
                            <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
                        </select>
                        <div
                            class="absolute right-[14px] top-1/2 -translate-y-1/2 h-5 w-5 flex items-center justify-center pointer-events-none">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col gap-2">
                    <label
                        class="ml-1 text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%]">DATE</label>
                    <div class="relative">
                        <input v-model="formData.date" type="text" placeholder="23-02-2026"
                            class="h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] uppercase leading-[100%] tracking-[-2%] w-full appearance-none focus:outline">
                        <div class="absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col gap-2">
                    <label
                        class="ml-1 text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%]">TIME</label>
                    <div class="relative">
                        <input v-model="formData.time" type="text" placeholder="-- : --"
                            class="h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] uppercase leading-[100%] tracking-[-2%] w-full appearance-none focus:outline">
                        <div
                            class="absolute right-[14px] top-1/2 -translate-y-1/2 h-5 w-5 flex items-center justify-center pointer-events-none">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col gap-2">
                    <label
                        class="ml-1 text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%]">PROPERTY</label>
                    <input v-model="formData.property" placeholder="123 OAK ST" type="text"
                        class="h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] placeholder:uppercase leading-[100%] tracking-[-2%]" />
                </div>

                <div class="flex flex-col gap-2">
                    <label
                        class="ml-1 text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%]">CONTACT</label>
                    <input v-model="formData.contact" placeholder="TENANT / VENDOR / TEAM" type="text"
                        class="h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] placeholder:uppercase leading-[100%] tracking-[-2%]" />
                </div>

                <div class="flex flex-col gap-2">
                    <label
                        class="ml-1 text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%]">LOCATION</label>
                    <input v-model="formData.location" type="text" placeholder="OAKLAND, CA"
                        class="h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] placeholder:uppercase leading-[100%] tracking-[-2%]" />
                </div>

                <div class="flex flex-col gap-2">
                    <label
                        class="ml-1 text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%]">STATUS</label>
                    <div class="relative">
                        <select v-model="formData.status"
                            class="h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] uppercase leading-[100%] tracking-[-2%] w-full appearance-none focus:outline">
                            <option v-for="stat in statuses" :key="stat" :value="stat">{{ stat }}</option>
                        </select>
                        <div
                            class="absolute right-[14px] top-1/2 -translate-y-1/2 h-5 w-5 flex items-center justify-center pointer-events-none">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col gap-2 md:col-span-2">
                    <label
                        class="ml-1 text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%]">NOTES</label>
                    <textarea v-model="formData.notes" placeholder="Add notes, access details, checklist..."
                        class="h-[110px] px-5 py-[15px] rounded-[12px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] tracking-[-2%] focus:outline-none resize-none leading-[100%]"></textarea>
                </div>
            </div>

            <div class="flex justify-end gap-2">
                <button @click="handleClose"
                    class="h-10 px-5 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] text-[#0F1114]">
                    CANCEL
                </button>
                <button @click="handleSave"
                    class="h-10 px-5 rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%]"
                    style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                    SAVE
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes zoom-in {
    from {
        opacity: 0;
        transform: scale(0.95);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

.animate-in {
    animation: zoom-in 0.2s ease-out forwards;
}
</style>
