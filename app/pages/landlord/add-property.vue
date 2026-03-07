<script setup>
import Navbar from '~/components/landlord/Navbar.vue';
import Sidebar from '~/components/landlord/Sidebar.vue';

definePageMeta({
    path: '/add-property',
})

const propertyType = ref('Multi Units')

const amenities = ref([
    'BUSINESS CENTER', 'CLUBHOUSE', 'BASKETBALL COURT', 'BBQ', 'ELEVATOR', 'GATED ENTRY',
    'FITNESS CENTER', 'HOT TUB', 'ON-SITE LAUNDRY', 'PET WASHING STATION', 'PLAYGROUND', 'TENNIS COURT',
    'THEATER ROOM', 'STORAGE UNITS', 'EV CHARGING STATIONS'
])

const features = ref([
    'ALARM', 'FURNISHED', 'RENOVATED', 'HARDWOOD FLOORS', 'FIREPLACE', 'FRESH PAINT', 'STORAGE', 'WALK-IN CLOSETS',
    'BALCONY, DECK, PATIO', 'INTERNET', 'FENCED YARD', 'TILE', 'CARPET', 'UNFURNISHED'
])

const petAllow = ref(false)
const parkingFee = ref(false)
const parkingAmount = ref('')

const parkingTypes = ref([
    'COVERED', 'DEDICATED SPOT', 'DRIVEWAY', 'GARAGE', 'ON-STREET', 'PRIVATE LOT', 'OTHER', 'NONE'
])
const selectedParkingType = ref('NONE')

const laundryOptions = ref(['IN-UNIT', 'ON-SITE', 'HOOK-UPS', 'OTHER', 'NONE'])
const selectedLaundry = ref([])

const applianceOptions = ref(['STOVE', 'OVEN', 'REFRIGERATOR', 'DISHWASHER'])
const selectedAppliances = ref([])

const acOptions = ref(['CENTRAL AIR', 'WINDOW UNIT', 'OTHER', 'NONE'])
const selectedAc = ref([])

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

const customAppliance = ref('')

const handleAddCustomAppliance = () => {
    if (customAppliance.value.trim()) {
        applianceOptions.value.push(customAppliance.value.toUpperCase())
        customAppliance.value = ''
    }
}

const units = ref([
    {
        number: '',
        type: 'Dropdown',
        size: '',
        beds: '0.00',
        baths: '0.00',
        rent: '0.00',
        deposit: '0.00'
    }
])

const addUnit = () => {
    units.value.push({
        number: '',
        type: 'Dropdown',
        size: '',
        beds: '0.00',
        baths: '0.00',
        rent: '0.00',
        deposit: '0.00'
    })
}

const cloneUnit = (index) => {
    units.value.splice(index + 1, 0, { ...units.value[index] })
}

