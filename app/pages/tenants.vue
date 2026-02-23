<script setup>
import { ref } from 'vue'
import Sidebar from '~/components/Sidebar.vue'
import Navbar from '~/components/Navbar.vue'
import InviteModal from '~/components/InviteModal.vue'
import AddTenantModal from '~/components/AddTenantModal.vue'

const isInviteModalOpen = ref(false)
const isAddModalOpen = ref(false)

const tenants = [
    { id: 1, initials: 'JL', name: 'Jordan Lee', email: 'jordan@email.com', property: '55 Crystal Falls Dr', unit: 'Main', status: '', lease: 'Nov 1, 2025 → Oct 31, 2026', balance: '$125 due', balanceColor: 'text-[#D92D20]' },
    { id: 2, initials: 'TG', name: 'Taylor Green', email: 'taylor@email.com', property: '123 Oak St • Unit 4', unit: 'Unit 4', status: '', lease: 'Aug 1, 2025 → Jul 31, 2026', balance: '$0', balanceColor: 'text-[#0F1114]' },
    { id: 3, initials: 'AP', name: 'Avery Patel', email: 'avery@email.com', property: '123 Oak St • Unit 4', unit: 'Unit 4', status: '', lease: 'Feb 15, 2026 → Feb 14, 2027', balance: '$0', balanceColor: 'text-[#0F1114]' },
    { id: 4, initials: 'MD', name: 'Morgan Diaz', email: 'morgan@email.com', property: 'Portfolio', unit: '-', status: '', lease: 'Jan 1, 2024 → Dec 31, 2024', balance: '$50 credit', balanceColor: 'text-[#027A48]' },
]
</script>

