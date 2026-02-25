<script setup>
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'
import AddTransactionModal from '@/components/AddTransactionModal.vue'

const activeTab = ref('accounting')
const isAddTransactionOpen = ref(false)
</script>

<template>
    <div class="flex min-h-screen bg-primary font-sans overflow-x-hidden">
        <Sidebar :active-tab="activeTab" />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-6 pt-[19px] pb-10 flex flex-col">

                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                    <div>
                        <h1 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[4px]">Accounting</h1>
                        <p class="text-[12px] text-[#0F111499] font-medium leading-4 tracking-[-2%]">Track rent,
                            expenses, payouts, and owner statements.</p>
                    </div>
                    <div class="flex items-center gap-2 flex-wrap">
                        <button
                            class="h-10 px-5 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] hover:bg-slate-50 transition-colors whitespace-nowrap">
                            EXPORT
                        </button>
                        <button
                            class="h-10 px-5 rounded-[80px] bg-[#0F1114] text-[12px] font-extrabold text-white uppercase leading-[100%] tracking-[-2%] transition-colors whitespace-nowrap hover:bg-[#0F1114]/90">
                            OWNER STATEMENT
                        </button>
                        <button @click="isAddTransactionOpen = true"
                            class="h-10 pl-[18px] pr-[21px] rounded-[80px] text-[12px] font-extrabold text-white uppercase leading-[100%] tracking-[-2%] flex items-center gap-[10px] whitespace-nowrap hover:opacity-95 transition-opacity"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white"
                                stroke-width="2.5">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                            ADD TRANSACTION
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
                    <div
                        class="p-6 flex flex-col xl:flex-row xl:items-center justify-between gap-4 border-b border-[#0F11140D]">
                        <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%]">Transactions</h2>

                        <div class="flex items-center gap-1 flex-wrap">
                            <div class="relative w-full sm:w-[254px]">
                                <div class="absolute left-2 top-1/2 -translate-y-1/2 h-6 w-6 p-[5px] text-[#0F111466]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                </div>
                                <input type="text" placeholder="Search: tenant, property, n..."
                                    class="w-full h-10 pl-[38px] pr-[25px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] leading-[100%] tracking-[-2%] focus:outline-none">
                            </div>

                            <div
                                class="w-full sm:w-auto rounded-[80px] border border-[#0F11141A] flex items-center gap-[14px] h-10 pl-5 pr-[15px] py-[10px]">
                                <select
                                    class="text-[12px] font-bold text-[#0F1114] appearance-none uppercase leading-[100%] tracking-[-2%] focus:outline-none">
                                    <option>ALL PROPERTIES</option>
                                </select>
                                <div class="h-5 w-5 flex items-center justify-center">
                                    <svg class="text-[#0F1114] pointer-events-none" xmlns="http://www.w3.org/2000/svg"
                                        width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>

                            <div
                                class="w-full sm:w-auto rounded-[80px] border border-[#0F11141A] flex items-center gap-[14px] h-10 pl-5 pr-[15px] py-[10px]">
                                <select
                                    class="text-[12px] font-bold text-[#0F1114] appearance-none uppercase leading-[100%] tracking-[-2%] focus:outline-none">
                                    <option>ALL TYPES</option>
                                </select>
                                <div class="h-5 w-5 flex items-center justify-center">
                                    <svg class="text-[#0F1114] pointer-events-none" xmlns="http://www.w3.org/2000/svg"
                                        width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>

                            <div
                                class="w-full sm:w-auto rounded-[80px] border border-[#0F11141A] flex items-center gap-[14px] h-10 pl-[21px] pr-[15px] py-[10px]">
                                <div
                                    class="text-[12px] font-bold text-[#0F1114] appearance-none uppercase leading-[100%] tracking-[-2%] focus:outline-none whitespace-nowrap">
                                    01-02-2026
                                </div>
                                <svg class="text-[#0F1114] pointer-events-none" xmlns="http://www.w3.org/2000/svg"
                                    width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </div>

                            <div
                                class="w-full sm:w-auto rounded-[80px] border border-[#0F11141A] flex items-center gap-[14px] h-10 pl-[21px] pr-[15px] py-[10px]">
                                <div
                                    class="text-[12px] font-bold text-[#0F1114] appearance-none uppercase leading-[100%] tracking-[-2%] focus:outline-none whitespace-nowrap">
                                    28-02-2026
                                </div>
                                <svg class="text-[#0F1114] pointer-events-none" xmlns="http://www.w3.org/2000/svg"
                                    width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </div>

                            <button
                                class="h-10 px-5 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] hover:bg-slate-50 transition-colors whitespace-nowrap">
                                CLEAR
                            </button>
                        </div>
                    </div>

                    <div class="w-full overflow-x-auto scrollbar-hide">
                        <table class="w-full min-w-[1000px]">
                            <thead>
                                <tr class="bg-[#FAFAFA] border-y border-[#0F11141A] h-11">
                                    <th
                                        class="pt-[14px] pb-[13px] pl-6 text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                        Date</th>
                                    <th
                                        class="pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                        Type</th>
                                    <th
                                        class="pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                        Property</th>
                                    <th
                                        class="pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                        Party</th>
                                    <th
                                        class="pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                        Memo</th>
                                    <th
                                        class="pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                        Amount</th>
                                    <th
                                        class="pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                        Status</th>
                                    <th
                                        class="pt-[14px] pb-[13px] pr-6 text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                        Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="8" class="px-6 pt-4 pb-[18px]">
                                        <span class="text-[14px] font-semibold text-[#0F111466] leading-[100%]">No
                                            transactions found.</span>
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

                        <div class="border border-[#0F11141A] rounded-[12px] pt-[13px] pb-[15px] px-[17px]">
                            <h3 class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%] mb-[6px]">No
                                activity</h3>
                            <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%]">Add a
                                transaction to get started.</p>
                        </div>
                    </div>

                    <div
                        class="flex flex-col w-full xl:w-[464px] border border-[#0F11141A] rounded-[24px] pt-[22px] pb-[23px] px-[25px]">
                        <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-5">Quick actions</h2>

                        <div class="flex flex-col gap-4">
                            <div
                                class="border border-[#0F11141A] rounded-[12px] px-[14px] pt-[13px] pb-4 flex flex-col items-start">
                                <h3
                                    class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%] mb-[6px] ml-[3px]">
                                    Record rent</h3>
                                <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%] mb-[13px] ml-[3px]">
                                    Add a rent payment for a tenant.</p>
                                <button
                                    class="h-10 pl-[18px] pr-[21px] rounded-[80px] text-[12px] font-extrabold text-primary uppercase leading-[100%] tracking-[-2%] flex items-center gap-[10px] hover:opacity-95 transition-opacity"
                                    style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white"
                                        stroke-width="3">
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                    ADD RENT
                                </button>
                            </div>

                            <div
                                class="border border-[#0F11141A] rounded-[12px] px-[14px] pt-[13px] pb-4 flex flex-col items-start">
                                <h3
                                    class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%] mb-[6px] ml-[3px]">
                                    Log expense</h3>
                                <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%] mb-[13px] ml-[3px]">
                                    Track maintenance and operating expenses.</p>
                                <button
                                    class="h-10 pl-[18px] pr-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] flex items-center gap-[10px] hover:bg-slate-50 transition-colors">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                        stroke-width="2">
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                    ADD EXPENSE
                                </button>
                            </div>

                            <div
                                class="border border-[#0F11141A] rounded-[12px] px-[14px] pt-[13px] pb-4 flex flex-col items-start">
                                <h3
                                    class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%] mb-[6px] ml-[3px]">
                                    Add payout</h3>
                                <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%] mb-[13px] ml-[3px]">
                                    Record payouts to owners or entities.</p>
                                <button
                                    class="h-10 pl-[18px] pr-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] flex items-center gap-[10px] hover:bg-slate-50 transition-colors">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                        stroke-width="2">
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                    ADD PAYOUT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
        <AddTransactionModal :is-open="isAddTransactionOpen" @close="isAddTransactionOpen = false" />
    </div>
</template>
