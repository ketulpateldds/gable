<script setup>
import { ref } from 'vue'
import Sidebar from '~/components/landlord/Sidebar.vue'
import Navbar from '~/components/landlord/Navbar.vue'
import InviteModal from '~/components/landlord/InviteModal.vue'
import AddTenantModal from '~/components/landlord/AddTenantModal.vue'
import MoveInModal from '~/components/landlord/MoveInModal.vue'
import CreateInvoiceModal from '~/components/landlord/CreateInvoiceModal.vue'

const isInviteModalOpen = ref(false)
const isAddModalOpen = ref(false)
const isMoveInModalOpen = ref(false)
const isCreateInvoiceModalOpen = ref(false)

const tenants = [
    { id: 1, initials: 'JL', name: 'Jordan Lee', email: 'jordan@email.com', property: '55 Crystal Falls Dr', unit: 'Main', status: 'Active', statusColor: 'text-[#008A09]', lease: 'Nov 1, 2025 → Oct 31, 2026', balance: '$125 due', balanceColor: 'text-[#D92D20]' },
    { id: 2, initials: 'TG', name: 'Taylor Green', email: 'taylor@email.com', property: '123 Oak St • Unit 4', unit: 'Unit 4', status: 'Active', statusColor: 'text-[#008A09]', lease: 'Aug 1, 2025 → Jul 31, 2026', balance: '$0', balanceColor: 'text-[#0F1114]' },
    { id: 3, initials: 'AP', name: 'Avery Patel', email: 'avery@email.com', property: '123 Oak St • Unit 4', unit: 'Unit 4', status: 'Active', statusColor: 'text-[#008A09]', lease: 'Feb 15, 2026 → Feb 14, 2027', balance: '$0', balanceColor: 'text-[#0F1114]' },
    { id: 4, initials: 'MD', name: 'Morgan Diaz', email: 'morgan@email.com', property: 'Portfolio', unit: '-', status: 'Active', statusColor: 'text-[#008A09]', lease: 'Jan 1, 2024 → Dec 31, 2024', balance: '$50 credit', balanceColor: 'text-[#008A09]' },
]
</script>