<template>
    <div class="flex min-h-screen bg-primary font-sans">
        <Sidebar />
        <div class="flex-1 ml-64 flex flex-col min-h-screen">
            <Navbar />

            <main class="flex-1 px-6 pt-[19px] pb-32">
                <div class="flex items-center justify-between mb-5">
                    <div>
                        <h1 class="text-xl font-bold text-[#0F1114] leading-[100%] mb-1">Tenants</h1>
                        <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Manage leases,
                            contacts, balances, and tenant communication.</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <button
                            class="h-10 px-6 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] text-[#0F1114]">IMPORT</button>
                        <button @click="isInviteModalOpen = true"
                            class="h-10 px-[18px] rounded-[80px] bg-[#0F1114] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] flex items-center gap-[5px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
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
                        <button
                            class="h-10 px-6 rounded-[80px] bg-[#0F1114] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%]">MOVE
                            IN</button>
                        <button @click="isAddModalOpen = true"
                            class="h-10 px-6 rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] flex items-center gap-[10px]"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            ADD TENANT
                        </button>
                    </div>
                </div>

                <div class="border border-[#0F11141A] rounded-[24px] pt-6 mb-6">
                    <div class="flex items-center justify-between px-6 mb-6">
                        <div class="relative w-[340px]">
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
                        <div class="flex items-center gap-3">
                            <button
                                class="h-10 pr-[15px] pl-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] flex items-center gap-[14px]">
                                ALL BALANCES
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="text-[#0F1114]">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                            <button
                                class="h-10 pl-5 pr-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] flex items-center gap-[14px]">
                                ALL STATUS
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="text-[#0F1114]">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                            <button
                                class="h-10 pl-5 pr-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] flex items-center gap-[14px]">
                                ALL PROPERTIES
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="text-[#0F1114]">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Table -->
                    <table class="w-full text-left border-collapse">
                        <thead class="border-y border-[#0F11141A] bg-[#FAFAFA]">
                            <tr>
                                <th
                                    class="pt-[13px] pb-[14px] pl-6 font-extrabold text-[#0F1114] text-[12px] uppercase tracking-[-2%] leading-[100%] w-[22%]">
                                    Tenant</th>
                                <th
                                    class="pt-[13px] pb-[14px] font-extrabold text-[#0F1114] text-[12px] uppercase tracking-[-2%] leading-[100%] w-[20%]">
                                    Property</th>
                                <th
                                    class="pt-[13px] pb-[14px] font-extrabold text-[#0F1114] text-[12px] uppercase tracking-[-2%] leading-[100%] w-[10%]">
                                    Unit</th>
                                <th
                                    class="pt-[13px] pb-[14px] font-extrabold text-[#0F1114] text-[12px] uppercase tracking-[-2%] leading-[100%] w-[10%]">
                                    Status</th>
                                <th
                                    class="pt-[13px] pb-[14px] font-extrabold text-[#0F1114] text-[12px] uppercase tracking-[-2%] leading-[100%] w-[18%]">
                                    Lease</th>
                                <th
                                    class="pt-[13px] pb-[14px] font-extrabold text-[#0F1114] text-[12px] uppercase tracking-[-2%] leading-[100%] w-[12%]">
                                    Balance</th>
                                <th
                                    class="pt-[13px] pb-[14px] pr-6 font-extrabold text-[#0F1114] text-[12px] uppercase tracking-[-2%] leading-[100%] text-center w-[8%]">
                                    Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="tenant in tenants" :key="tenant.id"
                                class="border-b border-[#0F11141A] last:border-0 hover:bg-[#FAFAFA] transition-colors">
                                <td class="pt-4 pb-[15px] pl-6">
                                    <div class="flex items-center gap-3">
                                        <div
                                            class="w-8 h-8 rounded-[8px] border border-[#004CE51A] bg-[#F2F6FF] text-[#004CE5] flex items-center justify-center text-[12px] font-extrabold leading-[100%] tracking-[-2%]">
                                            {{ tenant.initials }}
                                        </div>
                                        <div>
                                            <p
                                                class="text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%] mb-[2px]">
                                                {{ tenant.name }}</p>
                                            <p
                                                class="text-[12px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">
                                                {{ tenant.email }}</p>
                                        </div>
                                    </div>
                                </td>
                                <td
                                    class="pt-[23px] pb-6 text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                    {{ tenant.property }}</td>
                                <td
                                    class="pt-[23px] pb-6 text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                    {{ tenant.unit }}</td>
                                <td
                                    class="pt-[23px] pb-6 text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                    {{ tenant.status }}</td>
                                <td
                                    class="pt-[23px] pb-6 text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                    {{ tenant.lease }}</td>
                                <td class="pt-[23px] pb-6 text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%]"
                                    :class="tenant.balanceColor">
                                    {{ tenant.balance }}</td>
                                <td class="py-4 pr-6">
                                    <div class="flex items-center justify-center gap-1">
                                        <button
                                            class="w-8 h-8 rounded-full border border-[#0F11141A] flex items-center justify-center text-[#0F1114]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path
                                                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                                                </path>
                                            </svg>
                                        </button>
                                        <button
                                            class="w-8 h-8 rounded-full border border-[#0F11141A] flex items-center justify-center text-[#0F1114]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="icon icon-tabler icons-tabler-outline icon-tabler-pencil">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                                <path d="M13.5 6.5l4 4" />
                                            </svg>
                                        </button>
                                        <button
                                            class="w-8 h-8 rounded-full border border-[#0F11141A] flex items-center justify-center text-[#0F1114]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
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

                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-primary border border-[#0F11141A] rounded-[24px] p-[25px] pt-[22px] h-fit">
                        <h3 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-5">Overview</h3>

                        <div class="border border-[#0F11141A] rounded-xl px-[17px] pt-4 pb-[13px]">
                            <div class="flex items-start justify-between mb-4">
                                <div class="flex items-center gap-3">
                                    <div
                                        class="w-8 h-8 rounded-[8px] border border-[#004CE51A] bg-[#F2F6FF] text-[#004CE5] flex items-center justify-center text-[12px] font-extrabold leading-[100%] tracking-[-2%]">
                                        JL
                                    </div>
                                    <div class="flex flex-col gap-[2px]">
                                        <h4
                                            class="text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                            Jordan Lee
                                        </h4>
                                        <p
                                            class="text-[12px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">
                                            Portfolio - Past tenant</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-[6px]">
                                    <button
                                        class="h-8 px-4 py-2 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] text-[#0F1114]">MESSAGE</button>
                                    <button
                                        class="h-8 px-4 py-2 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] text-[#0F1114]">REQUEST
                                        PAYMENT</button>
                                </div>
                            </div>

                            <div class="grid grid-cols-2 gap-2 mb-[9px]">
                                <div class="border border-[#0F11141A] rounded-[8px] pt-[14px] pb-[13px] px-[16px]">
                                    <p class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-1">
                                        LEASE TERM</p>
                                    <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%]">
                                        January 1, 2024 to<br>December 31, 2024</p>
                                </div>
                                <div class="border border-[#0F11141A] rounded-[8px] pt-[14px] pb-[13px] px-[16px]">
                                    <p class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-1">
                                        RENT</p>
                                    <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%]">-</p>
                                </div>
                                <div class="border border-[#0F11141A] rounded-[8px] pt-[14px] pb-[13px] px-[16px]">
                                    <p class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-1">
                                        PHONE</p>
                                    <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%]">(510)
                                        555-0199</p>
                                </div>
                                <div class="border border-[#0F11141A] rounded-[8px] pt-[14px] pb-[13px] px-[16px]">
                                    <p class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-1">
                                        EMAIL</p>
                                    <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%]">
                                        taylor@email.com</p>
                                </div>
                            </div>

                            <p class="text-[12px] font-semibold text-[#0F111499] leading-4 tracking-[-2%] mt-[1px]">Tip:
                                Use Invite tenant to send a signup link, or Add tenant for manual entry.</p>
                        </div>
                    </div>

                    <div
                        class="bg-primary border border-[#0F11141A] rounded-[24px] px-[25px] pt-[22px] pb-[21px] h-fit">
                        <h3 class="text-base font-bold text-[#0F1114] leading-[100%] mb-5">Tasks & reminders</h3>

                        <div class="bg-[#F2F6FF] border border-[#004CE51A] rounded-xl px-[17px] py-[13px] mb-[13px]">
                            <p class="text-[14px] font-bold text-[#004CE5] leading-[18px]">Coming soon:
                                lease renewals, move-in/out checklists, and automated reminders.</p>
                        </div>

                        <p class="text-[12px] font-semibold text-[#0F111499] leading-4 tracking-[-2%]">Tip: Use
                            Invite tenant to send a signup link, or Add tenant for manual entry.</p>
                    </div>
                </div>

            </main>
        </div>

        <!-- Invite Tenants Modal -->
        <InviteModal :is-open="isInviteModalOpen" @close="isInviteModalOpen = false" />

        <!-- Add Tenant Modal -->
        <AddTenantModal :is-open="isAddModalOpen" @close="isAddModalOpen = false" />
    </div>
</template>
