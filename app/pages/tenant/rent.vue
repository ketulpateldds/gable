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

const payments = [
    {
        status: "Due",
        bgColor: "#FFF9F2",
        borderColor: '#E599171A',
        textColor: '#A16600',
        dueDate: "2026-02-01",
        category: "Rent",
        property: "Gable Apartments • Unit 3",
        contact: "Property Manager",
        total: "$1,250.00",
        balance: "$1,250.00",
    },
    {
        status: "Scheduled",
        bgColor: "#F2F6FF",
        borderColor: '#004CE51A',
        textColor: '#004CE5',
        dueDate: "2026-02-01",
        category: "Auto-pay",
        property: "Gable Apartments • Unit 3",
        contact: "Property Manager",
        total: "$1,250.00",
        balance: "$1,250.00",
    },
    {
        status: "Paid",
        bgColor: "#F2FFF4",
        borderColor: '#21A6351A',
        textColor: '#21A635',
        dueDate: "2026-01-01",
        category: "Rent",
        property: "Gable Apartments • Unit 3",
        contact: "Property Manager",
        total: "$1,250.00",
        balance: "$0.00",
    },
    {
        status: "Paid",
        bgColor: "#F2FFF4",
        borderColor: '#21A6351A',
        textColor: '#21A635',
        dueDate: "2025-12-01",
        category: "Rent",
        property: "Gable Apartments • Unit 3",
        contact: "Property Manager",
        total: "$1,250.00",
        balance: "$0.00",
    },
    {
        status: "Due",
        bgColor: "#FFF9F2",
        borderColor: '#E599171A',
        textColor: '#A16600',
        dueDate: "2026-02-10",
        category: "Late fee",
        property: "Gable Apartments • Unit 3",
        contact: "Property Manager",
        total: "$50.00",
        balance: "$50.00",
    }
];

</script>

<template>
    <div class="relative flex min-h-screen bg-primary font-sans overflow-x-hidden">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-6 pt-[19px] pb-10 flex flex-col">

                <div class="mb-5">
                    <h1 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[4px]">Rent</h1>
                    <p class="text-[12px] text-[#0F111499] font-medium leading-4 tracking-[-2%]">View your outstanding
                        balance and transaction history.</p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                    <div
                        class="relative rounded-[24px] border border-[#0F11141A] py-[23px] px-6 flex flex-col justify-center">
                        <div
                            class="absolute top-4 right-4 border border-[#004CE580] bg-[#004CE505] flex items-center justify-center rounded-[40px] pt-[6px] pb-[7px] px-[11px]">
                            <p class="text-[10px] font-extrabold text-[#004CE5] uppercase leading-[100%] tracking-[5%]">
                                Due</p>
                        </div>

                        <div class="mb-[14px]">
                            <h2
                                class="text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[5%] mb-[6px]">
                                Outstanding</h2>
                            <p class="text-[12px] font-medium text-[#0F111499] leading-[100%]">Total due across open
                                charges.
                            </p>
                        </div>

                        <div>
                            <h2 class="text-[20px] font-bold text-[#0F1114] leading-7 mb-[6px]">$1,300.00
                            </h2>
                            <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%]">Next due: <span
                                    class="text-[#0F1114]">Feb 1</span></p>
                        </div>
                    </div>

                    <div
                        class="relative rounded-[24px] border border-[#0F11141A] py-[23px] px-6 flex flex-col justify-center">
                        <div
                            class="absolute top-4 right-4 border border-[#004CE580] bg-[#004CE505] flex items-center justify-center rounded-[40px] pt-[6px] pb-[7px] px-[11px]">
                            <p class="text-[10px] font-extrabold text-[#004CE5] uppercase leading-[100%] tracking-[5%]">
                                Secure</p>
                        </div>

                        <div class="mb-[14px]">
                            <h2
                                class="text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[5%] mb-[6px]">
                                Pay online</h2>
                            <p class="text-[12px] font-medium text-[#0F111499] leading-[100%]">Fastest way to pay and
                                track receipts.
                            </p>
                        </div>

                        <div>
                            <h2 class="text-[20px] font-bold text-[#0F1114] leading-7 mb-[6px]">Online
                            </h2>
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
                </div>

                <div class="border border-[#0F11141A] rounded-[24px]">
                    <div class="flex flex-col md:flex-row md:items-center justify-between p-6 gap-4">
                        <div class="relative w-full md:w-[344px]">
                            <svg class="absolute left-2 top-1/2 -translate-y-1/2 text-[#0F111466]"
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <input type="text" placeholder="Search: name, unit, property, phone, email..."
                                class="w-full h-10 pl-[38px] pr-4 rounded-[80px] border border-[#0F11141A] text-[12px] placeholder:text-[#0F111466] leading-[100%] tracking-[-2%] text-[#0F1114] focus:outline-none" />
                        </div>
                        <div class="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
                            <div
                                class="relative flex items-center rounded-[80px] border border-[#0F11141A] overflow-hidden whitespace-nowrap">
                                <input type="date"
                                    class="w-full pl-5 pr-8 py-[9px] text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em] focus:outline-none bg-transparent appearance-none cursor-pointer" />
                                <span class="absolute right-[15px] pointer-events-none flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="#0F1114" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                </span>
                            </div>
                            <button
                                class="pl-5 pr-[15px] py-[11px] rounded-[80px] border border-[#0F11141A] text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] flex items-center gap-[14px] whitespace-nowrap hover:bg-slate-50 transition-colors">
                                Transaction schedule
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="text-[#0F1114]">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                            <button
                                class="pl-5 pr-[15px] py-[11px] rounded-[80px] border border-[#0F11141A] text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] flex items-center gap-[14px] whitespace-nowrap hover:bg-slate-50 transition-colors">
                                Transaction schedule
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="text-[#0F1114]">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="w-full min-w-[900px]">
                            <thead>
                                <tr class="h-11 border-y border-[#0F11141A] bg-[#FAFAFA]">
                                    <th
                                        class="pl-6 pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Status</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Due Date</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Category</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Property</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Contact</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] whitespace-nowrap w-[124px]">
                                        Total</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(payment, i) in payments" :key="i"
                                    class="border-b border-[#0F11141A] last:border-b-0 hover:bg-[#F9FAFB] transition-colors">
                                    <td
                                        class="pl-6 pr-1 pt-[17px] pb-4 text-[14px] font-semibold leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        <div class="inline-flex items-center gap-[7px] px-3 py-[5px] rounded-full border"
                                            :style="{
                                                backgroundColor: payment.bgColor,
                                                borderColor: payment.borderColor,
                                                color: payment.textColor
                                            }">
                                            <div class="w-[6px] h-[6px] rounded-full"
                                                :style="{ backgroundColor: payment.textColor }"></div>

                                            {{ payment.status }}
                                        </div>
                                    </td>

                                    <td
                                        class="px-1 py-[21px] text-[14px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">
                                        {{ payment.dueDate }}</td>

                                    <td
                                        class="px-1 py-[21px] text-[14px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">
                                        {{ payment.category }}</td>

                                    <td
                                        class="px-1 py-[21px] text-[14px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">
                                        {{ payment.property }}</td>

                                    <td
                                        class="px-1 py-[21px] text-[14px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">
                                        {{ payment.contact }}</td>

                                    <td
                                        class="px-1 py-[21px] text-[14px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">
                                        {{ payment.total }}</td>

                                    <td
                                        class="py-[21px] pr-6 text-[14px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%] w-px whitespace-nowrap">
                                        {{ payment.balance }}
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
