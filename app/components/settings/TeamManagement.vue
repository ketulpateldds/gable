<script setup>
import { ref } from 'vue'

const showInviteMember = ref(false)

// Form fields
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const role = ref('')
const phoneNumber = ref('')
const searchProperty = ref('')

const toggleInviteMember = () => {
    showInviteMember.value = !showInviteMember.value
}
</script>

<template>
    <div class="h-full">
        <!-- Invite team member view -->
        <div v-if="showInviteMember" class="pb-6">
            <div class="mb-4 flex items-start gap-3">
                <button @click="toggleInviteMember"
                    class="w-10 h-10 border border-[#0F11141A] flex items-center justify-center rounded-full shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="#0F1114" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M5 12l4 4" />
                        <path d="M5 12l4 -4" />
                    </svg>
                </button>
                <div>
                    <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[5px]">Invite team member</h2>
                    <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">
                        Invite new team member with their permission role to help you manage your business.
                    </p>
                </div>
            </div>

            <div class="border border-[#0F11141A] rounded-[24px] overflow-hidden bg-primary">
                <div class="px-6 pt-[21px] pb-5 border-b border-[#0F11141A]">
                    <h3 class="text-[16px] font-bold text-[#0F1114] leading-[100%]">Member details</h3>
                </div>

                <div class="p-6 pt-[22px] border-b border-[#0F11141A]">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px]">
                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">First
                                Name</label>
                            <input v-model="firstName" type="text" placeholder="FIRST NAME"
                                class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                        </div>
                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">Last
                                Name</label>
                            <input v-model="lastName" type="text" placeholder="LAST NAME"
                                class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                        </div>
                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">Email</label>
                            <input v-model="email" type="email" placeholder="EMAIL"
                                class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                        </div>
                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">Role/Position</label>
                            <div class="relative">
                                <select v-model="role"
                                    class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] outline-none appearance-none cursor-pointer">
                                    <option value="" disabled selected>SELECT ROLE</option>
                                    <option>Owner</option>
                                    <option>Manager</option>
                                    <option>Assistant</option>
                                </select>
                                <div
                                    class="absolute right-[18px] top-1/2 -translate-y-1/2 h-5 w-5 flex items-center justify-center pointer-events-none">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                        stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">Phone
                                Number</label>
                            <input v-model="phoneNumber" type="tel" placeholder="PHONE NUMBER"
                                class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                        </div>
                    </div>
                </div>

                <div class="p-6 pt-[21px]">
                    <h3 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[4px]">Property access</h3>
                    <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%] mb-[21px]">
                        Select which property this member can access.
                    </p>

                    <label
                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">Property
                        dropdown with search</label>
                    <div class="relative">
                        <div
                            class="absolute left-3 top-1/2 -translate-y-1/2 h-6 w-6 flex items-center justify-center pointer-events-none">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F11144D"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <path d="M21 21l-4.35-4.35" />
                            </svg>
                        </div>
                        <input v-model="searchProperty" type="text" placeholder="SEARCH PROPERTY"
                            class="w-full pl-[44px] pr-6 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Main team management view -->
        <div v-else class="border border-[#0F11141A] rounded-[24px]">
            <div class="px-6 py-[14px] border-b border-[#0F11141A] flex items-center justify-between">
                <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%]">Team management</h2>
                <button @click="toggleInviteMember"
                    class="pl-[18px] pr-[19px] py-[9px] rounded-[80px] flex items-center gap-[6px] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%] hover:opacity-90 transition-opacity"
                    style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                        stroke-linecap="round" stroke-linejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    INVITE TEAM MEMBER
                </button>
            </div>

            <div class="px-6 pt-[22px] pb-[21px] border-b border-[#0F11141A]">
                <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%]">
                    Control what settings, features and properties are available to your team members.
                </p>
            </div>

            <div class="p-6 border-b border-[#0F11141A]">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

                    <div class="border border-[#0F11141A] rounded-[12px] flex flex-col h-full">
                        <h3
                            class="text-[14px] font-bold text-[#0F1114] leading-[100%] pt-[15px] px-4 pb-[14px] border-b border-[#0F11141A]">
                            Roles & permissions</h3>

                        <div class="p-4 pt-[13px] flex flex-col flex-1">
                            <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%] mb-[13px]">
                                Create and assign roles for landlords, managers, and assistants.
                            </p>
                            <div class="flex flex-wrap items-center gap-2 mt-auto">
                                <button
                                    class="py-[14px] px-[22px] rounded-[80px] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%] hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
                                    style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                                    MANAGE ROLES
                                </button>
                                <button
                                    class="py-[13px] pl-[19px] pr-5 rounded-[80px] flex items-center justify-center gap-[6px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] hover:bg-[#F5F5F5] transition-colors whitespace-nowrap shrink-0">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    ADD ROLE
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="border border-[#0F11141A] rounded-[12px] flex flex-col h-full">
                        <h3
                            class="text-[14px] font-bold text-[#0F1114] leading-[100%] pt-[15px] px-4 pb-[14px] border-b border-[#0F11141A]">
                            Get payments online!</h3>

                        <div class="p-4 pt-[13px] flex flex-col flex-1">
                            <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%] mb-[13px]">
                                Assign team members access to specific properties and modules.
                            </p>
                            <div class="flex flex-wrap items-center gap-2 mt-auto">
                                <button
                                    class="py-[14px] px-[22px] rounded-[80px] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%] hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
                                    style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                                    MANAGE ACCESS
                                </button>
                                <button
                                    class="py-[13px] pl-[19px] pr-5 rounded-[80px] flex items-center justify-center gap-[6px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] hover:bg-[#F5F5F5] transition-colors whitespace-nowrap shrink-0">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    ADD MEMBER
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="px-6 pt-[21px] pb-[26px]">
                <h3 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[6px]">Team members</h3>
                <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%] mb-[22px]">
                    Example list (demo).
                </p>

                <div class="border border-[#0F11141A] rounded-[12px] overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse min-w-[700px]">
                            <thead>
                                <tr class="bg-[#FAFAFA] border-b border-[#0F11141A] h-11">
                                    <th
                                        class="pl-6 pr-4 text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                        Name</th>
                                    <th class="px-4 text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                        Email</th>
                                    <th class="px-4 text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                        Role</th>
                                    <th class="px-4 text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                        Properties</th>
                                    <th class="px-4 text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                        Status</th>
                                    <th
                                        class="pl-4 pr-6 text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] w-px">
                                        Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-[#0F11141A]">
                                    <td
                                        class="pl-6 pr-4 py-[21px] text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                        Neatly</td>
                                    <td
                                        class="px-4 py-[21px] text-[14px] font-semibold text-[#0F1114CC] leading-[100%] tracking-[-2%]">
                                        email@domain.com</td>
                                    <td
                                        class="px-4 py-[21px] text-[14px] font-semibold text-[#0F1114CC] leading-[100%] tracking-[-2%]">
                                        Owner</td>
                                    <td
                                        class="px-4 py-[21px] text-[14px] font-semibold text-[#0F1114CC] leading-[100%] tracking-[-2%]">
                                        All</td>
                                    <td
                                        class="px-4 py-[21px] text-[14px] font-semibold text-[#0F1114CC] leading-[100%] tracking-[-2%]">
                                    </td>
                                    <td class="pl-4 pr-6 py-[14px]">
                                        <button
                                            class="w-8 h-8 rounded-full border border-[#0F11141A] flex items-center justify-center hover:bg-[#F5F5F5] transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="icon icon-tabler icons-tabler-outline icon-tabler-pencil">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                                <path d="M13.5 6.5l4 4" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td
                                        class="pl-6 pr-4 py-[21px] text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                        Alex Manager</td>
                                    <td
                                        class="px-4 py-[21px] text-[14px] font-semibold text-[#0F1114CC] leading-[100%] tracking-[-2%]">
                                        alex@domain.com</td>
                                    <td
                                        class="px-4 py-[21px] text-[14px] font-semibold text-[#0F1114CC] leading-[100%] tracking-[-2%]">
                                        Property Manager</td>
                                    <td
                                        class="px-4 py-[21px] text-[14px] font-semibold text-[#0F1114CC] leading-[100%] tracking-[-2%]">
                                        3</td>
                                    <td
                                        class="px-4 py-[21px] text-[14px] font-semibold text-[#0F1114CC] leading-[100%] tracking-[-2%]">
                                    </td>
                                    <td class="pl-4 pr-6 py-[14px]">
                                        <button
                                            class="w-8 h-8 rounded-full border border-[#0F11141A] flex items-center justify-center hover:bg-[#F5F5F5] transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="icon icon-tabler icons-tabler-outline icon-tabler-send">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M10 14l11 -11" />
                                                <path
                                                    d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
