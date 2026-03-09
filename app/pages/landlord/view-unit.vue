<script setup>
import Navbar from '~/components/landlord/Navbar.vue';
import Sidebar from '~/components/landlord/Sidebar.vue';

definePageMeta({
    path: '/view-unit',
})

const features = ref([
    'ALARM', 'FURNISHED', 'RENOVATED', 'HARDWOOD FLOORS', 'FIREPLACE', 'WALK-IN CLOSETS', 'BALCONY', 'INTERNET'
])
</script>

<template>
    <div class="min-h-screen bg-primary flex">
        <Sidebar />
        <div class="flex-1 flex flex-col min-w-0 lg:pl-[256px]">
            <Navbar />
            <main class="flex-1 overflow-y-auto px-6 pt-[19px] pb-20">
                <div class="mx-auto w-full">
                    <div class="flex flex-col md:flex-row md:items-center justify-between mb-5 gap-4">
                        <div class="flex items-center gap-4">
                            <NuxtLink to="/portfolio"
                                class="w-10 h-10 rounded-full border border-[#0F11141A] flex items-center justify-center transition-colors shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M19 12H5M12 19l-7-7 7-7" />
                                </svg>
                            </NuxtLink>
                            <div>
                                <h1 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-1">Unit #1</h1>
                                <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">
                                    Review unit details, tenants, maintenance, and attachments.</p>
                            </div>
                        </div>

                        <div class="flex items-start sm:items-center flex-col sm:flex-row gap-4">
                            <div class="flex items-center gap-2">
                                <button
                                    class="w-10 h-10 rounded-full border border-[#0F11141A] flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M16 8V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4" />
                                        <rect x="8" y="8" width="14" height="14" rx="2" />
                                        <path d="M4 15h13" />
                                        <path d="M13 11l4 4-4 4" />
                                    </svg>
                                </button>
                                <button
                                    class="w-10 h-10 rounded-full border border-[#0F11141A] flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="#0F1114" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon icon-tabler icons-tabler-outline icon-tabler-pencil">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                        <path d="M13.5 6.5l4 4" />
                                    </svg>
                                </button>
                                <button
                                    class="w-10 h-10 rounded-full border border-[#0F11141A] flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="3 6 5 6 21 6" />
                                        <path
                                            d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                        <line x1="10" y1="11" x2="10" y2="17" />
                                        <line x1="14" y1="11" x2="14" y2="17" />
                                    </svg>
                                </button>
                            </div>

                            <div
                                class="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
                                <button
                                    class="px-5 py-[13px] rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] whitespace-nowrap shrink-0">
                                    MOVE IN
                                </button>
                                <button to="/add-property"
                                    class="px-5 py-[14px] text-primary rounded-[80px] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] whitespace-nowrap shrink-0"
                                    style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                                    LIST UNIT
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="w-full bg-white border border-[#0F11141A] rounded-[24px] mb-4 overflow-hidden">
                        <div
                            class="px-6 py-[21px] border-b border-[#0F11141A] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%]">Unit overview</h2>

                            <div class="flex items-center gap-5">
                                <NuxtLink to="#"
                                    class="text-[12px] font-extrabold text-[#004CE5] uppercase leading-[100%] tracking-[-2%] flex items-center gap-[5px]">
                                    TENANT
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M5 12l14 0" />
                                        <path d="M15 16l4 -4" />
                                        <path d="M15 8l4 4" />
                                    </svg>
                                </NuxtLink>
                                <NuxtLink to="#"
                                    class="text-[12px] font-extrabold text-[#004CE5] uppercase leading-[100%] tracking-[-2%] flex items-center gap-[5px]">
                                    MAINTENANCES
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M5 12l14 0" />
                                        <path d="M15 16l4 -4" />
                                        <path d="M15 8l4 4" />
                                    </svg>
                                </NuxtLink>
                            </div>
                        </div>

                        <div class="p-6 pb-[25px]">
                            <div
                                class="border border-[#0F11141A] rounded-[12px] px-[17px] py-4 flex items-center gap-3">
                                <div class="rounded-[4px] p-2 flex items-center justify-center border border-[#0F11141A] shrink-0"
                                    style="background: linear-gradient(102.96deg, #FAFAFA 0.31%, rgba(250, 250, 250, 0) 99.69%);">
                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0F111499"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                </div>
                                <div class="flex flex-col gap-[5px] min-w-0">
                                    <h3 class="text-[16px] font-bold text-[#0F1114] leading-[100%]">Profile •
                                        Service Providers</h3>
                                    <p class="text-[14px] font-medium text-[#0F111499] leading-4">View
                                        assigned tenant and connected pros</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full border border-[#0F11141A] rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 py-[21px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%]">General information</h2>
                        </div>

                        <div class="p-6 pb-[26px]">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div
                                    class="border border-[#0F11141A] rounded-[12px] px-[17px] pb-[14px] pt-[15px] flex flex-col gap-[5px]">
                                    <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%]">
                                        Property name</p>
                                    <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%]">
                                        California Building</p>
                                </div>
                                <div
                                    class="border border-[#0F11141A] rounded-[12px] px-[17px] pb-[14px] pt-[15px] flex flex-col gap-[5px]">
                                    <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%]">
                                        Property address</p>
                                    <p
                                        class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%] break-words">
                                        100 Main St · San Francisco, CA 94114</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full bg-white border border-[#0F11141A] rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 py-[21px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%]">Unit information</h2>
                        </div>
                        <div class="p-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[14px]">
                                <div class="border border-[#0F11141A] rounded-[12px] px-[17px] py-[15px] flex flex-col">
                                    <span
                                        class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-1">TYPE</span>
                                    <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%] mb-[6px]">
                                        Apartment</p>
                                    <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%]">
                                        Unit category</p>
                                </div>
                                <div class="border border-[#0F11141A] rounded-[12px] px-[17px] py-[15px] flex flex-col">
                                    <span
                                        class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-1">Beds
                                        • Baths • Size</span>
                                    <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%] mb-[6px]">
                                        1 • 1 • 700 sq.ft</p>
                                </div>
                                <div
                                    class="border border-[#0F11141A] rounded-[12px] px-[17px] pt-[15px] pb-[14px] flex flex-col">
                                    <span
                                        class="text-[12px] font-semibold text-[#0F111499] leading-[100%] mb-[5px]">RENT</span>
                                    <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%]">
                                        $2,500</p>
                                </div>
                                <div
                                    class="border border-[#0F11141A] rounded-[12px] px-[17px] pt-[15px] pb-[14px] flex flex-col">
                                    <span
                                        class="text-[12px] font-semibold text-[#0F111499] leading-[100%] mb-[5px]">Deposit</span>
                                    <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%]">
                                        0.00</p>
                                </div>
                            </div>

                            <div>
                                <p
                                    class="text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px] ml-1">
                                    PROPERTY FEATURES</p>
                                <div class="flex flex-wrap gap-2 w-full">
                                    <div v-for="feature in features" :key="feature"
                                        class="pl-4 pr-[15px] py-[9px] border border-[#0F11141A] rounded-[80px] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] whitespace-nowrap">
                                        {{ feature }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full border border-[#0F11141A] rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 pt-[21px] pb-[20px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%]">Unit Details</h2>
                        </div>
                        <div class="p-6">
                            <div
                                class="border border-dashed py-[22px] px-6 border-[#0F11141A] rounded-[12px] p-10 flex items-center justify-start bg-[#FAFAFA]">
                                <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">
                                    No description added</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full border border-[#0F11141A] rounded-[24px] overflow-hidden">
                        <div class="px-6 py-[21px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%]">Unit attachments</h2>
                        </div>

                        <div class="p-6 pb-[26px]">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div
                                    class="border border-[#0F11141A] rounded-[12px] px-[17px] pt-[14px] pb-[15px] flex items-center justify-between gap-3">
                                    <div class="flex flex-col gap-[5px] min-w-0">
                                        <p
                                            class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%] truncate">
                                            Lease_Addendum.pdf</p>
                                        <p
                                            class="text-[12px] font-semibold text-[#0F111499] leading-[100%] whitespace-nowrap">
                                            PDF • 180 KB</p>
                                    </div>
                                    <button
                                        class="w-8 h-8 rounded-full border border-[#0F11141A] flex items-center justify-center transition-colors shrink-0">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                            <polyline points="7 10 12 15 17 10" />
                                            <line x1="12" y1="15" x2="12" y2="3" />
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    class="border border-[#0F11141A] rounded-[12px] px-[17px] pt-[14px] pb-[15px] flex items-center justify-between gap-3">
                                    <div class="flex flex-col gap-[5px] min-w-0">
                                        <p
                                            class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%] truncate">
                                            MoveIn_Checklist.docx</p>
                                        <p
                                            class="text-[12px] font-semibold text-[#0F111499] leading-[100%] whitespace-nowrap">
                                            DOCX • 95 KB</p>
                                    </div>
                                    <button
                                        class="w-8 h-8 rounded-full border border-[#0F11141A] flex items-center justify-center transition-colors shrink-0">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                            <polyline points="7 10 12 15 17 10" />
                                            <line x1="12" y1="15" x2="12" y2="3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    </div>
</template>
