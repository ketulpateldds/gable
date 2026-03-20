<script setup>
import Navbar from '~/components/landlord/Navbar.vue'
import Sidebar from '~/components/landlord/Sidebar.vue'

// Sections with checklist items
const sections = ref([
    {
        title: 'Exterior/Front Yard',
        total: 7,
        expanded: true,
        items: [
            { name: 'Landscaping', condition: null, comment: '' },
            { name: 'Fences/Gates', condition: null, comment: '' },
            { name: 'Sprinklers/Timers', condition: null, comment: '' },
            { name: 'Walks/Driveway', condition: null, comment: '' },
            { name: 'Mailbox', condition: null, comment: '' },
            { name: 'Light Fixtures', condition: null, comment: '' },
            { name: 'Building Exterior', condition: null, comment: '' },
        ]
    },
    {
        title: 'Entry',
        total: 6,
        expanded: true,
        items: [
            { name: 'Screen Doors', condition: null, comment: '' },
            { name: 'Doors/Knobs/Locks', condition: null, comment: '' },
            { name: 'Flooring/Baseboards', condition: null, comment: '' },
            { name: 'Walls/Ceilings', condition: null, comment: '' },
            { name: 'Light Fixtures/Fans', condition: null, comment: '' },
            { name: 'Switches/Outlets', condition: null, comment: '' },
        ]
    },
    {
        title: 'Living Room',
        total: 7,
        expanded: true,
        items: [
            { name: 'Doors/Knobs/Locks', condition: null, comment: '' },
            { name: 'Flooring/Baseboards', condition: null, comment: '' },
            { name: 'Walls/Ceiling', condition: null, comment: '' },
            { name: 'Windows/Locks/Screens', condition: null, comment: '' },
            { name: 'Light Fixtures/Fans', condition: null, comment: '' },
            { name: 'Switches/Outlets', condition: null, comment: '' },
            { name: 'Fireplace Equipment', condition: null, comment: '' },
        ]
    },
])

const conditions = ['NEW', 'SATISFACTORY', 'OTHER']

function completedCount(section) {
    return section.items.filter(item => item.condition !== null).length
}

function toggleSection(section) {
    section.expanded = !section.expanded
}

function setCondition(item, cond) {
    item.condition = item.condition === cond ? null : cond
}

</script>

