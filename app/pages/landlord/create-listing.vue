<script setup>
import Navbar from '~/components/landlord/Navbar.vue';
import NewPropertyModel from '~/components/landlord/NewPropertyModel.vue';
import Sidebar from '~/components/landlord/Sidebar.vue';


const isNewPropertyModalOpen = ref(false);

const amenities = ref([
    'BUSINESS CENTER', 'CLUBHOUSE', 'BASKETBALL COURT', 'BBQ', 'ELEVATOR', 'GATED ENTRY',
    'FITNESS CENTER', 'HOT TUB', 'ON-SITE LAUNDRY', 'PET WASHING STATION', 'PLAYGROUND', 'TENNIS COURT',
    'THEATER ROOM', 'STORAGE UNITS', 'EV CHARGING STATIONS'
])

const features = ref([
    'ALARM', 'FURNISHED', 'RENOVATED', 'HARDWOOD FLOORS', 'FIREPLACE', 'FRESH PAINT', 'STORAGE', 'WALK-IN CLOSETS',
    'BALCONY, DECK, PATIO', 'INTERNET', 'FENCED YARD', 'TILE', 'CARPET', 'UNFURNISHED'
])

const laundryOptions = ref(['IN-UNIT', 'ON-SITE', 'HOOK-UPS', 'OTHER', 'NONE'])
const selectedLaundry = ref([])

const applianceOptions = ref(['COVERED', 'DEDICATED SPOT', 'DELIVERY', 'GARAGE', 'ON-STREET', 'PRIVATE LOT', 'OTHER', 'NONE'])
const selectedAppliances = ref([])

const acOptions = ref(['CENTRAL AIR', 'WINDOW UNIT', 'OTHER', 'NONE'])
const selectedAc = ref([])

const petOptions = ref(['PETS ALLOWED', 'CATS', 'DOGS', 'SMALL DOGS', 'LARGE DOGS', 'OTHER'])
const selectedPet = ref([])

const selectedAmenities = ref([])
const customAmenity = ref('')

const handleAddCustomAmenity = () => {
    if (customAmenity.value.trim()) {
        amenities.value.push(customAmenity.value.toUpperCase())
        customAmenity.value = ''
    }
}

const selectedFeatures = ref([])
const customFeature = ref('')

const handleAddCustomFeature = () => {
    if (customFeature.value.trim()) {
        features.value.push(customFeature.value.toUpperCase())
        customFeature.value = ''
    }
}

</script>

