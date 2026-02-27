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

function addDate() {
    dateOptions.value.push({ date: '', windows: { am: false, mid: false, pm: false } })
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

                <div class="relative bg-white rounded-[24px] w-full max-w-[700px] my-10 px-6 pt-[23px] pb-[25px]"
                    style="box-shadow: 0px 24px 64px -12px rgba(15,17,20,0.18);">

                    <!-- ── Header ── -->
                    <div class="flex items-start justify-between mb-[19px]">
                        <div>
                            <h2 class="text-[22px] font-bold text-[#0F1114] leading-[100%] mb-[7px]">New Request</h2>
                            <p class="text-[13px] text-[#0F1114CC] leading-[100%]">Provide details and photos to help
                                the team resolve the issue faster.</p>
                        </div>
                        <button @click="close"
                            class="w-8 h-8 flex items-center justify-center rounded-full border border-[#0F111426] text-[#0F1114] hover:bg-[#F5F5F5] transition-colors shrink-0 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>

                    <div class="flex flex-col gap-4">
                        <!-- ── Request ── -->
                        <div class="rounded-2xl border border-[#0F11141A] p-[25px] pt-[21px]">
                            <p class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-5">Request</p>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <!-- Location -->
                                <div>
                                    <label
                                        class="block text-[10px] font-semibold text-[#0F111466] uppercase tracking-wider mb-2">LOCATION</label>
                                    <div
                                        class="flex items-center justify-between h-[46px] px-4 rounded-[10px] border-2 border-[#004CE5] bg-white">
                                        <span class="text-[13px] font-semibold text-[#0F1114]">{{ form.location
                                            }}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="#0F111466" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </div>
                                </div>
                                <!-- Priority -->
                                <div>
                                    <label
                                        class="block text-[10px] font-semibold text-[#0F111466] uppercase tracking-wider mb-2">REQUEST
                                        PRIORITY</label>
                                    <div
                                        class="flex items-center justify-between h-[46px] px-4 rounded-[10px] border border-[#0F11141A] bg-white">
                                        <span class="text-[13px] font-semibold text-[#0F1114]">{{ form.priority
                                            }}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="#0F111466" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- ── Photos ── -->
                        <div class="rounded-2xl border border-[#0F11141A] p-6">
                            <div class="flex items-start justify-between mb-1">
                                <div>
                                    <p class="text-[15px] font-bold text-[#0F1114] leading-[100%] mb-[5px]">Photos</p>
                                    <p class="text-[12px] text-[#0F1114CC] leading-[100%]">Include images to provide a
                                        clear picture of the problem.</p>
                                </div>
                                <button
                                    class="h-[36px] px-4 rounded-[80px] border border-[#0F111433] text-[11px] font-extrabold uppercase text-[#0F1114] flex items-center gap-1 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M12 5v14M5 12h14" />
                                    </svg>
                                    ADD PHOTOS
                                </button>
                            </div>

                            <div v-if="photos.length" class="grid grid-cols-3 gap-3 mt-4">
                                <div v-for="(photo, i) in photos" :key="i"
                                    class="relative rounded-[12px] overflow-hidden h-[120px]">
                                    <img :src="photo" class="w-full h-full object-cover" />
                                    <button @click="removePhoto(i)"
                                        class="absolute top-2 right-2 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow text-[#0F1114] hover:bg-red-50">
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

                        <!-- ── Category ── -->
                        <div class="rounded-2xl border border-[#0F11141A] p-6">
                            <p class="text-[15px] font-bold text-[#0F1114] leading-[100%] mb-[5px]">Category</p>
                            <p class="text-[12px] text-[#0F1114CC] leading-[150%] mb-5">Select the issue category. Only
                                the main category is required, but you can choose sub-categories to narrow your request.
                                If you don't see the right category, select "Other".</p>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label
                                        class="block text-[10px] font-semibold text-[#0F111466] uppercase tracking-wider mb-2">MAIN
                                        CATEGORY</label>
                                    <div
                                        class="flex items-center justify-between h-[46px] px-4 rounded-[10px] border border-[#0F11141A] bg-white">
                                        <span class="text-[13px] font-semibold text-[#0F1114]">{{ form.mainCategory
                                            }}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="#0F111466" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <label
                                        class="block text-[10px] font-semibold text-[#0F111466] uppercase tracking-wider mb-2">SUB-CATEGORY</label>
                                    <div
                                        class="flex items-center justify-between h-[46px] px-4 rounded-[10px] border border-[#0F11141A] bg-white">
                                        <span class="text-[13px] text-[#0F111466]">(OPTIONAL)</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="#0F111466" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- ── Details ── -->
                        <div class="rounded-2xl border border-[#0F11141A] p-6">
                            <p class="text-[15px] font-bold text-[#0F1114] leading-[100%] mb-5">Details</p>
                            <!-- Title -->
                            <div class="mb-4">
                                <label
                                    class="block text-[10px] font-semibold text-[#0F111466] uppercase tracking-wider mb-2">TITLE</label>
                                <input v-model="form.title" type="text"
                                    placeholder="EXAMPLE: LEAKING FAUCET UNDER KITCHEN SINK"
                                    class="w-full h-[46px] px-4 rounded-[10px] border border-[#0F11141A] text-[13px] text-[#0F1114] placeholder:text-[#0F111466] placeholder:text-[11px] placeholder:font-semibold placeholder:uppercase outline-none focus:border-[#004CE5] focus:ring-0 transition-colors" />
                            </div>
                            <!-- Description -->
                            <div>
                                <label
                                    class="block text-[10px] font-semibold text-[#0F111466] uppercase tracking-wider mb-2">DESCRIPTION</label>
                                <textarea v-model="form.description" rows="4"
                                    placeholder="Describe the issue, access instructions, and any helpful details..."
                                    class="w-full px-4 py-3 rounded-[10px] border border-[#0F11141A] text-[13px] text-[#0F1114] placeholder:text-[#0F111466] placeholder:text-[12px] outline-none focus:border-[#004CE5] resize-none transition-colors" />
                            </div>
                        </div>

                        <!-- ── Available date & time ── -->
                        <div class="rounded-2xl border border-[#0F11141A] p-6">
                            <div class="flex items-start justify-between mb-1">
                                <div>
                                    <p class="text-[15px] font-bold text-[#0F1114] leading-[100%] mb-[5px]">Available
                                        date &amp; time</p>
                                    <p class="text-[12px] text-[#0F1114CC] leading-[100%]">Please provide the
                                        convenient date and time to arrange the maintenance.</p>
                                </div>
                                <button @click="addDate"
                                    class="h-[36px] px-4 rounded-[80px] border border-[#0F111433] text-[11px] font-extrabold uppercase text-[#0F1114] flex items-center gap-1 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M12 5v14M5 12h14" />
                                    </svg>
                                    ADD DATE
                                </button>
                            </div>

                            <div class="flex flex-col gap-3 mt-4">
                                <div v-for="(opt, i) in dateOptions" :key="i"
                                    class="rounded-[14px] border-2 border-[#004CE5] p-4 relative">
                                    <button @click="removeDate(i)"
                                        class="absolute top-3 right-3 text-[#0F111466] hover:text-[#0F1114]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </button>
                                    <p class="text-[12px] font-bold text-[#0F1114] mb-3">Option {{ i + 1 }}</p>
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
                                        <!-- Date input -->
                                        <div>
                                            <label
                                                class="block text-[10px] font-semibold text-[#0F111466] uppercase tracking-wider mb-2">DATE
                                                (MM/DD/YYYY)</label>
                                            <div
                                                class="flex items-center justify-between h-[40px] px-3 rounded-[8px] border border-[#0F11141A] bg-white">
                                                <input v-model="opt.date" type="text" placeholder="MM/DD/YYYY"
                                                    class="flex-1 text-[13px] text-[#0F1114] bg-transparent outline-none placeholder:text-[#0F111466]" />
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                                    viewBox="0 0 24 24" fill="none" stroke="#0F111466" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round">
                                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                    <line x1="16" y1="2" x2="16" y2="6" />
                                                    <line x1="8" y1="2" x2="8" y2="6" />
                                                    <line x1="3" y1="10" x2="21" y2="10" />
                                                </svg>
                                            </div>
                                        </div>
                                        <!-- Time windows -->
                                        <div>
                                            <label
                                                class="block text-[10px] font-semibold text-[#0F111466] uppercase tracking-wider mb-2">TIME
                                                WINDOWS</label>
                                            <div class="flex items-center gap-3 h-[40px]">
                                                <label
                                                    v-for="(tw, key) in [{ label: '8AM - 12PM', key: 'am' }, { label: '12PM - 4PM', key: 'mid' }, { label: '4PM - 8PM', key: 'pm' }]"
                                                    :key="tw.key"
                                                    class="flex items-center gap-[5px] text-[11px] font-medium text-[#0F1114] cursor-pointer whitespace-nowrap">
                                                    <input type="checkbox" v-model="opt.windows[tw.key]"
                                                        class="w-[14px] h-[14px] accent-[#004CE5] rounded cursor-pointer" />
                                                    {{ tw.label }}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="text-[12px] text-[#004CE5] font-semibold">Calendar</button>
                                </div>
                            </div>

                            <p class="text-[12px] text-[#0F1114CC] mt-3">Add at least one date option so the team can
                                schedule quickly.</p>
                        </div>

                        <!-- ── Property Access Authorization ── -->
                        <div class="rounded-2xl border border-[#0F11141A] p-6">
                            <p class="text-[15px] font-bold text-[#0F1114] leading-[100%] mb-[5px]">Property Access
                                Authorization</p>
                            <p class="text-[12px] text-[#0F1114CC] leading-[100%] mb-5">Grant permission for the team
                                to use the key in tenant's absence.</p>

                            <label class="flex items-center gap-2 mb-5 cursor-pointer w-fit">
                                <input type="checkbox" v-model="form.allowToEnter"
                                    class="w-[14px] h-[14px] accent-[#004CE5] rounded" />
                                <span class="text-[12px] font-semibold text-[#0F1114] uppercase tracking-wider">ALLOW
                                    TO ENTER</span>
                            </label>

                            <div>
                                <label
                                    class="block text-[10px] font-semibold text-[#0F111466] uppercase tracking-wider mb-2">CODE
                                    - DOOR/GATE/LOCKBOX (OPTIONAL)</label>
                                <input v-model="form.accessCode" type="text" placeholder="EXAMPLE: 1234 (OPTIONAL)"
                                    class="w-full h-[46px] px-4 rounded-[10px] border border-[#0F11141A] text-[13px] text-[#0F1114] placeholder:text-[#0F111466] placeholder:text-[11px] placeholder:font-semibold placeholder:uppercase outline-none focus:border-[#004CE5] transition-colors" />
                            </div>
                        </div>

                        <!-- ── Pets in residence ── -->
                        <div class="rounded-2xl border border-[#0F11141A] p-6">
                            <p class="text-[15px] font-bold text-[#0F1114] leading-[100%] mb-4">Pets in residence</p>
                            <div class="flex items-center gap-5">
                                <label v-for="pet in ['cat', 'dog', 'other']" :key="pet"
                                    class="flex items-center gap-[6px] cursor-pointer">
                                    <input type="checkbox" v-model="form.pets[pet]"
                                        class="w-[14px] h-[14px] accent-[#004CE5] rounded" />
                                    <span class="text-[12px] font-semibold text-[#0F1114] uppercase tracking-wider">{{
                                        pet }}</span>
                                </label>
                            </div>
                        </div>

                        <!-- ── Footer Buttons ── -->
                        <div class="flex items-center justify-end gap-3 pt-1 pb-1">
                            <button @click="close"
                                class="h-[42px] px-6 rounded-[80px] border border-[#0F111433] text-[12px] font-extrabold uppercase tracking-[-0.02em] text-[#0F1114] hover:bg-[#F5F5F5] transition-colors">
                                CANCEL
                            </button>
                            <button
                                class="h-[42px] px-6 rounded-[80px] bg-[#004CE5] text-white text-[12px] font-extrabold uppercase tracking-[-0.02em] hover:bg-[#003BB5] transition-colors">
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
