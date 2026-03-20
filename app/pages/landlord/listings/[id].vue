<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import type { Map as LeafletMap } from 'leaflet';
import Navbar from '~/components/landlord/Navbar.vue';
import Sidebar from '~/components/landlord/Sidebar.vue';
import type { Property } from '~/types/interfaces';

const route = useRoute();
const id = route.params.id as string;

const properties: Property[] = [
    {
        id: '1',
        title: 'Cute Home',
        address: '123 Main St, Oakland, CA',
        price: '$3,200/mo',
        sqft: '1,524 sq ft',
        bedrooms: 3,
        bathrooms: 3,
        phone: '(510) 555-7788',
        email: 'leasing@domain.com',
        images: [
            '/assets/listing1.png',
            '/assets/listing2.png',
            '/assets/listing3.png',
            '/assets/listing1.png',
            '/assets/listing2.png'
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
            '/assets/listing1.png',
            '/assets/listing3.png',
            '/assets/listing2.png',
            '/assets/listing1.png'
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
            '/assets/listing1.png',
            '/assets/listing2.png',
            '/assets/listing3.png',
            '/assets/listing1.png'
        ],
        coords: [38.81, -76.75]
    }
];

const property = properties.find((p: Property) => p.id === id) ?? properties[0];

const listingMap = ref<LeafletMap | null>(null);

const initMap = async (): Promise<void> => {
    if (process.client) {
        const L = await import('leaflet');
        const mapContainer = document.getElementById('listing-map');
        if (!mapContainer || listingMap.value) return;

        if (!property) return;
        const coords: [number, number] = property.coords ?? [38.9072, -77.0369];

        listingMap.value = L.map('listing-map', {
            center: coords,
            zoom: 8.5,
            zoomControl: false,
            attributionControl: false
        });

        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            maxZoom: 19
        }).addTo(listingMap.value);

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
        });

        L.marker(coords, { icon: customIcon }).addTo(listingMap.value);

        setTimeout((): void => {
            listingMap.value?.invalidateSize();
        }, 100);
    }
};

