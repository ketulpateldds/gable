<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'
import ListingDetailModal from '@/components/ListingDetailModal.vue'

const isDetailOpen = ref(false)
const selectedProperty = ref(null)

const openDetail = (property) => {
    selectedProperty.value = property
    isDetailOpen.value = true
}

const properties = [
    {
        id: '1',
        title: 'Cute Home',
        address: '123 Main St, City',
        price: '$3,200/mo',
        sqft: '1,524 sq ft',
        bedrooms: 3,
        bathrooms: 3,
        phone: '(510) 555-7788',
        email: 'leasing@domain.com',
        images: [
            '/assets/listing1.png',
            '/assets/listing1.png',
            '/assets/listing1.png',
            '/assets/listing1.png',
            '/assets/listing1.png'
        ],
        coords: [38.96, -77.34]
    },
    {
        id: '2',
        title: '78 Brookwood Pl',
        address: 'Oakland, CA',
        price: '$3,200/mo',
        sqft: '1,524 sq ft',
        bedrooms: 3,
        bathrooms: 3,
        phone: '(510) 555-7788',
        email: 'leasing@domain.com',
        images: [
            '/assets/listing2.png',
            '/assets/listing2.png',
            '/assets/listing2.png',
            '/assets/listing2.png',
            '/assets/listing2.png'
        ],
        coords: [38.64, -77.33]
    },
    {
        id: '3',
        title: '55 Crystal Falls Dr',
        address: 'Leander, TX',
        price: '$3,200/mo',
        sqft: '1,524 sq ft',
        bedrooms: 3,
        bathrooms: 3,
        phone: '(510) 555-7788',
        email: 'leasing@domain.com',
        images: [
            '/assets/listing3.png',
            '/assets/listing3.png',
            '/assets/listing3.png',
            '/assets/listing3.png',
            '/assets/listing3.png'
        ],
        coords: [38.81, -76.75]
    }
]

const filters = [
    { label: 'PRICE', key: 'price' },
    { label: 'BEDS/BATHS', key: 'beds_baths' },
    { label: 'HOME TYPE', key: 'home_type' }
]

let map = null

onMounted(async () => {
    if (process.client) {
        const L = await import('leaflet')
        const leafletStyle = document.createElement('link')
        leafletStyle.rel = 'stylesheet'
        leafletStyle.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
        document.head.appendChild(leafletStyle)

        map = L.map('map-content', {
            zoomControl: false,
            attributionControl: false
        })

        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            maxZoom: 19
        }).addTo(map)

        const customIcon = L.divIcon({
            className: 'custom-map-marker',
            html: `
<div class="bg-[#CEDAF2] border border-[#004CE580] rounded-[8px] h-8 w-8 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
    style="box-shadow: 0px 4px 8px -2px #004CE54D;">
                    <span class="text-[#004CE5] font-bold text-[14px] leading-[100%]">$</span>
                </div>
`,
            iconSize: [32, 32],
            iconAnchor: [16, 16]
        })

        const markers = [
            [38.96, -77.34], // Near Sterling/Reston
            [38.64, -77.33], // Near Dale City
            [38.81, -76.75] // Near Upper Marlboro
        ]

        markers.forEach(pos => {
            L.marker(pos, { icon: customIcon }).addTo(map)
        })

        if (markers.length > 0) {
            const bounds = L.latLngBounds(markers)
            map.fitBounds(bounds, { padding: [50, 50] })
        }
    }
})

onUnmounted(() => {
    if (map) {
        map.remove()
    }
})
</script>

