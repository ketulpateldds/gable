<script setup>
import Navbar from '@/components/landlord/Navbar.vue'
import Sidebar from '~/components/tenant/Sidebar.vue'

const dashboardCards = [
    {
        title: "Outstanding Leases",
        description: "Lease items needing review or signature.",
        value: "2 pending",
        subText: "Updated today",
        action: {
            label: "View Leases",
            link: "/tenant/dashboard"
        },
        status: {
            label: "2",
            paddingTop: '4px',
            paddingBottom: '4px',
            paddingX: '6px'
        },
    },
    {
        title: "Service Providers",
        description: "Vendors assigned to your unit / building.",
        value: "4 active",
        subText: "Plumbing, Electrical...",
        action: {
            label: "Request Service",
            link: "/tenant/dashboard"
        },
        status: {
            label: "4",
            paddingTop: '4px',
            paddingBottom: '4px',
            paddingX: '6px'
        },
    },
    {
        title: "Inspection",
        description: "Upcoming or recent inspection status.",
        value: "Feb 2",
        subText: "2:00 PM",
        action: {
            label: "Details",
            link: "/tenant/dashboard"
        },
        status: {
            label: "SCHEDULED",
            paddingTop: '6px',
            paddingBottom: '7px',
            paddingX: '12px'
        },
    }
];

</script>