<template>
    <div class="flex min-h-screen bg-primary">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-4 sm:px-6 flex flex-col lg:flex-row gap-[30px] items-start">

                <div class=" lg:max-w-[944px] bg-white overflow-hidden">

                    <div class="pt-[22px] pb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div class="flex items-center gap-4">
                            <NuxtLink to="/listing"
                                class="w-10 h-10 my-[2px] rounded-full flex items-center justify-center border border-[#0F11141A]">
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
                                <h1 class="text-xl font-bold text-[#0F1114] leading-[100%] mb-1">Create Listing</h1>
                                <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Set up a
                                    listing with photos, details, and syndication options.</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 w-full sm:w-auto">
                            <button
                                class="h-10 px-6 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] flex-1 sm:flex-initial text-center justify-center">Save
                                Draft</button>
                            <button
                                class="h-10 px-5 rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] flex-1 sm:flex-initial text-center justify-center"
                                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">Submit
                                Listing</button>
                        </div>
                    </div>

                    <div class="w-full border border-[#0F11141A] rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 pt-[21px] pb-[20px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%] mb-[1px]">
                                Property Information</h2>
                            <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Choose the
                                property or unit you want to list. If it’s not in the system yet, you can create it
                                here.</p>
                        </div>

                        <div class="p-6 pt-[22px] grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px]">
                            <div class="col-span-1">
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Property
                                </label>
                                <div class="relative mb-[9px]">
                                    <select
                                        class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold leading-[100%] tracking-[-2%] text-[#0F1114] appearance-none focus:outline-none bg-white">
                                        <option>Dropdown</option>
                                    </select>
                                    <svg class="absolute right-3 top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </div>

                                <div @click="isNewPropertyModalOpen = true"
                                    class="ml-[6px] flex items-center gap-[6px] text-[12px] font-extrabold text-[#004CE5] uppercase leading-[100%] tracking-[-2%]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                        fill="none" stroke="#004CE5" stroke-width="3" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 5l0 14" />
                                        <path d="M5 12l14 0" />
                                    </svg>
                                    Create Property
                                </div>
                            </div>

                            <div class="col-span-1">
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Property
                                    Address / Unit</label>
                                <input type="text" placeholder="Property Address"
                                    class="mb-2 w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />

                                <input type="text" placeholder="Unit (Optional)"
                                    class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                            </div>

                            <div class="col-span-1">
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Property
                                    Details</label>

                                <div class="grid grid-cols-2 gap-x-[7px] gap-y-2">
                                    <div class="relative">
                                        <select
                                            class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-[#0F1114] appearance-none focus:outline-none bg-white">
                                            <option>Beds</option>
                                        </select>
                                        <svg class="absolute right-3 top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </div>
                                    <div class="relative">
                                        <select
                                            class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-[#0F1114] appearance-none focus:outline-none bg-white">
                                            <option>Baths</option>
                                        </select>
                                        <svg class="absolute right-3 top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </div>
                                    <div class="relative">
                                        <select
                                            class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-[#0F1114] appearance-none focus:outline-none bg-white">
                                            <option>Home Type</option>
                                        </select>
                                        <svg class="absolute right-3 top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </div>
                                    <input type="text" placeholder="Year built"
                                        class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                                </div>
                            </div>

                            <div class="col-span-1">
                                <div class="grid grid-cols-2 gap-x-[7px] gap-y-2 mt-[17px]">
                                    <input type="text" placeholder="Size, Sq.Ft"
                                        class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                                    <input type="text" placeholder="Market Rent (Monthly)"
                                        class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full border border-[#0F11141A] rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 py-[21px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%] mb-[1px]">Basic Amenities</h2>
                            <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Choose the
                                essential amenities available for this property.</p>
                        </div>

                        <div class="px-6 py-[21px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%]">Appliances</h2>
                        </div>
                        <div class="p-6 flex flex-wrap gap-2 border-b border-[#0F11141A]">
                            <label v-for="appliance in applianceOptions" :key="appliance"
                                class="flex items-center gap-[7px] px-4 py-[9px] bg-[#0F111405] rounded-[80px] border border-[#0F11141A] cursor-pointer transition-all">
                                <input type="checkbox" :value="appliance" v-model="selectedAppliances" class="hidden" />
                                <div
                                    class="w-3 h-3 rounded-full border border-[#0F1114] flex items-center justify-center">
                                    <svg v-if="selectedAppliances.includes(appliance)" width="12" height="12"
                                        viewBox="0 0 24 24" fill="none" stroke="#0F1114" stroke-width="4"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <span
                                    class="text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-[#0F1114]">
                                    {{ appliance }}
                                </span>
                            </label>
                        </div>

                        <div class="px-6 py-[21px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%]">Laundry</h2>
                        </div>
                        <div class="p-6 flex flex-wrap gap-2 border-b border-[#0F11141A]">
                            <label v-for="laundry in laundryOptions" :key="laundry"
                                class="flex items-center gap-[7px] px-4 py-[9px] bg-[#0F111405] rounded-[80px] border border-[#0F11141A] cursor-pointer transition-all">
                                <input type="checkbox" :value="laundry" v-model="selectedLaundry" class="hidden" />
                                <div
                                    class="w-3 h-3 rounded-full border border-[#0F1114] flex items-center justify-center">
                                    <svg v-if="selectedLaundry.includes(laundry)" width="12" height="12"
                                        viewBox="0 0 24 24" fill="none" stroke="#0F1114" stroke-width="4"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <span
                                    class="text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-[#0F1114]">
                                    {{ laundry }}
                                </span>
                            </label>
                        </div>

                        <div class="px-6 py-[21px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%]">Air conditioning</h2>
                        </div>
                        <div class="p-6 flex flex-wrap gap-2">
                            <label v-for="ac in acOptions" :key="ac"
                                class="flex items-center gap-[7px] px-4 py-[9px] bg-[#0F111405] rounded-[80px] border border-[#0F11141A] cursor-pointer transition-all">
                                <input type="checkbox" :value="ac" v-model="selectedAc" class="hidden" />
                                <div
                                    class="w-3 h-3 rounded-full border border-[#0F1114] flex items-center justify-center">
                                    <svg v-if="selectedAc.includes(ac)" width="12" height="12" viewBox="0 0 24 24"
                                        fill="none" stroke="#0F1114" stroke-width="4" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <span
                                    class="text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-[#0F1114]">
                                    {{ ac }}
                                </span>
                            </label>
                        </div>
                    </div>

                    <div class="w-full border border-[#0F11141A] rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 pt-[21px] pb-[20px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%] mb-[1px]">Property Amenities
                            </h2>
                            <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Select the
                                property amenities available to residents.</p>
                        </div>

                        <div class="p-6 flex flex-wrap gap-2 border-b border-[#0F11141A]">
                            <label v-for="amenity in amenities" :key="amenity"
                                class="flex items-center gap-2 px-4 py-[9px] bg-[#0F111405] rounded-[80px] border border-[#0F11141A] cursor-pointer transition-all">
                                <input type="checkbox" :value="amenity" v-model="selectedAmenities" class="hidden" />
                                <div class="w-3 h-3 border border-[#0F1114] flex items-center justify-center">
                                    <svg v-if="selectedAmenities.includes(amenity)" width="12" height="12"
                                        viewBox="0 0 24 24" fill="none" stroke="#0F1114" stroke-width="4"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <span
                                    class="text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-[#0F1114]">
                                    {{ amenity }}
                                </span>
                            </label>
                        </div>

                        <div class="p-6 pt-[22px]">
                            <h3
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">
                                ADD CUSTOM AMENITY</h3>
                            <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                                <input v-model="customAmenity" type="text" placeholder="ENTER CUSTOM AMENITY"
                                    class="flex-1 px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />

                                <div class="flex flex-col sm:flex-row items-center gap-[9px] w-full sm:w-auto">
                                    <button @click="handleAddCustomAmenity"
                                        class="w-full sm:w-auto py-[14px] sm:px-[69px] rounded-[80px] bg-[#0F1114] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] hover:bg-[#0F1114E6] transition-colors">
                                        SAVE
                                    </button>
                                    <button @click="customAmenity = ''"
                                        class="w-full sm:w-auto py-[13px] sm:px-16 rounded-[80px] border border-[#0F1114] text-[#0F1114] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] hover:bg-[#0F11140D] transition-colors">
                                        CLOSE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full border border-[#0F11141A] rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 pt-[21px] pb-[20px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%] mb-[1px]">Property Features
                            </h2>
                            <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Choose the
                                in-unit features included with this property.</p>
                        </div>

                        <div class="p-6 flex flex-wrap gap-2 border-b border-[#0F11141A]">
                            <label v-for="feature in features" :key="feature"
                                class="flex items-center gap-2 px-4 py-[9px] bg-[#0F111405] rounded-[80px] border border-[#0F11141A] cursor-pointer transition-all">
                                <input type="checkbox" :value="feature" v-model="selectedFeatures" class="hidden" />
                                <div class="w-3 h-3 border border-[#0F1114] flex items-center justify-center">
                                    <svg v-if="selectedFeatures.includes(feature)" width="12" height="12"
                                        viewBox="0 0 24 24" fill="none" stroke="#0F1114" stroke-width="4"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <span
                                    class="text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-[#0F1114]">
                                    {{ feature }}
                                </span>
                            </label>
                        </div>

                        <div class="p-6 pt-[22px]">
                            <h3
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">
                                ADD CUSTOM Features</h3>
                            <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                                <input v-model="customFeature" type="text" placeholder="ENTER CUSTOM Features"
                                    class="flex-1 px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />

                                <div class="flex flex-col sm:flex-row items-center gap-[9px] w-full sm:w-auto">
                                    <button @click="handleAddCustomFeature"
                                        class="w-full sm:w-auto py-[14px] sm:px-[69px] rounded-[80px] bg-[#0F1114] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] hover:bg-[#0F1114E6] transition-colors">
                                        SAVE
                                    </button>
                                    <button @click="customFeature = ''"
                                        class="w-full sm:w-auto py-[13px] px-16 rounded-[80px] border border-[#0F1114] text-[#0F1114] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] hover:bg-[#0F11140D] transition-colors">
                                        CLOSE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full border border-[#0F11141A] rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 pt-[21px] pb-[20px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%] mb-[1px]">Cover Photo</h2>
                            <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Add a cover
                                photo that best
                                represents your property. This will appear as the primary image on your listing.</p>
                        </div>

                        <div class="p-6 border-b border-[#0F11141A]">
                            <div
                                class="border border-dashed border-[#0F11141A] bg-[#FAFAFA] rounded-[12px] p-[17px] pb-[13px] mb-4">
                                <p
                                    class="text-[12px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%] mb-[11px]">
                                    Listing Cover Photo</p>
                                <div
                                    class="flex flex-wrap sm:flex-nowrap items-center gap-[11px] border border-[#0F11141A] rounded-[8px] pl-4 pr-[25px] py-[11px] bg-[#FAFAFA]">
                                    <button
                                        class="flex items-center gap-[6px] bg-[#0F1114] text-white px-[14px] py-[8px] rounded-[16px] text-[12px] font-bold uppercase leading-[100%] tracking-[-2%]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path
                                                d="M15 22h3a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h3" />
                                            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                            <path d="M12 12v10" />
                                            <path d="m9 15 3-3 3 3" />
                                        </svg>
                                        CHOOSE FILE
                                    </button>
                                    <span
                                        class="text-[12px] font-bold text-[#0F111499] leading-[100%] tracking-[-2%] flex-1">No
                                        file chosen</span>
                                    <button
                                        class="text-[12px] font-bold text-[#004CE5] leading-[100%] tracking-[-2%]">Clear</button>
                                </div>
                                <p class="mt-[5px] text-[12px] font-bold text-[#0F111499] leading-4 tracking-[-2%]">
                                    Upload one image</p>
                            </div>

                            <div class="w-full sm:w-[246px] h-[180px] sm:h-[120px] border border-[#0F11141A] rounded-[12px] flex items-center justify-center"
                                style="background: linear-gradient(102.96deg, #FAFAFA 0.31%, rgba(250, 250, 250, 0) 99.69%);">
                                <span
                                    class="text-[12px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">No
                                    cover selected</span>
                            </div>
                        </div>

                        <div class="px-6 py-3 border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%] mb-[1px]">Photo Gallery</h2>
                            <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Add photos to
                                your property.</p>
                        </div>

                        <div class="p-6">
                            <div
                                class="border border-dashed border-[#0F11141A] bg-[#FAFAFA] rounded-[12px] p-[17px] pb-[13px] mb-4">
                                <p
                                    class="text-[12px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%] mb-[11px]">
                                    Gallery</p>
                                <div
                                    class="flex flex-wrap sm:flex-nowrap items-center gap-[11px] border border-[#0F11141A] rounded-[8px] pl-4 pr-[25px] py-[11px] bg-[#FAFAFA]">
                                    <button
                                        class="flex items-center gap-[6px] bg-[#0F1114] text-white px-[14px] py-[8px] rounded-[16px] text-[12px] font-bold uppercase leading-[100%] tracking-[-2%]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path
                                                d="M15 22h3a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h3" />
                                            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                            <path d="M12 12v10" />
                                            <path d="m9 15 3-3 3 3" />
                                        </svg>
                                        CHOOSE FILE
                                    </button>
                                    <span
                                        class="text-[12px] font-bold text-[#0F111499] leading-[100%] tracking-[-2%] flex-1">No
                                        file chosen</span>
                                    <button
                                        class="text-[12px] font-bold text-[#004CE5] leading-[100%] tracking-[-2%]">Clear</button>
                                </div>
                                <p class="mt-[5px] text-[12px] font-bold text-[#0F111499] leading-4 tracking-[-2%]">
                                    Add multiple photos</p>
                            </div>

                            <div class="w-full sm:w-[246px] h-[180px] sm:h-[120px] border border-[#0F11141A] rounded-[12px] flex items-center justify-center"
                                style="background: linear-gradient(102.96deg, #FAFAFA 0.31%, rgba(250, 250, 250, 0) 99.69%);">
                                <span
                                    class="text-[12px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">No
                                    cover selected</span>
                            </div>
                        </div>
                    </div>

                    <div class="w-full border border-[#0F11141A] rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 pt-[21px] pb-[20px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%] mb-[1px]">Marketing Description
                            </h2>
                            <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Highlight the
                                key features and unique benefits of your rental so applicants understand why it’s a
                                great choice and so you attract the right renters.</p>
                        </div>

                        <div class="px-6 py-[25px]">
                            <div class="border border-[#0F11141A] rounded-[12px] overflow-hidden">
                                <div
                                    class="px-5 py-[14px] flex flex-wrap items-center gap-[13px] border-b border-[#0F11141A] bg-[#FAFAFA66]">
                                    <div class="flex flex-wrap items-center gap-[15px]">

                                        <button
                                            class="text-[14px] font-semibold text-[#0F1114CC] uppercase leading-[100%] tracking-[-2%]">
                                            B
                                        </button>
                                        <button
                                            class="text-[14px] font-semibold text-[#0F1114CC] uppercase leading-[100%] tracking-[-2%]">
                                            /
                                        </button>
                                        <button class="text-[#0F1114] hover:bg-[#0F11140D] transition-colors">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                                stroke-linejoin="round">
                                                <line x1="10" y1="6" x2="21" y2="6"></line>
                                                <line x1="10" y1="12" x2="21" y2="12"></line>
                                                <line x1="10" y1="18" x2="21" y2="18"></line>
                                                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                                <line x1="3" y1="18" x2="3.01" y2="18"></line>
                                            </svg>
                                        </button>
                                    </div>
                                    <button
                                        class="text-[14px] font-extrabold text-[#004CE5] leading-[100%] tracking-[-2%]">
                                        Insert Template
                                    </button>
                                </div>

                                <textarea
                                    placeholder="Example: Bright, updated home with great natural light and easy access to transit. In-unit laundry, parking, and a spacious yard."
                                    class="block w-full h-[76px] px-4 py-[14px] text-[12px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%] outline-none resize-none placeholder:text-[#0F111466]"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="w-full border border-[#0F11141A] rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 pt-[21px] pb-[20px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%] mb-[1px]">Lease Details</h2>
                            <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Provide the key
                                lease terms along with any important additional details renters should know.</p>
                        </div>

                        <div
                            class="p-6 pt-[22px] border-b border-[#0F11141A] grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px]">
                            <div class="col-span-1">
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Monthly
                                    Rent
                                </label>
                                <input type="text" placeholder="$ Amount"
                                    class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                            </div>

                            <div class="col-span-1">
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Security
                                    deposit
                                </label>
                                <input type="text" placeholder="$ Amount"
                                    class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                            </div>

                            <div class="col-span-1">
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Amount
                                    refundable
                                </label>
                                <input type="text" placeholder="$ Amount"
                                    class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                            </div>

                            <div class="col-span-1">
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Date
                                    available
                                </label>
                                <div class="relative">
                                    <input type="date"
                                        class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] focus:outline-none" />
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

                            <div class="col-span-1">
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Min
                                    lease durationMin lease duration
                                </label>
                                <div class="relative mb-[9px]">
                                    <select
                                        class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold leading-[100%] tracking-[-2%] text-[#0F1114] appearance-none focus:outline-none bg-white">
                                        <option>12 Months</option>
                                    </select>
                                    <svg class="absolute right-3 top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </div>
                            </div>

                            <div class="col-span-1">
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Max
                                    lease duration
                                </label>
                                <div class="relative mb-[9px]">
                                    <select
                                        class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold leading-[100%] tracking-[-2%] text-[#0F1114] appearance-none focus:outline-none bg-white">
                                        <option>12 Months</option>
                                    </select>
                                    <svg class="absolute right-3 top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div class="px-6 pt-[22px] pb-[25px]">
                            <p
                                class="ml-[3px] text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[6px]">
                                Additional lease details</p>

                            <div class="border border-[#0F11141A] rounded-[12px] overflow-hidden">
                                <div
                                    class="px-5 py-[14px] flex flex-wrap items-center gap-[13px] border-b border-[#0F11141A] bg-[#FAFAFA66]">
                                    <div class="flex flex-wrap items-center gap-[15px]">

                                        <button
                                            class="text-[14px] font-semibold text-[#0F1114CC] uppercase leading-[100%] tracking-[-2%]">
                                            B
                                        </button>
                                        <button
                                            class="text-[14px] font-semibold text-[#0F1114CC] uppercase leading-[100%] tracking-[-2%]">
                                            /
                                        </button>
                                        <button class="text-[#0F1114] hover:bg-[#0F11140D] transition-colors">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                                stroke-linejoin="round">
                                                <line x1="10" y1="6" x2="21" y2="6"></line>
                                                <line x1="10" y1="12" x2="21" y2="12"></line>
                                                <line x1="10" y1="18" x2="21" y2="18"></line>
                                                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                                <line x1="3" y1="18" x2="3.01" y2="18"></line>
                                            </svg>
                                        </button>
                                    </div>
                                    <button
                                        class="text-[14px] font-extrabold text-[#004CE5] leading-[100%] tracking-[-2%]">
                                        Insert Template
                                    </button>
                                </div>

                                <textarea
                                    placeholder="Example: Bright, updated home with great natural light and easy access to transit. In-unit laundry, parking, and a spacious yard."
                                    class="block w-full h-[76px] px-4 py-[14px] text-[12px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%] outline-none resize-none placeholder:text-[#0F111466]"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="w-full border border-[#0F11141A] rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 pt-[21px] pb-[20px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%]">Pets</h2>
                        </div>

                        <div class="p-6">
                            <div class="flex flex-wrap sm:flex-nowrap items-center gap-2 mb-[14px]">
                                <label v-for="pet in petOptions" :key="pet"
                                    class="flex items-center gap-2 px-4 py-[9px] bg-[#0F111405] rounded-[80px] border border-[#0F11141A] cursor-pointer transition-all">
                                    <input type="checkbox" class="hidden" v-model="selectedPet" />
                                    <div class="w-3 h-3 border border-[#0F1114] flex items-center justify-center">
                                        <svg v-if="selectedPet.includes(pet)" width="12" height="12" viewBox="0 0 24 24"
                                            fill="none" stroke="#0F1114" stroke-width="4" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <span
                                        class="text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-[#0F1114]">
                                        {{ pet }}
                                    </span>
                                </label>
                            </div>

                            <div class="mb-[14px] grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label
                                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Pets
                                        deposit</label>
                                    <input type="text" placeholder="$ Amount"
                                        class="mb-2 w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                                </div>
                            </div>

                            <div>
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Editor</label>
                                <textarea placeholder="Here you can add pet policy and other details if necessary."
                                    class="block w-full h-[120px] border border-[#0F11141A] rounded-[12px] px-[17px] py-[14px] text-[12px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%] outline-none resize-none placeholder:text-[#0F111466]"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="w-full border border-[#0F11141A] rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 pt-[21px] pb-[20px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%] mb-[1px]">Tenant Screening</h2>
                            <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Your applicant
                                will be requested to complete Full Check screening. Include additional services that
                                work best for you.</p>
                        </div>

                        <div class="p-6">
                            <div class="border border-[#0F11141A] rounded-[12px] pt-[15px] pb-[14px] px-[17px]">
                                <h2 class="text-[14px] font-bold text-[#0F1114] leading-[100%]">Full Check</h2>
                                <p class="text-[10px] font-medium text-[#0F111499] leading-4 tracking-[-2%] mb-[10px]">
                                    Paid by applicant • $40.00</p>

                                <div class="flex items-center gap-[7px]">
                                    <div class="border border-[#0F1114] w-3 h-3"></div>
                                    <div class="flex flex-col">
                                        <h2 class="text-[12px] font-bold text-[#0F1114] leading-[100%]">Proceed without
                                            tenant screening</h2>
                                        <p
                                            class="text-[10px] font-medium text-[#0F111499] leading-4 tracking-[-2%] mb-[-2px]">
                                            Applicants can apply without a screening report.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full border border-[#0F11141A] rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 pt-[21px] pb-[20px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%] mb-[1px]">Listing Contact</h2>
                            <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Provide the
                                contact details that will be displayed publicly for potential tenants to reach you.</p>
                        </div>

                        <div class="p-6 pt-[22px]">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px] mb-3">
                                <div class="col-span-1">
                                    <label
                                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Name
                                    </label>
                                    <input type="text" placeholder="Name"
                                        class="mb-2 w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                                </div>

                                <div class="col-span-1">
                                    <label
                                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Phone
                                        NUmber
                                    </label>
                                    <input type="text" placeholder="Phone Number"
                                        class="mb-2 w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                                </div>

                                <div class="col-span-2">
                                    <label
                                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Email
                                    </label>
                                    <input type="Email" placeholder="Email"
                                        class="mb-2 w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                                </div>
                            </div>

                            <div class="flex items-center justify-between">
                                <label
                                    class="flex items-center gap-2 px-4 py-[9px] bg-[#0F111405] rounded-[80px] border border-[#0F11141A] cursor-pointer transition-all">
                                    <input type="checkbox" class="hidden" v-model="petAllow" />
                                    <div class="w-3 h-3 border border-[#0F1114] flex items-center justify-center">
                                        <svg v-if="petAllow" width="12" height="12" viewBox="0 0 24 24" fill="none"
                                            stroke="#0F1114" stroke-width="4" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <span
                                        class="text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-[#0F1114]">
                                        Display the phone number publicly
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="w-full border border-[#0F11141A] rounded-[24px] mb-10 overflow-hidden">
                        <div class="px-6 pt-[21px] pb-[20px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%] mb-[1px]">Syndication Options
                            </h2>
                            <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Select the
                                platforms where you want your listing to appear. Your listing website is always included
                                and your listing will be posted there automatically.</p>
                        </div>

                        <div class="px-6 py-[22px]">
                            <div class="flex items-center gap-[7px] mb-[11px]">
                                <div class="border border-[#0F1114] w-3 h-3"></div>
                                <div class="flex flex-col">
                                    <h2 class="text-[12px] font-bold text-[#0F1114] leading-[100%]">Listing Website</h2>
                                    <p
                                        class="text-[10px] font-medium text-[#0F111499] leading-4 tracking-[-2%] mb-[-2px]">
                                        https://url/listings#</p>
                                </div>
                            </div>

                            <div class="flex items-center gap-[7px]">
                                <div class="border border-[#0F1114] w-3 h-3"></div>
                                <div class="flex flex-col">
                                    <h2 class="text-[12px] font-bold text-[#0F1114] leading-[100%]">Premium Syndication
                                    </h2>
                                    <p
                                        class="text-[10px] font-medium text-[#0F111499] leading-4 tracking-[-2%] mb-[-2px]">
                                        Zillow • Trulia • HotPads • $30.00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <NewPropertyModel :is-open="isNewPropertyModalOpen" @close="isNewPropertyModalOpen = false" />
            </main>
        </div>
    </div>
</template>