<template>
    <div class="flex min-h-screen bg-primary font-sans overflow-x-hidden">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-4 sm:px-6 py-[19px] flex flex-col">

                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-[21px]">
                    <div>
                        <h1 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[4px]">Move-in Inspection</h1>
                        <p class="text-[12px] text-[#0F111499] font-medium leading-4 tracking-[-0.02em]">
                            Complete the checklist, add photos, and leave comments for each section.
                        </p>
                    </div>
                    <div class="flex items-center gap-2 flex-wrap sm:shrink-0">
                        <button class="w-10 h-10 flex items-center justify-center rounded-full border border-[#0F1114]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                                <path d="M10 11v6M14 11v6" />
                                <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                            </svg>
                        </button>
                        <button
                            class="py-[13px] px-5 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-0.02em] text-[#0F1114] hover:bg-[#F5F5F5] transition-colors">
                            ARCHIVE
                        </button>
                        <button
                            class="py-[12px] pl-[18px] pr-5 rounded-[80px] text-white text-[12px] font-extrabold uppercase leading-[100%] tracking-[-0.02em] flex items-center gap-[10px]"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M12 5v14M5 12h14" />
                            </svg>
                            ADD INSPECTION LABEL
                        </button>
                    </div>
                </div>

                <div class="border border-[#0F11141A] rounded-[24px] mb-4">
                    <div class="py-[21px] px-6 border-b border-[#0F11141A]">
                        <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%]">Inspection info</h2>
                    </div>

                    <div
                        class="px-6 pt-[22px] pb-[21px] flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[104px]">
                        <div>
                            <p class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[4px]">
                                Property Name</p>
                            <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%] mb-[6px]">100 Main
                                St • San Francisco</p>
                            <button
                                class="text-[12px] font-extrabold text-[#004CE5] uppercase leading-[100%] tracking-[-0.02em]">
                                Edit</button>
                        </div>

                        <div>
                            <p class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[4px]">
                                Unit</p>
                            <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%]">Unit #1
                            </p>
                            <button
                                class="text-[12px] font-extrabold text-[#004CE5] uppercase leading-[100%] tracking-[-0.02em]">
                                Edit</button>
                        </div>

                        <div>
                            <p class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[4px]">
                                Tenant</p>
                            <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%]">John Doe</p>
                            <button
                                class="text-[12px] font-extrabold text-[#004CE5] uppercase leading-[100%] tracking-[-0.02em]">
                                Edit</button>
                        </div>

                        <div>
                            <p class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[4px]">
                                Assignee</p>
                            <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%]">Myself</p>
                            <button
                                class="text-[12px] font-extrabold text-[#004CE5] uppercase leading-[100%] tracking-[-0.02em]">
                                Edit</button>
                        </div>

                        <div>
                            <p class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[4px]">
                                Status</p>
                            <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%]">Not Started</p>
                            <button
                                class="text-[12px] font-extrabold text-[#004CE5] uppercase leading-[100%] tracking-[-0.02em]">
                                Edit</button>
                        </div>

                        <div>
                            <p class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[4px]">
                                Due Date</p>
                            <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%]">3/10/2026</p>
                            <button
                                class="text-[12px] font-extrabold text-[#004CE5] uppercase leading-[100%] tracking-[-0.02em]">
                                Edit</button>
                        </div>

                    </div>
                </div>

                <div v-for="(section, sIdx) in sections" :key="sIdx"
                    class="border border-[#0F11141A] rounded-[24px] mb-4 overflow-hidden">

                    <button @click="toggleSection(section)"
                        class="w-full flex items-center justify-between py-[18px] px-6 border-b border-[#0F11141A] text-left">
                        <div class="flex items-center gap-[10px]">
                            <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%]">{{ section.title }}</h2>
                            <div class="bg-[#F2F6FF] border border-[#004CE51A] rounded-[40px] px-3 pt-[6px] pb-[7px]">
                                <p class="text-[10px] font-extrabold text-[#004CE5] leading-[100%] uppercase">
                                    {{ completedCount(section) }}/{{ section.total }}
                                </p>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            :class="['transition-transform duration-200', section.expanded ? 'rotate-180' : '']">
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </button>

                    <div v-if="section.expanded" class="px-6 py-[25px] flex flex-col gap-4">
                        <div v-for="(item, iIdx) in section.items" :key="iIdx"
                            class="border border-[#0F11141A] rounded-[12px]">

                            <p
                                class="px-4 py-[13px] text-[16px] font-bold text-[#0F1114] leading-[100%] border-b border-[#0F11141A]">
                                {{ item.name }}
                            </p>

                            <div class="p-4 pb-[18px]">
                                <div class="flex flex-wrap items-center gap-2 mb-3">
                                    <label v-for="cond in conditions" :key="cond"
                                        class="flex items-center gap-2 py-[9px] pl-4 pr-[15px] rounded-[80px] border cursor-pointer select-none bg-[#0F111405] border-[#0F11141A]"
                                        @click.prevent="setCondition(item, cond)">
                                        <div :class="[
                                            'w-3 h-3 border flex items-center justify-center shrink-0 transition-colors',
                                            item.condition === cond
                                                ? 'bg-[#004CE5] border-[#004CE5]'
                                                : 'border-[#0F1114]'
                                        ]">
                                            <svg v-if="item.condition === cond" width="9" height="9" viewBox="0 0 24 24"
                                                fill="none" stroke="white" stroke-width="3.5">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span
                                            class="text-[12px] text-[#0F1114] font-semibold uppercase leading-[100%] tracking-[-0.02em]">
                                            {{ cond }}
                                        </span>
                                    </label>

                                    <button
                                        class="w-8 h-8 flex items-center justify-center rounded-full border border-[#0F11141A]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="#0F1114" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path
                                                d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                                            <circle cx="12" cy="13" r="4" />
                                        </svg>
                                    </button>
                                </div>

                                <textarea v-model="item.comment" placeholder="Add comment for this item..."
                                    class="w-full h-[88px] border border-[#0F11141A] rounded-[12px] px-4 py-[14px] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111499] leading-[100%] outline-none resize-none"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="border border-[#0F11141A] rounded-[24px] mb-4">
                    <div class="py-[21px] px-6 border-b border-[#0F11141A]">
                        <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%]">Personal Property</h2>
                    </div>

                    <div class="p-6">
                        <div class="flex items-center gap-2 mb-4">
                            <button
                                class="py-3 pl-[18px] pr-5 border border-[#0F1114] rounded-[80px] flex items-center gap-[10px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="#0F1114" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M12 5v14M5 12h14" />
                                </svg>
                                <p
                                    class="text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-0.02em]">
                                    Add Photos
                                </p>
                            </button>
                        </div>

                        <div
                            class="bg-[#FAFAFA] border border-dashed border-[#0F11141A] rounded-[12px] w-[164px] h-[104px] flex items-center justify-center mb-6">
                            <span class="text-[16px] font-bold text-[#0F111499] leading-5 tracking-[-0.02em]">Add</span>
                        </div>

                        <textarea placeholder="Add comment for this item..."
                            class="w-full h-[88px] border border-[#0F11141A] rounded-[12px] px-4 py-[14px] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111499] leading-[100%] outline-none resize-none"></textarea>
                    </div>

                </div>

                <div class="py-[62px] text-center text-[24px] font-bold text-[#000000] leading-[100%]">
                    Check rest of the parameters here:- <span class="text-[#004CE5] underline">Link</span>
                </div>

            </main>
        </div>
    </div>
</template>
