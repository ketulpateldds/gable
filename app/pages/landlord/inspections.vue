<script setup>
import InspectionTemplatesModal from '~/components/landlord/InspectionTemplatesModal.vue'
import Navbar from '~/components/landlord/Navbar.vue'
import NewInspectionModal from '~/components/landlord/NewInspectionModal.vue'
import Sidebar from '~/components/landlord/Sidebar.vue'


const activeTab = ref('ALL')
const tabs = ['ALL', 'MOVE-IN', 'MOVE-OUT', 'SCHEDULED', 'COMPLETED', 'CANCELLED']
const isNewInspectionModalOpen = ref(false)
const isTemplatesModalOpen = ref(false)

const inspections = [
    {
        date: 'Jan 26, 2026',
        type: 'Move-in',
        property: '123 Oak St • Unit 4',
        unit: 'Unit 4',
        tenant: 'Marquis Diaz',
        inspector: 'Alex Kim',
        inspectorDate: 'Dec 20, 2025',
        status: 'Completed',
    },
    {
        date: 'Jan 19, 2026',
        type: 'Move-out',
        property: '55 Crystal Falls Dr',
        unit: 'Main',
        tenant: 'Jordan Lee',
        inspector: 'S. Rivera',
        inspectorDate: 'Jan 12, 2026',
        status: 'Scheduled',
    },
    {
        date: 'Jan 14, 2026',
        type: 'Move-in',
        property: '123 Oak St • Unit 4',
        unit: 'Unit B',
        tenant: 'Avery Patel',
        inspector: 'Alex Kim',
        inspectorDate: 'Feb 6, 2025',
        status: 'Completed',
    },
    {
        date: 'Jan 5, 2026',
        type: 'Recurring',
        property: 'Portfolio',
        unit: '-',
        tenant: 'Jordan Lee',
        inspector: 'S. Rivera',
        inspectorDate: 'Feb 20, 2026',
        status: 'Scheduled',
    },
]

const checklistItems = ['SMOKE DETECTORS', 'PLUMBING LEAKS', 'APPLIANCES', 'WINDOWS/DOORS', 'FLOORING', 'WALLPAPER']

const photoRooms = ['Living room', 'Kitchen', 'Bath', 'Bedroom', 'Exterior', 'Other']

const tips = [
    'Use templates for consistent room-by-room checklists.',
    'Add photos for any damage and include notes.',
    'Mark "Needs Follow-up" for repairs on re-inspections.',
]

function statusColor(status) {
    if (status === 'Completed') return 'bg-[#DCFCE7] text-[#166534]'
    if (status === 'Scheduled') return 'bg-[#DBEAFE] text-[#1D4ED8]'
    return 'bg-[#F3F4F6] text-[#374151]'
}
</script>

