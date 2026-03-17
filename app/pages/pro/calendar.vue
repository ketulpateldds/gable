<script setup lang="ts">
import Navbar from '@/components/landlord/Navbar.vue'
import Sidebar from '~/components/pro/Sidebar.vue';

interface CalendarDay {
    day: number | null
    key: string
}

const today: Date = new Date()
const currentDate = ref<Date>(new Date())

const daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const monthYearLabel = computed<string>(() => {
    return currentDate.value.toLocaleString('default', { month: 'long', year: 'numeric' })
})

const calendarDays = computed<CalendarDay[]>(() => {
    const year: number = currentDate.value.getFullYear()
    const month: number = currentDate.value.getMonth()

    // First day of the month
    const firstDayOfMonth: Date = new Date(year, month, 1)
    const startingDay: number = firstDayOfMonth.getDay()

    // Last day of the month
    const lastDayOfMonth: Date = new Date(year, month + 1, 0)
    const totalDays: number = lastDayOfMonth.getDate()

    const days: CalendarDay[] = []

    // Padding for previous month
    for (let i = 0; i < startingDay; i++) {
        days.push({ day: null, key: `pad-${i}` })
    }

    // Days of current month
    for (let i = 1; i <= totalDays; i++) {
        days.push({ day: i, key: `day-${i}` })
    }

    return days
})

const prevMonth = (): void => {
    currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1)
}

const nextMonth = (): void => {
    currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1)
}

const goToday = (): void => {
    currentDate.value = new Date(today.getFullYear(), today.getMonth(), 1)
}
</script>

<template>
    <div class="relative flex min-h-screen bg-primary font-sans overflow-x-hidden">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-4 sm:px-6 pt-[21px] pb-10 flex flex-col">

                <!-- Calendar Header -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                    <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div class="flex items-center gap-4">
                            <button @click="prevMonth"
                                class="w-8 h-8 border border-[#0F11141A] rounded-full flex items-center justify-center hover:bg-black/5 transition-colors">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                    stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m15 18-6-6 6-6" />
                                </svg>
                            </button>
                            <h1
                                class="text-[16px] font-bold text-[#0F1114] leading-[100%] tracking-[-1%] px-5 sm:w-auto text-center min-w-[140px]">
                                {{ monthYearLabel }}
                            </h1>
                            <button @click="nextMonth"
                                class="w-8 h-8 border border-[#0F11141A] rounded-full flex items-center justify-center hover:bg-black/5 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                    stroke-linejoin="round" class="icon icon-tabler icons-tabler-plus">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 5l0 14" />
                                    <path d="M5 12l14 0" />
                                </svg>
                            </button>
                        </div>
                        <button @click="goToday"
                            class="px-[16px] py-[9px] border border-[#0F11141A] rounded-[80px] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] hover:bg-black/5 transition-colors">
                            Today
                        </button>
                    </div>
                    <button
                        class="pl-[18px] pr-5 py-3 text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%] rounded-[80px] flex items-center gap-[10px] w-fit sm:w-auto"
                        style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                        <div class="w-[16px] h-[16px] flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </div>
                        Add Reminder
                    </button>
                </div>

                <!-- Calendar Content Container -->
                <div
                    class="flex-1 border border-[#0F11141A] rounded-[24px] p-4 sm:p-[25px] sm:pt-[23px] flex flex-col overflow-hidden">
                    <div class="grid grid-cols-7 mb-[5px]">
                        <div v-for="day in daysOfWeek" :key="day"
                            class="text-center text-[10px] sm:text-[12px] font-bold text-[#0F111499] leading-[100%]">
                            {{ day }}
                        </div>
                    </div>

                    <div
                        class="grid grid-cols-7 gap-1 sm:gap-2 mb-4 flex-1 overflow-y-auto sm:overflow-visible pr-1 sm:pr-0">
                        <div v-for="date in calendarDays" :key="date.key"
                            class="min-h-[80px] sm:min-h-[120px] border border-[#0F11141A] rounded-[8px] sm:rounded-[12px] py-[8px] px-[8px] sm:py-[10px] sm:px-[12px] flex flex-col transition-all hover:border-[#004CE533] hover:shadow-sm"
                            :class="{ 'opacity-0 pointer-events-none': !date.day }">
                            <span v-if="date.day"
                                class="text-[12px] sm:text-[14px] font-extrabold text-[#0F1114] leading-[100%]">{{
                                    date.day }}</span>
                        </div>
                    </div>

                    <div
                        class="mt-auto border border-[#0F11141A] rounded-[12px] p-4 sm:px-6 sm:py-[20px] flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div class="flex flex-col text-center sm:text-left">
                            <h3 class="text-[14px] sm:text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[5px]">
                                Connect
                                your Google calendar</h3>
                            <p class="text-[10px] sm:text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">
                                Sync
                                events so you can stay on top of work and never miss anything.</p>
                        </div>
                        <button
                            class="w-full sm:w-auto px-[20px] py-[12px] sm:py-[14px] text-white text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%] rounded-[80px]"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                            Connect
                        </button>
                    </div>
                </div>

            </main>
        </div>
    </div>
</template>
