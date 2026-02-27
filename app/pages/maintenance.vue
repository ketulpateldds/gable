<script setup>
const showNewRequest = ref(false)
const stats = [
    { label: 'OPEN REQUESTS', value: '3', sub: 'Not completed or closed' },
    { label: 'WAITING APPROVAL', value: '1', sub: 'Needs owner/manager approval' },
    { label: 'SCHEDULED', value: '1', sub: 'Upcoming vendor visits' },
    { label: 'EST. TOTAL', value: '$910', sub: 'Sum of estimates (demo)' },
]

const requests = [
    {
        date: 'Jan 26, 2026',
        priority: 'Critical',
        priorityColor: '#CC2929',
        status: '',
        property: '123 Oak St',
        unit: 'Unit 4',
        title: 'Water leak under sink',
        category: 'Plumbing • Leak',
        assigned: 'Plumbing Pro Co.',
        estimate: '$450',
    },
    {
        date: 'Jan 19, 2026',
        priority: 'High',
        priorityColor: '#E59917',
        status: '',
        property: '55 Crystal Falls Dr',
        unit: 'Main',
        title: 'Garage door sensor not working',
        category: 'Exterior • Fence/Gate',
        assigned: 'Handy Services',
        estimate: '$180',
    },
    {
        date: 'Jan 14, 2026',
        priority: 'Normal',
        priorityColor: '#21A635',
        status: '',
        property: '123 Oak St',
        unit: 'Unit 4',
        title: 'Heater maintenance',
        category: 'Appliances • Other',
        assigned: 'Ace HVAC',
        estimate: '$220',
    },
    {
        date: 'Jan 5, 2026',
        priority: 'Low',
        priorityColor: '#004CE5',
        status: '',
        property: 'Portfolio',
        unit: '-',
        title: 'Replace hallway light bulbs',
        category: 'Electrical • Lights',
        assigned: 'Bright Electric',
        estimate: '$60',
    },
]

const recentUpdates = [
    { title: 'Water leak under sink', meta: 'Jan 26, 2026 • 123 Oak St • Unit 4 • Plumbing Pro Co.' },
    { title: 'Garage door sensor not working', meta: 'Jan 19, 2026 • 55 Crystal Falls Dr • Handy Services' },
    { title: 'Heater maintenance', meta: 'Jan 14, 2026 • 123 Oak St • Unit 4 • Ace HVAC' },
    { title: 'Replace hallway light bulbs', meta: 'Jan 5, 2026 • Portfolio • Bright Electric' },
]

const quickActions = [
    {
        title: 'Assign a vendor',
        description: 'Select a request and assign a vendor to move it forward.',
        btnLabel: 'ASSIGN VENDOR',
        btnStyle: 'text-white',
        btnBg: 'background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);',
    },
    {
        title: 'Request approval',
        description: 'Send an approval request to an owner or manager.',
        btnLabel: 'REQUEST APPROVAL',
        btnStyle: 'bg-primary text-[#0F1114] border border-[#0F1114]',
        btnBg: '',
    },
    {
        title: 'Close request',
        description: 'Mark an issue completed and close the ticket.',
        btnLabel: 'CLOSE SELECTED',
        btnStyle: 'bg-primary text-[#0F1114] border border-[#0F1114]',
        btnBg: '',
    },
]
</script>

