<script setup>
import AddEventModal from '~/components/landlord/AddEventModal.vue'
import Navbar from '~/components/landlord/Navbar.vue'
import Sidebar from '~/components/landlord/Sidebar.vue'

const activeTab = ref('ALL')
const tabs = ['ALL', 'INSPECTIONS', 'MAINTENANCE', 'LEASING', 'REMINDERS']

// Dynamic Calendar Logic
const currentDate = ref(new Date()) // Start at February 2026 for consistency

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const monthYearString = computed(() => {
    return currentDate.value.toLocaleString('default', { month: 'long', year: 'numeric' })
})

const calendarDays = computed(() => {
    const year = currentDate.value.getFullYear()
    const month = currentDate.value.getMonth()

    // First day of the month
    const firstDayOfMonth = new Date(year, month, 1)
    const startingDayOfWeek = firstDayOfMonth.getDay() // 0 (Sun) to 6 (Sat)

    // Days in current month
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    // Days in previous month (for padding)
    const prevMonthLastDay = new Date(year, month, 0).getDate()

    const days = []

    // Previous month padding
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
        days.push({
            date: prevMonthLastDay - i,
            currentMonth: false,
            monthOffset: -1
        })
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
        days.push({
            date: i,
            currentMonth: true,
            monthOffset: 0,
            events: getEventsForDate(year, month, i)
        })
    }

    // Next month padding (to fill 6 weeks = 42 days)
    const remainingDays = 42 - days.length
    for (let i = 1; i <= remainingDays; i++) {
        days.push({
            date: i,
            currentMonth: false,
            monthOffset: 1
        })
    }

    return days
})

const nextMonth = () => {
    currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1)
}

const prevMonth = () => {
    currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1)
}

const goToToday = () => {
    currentDate.value = new Date()
}

// Mock Events Data
const eventsData = [
    { date: '2026-02-06', title: 'Unit 4...', color: '#004CE5', borderColor: '#004CE51A', bgColor: '#F2F6FF' },
    { date: '2026-02-11', title: 'Plumbing', color: '#A16600', borderColor: '#E599171A', bgColor: '#FFF9F2' },
    { date: '2026-02-19', title: 'Lease...', color: '#21A635', borderColor: '#21A6351A', bgColor: '#F2FFF4' },
    { date: '2026-02-24', title: 'Send...', color: '#CC2929', borderColor: '#CC29291A', bgColor: '#FFF2F2' }
]

const getEventsForDate = (year, month, day) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return eventsData.filter(e => e.date === dateStr)
}

const upcomingEvents = [
    {
        title: 'Lease renewal check-in',
        date: 'Feb 19, 2026 09:00 - 55 Crystal Falls Dr',
        subtitle: 'Jordan Tenant'
    },
    {
        title: 'Send owner statement',
        date: 'Feb 24, 2026 - Portfolio',
        subtitle: 'Owner'
    }
]

const isAddEventModalOpen = ref(false)

const openAddEventModal = () => {
    isAddEventModalOpen.value = true
}

const closeAddEventModal = () => {
    isAddEventModalOpen.value = false
}

const handleSaveEvent = (eventData) => {
    console.log('Saving event:', eventData)
    // Add logic here to save the event to the eventsData array if needed
}
</script>

