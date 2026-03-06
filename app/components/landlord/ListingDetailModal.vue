<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'

const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true
    },
    property: {
        type: Object,
        default: () => ({})
    }
})

const emit = defineEmits(['close'])

const modalMap = ref(null)

const initMap = async () => {
    if (process.client && props.isOpen && props.property?.id) {
        // Give time for DOM to render and animation to progress
        setTimeout(async () => {
            const L = await import('leaflet')
            const mapContainer = document.getElementById('modal-map')
            if (!mapContainer || modalMap.value) return

            const coords = props.property?.coords || [38.9072, -77.0369]
            modalMap.value = L.map('modal-map', {
                center: coords,
                zoom: 8.5,
                zoomControl: false,
                attributionControl: false
            })

            L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                maxZoom: 19
            }).addTo(modalMap.value)

            setTimeout(() => {
                modalMap.value?.invalidateSize()
            }, 100)

            const customIcon = L.divIcon({
                className: 'custom-map-marker',
                html: `
                        <div class="bg-[#0F1114] rounded-full h-[14px] w-[14px] border-2 border-white shadow-sm"></div>
                    `,
                iconSize: [14, 14],
                iconAnchor: [7, 7]
            })

            L.marker(coords, { icon: customIcon }).addTo(modalMap.value)
        }, 350)
    }
}

watch(() => props.isOpen, (newVal) => {
    if (newVal) {
        initMap()
    } else {
        if (modalMap.value) {
            modalMap.value.remove()
            modalMap.value = null
        }
    }
})

