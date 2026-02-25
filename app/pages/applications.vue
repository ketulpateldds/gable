<script setup>
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'
import NewApplicationModal from '@/components/NewApplicationModal.vue'
import InviteApplicantModal from '@/components/InviteApplicantModal.vue'

const isNewAppOpen = ref(false)
const isInviteOpen = ref(false)

const activeTab = ref('all')
const searchQuery = ref('')

const tabs = [
    { key: 'all', label: 'ALL' },
    { key: 'new', label: 'NEW' },
    { key: 'screening', label: 'SCREENING' },
    { key: 'approved', label: 'APPROVED' },
    { key: 'denied', label: 'DENIED' },
]

const applicants = [
    {
        id: 1,
        name: 'Morgan Diaz',
        email: 'morgan@email.com',
        property: '123 Oak St – Unit 4',
        unit: 'Unit 4',
        moveIn: 'Jan 20, 2026',
        income: '$9,200',
        score: null,
        status: 'screening',
        statusLabel: 'Screening',
        phone: '(415) 555-0142',
        notes: 'Waiting of credit check.',
        checks: ['id', 'income'],
    },
    {
        id: 2,
        name: 'Jordan Lee',
        email: 'jordan@email.com',
        property: '55 Crystall Falls Dr',
        unit: 'Main',
        moveIn: 'Mar 1, 2026',
        income: '$11,200',
        score: 792,
        status: 'screening',
        statusLabel: 'Screening',
        phone: '(415) 555-0142',
        notes: 'Waiting of credit check.',
        checks: ['id', 'income', 'credit', 'background', 'references'],
    },
    {
        id: 3,
        name: 'Avery Patel',
        email: 'avery@email.com',
        property: '123 Oak St – Unit 4',
        unit: 'Unit 4',
        moveIn: 'Feb 15, 2026',
        income: '$7,800',
        score: null,
        status: 'screening',
        statusLabel: 'Screening',
        phone: '(415) 555-0142',
        notes: 'Waiting of credit check.',
        checks: ['id', 'income'],
    },
    {
        id: 4,
        name: 'Sam Rivera',
        email: 'sam@email.com',
        property: 'Portfolio',
        unit: '—',
        moveIn: 'Feb 5, 2026',
        income: '$8,400',
        score: null,
        status: 'screening',
        statusLabel: 'Screening',
        phone: '(415) 555-0142',
        notes: 'Waiting of credit check.',
        checks: ['id', 'income'],
    },
]

const selectedApplicantData = ref(applicants[1])

const checkLabels = {
    id: 'ID ✓',
    income: 'INCOME ✓',
    credit: 'CREDIT',
    background: 'BACKGROUND',
    references: 'REFERENCES',
}

const checkColors = {
    id: { bg: '#0FBC5F1A', text: '#00813C', border: '#0FBC5F1A' },
    income: { bg: '#0FBC5F1A', text: '#00813C', border: '#0FBC5F1A' },
    credit: { bg: '#004CE51A', text: '#004CE5', border: '#004CE580' },
    background: { bg: '#004CE51A', text: '#004CE5', border: '#004CE580' },
    references: { bg: '#004CE51A', text: '#004CE5', border: '#004CE580' },
}

// Checked badges (have ✓) use asymmetric padding; unchecked use symmetric
const checkPadding = {
    id: 'pl-3 pt-[5px] pb-[6px] pr-[10px]',
    income: 'pl-3 pt-[5px] pb-[6px] pr-[10px]',
    credit: 'px-3 pt-[5px] pb-[6px]',
    background: 'px-3 pt-[5px] pb-[6px]',
    references: 'px-3 pt-[5px] pb-[6px]',
}

const selectApplicant = (applicant) => {
    selectedApplicantData.value = applicant
}

const filteredApplicants = computed(() => {
    let list = applicants
    if (activeTab.value !== 'all') {
        list = list.filter(a => a.status === activeTab.value)
    }
    if (searchQuery.value) {
        const q = searchQuery.value.toLowerCase()
        list = list.filter(a =>
            a.name.toLowerCase().includes(q) ||
            a.email.toLowerCase().includes(q) ||
            a.property.toLowerCase().includes(q)
        )
    }
    return list
})
</script>

