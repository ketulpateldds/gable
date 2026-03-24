<script setup>
const props = defineProps({
    open: Boolean,
})
const emit = defineEmits(['close'])

const form = reactive({
    location: '123 OAK ST • UNIT 4',
    priority: 'NORMAL',
    mainCategory: 'PLUMBING',
    subCategory: '',
    title: '',
    description: '',
    allowToEnter: false,
    accessCode: '',
    pets: { cat: false, dog: false, other: false },
})

const photos = ref([
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80',
    'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&q=80',
    'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80',
])

const dateOptions = ref([
    { date: '23-02-2026', windows: { am: false, mid: false, pm: false } },
])

function removePhoto(i) {
    photos.value.splice(i, 1)
}

function removeDate(i) {
    dateOptions.value.splice(i, 1)
}

function close() {
    emit('close')
}

// Prevent background scroll when open
watch(() => props.open, (val) => {
    document.body.style.overflow = val ? 'hidden' : ''
})
</script>

<template>
    <Teleport to="body">

        <Transition name="modal-fade">
            <div v-if="open" class="fixed inset-0 z-[999] flex items-start justify-center overflow-y-auto"
                style="background: rgba(0,0,0,0.45);" @click.self="close">

                <div
                    class="relative bg-primary rounded-[24px] w-full max-w-[856px] my-4 sm:my-10 px-4 sm:px-6 pt-[23px] pb-[25px]">

                    <!-- Header -->
                    <div class="flex items-start justify-between mb-[19px]">
                        <div>
                            <h2 class="text-[20px] font-bold text-neutral-primary leading-[100%]">New Request</h2>
                            <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">Provide
                                details and photos to help the team resolve the issue faster.</p>
                        </div>
                        <button @click="close"
                            class="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-primary/10 text-neutral-primary shrink-0 mt-[1px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>

                    <!-- Form -->
                    <div class="flex flex-col gap-4">

                        <!-- Request -->
                        <div class="rounded-[24px] border border-neutral-primary/10 pb-[25px] pt-[21px]">
                            <p
                                class="text-[16px] font-bold text-neutral-primary leading-[100%] pb-5 px-4 sm:px-[25px] border-b border-neutral-primary/10 mb-[22px]">
                                Request</p>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:px-[25px]">
                                <div class="col-span-1">
                                    <BaseSelectField label="LOCATION"
                                        :options="['123 OAK ST • UNIT 4', '55 Crystal Falls Dr', '123 Oak St • Unit 4', 'Portfolio']" />
                                </div>

                                <div class="col-span-1">
                                    <BaseSelectField label="REQUEST PRIORITY" :options="['NORMAL', 'HIGH', 'LOW']" />
                                </div>
                            </div>
                        </div>

                        <!-- Photos -->
                        <div class="rounded-[24px] border border-neutral-primary/10 pb-[25px] pt-[18px]">
                            <div
                                class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-neutral-primary/10 pb-[18px] px-4 sm:px-[25px] mb-6 gap-4 sm:gap-0">
                                <div>
                                    <p class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[2px]">Photos
                                    </p>
                                    <p class="text-[12px] font-semibold text-neutral-primary/60 leading-[100%]">Include
                                        images to provide a clear picture of the problem.</p>
                                </div>
                                <button
                                    class="py-[11px] px-[18px] rounded-[80px] border border-neutral-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] text-neutral-primary flex items-center gap-[10px] shrink-0">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 5l0 14" />
                                        <path d="M5 12l14 0" />
                                    </svg>
                                    ADD PHOTOS
                                </button>
                            </div>

                            <div v-if="photos.length" class="grid grid-cols-2 sm:grid-cols-3 gap-4 px-4 sm:px-[25px]">
                                <div v-for="(photo, i) in photos" :key="i"
                                    class="relative rounded-[12px] overflow-hidden h-[137px]">
                                    <img :src="photo" class="w-full h-full object-cover" />
                                    <button @click="removePhoto(i)"
                                        class="absolute top-2 right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-neutral-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Category -->
                        <div class="rounded-[24px] border border-neutral-primary/10 pb-[25px] pt-5">
                            <div class="px-4 sm:px-[25px] pb-[21px] border-b border-neutral-primary/10 mb-[22px]">
                                <p class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[2px]">Category
                                </p>
                                <p class="text-[12px] font-semibold text-neutral-primary/60 leading-[100%]">Select the
                                    issue category. Only the main category is required, but you can choose
                                    sub-categories to narrow your request. If you don't see the right category, select
                                    "Other".</p>
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:px-[25px]">
                                <div class="col-span-1">
                                    <BaseSelectField label="MAIN CATEGORY"
                                        :options="['Plumbing', 'Electrical', 'HVAC', 'Appliances', 'Pest Control', 'Other']" />
                                </div>
                                <div class="col-span-1">
                                    <BaseSelectField label="SUB-CATEGORY" placeholder="(OPTIONAL)"
                                        :options="['Plumbing', 'Electrical', 'HVAC', 'Appliances', 'Pest Control', 'Other']" />
                                </div>
                            </div>
                        </div>

                        <!-- Details -->
                        <div class="rounded-[24px] border border-neutral-primary/10 pb-[25px] pt-[21px]">
                            <p
                                class="text-[16px] font-bold text-neutral-primary leading-[100%] px-4 sm:px-[25px] pb-5 border-b border-neutral-primary/10 mb-[22px]">
                                Details</p>

                            <div class="px-4 sm:px-[25px] mb-[14px]">
                                <BaseInputField label="TITLE" placeholder="EXAMPLE: LEAKING FAUCET UNDER KITCHEN SINK"
                                    v-model="form.title" />
                            </div>
                            <div class="px-4 sm:px-[25px]">
                                <label
                                    class="ml-1 block text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] mb-[5px]">DESCRIPTION</label>
                                <textarea v-model="form.description" rows="4"
                                    placeholder="Describe the issue, access instructions, and any helpful details..."
                                    class="w-full h-[104px] px-5 py-[15px] rounded-[12px] border-2 border-neutral-primary/10 text-[12px] font-semibold text-neutral-primary leading-[100%] tracking-[-2%] placeholder:text-neutral-primary/60 outline-none focus:ring-0" />
                            </div>
                        </div>

                        <!-- ── Available date & time ── -->
                        <div class="rounded-[24px] border border-neutral-primary/10 pb-[21px] pt-5">
                            <div
                                class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-neutral-primary/10 pb-[18px] px-4 sm:px-[25px] mb-6 gap-4 sm:gap-0">
                                <div>
                                    <p class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[2px]">
                                        Available date &amp; time</p>
                                    <p class="text-[12px] font-semibold text-neutral-primary/60 leading-[100%]">Please
                                        provide the convenient date and time to arrange the maintenance.</p>
                                </div>
                                <button
                                    class="py-[11px] px-[16px] rounded-[80px] border border-neutral-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] text-neutral-primary flex items-center gap-[10px] shrink-0">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 5l0 14" />
                                        <path d="M5 12l14 0" />
                                    </svg>
                                    ADD DATE
                                </button>
                            </div>

                            <div class="flex flex-col gap-3 px-4 sm:px-[24px]">
                                <div v-for="(opt, i) in dateOptions" :key="i"
                                    class="rounded-[12px] border border-neutral-primary/10 pt-[21px] pl-4 sm:pl-[25px] pr-4 sm:pr-[23px] pb-5 relative">

                                    <button @click="removeDate(i)"
                                        class="absolute top-[9px] right-[9px] text-neutral-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </button>

                                    <p class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[18px]">
                                        Option
                                        {{ i + 1 }}</p>

                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-[5px]">
                                        <div class="col-span-1">
                                            <BaseDateField label="DATE (MM/DD/YYYY)" v-model="opt.date" />
                                            <p
                                                class="ml-1 text-[12px] text-[#0F111499] tracking-[-2%] font-bold mt-[5px]">
                                                Calendar</p>
                                        </div>

                                        <div>
                                            <label
                                                class="ml-1 block text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] mb-[11px]">TIME
                                                WINDOWS</label>
                                            <div class="flex flex-wrap items-center gap-2 sm:gap-1">
                                                <label
                                                    v-for="(tw, key) in [{ label: '8AM - 12PM', key: 'am' }, { label: '12PM - 4PM', key: 'mid' }, { label: '4PM - 8PM', key: 'pm' }]"
                                                    :key="tw.key"
                                                    class="border border-neutral-primary/10 rounded-[80px] bg-neutral-primary/5 px-3 sm:pl-[15px] sm:pr-[14px] py-[9px] flex items-center gap-2 text-[12px] font-semibold text-neutral-primary uppercase leading-[100%] tracking-[-2%] cursor-pointer whitespace-nowrap">
                                                    <input type="checkbox" v-model="opt.windows[tw.key]"
                                                        class="w-[12px] h-[12px] accent-[#004CE5] cursor-pointer" />
                                                    {{ tw.label }}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p class="px-[25px] text-[12px] font-bold text-neutral-primary/60 leading-4 tracking-[-2%]">
                                Add at
                                least one date option so the team can schedule quickly.</p>
                        </div>

                        <!-- Property Access Authorization -->
                        <div class="rounded-[24px] border border-neutral-primary/10 pb-[25px] pt-5">
                            <div class="px-4 sm:px-[25px] pb-[21px] border-b border-neutral-primary/10 mb-6">
                                <p class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[2px]">Property
                                    Access Authorization</p>
                                <p class="text-[12px] font-semibold text-neutral-primary/60 leading-[100%]">Grant
                                    permission for the team to use the key in tenant's absence.</p>
                            </div>
                            <div class="px-4 sm:px-[25px]">
                                <label
                                    class="border border-neutral-primary/10 rounded-[80px] bg-neutral-primary/5 pl-4 pr-[17px] py-[9px] flex items-center gap-2 mb-[22px] cursor-pointer w-fit">
                                    <input type="checkbox" v-model="form.allowToEnter"
                                        class="w-[12px] h-[12px] accent-[#004CE5]" />
                                    <span
                                        class="text-[12px] font-semibold text-neutral-primary uppercase leading-[100%] tracking-[-2%]">ALLOW
                                        TO ENTER</span>
                                </label>

                                <div>
                                    <label
                                        class="ml-[6px] block text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] mb-[5px]">CODE
                                        - DOOR/GATE/LOCKBOX (OPTIONAL)</label>
                                    <input v-model="form.accessCode" type="text" placeholder="EXAMPLE: 1234 (OPTIONAL)"
                                        class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-neutral-primary/10 text-[12px] font-semibold text-neutral-primary leading-[100%] tracking-[-2%] placeholder:uppercase outline-none" />
                                </div>
                            </div>
                        </div>

                        <!-- Pets in residence -->
                        <div class="rounded-[24px] border border-neutral-primary/10 pb-[26px] pt-[21px]">
                            <p
                                class="text-[16px] font-bold text-neutral-primary leading-[100%] px-4 sm:px-[25px] pb-5 border-b border-neutral-primary/10 mb-6">
                                Pets in residence</p>

                            <div class="flex flex-wrap items-center gap-2 px-4 sm:px-[25px]">
                                <label v-for="pet in ['cat', 'dog', 'other']" :key="pet"
                                    class="border border-neutral-primary/10 rounded-[80px] bg-neutral-primary/5 px-4 py-[9px] flex items-center gap-[8px] cursor-pointer">
                                    <input type="checkbox" v-model="form.pets[pet]"
                                        class="w-[12px] h-[12px] accent-[#004CE5]" />
                                    <span
                                        class="text-[12px] font-semibold text-neutral-primary uppercase leading-[100%] tracking-[-2%]">
                                        {{ pet }}</span>
                                </label>
                            </div>
                        </div>

                        <!-- Buttons -->
                        <div class="flex flex-col sm:flex-row items-center justify-end gap-2 pt-1 pb-1">
                            <button @click="close"
                                class="w-full sm:w-auto py-[13px] px-5 rounded-[80px] border border-neutral-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] text-neutral-primary">
                                CANCEL
                            </button>
                            <button
                                class="w-full sm:w-auto py-[14px] px-5 rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%]"
                                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                                SAVE
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </Transition>

    </Teleport>
</template>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.2s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-enter-active .relative,
.modal-fade-leave-active .relative {
    transition: transform 0.2s ease;
}

.modal-fade-enter-from .relative,
.modal-fade-leave-to .relative {
    transform: translateY(12px);
}
</style>
