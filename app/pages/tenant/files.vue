<script setup>
import Navbar from '@/components/landlord/Navbar.vue'
import Sidebar from '~/components/tenant/Sidebar.vue'

const activeTab = ref('all')
const searchQuery = ref('')

const tabs = [
    { key: 'all', label: 'ALL' },
    { key: 'images', label: 'Images' },
    { key: 'documents', label: 'Documents' },
]

const documents = [
    {
        id: 1,
        filename: 'Kitchen.jpg',
        type: 'Image',
        svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#004CE5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect> <circle cx="8.5" cy="8.5" r="1.5"></circle> <polyline points="21 15 16 10 5 21"></polyline> </svg > '
    },
    {
        id: 2,
        filename: 'Lease.pdf',
        type: 'Document',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#004CE5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" /></svg>'
    },
    {
        id: 3,
        filename: 'Bathroom.png',
        type: 'Image',
        svg: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#004CE5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect> <circle cx="8.5" cy="8.5" r="1.5"></circle> <polyline points="21 15 16 10 5 21"></polyline> </svg > '
    },
]
</script>

<template>
    <div class="relative flex min-h-screen bg-primary font-sans overflow-x-hidden">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-6 py-[19px]">

                <h1 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[19px]">Files</h1>

                <div class="border border-[#0F11141A] rounded-[24px] overflow-hidden mb-6">

                    <div class="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div class="flex flex-wrap items-center gap-1">
                            <button v-for="tab in tabs" :key="tab.key" @click="activeTab = tab.key"
                                class="h-8 px-4 rounded-[80px] text-[12px] uppercase leading-[100%] tracking-[-2%] transition-all whitespace-nowrap"
                                :class="activeTab === tab.key
                                    ? 'text-primary bg-[#0F1114] font-bold'
                                    : 'text-[#0F1114] border border-[#0F11141A] font-semibold'">
                                {{ tab.label }}
                            </button>
                        </div>

                        <div class="relative w-full sm:w-auto">
                            <div
                                class="absolute inset-y-0 left-2 top-2 h-6 w-6 px-[5px] flex items-center pointer-events-none">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F111466"
                                    stroke-width="2">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.35-4.35" />
                                </svg>
                            </div>
                            <input v-model="searchQuery" type="text" placeholder="Search: name, property, tag..."
                                class="h-10 w-full sm:w-[440px] border border-[#0F11141A] rounded-[80px] pl-[38px] pr-3 text-[12px] font-semibold leading-[100%] tracking-[-2%] placeholder:text-[#0F111466] focus:outline-none" />
                        </div>
                    </div>

                    <div class="w-full overflow-x-auto scrollbar-hide">
                        <table class="w-full min-w-[1000px]">
                            <thead>
                                <tr class="bg-[#FAFAFA] border-y border-[#0F11141A] h-11">
                                    <th
                                        class="pt-[14px] pb-[13px] pl-6 text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Name</th>
                                    <th
                                        class="pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        File Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="document in documents" :key="document.id"
                                    class="border-b border-[#0F11141A] cursor-pointer last:border-0">

                                    <td class="pl-6 py-4">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 rounded-[8px] p-2 bg-[#F2F6FF] border border-[#004CE51A] flex items-center justify-center"
                                                v-html="document.svg">
                                            </div>
                                            <div>
                                                <span
                                                    class="text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                                    {{ document.filename }}</span>
                                            </div>
                                        </div>
                                    </td>

                                    <td class="pt-6 pb-[23px]">
                                        <span
                                            class="text-[14px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">
                                            {{ document.type }}</span>
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
