<script setup>
import Navbar from '~/components/landlord/Navbar.vue';
import Sidebar from '~/components/landlord/Sidebar.vue';

definePageMeta({
    path: '/add-property-multi',
})

const propertyType = ref('Multi Units')

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
                                    class="h-4 w-4 rounded-full border border-[#0F1114] shrink-0 flex items-center justify-center">
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

                        <div class="py-3 px-6 border-b border-[#0F11141A]">
                            <h2 class="text-[16px] text-[#0F1114] font-bold leading-[100%] mb-[1px]">Units Information
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
                                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                                                                stroke="#0F1114" stroke-width="2.5"
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
                                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                                                stroke="#0F1114" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round">
                                                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2">
                                                                </rect>
                                                                <path
                                                                    d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1">
                                                                </path>
                                                            </svg>
                                                        </button>
                                                        <button @click="removeUnit(index)"
                                                            class="w-8 h-8 rounded-full bg-[#F2F2F2] flex items-center justify-center hover:bg-[#0F11141A] transition-colors">
                                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                                                stroke="#0F1114" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round">
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
                    </div>

                    <div>
                    </div>

                </div>
            </main>
        </div>
    </div>
</template>
