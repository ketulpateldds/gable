<script setup>
import Navbar from '@/components/landlord/Navbar.vue'
import Sidebar from '~/components/pro/Sidebar.vue';

const payments = [
    {
        status: "Due",
        bgColor: "#FFF9F2",
        borderColor: '#E599171A',
        textColor: '#A16600',
        dueDate: "Jan 31, 2026",
        category: "Repairs • Oak St Apartments",
        invoice: "Invoice #INV-2031 • Maintenance",
        contact: "Jamie Chen",
        email: "jamie@domain.com",
        total: "$2,450",
        balance: "$2,450",
    },
    {
        status: "Overdue",
        bgColor: "#FFF2F2",
        borderColor: '#CC29291A',
        textColor: '#CC2929',
        dueDate: "Jan 20, 2026",
        category: "Utilities • Pine View",
        invoice: "Invoice #INV-2019 • Gas",
        contact: "Alex Rivera",
        email: "alex@domain.com",
        total: "$1,120",
        balance: "$1,120",
    },
    {
        status: "Scheduled",
        bgColor: "#F2F6FF",
        borderColor: '#004CE51A',
        textColor: '#004CE5',
        dueDate: "Feb 02, 2026",
        category: "Vendor payment • Market St Condo",
        invoice: "Transfer • Contractor payout",
        contact: "Taylor Smith",
        email: "taylor@domain.com",
        total: "$1,800",
        balance: "$0",
    },
    {
        status: "Paid",
        bgColor: "#F2FFF4",
        borderColor: '#21A6351A',
        textColor: '#21A635',
        dueDate: "Jan 05, 2026",
        category: "Rent • Oak St Apartments",
        invoice: "Payment #PAY-9912 • Unit 5",
        contact: "Morgan Lee",
        email: "morgan@domain.com",
        total: "$3,400",
        balance: "$0",
    }
];

</script>