<template>
    <div class="relative flex min-h-screen bg-primary font-sans overflow-x-hidden">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-4 sm:px-6 pt-[19px] pb-10 flex flex-col">

                <div class="mb-5">
                    <h1 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[4px]">Dashboard</h1>
                    <p class="text-[12px] text-[#0F111499] font-medium leading-4 tracking-[-2%]">Quick view of your
                        lease, services, inspections, and account balance.</p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
                    <div v-for="card in dashboardCards" :key="card.title">
                        <div
                            class="relative rounded-[24px] border border-[#0F11141A] py-[23px] px-6 flex flex-col justify-center">
                            <div class="absolute top-4 right-4 border border-[#004CE580] bg-[#004CE505] flex items-center justify-center rounded-[40px]"
                                :style="{
                                    paddingTop: card.status.paddingTop,
                                    paddingBottom: card.status.paddingBottom,
                                    paddingLeft: card.status.paddingX,
                                    paddingRight: card.status.paddingX
                                }">
                                <p
                                    class="text-[10px] font-extrabold text-[#004CE5] uppercase leading-[100%] tracking-[5%]">
                                    {{ card.status.label }}</p>
                            </div>

                            <div class="mb-[14px]">
                                <h2
                                    class="text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[5%] mb-[6px]">
                                    {{ card.title }}</h2>
                                <p class="text-[12px] font-medium text-[#0F111499] leading-[100%]">{{ card.description
                                }}
                                </p>
                            </div>

                            <div>
                                <h2 class="text-[20px] font-bold text-[#0F1114] leading-7 mb-[6px]">{{ card.value }}
                                </h2>

                                <div class="flex items-center justify-between gap-2">
                                    <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%]">{{ card.subText
                                    }}</p>
                                    <div
                                        class="text-[#004CE5] text-[12px] font-bold leading-[100%] flex items-center gap-[6px]">
                                        {{ card.action.label }}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M5 12l14 0" />
                                            <path d="M15 16l4 -4" />
                                            <path d="M15 8l4 4" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[11px]">Account Summary</h1>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="border border-[#0F11141A] rounded-[24px]">
                            <div class="relative py-[21px] px-6 border-b border-[#0F11141A]">
                                <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[2px]">Balances</h2>
                                <p class="text-[12px] font-medium text-[#0F111499] leading-[100%]">A quick snapshot of
                                    what’s due and what’s on account.</p>

                                <div
                                    class="absolute top-4 right-4 bg-[#004CE505] border border-[#004CE580] rounded-[40px] pt-[6px] pb-[7px] px-3">
                                    <p
                                        class="text-[10px] font-bold text-[#004CE5] uppercase leading-[100%] tracking-[5%]">
                                        This month
                                    </p>
                                </div>
                            </div>

                            <div
                                class="pt-[22px] pb-[21px] px-6 border-b border-[#0F11141A] flex items-center justify-between">
                                <h2 class="text-[14px] font-bold text-[#0F1114] leading-[100%]">Outstanding</h2>
                                <p class="text-[14px] font-extrabold text-[#0F111499] leading-[100%]">$1,250.00</p>
                            </div>

                            <div
                                class="pt-[22px] pb-[21px] px-6 border-b border-[#0F11141A] flex items-center justify-between">
                                <h2 class="text-[14px] font-bold text-[#0F1114] leading-[100%]">Deposits</h2>
                                <p class="text-[14px] font-extrabold text-[#0F111499] leading-[100%]">$2,000.00</p>
                            </div>

                            <div
                                class="pt-[22px] pb-[21px] px-6 border-b border-[#0F11141A] flex items-center justify-between">
                                <h2 class="text-[14px] font-bold text-[#0F1114] leading-[100%]">Credits</h2>
                                <p class="text-[14px] font-extrabold text-[#0F111499] leading-[100%]">$75.00</p>
                            </div>

                            <div class="pt-[23px] pb-[22px] px-6 flex items-center justify-between">
                                <h2 class="text-[12px] font-bold text-[#0F1114] leading-[100%]">Last payment: Jan 5</h2>
                                <div
                                    class="text-[#004CE5] text-[12px] font-bold leading-[100%] flex items-center gap-[6px]">
                                    Go To Rent
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M5 12l14 0" />
                                        <path d="M15 16l4 -4" />
                                        <path d="M15 8l4 4" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div class="border border-[#0F11141A] rounded-[24px]">
                            <div class="relative py-[21px] px-6 border-b border-[#0F11141A]">
                                <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[2px]">Quick Actions
                                </h2>
                                <p class="text-[12px] font-medium text-[#0F111499] leading-[100%]">Common tenant
                                    actions.</p>

                                <div
                                    class="absolute top-4 right-4 bg-[#004CE505] border border-[#004CE580] rounded-[40px] pt-[6px] pb-[7px] px-3">
                                    <p
                                        class="text-[10px] font-bold text-[#004CE5] uppercase leading-[100%] tracking-[5%]">
                                        Shortcuts
                                    </p>
                                </div>
                            </div>

                            <div
                                class="pt-[22px] pb-[21px] px-6 border-b border-[#0F11141A] flex items-center gap-[5px]">
                                <h2 class="text-[14px] font-bold text-[#0F1114] leading-[100%]">Pay Rent</h2>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 12l14 0" />
                                    <path d="M15 16l4 -4" />
                                    <path d="M15 8l4 4" />
                                </svg>
                            </div>

                            <div
                                class="pt-[22px] pb-[21px] px-6 border-b border-[#0F11141A] flex items-center gap-[5px]">
                                <h2 class="text-[14px] font-bold text-[#0F1114] leading-[100%]">Submit Request</h2>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 12l14 0" />
                                    <path d="M15 16l4 -4" />
                                    <path d="M15 8l4 4" />
                                </svg>
                            </div>

                            <div
                                class="pt-[22px] pb-[21px] px-6 border-b border-[#0F11141A] flex items-center gap-[5px]">
                                <h2 class="text-[14px] font-bold text-[#0F1114] leading-[100%]">View Messages</h2>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 12l14 0" />
                                    <path d="M15 16l4 -4" />
                                    <path d="M15 8l4 4" />
                                </svg>
                            </div>

                            <div class="pt-[23px] pb-[22px] px-6 flex items-center justify-between">
                                <h2 class="text-[12px] font-bold text-[#0F1114] leading-[100%]">Last payment: Jan 5</h2>
                                <div
                                    class="text-[#004CE5] text-[12px] font-bold leading-[100%] flex items-center gap-[6px]">
                                    Message PM
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M5 12l14 0" />
                                        <path d="M15 16l4 -4" />
                                        <path d="M15 8l4 4" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </main>

        </div>
    </div>
</template>
