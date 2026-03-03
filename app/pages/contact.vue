<script setup>

const isAddContactModalOpen = ref(false)
const activeTab = ref('ALL')
const tabs = ['ALL', 'TENANTS', 'OWNERS', 'PROPERTY MANAGER', 'VENDORS']

const requests = [
    {
        name: 'Landlord',
        role: 'Primary owner',
        email: 'owner@domain.com',
        phone: '(510) 555-1122',
        property: '123 Oak St',
        initial: 'L'
    },
    {
        name: 'Alex Manager',
        role: 'Main PM',
        email: 'alex@domain.com',
        phone: '(510) 555-7722',
        property: '3 properties',
        initial: 'A'
    },
    {
        name: 'Jordan Tenant',
        role: 'Lease ends 08/2026',
        email: 'tenant@domain.com',
        phone: '(510) 555-3300',
        property: '123 Oak St • Unit 4',
        initial: 'J'
    },
    {
        name: 'Plumbing Pro Co.',
        role: 'Plumbing vendor',
        email: 'service@plumbco.com',
        phone: '(510) 555-8877',
        property: '-',
        initial: 'P'
    },
]

</script>

<template>
    <div class="flex min-h-screen bg-primary font-sans">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-4 sm:px-6 py-[19px]">

                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                    <div>
                        <h1 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[4px]">Contacts</h1>
                        <p class="text-[12px] font-medium text-[#0F1114CC] leading-4 tracking-[-2%]">Manage tenants,
                            owners, vendors, and internal team contacts.</p>
                    </div>

                    <div class="flex items-center gap-2 w-full sm:w-auto">
                        <button
                            class="h-10 px-5 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold uppercase tracking-[-2%] text-[#0F1114] leading-[100%] flex-1 sm:flex-initial text-center justify-center">
                            EXPORT
                        </button>
                        <button @click="isAddContactModalOpen = true"
                            class="h-10 pl-[18px] pr-5 rounded-[80px] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%] flex items-center gap-[10px] flex-1 sm:flex-initial justify-center"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M12 5v14M5 12h14" />
                            </svg>
                            Add contact
                        </button>
                    </div>
                </div>

                <div class="rounded-3xl border border-[#0F11141A] mb-5 overflow-hidden">
                    <div class="flex flex-col gap-5 p-6 sm:flex-row sm:items-center">
                        <span class="text-base font-bold text-[#0F1114] leading-[100%] shrink-0">Directory</span>

                        <div class="flex flex-wrap items-center justify-end gap-2 flex-1 lg:flex-nowrap">
                            <div
                                class="flex items-center gap-[6px] h-10 pl-2 pr-[15px] rounded-[80px] border border-[#0F11141A] w-full lg:max-w-[473px]">
                                <div class="p-[3px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                        fill="none" stroke="#0F111466" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <circle cx="11" cy="11" r="8" />
                                        <path d="m21 21-4.35-4.35" />
                                    </svg>
                                </div>
                                <input type="text" placeholder="Search: name, email, phone, property..."
                                    class="flex-1 text-[12px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%] outline-none placeholder:text-[#0F111466]" />
                            </div>

                            <div
                                class="flex items-center gap-1 overflow-x-auto scrollbar-hide w-full lg:w-auto pb-1 -mb-1">
                                <button v-for="tab in tabs" :key="tab" @click="activeTab = tab" :class="[
                                    'h-8 px-4 rounded-[80px] text-[12px] uppercase leading-[100%] tracking-[-0.02em] whitespace-nowrap transition-colors flex-shrink-0',
                                    activeTab === tab
                                        ? 'bg-[#0F1114] text-primary font-bold'
                                        : 'text-[#0F1114] border border-[#0F11141A] font-semibold'
                                ]">
                                    {{ tab }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="w-full min-w-[900px]">
                            <thead>
                                <tr class="h-11 border-y border-[#0F11141A] bg-[#FAFAFA]">
                                    <th
                                        class="pl-6 pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Name</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Role</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Email</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Phone</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Property / Notes</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(req, i) in requests" :key="i"
                                    class="border-b border-[#0F11141A] last:border-b-0 hover:bg-[#F9FAFB] transition-colors">
                                    <td class="pl-6 pr-6 pt-4 pb-[15px] whitespace-nowrap">
                                        <div class="flex items-center gap-3">
                                            <div
                                                class="h-8 w-8 flex items-center justify-center rounded-[8px] bg-[#F2F6FF] border border-[#004CE51A] text-[#004CE5] text-[12px] font-extrabold leading-[100%] tracking-[-2%] shrink-0">
                                                {{ req.initial }}
                                            </div>
                                            <div>
                                                <div
                                                    class="text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%] mb-[2px]">
                                                    {{ req.name }}</div>
                                                <div
                                                    class="text-[12px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">
                                                    {{ req.role }}</div>
                                            </div>
                                        </div>
                                    </td>

                                    <td
                                        class="pr-6 pt-6 pb-[23px] text-[14px] font-medium text-[#0F111499] whitespace-nowrap uppercase">
                                        <!-- Role column is intentionally empty as per design image -->
                                    </td>

                                    <td
                                        class="pr-6 pt-6 pb-[23px] text-[14px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        {{ req.email }}
                                    </td>

                                    <td
                                        class="pr-6 pt-6 pb-[23px] text-[14px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        {{ req.phone }}
                                    </td>

                                    <td
                                        class="pr-6 pt-6 pb-[23px] text-[14px] font-medium text-[#0F111499] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        {{ req.property }}
                                    </td>

                                    <td class="pr-6 py-4 w-px">
                                        <div class="flex items-center gap-[4px]">
                                            <button
                                                class="h-8 w-8 rounded-full border border-[#0F11141A] flex items-center justify-center text-[#0F1114] hover:bg-gray-50 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="icon icon-tabler icons-tabler-outline icon-tabler-message-circle">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path
                                                        d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
                                                </svg>
                                            </button>
                                            <button
                                                class="h-8 w-8 rounded-full border border-[#0F11141A] flex items-center justify-center text-[#0F1114] hover:bg-gray-50 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="icon icon-tabler icons-tabler-outline icon-tabler-pencil">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                                    <path d="M13.5 6.5l4 4" />
                                                </svg>
                                            </button>
                                            <button
                                                class="h-8 w-8 rounded-full border border-[#0F11141A] flex items-center justify-center text-[#0F1114] hover:bg-gray-50 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
                                                    <path d="M10 11v6m4-6v6"></path>
                                                    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path>
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

        <AddContactModel :isOpen="isAddContactModalOpen" @close="isAddContactModalOpen = false" />
    </div>

</template>
