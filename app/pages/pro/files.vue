<script setup lang="ts">
import Navbar from '@/components/landlord/Navbar.vue'
import Sidebar from '~/components/pro/Sidebar.vue';

</script>

<template>
    <div class="relative flex min-h-screen bg-primary font-sans overflow-x-hidden">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-4 sm:px-6 pt-[19px] pb-10 flex flex-col">

                <h1 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[4px]">Files</h1>
                <p class="text-[12px] text-[#0F111499] font-medium leading-4 tracking-[-2%] mb-5">Store photos,
                    documents, and property files in one place.</p>

                <!-- File Type Cards -->
                <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4">
                    <div class="relative border border-[#0F11141A] rounded-[12px] px-[17px] pt-[12px] pb-[14px]">
                        <p class="absolute top-3 right-[17px] text-[16px] font-bold text-[#0F1114] leading-[100%]">
                            0
                        </p>

                        <h1 class="text-[16px] font-bold text-[#0F1114] uppercase leading-[100%] mb-[9px]">
                            All files</h1>
                        <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%]">
                            Across 4 invoices currently due or overdue.</p>
                    </div>

                    <div class="relative border border-[#0F11141A] rounded-[12px] px-[17px] pt-[12px] pb-[14px]">
                        <p class="absolute top-3 right-[17px] text-[16px] font-bold text-[#0F1114] leading-[100%]">
                            0
                        </p>

                        <h1 class="text-[16px] font-bold text-[#0F1114] uppercase leading-[100%] mb-[9px]">
                            Images</h1>
                        <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%]">
                            Photos & screenshots</p>
                    </div>

                    <div class="relative border border-[#0F11141A] rounded-[12px] px-[17px] pt-[12px] pb-[14px]">
                        <p class="absolute top-3 right-[17px] text-[16px] font-bold text-[#0F1114] leading-[100%]">
                            0
                        </p>

                        <h1 class="text-[16px] font-bold text-[#0F1114] uppercase leading-[100%] mb-[9px]">
                            Documents</h1>
                        <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%]">
                            PDFs, invoices, agreements</p>
                    </div>
                </div>

                <!-- File Table -->
                <div class="border border-[#0F11141A] rounded-[24px]">
                    <div class="flex flex-col md:flex-row md:items-center justify-between p-4 sm:p-6 gap-4">
                        <div class="relative w-full md:w-[440px]">
                            <svg class="absolute left-2 top-1/2 -translate-y-1/2 text-[#0F111466]"
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <input type="text" placeholder="Search: name, property, tag..."
                                class="w-full py-3 pl-[38px] pr-4 rounded-[80px] border border-[#0F11141A] font-semibold text-[12px] placeholder:text-[#0F111466] leading-[100%] tracking-[-2%] text-[#0F1114] focus:outline-none" />
                        </div>
                        <button
                            class="pl-5 pr-[15px] py-[9px] rounded-[80px] border border-[#0F11141A] text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] flex items-center gap-[14px] whitespace-nowrap shrink-0">
                            File Type
                            <div class="h-5 w-5 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="text-[#0F1114]">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </button>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="w-full min-w-[900px]">
                            <thead>
                                <tr class="h-11 border-y border-[#0F11141A] bg-[#FAFAFA]">
                                    <th
                                        class="pl-6 pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Name</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        File Type</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="">
                                    <td colspan="3"
                                        class="pt-[24px] pb-[23px] text-center text-[14px] font-bold text-[#0F111499] leading-[100%]">
                                        No files yet. Upload documents or images to get started.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </main>

        </div>
    </div>
</template>
