<script setup>
import Navbar from '@/components/landlord/Navbar.vue'
import Sidebar from '~/components/tenant/Sidebar.vue';

const selectedBeds = ref('ANY');
const selectedBaths = ref('ANY');
</script>

<template>
    <div class="flex min-h-screen bg-primary font-sans overflow-x-hidden">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-6 py-[19px] flex flex-col">

                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                    <div>
                        <h1 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[4px]">Applications</h1>
                        <p class="text-[12px] text-[#0F111499] font-medium leading-4 tracking-[-2%]">Looking for a
                            place? Start right here! All search results are tailored to fit your Renter Profile.</p>
                    </div>
                    <div class="flex items-center gap-2 flex-wrap">
                        <button
                            class="py-[13px] px-5 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] hover:bg-slate-50 transition-colors whitespace-nowrap">
                            Public renter profile
                        </button>
                        <button
                            class="py-[14px] px-5 rounded-[80px] text-[12px] font-extrabold text-white uppercase leading-[100%] tracking-[-2%] whitespace-nowrap"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                            Find A place
                        </button>
                    </div>
                </div>

                <div class="flex flex-col xl:flex-row gap-4">
                    <div class="flex flex-col w-full xl:w-[656px] h-fit border border-[#0F11141A] rounded-[24px] p-4">
                        <div
                            class="bg-[#F2F5FA] border border-dashed border-[#004CE580] rounded-[12px] text-center py-[19px]">
                            <h1 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[4px]">No applications
                            </h1>
                            <p class="text-[12px] text-[#0F111499] font-medium leading-4 tracking-[-2%]">There are
                                no applications on this page.
                            </p>
                        </div>
                    </div>

                    <div
                        class="flex flex-col w-full xl:w-[464px] border border-[#0F11141A] rounded-[24px] pt-5 pb-[26px] px-[25px]">
                        <h2 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[15px]">Public
                            renter profile</h2>

                        <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[5px]">Search
                            Preferences</h2>

                        <p class="text-[12px] text-[#0F111499] font-medium leading-4 tracking-[-2%] mb-3">You
                            will receive daily e-mail updates about new listings matching these criteria, whenever
                            your status for 'Looking for a place' is active.</p>

                        <div class="flex items-center justify-start mb-5">
                            <div
                                class="flex items-center gap-2 bg-[#0F111405] border border-[#0F11141A] rounded-[80px] px-4 py-[9px]">
                                <div class="w-3 h-3 border border-[#0F1114]"></div>
                                <span
                                    class="text-[12px] font-semibold text-[#0F1114] leading-[100%] uppercase tracking-[-2%]">Looking
                                    for a place</span>
                            </div>
                        </div>

                        <p class="text-[12px] text-[#0F111499] font-bold leading-4 tracking-[-2%] mb-[18px]">
                            Specify the following details to find the perfect rental for you.</p>

                        <div class="grid grid-cols-1 gap-[14px] mb-[14px]">
                            <div class="col-span-1">
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Your
                                    Public Renter Profile link url
                                </label>
                                <input type="text" placeholder="https://gable.example/renter/tenant-user"
                                    class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                            </div>

                            <div class="col-span-1">
                                <div class="grid grid-cols-2 gap-8">
                                    <div>
                                        <label
                                            class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Beds</label>
                                        <div class="flex flex-wrap gap-[6px]">
                                            <button v-for="bed in ['ANY', 'STUDIO', '1', '2', '3', '4', '5+']"
                                                :key="bed" @click="selectedBeds = bed" :class="selectedBeds === bed
                                                    ? 'border-[#004CE5] text-[#004CE5] bg-[#F2F6FF]'
                                                    : 'border-[#0F11141A] text-[#0F1114] bg-[#0F111405]'"
                                                class="px-4 py-[9px] rounded-[80px] border text-[12px] font-bold uppercase leading-[100%] tracking-[-2%] cursor-pointer transition-colors">
                                                {{ bed }}
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Baths</label>
                                        <div class="flex flex-wrap gap-[6px]">
                                            <button v-for="bath in ['ANY', '1', '2', '3', '4', '5+']" :key="bath"
                                                @click="selectedBaths = bath" :class="selectedBaths === bath
                                                    ? 'border-[#004CE5] text-[#004CE5] bg-[#F2F6FF]'
                                                    : 'border-[#0F11141A] text-[#0F1114] bg-[#0F111405]'"
                                                class="px-4 py-[9px] rounded-[80px] border text-[12px] font-bold uppercase leading-[100%] tracking-[-2%] cursor-pointer transition-colors">
                                                {{ bath }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-span-1">
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Min
                                    per month
                                </label>
                                <input type="text" placeholder="$ amount"
                                    class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                            </div>

                            <div class="col-span-1">
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Rental
                                    type</label>
                                <div class="relative">
                                    <select
                                        class="w-full px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] appearance-none uppercase leading-[100%] tracking-[-2%] focus:outline-none">
                                        <option>Choose type</option>
                                    </select>
                                    <svg class="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>

                            <div class="col-span-1">
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Size,
                                    sq.ft
                                </label>
                                <input type="text" placeholder="e.g., 900"
                                    class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                            </div>
                        </div>

                        <div class="flex items-center justify-start mb-6">
                            <div
                                class="flex items-center gap-2 bg-[#0F111405] border border-[#0F11141A] rounded-[80px] px-4 py-[9px]">
                                <div class="w-3 h-3 border border-[#0F1114]"></div>
                                <span
                                    class="text-[12px] font-semibold text-[#0F1114] leading-[100%] uppercase tracking-[-2%]">pets
                                    allowed</span>
                            </div>
                        </div>

                        <div class="flex flex-col-reverse sm:flex-row sm:items-center justify-end">
                            <button @click="handleSave"
                                class="py-[13px] px-6 rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] cursor-pointer w-full sm:w-auto"
                                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                                UPDATE
                            </button>
                        </div>

                    </div>
                </div>
            </main>
        </div>

    </div>
</template>