<template>
    <div class="flex min-h-screen bg-primary font-figtree">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-w-0 min-h-screen transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-4 sm:px-6 pt-[19px] pb-6">

                <!-- Header Section -->
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 sm:mb-5">
                    <div>
                        <h1 class="text-xl font-bold text-neutral-primary leading-[100%] mb-2 sm:mb-1">Tenants</h1>
                        <p
                            class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%] max-w-[272px]">
                            Manage leases, contacts, balances, and tenant communication.</p>
                    </div>

                    <div class="flex flex-wrap items-stretch sm:items-center gap-2">
                        <button
                            class="w-full sm:w-auto py-[13px] px-5 rounded-[80px] border border-neutral-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] text-neutral-primary">
                            IMPORT</button>

                        <button @click="isInviteModalOpen = true"
                            class="w-full sm:w-auto py-[11px] px-[18px] rounded-[80px] bg-neutral-primary text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] flex items-center justify-center sm:justify-start gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-send-2">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124" />
                                <path d="M6.5 12h14.5" />
                            </svg>
                            INVITE
                        </button>

                        <button @click="isMoveInModalOpen = true"
                            class="w-full sm:w-auto py-[14px] px-5 rounded-[80px] bg-neutral-primary text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%]">
                            MOVE IN
                        </button>

                        <button @click="isAddModalOpen = true"
                            class="w-full sm:w-auto py-[12px] px-6 rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] flex items-center justify-center sm:justify-start gap-[10px] hover:opacity-95 transition-opacity"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                stroke-linejoin="round" class="icon icon-tabler icons-tabler-plus">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 5l0 14" />
                                <path d="M5 12l14 0" />
                            </svg>
                            ADD TENANT
                        </button>
                    </div>
                </div>

                <div class="border border-neutral-primary/10 rounded-[24px] pt-6 mb-6">
                    <!-- Search and Filter -->
                    <div class="flex flex-col md:flex-row md:items-center justify-between px-6 mb-6 gap-4">
                        <div class="relative w-full md:w-[344px]">
                            <div
                                class="absolute left-2 top-1/2 -translate-y-1/2 text-neutral-primary/40 h-6 w-6 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </div>
                            <input type="text" placeholder="Search: name, unit, property, phone, email..."
                                class="w-full h-10 pl-[38px] pr-4 rounded-[80px] border border-neutral-primary/10 text-[12px] placeholder:text-neutral-primary/60 leading-[100%] tracking-[-2%] text-neutral-primary focus:outline-none" />
                        </div>

                        <div class="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
                            <button @click="isCreateInvoiceModalOpen = true"
                                class="flex-1 sm:flex-none py-[13px] px-[23px] rounded-[80px] border border-neutral-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] text-neutral-primary">
                                Create Invoice</button>

                            <div class="relative flex-1 sm:flex-none">
                                <select
                                    class="w-[154px] py-[13px] px-5 rounded-[80px] border border-neutral-primary/10 text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] appearance-none bg-transparent cursor-pointer">
                                    <option value="">ALL BALANCES</option>
                                    <option value="">OVERDUE</option>
                                    <option value="">DUE</option>
                                    <option value="">PAID</option>
                                </select>
                                <div
                                    class="absolute right-[15px] top-1/2 -translate-y-1/2 h-5 w-5 flex items-center justify-center pointer-events-none text-neutral-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>

                            <div class="relative flex-1 sm:flex-none">
                                <select
                                    class="w-[136px] py-[13px] px-5 rounded-[80px] border border-neutral-primary/10 text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] appearance-none bg-transparent cursor-pointer">
                                    <option value="">ALL STATUS</option>
                                    <option value="">ACTIVE</option>
                                    <option value="">INACTIVE</option>
                                </select>
                                <div
                                    class="absolute right-[15px] top-1/2 -translate-y-1/2 h-5 w-5 flex items-center justify-center pointer-events-none text-neutral-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>

                            <div class="relative flex-1 sm:flex-none">
                                <select
                                    class="w-[162px] py-[13px] px-5 rounded-[80px] border border-neutral-primary/10 text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] appearance-none bg-transparent cursor-pointer">
                                    <option value="">ALL PROPERTIES</option>
                                </select>
                                <div
                                    class="absolute right-[15px] top-1/2 -translate-y-1/2 h-5 w-5 flex items-center justify-center pointer-events-none text-neutral-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- table -->
                    <div class="overflow-x-auto scrollbar-hide">
                        <table class="w-full text-left border-collapse min-w-[800px] lg:min-w-0">
                            <thead class="border-y border-neutral-primary/10 bg-[#FAFAFA] h-11">
                                <tr class="font-bold text-neutral-primary text-[14px] tracking-[-2%] leading-[100%]">
                                    <th class="pt-[13px] pb-[14px] pl-6 pr-4">Tenant</th>
                                    <th class="pt-[13px] pb-[14px] px-4">Property</th>
                                    <th class="pt-[13px] pb-[14px] px-4">Unit</th>
                                    <th class="pt-[13px] pb-[14px] px-4">Status</th>
                                    <th class="pt-[13px] pb-[14px] px-4">Lease</th>
                                    <th class="pt-[13px] pb-[14px] px-4">Balance</th>
                                    <th class="pt-[13px] pb-[14px] pl-4 pr-6 text-center w-px">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="tenant in tenants" :key="tenant.id"
                                    class="border-b border-neutral-primary/10 last:border-0 font-semibold text-[14px] tracking-[-2%] leading-[100%]">
                                    <td class="py-4 pl-6 pr-4">
                                        <div class="flex items-center gap-3">
                                            <div
                                                class="w-8 h-8 rounded-[8px] border border-brand-blue/10 bg-[#F2F6FF] text-brand-blue flex items-center justify-center text-[12px] font-extrabold leading-[100%] tracking-[-2%]">
                                                {{ tenant.initials }}
                                            </div>
                                            <div>
                                                <p class="text-neutral-primary mb-[2px]">{{ tenant.name }}</p>
                                                <p class="text-neutral-primary/60 text-[12px]">{{ tenant.email }}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-6 px-4 text-neutral-primary/80 whitespace-nowrap">{{ tenant.property
                                        }}</td>
                                    <td class="py-6 px-4 text-neutral-primary/80">{{ tenant.unit }}</td>
                                    <td class="py-6 px-4" :class="tenant.statusColor">{{ tenant.status }}</td>
                                    <td class="py-6 px-4 text-neutral-primary/80 whitespace-nowrap">{{ tenant.lease }}
                                    </td>
                                    <td class="py-6 px-4 whitespace-nowrap" :class="tenant.balanceColor">{{
                                        tenant.balance }}</td>
                                    <td class="py-4 pl-4 pr-6">
                                        <div class="flex items-center justify-center gap-1">
                                            <button
                                                class="w-8 h-8 rounded-full border border-[#0F11141A] flex items-center justify-center text-[#0F1114] hover:bg-slate-50 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path
                                                        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                                                    </path>
                                                </svg>
                                            </button>
                                            <button
                                                class="w-8 h-8 rounded-full border border-[#0F11141A] flex items-center justify-center text-[#0F1114] hover:bg-slate-50 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="icon icon-tabler icons-tabler-outline icon-tabler-pencil">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                                    <path d="M13.5 6.5l4 4" />
                                                </svg>
                                            </button>
                                            <button
                                                class="w-8 h-8 rounded-full border border-[#0F11141A] flex items-center justify-center text-[#0F1114] hover:bg-slate-50 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path
                                                        d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                    </path>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line>
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

        <!-- Invite Tenants Modal -->
        <InviteModal :is-open="isInviteModalOpen" @close="isInviteModalOpen = false" />

        <!-- Add Tenant Modal -->
        <AddTenantModal :is-open="isAddModalOpen" @close="isAddModalOpen = false" />

        <!-- Move In Modal -->
        <MoveInModal :is-open="isMoveInModalOpen" @close="isMoveInModalOpen = false" />

        <!-- Create Invoice Modal -->
        <CreateInvoiceModal :isOpen="isCreateInvoiceModalOpen" @close="isCreateInvoiceModalOpen = false" />
    </div>
</template>
