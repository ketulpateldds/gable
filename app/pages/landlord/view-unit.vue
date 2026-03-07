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
            <main class="flex-1 overflow-y-auto p-4 lg:p-10">
                <div class="mx-auto w-full">
                    <!-- Header -->
                    <div class="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
                        <div class="flex items-center gap-[18px]">
                            <NuxtLink to="/portfolio"
                                class="w-10 h-10 rounded-full border border-[#0F11141A] bg-white flex items-center justify-center hover:bg-[#0F111405] transition-colors shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M19 12H5M12 19l-7-7 7-7" />
                                </svg>
                            </NuxtLink>
                            <div>
                                <h1 class="text-[24px] font-bold text-[#0F1114] leading-[100%] mb-1">Unit #1</h1>
                                <p class="text-[14px] font-medium text-[#0F111499] leading-[100%] tracking-[-2%]">
                                    Review unit details, tenants, maintenance, and attachments.</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-3">
                            <div class="flex items-center gap-[10px] mr-3">
                                <button
                                    class="w-10 h-10 rounded-full border border-[#0F11141A] bg-white flex items-center justify-center hover:bg-[#0F111405] transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                    </svg>
                                </button>
                                <button
                                    class="w-10 h-10 rounded-full border border-[#0F11141A] bg-white flex items-center justify-center hover:bg-[#0F111405] transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                        <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                    </svg>
                                </button>
                                <button
                                    class="w-10 h-10 rounded-full border border-[#0F11141A] bg-white flex items-center justify-center hover:bg-[#0F111405] transition-colors">
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
                            <button
                                class="px-6 py-[13px] rounded-[12px] border border-[#0F11141A] bg-white text-[14px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] hover:bg-[#0F111405] transition-colors">
                                MOVE IN
                            </button>
                            <NuxtLink to="/add-property"
                                class="px-6 py-[13px] bg-[#004CE5] text-white rounded-[12px] text-[14px] font-bold uppercase leading-[100%] tracking-[-2%] hover:bg-[#003DC4] transition-colors shadow-[0px_4px_8px_-2px_#004CE580]">
                                LIST UNIT
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- Unit Overview -->
                    <div class="w-full bg-white border border-[#0F11141A] rounded-[24px] mb-[24px] overflow-hidden">
                        <div class="px-6 py-[20px] border-b border-[#0F11141A] flex items-center justify-between">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%]">Unit overview</h2>
                            <div class="flex items-center gap-[24px]">
                                <NuxtLink to="#"
                                    class="text-[12px] font-bold text-[#004CE5] uppercase leading-[100%] tracking-[-2%] flex items-center gap-2 hover:underline">
                                    TENANT
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </NuxtLink>
                                <NuxtLink to="#"
                                    class="text-[12px] font-bold text-[#004CE5] uppercase leading-[100%] tracking-[-2%] flex items-center gap-2 hover:underline">
                                    MAINTENANCES
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="border border-[#0F11141A] rounded-[16px] p-6 flex items-center gap-4">
                                <div
                                    class="w-12 h-12 bg-[#FAFAFA] rounded-[10px] flex items-center justify-center border border-[#0F11141A] shrink-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F111499"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                </div>
                                <div class="flex flex-col gap-1">
                                    <h3 class="text-[16px] font-bold text-[#0F1114] leading-[100%]">Profile • Service
                                        Providers</h3>
                                    <p class="text-[14px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">View
                                        assigned tenant and connected pros</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- General Information -->
                    <div class="w-full bg-white border border-[#0F11141A] rounded-[24px] mb-[24px] overflow-hidden">
                        <div class="px-6 py-[20px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%]">General information</h2>
                        </div>
                        <div class="p-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div
                                    class="border border-[#0F11141A] rounded-[16px] p-6 h-[106px] flex flex-col justify-between">
                                    <span
                                        class="text-[12px] font-medium text-[#0F111499] leading-[100%] tracking-[-2%]">Property
                                        name</span>
                                    <p class="text-[18px] font-bold text-[#0F1114] leading-[100%]">California Building
                                    </p>
                                </div>
                                <div
                                    class="border border-[#0F11141A] rounded-[16px] p-6 h-[106px] flex flex-col justify-between">
                                    <span
                                        class="text-[12px] font-medium text-[#0F111499] leading-[100%] tracking-[-2%]">Property
                                        address</span>
                                    <p class="text-[18px] font-bold text-[#0F1114] leading-[100%]">100 Main St · San
                                        Francisco, CA 94114</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Unit Information -->
                    <div class="w-full bg-white border border-[#0F11141A] rounded-[24px] mb-[24px] overflow-hidden">
                        <div class="px-6 py-[20px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%]">Unit information</h2>
                        </div>
                        <div class="p-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div
                                    class="border border-[#0F11141A] rounded-[16px] p-6 h-[106px] flex flex-col justify-between">
                                    <span
                                        class="text-[12px] font-bold text-[#0F111499] uppercase leading-[100%] tracking-[-2%]">TYPE</span>
                                    <div>
                                        <p class="text-[18px] font-bold text-[#0F1114] leading-[100%]">Apartment</p>
                                        <p
                                            class="text-[12px] font-medium text-[#0F111499] leading-[100%] tracking-[-2%] mt-1">
                                            Unit category</p>
                                    </div>
                                </div>
                                <div
                                    class="border border-[#0F11141A] rounded-[16px] p-6 h-[106px] flex flex-col justify-between">
                                    <span
                                        class="text-[12px] font-bold text-[#0F111499] uppercase leading-[100%] tracking-[-2%]">BEDS
                                        • BATHS • SIZE</span>
                                    <p class="text-[18px] font-bold text-[#0F1114] leading-[100%]">1 • 1 • 700 sq.ft</p>
                                </div>
                                <div
                                    class="border border-[#0F11141A] rounded-[16px] p-6 h-[106px] flex flex-col justify-between">
                                    <span
                                        class="text-[12px] font-medium text-[#0F111499] leading-[100%] tracking-[-2%]">Rent</span>
                                    <p class="text-[18px] font-bold text-[#0F1114] leading-[100%]">$2,500</p>
                                </div>
                                <div
                                    class="border border-[#0F11141A] rounded-[16px] p-6 h-[106px] flex flex-col justify-between">
                                    <span
                                        class="text-[12px] font-medium text-[#0F111499] leading-[100%] tracking-[-2%]">Deposit</span>
                                    <p class="text-[18px] font-bold text-[#0F1114] leading-[100%]">0.00</p>
                                </div>
                            </div>

                            <div class="mt-8">
                                <p
                                    class="text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-4">
                                    PROPERTY FEATURES</p>
                                <div class="flex flex-wrap gap-2">
                                    <div v-for="feature in features" :key="feature"
                                        class="px-4 py-[9px] border border-[#0F11141A] rounded-[80px] text-[12px] font-bold text-[#0F1114] tracking-[-2%] leading-[100%] bg-white">
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
                                <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">No
                                    description added</p>
                            </div>
                        </div>
                    </div>

                    <!-- Unit attachments -->
                    <div class="w-full bg-white border border-[#0F11141A] rounded-[24px] mb-[100px] overflow-hidden">
                        <div class="px-6 py-[20px] border-b border-[#0F11141A]">
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%]">Unit attachments</h2>
                        </div>
                        <div class="p-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div
                                    class="border border-[#0F11141A] rounded-[16px] p-5 flex items-center justify-between">
                                    <div class="flex flex-col gap-1">
                                        <p class="text-[14px] font-bold text-[#0F1114] leading-[100%]">
                                            Lease_Addendum.pdf</p>
                                        <p
                                            class="text-[12px] font-medium text-[#0F111499] leading-[100%] uppercase tracking-[-2%]">
                                            PDF • 180 KB</p>
                                    </div>
                                    <button
                                        class="w-10 h-10 rounded-full border border-[#0F11141A] flex items-center justify-center hover:bg-[#0F111405] transition-colors shrink-0">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                            <polyline points="7 10 12 15 17 10" />
                                            <line x1="12" y1="15" x2="12" y2="3" />
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    class="border border-[#0F11141A] rounded-[16px] p-5 flex items-center justify-between">
                                    <div class="flex flex-col gap-1">
                                        <p class="text-[14px] font-bold text-[#0F1114] leading-[100%]">
                                            MoveIn_Checklist.docx</p>
                                        <p
                                            class="text-[12px] font-medium text-[#0F111499] leading-[100%] uppercase tracking-[-2%]">
                                            DOCX • 95 KB</p>
                                    </div>
                                    <button
                                        class="w-10 h-10 rounded-full border border-[#0F11141A] flex items-center justify-center hover:bg-[#0F111405] transition-colors shrink-0">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
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