<template>
    <div class="flex min-h-screen bg-primary font-sans">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-6 py-[19px]">

                <div class="flex items-start justify-between mb-5">
                    <div>
                        <h1 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[4px]">Maintenance</h1>
                        <p class="text-[12px] font-medium text-[#0F1114CC] leading-4 tracking-[-2%]">Track requests,
                            assign vendors, and manage approvals.</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <button
                            class="h-10 px-5 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold uppercase tracking-[-2%] text-[#0F1114] leading-[100%]">
                            RULES
                        </button>
                        <button @click="showNewRequest = true"
                            class="h-10 pl-[18px] pr-5 rounded-[80px] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%] flex items-center gap-[5px]"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M12 5v14M5 12h14" />
                            </svg>
                            NEW REQUEST
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div v-for="stat in stats" :key="stat.label"
                        class="rounded-3xl border border-[#0F11141A] p-6 pt-[23px]">
                        <p class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[5px]">
                            {{ stat.label }}</p>
                        <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%] mb-[6px]">
                            {{ stat.value }}</p>
                        <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%]">{{ stat.sub }}</p>
                    </div>
                </div>

                <div class="rounded-3xl border border-[#0F11141A] mb-5 overflow-hidden">
                    <div class="flex flex-col gap-3 p-6 sm:flex-row sm:items-center">
                        <span class="text-base font-bold text-[#0F1114] leading-[100%] shrink-0">Requests</span>

                        <div class="flex flex-wrap items-center justify-end gap-1 flex-1">
                            <div
                                class="flex items-center gap-[6px] h-10 pl-2 pr-[15px] rounded-[80px] border border-[#0F11141A] w-full sm:flex-1 sm:max-w-[254px]">
                                <div class="p-[5px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                        fill="none" stroke="#0F111466" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <circle cx="11" cy="11" r="8" />
                                        <path d="m21 21-4.35-4.35" />
                                    </svg>
                                </div>
                                <input type="text" placeholder="Search: unit, title, vendor, category..."
                                    class="flex-1 text-[12px] font-semibold text-[#0F111466] leading-[100%] tracking-[-2%] outline-none placeholder:text-[#0F111466]" />
                            </div>

                            <div class="flex items-center flex-wrap gap-1">
                                <button
                                    class="h-10 pl-5 py-[10px] pr-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] flex items-center gap-[14px] whitespace-nowrap">
                                    ALL PROPERTIES
                                    <div class="h-5 w-5 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </div>
                                </button>

                                <button
                                    class="h-10 pl-5 py-[10px] pr-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] flex items-center gap-[14px] whitespace-nowrap">
                                    ALL STATUSES
                                    <div class="h-5 w-5 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </div>
                                </button>

                                <button
                                    class="h-10 pl-5 py-[10px] pr-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] flex items-center gap-[14px] whitespace-nowrap">
                                    ALL PRIORITY
                                    <div class="h-5 w-5 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </div>
                                </button>

                                <button
                                    class="h-10 px-5 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] whitespace-nowrap">
                                    CLEAR
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="w-full min-w-[900px]">
                            <thead>
                                <tr class="h-11 border-y border-[#0F11141A] bg-[#FAFAFA]">
                                    <th
                                        class="pl-6 pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Date</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Priority</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Status</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Property</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Unit</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] whitespace-nowrap w-[124px]">
                                        Title</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] whitespace-nowrap w-[84px]">
                                        Category</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Assigned</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Estimate</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(req, i) in requests" :key="i"
                                    class="border-b border-[#0F11141A] last:border-b-0 hover:bg-[#F9FAFB] transition-colors">
                                    <td
                                        class="pl-6 pr-6 pt-6 pb-[23px] text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        {{ req.date }}</td>

                                    <td
                                        class="pr-6 pt-6 pb-[23px] text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        <span class="flex items-center gap-[4px]">
                                            <span class="w-[8px] h-[8px] rounded-full shrink-0"
                                                :style="{ background: req.priorityColor }"></span>
                                            {{ req.priority }}
                                        </span>
                                    </td>

                                    <td
                                        class="pr-6 pt-6 pb-[23px] text-[14px] font-semibold leading-[100%] tracking-[-2%] text-[#0F111499]">
                                        {{ req.status }}</td>

                                    <td
                                        class="pr-6 pt-6 pb-[23px] text-[14px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">
                                        {{ req.property }}</td>

                                    <td
                                        class="pr-4 pt-6 pb-[23px] text-[14px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">
                                        {{ req.unit }}</td>

                                    <td
                                        class="py-4 pr-6 text-[14px] font-semibold text-[#0F1114] leading-4 tracking-[-2%] w-[124px]">
                                        {{ req.title }}</td>

                                    <td
                                        class="py-4 pr-6 text-[14px] font-semibold text-[#0F1114] leading-4 tracking-[-2%] w-[84px]">
                                        {{ req.category }}</td>

                                    <td
                                        class="pr-6 pt-6 pb-[23px] text-[14px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">
                                        {{ req.assigned }}</td>

                                    <td
                                        class="pr-6 pt-6 pb-[23px] text-[14px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">
                                        {{ req.estimate }}</td>

                                    <td class="py-4 pr-6 w-px whitespace-nowrap">
                                        <div class="flex items-center gap-[4px]">
                                            <button
                                                class="border border-[#0F11141A] rounded-[80px] h-8 w-8 text-[#0F1114] flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path
                                                        d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                </svg>
                                            </button>
                                            <button
                                                class="border border-[#0F11141A] rounded-[80px] h-8 w-8 text-[#0F1114] flex items-center justify-center">
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


                <div class="flex flex-col xl:flex-row gap-4">
                    <div
                        class="flex flex-col w-full xl:w-[656px] h-fit border border-[#0F11141A] rounded-[24px] p-[25px] pt-[22px]">
                        <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-5">Recent activity</h2>

                        <div class="flex flex-col gap-2">
                            <div v-for="upd in recentUpdates" :key="upd.title"
                                class="border border-[#0F11141A] rounded-[12px] px-[17px] pt-[13px] pb-[15px]">
                                <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%] mb-[6px]">
                                    {{ upd.title }}
                                </p>
                                <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%]">{{ upd.meta }}</p>
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex flex-col w-full xl:w-[464px] border border-[#0F11141A] rounded-[24px] pt-[22px] pb-[23px] px-[25px]">
                        <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-5">Quick actions</h2>

                        <div class="flex flex-col gap-4">
                            <div v-for="action in quickActions" :key="action.title"
                                class="border border-[#0F11141A] rounded-[12px] px-[14px] pt-[13px] pb-4 flex flex-col items-start">
                                <p
                                    class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%] mb-[6px] ml-[3px]">
                                    {{ action.title }}
                                </p>
                                <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%] mb-[13px] ml-[3px]">
                                    {{ action.description }}</p>
                                <button :class="[
                                    'h-10 px-5 py-[13px] rounded-[80px] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] hover:opacity-95 transition-opacity',
                                    action.btnStyle
                                ]" :style="action.btnBg">
                                    {{ action.btnLabel }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    </div>

    <NewRequestModal :open="showNewRequest" @close="showNewRequest = false" />
</template>
