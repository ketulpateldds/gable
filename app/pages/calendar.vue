<script setup>
const activeTab = ref('ALL')
const tabs = ['ALL', 'INSPECTIONS', 'MAINTENANCE', 'LEASING', 'REMINDERS']

// Dynamic Calendar Logic
const currentDate = ref(new Date(2026, 1, 1)) // Start at February 2026 for consistency

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
    { date: '2026-02-06', title: 'Unit 4...', color: '#3388FF' },
    { date: '2026-02-11', title: 'Plumbi...', color: '#FF9933' },
    { date: '2026-02-19', title: 'Lease...', color: '#33FF99' },
    { date: '2026-02-24', title: 'Send...', color: '#FF3333' }
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
</script>

<template>
    <div class="flex min-h-screen bg-primary">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 p-6 lg:p-10 overflow-y-auto">
                <div class="max-w-[1400px] mx-auto flex flex-col gap-10">
                    <!-- Top Header -->
                    <div class="flex flex-col gap-1">
                        <div class="flex items-center justify-between">
                            <h1 class="text-[28px] font-bold text-[#0F1114] leading-tight">Calendar</h1>
                            <div class="flex items-center gap-3">
                                <button @click="goToToday"
                                    class="h-[42px] px-8 rounded-full border border-[#0F11141A] bg-white text-[13px] font-bold uppercase tracking-tight text-[#0F1114] hover:bg-[#F9FAFB] transition-colors">
                                    TODAY
                                </button>
                                <button
                                    class="h-[42px] pl-5 pr-6 rounded-full text-white text-[13px] font-bold uppercase tracking-tight flex items-center gap-2 shadow-[0px_4px_12px_rgba(0,76,230,0.25)] transition-transform hover:scale-[1.02]"
                                    style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                    ADD EVENT
                                </button>
                            </div>
                        </div>
                        <p class="text-[14px] font-medium text-[#0F111466] leading-none">
                            Track inspections, maintenance, lease renewals, and reminders.
                        </p>
                    </div>

                    <!-- Search & Filters Row -->
                    <div class="flex items-center gap-5">
                        <div class="relative flex-1 group">
                            <div
                                class="absolute left-6 top-1/2 -translate-y-1/2 text-[#0F111433] group-focus-within:text-[#004CE6] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.3-4.3" />
                                </svg>
                            </div>
                            <input type="text" placeholder="Search: property, tenant, title.."
                                class="w-full h-[52px] pl-[56px] pr-6 rounded-full border border-[#0F11140D] bg-white text-[14px] font-medium text-[#0F1114] outline-none placeholder:text-[#0F111433] focus:border-[#004CE633] transition-all shadow-sm" />
                        </div>
                        <div class="flex items-center gap-2">
                            <button v-for="tab in tabs" :key="tab" @click="activeTab = tab"
                                class="h-[44px] px-6 rounded-full text-[13px] font-bold uppercase tracking-tight transition-all"
                                :class="activeTab === tab ? 'bg-[#0F1114] text-white' : 'bg-white border border-[#0F11141A] text-[#0F1114] hover:bg-[#F9FAFB]'">
                                {{ tab }}
                            </button>
                        </div>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-8">
                        <!-- Main Calendar -->
                        <div class="flex-1 flex flex-col gap-5">
                            <h3 class="text-[18px] font-bold text-[#0F1114]">Month</h3>
                            <div class="bg-white border border-[#0F11140D] rounded-[32px] p-8 shadow-sm">
                                <div class="flex items-center justify-between mb-8">
                                    <div class="flex items-center gap-3">
                                        <button @click="prevMonth"
                                            class="w-10 h-10 flex items-center justify-center rounded-full border border-[#0F11140D] text-[#0F1114] hover:bg-[#F9FAFB] transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path d="m15 18-6-6 6-6" />
                                            </svg>
                                        </button>
                                        <button @click="nextMonth"
                                            class="w-10 h-10 flex items-center justify-center rounded-full border border-[#0F11140D] text-[#0F1114] hover:bg-[#F9FAFB] transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path d="m9 18 6-6-6-6" />
                                            </svg>
                                        </button>
                                    </div>
                                    <h2 class="text-[20px] font-bold text-[#0F1114]">{{ monthYearString }}</h2>
                                    <button
                                        class="h-10 px-6 rounded-full border border-[#0F11141A] text-[13px] font-bold uppercase tracking-tight text-[#0F1114] hover:bg-[#F9FAFB]">
                                        TOGGLE LIST
                                    </button>
                                </div>

                                <div class="grid grid-cols-7 gap-3">
                                    <!-- Weekday Headers -->
                                    <div v-for="day in daysOfWeek" :key="day"
                                        class="h-8 flex items-center justify-start px-2">
                                        <span class="text-[13px] font-bold text-[#0F111466]">{{ day }}</span>
                                    </div>
                                    <!-- Day Cells -->
                                    <div v-for="(item, index) in calendarDays" :key="index"
                                        class="aspect-[1.1] p-3 rounded-[24px] border border-[#0F111408] bg-white flex flex-col gap-1 transition-all hover:shadow-md cursor-pointer"
                                        :class="!item.currentMonth ? 'opacity-20 pointer-events-none' : 'shadow-[0px_2px_8px_rgba(15,17,20,0.02)]'">
                                        <span class="text-[14px] font-bold text-[#0F1114]">{{ item.date }}</span>
                                        <div v-if="item.events" class="mt-auto flex flex-col gap-1 pb-1">
                                            <div v-for="(event, eIdx) in item.events" :key="eIdx"
                                                class="px-3 py-1.5 rounded-full text-[11px] font-bold truncate leading-none"
                                                :style="{
                                                    backgroundColor: event.color + '1A',
                                                    color: event.color
                                                }">
                                                {{ event.title }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Upcoming Bar -->
                        <div class="w-full lg:w-[360px] flex flex-col gap-5">
                            <h3 class="text-[18px] font-bold text-[#0F1114]">Upcoming</h3>
                            <div class="bg-white border border-[#0F11140D] rounded-[32px] p-8 shadow-sm h-full">
                                <div class="flex flex-col gap-4">
                                    <div v-for="(event, idx) in upcomingEvents" :key="idx"
                                        class="p-6 rounded-[24px] border border-[#0F11140D] hover:bg-[#F9FAFB] transition-all cursor-pointer group hover:shadow-sm">
                                        <h4
                                            class="text-[16px] font-bold text-[#0F1114] mb-2 group-hover:text-[#004CE6] transition-colors leading-tight">
                                            {{ event.title }}
                                        </h4>
                                        <p class="text-[12px] font-medium text-[#0F111466] mb-1">
                                            {{ event.date }}
                                        </p>
                                        <p class="text-[12px] font-semibold text-[#0F111433] uppercase tracking-wide">
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
    </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
