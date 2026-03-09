<script setup>
import Navbar from '~/components/landlord/Navbar.vue';
import Sidebar from '~/components/landlord/Sidebar.vue';

definePageMeta({
    path: '/add-unit',
})

const parkingTypes = ref([
    'COVERED', 'DEDICATED SPOT', 'DRIVEWAY', 'GARAGE', 'ON-STREET', 'PRIVATE LOT', 'OTHER', 'NONE'
])
const selectedParkingType = ref('NONE')
const parkingFee = ref(false)
const parkingAmount = ref('')

const laundryOptions = ref(['IN-UNIT', 'ON-SITE', 'HOOK-UPS', 'OTHER', 'NONE'])
const selectedLaundry = ref([])

const applianceOptions = ref(['STOVE', 'OVEN', 'REFRIGERATOR', 'DISHWASHER'])
const selectedAppliances = ref([])
const customAppliance = ref('')

const handleAddCustomAppliance = () => {
    if (customAppliance.value.trim()) {
        applianceOptions.value.push(customAppliance.value.toUpperCase())
        customAppliance.value = ''
    }
}

const acOptions = ref(['CENTRAL AIR', 'WINDOW UNIT', 'OTHER', 'NONE'])
const selectedAc = ref([])

const unitDetails = ref({
    propertyName: 'CALIFORNIA BUILDING',
    unitNumber: '5',
    unitType: 'Dropdown',
    beds: 'Dropdown',
    baths: 'Dropdown',
    size: '0.00',
    rent: '0.00',
    deposit: '0.00'
})

