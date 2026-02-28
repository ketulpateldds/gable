<script setup>
const props = defineProps({
    open: Boolean,
})
const emit = defineEmits(['close'])

const form = reactive({
    type: 'MOVE-IN',
    property: '123 OAK ST • UNIT 4',
    unit: 'UNIT 4 / MAIN / ADU',
    tenant1: '',
    tenant2: '',
    date: '23-02-2026',
    time: '10:00 AM',
    inspector: '',
    status: 'SCHEDULED',
    template: '',
    notes: '',
})

function close() {
    emit('close')
}

// Prevent background scroll when open
watch(() => props.open, (val) => {
    if (typeof document !== 'undefined') {
        document.body.style.overflow = val ? 'hidden' : ''
    }
})
</script>

<template>
    <Teleport to="body">
        <Transition name="modal-fade">
            <div v-if="open" class="fixed inset-0 z-[999] flex items-center justify-end overflow-hidden"
                style="background: rgba(0,0,0,0.45);" @click.self="close">

                <div
                    class="relative bg-white rounded-l-[24px] w-full max-w-[544px] h-full overflow-y-auto p-6 pt-5 drawer-content">
                    <div class="flex items-start justify-between mb-[17px]">
                        <div>
                            <h2 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[3px]">New inspection</h2>
                            <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-0.02em]">
                                Create and schedule a move-in or move-out inspection.</p>
                        </div>
                        <button @click="close"
                            class="mt-1 w-10 h-10 p-2 flex items-center justify-center rounded-full border border-[#0F11141A] text-[#0F1114] shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>

                    <div class="flex flex-col gap-[14px]">
                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em] mb-[5px]">INSPECTION
                                TYPE</label>
                            <div
                                class="flex items-center justify-between h-11 pl-5 pr-[14px] py-[15px] rounded-[80px] border border-[#0F11141A]">
                                <span
                                    class="text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em]">{{
                                        form.type
                                    }}</span>
                                <div class="h-5 w-5 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="#0F1114" stroke-width="2.5" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em] mb-[5px]">PROPERTY</label>
                            <div
                                class="flex items-center justify-between h-11 pl-5 pr-[14px] py-[15px] rounded-[80px] border border-[#0F11141A]">
                                <span
                                    class="text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em]">
                                    {{ form.property }}
                                </span>
                                <div class="h-5 w-5 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="#0F1114" stroke-width="2.5" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em] mb-[5px]">UNIT</label>
                            <input v-model="form.unit" type="text" placeholder="UNIT 4 / MAIN / ADU"
                                class="w-full h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] leading-[100%] tracking-[-0.02em] outline-none placeholder:text-[#0F111466] placeholder:uppercase" />
                        </div>

                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em] mb-[5px]">TENANT</label>
                            <input v-model="form.tenant1" type="text" placeholder="TENANT NAME (OPTIONAL)"
                                class="w-full h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] leading-[100%] tracking-[-0.02em] outline-none placeholder:text-[#0F111466] placeholder:uppercase" />
                        </div>

                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em] mb-[5px]">TENANT</label>
                            <input v-model="form.tenant2" type="text" placeholder="TENANT NAME (OPTIONAL)"
                                class="w-full h-11 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] leading-[100%] tracking-[-0.02em] outline-none placeholder:text-[#0F111466] placeholder:uppercase" />
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em] mb-[5px]">DATE</label>
                                <div
                                    class="flex items-center justify-between h-11 pl-5 pr-[14px] rounded-[80px] border border-[#0F11141A]">
                                    <input v-model="form.date" type="text" placeholder="23-02-2026"
                                        class="flex-1 text-[12px] font-semibold text-[#0F1114] leading-[100%] tracking-[-0.02em] outline-none placeholder:text-[#0F111466] placeholder:uppercase" />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                        fill="none" stroke="#0F1114" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em] mb-[5px]">TIME</label>
                                <div
                                    class="flex items-center justify-between h-11 pl-5 pr-[14px] rounded-[80px] border border-[#0F11141A]">
                                    <input v-model="form.time" type="text" placeholder="10:00 AM"
                                        class="flex-1 text-[12px] font-semibold text-[#0F1114] leading-[100%] tracking-[-0.02em] outline-none placeholder:text-[#0F111466] placeholder:uppercase" />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                        fill="none" stroke="#0F1114" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em] mb-[5px]">INSPECTOR</label>
                                <div
                                    class="flex items-center justify-between h-11 pl-5 pr-[14px] rounded-[80px] border border-[#0F11141A]">
                                    <input v-model="form.inspector" type="text" placeholder="NAME"
                                        class="flex-1 text-[12px] font-semibold text-[#0F1114] leading-[100%] tracking-[-0.02em] outline-none placeholder:text-[#0F111466] placeholder:uppercase" />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                        fill="none" stroke="#0F1114" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em] mb-[5px]">STATUS</label>
                                <div
                                    class="flex items-center justify-between h-11 pl-5 pr-[14px] rounded-[80px] border border-[#0F11141A]">
                                    <span
                                        class="text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em]">{{
                                            form.status }}</span>
                                    <div class="h-5 w-5 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="#0F1114" stroke-width="2.5"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em] mb-[5px]">CHECKLIST
                                TEMPLATE</label>
                            <div
                                class="flex items-center justify-between h-11 pl-5 pr-[14px] rounded-[80px] border border-[#0F11141A]">
                                <span
                                    class="text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em]">SELECT
                                    TEMPLATE (OPTIONAL)</span>
                                <div class="h-5 w-5 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="#0F1114" stroke-width="2.5" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em] mb-[5px]">NOTES</label>
                            <textarea v-model="form.notes" rows="3" placeholder="Add notes for the inspector..."
                                class="w-full h-[108px] text-[12px] font-semibold leading-[100%] tracking-[-0.02em] text-[#0F1114] placeholder:text-[#0F111466] border border-[#0F11141A] rounded-[12px] px-5 py-[15px] outline-none resize-none"></textarea>
                        </div>

                        <div class="flex items-center justify-end gap-2 mt-2">
                            <button @click="close"
                                class="h-10 px-5 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-0.02em] text-[#0F1114]">
                                CANCEL
                            </button>
                            <button
                                class="h-10 px-5 rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-0.02em]"
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
    transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-enter-active .relative {
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-fade-leave-active .relative {
    transition: transform 0.3s ease;
}

.modal-fade-enter-from .relative,
.modal-fade-leave-to .relative {
    transform: translateX(100%);
}

/* Custom scrollbar for better look in side panel */
.drawer-content::-webkit-scrollbar {
    width: 6px;
}

.drawer-content::-webkit-scrollbar-track {
    background: transparent;
}

.drawer-content::-webkit-scrollbar-thumb {
    background: #0F11141A;
    border-radius: 10px;
}

.drawer-content::-webkit-scrollbar-thumb:hover {
    background: #0F111433;
}
</style>
