<script setup>
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'

const activeTab = ref('all')
const searchQuery = ref('')

const tabs = [
    { key: 'all', label: 'ALL' },
    { key: 'images', label: 'Images' },
    { key: 'documents', label: 'Documents' },
    { key: 'receipts', label: 'Receipts' },
    { key: 'leases', label: 'Leases' },
]

const documents = [
    {
        id: 1,
        filename: 'Lease - Unit 4.pdf',
        tag: ' lease, 2026',
        property: '123 Oak St – Unit 4',
        date: 'Jan 20, 2026',
        type: 'Paystub',
        size: '1.2 MB',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#004CE5" stroke- width="2" stroke - linecap="round" stroke - linejoin="round" class= "icon icon-tabler icons-tabler-outline icon-tabler-folder" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" /></svg > '
    },
    {
        id: 2,
        filename: 'Plumbing Invoice Jan.pdf',
        tag: 'invoice, plumbing',
        property: '55 Crystall Falls Dr',
        date: 'Mar 1, 2026',
        type: 'Paystub',
        size: '1.2 MB',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#004CE5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-receipt"><g transform="rotate(180 12 12)"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" /> </g> </svg>'
    },
    {
        id: 3,
        filename: 'Move-in Photos.zip',
        tag: 'move-in, photos',
        property: '123 Oak St – Unit 4',
        date: 'Feb 15, 2026',
        type: 'Paystub',
        size: '1.2 MB',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#004CE5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-photo"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01" /><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12" /><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" /><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" /></svg>'
    },
    {
        id: 4,
        filename: 'Insurance COI.pdf',
        tag: 'insurance',
        property: 'Portfolio',
        date: 'Feb 5, 2026',
        type: 'Paystub',
        size: '1.2 MB',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#004CE5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-description"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" /><path d="M9 17h6" /><path d="M9 13h6" /></svg>'
    },
]

const isUploadModalOpen = ref(false);
const isFileDetailsModalOpen = ref(false);

const fileDetailsForm = ref({
    selectedFile: 'Lease - Unit 4.pdf',
    fileType: 'DOCUMENT',
    property: '123 OAK ST · UNIT 4',
    tags: 'LEASE, 2026',
    description: '',
    visibility: 'TEAM',
});
</script>