<template>
    <div class="flex min-h-screen bg-primary font-sans overflow-x-hidden">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-6 py-[19px] flex flex-col min-h-0">
                <div class="flex items-center justify-between mb-5">
                    <div>
                        <h1 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[4px]">Listings</h1>
                        <p class="text-[12px] text-[#0F111499] font-medium tracking-[-2%] leading-4">Discover your new
                            home</p>
                    </div>
                    <div class="flex gap-2">
                        <button
                            class="h-10 px-6 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] leading-[100%] uppercase tracking-[-2%]">SHARE</button>
                        <button
                            class="h-10 px-6 rounded-[80px] text-[12px] font-extrabold text-primary leading-[100%] uppercase tracking-[-2%]"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">SAVE</button>
                    </div>
                </div>

                <div class="flex items-center gap-2 mb-6 flex-wrap">
                    <div class="relative max-w-[425px] w-full">
                        <div class="absolute inset-y-0 left-2 flex items-center pointer-events-none">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F111466"
                                stroke-width="2">
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.35-4.35" />
                            </svg>
                        </div>
                        <input type="text" placeholder="Location, address, neighbourhood..."
                            class="w-full h-10 border border-[#0F11141A] rounded-[80px] pl-[38px] pr-4 text-[12px] font-semibold placeholder:text-[#0F111466] leading-[100%] tracking-[-2%] focus:outline-none" />
                    </div>

                    <button v-for="filter in filters" :key="filter.key"
                        class="h-10 pl-5 pr-[15px] rounded-[80px] border border-[#0F11141A] flex items-center gap-[14px] text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] hover:bg-slate-50 transition-colors whitespace-nowrap">
                        {{ filter.label }}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F1114" stroke-width="3">
                            <polyline points="6 9 12 15 18 9" class="h-5 w-5" />
                        </svg>
                    </button>

                    <button
                        class="h-10 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] hover:bg-slate-50 transition-colors whitespace-nowrap">
                        ALL FILTERS
                    </button>
                    <button
                        class="h-10 px-5 text-[12px] border border-[#0F11141A] rounded-[80px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] hover:opacity-70 transition-opacity">
                        RESET
                    </button>
                    <div
                        class="h-10 px-6 rounded-[80px] border border-[#0F11141A] flex items-center text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%]">
                        LIST VIEW
                    </div>
                </div>

                <div class="flex flex-col xl:flex-row gap-4 flex-1 overflow-hidden">
                    <div
                        class="w-full xl:flex-[6] h-[382px] border border-[#0F11141A] rounded-[24px] overflow-hidden pt-[22px] p-[25px] flex flex-col bg-primary">
                        <div class="mb-5">
                            <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%]">Map</h2>
                        </div>

                        <div class="flex-1 relative w-full rounded-[8px] overflow-hidden">
                            <div id="map-content" class="absolute inset-0 z-0"></div>

                            <!-- Mobile Labels: Stacked -->
                            <div class="absolute top-4 left-4 flex flex-col gap-2 z-10 pointer-events-none sm:hidden">
                                <div
                                    class="bg-primary rounded-[40px] h-8 pl-[13px] pr-[15px] flex items-center gap-[6px] pointer-events-auto shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7" />
                                        <path d="M9 4v13" />
                                        <path d="M15 7v5" />
                                        <path
                                            d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" />
                                    </svg>
                                    <span class="text-[12px] font-bold text-[#0F1114]">Rentals</span>
                                </div>
                                <div
                                    class="bg-primary rounded-[40px] h-8 px-4 flex items-center pointer-events-auto shadow-sm w-fit">
                                    <span class="text-[12px] font-bold text-[#0F1114]">3 rentals</span>
                                </div>
                            </div>

                            <!-- Desktop Labels: Original Position -->
                            <div
                                class="hidden sm:flex absolute top-4 left-4 bg-primary rounded-[40px] h-8 pl-[13px] pr-[15px] items-center gap-[6px] z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7" />
                                    <path d="M9 4v13" />
                                    <path d="M15 7v5" />
                                    <path
                                        d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" />
                                </svg>
                                <span class="text-[12px] font-bold text-[#0F1114] leading-[100%]">Map displaying
                                    rentals</span>
                            </div>

                            <div
                                class="hidden sm:flex absolute top-4 right-4 bg-primary rounded-[40px] h-8 px-4 items-center z-10">
                                <span class="text-[12px] font-bold text-[#0F1114] leading-[100%]">3 rentals</span>
                            </div>
                        </div>
                    </div>

                    <div
                        class="w-full xl:flex-[4] border border-[#0F11141A] rounded-3xl flex flex-col min-h-0 pt-[22px] p-[25px]">
                        <div class="flex items-center justify-between mb-5">
                            <div>
                                <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-4">List
                                    view</h2>
                                <h3 class="text-[16px] font-extrabold text-[#0F1114] leading-[100%] mb-[5px]">Homes for
                                    rent in City</h3>
                                <p class="text-[14px] text-[#0F111466] font-bold leading-[100%]">3 Rentals Available
                                </p>
                            </div>
                            <button
                                class="h-10 px-[19px] rounded-[80px] border border-[#0F11141A] text-[12px] font-bold text-[#0F1114] leading-[100%] uppercase tracking-[-2%] hover:bg-slate-50 transition-colors">
                                BACK TO SEARCH
                            </button>
                        </div>

                        <div
                            class="flex-1 overflow-y-auto scrollbar-hide grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6 content-start">
                            <div v-for="property in properties" :key="property.id" @click="openDetail(property)"
                                class="flex flex-col group cursor-pointer">
                                <div class="relative h-[160px] rounded-[16px] overflow-hidden mb-3">
                                    <NuxtImg :src="property.images[0]" :alt="property.title"
                                        class="w-full h-full object-cover rounded-[16px]" />
                                </div>

                                <div class="flex justify-between items-start mb-[5px] px-1">
                                    <h4 class="text-[16px] font-bold text-[#0F1114] leading-[100%]">{{ property.title }}
                                    </h4>
                                    <span class="text-[16px] font-extrabold text-[#0F1114] leading-[100%]">
                                        {{ property.price }}
                                    </span>
                                </div>
                                <p class="text-[14px] text-[#0F1114CC] font-medium leading-[100%] mb-3 px-1">
                                    {{ property.address }}</p>

                                <div class="flex flex-wrap items-center mb-4 px-1">
                                    <div class="flex items-center gap-[6px] h-6 pr-[23px] border-r border-[#0F111466]">
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
                                        <span class="text-[14px] font-semibold text-[#0F1114] leading-[100%]">
                                            {{ property.sqft }}
                                        </span>
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
                                        <span class="text-[14px] font-semibold text-[#0F1114] leading-[100%]">
                                            {{ property.bedrooms }} Bedrooms
                                        </span>
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
                                            <path d="M5.10944 16.4229L4.16675 17.5001" stroke="#0F1114"
                                                stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M14.8906 16.4229L15.8333 17.5001" stroke="#0F1114"
                                                stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M9.07351 5H9.25986C10.1431 5 10.9273 5.5652 11.2066 6.40314V6.40314C11.2913 6.65727 11.2487 6.93662 11.0921 7.15393C10.9355 7.37123 10.6839 7.5 10.416 7.5H7.91733C7.64946 7.5 7.39792 7.37123 7.24129 7.15393C7.08466 6.93662 7.04205 6.65727 7.12676 6.40314V6.40314C7.40607 5.5652 8.19024 5 9.07351 5V5Z"
                                                stroke="#0F1114" stroke-width="1.25" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path
                                                d="M9.16675 5V5C9.16675 3.61929 8.04746 2.5 6.66675 2.5V2.5C5.28604 2.5 4.16675 3.61929 4.16675 5V10.8333"
                                                stroke="#0F1114" stroke-width="1.25" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                        <span class="text-[14px] font-semibold text-[#0F1114] leading-[100%]">
                                            {{ property.bathrooms }} Bathrooms
                                        </span>
                                    </div>
                                </div>

                                <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                                    <button
                                        class="h-[34px] px-4 sm:pl-[18px] sm:pr-5 rounded-[80px] bg-[#F5F5F5] flex items-center justify-center sm:justify-start gap-[6px] w-full sm:w-auto">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                            stroke-width="2">
                                            <path
                                                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                        <span
                                            class="text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-2%]">
                                            {{ property.phone }}
                                        </span>
                                    </button>
                                    <button
                                        class="h-[34px] px-4 sm:pl-[18px] sm:pr-5 rounded-[80px] bg-[#F5F5F5] flex items-center justify-center sm:justify-start gap-[6px] w-full sm:w-auto">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                            stroke-width="2">
                                            <path
                                                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                        <span
                                            class="text-[12px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%]">{{
                                                property.email }}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        
        <ListingDetailModal :is-open="isDetailOpen" :property="selectedProperty" @close="isDetailOpen = false" />
    </div>
</template>

<style scoped>
:deep(.custom-map-marker) {
    background: none !important;
    border: none !important;
}
</style>