<template>
    <div class="flex min-h-screen bg-primary">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-6 pt-[19px] pb-[31px] overflow-y-auto">
                <div class="max-w-[1400px] mx-auto">

                    <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-5">
                        <div>
                            <h1 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-1">Calendar</h1>
                            <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">
                                Track inspections, maintenance, lease renewals, and reminders.
                            </p>
                        </div>

                        <div class="flex items-center gap-2 mt-[2px]">
                            <button @click="goToToday"
                                class="h-10 px-5 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] text-[#0F1114]">
                                TODAY
                            </button>
                            <button @click="openAddEventModal"
                                class="h-10 pl-[18px] pr-[22px] rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] flex items-center gap-[10px]"
                                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                                ADD EVENT
                            </button>
                        </div>
                    </div>

                    <div class="flex flex-col md:flex-row items-stretch md:items-center gap-2 mb-6">
                        <div class="relative flex-1 group">
                            <div
                                class="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center p-1 text-[#0F111466]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.3-4.3" />
                                </svg>
                            </div>
                            <input type="text" placeholder="Search: property, tenant, title.."
                                class="w-full h-10 pl-[38px] pr-6 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] outline-none placeholder:text-[#0F111466] leading-[100%] tracking-[-2%]" />
                        </div>
                        <div class="flex items-center gap-1 overflow-x-auto scrollbar-hide pb-2 md:pb-0">
                            <button v-for="tab in tabs" :key="tab" @click="activeTab = tab"
                                class="h-8 px-4 rounded-[80px] text-[12px] uppercase leading-[100%] tracking-[-2%] transition-all whitespace-nowrap"
                                :class="activeTab === tab ? 'bg-[#0F1114] font-bold text-primary' : 'bg-white border border-[#0F11141A] text-[#0F1114] font-semibold'">
                                {{ tab }}
                            </button>
                        </div>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-4 items-start">
                        <div
                            class="flex flex-col border border-[#0F11141A] rounded-[24px] w-full lg:w-[752px] py-[21px] overflow-hidden">

                            <h3
                                class="text-[16px] font-bold text-[#0F1114] leading-[100%] px-[24px] pb-5 border-b border-[#0F11141A] mb-4">
                                Month</h3>

                            <div class="px-6">
                                <div class="flex items-center justify-between gap-2 mb-[13px]">
                                    <div class="flex items-center gap-1">
                                        <button @click="prevMonth"
                                            class="w-8 h-8 flex items-center justify-center p-[6px] rounded-full border border-[#0F11141A] text-[#0F1114] hover:bg-[#F9FAFB] transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path d="m15 18-6-6 6-6" />
                                            </svg>
                                        </button>
                                        <button @click="nextMonth"
                                            class="w-8 h-8 flex items-center justify-center p-[6px] rounded-full border border-[#0F11141A] text-[#0F1114] hover:bg-[#F9FAFB] transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path d="m9 18 6-6-6-6" />
                                            </svg>
                                        </button>
                                    </div>

                                    <h2 class="text-[12px] sm:text-[16px] font-bold text-[#0F1114] leading-[100%]">
                                        {{ monthYearString }}</h2>

                                    <button
                                        class="h-8 px-4 rounded-[80px] border border-[#0F11141A] text-[10px] sm:text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-[#0F1114] hover:bg-[#F9FAFB]">
                                        TOGGLE LIST
                                    </button>
                                </div>

                                <div class="grid grid-cols-7 gap-1 sm:gap-2 mb-[5px] ml-1">
                                    <div v-for="day in daysOfWeek" :key="day" class="text-center sm:text-left">
                                        <span
                                            class="text-[10px] sm:text-[12px] font-bold text-[#0F111499] leading-[100%]">{{
                                                day
                                            }}</span>
                                    </div>
                                </div>

                                <div class="grid grid-cols-7 gap-1 sm:gap-2 mb-[13px]">
                                    <div v-for="(item, index) in calendarDays" :key="index"
                                        class="min-h-[60px] sm:h-[92px] p-1.5 sm:p-3 sm:pr-[11px] rounded-[8px] sm:rounded-[12px] border border-[#0F11141A] flex flex-col gap-1 cursor-pointer overflow-hidden"
                                        :class="[!item.currentMonth ? 'opacity-20 pointer-events-none' : 'shadow-[0px_2px_8px_rgba(15,17,20,0.02)]', item.events?.length ? 'bg-[#F9FAFB]' : '']">

                                        <span
                                            class="text-[12px] sm:text-[14px] font-extrabold text-[#0F1114] leading-[100%]">
                                            {{ item.date }}
                                        </span>

                                        <div v-if="item.events && item.events.length > 0"
                                            class="flex flex-col gap-1 pb-1">
                                            <div v-for="(event, eIdx) in item.events" :key="eIdx"
                                                class="px-1 sm:px-3 py-1 sm:py-1.5 h-auto sm:h-[26px] rounded-[60px] text-[8px] sm:text-[12px] font-bold truncate leading-[100%] tracking-[-2%]"
                                                :style="{
                                                    backgroundColor: event.bgColor,
                                                    border: `1px solid ${event.borderColor}`,
                                                    color: event.color
                                                }">
                                                <span class="hidden sm:inline">{{ event.title }}</span>
                                                <div class="sm:hidden w-1.5 h-1.5 rounded-full mx-auto"
                                                    :style="{ backgroundColor: event.color }"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p class="text-[12px] font-bold text-[#0F111499] leading-4 tracking-[-2%]">Tip: Click a
                                    day to add an event on that date. Events are demo data stored in-memory.</p>
                            </div>
                        </div>

                        <div
                            class="w-full lg:w-[368px] flex flex-col border border-[#0F11141A] rounded-[24px] pt-[21px] p-[25px] h-fit">

                            <h3 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-5">Upcoming</h3>

                            <div class="bg-white rounded-[12px]">
                                <div class="flex flex-col gap-2">
                                    <div v-for="(event, idx) in upcomingEvents" :key="idx"
                                        class="px-[17px] pt-[13px] pb-[15px] rounded-[12px] border border-[#0F11141A] cursor-pointer group">

                                        <h4
                                            class="text-[16px] font-bold text-[#0F1114] mb-[6px] leading-5 tracking-[-2%]">
                                            {{ event.title }}
                                        </h4>
                                        <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%] mb-[6px]">
                                            {{ event.date }}
                                        </p>
                                        <p class="text-[12px] font-bold text-[#0F111499] leading-[100%]">
                                            {{ event.subtitle }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

        <AddEventModal :is-open="isAddEventModalOpen" @close="closeAddEventModal" @save="handleSaveEvent" />
    </div>
</template>