const features = ref([
    'ALARM', 'FURNISHED', 'RENOVATED', 'HARDWOOD FLOORS', 'FIREPLACE', 'FRESH PAINT', 'STORAGE', 'WALK-IN CLOSETS',
    'BALCONY, DECK, PATIO', 'INTERNET', 'FENCED YARD', 'TILE', 'CARPET', 'UNFURNISHED'
])

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

            <div class="px-4 sm:px-6 pt-[19px] pb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div class="flex items-center gap-4">
                    <NuxtLink to="/portfolio"
                        class="w-10 h-10 rounded-full flex items-center justify-center border border-[#0F11141A]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="#0F1114" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l14 0" />
                            <path d="M5 12l4 4" />
                            <path d="M5 12l4 -4" />
                        </svg>
                    </NuxtLink>
                    <div>
                        <h1 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-1">Add Unit</h1>
                        <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Add unit details,
                            features, photos, and attachments.</p>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <button
                        class="px-5 py-[13px] rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] flex-1 sm:flex-initial text-center justify-center whitespace-nowrap">
                        CANCEL</button>
                    <button
                        class="px-5 py-[14px] rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] flex-1 sm:flex-initial text-center justify-center whitespace-nowrap"
                        style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">CREATE</button>
                </div>
            </div>

            <main class="flex-1 px-4 sm:px-6 flex flex-col lg:flex-row gap-4 items-start pb-20">
                <!-- Left Column -->
                <div class="w-full lg:w-[368px] border border-[#0F11141A] rounded-[24px] flex flex-col">
                    <div class="px-6 py-[21px] border-b border-[#0F11141A]">
                        <h2 class="text-base font-bold text-[#0F1114] leading-[100%]">Photo</h2>
                    </div>
                    <div class="p-6 border-b border-[#0F11141A]">
                        <div class="w-full aspect-square border border-[#0F11141A] rounded-[12px] flex items-center justify-center"
                            style="background: linear-gradient(102.96deg, #FAFAFA 0.31%, rgba(250, 250, 250, 0) 99.69%);">
                            <span class="text-[16px] font-bold text-[#0F111466] uppercase leading-[100%]">Photo</span>
                        </div>
                    </div>

                    <div class="p-6">
                        <div
                            class="bg-[#FAFAFA] border-dashed border-[#0F11141A] rounded-[12px] overflow-hidden px-6 pt-5 pb-[25px]">
                            <p class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-1">
                                Unit Cover Photo</p>
                            <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%] mb-3">
                                Add a cover photo that best represents your property.</p>
                            <div class="flex items-center gap-[15px]">
                                <button
                                    class="py-[9px] px-[14px] bg-[#0F1114] flex items-center gap-2 text-primary rounded-[16px] text-[12px] font-bold uppercase leading-[100%] tracking-[-2%] whitespace-nowrap">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M15 22h3a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h3" />
                                        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                        <path d="M12 12v10" />
                                        <path d="m9 15 3-3 3 3" />
                                    </svg>
                                    CHOOSE FILE
                                </button>
                                <button
                                    class="text-[12px] font-bold text-[#004CE5] leading-[100%] tracking-[-2%]">Clear</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column -->
                <div class="flex-1 flex flex-col gap-4 w-full">
                    <div class="w-full border border-[#0F11141A] rounded-[24px] bg-white overflow-hidden">
                        <div class="px-6 py-[21px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%]">General Information</h2>
                        </div>
                        <div>
                            <!-- Row 1 -->
                            <div
                                class="pt-[22px] p-6 grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-[#0F11141A]">
                                <div>
                                    <label
                                        class="ml-1 text-[12px] font-bold text-[#0F1114] leading-[100%] uppercase tracking-[-2%] mb-[5px]">
                                        PROPERTY NAME</label>
                                    <input type="text" v-model="unitDetails.propertyName"
                                        placeholder="CALIFORNIA BUILDING"
                                        class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-[#0F1114] placeholder:text-[#0F111466] focus:outline-none" />
                                </div>
                                <div>
                                    <label
                                        class="ml-1 text-[12px] font-bold text-[#0F1114] leading-[100%] uppercase tracking-[-2%] mb-[5px]">
                                        UNIT #</label>
                                    <input type="number" v-model="unitDetails.unitNumber" placeholder="5"
                                        class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-[#0F1114] placeholder:text-[#0F111466] focus:outline-none" />
                                </div>
                                <div>
                                    <label
                                        class="ml-1 text-[12px] font-bold text-[#0F1114] leading-[100%] uppercase tracking-[-2%] mb-[5px]">UNIT
                                        TYPE</label>
                                    <div class="relative">
                                        <select v-model="unitDetails.unitType"
                                            class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold leading-[100%] tracking-[-2%] text-[#0F1114] appearance-none focus:outline-none bg-white">
                                            <option>Dropdown</option>
                                        </select>
                                        <svg class="absolute right-3 top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <!-- Row 2 -->
                            <div
                                class="pt-[22px] p-6 grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-[#0F11141A]">
                                <div>
                                    <label
                                        class="ml-1 text-[12px] font-bold text-[#0F1114] leading-[100%] uppercase tracking-[-2%] mb-[5px]">BEDS</label>
                                    <div class="relative">
                                        <select v-model="unitDetails.baths"
                                            class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold leading-[100%] tracking-[-2%] text-[#0F1114] appearance-none focus:outline-none bg-white">
                                            <option>Dropdown</option>
                                        </select>
                                        <svg class="absolute right-3 top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <label
                                        class="ml-1 text-[12px] font-bold text-[#0F1114] leading-[100%] uppercase tracking-[-2%] mb-[5px]">BATHS</label>
                                    <div class="relative">
                                        <select v-model="unitDetails.baths"
                                            class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold leading-[100%] tracking-[-2%] text-[#0F1114] appearance-none focus:outline-none bg-white">
                                            <option>Dropdown</option>
                                        </select>
                                        <svg class="absolute right-3 top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <label
                                        class="ml-1 text-[12px] font-bold text-[#0F1114] leading-[100%] uppercase tracking-[-2%] mb-[5px]">
                                        SIZE, SQ.FT</label>
                                    <input type="text" v-model="unitDetails.size" placeholder="0.00"
                                        class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-[#0F1114] placeholder:text-[#0F111466] focus:outline-none" />
                                </div>
                            </div>
                            <!-- Row 3 -->
                            <div class="pt-[22px] p-6 grid grid-cols-1 md:grid-cols-2 gap-4 ">
                                <div>
                                    <label
                                        class="ml-1 text-[12px] font-bold text-[#0F1114] leading-[100%] uppercase tracking-[-2%] mb-[5px]">
                                        RENT</label>
                                    <input type="text" v-model="unitDetails.rent" placeholder="0.00"
                                        class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-[#0F1114] placeholder:text-[#0F111466] focus:outline-none" />
                                </div>
                                <div>
                                    <label
                                        class="ml-1 text-[12px] font-bold text-[#0F1114] leading-[100%] uppercase tracking-[-2%] mb-[5px]">
                                        DEPOSIT</label>
                                    <input type="text" v-model="unitDetails.deposit" placeholder="0.00"
                                        class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-[#0F1114] placeholder:text-[#0F111466] focus:outline-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full border border-[#0F11141A] rounded-[24px] overflow-hidden">
                        <div class="px-6 py-[21px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%]">Parking</h2>
                        </div>

                        <div class="p-6 pt-[22px] border border-[#0F11141A]">
                            <h3
                                class="ml-1 text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">
                                SELECT PARKING TYPE</h3>
                            <div class="flex flex-wrap gap-2">
                                <label v-for="type in parkingTypes" :key="type"
                                    class="flex items-center gap-2 px-4 py-[9px] bg-[#0F111405] rounded-[80px] border border-[#0F11141A] cursor-pointer transition-all">
                                    <input type="checkbox" :value="type" v-model="selectedParkingType" class="hidden" />
                                    <div
                                        class="w-3 h-3 rounded-full border border-[#0F1114] flex items-center justify-center">
                                        <svg v-if="selectedParkingType.includes(type)" width="12" height="12"
                                            viewBox="0 0 24 24" fill="none" stroke="#0F1114" stroke-width="4"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <span
                                        class="text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-[#0F1114]">
                                        {{ type }}
                                    </span>
                                </label>
                            </div>
                        </div>

                        <div class="p-6">
                            <label
                                class="inline-flex items-center gap-[7px] pl-4 pr-[14px] py-[9px] rounded-[80px] border cursor-pointer transition-all w-fit mb-4"
                                :class="parkingFee ? 'border-[#004CE5] bg-[#004CE50D]' : 'bg-[#0F111405] border-[#0F11141A]'">
                                <input type="checkbox" v-model="parkingFee" class="hidden" />
                                <div class="w-3 h-3 border flex items-center justify-center rounded-[2px]"
                                    :class="parkingFee ? 'bg-[#004CE5] border-[#004CE5]' : 'border-[#0F1114]'">
                                    <svg v-if="parkingFee" width="8" height="8" viewBox="0 0 24 24" fill="none"
                                        stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <span class="text-[12px] font-bold uppercase leading-[100%] tracking-[-2%]"
                                    :class="parkingFee ? 'text-[#004CE5]' : 'text-[#0F1114]'">
                                    PARKING FEE
                                </span>
                            </label>
                            <div class="max-w-[439px]">
                                <input type="text" placeholder="amount" v-model="parkingAmount"
                                    class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-[#0F1114] placeholder:text-[#0F111466] focus:outline-none" />
                            </div>
                        </div>
                    </div>

                    <div class="w-full border border-[#0F11141A] rounded-[24px] overflow-hidden">
                        <div class="px-6 py-[21px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%]">Laundry</h2>
                        </div>
                        <div class="px-6 pt-[22px] pb-[25px]">
                            <h3
                                class="ml-1 text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">
                                SELECT LAUNDRY TYPE</h3>
                            <div class="flex flex-wrap gap-2">
                                <label v-for="laundry in laundryOptions" :key="laundry"
                                    class="flex items-center gap-2 px-4 py-[9px] bg-[#0F111405] rounded-[80px] border border-[#0F11141A] cursor-pointer transition-all">
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
                        </div>
                    </div>

                    <div class="w-full border border-[#0F11141A] rounded-[24px] overflow-hidden">
                        <div class="px-6 py-[21px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%]">Appliances</h2>
                        </div>
                        <div class="p-6 border-b border-[#0F11141A]">
                            <div class="flex flex-wrap gap-2">
                                <label v-for="appliance in applianceOptions" :key="appliance"
                                    class="flex items-center gap-2 px-4 py-[9px] bg-[#0F111405] rounded-[80px] border border-[#0F11141A] cursor-pointer transition-all">
                                    <input type="checkbox" :value="appliance" v-model="selectedAppliances"
                                        class="hidden" />
                                    <div class="w-3 h-3 border border-[#0F1114] flex items-center justify-center">
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
                        </div>
                        <div class="px-6 pt-[22px] py-[25px]">
                            <h3
                                class="ml-1 text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">
                                ADD APPLIANCE</h3>
                            <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                                <input v-model="customAppliance" type="text" placeholder="ENTER APPLIANCE"
                                    class="flex-1 h-[44px] px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                                <div class="flex items-center gap-[9px]">
                                    <button @click="handleAddCustomAppliance"
                                        class="px-[45px] py-[14px] rounded-[80px] bg-[#0F1114] text-white text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] hover:bg-[#0F1114E6] transition-colors">SAVE</button>
                                    <button @click="customAppliance = ''"
                                        class="px-10 py-[13px] rounded-[80px] border border-[#0F1114] text-[#0F1114] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] hover:bg-[#0F11140D] transition-colors">CLOSE</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full border border-[#0F11141A] rounded-[24px] overflow-hidden">
                        <div class="px-6 py-[21px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%]">Air conditioning</h2>
                        </div>
                        <div class="p-6 pt-[22px]">
                            <h3
                                class="ml-1 text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">
                                SELECT AIR CONDITIONING TYPE</h3>
                            <div class="flex flex-wrap gap-2">
                                <label v-for="ac in acOptions" :key="ac"
                                    class="flex items-center gap-2 px-4 py-[9px] bg-[#0F111405] rounded-[80px] border border-[#0F11141A] cursor-pointer transition-all">
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
                    </div>

                    <div class="w-full border border-[#0F11141A] rounded-[24px] overflow-hidden">
                        <div class="px-6 py-[21px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%]">Unit Features</h2>
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

                        <div class="px-6 pt-[22px] py-[25px]">
                            <h3
                                class="ml-1 text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">
                                ADD FEATURE</h3>
                            <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                                <input v-model="customFeature" type="text" placeholder="ENTER FEATURE"
                                    class="flex-1 h-[44px] px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                                <div class="flex items-center gap-[9px]">
                                    <button @click="handleAddCustomFeature"
                                        class="px-[45px] py-[14px] rounded-[80px] bg-[#0F1114] text-white text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] hover:bg-[#0F1114E6] transition-colors">SAVE</button>
                                    <button @click="customFeature = ''"
                                        class="px-10 py-[13px] rounded-[80px] border border-[#0F1114] text-[#0F1114] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] hover:bg-[#0F11140D] transition-colors">CLOSE</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full border border-[#0F11141A] rounded-[24px] overflow-hidden">
                        <div class="px-6 py-[21px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%]">Unit attachments</h2>
                        </div>
                        <div class="p-6">
                            <div
                                class="border border-dashed border-[#0F11141A] bg-[#FAFAFA] rounded-[12px] p-[17px] pb-[13px]">
                                <p
                                    class="text-[12px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%] mb-[11px]">
                                    Upload</p>
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
                                    Store documents</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full border border-[#0F11141A] rounded-[24px] overflow-hidden">
                        <div class="px-6 pt-[21px] pb-[20px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%] mb-[1px]">Unit details
                            </h2>
                        </div>
                        <div class="p-6">
                            <div class="border border-[#0F11141A] rounded-[12px] overflow-hidden">
                                <div
                                    class="px-5 py-[14px] flex flex-wrap items-center gap-[15px] border-b border-[#0F11141A] bg-[#FAFAFA]">
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
                                <textarea placeholder="Here you can add other unit details if necessary."
                                    class="block w-full h-[76px] px-4 py-[14px] text-[12px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%] outline-none resize-none placeholder:text-[#0F111466]"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="w-full border border-[#0F11141A] rounded-[24px] overflow-hidden">
                        <div class="px-6 py-[21px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%]">Photo Gallery</h2>
                        </div>

                        <div class="p-6">
                            <div
                                class="border border-dashed border-[#0F11141A] bg-[#FAFAFA] rounded-[12px] p-[17px] mb-4">
                                <p
                                    class="text-[12px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%] mb-[11px]">
                                    Add Unit Photos</p>
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
                            </div>

                            <div class="flex flex-wrap sm:flex-nowrap items-center gap-2">
                                <div class="w-full sm:w-[200px] h-[180px] sm:h-[120px] border border-[#0F11141A] rounded-[12px] flex items-center justify-center"
                                    style="background: linear-gradient(102.96deg, #FAFAFA 0.31%, rgba(250, 250, 250, 0) 99.69%);">
                                    <span
                                        class="text-[12px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">Photo</span>
                                </div>
                                <div class="w-full sm:w-[200px] h-[180px] sm:h-[120px] border border-[#0F11141A] rounded-[12px] flex items-center justify-center"
                                    style="background: linear-gradient(102.96deg, #FAFAFA 0.31%, rgba(250, 250, 250, 0) 99.69%);">
                                    <span
                                        class="text-[12px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">Photo</span>
                                </div>
                                <div class="w-full sm:w-[200px] h-[180px] sm:h-[120px] border border-[#0F11141A] rounded-[12px] flex items-center justify-center"
                                    style="background: linear-gradient(102.96deg, #FAFAFA 0.31%, rgba(250, 250, 250, 0) 99.69%);">
                                    <span
                                        class="text-[12px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">Photo</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full border border-[#0F11141A] rounded-[24px] overflow-hidden">
                        <div class="px-6 py-[21px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%]">Unit attachments</h2>
                        </div>

                        <div class="p-6 border border-[#0F11141A]">
                            <div
                                class="border border-dashed border-[#0F11141A] bg-[#FAFAFA] rounded-[12px] p-[17px] pb-[13px]">
                                <p
                                    class="text-[12px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%] mb-[11px]">
                                    Upload</p>
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
                                    Store documents</p>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    </div>
</template>
