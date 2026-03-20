<script setup>
import Navbar from '~/components/landlord/Navbar.vue'
import Sidebar from '~/components/landlord/Sidebar.vue'


// Assignee tabs
const assigneeTabs = ['Myself', 'Teammates', 'Tenant', 'Manual']
const activeAssigneeTab = ref('Teammates')

// Teammates list
const teammates = ref([
    { name: 'Abc Homes', role: 'Administrator', selected: true },
    { name: 'Jordan Admin', role: 'Leasing Coordinator', selected: false },
    { name: 'Casey Ops', role: 'Maintenance Liaison', selected: false },
])

function toggleTeammate(index) {
    teammates.value[index].selected = !teammates.value[index].selected
}

// Selected property / unit
const selectedProperty = ref(null)
const selectedUnit = ref(null)
const selectedTemplate = ref(null)

function handleCancel() {
    navigateTo('/inspections')
}

function handleCreate() {
    // handle create logic
}

// Inspection label options
const inspectionLabels = ['Move-in', 'Move-out', 'Periodic', 'Safety', 'Maintenance']
const selectedLabel = ref(null)
</script>

<template>
    <div class="flex min-h-screen bg-primary font-sans overflow-x-hidden">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-6 py-[21px] flex flex-col">

                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-[18px]">
                    <div class="flex items-center gap-4">
                        <button @click="handleCancel"
                            class="flex items-center justify-center w-10 h-10 rounded-full border border-[#0F11141A] hover:bg-[#F5F5F5] transition-colors shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="#0F1114" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M19 12H5M12 5l-7 7 7 7" />
                            </svg>
                        </button>
                        <div>
                            <h1 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[4px]">Create
                                Inspection</h1>
                            <p class="text-[12px] text-[#0F111499] font-medium leading-4 tracking-[-0.02em]">
                                Assign an inspection to a unit, choose a template, and schedule invitations.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-center gap-2 flex-wrap sm:shrink-0">
                        <button @click="handleCancel"
                            class="py-[13px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em] hover:bg-[#F5F5F5] transition-colors">
                            CANCEL
                        </button>
                        <button @click="handleCreate"
                            class="py-[14px] px-5 rounded-[80px] text-white text-[12px] font-extrabold uppercase leading-[100%] tracking-[-0.02em]"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                            CREATE
                        </button>
                    </div>
                </div>

                <div class="border border-[#0F11141A] rounded-[24px] mb-4">
                    <h2
                        class="py-[21px] px-6 border-b border-[#0F11141A] text-[16px] font-bold text-[#0F1114] leading-[100%]">
                        Property &amp; unit</h2>

                    <div class="pt-[23px] pb-[21px] px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em] mb-[5px]">Property
                                Name</label>
                            <div
                                class="flex items-center justify-between pt-[15px] pb-[14px] pl-[17px] pr-[19px] rounded-[12px] border border-[#0F11141A] cursor-pointer hover:bg-[#FAFAFA] transition-colors">
                                <div>
                                    <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%] mb-[5px]">Click
                                        to select</p>
                                    <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-0.02em]">Select
                                        Property</p>
                                </div>
                                <span
                                    class="text-[12px] font-bold text-[#004CE5] leading-[100%] cursor-pointer">Select</span>
                            </div>
                            <p class="text-[12px] font-bold text-[#0F111499] leading-4 tracking-[-0.02em] mt-[9px]">
                                Tip: choose a property first to load available units.
                            </p>
                        </div>

                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em] mb-[5px]">Unit</label>
                            <div
                                class="flex items-center justify-between pt-[15px] pb-[14px] pl-[17px] pr-[19px] rounded-[12px] border border-[#0F11141A] cursor-pointer hover:bg-[#FAFAFA] transition-colors">
                                <div>
                                    <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%] mb-[5px]">Click
                                        to select</p>
                                    <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-0.02em]">Select
                                        Property</p>
                                </div>
                                <span
                                    class="text-[12px] font-bold text-[#004CE5] leading-[100%] cursor-pointer">Select</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="border border-[#0F11141A] rounded-[24px] mb-4">
                    <h2
                        class="py-[21px] px-6 border-b border-[#0F11141A] text-[16px] font-bold text-[#0F1114] leading-[100%]">
                        Inspection template</h2>

                    <div class="pt-[23px] pb-[21px] px-6">
                        <label
                            class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em] mb-[5px]">Select
                            Inspection Template</label>
                        <div
                            class="flex items-center justify-between pt-[15px] pb-[14px] pl-[17px] pr-[19px] rounded-[12px] border border-[#0F11141A] cursor-pointer hover:bg-[#FAFAFA] transition-colors">
                            <div>
                                <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%] mb-[5px]">Click
                                    to select</p>
                                <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-0.02em]">Select
                                    Property</p>
                            </div>
                            <span
                                class="text-[12px] font-bold text-[#004CE5] leading-[100%] cursor-pointer">Select</span>
                        </div>
                        <p class="text-[12px] font-bold text-[#0F111499] leading-4 tracking-[-0.02em] mt-[9px]">
                            Tip: choose a property first to load available units.
                        </p>
                    </div>
                </div>

                <div class="border border-[#0F11141A] rounded-[24px] pt-[22px] mb-4">
                    <h2 class="px-6 text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[9px]">Assignee</h2>
                    <p class="px-6 text-[14px] font-bold text-[#0F111499] leading-[100%] mb-[18px]">Assign to
                    </p>

                    <div
                        class="px-6 flex items-center gap-5 border-b border-[#0F11141A] overflow-x-auto scrollbar-hide">
                        <button v-for="tab in assigneeTabs" :key="tab" @click="activeAssigneeTab = tab" :class="[
                            'pb-[11px] text-[12px] leading-[100%] transition-colors border-b-2 -mb-px',
                            activeAssigneeTab === tab
                                ? 'border-[#004CE5] text-[#004CE5] font-bold'
                                : 'border-transparent text-[#0F1114CC] font-semibold'
                        ]">
                            {{ tab }}
                        </button>
                    </div>

                    <div v-if="activeAssigneeTab === 'Teammates'" class="px-6 pt-[21px] pb-[26px]">
                        <p class="ml-1 text-[14px] font-bold text-[#0F1114] leading-[100%] mb-2">Select teammates</p>

                        <div class="flex flex-col gap-2">
                            <div v-for="(teammate, index) in teammates" :key="teammate.name"
                                class="border border-[#0F11141A] rounded-[12px] flex items-center justify-between pt-[13px] pb-[15px] pl-[17px] pr-[25px]">
                                <div>
                                    <p
                                        class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-0.02em] mb-[6px]">
                                        {{ teammate.name }}</p>
                                    <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%]">{{
                                        teammate.role }}</p>
                                </div>
                                <button @click="toggleTeammate(index)" :class="[
                                    'text-[12px] font-bold uppercase leading-[100%]',
                                    teammate.selected ? 'text-[#0F111499]' : 'text-[#004CE5]'
                                ]">
                                    {{ teammate.selected ? 'Selected' : 'Select' }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div v-if="activeAssigneeTab === 'Myself'" class="py-4 px-6">
                        <p class="text-[14px] font-medium text-[#0F111499] leading-4">You will be assigned as the
                            inspector for this inspection.</p>
                    </div>

                    <div v-if="activeAssigneeTab === 'Tenant'" class="py-4 px-6">
                        <p class="text-[14px] font-medium text-[#0F111499] leading-4">The tenant will be assigned to
                            complete this inspection.</p>
                    </div>

                    <div v-if="activeAssigneeTab === 'Manual'" class="py-4 px-6">
                        <label
                            class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em] mb-[6px]">Inspector
                            Name</label>
                        <input type="text" placeholder="Enter inspector name"
                            class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] tracking-[-0.02em] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                    </div>
                </div>

                <div class="border border-[#0F11141A] rounded-[24px] mb-4">
                    <h2
                        class="py-[21px] px-6 border-b border-[#0F11141A] text-[16px] font-bold text-[#0F1114] leading-[100%]">
                        Schedule</h2>

                    <div class="pt-[22px] pb-[26px] px-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-[14px] mb-4">
                            <div class="col-span-1">
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Due
                                    Date
                                </label>
                                <div class="relative">
                                    <input type="date"
                                        class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] focus:outline-none" />
                                    <svg class="absolute right-4 top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                        xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                </div>
                            </div>

                            <div class="col-span-1">
                                <label
                                    class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Invitation
                                    Date
                                </label>
                                <div class="relative">
                                    <input type="date"
                                        class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] focus:outline-none" />
                                    <svg class="absolute right-4 top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                        xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em] mb-[5px]">Repeat</label>
                            <div class="relative">
                                <select
                                    class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold leading-[100%] tracking-[-2%] text-[#0F1114] appearance-none focus:outline-none bg-white">
                                    <option>DD-MM-YYYY</option>
                                </select>
                                <svg class="absolute right-3 top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="border border-[#0F11141A] rounded-[24px] mb-6">
                    <h2
                        class="py-[21px] px-6 border-b border-[#0F11141A] text-[16px] font-bold text-[#0F1114] leading-[100%]">
                        Additional options</h2>

                    <div class="pb-[25px] p-6">
                        <div class="border border-[#0F11141A] rounded-[12px]">
                            <p
                                class="pt-[15px] pb-[13px] px-4 border-b border-[#0F11141A] text-[14px] font-bold text-[#0F1114] leading-[100%]">
                                Inspection Label (optional)</p>

                            <div class="pt-[17px] px-4 pb-[18px]">
                                <div class="flex flex-wrap items-center gap-2 mb-4">
                                    <label v-for="label in inspectionLabels" :key="label"
                                        class="bg-[#0F111405] border border-[#0F11141A] rounded-[80px] py-[9px] pl-4 pr-[15px] flex items-center gap-[7px] cursor-pointer">
                                        <div class="relative flex items-center">
                                            <input type="radio" name="inspectionLabel" :value="label"
                                                v-model="selectedLabel" class="sr-only" />
                                            <div :class="[
                                                'w-3 h-3 rounded-full border flex items-center justify-center transition-colors',
                                                selectedLabel === label ? 'border-[#004CE5]' : 'border-[#0F1114]'
                                            ]">
                                                <div v-if="selectedLabel === label"
                                                    class="w-2 h-2 rounded-full bg-[#004CE5]"></div>
                                            </div>
                                        </div>
                                        <span
                                            class="text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em]">{{
                                                label }}</span>
                                    </label>
                                </div>

                                <input type="text" placeholder="Or type a custom label..."
                                    class="w-full px-[17px] py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-0.02em] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    </div>
</template>