const removeUnit = (index) => {
    if (units.value.length > 1) {
        units.value.splice(index, 1)
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
                    <NuxtLink to="/dashboard"
                        class="w-10 h-10 my-[2px] rounded-full flex items-center justify-center border border-[#0F11141A]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l14 0" />
                            <path d="M5 12l4 4" />
                            <path d="M5 12l4 -4" />
                        </svg>
                    </NuxtLink>
                    <div>
                        <h1 class="text-xl font-bold text-[#0F1114] leading-[100%] mb-1">Add Property</h1>
                        <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Create a new rental
                            listing for your portfolio.</p>
                    </div>
                </div>
                <div class="flex items-center gap-2 w-full sm:w-auto">
                    <button
                        class="h-10 px-6 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] flex-1 sm:flex-initial text-center justify-center">Save
                        Draft</button>
                    <button
                        class="h-10 px-6 rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] flex-1 sm:flex-initial text-center justify-center"
                        style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">Add
                        Property</button>
                </div>
            </div>

            <main class="flex-1 px-4 sm:px-6 flex flex-col lg:flex-row gap-[30px] items-start">

                <div class=" lg:max-w-[944px] bg-white overflow-hidden">

                    <div class="w-full border border-[#0F11141A] rounded-[24px] mb-4">
                        <h2
                            class="px-6 pt-[21px] pb-[20px] text-base font-bold text-[#0F1114] leading-[100%] border-b border-[#0F11141A]">
                            Property</h2>

                        <div
                            class="p-6 pt-[22px] grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px] border-b border-[#0F11141A]">
                            <div class="col-span-1">
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Property
                                    Name</label>
                                <input type="text" placeholder="PROPERTY NAME"
                                    class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                            </div>
                            <div class="col-span-1">
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Year
                                    Built</label>
                                <input type="text" placeholder="YEAR BUILT"
                                    class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                            </div>
                            <div class="col-span-2">
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Street
                                    address</label>
                                <input type="text" placeholder="STREET ADDRESS"
                                    class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                            </div>
                            <div class="col-span-1">
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">City</label>
                                <input type="text" placeholder="CITY"
                                    class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                            </div>
                            <div class="col-span-1">
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Zip
                                    Code</label>
                                <input type="text" placeholder="ZIP CODE"
                                    class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                            </div>
                        </div>

                        <div class="py-3 px-6 border-b border-[#0F11141A]">
                            <h2 class="text-[16px] text-[#0F1114] font-bold leading-[100%] mb-[1px]">Type of Property
                            </h2>
                            <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Create a new
                                rental
                                listing for your portfolio.</p>
                        </div>

                        <div class="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-[#0F11141A]">
                            <div @click="propertyType = 'Single Unit'"
                                class="rounded-[12px] py-[21px] px-6 flex items-start gap-4 bg-[#0F111405] cursor-pointer transition-all border"
                                :class="propertyType === 'Single Unit' ? 'border-[#0F1114]' : 'border-[#0F11141A] text-[#0F1114]'">
                                <div
                                    class="h-4 w-4 rounded-full border border-[#0F1114] shrink-0 flex items-center justify-center p-[2px]">
                                    <div v-if="propertyType === 'Single Unit'"
                                        class="w-full h-full bg-[#0F1114] rounded-full"></div>
                                </div>
                                <div class="flex flex-col">
                                    <p class="text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] mb-1">
                                        Single Unit</p>
                                    <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Single
                                        family, Condo, Townhome, Mobile Home</p>
                                </div>
                            </div>

                            <div @click="propertyType = 'Multi Units'"
                                class="rounded-[12px] py-[21px] px-6 flex items-start gap-4 bg-[#0F111405] cursor-pointer transition-all border"
                                :class="propertyType === 'Multi Units' ? 'border-[#0F1114]' : 'border-[#0F11141A]'">
                                <div
                                    class="h-4 w-4 rounded-full border border-[#0F1114] p-[2px] shrink-0 flex items-center justify-center">
                                    <div v-if="propertyType === 'Multi Units'"
                                        class="w-full h-full bg-[#0F1114] rounded-full"></div>
                                </div>
                                <div class="flex flex-col">
                                    <p class="text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] mb-1">
                                        Multi Units</p>
                                    <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">
                                        Apartment
                                        building, Office units, Storage units, Mobile home park, Garages, Rooms of a
                                        house
                                    </p>
                                </div>
                            </div>
                        </div>

                        <template v-if="propertyType === 'Multi Units'">
                            <div class="py-3 px-6 border-b border-[#0F11141A]">
                                <h2 class="text-[16px] text-[#0F1114] font-bold leading-[100%] mb-[1px]">Units
                                    Information
                                </h2>
                                <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Add units,
                                    clone a
                                    row, or remove</p>
                            </div>

                            <div class="p-6">
                                <div class="border border-[#0F11141A] rounded-[12px] overflow-hidden">
                                    <div class="overflow-x-auto">
                                        <table class="w-full border-collapse">
                                            <thead>
                                                <tr class="bg-[#FAFAFA] border-b border-[#0F11141A] h-11">
                                                    <th
                                                        class="pl-6 px-1 text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                                        Unit #</th>
                                                    <th
                                                        class="px-1 text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                                        Unit type</th>
                                                    <th
                                                        class="px-1 text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                                        Size sq.ft</th>
                                                    <th
                                                        class="px-1 text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                                        Beds</th>
                                                    <th
                                                        class="px-1 text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                                        Baths</th>
                                                    <th
                                                        class="px-1 text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                                        Rent</th>
                                                    <th
                                                        class="px-1 text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                                        Deposit</th>
                                                    <th
                                                        class="px-1 pr-[22px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap w-px">
                                                        Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(unit, index) in units" :key="index"
                                                    :class="index !== units.length - 1 ? 'border-b border-[#0F11141A]' : ''">
                                                    <td class="pl-5 px-1 py-[17px]">
                                                        <input v-model="unit.number" type="text" placeholder="UNIT#"
                                                            class="w-[120px] px-[17px] py-[9px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                                                    </td>
                                                    <td class="px-1 py-[17px]">
                                                        <div class="relative w-[110px]">
                                                            <select v-model="unit.type"
                                                                class="w-[120px] px-[17px] py-[10px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] tracking-[-2%] leading-[100%] outline-none appearance-none cursor-pointer">
                                                                <option>Dropdown</option>
                                                                <option>Apartment</option>
                                                                <option>Studio</option>
                                                                <option>Office</option>
                                                            </select>
                                                            <div
                                                                class="absolute right-[10px] top-1/2 -translate-y-1/2 pointer-events-none">
                                                                <svg width="12" height="12" viewBox="0 0 24 24"
                                                                    fill="none" stroke="#0F1114" stroke-width="2.5"
                                                                    stroke-linecap="round" stroke-linejoin="round">
                                                                    <path d="M6 9l6 6 6-6" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-1 py-[17px]">
                                                        <input v-model="unit.size" type="text" placeholder="size"
                                                            class="w-[80px] px-[17px] py-[9px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                                                    </td>
                                                    <td class="px-1 py-[17px]">
                                                        <input v-model="unit.beds" type="text" placeholder="0.00"
                                                            class="w-[64px] px-[17px] py-[9px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                                                    </td>
                                                    <td class="px-1 py-[17px]">
                                                        <input v-model="unit.baths" type="text" placeholder="0.00"
                                                            class="w-[64px] px-[17px] py-[9px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                                                    </td>
                                                    <td class="px-1 py-[17px]">
                                                        <input v-model="unit.rent" type="text" placeholder="0.00"
                                                            class="w-[80px] px-[17px] py-[9px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                                                    </td>
                                                    <td class="px-1 py-[17px]">
                                                        <input v-model="unit.deposit" type="text" placeholder="0.00"
                                                            class="w-[80px] px-[17px] py-[9px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                                                    </td>
                                                    <td class="px-1 pr-[22px] py-[17px]">
                                                        <div class="flex items-center justify-center gap-1">
                                                            <button @click="cloneUnit(index)"
                                                                class="w-8 h-8 rounded-full border border-[#0F11141A] flex items-center justify-center hover:bg-[#0F11141A] transition-colors">
                                                                <svg width="14" height="14" viewBox="0 0 24 24"
                                                                    fill="none" stroke="#0F1114" stroke-width="2"
                                                                    stroke-linecap="round" stroke-linejoin="round">
                                                                    <rect x="9" y="9" width="13" height="13" rx="2"
                                                                        ry="2">
                                                                    </rect>
                                                                    <path
                                                                        d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1">
                                                                    </path>
                                                                </svg>
                                                            </button>
                                                            <button @click="removeUnit(index)"
                                                                class="w-8 h-8 rounded-full bg-[#F2F2F2] flex items-center justify-center hover:bg-[#0F11141A] transition-colors">
                                                                <svg width="14" height="14" viewBox="0 0 24 24"
                                                                    fill="none" stroke="#0F1114" stroke-width="2"
                                                                    stroke-linecap="round" stroke-linejoin="round">
                                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="p-6 pb-[25px] border-t border-[#0F11141A]">
                                        <button @click="addUnit"
                                            class="px-4 py-[10px] rounded-[80px] border border-[#004CE5] text-[12px] font-extrabold text-[#004CE5] uppercase leading-[100%] tracking-[-2%] hover:bg-[#004CE60D] transition-colors">
                                            Add Unit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </template>

                        <template v-if="propertyType === 'Single Unit'">
                            <div class="py-3 px-6 border-b border-[#0F11141A]">
                                <h2 class="text-[16px] text-[#0F1114] font-bold leading-[100%] mb-[1px]">Single Unit
                                    Details
                                </h2>
                                <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Bedrooms,
                                    Bathrooms, Size, Rent & Deposit</p>
                            </div>

                            <div class="p-6 pt-[22px] grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px]">
                                <div class="col-span-1">
                                    <label
                                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Number
                                        of Beds</label>
                                    <div class="relative">
                                        <select
                                            class="w-full px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] appearance-none uppercase leading-[100%] tracking-[-2%] focus:outline-none">
                                            <option>Dropdown</option>
                                        </select>
                                        <svg class="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </div>
                                <div class="col-span-1">
                                    <label
                                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Number
                                        of Baths</label>
                                    <div class="relative">
                                        <select
                                            class="w-full px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] appearance-none uppercase leading-[100%] tracking-[-2%] focus:outline-none">
                                            <option>Dropdown</option>
                                        </select>
                                        <svg class="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </div>
                                <div class="col-span-1">
                                    <label
                                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">
                                        Size Sqft.</label>
                                    <input type="text" placeholder="Size Sqft."
                                        class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                                </div>
                                <div class="col-span-1">
                                    <label
                                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Rent</label>
                                    <input type="text" placeholder="0.00"
                                        class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                                </div>
                                <div class="col-span-1">
                                    <label
                                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Deposit</label>
                                    <input type="text" placeholder="0.00"
                                        class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                                </div>
                            </div>
                        </template>
                    </div>

                    <template v-if="propertyType === 'Single Unit'">
                        <div class="w-full border border-[#0F11141A] rounded-[24px] mb-4 overflow-hidden">
                            <div class="px-6 pt-[21px] pb-[20px] border-b border-[#0F11141A]">
                                <h2 class="text-base font-bold text-[#0F1114] leading-[100%]">Parking</h2>
                            </div>

                            <div class="p-6 pt-[22px] border-b border-[#0F11141A]">
                                <h3
                                    class="ml-1 text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">
                                    SELECT PARKING TYPE</h3>
                                <div class="flex flex-wrap gap-2">
                                    <label v-for="type in parkingTypes" :key="type"
                                        class="flex items-center gap-2 px-4 py-[9px] bg-[#0F111405] rounded-[80px] border border-[#0F11141A] cursor-pointer transition-all">
                                        <input type="radio" :value="type" v-model="selectedParkingType"
                                            class="hidden" />
                                        <div
                                            class="w-3 h-3 border border-[#0F1114] rounded-full flex items-center justify-center p-[2px]">
                                            <div v-if="selectedParkingType === type"
                                                class="w-full h-full bg-[#0F1114] rounded-full"></div>
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
                                    class="inline-flex items-center gap-2 px-4 py-[9px] bg-[#0F111405] rounded-[80px] border border-[#0F11141A] cursor-pointer transition-all mb-4"
                                    :class="parkingFee ? 'border-[#004CE6] bg-[#004CE60D]' : ''">
                                    <input type="checkbox" v-model="parkingFee" class="hidden" />
                                    <div class="w-3 h-3 border flex items-center justify-center rounded-[2px]"
                                        :class="parkingFee ? 'bg-[#004CE6] border-[#004CE6]' : 'border-[#0F1114]'">
                                        <svg v-if="parkingFee" width="8" height="8" viewBox="0 0 24 24" fill="none"
                                            stroke="white" stroke-width="4" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <span class="text-[12px] font-bold uppercase leading-[100%] tracking-[-2%]"
                                        :class="parkingFee ? 'text-[#004CE6]' : 'text-[#0F1114]'">
                                        PARKING FEE
                                    </span>
                                </label>

                                <div class="w-full max-w-[439px]">
                                    <input v-model="parkingAmount" type="text" placeholder="AMOUNT"
                                        class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                                </div>
                            </div>
                        </div>
                    </template>

                    <template v-if="propertyType === 'Single Unit'">
                        <div class="w-full border border-[#0F11141A] rounded-[24px] mb-4 overflow-hidden">
                            <div class="px-6 pt-[21px] pb-[20px] border-b border-[#0F11141A]">
                                <h2 class="text-base font-bold text-[#0F1114] leading-[100%]">Utilities & Appliances
                                </h2>
                            </div>

                            <!-- Laundry -->
                            <div class="p-6 pt-[22px] border-b border-[#0F11141A]">
                                <h3
                                    class="ml-1 text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">
                                    LAUNDRY</h3>
                                <div class="flex flex-wrap gap-2">
                                    <label v-for="option in laundryOptions" :key="option"
                                        class="flex items-center gap-2 px-4 py-[9px] bg-[#0F111405] rounded-[80px] border border-[#0F11141A] cursor-pointer transition-all">
                                        <input type="checkbox" :value="option" v-model="selectedLaundry"
                                            class="hidden" />
                                        <div class="w-3 h-3 border border-[#0F1114] flex items-center justify-center">
                                            <svg v-if="selectedLaundry.includes(option)" width="12" height="12"
                                                viewBox="0 0 24 24" fill="none" stroke="#0F1114" stroke-width="4"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span
                                            class="text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-[#0F1114]">
                                            {{ option }}
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <!-- Appliances -->
                            <div class="p-6 pt-[22px] border-b border-[#0F11141A]">
                                <h3
                                    class="ml-1 text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">
                                    APPLIANCES</h3>
                                <div class="flex flex-wrap gap-2 mb-4">
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

                                <h4
                                    class="ml-1 text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">
                                    ADD APPLIANCE</h4>
                                <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                                    <input v-model="customAppliance" type="text" placeholder="ENTER APPLIANCE"
                                        class="flex-1 px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                                    <div class="flex flex-col sm:flex-row items-center gap-[9px] w-full sm:w-auto">
                                        <button @click="handleAddCustomAppliance"
                                            class="w-full sm:w-auto py-[14px] sm:px-[69px] rounded-[80px] bg-[#0F1114] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] hover:bg-[#0F1114E6] transition-colors">SAVE</button>
                                        <button @click="customAppliance = ''"
                                            class="w-full sm:w-auto py-[13px] sm:px-16 rounded-[80px] border border-[#0F1114] text-[#0F1114] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] hover:bg-[#0F11140D] transition-colors">CLOSE</button>
                                    </div>
                                </div>
                            </div>

                            <!-- Air Conditioning -->
                            <div class="p-6 pt-[22px]">
                                <h3
                                    class="ml-1 text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">
                                    AIR CONDITIONING</h3>
                                <div class="flex flex-wrap gap-2">
                                    <label v-for="ac in acOptions" :key="ac"
                                        class="flex items-center gap-2 px-4 py-[9px] bg-[#0F111405] rounded-[80px] border border-[#0F11141A] cursor-pointer transition-all">
                                        <input type="checkbox" :value="ac" v-model="selectedAc" class="hidden" />
                                        <div class="w-3 h-3 border border-[#0F1114] flex items-center justify-center">
                                            <svg v-if="selectedAc.includes(ac)" width="12" height="12"
                                                viewBox="0 0 24 24" fill="none" stroke="#0F1114" stroke-width="4"
                                                stroke-linecap="round" stroke-linejoin="round">
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
                    </template>

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

                    <template v-if="propertyType === 'Single Unit'">
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
                    </template>

                    <template v-if="propertyType === 'Single Unit'">
                        <div class="w-full border border-[#0F11141A] rounded-[24px] mb-4 overflow-hidden">
                            <div class="px-6 pt-[21px] pb-[20px] border-b border-[#0F11141A]">
                                <h2 class="text-base font-bold text-[#0F1114] leading-[100%]">Pets</h2>
                            </div>

                            <div class="p-6 flex items-center justify-between">
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
                                        Pets allowed
                                    </span>
                                </label>
                            </div>
                        </div>
                    </template>

                    <div class="w-full border border-[#0F11141A] rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 pt-[21px] pb-[20px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%] mb-[1px]">Cover Photo</h2>
                            <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Add a cover
                                photo that best represents your property.</p>
                        </div>

                        <div class="p-6 border-b border-[#0F11141A]">
                            <div
                                class="border border-dashed border-[#0F11141A] bg-[#FAFAFA] rounded-[12px] p-[17px] pb-[13px] mb-4">
                                <p
                                    class="text-[12px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%] mb-[11px]">
                                    Property Cover Photo</p>
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

                            <div class="w-[246px] h-[120px] border border-[#0F11141A] rounded-[12px] flex items-center justify-center"
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

                            <div class="w-[246px] h-[120px] border border-[#0F11141A] rounded-[12px] flex items-center justify-center"
                                style="background: linear-gradient(102.96deg, #FAFAFA 0.31%, rgba(250, 250, 250, 0) 99.69%);">
                                <span
                                    class="text-[12px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">No
                                    cover selected</span>
                            </div>
                        </div>
                    </div>

                    <div class="w-full border border-[#0F11141A] rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 pt-[21px] pb-[20px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%]">Property attachments</h2>
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

                    <div class="w-full border border-[#0F11141A] rounded-[24px] mb-[50px] overflow-hidden">
                        <div class="px-6 pt-[21px] pb-[20px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%] mb-[1px]">Property Description
                            </h2>
                            <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Here you can
                                add other property details if necessary.</p>
                        </div>

                        <div class="p-6">
                            <div class="border border-[#0F11141A] rounded-[12px] overflow-hidden">
                                <div
                                    class="px-5 py-[13px] flex flex-wrap items-center gap-[15px] border-b border-[#0F11141A] bg-[#FAFAFA66]">
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

                                <textarea placeholder="Here you can add other property details if necessary."
                                    class="w-full h-[76px] px-4 py-[14px] text-[12px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%] outline-none resize-none placeholder:text-[#0F111466]"></textarea>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    </div>
</template>
