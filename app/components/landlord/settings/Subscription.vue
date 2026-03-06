<script setup>
const planDetails = ref({
    name: 'Pro plan',
    nextPaymentText: 'Next payment of $83.00/monthly on February 19',
    description: 'You can upgrade or modify your account subscription at any time.'
})

const billingHistory = ref([
    {
        id: 1,
        status: '',
        date: 'Jan 19, 2026',
        amount: '$83.00',
        plan: 'Subscription Pro',
        billingPeriod: 'Monthly'
    }
])
</script>

<template>
    <div>
        <div
            class="px-6 py-[14px] border-b border-[#0F11141A] flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0">
            <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%]">Subscription</h2>
            <div class="flex flex-wrap items-center gap-2">
                <button
                    class="py-[9px] px-4 rounded-[80px] border border-[#0F1114] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] whitespace-nowrap">
                    CHANGE PLAN
                </button>
                <button
                    class="py-[9px] px-4 rounded-[80px] border border-[#0F1114] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] whitespace-nowrap">
                    ACTIONS
                </button>
            </div>
        </div>

        <div class="px-6 py-6 border-b border-[#0F11141A]">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

                <div class="border border-[#0F11141A] rounded-[12px] overflow-hidden flex flex-col h-full">
                    <div class="px-4 pt-[14px] pb-[13px] border-b border-[#0F11141A]">
                        <h3 class="text-[14px] font-bold text-[#0F1114] leading-[100%]">My Plan</h3>
                    </div>

                    <div class="p-[17px] pt-[13px] flex flex-col flex-1">
                        <div class="text-[14px] font-bold text-[#0F1114] leading-[100%] mb-[5px]">
                            {{ planDetails.name }}
                        </div>
                        <div class="text-[12px] font-semibold text-[#0F111499] leading-[100%] mb-[3px]">
                            {{ planDetails.nextPaymentText }}
                        </div>
                        <div class="text-[12px] font-semibold text-[#0F111499] leading-[100%] mb-[13px]">
                            {{ planDetails.description }}
                        </div>

                        <div class="flex flex-col gap-2 mt-auto">
                            <button
                                class="w-full py-[14px] rounded-[80px] bg-[#0F1114] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%] hover:opacity-90 transition-opacity">
                                SWITCH TO YEARLY
                            </button>
                            <button
                                class="w-full py-[13px] rounded-[80px] border border-[#0F1114] text-[#0F1114] text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%] hover:bg-[#F5F5F5] transition-colors bg-white">
                                PAUSE SUBSCRIPTION
                            </button>
                            <button
                                class="w-full py-[14px] rounded-[80px] text-[#CC2929] text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%] hover:bg-[#FFEEEE] transition-colors mt-1">
                                CANCEL SUBSCRIPTION
                            </button>
                        </div>
                    </div>
                </div>

                <div class="border border-[#0F11141A] rounded-[12px] overflow-hidden flex flex-col h-full">
                    <div class="px-4 pt-[14px] pb-[13px] border-b border-[#0F11141A]">
                        <h3 class="text-[14px] font-bold text-[#0F1114] leading-[100%]">My Cards</h3>
                    </div>

                    <div class="p-[14px] pt-[13px]">
                        <p class="ml-[3px] text-[12px] font-semibold text-[#0F111499] leading-[100%] mb-[13px]">
                            Add and manage saved payment methods.
                        </p>

                        <div class="flex flex-wrap sm:flex-nowrap items-center gap-2 mt-auto">
                            <button
                                class="w-full sm:w-auto justify-center py-3 pl-[18px] pr-[21px] rounded-[80px] flex items-center gap-[10px] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%] hover:opacity-90 transition-opacity whitespace-nowrap"
                                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                                ADD CARD
                            </button>
                            <button
                                class="w-full sm:w-auto py-[13px] px-5 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] hover:bg-[#F5F5F5] transition-colors whitespace-nowrap">
                                SET DEFAULT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="p-6 pt-5 border-b border-[#0F11141A]">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-[22px]">
                <div>
                    <h3 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[4px]">Billing history</h3>
                    <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-0.02em]">From date to date
                    </p>
                </div>

                <div class="flex flex-col sm:flex-row items-center gap-3">
                    <div class="relative w-full sm:w-[134px]">
                        <input type="date" value="2026-02-01" readonly
                            class="w-full pl-[21px] pr-[15px] py-[11px] rounded-[80px] border border-[#0F11141A] text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] outline-none cursor-pointer" />
                        <div class="absolute right-[15px] top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </div>
                    </div>
                    <div class="relative w-full sm:w-[134px]">
                        <input type="text" value="28-02-2026" readonly
                            class="w-full pl-[21px] pr-[15px] py-[11px] rounded-[80px] border border-[#0F11141A] text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] outline-none cursor-pointer" />
                        <div class="absolute right-[15px] top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div class="border border-[#0F11141A] rounded-[12px] overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr class="bg-[#FAFAFA] border-b border-[#0F11141A] h-11">
                                <th
                                    class="pl-6 pr-4 text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                    Status</th>
                                <th class="px-4 text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                    Date</th>
                                <th class="px-4 text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                    Amount</th>
                                <th class="px-4 text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                    Plan</th>
                                <th class="px-4 text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                    Billing Period</th>
                                <th
                                    class="pl-4 pr-6 text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] w-px">
                                    Receipt</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in billingHistory" :key="item.id">
                                <td class="pl-5 pr-4 py-[21px]"></td>
                                <td
                                    class="px-4 py-[21px] text-[14px] font-semibold text-[#0F1114CC] leading-[100%] tracking-[-2%]">
                                    {{ item.date }}</td>
                                <td
                                    class="px-4 py-[21px] text-[14px] font-semibold text-[#0F1114CC] leading-[100%] tracking-[-2%]">
                                    {{ item.amount }}</td>
                                <td
                                    class="px-4 py-[21px] text-[14px] font-semibold text-[#0F1114CC] leading-[100%] tracking-[-2%]">
                                    {{ item.plan }}</td>
                                <td
                                    class="px-4 py-[21px] text-[14px] font-semibold text-[#0F1114CC] leading-[100%] tracking-[-2%]">
                                    {{ item.billingPeriod }}</td>
                                <td class="pl-4 pr-6 py-[14px]">
                                    <button
                                        class="w-8 h-8 rounded-full bg-[#0F1114] flex items-center justify-center hover:opacity-80 transition-opacity">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="px-[22px] pt-5 pb-[25px]">
            <h3 class="ml-[3px] text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[4px]">Invoices</h3>
            <p class="ml-[3px] text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-0.02em] mb-[12px]">Download
                and manage invoices.
            </p>

            <button
                class="py-[13px] px-5 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] hover:bg-[#F5F5F5] transition-colors">
                DOWNLOAD
            </button>
        </div>
    </div>
</template>