<template>
    <div class="flex min-h-screen bg-primary font-sans overflow-x-hidden">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-6 py-[19px] flex flex-col">

                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                    <div>
                        <h1 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[4px]">Applications</h1>
                        <p class="text-[12px] text-[#0F111499] font-medium leading-4 tracking-[-2%]">Track applicants,
                            screening steps, and approvals.</p>
                    </div>
                    <div class="flex items-center gap-2 flex-wrap">
                        <button
                            class="h-10 px-5 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] hover:bg-slate-50 transition-colors whitespace-nowrap">
                            IMPORT
                        </button>
                        <button @click="isInviteOpen = true"
                            class="h-10 px-5 rounded-[80px] bg-[#0F1114] text-[12px] font-extrabold text-primary uppercase leading-[100%] tracking-[-2%] transition-colors whitespace-nowrap">
                            INVITE APPLICANT
                        </button>
                        <button @click="isNewAppOpen = true"
                            class="h-10 pl-[18px] pr-[19px] rounded-[80px] text-[12px] font-extrabold text-white uppercase leading-[100%] tracking-[-2%] flex items-center gap-[10px] whitespace-nowrap"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white"
                                stroke-width="2.5">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                            NEW APPLICATION
                        </button>
                    </div>
                </div>

                <div class="border border-[#0F11141A] rounded-[24px] pt-6 mb-6">
                    <div class="pl-6 pr-[25px] flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                        <div class="flex flex-wrap items-center gap-1">
                            <button v-for="tab in tabs" :key="tab.key" @click="activeTab = tab.key"
                                class="h-8 px-[15px] rounded-[80px] text-[12px] uppercase leading-[100%] tracking-[-2%] transition-all whitespace-nowrap"
                                :class="activeTab === tab.key
                                    ? 'text-primary bg-[#0F1114] font-bold'
                                    : 'text-[#0F1114] border border-[#0F11141A] font-semibold'">
                                {{ tab.label }}
                            </button>
                        </div>

                        <div class="flex items-center gap-1 flex-wrap">
                            <div class="relative w-full sm:w-auto">
                                <div
                                    class="absolute inset-y-0 left-2 top-2 h-6 w-6 px-[5px] flex items-center pointer-events-none">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F111466"
                                        stroke-width="2">
                                        <circle cx="11" cy="11" r="8" />
                                        <path d="m21 21-4.35-4.35" />
                                    </svg>
                                </div>
                                <input v-model="searchQuery" type="text"
                                    placeholder="Search applicant, property, email..."
                                    class="h-10 w-full sm:w-[254px] border border-[#0F11141A] rounded-[80px] pl-[38px] pr-3 text-[12px] font-semibold leading-[100%] tracking-[-2%] placeholder:text-[#0F111466] focus:outline-none" />
                            </div>

                            <button
                                class="h-10 pl-5 pr-[15px] py-[10px] rounded-[80px] border border-[#0F11141A] flex items-center gap-[14px] text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] hover:bg-slate-50 transition-colors whitespace-nowrap">
                                ALL PROPERTIES
                                <div class="w-5 h-5 flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                        stroke-width="2.5">
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </div>
                            </button>

                            <button
                                class="h-10 pl-5 pr-[15px] py-[10px] rounded-[80px] border border-[#0F11141A] flex items-center gap-[14px] text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] hover:bg-slate-50 transition-colors whitespace-nowrap">
                                ALL STATUS
                                <div class="w-5 h-5 flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                        stroke-width="2.5">
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </div>
                            </button>

                            <button
                                class="h-10 w-10 rounded-full p-[10px] bg-[#0F1114] flex items-center justify-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF"
                                    stroke-width="2">
                                    <path
                                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </button>

                            <button
                                class="h-10 w-10 rounded-full p-[10px] bg-[#0F1114] flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-share-2">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M8 9h-1a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-1" />
                                    <path d="M12 14v-11" />
                                    <path d="M9 6l3 -3l3 3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="w-full min-w-[700px]">
                            <thead>
                                <tr class="bg-[#FAFAFA] border-y border-[#0F11141A]">
                                    <th
                                        class="text-left text-[14px] font-bold text-[#0F111499] leading-[100%] tracking-[-2%] pl-6 pr-5 pt-[14px] pb-[13px] whitespace-nowrap">
                                        Applicant</th>
                                    <th
                                        class="text-left text-[14px] font-bold text-[#0F111499] leading-[100%] tracking-[-2%] pt-[14px] pb-[13px] pr-5 whitespace-nowrap">
                                        Property</th>
                                    <th
                                        class="text-left text-[14px] font-bold text-[#0F111499] leading-[100%] tracking-[-2%] pt-[14px] pb-[13px] pr-5 whitespace-nowrap">
                                        Unit</th>
                                    <th
                                        class="text-left text-[14px] font-bold text-[#0F111499] leading-[100%] tracking-[-2%] pt-[14px] pb-[13px] pr-5 whitespace-nowrap">
                                        Move-in</th>
                                    <th
                                        class="text-left text-[14px] font-bold text-[#0F111499] leading-[100%] tracking-[-2%] pt-[14px] pb-[13px] pr-5 whitespace-nowrap">
                                        Income</th>
                                    <th
                                        class="text-left text-[14px] font-bold text-[#0F111499] leading-[100%] tracking-[-2%] pt-[14px] pb-[13px] pr-5 whitespace-nowrap">
                                        Score</th>
                                    <th
                                        class="text-left text-[14px] font-bold text-[#0F111499] leading-[100%] tracking-[-2%] pt-[14px] pb-[13px] pr-5 whitespace-nowrap">
                                        Status</th>
                                    <th
                                        class="text-left text-[14px] font-bold text-[#0F111499] leading-[100%] tracking-[-2%] pt-[14px] pb-[13px] pr-[22px] whitespace-nowrap w-px">
                                        Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="applicant in filteredApplicants" :key="applicant.id"
                                    @click="selectApplicant(applicant)"
                                    class="border-b border-[#0F11141A] cursor-pointer last:border-0"
                                    :class="applicant.id === selectedApplicantData?.id ? 'bg-[#0F11141A]' : ''">

                                    <td class="pl-6 pt-[15px] pb-4 pr-5">
                                        <div class="flex flex-col">
                                            <span
                                                class="text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%] mb-[2px]">
                                                {{ applicant.name }}</span>
                                            <span
                                                class="text-[12px] text-[#0F111466] font-semibold leading-[100%] tracking-[-2%]">
                                                {{ applicant.email }}</span>
                                        </div>
                                    </td>

                                    <td class="pt-6 pb-[23px] pr-5">
                                        <span
                                            class="text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                            {{ applicant.property }}</span>
                                    </td>

                                    <td class="pt-6 pb-[23px] pr-5">
                                        <span
                                            class="text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                            {{ applicant.unit }}</span>
                                    </td>

                                    <td class="pt-6 pb-[23px] pr-5">
                                        <span
                                            class="text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                            {{ applicant.moveIn }}</span>
                                    </td>

                                    <td class="pt-6 pb-[23px] pr-5">
                                        <span
                                            class="text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                            {{ applicant.income }}</span>
                                    </td>

                                    <td class="pt-6 pb-[23px] pr-5">
                                        <span
                                            class="text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                            {{ applicant.score ?? '—' }}</span>
                                    </td>

                                    <td class="pt-6 pb-[23px] pr-5">
                                        <span
                                            class="text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                            {{ applicant.statusLabel }}</span>
                                    </td>

                                    <td class="py-[14px] pr-[23px] w-px whitespace-nowrap">
                                        <div class="flex items-center gap-1">
                                            <button
                                                class="w-8 h-8 rounded-full bg-[#0F1114] p-[6px] flex items-center justify-center hover:opacity-80 transition-opacity"
                                                @click.stop>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                    stroke="white" stroke-width="3">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </button>

                                            <button
                                                class="w-8 h-8 rounded-full p-[6px] bg-[#F2F2F2] flex items-center justify-center hover:bg-[#0F11141A] transition-colors"
                                                @click.stop>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                    stroke="#0F1114" stroke-width="2.5">
                                                    <line x1="18" y1="6" x2="6" y2="18" />
                                                    <line x1="6" y1="6" x2="18" y2="18" />
                                                </svg>
                                            </button>

                                            <button
                                                class="w-8 h-8 rounded-full border border-[#0F11141A] flex items-center justify-center hover:bg-slate-100 transition-colors"
                                                @click.stop>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 24 24" fill="none" stroke="#0F1114" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    class="icon icon-tabler icons-tabler-outline icon-tabler-pencil">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                                    <path d="M13.5 6.5l4 4" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

                    <div class="border border-[#0F11141A] rounded-[24px] p-[25px] pt-[22px]">
                        <h3 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-5">Application
                            Details</h3>

                        <div
                            class="bg-[#F2F6FF] border border-[#004CE51A] rounded-[12px] px-[17px] py-[13px] mb-4 text-[14px] font-bold text-[#004CE5] leading-[18px]">
                            Demo page: screening steps and attachments are placeholders (UI-only).
                        </div>

                        <div v-if="selectedApplicantData">
                            <div class="pt-[15px] px-[13px] pb-[17px] border border-[#0F11141A] rounded-[12px] mb-4">
                                <p
                                    class="ml-1 text-[12px] font-semibold text-[#0F111466] uppercase leading-[100%] mb-[4px] h-[14px]">
                                    SELECTED APPLICANT</p>
                                <p class="ml-1 text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%] mb-[6px]">
                                    {{ selectedApplicantData.name }} · {{ selectedApplicantData.property }} · {{
                                        selectedApplicantData.unit }}
                                </p>
                                <p class="ml-1 text-[12px] text-[#0F111499] font-semibold leading-[100%] mb-[13px]">
                                    {{ selectedApplicantData.moveIn }} move-in
                                    <template v-if="selectedApplicantData.score"> ·
                                        Score {{ selectedApplicantData.score }}
                                        · {{ selectedApplicantData.statusLabel }}</template>
                                    <template v-else> · {{ selectedApplicantData.statusLabel }}</template>
                                </p>

                                <div class="flex flex-wrap gap-[4px]">
                                    <span v-for="check in selectedApplicantData.checks" :key="check"
                                        class="text-[10px] font-semibold rounded-[40px] border uppercase leading-[100%] tracking-[-2%]"
                                        :class="checkLabels[check].includes('✓')
                                            ? 'pl-3 pt-[5px] pb-[6px] pr-[10px]'
                                            : 'px-3 pt-[5px] pb-[6px]'"
                                        :style="`background:${checkColors[check].bg}; color:${checkColors[check].text}; border-color:${checkColors[check].border}`">
                                        {{ checkLabels[check] }}
                                    </span>
                                </div>
                            </div>

                            <div class="flex flex-col sm:flex-row gap-4 mb-6">
                                <div class="w-full sm:flex-1 border border-[#0F11141A] rounded-[12px] px-4 py-[14px]">
                                    <p
                                        class="text-[12px] font-semibold text-[#0F111466] uppercase leading-[100%] mb-[4px]">
                                        CONTACT</p>
                                    <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%] mb-[6px]">
                                        {{ selectedApplicantData.phone }}</p>
                                    <p class="text-[12px] text-[#0F111499] font-semibold leading-[100%]">{{
                                        selectedApplicantData.email }}</p>
                                </div>
                                <div class="w-full sm:flex-1 border border-[#0F11141A] rounded-[12px] px-4 py-[14px]">
                                    <p
                                        class="text-[12px] font-semibold text-[#0F111466] uppercase leading-[100%] mb-[4px]">
                                        NOTES</p>
                                    <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%]">
                                        {{ selectedApplicantData.notes }}</p>
                                </div>
                            </div>

                            <div class="flex flex-wrap justify-end gap-2">
                                <button
                                    class="h-10 px-6 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] hover:bg-slate-50 transition-colors whitespace-nowrap">
                                    REQUEST DOCS
                                </button>
                                <button
                                    class="h-10 px-6 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] hover:bg-slate-50 transition-colors whitespace-nowrap">
                                    RUN SCREENING
                                </button>
                                <button
                                    class="h-10 px-6 rounded-[80px] bg-[#0F1114] text-[12px] font-extrabold text-white uppercase leading-[100%] tracking-[-2%] hover:opacity-90 transition-opacity whitespace-nowrap">
                                    INVITE APPLICANT
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="border border-[#0F11141A] rounded-[24px] p-[25px] pt-[22px]">
                        <h3 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-5 h-[19px]">Next actions</h3>

                        <div class="px-[17px] py-[15px] border border-[#0F11141A] rounded-[12px] mb-5">
                            <p
                                class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-1 h-[14px]">
                                TODAY
                            </p>
                            <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%] mb-[6px]">2 pending
                            </p>
                            <p class="text-[12px] text-[#0F111499] font-semibold leading-[100%]">Use the drawer to
                                update status and screening steps.</p>
                        </div>

                        <p class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[10px]">Recommended checks</p>
                        <ul class="flex flex-col gap-[7px]">
                            <li v-for="item in [
                                'Verify income (pay stubs / bank statements)',
                                'Employment verification',
                                'Credit & background screening',
                                'Rental history / landlord reference',
                                'Confirm move-in timeline',
                            ]" :key="item" class="flex items-start gap-2">
                                <span class="mt-[5px] w-[4px] h-[4px] rounded-full bg-[#0F111499] shrink-0"></span>
                                <span class="text-[12px] font-bold text-[#0F111499] leading-[100%]">{{ item }}</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </main>
        </div>

        <NewApplicationModal :is-open="isNewAppOpen" @close="isNewAppOpen = false" />
        <InviteApplicantModal :is-open="isInviteOpen" @close="isInviteOpen = false" />
    </div>
</template>