useHead({
    link: [
        { rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css' }
    ]
});

onMounted((): void => {
    setTimeout((): void => {
        initMap();
    }, 100);
});

onUnmounted((): void => {
    if (listingMap.value) {
        listingMap.value.remove();
        listingMap.value = null;
    }
});
</script>

<template>
    <div v-if="property" class="flex min-h-screen bg-primary">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-4 sm:px-6 flex flex-col lg:flex-row gap-[30px] items-start">

                <div class=" lg:max-w-[944px] bg-primary overflow-hidden">

                    <!-- Header -->
                    <div class="pt-[22px] pb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div class="flex items-center gap-4">
                            <NuxtLink to="/landlord/listings"
                                class="w-10 h-10 my-[2px] rounded-full flex items-center justify-center border border-neutral-primary/10 text-neutral-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 12l14 0" />
                                    <path d="M5 12l4 4" />
                                    <path d="M5 12l4 -4" />
                                </svg>
                            </NuxtLink>
                            <div>
                                <h1 class="text-xl font-bold text-neutral-primary leading-[100%] mb-1">Listing Details
                                </h1>
                                <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                    {{ property.address }}</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 w-full sm:w-auto">
                            <button
                                class="py-[13px] px-6 rounded-[80px] border border-neutral-primary/10 text-neutral-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] flex-1 sm:flex-initial text-center justify-center">
                                Share</button>
                            <button
                                class="py-[14px] px-6 rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] flex-1 sm:flex-initial text-center justify-center"
                                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">Save</button>
                        </div>
                    </div>

                    <div class="w-full border border-neutral-primary/10 rounded-[24px] mb-4 overflow-hidden">
                        <h2
                            class="text-[16px] font-bold text-neutral-primary leading-[100%] px-6 pt-[21px] pb-[20px] border-b border-neutral-primary/10">
                            Photos</h2>

                        <!-- Image Grid -->
                        <div class="p-6 border-b border-neutral-primary/10">
                            <div class="flex flex-wrap gap-3 sm:gap-2 md:gap-4 mb-4">
                                <div class="w-full sm:w-[280px] md:w-[247px] h-[160px] rounded-[12px] overflow-hidden">
                                    <img :src="property.images[0]" class="w-full h-full object-cover">
                                </div>
                                <div class="w-full sm:w-[280px] md:w-[192px] h-[160px] rounded-[12px] overflow-hidden">
                                    <img :src="property.images[1]" class="w-full h-full object-cover">
                                </div>
                                <div class="w-full sm:w-[280px] md:w-[160px] h-[160px] rounded-[12px] overflow-hidden">
                                    <img :src="property.images[2]" class="w-full h-full object-cover">
                                </div>
                                <div class="w-full sm:w-[280px] md:w-[247px] h-[160px] rounded-[12px] overflow-hidden">
                                    <img :src="property.images[3]" class="w-full h-full object-cover">
                                </div>
                            </div>
                            <div class="flex flex-wrap gap-3 sm:gap-2 md:gap-4">
                                <div class="w-full sm:w-[280px] md:w-[200px] h-[144px] rounded-[12px] overflow-hidden">
                                    <img :src="property.images[4]" class="w-full h-full object-cover">
                                </div>
                                <div
                                    class="w-full sm:w-[280px] md:w-[200px] h-[144px] rounded-[12px] bg-[#F2F2F2] flex items-center justify-center cursor-pointer hover:bg-neutral-primary/10 transition-colors">
                                    <span
                                        class="text-[14px] font-extrabold text-neutral-primary leading-[100%] tracking-[-2%]">View
                                        more</span>
                                </div>
                            </div>
                        </div>

                        <!-- Address and Apply Row -->
                        <div
                            class="px-6 py-[14px] border-b border-neutral-primary/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <h3 class="text-[16px] font-bold text-neutral-primary leading-[100%]">{{ property.address }}
                            </h3>
                            <div class="flex items-center gap-2">
                                <button
                                    class="px-4 py-[10px] bg-neutral-primary rounded-[80px] text-[12px] font-extrabold text-primary uppercase tracking-[-2%] leading-[100%]">
                                    REQUEST TOUR
                                </button>
                                <button
                                    class="px-4 py-[10px] rounded-[80px] text-[12px] font-extrabold text-primary uppercase tracking-[-2%] leading-[100%]"
                                    style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                                    APPLY NOW
                                </button>
                            </div>
                        </div>

                        <!-- Property Info Row -->
                        <div class="p-6 pb-[19px] border-b border-neutral-primary/10">
                            <div class="flex items-center gap-[23px] mb-4">
                                <div class="flex items-center gap-[7px]">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="w-5 h-5">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M16.6667 10H3.33341C2.41258 10 1.66675 10.7458 1.66675 11.6667V14.1108C1.66675 14.5708 2.04008 14.9442 2.50008 14.9442H17.5001C17.9601 14.9442 18.3334 14.5708 18.3334 14.1108V11.6667C18.3334 10.7458 17.5876 10 16.6667 10Z"
                                            stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M3.33325 9.99984V5.77734C3.33325 4.39651 4.45242 3.27734 5.83325 3.27734H14.1666C15.5474 3.27734 16.6666 4.39651 16.6666 5.77734V9.99984"
                                            stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M17.4999 15V16.6083" stroke="currentColor" stroke-width="1.25"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M2.49992 15V16.6083" stroke="currentColor" stroke-width="1.25"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M6.25 10V10C6.25 8.61917 7.36917 7.5 8.75 7.5H11.25C12.6308 7.5 13.75 8.61917 13.75 10V10"
                                            stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    <span class="text-[14px] font-semibold text-neutral-primary leading-[100%]">{{
                                        property.bedrooms }}
                                        Beds</span>
                                </div>
                                <div class="w-[1px] h-6 bg-neutral-primary/40"></div>
                                <div class="flex items-center gap-[7px]">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="w-5 h-5">
                                        <path d="M1.66675 10.8337H18.3334" stroke="currentColor" stroke-width="1.25"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M17.5 10.833L17.0462 13.7374C16.7828 15.4234 15.3306 16.6663 13.6241 16.6663H6.37589C4.6694 16.6663 3.21718 15.4234 2.95377 13.7374L2.5 10.833"
                                            stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M5.10944 16.4229L4.16675 17.5001" stroke="currentColor"
                                            stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.8906 16.4229L15.8333 17.5001" stroke="currentColor"
                                            stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M9.07351 5H9.25986C10.1431 5 10.9273 5.5652 11.2066 6.40314V6.40314C11.2913 6.65727 11.2487 6.93662 11.0921 7.15393C10.9355 7.37123 10.6839 7.5 10.416 7.5H7.91733C7.64946 7.5 7.39792 7.37123 7.24129 7.15393C7.08466 6.93662 7.04205 6.65727 7.12676 6.40314V6.40314C7.40607 5.5652 8.19024 5 9.07351 5V5Z"
                                            stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M9.16675 5V5C9.16675 3.61929 8.04746 2.5 6.66675 2.5V2.5C5.28604 2.5 4.16675 3.61929 4.16675 5V10.8333"
                                            stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    <span class="text-[14px] font-semibold text-neutral-primary leading-[100%]">{{
                                        property.bathrooms }}
                                        Baths</span>
                                </div>
                                <div class="w-[1px] h-6 bg-neutral-primary/40"></div>
                                <div class="flex items-center gap-[7px]">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="w-5 h-5">
                                        <path
                                            d="M7.49891 7.49915H16.6694C17.1298 7.49915 17.5031 7.1259 17.5031 6.66547V3.33075C17.5031 2.87032 17.1298 2.49707 16.6694 2.49707H7.49891C4.73634 2.49707 2.49683 4.73658 2.49683 7.49915V12.5012"
                                            stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <circle cx="7.49891" cy="12.5011" r="5.00208" stroke="currentColor"
                                            stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        <circle cx="7.4989" cy="12.5013" r="1.66736" stroke="currentColor"
                                            stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.49887 2.49707V4.16443" stroke="currentColor" stroke-width="1.25"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9.99985 2.49707V4.99811" stroke="currentColor" stroke-width="1.25"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12.5008 2.49707V4.16443" stroke="currentColor" stroke-width="1.25"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.002 2.49707V4.99811" stroke="currentColor" stroke-width="1.25"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span class="text-[14px] font-semibold text-neutral-primary leading-[100%]">{{
                                        property.sqft }}</span>
                                </div>
                            </div>
                            <h2 class="text-[20px] font-extrabold text-neutral-primary leading-[100%]">{{ property.price
                            }}</h2>
                        </div>

                        <!-- Property Overview -->
                        <div class="px-6 py-[21px] border-b border-neutral-primary/10">
                            <h4 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[5px]">Property
                                Overview
                            </h4>
                            <p class="text-[12px] font-medium text-neutral-primary/80 leading-[100%]">
                                Bright, modern home with open layout and great natural light.
                            </p>
                        </div>

                        <!-- Highlights & Amenities -->
                        <div class="p-6 border-b border-neutral-primary/10 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="px-4 pb-[13px] pt-[14px] rounded-[12px] border border-neutral-primary/10">
                                <p
                                    class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-[5px]">
                                    HIGHLIGHTS</p>
                                <p class="text-[14px] font-bold text-neutral-primary leading-[18px]">
                                    In-unit laundry • Private yard • Updated kitchen
                                </p>
                            </div>
                            <div class="px-4 pb-[13px] pt-[14px] rounded-[12px] border border-neutral-primary/10">
                                <p
                                    class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-[5px]">
                                    AMENITIES</p>
                                <p class="text-[14px] font-bold text-neutral-primary leading-[18px]">
                                    Hardwood floors • Dishwasher • Parking • Dual-pane windows
                                </p>
                            </div>
                        </div>

                        <!-- Description -->
                        <div class="px-6 py-[21px] border-b border-neutral-primary/10">
                            <h4 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[5px]">Description
                            </h4>
                            <p class="text-[12px] font-medium text-neutral-primary/80 leading-4">
                                Welcome home to a charming 2 bed / 2 bath with updated kitchen, in-unit laundry, and a
                                spacious yard. Close to local shops and transit.
                            </p>
                        </div>

                        <!-- Fees & policies -->
                        <div class="border-b border-neutral-primary/10">
                            <div class="px-6 py-[21px] border-b border-neutral-primary/10">
                                <h4 class="text-[16px] font-bold text-neutral-primary leading-[100%]">
                                    Fees & policies
                                </h4>
                            </div>

                            <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="px-4 pb-[13px] pt-[14px] rounded-[12px] border border-neutral-primary/10">
                                    <p
                                        class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-[5px]">
                                        PETS</p>
                                    <p class="text-[14px] font-bold text-neutral-primary leading-[18px]">
                                        Cats allowed • Dogs allowed
                                    </p>
                                </div>
                                <div class="px-4 pb-[13px] pt-[14px] rounded-[12px] border border-neutral-primary/10">
                                    <p
                                        class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-[5px]">
                                        Fees & policies</p>
                                    <p class="text-[14px] font-bold text-neutral-primary leading-[18px]">
                                        Deposit: 1x rent • Application fee: $55 • Move-in fees may apply
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Contact -->
                        <div class="border-b border-neutral-primary/10">
                            <div class="px-6 py-[21px] border-b border-neutral-primary/10">
                                <h4 class="text-[16px] font-bold text-neutral-primary leading-[100%]">
                                    Contact
                                </h4>
                            </div>

                            <div class="p-6 flex flex-col gap-4">
                                <div class="flex items-center gap-3">
                                    <div
                                        class="w-8 h-8 rounded-[8px] bg-[#F2F6FF] border border-brand-blue/10 flex items-center justify-center text-brand-blue text-[12px] font-extrabold tracking-[-2%] leading-[100%]">
                                        JL
                                    </div>
                                    <span
                                        class="text-[14px] font-semibold text-neutral-primary leading-[100%] tracking-[-2%]">
                                        Jordan Lee</span>
                                </div>
                                <button
                                    class="w-fit py-[14px] px-5 rounded-[80px] bg-neutral-primary text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%]">
                                    REQUEST TOUR
                                </button>
                            </div>
                        </div>

                        <!-- Map -->
                        <div class="border-b border-neutral-primary/10">
                            <div class="px-6 py-[21px] border-b border-neutral-primary/10">
                                <h4 class="text-[16px] font-bold text-neutral-primary leading-[100%]">
                                    Map
                                </h4>
                            </div>

                            <div class="p-6">
                                <div id="listing-map" class="w-full h-[302px] rounded-[8px] overflow-hidden"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

        </div>

    </div>
</template>

<style scoped>
:deep(.custom-map-marker) {
    background: none !important;
    border: none !important;
}
</style>
