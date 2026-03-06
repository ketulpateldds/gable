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

            <h2 class="text-[20px] font-bold text-[#0F1114] mb-[17px] leading-[100%]">Add Contact</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[18px] gap-y-4 mb-6">
                <div class="flex flex-col gap-[5px]">
                    <label
                        class="ml-1 text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%]">Full
                        Name</label>
                    <input v-model="formData.title" type="text" placeholder="UNIT 4 INSPECTION"
                        class="h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] placeholder:uppercase leading-[100%] tracking-[-2%]" />
                </div>

                <div class="flex flex-col gap-2">
                    <label
                        class="ml-1 text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%]">Category</label>
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
                        class="ml-1 text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%]">Email</label>
                    <input v-model="formData.property" placeholder="alex@domain.com" type="text"
                        class="h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] placeholder:uppercase leading-[100%] tracking-[-2%]" />
                </div>

                <div class="flex flex-col gap-2">
                    <label
                        class="ml-1 text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%]">Phone</label>
                    <input v-model="formData.contact" placeholder="(555) 555-5555" type="text"
                        class="h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] placeholder:uppercase leading-[100%] tracking-[-2%]" />
                </div>

                <div class="flex flex-col gap-2">
                    <label
                        class="ml-1 text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%]">Property
                        (optional)</label>
                    <input v-model="formData.location" type="text" placeholder="123 oak st"
                        class="h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] placeholder:uppercase leading-[100%] tracking-[-2%]" />
                </div>

                <div class="flex flex-col gap-2">
                    <label
                        class="ml-1 text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%]">Notes
                        (optional)</label>
                    <input v-model="formData.location" type="text" placeholder="Plumbing Vendor • Licensed"
                        class="h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] placeholder:uppercase leading-[100%] tracking-[-2%]" />
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