<template>
    <div class="relative flex min-h-screen bg-primary font-sans overflow-x-hidden">
        <Sidebar :active-tab="activeTab" />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-6 pt-[19px] pb-10 flex flex-col">

                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                    <div>
                        <h1 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[4px]">Documents</h1>
                        <p class="text-[12px] text-[#0F111499] font-medium leading-4 tracking-[-2%]">Store property
                            documents, photos, leases, and receipts.</p>
                    </div>
                    <div class="flex items-center gap-2 flex-wrap">
                        <button @click="isFileDetailsModalOpen = true"
                            class="h-10 pl-[18px] pr-[19px] rounded-[80px] border border-[#0F1114] flex items-center gap-[10px] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] hover:bg-slate-50 transition-colors whitespace-nowrap">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                stroke-width="2.5">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                            New Folder
                        </button>
                        <button @click="isUploadModalOpen = !isUploadModalOpen"
                            class="h-10 pl-[18px] pr-[21px] rounded-[80px] text-[12px] font-extrabold text-white uppercase leading-[100%] tracking-[-2%] flex items-center gap-[10px] whitespace-nowrap hover:opacity-95 transition-opacity"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-cloud-upload">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
                                <path d="M9 15l3 -3l3 3" />
                                <path d="M12 12l0 9" />
                            </svg>
                            Upload
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div
                        class="h-[104px] rounded-[24px] border border-[#0F11141A] pt-[22px] pb-[23px] px-6 flex flex-col justify-center bg-white cursor-pointer hover:border-[#0F111433] transition-colors">
                        <div class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[5px]">
                            INCOME</div>
                        <div class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%] mb-[6px]">$0.00</div>
                        <div class="text-[12px] font-semibold text-[#0F111499] leading-[100%]">Rent + fees collected
                        </div>
                    </div>

                    <div
                        class="h-[104px] rounded-[24px] border border-[#0F11141A] pt-[22px] pb-[23px] px-6 flex flex-col justify-center bg-white cursor-pointer hover:border-[#0F111433] transition-colors">
                        <div class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[5px]">
                            EXPENSES</div>
                        <div class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%] mb-[6px]">$0.00</div>
                        <div class="text-[12px] font-semibold text-[#0F111499] leading-[100%]">Maintenance + operating
                            costs</div>
                    </div>

                    <div
                        class="h-[104px] rounded-[24px] border border-[#0F11141A] pt-[22px] pb-[23px] px-6 flex flex-col justify-center bg-white cursor-pointer hover:border-[#0F111433] transition-colors">
                        <div class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[5px]">
                            NET</div>
                        <div class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%] mb-[6px]">$0.00</div>
                        <div class="text-[12px] font-semibold text-[#0F111499] leading-[100%]">Income minus expenses
                        </div>
                    </div>

                    <div
                        class="h-[104px] rounded-[24px] border border-[#0F11141A] pt-[22px] pb-[23px] px-6 flex flex-col justify-center bg-white cursor-pointer hover:border-[#0F111433] transition-colors">
                        <div class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[5px]">
                            TRANSACTIONS</div>
                        <div class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%] mb-[6px]">0</div>
                        <div class="text-[12px] font-semibold text-[#0F111499] leading-[100%]">0 paid - 0
                            pending/scheduled</div>
                    </div>
                </div>

                <div class="border border-[#0F11141A] rounded-[24px] overflow-hidden mb-6">

                    <div class="px-6 py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div class="flex flex-wrap items-center gap-1">
                            <button v-for="tab in tabs" :key="tab.key" @click="activeTab = tab.key"
                                class="h-8 px-[15px] rounded-[80px] text-[12px] uppercase leading-[100%] tracking-[-2%] transition-all whitespace-nowrap"
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
                                        class="pt-[14px] pb-[13px] pl-6 text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                        Name</th>
                                    <th
                                        class="pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                        Type</th>
                                    <th
                                        class="pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                        Property</th>
                                    <th
                                        class="pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                        Date</th>
                                    <th
                                        class="pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                        Size</th>
                                    <th
                                        class="pt-[14px] pb-[13px] pr-6 text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                        Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="document in documents" :key="document.id"
                                    class="border-b border-[#0F11141A] cursor-pointer last:border-0">

                                    <td class="pl-6 pt-[15px] pb-4">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 rounded-[8px] p-2 bg-[#F2F6FF] border border-[#004CE51A] flex items-center justify-center"
                                                v-html="document.svg">
                                            </div>
                                            <div class="flex flex-col">
                                                <span
                                                    class="text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%] mb-[2px]">
                                                    {{ document.filename }}</span>
                                                <span
                                                    class="text-[12px] text-[#0F111466] font-semibold leading-[100%] tracking-[-2%]">
                                                    {{ document.tag }}</span>
                                            </div>
                                        </div>
                                    </td>

                                    <td class="pt-6 pb-[23px]">
                                        <span
                                            class="text-[14px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">
                                            {{ document.type }}</span>
                                    </td>

                                    <td class="pt-6 pb-[23px]">
                                        <span
                                            class="text-[14px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">
                                            {{ document.property }}</span>
                                    </td>

                                    <td class="pt-6 pb-[23px]">
                                        <span
                                            class="text-[14px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">
                                            {{ document.date }}</span>
                                    </td>

                                    <td class="pt-6 pb-[23px]">
                                        <span
                                            class="text-[14px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">
                                            {{ document.size }}</span>
                                    </td>

                                    <td class="py-4 pr-6 w-px whitespace-nowrap">
                                        <div class="flex items-center gap-1">
                                            <button
                                                class="w-8 h-8 rounded-full border border-[#0F11141A] p-2 flex items-center justify-center hover:opacity-80 transition-opacity">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="icon icon-tabler icons-tabler-outline icon-tabler-download">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                                    <path d="M7 11l5 5l5 -5" />
                                                    <path d="M12 4l0 12" />
                                                </svg>
                                            </button>

                                            <button
                                                class="w-8 h-8 rounded-full border border-[#0F11141A] p-2 flex items-center justify-center hover:opacity-80 transition-opacity">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                                    <path d="M12 9h.01" />
                                                    <path d="M11 12h1v4h1" />
                                                </svg>
                                            </button>

                                            <button
                                                class="w-8 h-8 rounded-full border border-[#0F11141A] flex items-center justify-center hover:bg-slate-100 transition-colors"
                                                @click.stop>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="icon icon-tabler icons-tabler-outline icon-tabler-trash">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M4 7l16 0" />
                                                    <path d="M10 11l0 6" />
                                                    <path d="M14 11l0 6" />
                                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </main>

        </div>

        <!-- Upload Modal -->
        <div v-if="isUploadModalOpen"
            class="fixed inset-0 sm:inset-auto sm:top-[135px] sm:right-6 flex sm:block items-end sm:items-stretch justify-center z-10 sm:z-10 bg-black/30 sm:bg-transparent px-0 sm:px-0 pb-0 sm:pb-0"
            @click.self="isUploadModalOpen = false">
            <div class="bg-primary rounded-t-[24px] sm:rounded-[24px] border border-[#0F11141A] w-full sm:w-[408px] p-[25px] pt-[21px] overflow-hidden"
                style="box-shadow: 0px 0px 60px -30px #00000099;">

                <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[5px]">Upload files</h2>

                <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%] mb-5">Add images
                    and documents.</p>

                <div
                    class="border-2 border-dashed border-[#004CE580] rounded-xl bg-[#F2F5FA] p-[17px] pt-[25px] flex flex-col items-center mb-6">
                    <p class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-3">Drop files here</p>
                    <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%] mb-[15px]">or choose
                        from your computer</p>

                    <div
                        class="flex items-center gap-[11px] border border-[#0F11141A] rounded-[8px] bg-[#FAFAFA] px-4 py-3 w-full">
                        <button type="button"
                            class="h-8 flex items-center gap-[6px] bg-[#0F1114] text-primary text-[12px] font-bold leading-[100%] tracking-[-2%] uppercase px-[14px] py-2 rounded-[16px] whitespace-nowrap">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M15 22h3a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h3" />
                                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                <path d="M12 12v10" />
                                <path d="m9 15 3-3 3 3" />
                            </svg>
                            Choose File
                        </button>
                        <span class="text-[12px] font-bold text-[#0F111499] leading-[100%] tracking-[-2%]">No file
                            chosen</span>
                    </div>
                </div>

                <button type="button"
                    class="h-10 text-white font-extrabold text-[12px] leading-[100%] tracking-[-2%] uppercase rounded-[80px] w-full"
                    style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                    ADD
                </button>

            </div>
        </div>

        <!-- File Details Modal -->
        <div v-if="isFileDetailsModalOpen"
            class="fixed inset-0 flex items-end sm:items-center justify-center bg-black/50 z-[1000]"
            @click.self="isFileDetailsModalOpen = false">
            <div
                class="bg-primary rounded-t-[32px] sm:rounded-[32px] w-full sm:w-[648px] p-5 sm:p-6 overflow-hidden max-h-[90vh] overflow-y-auto">

                <div class="flex items-center justify-between mb-[9px]">
                    <h2 class="text-[20px] font-bold text-[#0F1114] leading-[100%]">File details</h2>
                    <button type="button" @click="isFileDetailsModalOpen = false"
                        class="border border-[#0F11141A] rounded-[80px] w-10 h-10 p-2 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-[18px] gap-y-4 mb-6">
                    <div>
                        <label
                            class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">SELECTED
                            FILE</label>
                        <input v-model="fileDetailsForm.selectedFile" type="text"
                            class="w-full border border-[#0F11141A] rounded-[80px] px-5 h-11 text-[12px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] focus:outline-none" />
                    </div>

                    <div>
                        <label
                            class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">FILE
                            TYPE</label>
                        <input v-model="fileDetailsForm.fileType" type="text"
                            class="w-full border border-[#0F11141A] rounded-[80px] px-5 h-11 text-[12px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%] focus:outline-none" />
                    </div>

                    <div>
                        <label
                            class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">PROPERTY</label>
                        <input v-model="fileDetailsForm.property" type="text"
                            class="w-full border border-[#0F11141A] rounded-[80px] px-5 h-11 text-[12px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%] focus:outline-none" />
                    </div>

                    <div>
                        <label
                            class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">TAGS</label>
                        <input v-model="fileDetailsForm.tags" type="text"
                            class="w-full border border-[#0F11141A] rounded-[80px] px-5 h-11 text-[12px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%] focus:outline-none" />
                    </div>

                    <div>
                        <label
                            class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">DESCRIPTION</label>
                        <textarea v-model="fileDetailsForm.description" rows="3" placeholder="Signed lease"
                            class="w-full h-[110px] border border-[#0F11141A] rounded-[12px] px-5 py-[15px] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] leading-[100%] tracking-[-2%] focus:outline-none resize-none"></textarea>
                    </div>

                    <div>
                        <label
                            class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">VISIBILITY</label>
                        <div class="relative">
                            <select v-model="fileDetailsForm.visibility"
                                class="w-full border border-[#0F11141A] rounded-[80px] px-5 h-11 text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] focus:outline-none appearance-none cursor-pointer">
                                <option value="TEAM">TEAM</option>
                                <option value="PRIVATE">PRIVATE</option>
                                <option value="PUBLIC">PUBLIC</option>
                            </select>
                            <svg class="pointer-events-none absolute right-[14px] top-1/2 -translate-y-1/2"
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="#0F1114" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-end gap-2">
                    <button type="button" @click="isFileDetailsModalOpen = false"
                        class="h-10 px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-extrabold text-[#0F1114] uppercase tracking-[-2%] leading-[100%]">
                        CANCEL
                    </button>
                    <button type="button"
                        class="h-10 px-5 rounded-[80px] text-[12px] font-extrabold text-primary uppercase tracking-[-2%] leading-[100%]"
                        style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                        SAVE
                    </button>
                </div>

            </div>
        </div>

    </div>
</template>