<template>
    <div class="flex min-h-screen bg-primary">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-6 pt-[19px] pb-[25px]">

                <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                    <div>
                        <h1 class="text-[18px] sm:text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[4px]">
                            Move-in/Move-out/Recurring Inspections
                        </h1>
                        <p class="text-[12px] text-[#0F111499] font-medium leading-4 tracking-[-0.02em]">
                            Schedule inspections, complete checklists, and attach photos &amp; reports
                        </p>
                    </div>
                    <div class="flex items-center gap-1 shrink-0 flex-wrap">
                        <button
                            class="h-10 px-5 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-0.02em] text-[#0F1114]">
                            EXPORT
                        </button>
                        <button @click="navigateTo('/landlord/inspection/template')"
                            class="h-10 px-5 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-0.02em] text-[#0F1114]">
                            TEMPLATES
                        </button>
                        <button @click="isNewInspectionModalOpen = true"
                            class="h-10 pl-[18px] pr-5 rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-0.02em] flex items-center gap-[9px]"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M12 5v14M5 12h14" />
                            </svg>
                            NEW INSPECTION
                        </button>
                    </div>
                </div>

                <div class="rounded-[24px] border border-[#0F11141A] mb-5 overflow-hidden">

                    <div class="flex flex-col lg:flex-row lg:items-center gap-1 p-4 sm:p-6">
                        <div class="flex items-center gap-5 sm:gap-8 min-w-0 flex-wrap">
                            <span
                                class="text-[16px] font-bold text-[#0F1114] leading-[100%] whitespace-nowrap">Inspections</span>

                            <div class="flex items-center gap-1 max-w-[401px] overflow-x-auto scrollbar-hide py-1">
                                <button v-for="tab in tabs" :key="tab" @click="activeTab = tab" :class="[
                                    'h-8 px-4 rounded-[80px] text-[12px] uppercase leading-[100%] tracking-[-0.02em] whitespace-nowrap transition-colors',
                                    activeTab === tab
                                        ? 'bg-[#0F1114] text-white font-bold'
                                        : 'text-[#0F1114] border border-[#0F11141A] font-semibold'
                                ]">
                                    {{ tab }}
                                </button>
                            </div>
                        </div>

                        <div class="flex items-center gap-1 lg:ml-auto flex-wrap w-full lg:w-auto">
                            <div
                                class="flex items-center gap-[6px] h-10 pl-2 pr-[15px] rounded-[80px] border border-[#0F11141A] w-full sm:w-auto sm:min-w-[254px]">
                                <div class="flex items-center justify-center h-6 w-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                        fill="none" stroke="#0F111466" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <circle cx="11" cy="11" r="8" />
                                        <path d="m21 21-4.35-4.35" />
                                    </svg>
                                </div>
                                <input type="text" placeholder="Search: property, unit, tenant, inspe..."
                                    class="flex-1 text-[12px] font-semibold text-[#0F1114] leading-[100%] tracking-[-0.02em] outline-none placeholder:text-[#0F111466]" />
                            </div>
                            <button v-for="f in ['ALL PROPERTIES', 'ALL STATUS']" :key="f"
                                class="h-10 pl-5 pr-[15px] py-[10px] rounded-[80px] border border-[#0F11141A] text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em] flex items-center gap-[10px] sm:gap-[14px] whitespace-nowrap">
                                {{ f }}
                                <div class="flex items-center justify-center h-5 w-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="w-full min-w-[700px]">
                            <thead>
                                <tr class="border-y border-[#0F11141A] bg-[#FAFAFA] h-11">
                                    <th v-for="col in ['Type', 'Property', 'Unit', 'Tenant', 'Inspector', 'Date', 'Status', 'Actions']"
                                        :key="col"
                                        class="px-4 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-0.02em] whitespace-nowrap first:pl-6 last:pr-6">
                                        {{ col }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(insp, i) in inspections" :key="i"
                                    class="border-b border-[#0F11141A] last:border-b-0 hover:bg-[#F9FAFB] transition-colors">
                                    <td
                                        class="px-6 pt-6 pb-[23px] pl-4 text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-0.02em] whitespace-nowrap">
                                        {{ insp.date }}</td>
                                    <td
                                        class="px-4 pt-6 pb-[23px] text-[14px] font-semibold text-[#0F111499] leading-[100%] tracking-[-0.02em] whitespace-nowrap">
                                        {{ insp.property }}</td>
                                    <td
                                        class="px-4 pt-6 pb-[23px] text-[14px] font-semibold text-[#0F111499] leading-[100%] tracking-[-0.02em] whitespace-nowrap">
                                        {{ insp.unit }}</td>
                                    <td
                                        class="px-4 pt-6 pb-[23px] text-[14px] font-semibold text-[#0F111499] leading-[100%] tracking-[-0.02em] whitespace-nowrap">
                                        {{ insp.tenant }}</td>
                                    <td
                                        class="px-4 pt-6 pb-[23px] text-[14px] font-semibold text-[#0F111499] leading-[100%] tracking-[-0.02em] whitespace-nowrap">
                                        {{ insp.inspector }}</td>
                                    <td
                                        class="px-4 pt-6 pb-[23px] text-[14px] font-semibold text-[#0F111499] leading-[100%] tracking-[-0.02em] whitespace-nowrap">
                                        {{ insp.inspectorDate }}</td>
                                    <td class="px-4 pt-6 pb-[23px]">
                                        <span
                                            :class="['text-[14px] font-semibold px-3 py-1 rounded-[80px]', statusColor(insp.status)]">
                                            {{ insp.status }}
                                        </span>
                                    </td>
                                    <td class="pl-4 pr-6 py-4 w-px">
                                        <div class="flex items-center gap-1">
                                            <button
                                                class="text-[#0F1114] border border-[#0F11141A] rounded-full h-8 w-8 p-2 flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="icon icon-tabler icons-tabler-outline icon-tabler-pencil">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                                    <path d="M13.5 6.5l4 4" />
                                                </svg>
                                            </button>
                                            <button
                                                class="text-[#0F1114] border border-[#0F11141A] rounded-full h-8 w-8 p-2 flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <polyline points="3 6 5 6 21 6" />
                                                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                                                    <path d="M10 11v6M14 11v6" />
                                                    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div class="flex flex-col border border-[#0F11141A] rounded-[24px] p-[25px] pt-[22px]">

                        <div class="mb-4">
                            <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-5">Inspection summary</h2>

                            <div class="rounded-[12px] border border-[#004CE51A] bg-[#F2F6FF] px-[17px] py-3">
                                <p class="text-[14px] font-bold text-[#004CE5] leading-[18px]">
                                    Demo page: the checklist &amp; photos are UI placeholders to match your app
                                    style.
                                </p>
                            </div>
                        </div>

                        <div class="rounded-[12px] border border-[#0F11141A] py-[16px] px-[17px] mb-5">
                            <p class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-1">
                                SELECTED INSPECTION</p>
                            <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-0.02em] mb-[6px]">
                                Move-out • 55 Crystal Falls Dr</p>
                            <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%]">February 15, 2026 •
                                Scheduled • Inspector: S. Rivera</p>
                        </div>

                        <div class="mb-5">
                            <p class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[5px]">Quick checklist</p>
                            <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%] mb-[21px]">February 15,
                                2026 • Scheduled • Inspector: S. Rivera</p>

                            <div class="flex flex-wrap gap-2">
                                <span v-for="item in checklistItems" :key="item"
                                    class="h-8 pl-3 pr-[17px] py-2 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] flex items-center gap-[8px] tracking-[-0.02em]">
                                    <div class="h-4 w-4 rounded-[4px] border border-[#0F11141A] flex-shrink-0"></div>
                                    {{ item }}
                                </span>
                            </div>
                        </div>

                        <div class="mb-5">
                            <p class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[5px]">Photos</p>
                            <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%] mb-[13px]">Select
                                before/after photos for documentation.</p>
                            <div class="flex flex-col sm:flex-row items-center gap-2 mb-4">
                                <button
                                    class="h-10 pl-[18px] pr-5 py-3 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-0.02em] text-[#0F1114] flex items-center justify-center gap-[10px] w-full sm:w-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M12 5v14M5 12h14" />
                                    </svg>
                                    ADD PHOTOS
                                </button>
                                <button
                                    class="h-10 px-5 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-0.02em] text-[#0F1114] whitespace-nowrap flex items-center justify-center w-full sm:w-auto">
                                    GENERATE REPORT
                                </button>
                            </div>

                            <div class="grid grid-cols-2 sm:grid-cols-3 gap-[9px]">
                                <div v-for="room in photoRooms" :key="room"
                                    class="rounded-[12px] border border-dashed border-[#0F11141A] bg-[#FAFAFA] h-[104px] flex items-center justify-center">
                                    <span
                                        class="text-[14px] sm:text-[16px] font-bold text-[#0F111499] leading-4 tracking-[-0.02em]">
                                        {{ room }}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-5">Notes</p>
                            <textarea rows="3" placeholder="Add inspection notes..."
                                class="w-full border border-[#0F11141A] h-[88px] rounded-[12px] px-4 py-[14px] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111499] leading-[100%] outline-none resize-none" />
                        </div>
                    </div>

                    <div class="flex flex-col border border-[#0F11141A] rounded-[24px] px-[25px] py-[22px] h-fit">

                        <p class="text-base font-bold text-[#0F1114] leading-[100%] mb-5">Upcoming</p>

                        <div class="border border-[#0F11141A] rounded-[12px] px-[17px] py-[16px] mb-5">
                            <p class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[4px]">NEXT
                                7 DAYS</p>
                            <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-0.02em] mb-[6px]">0
                                scheduled</p>
                            <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%]">Use 'New
                                Inspection' to schedule a move-in or move-out inspection.</p>
                        </div>

                        <div>
                            <p class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[10px]">Tips</p>
                            <ul class="flex flex-col gap-[7px]">
                                <li v-for="tip in tips" :key="tip"
                                    class="flex items-center gap-2 text-[12px] font-bold text-[#0F111499] leading-[100%]">
                                    <span class="w-[4px] h-[4px] rounded-full bg-[#0F111499] shrink-0"></span>
                                    {{ tip }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </main>
        </div>

        <NewInspectionModal :open="isNewInspectionModalOpen" @close="isNewInspectionModalOpen = false" />
    </div>
</template>