onUnmounted(() => {
    if (modalMap.value) {
        modalMap.value.remove()
        modalMap.value = null
    }
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
                    class="fixed inset-y-0 right-0 z-[101] w-full sm:w-[544px] py-4 sm:py-6 pb-8 bg-primary h-full sm:rounded-l-[32px] shadow-2xl flex flex-col overflow-hidden">
                    <div class="absolute inset-0 pointer-events-none" @click="$emit('close')"></div>
                    <div class="px-6 flex items-center justify-between gap-4 pb-6 relative z-10">
                        <h2 class="text-[20px] font-bold text-[#0F1114] leading-[100%]">Listing Detail
                        </h2>
                        <div class="flex items-center gap-2">
                            <button
                                class="h-10 px-6 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] leading-[100%] uppercase tracking-[-2%] hover:bg-slate-50 transition-colors">SHARE</button>
                            <button
                                class="flex-1 xs:flex-none h-10 px-4 sm:px-5 rounded-[80px] text-[11px] sm:text-[12px] font-extrabold text-white leading-[100%] uppercase tracking-[-2%] hover:opacity-90 transition-opacity"
                                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">SAVE</button>
                            <button @click="$emit('close')"
                                class="w-8 h-8 rounded-full border border-[#0F11141A] flex items-center justify-center text-[#0F1114] hover:bg-slate-50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="flex-1 overflow-y-auto scrollbar-hide flex flex-col pt-4 sm:pt-0 relative z-10">
                        <!-- Desktop Gallery: Original Layout (sm+ screens) -->
                        <div class="hidden sm:flex px-6 pb-5 items-center gap-2">
                            <div class="flex flex-col gap-2">
                                <div class="flex gap-2">
                                    <div class="rounded-[12px] overflow-hidden h-[120px] w-[168px]">
                                        <img :src="property.images[0]" class="w-full h-full object-cover">
                                    </div>
                                    <div class="rounded-[12px] overflow-hidden h-[120px] w-[152px]">
                                        <img :src="property.images[1]" class="w-full h-full object-cover">
                                    </div>
                                </div>
                                <div class="flex gap-2">
                                    <div class="rounded-[12px] overflow-hidden bg-slate-100 h-[144px] w-[184px]">
                                        <img :src="property.images[3]" class="w-full h-full object-cover">
                                    </div>
                                    <div class="rounded-[12px] overflow-hidden h-[144px] w-[136px]">
                                        <img :src="property.images[4]" class="w-full h-full object-cover">
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col gap-2">
                                <div class="rounded-[12px] overflow-hidden h-[160px] w-[160px]">
                                    <img :src="property.images[2]" class="w-full h-full object-cover">
                                </div>
                                <div
                                    class="rounded-[12px] overflow-hidden h-[104px] w-[160px] bg-[#F2F2F2] flex items-center justify-center cursor-pointer">
                                    <span class="text-[14px] font-extrabold text-[#0F1114]">View more</span>
                                </div>
                            </div>
                        </div>

                        <!-- Mobile Gallery: Responsive Grid (under sm screens) -->
                        <div class="px-4 pb-5 sm:hidden">
                            <div class="grid grid-cols-2 xs:grid-cols-3 gap-2 h-auto">
                                <div class="rounded-[12px] overflow-hidden h-[120px] col-span-2 xs:col-span-1">
                                    <img :src="property.images[0]" class="w-full h-full object-cover">
                                </div>
                                <div class="rounded-[12px] overflow-hidden h-[120px]">
                                    <img :src="property.images[1]" class="w-full h-full object-cover">
                                </div>
                                <div class="rounded-[12px] overflow-hidden h-[120px]">
                                    <img :src="property.images[2]" class="w-full h-full object-cover">
                                </div>
                                <div class="rounded-[12px] overflow-hidden h-[120px]">
                                    <img :src="property.images[3]" class="w-full h-full object-cover">
                                </div>
                                <div class="rounded-[12px] overflow-hidden h-[120px]">
                                    <img :src="property.images[4]" class="w-full h-full object-cover">
                                </div>
                                <div
                                    class="rounded-[12px] overflow-hidden h-[120px] bg-[#F2F2F2] flex items-center justify-center cursor-pointer">
                                    <span class="text-[14px] font-extrabold text-[#0F1114]">View more</span>
                                </div>
                            </div>
                        </div>

                        <div class="px-4 sm:px-6 flex flex-col">
                            <h3 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[5px]">{{ property.title
                            }}</h3>
                            <p class="text-[14px] font-medium text-[#0F1114CC] leading-[100%] mb-5">{{ property.address
                            }}</p>

                            <div class="flex flex-wrap items-center gap-y-3 mb-[19px]">
                                <div
                                    class="flex items-center gap-[6px] h-6 pr-[20px] sm:pr-[23px] border-r border-[#0F111466]">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.49891 7.49915H16.6694C17.1298 7.49915 17.5031 7.1259 17.5031 6.66547V3.33075C17.5031 2.87032 17.1298 2.49707 16.6694 2.49707H7.49891C4.73634 2.49707 2.49683 4.73658 2.49683 7.49915V12.5012"
                                            stroke="#0F1114" stroke-width="1.25" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <circle cx="7.49891" cy="12.5011" r="5.00208" stroke="#0F1114"
                                            stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        <circle cx="7.4989" cy="12.5013" r="1.66736" stroke="#0F1114"
                                            stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.49887 2.49707V4.16443" stroke="#0F1114" stroke-width="1.25"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9.99985 2.49707V4.99811" stroke="#0F1114" stroke-width="1.25"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.5008 2.49707V4.16443" stroke="#0F1114" stroke-width="1.25"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.002 2.49707V4.99811" stroke="#0F1114" stroke-width="1.25"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span
                                        class="text-[14px] font-semibold text-[#0F1114] leading-[100%] whitespace-nowrap">{{
                                            property.sqft }}</span>
                                </div>
                                <div
                                    class="flex items-center gap-[7px] h-6 pl-[18px] pr-[17px] border-r border-[#0F111466]">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M16.6667 10H3.33341C2.41258 10 1.66675 10.7458 1.66675 11.6667V14.1108C1.66675 14.5708 2.04008 14.9442 2.50008 14.9442H17.5001C17.9601 14.9442 18.3334 14.5708 18.3334 14.1108V11.6667C18.3334 10.7458 17.5876 10 16.6667 10Z"
                                            stroke="#0F1114" stroke-width="1.25" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M3.33325 9.99984V5.77734C3.33325 4.39651 4.45242 3.27734 5.83325 3.27734H14.1666C15.5474 3.27734 16.6666 4.39651 16.6666 5.77734V9.99984"
                                            stroke="#0F1114" stroke-width="1.25" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M17.4999 15V16.6083" stroke="#0F1114" stroke-width="1.25"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M2.49992 15V16.6083" stroke="#0F1114" stroke-width="1.25"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M6.25 10V10C6.25 8.61917 7.36917 7.5 8.75 7.5H11.25C12.6308 7.5 13.75 8.61917 13.75 10V10"
                                            stroke="#0F1114" stroke-width="1.25" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    <span
                                        class="text-[14px] font-semibold text-[#0F1114] leading-[100%] whitespace-nowrap">{{
                                            property.bedrooms }}
                                        Bedrooms</span>
                                </div>
                                <div class="flex items-center gap-[7px] h-6 pl-[15px]">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.66675 10.8337H18.3334" stroke="#0F1114" stroke-width="1.25"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M17.5 10.833L17.0462 13.7374C16.7828 15.4234 15.3306 16.6663 13.6241 16.6663H6.37589C4.6694 16.6663 3.21718 15.4234 2.95377 13.7374L2.5 10.833"
                                            stroke="#0F1114" stroke-width="1.25" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M5.10944 16.4229L4.16675 17.5001" stroke="#0F1114" stroke-width="1.25"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.8906 16.4229L15.8333 17.5001" stroke="#0F1114" stroke-width="1.25"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M9.07351 5H9.25986C10.1431 5 10.9273 5.5652 11.2066 6.40314V6.40314C11.2913 6.65727 11.2487 6.93662 11.0921 7.15393C10.9355 7.37123 10.6839 7.5 10.416 7.5H7.91733C7.64946 7.5 7.39792 7.37123 7.24129 7.15393C7.08466 6.93662 7.04205 6.65727 7.12676 6.40314V6.40314C7.40607 5.5652 8.19024 5 9.07351 5V5Z"
                                            stroke="#0F1114" stroke-width="1.25" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M9.16675 5V5C9.16675 3.61929 8.04746 2.5 6.66675 2.5V2.5C5.28604 2.5 4.16675 3.61929 4.16675 5V10.8333"
                                            stroke="#0F1114" stroke-width="1.25" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    <span
                                        class="text-[14px] font-semibold text-[#0F1114] leading-[100%] whitespace-nowrap">{{
                                            property.bathrooms }}
                                        Bathrooms</span>
                                </div>
                            </div>

                            <div class="text-[20px] font-extrabold text-[#0F1114] leading-[100%] mb-[27px]">{{
                                property.price }}
                            </div>
                        </div>

                        <div class="border border-[#0F11141A] mb-7"></div>

                        <div class="px-4 sm:px-6 mb-[21px]">
                            <h4 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[5px]">Property
                                Overview</h4>
                            <p class="text-[12px] font-medium text-[#0F1114CC] leading-[100%]">Bright, modern home
                                with
                                open layout and great natural light.</p>
                        </div>

                        <div class="px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <div class="pt-[14px] px-[17px] pb-[13px] rounded-[12px] border border-[#0F11141A]">
                                <span
                                    class="block text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[5px]">HIGHLIGHTS</span>
                                <p class="text-[14px] font-bold text-[#0F1114] leading-[18px]">In-unit laundry • Private
                                    yard • Updated kitchen</p>
                            </div>
                            <div class="pt-[14px] px-[17px] pb-[13px] rounded-[12px] border border-[#0F11141A]">
                                <span
                                    class="block text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[5px]">FEES
                                    & POLICIES</span>
                                <p class="text-[14px] font-bold text-[#0F1114] leading-[18px]">Deposit: 1x rent •
                                    Application fee: $55 • Move-in fees may apply</p>
                            </div>
                        </div>

                        <div class="border border-[#0F11141A] mb-7"></div>

                        <div class="px-6 mb-8">
                            <h4 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-3">Description</h4>
                            <p class="text-[12px] font-medium text-[#0F1114] leading-4">Welcome home to a
                                charming 2 bed / 2 bath with updated kitchen, in-unit laundry, and a spacious yard.
                                Close to local shops and transit.</p>
                        </div>

                        <div class="border border-[#0F11141A] mb-7"></div>

                        <div class="px-4 sm:px-6 mb-8">
                            <h4 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-5">Fees & policies</h4>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div class="pt-[14px] px-4 pb-[13px] rounded-[12px] border border-[#0F11141A]">
                                    <span
                                        class="block text-[12px] font-semibold text-[#0F111466] uppercase leading-[100%] mb-[5px]">PETS</span>
                                    <p class="text-[14px] font-bold text-[#0F1114] leading-[18px]">Cats allowed • Dogs
                                        allowed</p>
                                </div>
                                <div class="pt-[14px] px-4 pb-[13px] rounded-[12px] border border-[#0F11141A]">
                                    <span
                                        class="block text-[12px] font-semibold text-[#0F111466] uppercase leading-[100%] mb-[5px]">AMENITIES</span>
                                    <p class="text-[14px] font-bold text-[#0F1114] leading-[18px]">Hardwood floors •
                                        Dishwasher • Parking • Dual-pane windows</p>
                                </div>
                            </div>
                        </div>

                        <div class="border border-[#0F11141A] mb-7"></div>

                        <div class="px-4 sm:px-6 mb-8">
                            <h4 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-5">Contact</h4>
                            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mb-4">
                                <button
                                    class="h-[34px] pl-[18px] pr-5 py-[9px] rounded-[80px] bg-[#F5F5F5] flex items-center justify-center sm:justify-start gap-[6px] text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] w-full sm:w-auto">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2">
                                        <path
                                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    {{ property.phone }}
                                </button>
                                <button
                                    class="h-[34px] pl-[18px] pr-5 py-[9px] rounded-[80px] bg-[#F5F5F5] flex items-center justify-center sm:justify-start gap-[6px] text-[12px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%] w-full sm:w-auto">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2">
                                        <path
                                            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                    {{ property.email }}
                                </button>
                            </div>
                            <button
                                class="h-10 py-[10px] pl-[19px] pr-5 rounded-[80px] bg-[#0F1114] text-primary flex items-center justify-center gap-[10px] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] w-full sm:w-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-message-dots">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 11v.01" />
                                    <path d="M8 11v.01" />
                                    <path d="M16 11v.01" />
                                    <path
                                        d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3l12 0" />
                                </svg>
                                ASK A QUESTION
                            </button>
                        </div>

                        <div class="border border-[#0F11141A] mb-7"></div>

                        <div class="px-4 sm:px-6 mb-7">
                            <h4 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[5px]">Address</h4>
                            <p class="text-[14px] font-medium text-[#0F1114CC] leading-[100%]">{{ property.address }}
                            </p>
                        </div>

                        <div class="border border-[#0F11141A] mb-7"></div>

                        <div class="px-4 sm:px-6 mb-2">
                            <h4 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-5">Map</h4>
                            <div id="modal-map" class="w-full h-[240px] rounded-[8px] overflow-hidden"></div>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </Teleport>
</template>

<style scoped>
#modal-map {
    filter: grayscale(1) contrast(1.2) brightness(1.05);
}

:deep(.custom-map-marker) {
    background: none !important;
    border: none !important;
}
</style>
