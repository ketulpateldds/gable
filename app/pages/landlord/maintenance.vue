<script setup>
import AddServiceProModal from '~/components/landlord/AddServiceProModal.vue'
import InviteServiceProModal from '~/components/landlord/InviteServiceProModal.vue'
import Navbar from '~/components/landlord/Navbar.vue'
import NewRequestModal from '~/components/landlord/NewRequestModal.vue'
import Sidebar from '~/components/landlord/Sidebar.vue'

const showNewRequest = ref(false)
const showAddServicePro = ref(false)
const showInviteServicePro = ref(false)

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
        status: 'New',
        statusColor: 'text-[#004CE5]',
        property: '123 Oak St • Unit 4',
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
        status: 'Waiting Approval',
        statusColor: 'text-[#A16600]',
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
        status: 'Completed',
        statusColor: 'text-[#21A635]',
        property: '123 Oak St • Unit 4',
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
        status: 'Overdue',
        statusColor: 'text-[#CC2929]',
        property: 'Portfolio',
        unit: '-',
        title: 'Replace hallway light bulbs',
        category: 'Electrical • Lights',
        assigned: 'Bright Electric',
        estimate: '$60',
    },
]

</script>

<template>
    <div class="flex min-h-screen bg-primary font-sans">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-6 py-[19px]">

                <!-- Header -->
                <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                    <div>
                        <h1 class="text-[20px] font-bold text-neutral-primary leading-[100%] mb-[4px]">Maintenance</h1>
                        <p class="text-[12px] font-medium text-neutral-primary/80 leading-4 tracking-[-2%]">Track
                            requests, assign vendors, and manage approvals.</p>
                    </div>

                    <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
                        <button @click="showInviteServicePro = true"
                            class="py-[13px] px-5 rounded-[80px] border border-neutral-primary text-[12px] font-extrabold uppercase tracking-[-2%] text-neutral-primary leading-[100%] w-full sm:w-auto text-center justify-center flex items-center">
                            Invite Service Pro
                        </button>
                        <button @click="showAddServicePro = true"
                            class="py-[11px] px-5 rounded-[80px] border border-neutral-primary text-[12px] font-extrabold uppercase tracking-[-2%] text-neutral-primary leading-[100%] flex items-center justify-center gap-[5px] w-full sm:w-auto">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 5l0 14" />
                                <path d="M5 12l14 0" />
                            </svg>
                            Add Service Pro
                        </button>
                        <button @click="showNewRequest = true"
                            class="py-[12px] px-5 rounded-[80px] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%] flex items-center justify-center gap-[5px] w-full sm:w-auto"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 5l0 14" />
                                <path d="M5 12l14 0" />
                            </svg>
                            NEW REQUEST
                        </button>
                    </div>
                </div>

                <!-- Stats -->
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div v-for="stat in stats" :key="stat.label"
                        class="rounded-3xl border border-neutral-primary/10 p-6 pt-[23px]">
                        <p class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-[5px]">
                            {{ stat.label }}</p>
                        <p class="text-[16px] font-bold text-neutral-primary leading-5 tracking-[-2%] mb-[6px]">
                            {{ stat.value }}</p>
                        <p class="text-[12px] font-semibold text-neutral-primary/60 leading-[100%]">{{ stat.sub }}</p>
                    </div>
                </div>

                <!-- Requests -->
                <div class="rounded-3xl border border-neutral-primary/10 mb-5 overflow-hidden">

                    <!-- Search and Filter -->
                    <div class="flex flex-col gap-3 p-6 sm:flex-row sm:items-center">
                        <span class="text-base font-bold text-neutral-primary leading-[100%] shrink-0">Requests</span>

                        <div class="flex flex-wrap items-center justify-end gap-1 flex-1">
                            <div class="relative w-full sm:w-[254px]">
                                <div
                                    class="absolute left-2 top-1/2 -translate-y-1/2 h-6 w-6 text-neutral-primary/40 flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                </div>
                                <input type="text" placeholder="Search: unit, title, vendor, category..."
                                    class="w-full py-3 pl-[38px] pr-[15px] rounded-[80px] border border-neutral-primary/10 text-[12px] font-semibold text-neutral-primary placeholder:text-neutral-primary/40 leading-[100%] tracking-[-2%] focus:outline-none">
                            </div>

                            <div class="relative w-full sm:w-auto">
                                <select
                                    class="w-full sm:w-[162px] py-[13px] px-5 rounded-[80px] border border-neutral-primary/10 text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] appearance-none outline-none">
                                    <option value="">All Properties</option>
                                </select>
                                <div
                                    class="absolute right-[15px] top-1/2 -translate-y-1/2 h-5 w-5 flex items-center justify-center pointer-events-none text-neutral-primary">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>

                            <div class="relative w-full sm:w-auto">
                                <select
                                    class="w-full sm:w-[148px] py-[13px] px-5 rounded-[80px] border border-neutral-primary/10 text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] appearance-none outline-none">
                                    <option value="">All Statuses</option>
                                </select>
                                <div
                                    class="absolute right-[15px] top-1/2 -translate-y-1/2 h-5 w-5 flex items-center justify-center pointer-events-none text-neutral-primary">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>

                            <div class="relative w-full sm:w-auto">
                                <select
                                    class="w-full sm:w-[156px] py-[13px] px-5 rounded-[80px] border border-neutral-primary/10 text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] appearance-none outline-none">
                                    <option value="">All Priority</option>
                                </select>
                                <div
                                    class="absolute right-[15px] top-1/2 -translate-y-1/2 h-5 w-5 flex items-center justify-center pointer-events-none text-neutral-primary">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>

                            <button
                                class="w-full sm:w-auto py-[13px] px-5 rounded-[80px] border border-neutral-primary text-[12px] font-extrabold text-neutral-primary uppercase leading-[100%] tracking-[-2%] whitespace-nowrap">
                                CLEAR
                            </button>
                        </div>
                    </div>

                    <!-- Table -->
                    <div class="overflow-x-auto">
                        <table class="w-full min-w-[900px]">
                            <thead>
                                <tr
                                    class="h-11 border-y border-neutral-primary/10 bg-[#FAFAFA] text-left text-[14px] font-bold text-neutral-primary leading-[100%] tracking-[-2%]">
                                    <th class="pl-6 pr-2 pt-[14px] pb-[13px]">Title</th>
                                    <th class="px-2 pt-[14px] pb-[13px]">Property</th>
                                    <th class="px-2 pt-[14px] pb-[13px]">Unit</th>
                                    <th class="px-2 pt-[14px] pb-[13px]">Category</th>
                                    <th class="px-2 pt-[14px] pb-[13px]">Priority</th>
                                    <th class="px-2 pt-[14px] pb-[13px]">Status</th>
                                    <th class="px-2 pt-[14px] pb-[13px]">Date</th>
                                    <th class="px-2 pt-[14px] pb-[13px]">Assigned</th>
                                    <th class="px-2 pt-[14px] pb-[13px]">Estimate</th>
                                    <th class="px-2 pr-6 pt-[14px] pb-[13px] w-px">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(req, i) in requests" :key="i"
                                    class="border-b border-neutral-primary/10 last:border-b-0 text-[14px] font-semibold leading-[100%] tracking-[-2%] text-neutral-primary/60">
                                    <td class="pl-6 pr-2 py-4 w-[152px] text-neutral-primary leading-4">{{ req.title }}
                                    </td>
                                    <td class="px-2 py-6">{{ req.property }}</td>
                                    <td class="px-2 py-6">{{ req.unit }}</td>
                                    <td class="px-2 py-4 text-neutral-primary leading-4 w-[96px]">{{ req.category }}
                                    </td>
                                    <td class="px-2 py-4 text-neutral-primary whitespace-nowrap">
                                        <span class="flex items-center gap-[4px]">
                                            <span class="w-[8px] h-[8px] rounded-full shrink-0"
                                                :style="{ background: req.priorityColor }"></span>
                                            {{ req.priority }}
                                        </span>
                                    </td>
                                    <td :class="['px-2 py-4 w-[86px] leading-4', req.statusColor]">
                                        {{ req.status }}</td>
                                    <td class="px-2 py-6 text-neutral-primary">{{ req.date }}</td>
                                    <td class="px-2 py-6">{{ req.assigned }}</td>
                                    <td class="px-2 py-6">{{ req.estimate }}</td>
                                    <td class="px-2 pr-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center gap-1">
                                            <button
                                                class="rounded-full h-8 w-8 bg-neutral-primary text-primary flex items-center justify-center">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                                    stroke-linejoin="round">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </button>
                                            <button
                                                class="border border-neutral-primary/10 rounded-full h-8 w-8 text-neutral-primary flex items-center justify-center">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                                    <path d="M13.5 6.5l4 4" />
                                                </svg>
                                            </button>
                                            <button
                                                class="border border-neutral-primary/10 rounded-full h-8 w-8 text-neutral-primary flex items-center justify-center">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round">
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

            </main>

        </div>

    </div>

    <!-- Modals -->
    <AddServiceProModal :isOpen="showAddServicePro" @close="showAddServicePro = false" />
    <NewRequestModal :open="showNewRequest" @close="showNewRequest = false" />
    <InviteServiceProModal :isOpen="showInviteServicePro" @close="showInviteServicePro = false" />
</template>