<template>
    <div class="relative flex min-h-screen bg-primary font-sans overflow-x-hidden">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-4 sm:px-6 pt-[19px] pb-10 flex flex-col">

                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                    <div>
                        <h1 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[4px]">Requests</h1>
                        <p class="text-[12px] text-[#0F111499] font-medium leading-4 tracking-[-2%]">Total: 3</p>
                    </div>
                    <div>
                        <button
                            class="pl-[18px] pr-[21px] py-[13px] text-[12px] font-extrabold text-primary rounded-[80px] flex items-center gap-[10px] uppercase leading-[100%] tracking-[-2%]"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-plus">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 0 1 0 2h-6v6a1 1 0 0 1 -2 0v-6h-6a1 1 0 0 1 0 -2h6v-6a1 1 0 0 1 1 -1" />
                            </svg>
                            Add Request
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div class="border border-[#0F11141A] rounded-[12px] px-[17px] pt-[14px] pb-[15px]">
                        <p
                            class="text-[10px] font-extrabold text-[#0F111499] uppercase leading-[100%] tracking-[10%] mb-[9px]">
                            Total outstanding
                        </p>
                        <h1 class="text-[20px] font-extrabold text-[#0F1114] uppercase leading-[100%] mb-[6px]">
                            $12,480</h1>
                        <p class="text-[10px] font-bold text-[#0F111499] leading-[100%]">
                            Across 4 invoices awaiting payment.</p>
                    </div>

                    <div class="border border-[#0F11141A] rounded-[12px] px-[17px] pt-[14px] pb-[15px]">
                        <p
                            class="text-[10px] font-extrabold text-[#0F111499] uppercase leading-[100%] tracking-[10%] mb-[9px]">
                            Scheduled this week
                        </p>
                        <h1 class="text-[20px] font-extrabold text-[#0F1114] uppercase leading-[100%] mb-[6px]">
                            $3,250</h1>
                        <p class="text-[10px] font-bold text-[#0F111499] leading-[100%]">
                            Upcoming scheduled payments and transfers.</p>
                    </div>

                    <div class="border border-[#0F11141A] rounded-[12px] px-[17px] pt-[14px] pb-[15px]">
                        <p
                            class="text-[10px] font-extrabold text-[#0F111499] uppercase leading-[100%] tracking-[10%] mb-[9px]">
                            Paid this month
                        </p>
                        <h1 class="text-[20px] font-extrabold text-[#0F1114] uppercase leading-[100%] mb-[6px]">
                            $18,940</h1>
                        <p class="text-[10px] font-bold text-[#0F111499] leading-[100%]">
                            Completed transactions recorded this month.</p>
                    </div>
                </div>

                <div class="border border-[#0F11141A] rounded-[24px]">
                    <div class="flex flex-col md:flex-row md:items-center justify-between p-4 sm:p-6 gap-4">
                        <div class="relative w-full md:w-[344px]">
                            <svg class="absolute left-2 top-1/2 -translate-y-1/2 text-[#0F111466]"
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <input type="text" placeholder="Search Here"
                                class="w-full h-10 pl-[38px] pr-4 rounded-[80px] border border-[#0F11141A] text-[12px] placeholder:text-[#0F111466] leading-[100%] tracking-[-2%] text-[#0F1114] focus:outline-none" />
                        </div>
                        <div
                            class="flex items-center gap-1 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 shrink-0 scrollbar-hide">
                            <div
                                class="relative flex items-center rounded-[80px] border border-[#0F11141A] overflow-hidden whitespace-nowrap shrink-0">
                                <input type="date"
                                    class="w-full pl-5 pr-[30px] py-[13px] text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em] focus:outline-none bg-transparent appearance-none cursor-pointer" />
                                <span class="absolute right-[17px] pointer-events-none flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
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
                                class="pl-5 pr-[15px] py-[11px] rounded-[80px] border border-[#0F11141A] text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] flex items-center gap-[14px] whitespace-nowrap shrink-0 hover:bg-slate-50 transition-colors">
                                Transaction schedule
                                <div class="h-5 w-5 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="text-[#0F1114]">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </button>
                            <button
                                class="pl-5 pr-[15px] py-[11px] rounded-[80px] border border-[#0F11141A] text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] flex items-center gap-[14px] whitespace-nowrap shrink-0 hover:bg-slate-50 transition-colors">
                                Transaction Status
                                <div class="h-5 w-5 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="text-[#0F1114]">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="w-full min-w-[900px]">
                            <thead>
                                <tr class="h-11 border-y border-[#0F11141A] bg-[#FAFAFA]">
                                    <th
                                        class="pl-6 pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Status</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Due Date</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Category & Property</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Contact</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap w-[124px]">
                                        Total & balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(payment, i) in payments" :key="i"
                                    class="border-b border-[#0F11141A] last:border-b-0 hover:bg-[#F9FAFB] transition-colors">
                                    <td
                                        class="pl-6 pr-1 py-[19px] text-[12px] font-bold leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        <div class="inline-flex items-center gap-[7px] px-3 py-[6px] rounded-full border"
                                            :style="{
                                                backgroundColor: payment.bgColor,
                                                borderColor: payment.borderColor,
                                                color: payment.textColor
                                            }">
                                            {{ payment.status }}
                                        </div>
                                    </td>

                                    <td
                                        class="px-1 py-[21px] text-[14px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">
                                        {{ payment.dueDate }}</td>

                                    <td class="px-1 py-[16px]">
                                        <div
                                            class="text-[12px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] mb-[2px]">
                                            {{ payment.category }}</div>
                                        <div
                                            class="text-[12px] font-bold text-[#0F111499] leading-[100%] tracking-[-2%]">
                                            {{ payment.invoice }}</div>
                                    </td>

                                    <td class="px-1 py-[16px]">
                                        <div
                                            class="text-[12px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] mb-[2px]">
                                            {{ payment.contact }}</div>
                                        <div
                                            class="text-[12px] font-bold text-[#0F111499] leading-[100%] tracking-[-2%]">
                                            {{ payment.email }}</div>
                                    </td>

                                    <td class="py-[16px] pr-6 w-px text-right">
                                        <div
                                            class="text-[12px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] mb-[2px]">
                                            {{ payment.total }}</div>
                                        <div
                                            class="text-[12px] font-bold text-[#0F111499] leading-[100%] tracking-[-2%]">
                                            Balance: {{ payment.balance }}</div>
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
