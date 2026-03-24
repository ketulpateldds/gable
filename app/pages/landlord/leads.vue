<script setup lang="ts">
import Sidebar from '@/components/landlord/Sidebar.vue'
import Navbar from '@/components/landlord/Navbar.vue'

const activeFilter = ref('ALL')
const statuses = ['ALL', 'NEW', 'WARM', 'TOUR SCHEDULED', 'APPLIED', 'CONTACTED']

const leadsData = [
    {
        id: 1,
        initial: 'J',
        initialClass: 'bg-status-info-bg text-status-info-text border-status-info-border',
        name: 'Jordan Lee',
        email: 'jordan@example.com',
        phone: '415-555-0112',
        tags: ['LISTING WEBSITE', 'HOT'],
        property: 'California Building',
        unit: 'Apartment • Unit 1',
        status: 'NEW',
        statusDisplay: 'New',
        statusClass: 'bg-status-info-bg text-status-info-text border-status-info-border',
        lastContact: 'Today • 9:10 AM',
        nextStep: 'Send application link'
    },
    {
        id: 2,
        initial: 'S',
        initialClass: 'bg-status-info-bg text-status-info-text border-status-info-border',
        name: 'Sam Patel',
        email: 'sam@example.com',
        phone: '415-555-0199',
        tags: ['ZILLOW', 'WARM'],
        property: 'California Building',
        unit: 'Room • Unit 1',
        status: 'WARM',
        statusDisplay: 'Warm',
        statusClass: 'bg-status-warning-bg text-status-warning-text border-status-warning-border',
        lastContact: 'Yesterday • 4:22 PM',
        nextStep: 'Confirm tour time'
    },
    {
        id: 3,
        initial: 'A',
        initialClass: 'bg-status-info-bg text-status-info-text border-status-info-border',
        name: 'Alex Rivera',
        email: 'alex@example.com',
        phone: '415-555-0144',
        tags: ['REFERRAL', 'HOT'],
        property: 'Oak Apartments',
        unit: 'Apartment • Unit 2B',
        status: 'TOUR SCHEDULED',
        statusDisplay: 'Tour Scheduled',
        statusClass: 'bg-status-info-bg text-status-info-text border-status-info-border',
        lastContact: 'Today • 11:05 AM',
        nextStep: 'Tour today at 2:30 PM'
    },
    {
        id: 4,
        initial: 'C',
        initialClass: 'bg-status-info-bg text-status-info-text border-status-info-border',
        name: 'Casey Park',
        email: 'casey@example.com',
        phone: '415-555-0133',
        tags: ['LISTING WEBSITE', 'WARM'],
        property: 'Sunset Duplex',
        unit: 'Apartment • Unit A',
        status: 'APPLIED',
        statusDisplay: 'Applied',
        statusClass: 'bg-status-warning-bg text-status-warning-text border-status-warning-border',
        lastContact: '2 days ago',
        nextStep: 'Review application'
    },
    {
        id: 5,
        initial: 'M',
        initialClass: 'bg-status-info-bg text-status-info-text border-status-info-border',
        name: 'Maya Chen',
        email: 'maya@example.com',
        phone: '415-555-0177',
        tags: ['WALK-IN', 'LOW'],
        property: 'California Building',
        unit: 'Parking Space',
        status: 'CONVERTED',
        statusDisplay: 'Converted',
        statusClass: 'bg-status-success-bg text-status-success-text border-status-success-border',
        lastContact: 'Last week',
        nextStep: '-'
    }
]

const filteredLeads = computed(() => {
    if (activeFilter.value === 'ALL') {
        return leadsData
    }
    return leadsData.filter(lead => lead.status === activeFilter.value)
})
</script>

