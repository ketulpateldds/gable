<script setup>
const activeTab = ref('ALL')
const tabs = ['ALL', 'MOVE IN', 'MOVE OUT', 'SCHEDULED', 'COMP...']

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

                <!-- ── Page Header ── -->
                <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div>
                        <h1 class="text-xl font-bold text-[#0F1114] leading-[100%] mb-[6px]">
                            Move-in/Move-out/Recurring Inspections
                        </h1>
                        <p class="text-[13px] text-[#0F1114CC] leading-[100%]">
                            Schedule inspections, complete checklists, and attach photos &amp; reports
                        </p>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        <button
                            class="h-[38px] px-5 rounded-[80px] border border-[#0F111433] text-[12px] font-extrabold uppercase tracking-[-0.02em] text-[#0F1114]">
                            EXPORT
                        </button>
                        <button
                            class="h-[38px] px-5 rounded-[80px] border border-[#0F111433] text-[12px] font-extrabold uppercase tracking-[-0.02em] text-[#0F1114]">
                            TEMPLATES
                        </button>
                        <button
                            class="h-[38px] pl-4 pr-5 rounded-[80px] bg-[#004CE5] text-white text-[12px] font-extrabold uppercase tracking-[-0.02em] flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M12 5v14M5 12h14" />
                            </svg>
                            NEW INSPECTION
                        </button>
                    </div>
                </div>

                <!-- ── Inspections Table Card ── -->
                <div class="rounded-2xl border border-[#0F11141A] bg-white mb-5 overflow-hidden">

                    <!-- Tabs + Filter bar -->
                    <div class="flex flex-col lg:flex-row lg:items-center gap-3 px-5 py-3 border-b border-[#0F11141A]">
                        <!-- Left: label + tabs -->
                        <div class="flex items-center gap-2">
                            <span class="text-base font-bold text-[#0F1114] leading-[100%] pr-2">Inspections</span>
                            <div class="flex items-center gap-1">
                                <button v-for="tab in tabs" :key="tab" @click="activeTab = tab" :class="[
                                    'h-[30px] px-3 rounded-[80px] text-[11px] font-bold uppercase whitespace-nowrap transition-colors',
                                    activeTab === tab
                                        ? 'bg-[#0F1114] text-white'
                                        : 'text-[#0F111466] hover:bg-[#F5F5F5]'
                                ]">
                                    {{ tab }}
                                </button>
                            </div>
                        </div>

                        <!-- Right: search + filters -->
                        <div class="flex items-center gap-2 lg:ml-auto flex-wrap">
                            <div
                                class="flex items-center gap-2 h-[34px] px-3 rounded-[80px] border border-[#0F111426] bg-white min-w-[220px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
                                    fill="none" stroke="#0F111466" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.35-4.35" />
                                </svg>
                                <input type="text" placeholder="Search: property, unit, tenant, inspe..."
                                    class="flex-1 text-[12px] text-[#0F111466] bg-transparent outline-none placeholder:text-[#0F111466]" />
                            </div>
                            <button v-for="f in ['ALL PROPERTIES', 'ALL STATUS']" :key="f"
                                class="h-[34px] px-3 rounded-[80px] border border-[#0F111426] text-[11px] font-semibold text-[#0F1114] flex items-center gap-1 whitespace-nowrap">
                                {{ f }}
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Table -->
                    <div class="overflow-x-auto">
                        <table class="w-full min-w-[700px]">
                            <thead>
                                <tr class="border-b border-[#0F11141A]">
                                    <th v-for="col in ['Type', 'Property', 'Unit', 'Tenant', 'Inspector', 'Date', 'Status', 'Actions']"
                                        :key="col"
                                        class="px-4 py-3 text-left text-[11px] font-semibold text-[#0F111466] uppercase tracking-wider whitespace-nowrap first:pl-5 last:pr-5">
                                        {{ col }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(insp, i) in inspections" :key="i"
                                    class="border-b border-[#0F11141A] last:border-b-0 hover:bg-[#F9FAFB] transition-colors">
                                    <td
                                        class="px-4 py-[14px] pl-5 text-[13px] font-medium text-[#0F1114] whitespace-nowrap">
                                        {{
                                            insp.date }}</td>
                                    <td class="px-4 py-[14px] text-[13px] text-[#0F1114]">{{ insp.property }}</td>
                                    <td class="px-4 py-[14px] text-[13px] text-[#0F1114]">{{ insp.unit }}</td>
                                    <td class="px-4 py-[14px] text-[13px] text-[#0F1114]">{{ insp.tenant }}</td>
                                    <td class="px-4 py-[14px] text-[13px] text-[#0F1114]">{{ insp.inspector }}</td>
                                    <td class="px-4 py-[14px] text-[13px] text-[#0F1114CC] whitespace-nowrap">{{
                                        insp.inspectorDate }}</td>
                                    <td class="px-4 py-[14px]">
                                        <span
                                            :class="['text-[11px] font-bold px-3 py-1 rounded-[80px]', statusColor(insp.status)]">
                                            {{ insp.status }}
                                        </span>
                                    </td>
                                    <td class="px-4 py-[14px] pr-5">
                                        <div class="flex items-center gap-3">
                                            <button class="text-[#0F111466] hover:text-[#0F1114] transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path
                                                        d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                </svg>
                                            </button>
                                            <button class="text-[#0F111466] hover:text-red-500 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
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

                <!-- ── Bottom Two-Column Layout ── -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">

                    <!-- LEFT: Inspection Summary + Detail -->
                    <div class="flex flex-col gap-4">

                        <!-- Inspection Summary Header -->
                        <div>
                            <h2 class="text-base font-bold text-[#0F1114] leading-[100%] mb-3">Inspection summary</h2>

                            <!-- Demo notice card (blue) -->
                            <div class="rounded-[12px] border border-[#004CE51A] bg-[#EBF2FF] px-4 py-3">
                                <p class="text-[12px] text-[#004CE5] leading-[150%]">
                                    Demo page: the checklist &amp; photos are UI placeholders to match your app
                                    style.
                                </p>
                            </div>
                        </div>

                        <!-- Selected Inspection -->
                        <div class="rounded-2xl border border-[#0F11141A] bg-white p-5">
                            <p class="text-[10px] font-semibold text-[#0F111466] uppercase tracking-wider mb-2">SELECTED
                                INSPECTION</p>
                            <p class="text-[14px] font-bold text-[#0F1114] leading-[100%] mb-[5px]">Move-out • 55
                                Crystal Falls Dr</p>
                            <p class="text-[12px] text-[#0F1114CC] leading-[100%]">February 15, 2026 • Scheduled •
                                Inspector: S. Rivera</p>
                        </div>

                        <!-- Quick Checklist -->
                        <div class="rounded-2xl border border-[#0F11141A] bg-white p-5">
                            <p class="text-[14px] font-bold text-[#0F1114] leading-[100%] mb-[4px]">Quick checklist</p>
                            <p class="text-[12px] text-[#0F1114CC] leading-[100%] mb-4">February 15, 2026 • Scheduled •
                                Inspector: S. Rivera</p>
                            <div class="flex flex-wrap gap-2">
                                <span v-for="item in checklistItems" :key="item"
                                    class="h-[28px] px-3 rounded-[80px] bg-[#F5F5F5] text-[11px] font-semibold text-[#0F1114] uppercase flex items-center">
                                    {{ item }}
                                </span>
                            </div>
                        </div>

                        <!-- Photos -->
                        <div class="rounded-2xl border border-[#0F11141A] bg-white p-5">
                            <p class="text-[14px] font-bold text-[#0F1114] leading-[100%] mb-[4px]">Photos</p>
                            <p class="text-[12px] text-[#0F1114CC] leading-[100%] mb-4">Select before/after photos for
                                documentation.</p>
                            <div class="flex items-center gap-2 mb-4">
                                <button
                                    class="h-[34px] px-4 rounded-[80px] border border-[#0F111433] text-[11px] font-extrabold uppercase text-[#0F1114] flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M12 5v14M5 12h14" />
                                    </svg>
                                    ADD PHOTOS
                                </button>
                                <button
                                    class="h-[34px] px-4 rounded-[80px] border border-[#0F111433] text-[11px] font-extrabold uppercase text-[#0F1114]">
                                    GENERATE REPORT
                                </button>
                            </div>
                            <!-- Photo grid placeholders -->
                            <div class="grid grid-cols-3 gap-2">
                                <div v-for="room in photoRooms" :key="room"
                                    class="rounded-[10px] border border-[#0F11141A] bg-[#F9FAFB] h-[72px] flex items-end px-3 pb-2">
                                    <span class="text-[11px] font-medium text-[#0F111466]">{{ room }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Notes -->
                        <div class="rounded-2xl border border-[#0F11141A] bg-white p-5">
                            <p class="text-[14px] font-bold text-[#0F1114] leading-[100%] mb-3">Notes</p>
                            <textarea rows="3" placeholder="Add inspection notes..."
                                class="w-full text-[13px] text-[#0F1114] placeholder:text-[#0F111466] bg-transparent outline-none resize-none" />
                        </div>
                    </div>

                    <!-- RIGHT: Upcoming + Tips -->
                    <div class="flex flex-col gap-4">

                        <!-- Upcoming -->
                        <div class="rounded-2xl border border-[#0F11141A] bg-white p-5">
                            <p class="text-base font-bold text-[#0F1114] leading-[100%] mb-1">Upcoming</p>
                            <p class="text-[10px] font-semibold text-[#0F111466] uppercase tracking-wider mb-4">NEXT 7
                                DAYS</p>
                            <p class="text-4xl font-bold text-[#0F1114] leading-[100%] mb-2">0 scheduled</p>
                            <p class="text-[12px] text-[#0F1114CC] leading-[150%]">Use 'New Inspection' to schedule a
                                move-in or move-out inspection.</p>
                        </div>

                        <!-- Tips -->
                        <div class="rounded-2xl border border-[#0F11141A] bg-white p-5">
                            <p class="text-base font-bold text-[#0F1114] leading-[100%] mb-4">Tips</p>
                            <ul class="flex flex-col gap-3">
                                <li v-for="tip in tips" :key="tip"
                                    class="flex items-start gap-2 text-[12px] text-[#0F1114CC] leading-[150%]">
                                    <span class="mt-[5px] w-[5px] h-[5px] rounded-full bg-[#0F1114CC] shrink-0"></span>
                                    {{ tip }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    </div>
</template>