<template>
    <div class="flex min-h-screen bg-primary font-figtree overflow-x-hidden">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-4 lg:px-6 pt-[19px] pb-10 flex flex-col">

                <!-- Header -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                    <div>
                        <h1 class="text-[20px] font-bold text-neutral-primary leading-[100%] mb-[4px]">Leads</h1>
                        <p class="text-[12px] text-neutral-primary/60 font-medium leading-4 tracking-[-2%]">Track and
                            manage prospective tenants.</p>
                    </div>

                    <div class="flex items-center gap-2 flex-wrap w-full sm:w-auto">
                        <button
                            class="flex-1 sm:flex-none justify-center py-[13px] px-5 rounded-[80px] border border-neutral-primary text-[12px] font-extrabold text-neutral-primary uppercase leading-[100%] tracking-[-2%] whitespace-nowrap">
                            EXPORT
                        </button>
                        <button
                            class="flex-1 sm:flex-none justify-center py-[12px] px-5 rounded-[80px] text-[12px] font-extrabold text-primary uppercase leading-[100%] tracking-[-2%] flex items-center gap-[10px] whitespace-nowrap"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 5l0 14" />
                                <path d="M5 12l14 0" />
                            </svg>
                            ADD LEAD
                        </button>
                    </div>
                </div>

                <!-- Cards -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div
                        class="rounded-[24px] border border-neutral-primary/10 pt-[22px] pb-[23px] px-6 flex flex-col justify-center">
                        <div
                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-[7px]">
                            Active leads</div>
                        <div class="text-[16px] font-bold text-neutral-primary leading-5 tracking-[-2%] mb-[6px]">
                            3</div>
                        <div class="text-[12px] font-semibold text-neutral-primary/60 leading-[100%]">New + Warm + Tours
                        </div>
                    </div>

                    <div
                        class="rounded-[24px] border border-neutral-primary/10 pt-[22px] pb-[23px] px-6 flex flex-col justify-center">
                        <div
                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-[7px]">
                            Avg response time</div>
                        <div class="text-[16px] font-bold text-neutral-primary leading-5 tracking-[-2%] mb-[6px]">
                            2h 14m</div>
                        <div class="text-[12px] font-semibold text-neutral-primary/60 leading-[100%]">Last 7 days
                        </div>
                    </div>

                    <div
                        class="rounded-[24px] border border-neutral-primary/10 pt-[22px] pb-[23px] px-6 flex flex-col justify-center">
                        <div
                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-[7px]">
                            Tours this week</div>
                        <div class="text-[16px] font-bold text-neutral-primary leading-5 tracking-[-2%] mb-[6px]">
                            1</div>
                        <div class="text-[12px] font-semibold text-neutral-primary/60 leading-[100%]">Scheduled tours
                        </div>
                    </div>

                    <div
                        class="rounded-[24px] border border-neutral-primary/10 pt-[22px] pb-[23px] px-6 flex flex-col justify-center">
                        <div
                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-[7px]">
                            Conversion rate</div>
                        <div class="text-[16px] font-bold text-neutral-primary leading-5 tracking-[-2%] mb-[6px]">
                            18%</div>
                        <div class="text-[12px] font-semibold text-neutral-primary/60 leading-[100%]">Converted / Total
                        </div>
                    </div>
                </div>

                <!-- Table Section -->
                <div class="border border-neutral-primary/10 rounded-[24px] overflow-hidden mb-6">

                    <!-- Search and Filter -->
                    <div class="p-4 lg:p-6 flex flex-col xl:flex-row xl:items-center justify-between gap-4 xl:gap-2">
                        <div
                            class="flex items-center gap-1 w-full xl:max-w-[346px] overflow-x-auto scrollbar-hide py-1">
                            <button v-for="tab in statuses" :key="tab" @click="activeFilter = tab" :class="[
                                'px-4 rounded-[80px] text-[12px] uppercase leading-[100%] tracking-[-0.02em] whitespace-nowrap transition-colors',
                                activeFilter === tab
                                    ? 'bg-neutral-primary text-primary font-bold py-[10px]'
                                    : 'text-neutral-primary border border-neutral-primary/10 font-semibold py-[9px]'
                            ]">
                                {{ tab }}
                            </button>
                        </div>

                        <div
                            class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-1 w-full xl:w-auto">
                            <div class="relative w-full sm:w-[254px]">
                                <div
                                    class="absolute left-2 top-1/2 -translate-y-1/2 h-6 w-6 text-neutral-primary/40 flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                </div>
                                <input type="text" placeholder="Search: name, email, phone"
                                    class="w-full py-3 pl-[38px] pr-[25px] rounded-[80px] border border-neutral-primary/10 text-[12px] font-semibold text-neutral-primary placeholder:text-neutral-primary/40 leading-[100%] tracking-[-2%] focus:outline-none">
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
                                    <option value="">All sources</option>
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
                                    <option value="">All Priorities</option>
                                </select>
                                <div
                                    class="absolute right-[15px] top-1/2 -translate-y-1/2 h-5 w-5 flex items-center justify-center pointer-events-none text-neutral-primary">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Table -->
                    <div class="w-full overflow-x-auto scrollbar-hide">
                        <table class="w-full min-w-[1000px]">
                            <thead>
                                <tr
                                    class="bg-[#FAFAFA] border-y border-neutral-primary/10 h-11 text-left text-[14px] font-bold text-neutral-primary leading-[100%] tracking-[-2%]">
                                    <th class="pt-[14px] pb-[13px] pl-4 lg:pl-6 pr-2">Lead</th>
                                    <th class="pt-[14px] pb-[13px] px-2">Property</th>
                                    <th class="pt-[14px] pb-[13px] px-2">Unit</th>
                                    <th class="pt-[14px] pb-[13px] px-2">Status</th>
                                    <th class="pt-[14px] pb-[13px] px-2">Last contact</th>
                                    <th class="pt-[14px] pb-[13px] px-2">Next step</th>
                                    <th class="pt-[14px] pb-[13px] pr-6 pl-2 w-px">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="lead in filteredLeads" :key="lead.id"
                                    class="border-b border-neutral-primary/10 last:border-0 text-[14px] text-neutral-primary/60 font-semibold leading-[100%] tracking-[-2%]">
                                    <td class="pl-4 lg:pl-6 py-4 pr-2">
                                        <div class="flex items-start gap-3">
                                            <div
                                                :class="['w-8 h-8 rounded-[8px] border flex items-center justify-center text-[12px] font-extrabold leading-[100%] tracking-[-2%] shrink-0', lead.initialClass]">
                                                {{ lead.initial }}
                                            </div>
                                            <div>
                                                <div class="text-neutral-primary mb-[2px]">{{ lead.name }}</div>
                                                <div class="text-[12px] mb-[9px]">{{ lead.email }} • {{ lead.phone }}
                                                </div>
                                                <div class="ml-[-4px] flex items-center gap-1 flex-wrap">
                                                    <span v-for="(tag, idx) in lead.tags" :key="idx"
                                                        class="px-3 py-1.5 rounded-[80px] border border-neutral-primary/10 text-[10px] font-semibold text-neutral-primary uppercase leading-[100%] tracking-[-2%]">
                                                        {{ tag }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-6 align-top px-2">{{ lead.property }}</td>
                                    <td class="py-6 align-top px-2">{{ lead.unit }}</td>
                                    <td class="py-6 align-top px-2">
                                        <span
                                            :class="['inline-flex px-3 py-[6px] rounded-[60px] border text-[12px] font-bold leading-[100%] tracking-[-2%]', lead.statusClass]">
                                            {{ lead.statusDisplay }}</span>
                                    </td>
                                    <td class="py-6 align-top px-2">{{ lead.lastContact }}</td>
                                    <td class="py-6 align-top px-2">{{ lead.nextStep }}</td>
                                    <td class="pr-6 pl-2 py-4 align-top">
                                        <button
                                            class="w-8 h-8 rounded-full bg-neutral-primary text-primary flex items-center justify-center">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                                stroke-linejoin="round">
                                                <path d="M5 12h14" />
                                                <path d="m12 5 7 7-7 7" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>

                                <tr v-if="filteredLeads.length === 0">
                                    <td colspan="7" class="px-6 py-8 text-center text-[14px] text-neutral-primary/50">
                                        No leads found matching the selected filter.
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
