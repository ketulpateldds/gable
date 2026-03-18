<script setup lang="ts">
import Navbar from '@/components/landlord/Navbar.vue'
import AddRequestModal from '~/components/pro/AddRequestModal.vue';
import Sidebar from '~/components/pro/Sidebar.vue';

const isAddRequestModalOpen = ref<boolean>(false)

</script>

<template>
    <div class="relative flex min-h-screen bg-primary font-sans overflow-x-hidden">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-4 sm:px-6 pt-[19px] pb-10 flex flex-col">

                <!-- Header -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 mb-3">
                    <div>
                        <h1 class="text-[20px] font-bold text-neutral-primary leading-[100%] mb-[4px]">Dashboard</h1>
                        <p class="text-[12px] text-neutral-primary/60 font-medium leading-4 tracking-[-2%]">Track
                            requests, job
                            progress, and upcoming reminders across your properties.</p>
                    </div>
                    <button @click="isAddRequestModalOpen = true"
                        class="pl-[18px] py-3 pr-[21px] text-white text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%] rounded-[80px] flex items-center gap-[10px] w-fit"
                        style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-plus">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 5l0 14" />
                            <path d="M5 12l14 0" />
                        </svg>
                        Add Request
                    </button>
                </div>

                <!-- Filters -->
                <div class="flex flex-wrap items-center gap-2 sm:gap-1 mb-6">
                    <button
                        class="bg-neutral-primary rounded-[80px] py-[10px] px-[17px] text-white text-[12px] font-bold uppercase tracking-[-2%] leading-[100%]">
                        New request
                    </button>
                    <button
                        class="border border-neutral-primary/10 rounded-[80px] py-[9px] px-[13px] text-neutral-primary text-[12px] font-semibold uppercase tracking-[-2%] leading-[100%]">
                        In progress
                    </button>
                </div>

                <!-- Content -->
                <div class="flex flex-col xl:flex-row gap-4">
                    <!-- Outstanding Balance -->
                    <div
                        class="flex flex-col w-full xl:w-[656px] h-fit border border-neutral-primary/10 rounded-[24px] p-4 sm:p-[25px]">

                        <div class="flex items-center justify-between mb-4">
                            <div class="flex items-center gap-3">
                                <div
                                    class="border border-neutral-primary/10 rounded-[8px] h-8 w-8 text-[16px] font-bold leading-[100%] flex items-center justify-center">
                                    $
                                </div>
                                <h1 class="text-[16px] font-bold text-neutral-primary leading-[100%]">Outstanding </h1>
                            </div>
                            <button
                                class="px-[16px] py-[9px] border border-neutral-primary text-neutral-primary text-[12px] font-semibold uppercase tracking-[-2%] leading-[100%] rounded-[80px]">
                                View
                            </button>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
                            <div class="border border-neutral-primary/10 rounded-[12px] px-4 pt-[14px] pb-[17px]">
                                <p
                                    class="text-[10px] font-extrabold text-neutral-primary/60 uppercase leading-[100%] tracking-[10%] mb-[9px]">
                                    Outstanding balance
                                </p>
                                <h1
                                    class="text-[20px] font-extrabold text-neutral-primary uppercase leading-[100%] mb-[6px]">
                                    $12,480</h1>
                                <p class="text-[10px] font-bold text-neutral-primary/60 leading-[100%] mb-[12px]">
                                    Across 4 invoices awaiting payment.</p>

                                <div
                                    class="bg-[#F5F5F5] rounded-[80px] pl-[11px] pr-[15px] py-[6px] flex items-center gap-[5px] w-fit">
                                    <div class="h-5 w-5 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-up">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M7 11l5 -5l5 5" />
                                            <path d="M7 17l5 -5l5 5" />
                                        </svg>
                                    </div>
                                    <span
                                        class="text-[12px] font-bold text-neutral-primary leading-[100%] tracking-[-2%]">8%
                                        vs last month</span>
                                </div>
                            </div>

                            <div class="border border-neutral-primary/10 rounded-[12px] px-4 pt-[14px] pb-[17px]">
                                <p
                                    class="text-[10px] font-extrabold text-neutral-primary/60 uppercase leading-[100%] tracking-[10%] mb-[9px]">
                                    Unassigned requests
                                </p>
                                <h1
                                    class="text-[20px] font-extrabold text-neutral-primary uppercase leading-[100%] mb-[6px]">
                                    6</h1>
                                <p class="text-[10px] font-bold text-neutral-primary/60 leading-[100%] mb-[12px]">
                                    New requests needing a vendor assignment.</p>

                                <div
                                    class="bg-[#F5F5F5] rounded-[80px] pl-[11px] pr-[15px] py-[6px] flex items-center gap-[5px] w-fit">
                                    <div class="h-5 w-5 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-down">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M7 7l5 5l5 -5" />
                                            <path d="M7 13l5 5l5 -5" />
                                        </svg>
                                    </div>
                                    <span
                                        class="text-[12px] font-bold text-neutral-primary leading-[100%] tracking-[-2%]">2
                                        this week</span>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center justify-between mb-3">
                            <h1 class="text-[16px] font-bold text-neutral-primary leading-[100%]">Request queue</h1>
                            <button class="text-brand-blue text-[12px] font-bold tracking-[-2%] leading-4">
                                View all
                            </button>
                        </div>

                        <div class="grid grid-cols-1 gap-2">
                            <div
                                class="relative border border-neutral-primary/10 rounded-[12px] pt-[13px] px-[17px] pb-[15px] flex flex-col sm:block">
                                <div
                                    class="relative sm:absolute sm:top-[13px] sm:right-[13px] mb-2 sm:mb-0 flex justify-end">
                                    <button
                                        class="bg-status-info-bg border border-status-info-border rounded-[60px] px-3 py-[6px] text-brand-blue text-[12px] font-bold tracking-[-2%] leading-[100%]">
                                        New
                                    </button>
                                </div>

                                <h1
                                    class="text-[16px] font-bold text-neutral-primary leading-5 tracking-[-2%] mb-[6px]">
                                    Leaking kitchen sink</h1>
                                <p class="text-[12px] font-semibold text-neutral-primary/60 leading-[100%]">
                                    Oak St Apartments • Unit 3B • Reported 2 days ago</p>
                            </div>

                            <div
                                class="relative border border-neutral-primary/10 rounded-[12px] pt-[13px] px-[17px] pb-[15px] flex flex-col sm:block">
                                <div
                                    class="relative sm:absolute sm:top-[13px] sm:right-[13px] mb-2 sm:mb-0 flex justify-end">
                                    <button
                                        class="bg-status-info-bg border border-status-info-border rounded-[60px] px-3 py-[6px] text-brand-blue text-[12px] font-bold tracking-[-2%] leading-[100%]">
                                        New
                                    </button>
                                </div>

                                <h1
                                    class="text-[16px] font-bold text-neutral-primary leading-5 tracking-[-2%] mb-[6px]">
                                    Dishwasher not draining</h1>
                                <p class="text-[12px] font-semibold text-neutral-primary/60 leading-[100%]">
                                    Market St Condo • Unit 8 • Needs assessment</p>
                            </div>
                        </div>
                    </div>

                    <!-- Upcoming Appointments -->
                    <div
                        class="flex flex-col w-full h-fit xl:w-[464px] border border-neutral-primary/10 rounded-[24px] p-4 sm:p-[25px]">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center gap-3">
                                <div
                                    class="border border-neutral-primary/10 rounded-[8px] h-8 w-8 p-[6px] flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-calendar-icon lucide-calendar">
                                        <path d="M8 2v4" />
                                        <path d="M16 2v4" />
                                        <rect width="18" height="18" x="3" y="4" rx="2" />
                                        <path d="M3 10h18" />
                                    </svg>
                                </div>
                                <h1 class="text-[16px] font-bold text-neutral-primary leading-[100%]">Calendar reminders
                                </h1>
                            </div>
                            <button
                                class="pl-[18px] pr-5 py-3 text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%] rounded-[80px] flex items-center gap-[10px]"
                                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 5v14" />
                                    <path d="M5 12h14" />
                                </svg>
                                Add
                            </button>
                        </div>

                        <div class="grid grid-cols-1 gap-2">
                            <div
                                class="relative border border-neutral-primary/10 rounded-[12px] pt-[13px] px-[17px] pb-[15px] flex flex-col sm:block">
                                <div
                                    class="relative sm:absolute sm:top-[13px] sm:right-[13px] mb-2 sm:mb-0 flex justify-end">
                                    <button
                                        class="bg-[#F5F5F5] border border-neutral-primary/10 rounded-[80px] px-3 py-[6px] text-neutral-primary/60 text-[12px] font-bold tracking-[-2%] leading-[100%]">
                                        Today • 9:00 AM
                                    </button>
                                </div>

                                <h1
                                    class="text-[16px] font-bold text-neutral-primary leading-5 tracking-[-2%] mb-[6px]">
                                    Plumbing visit</h1>
                                <p class="text-[12px] font-semibold text-neutral-primary/60 leading-[100%]">
                                    Oak St Apartments • Unit 3B</p>
                            </div>

                            <div
                                class="relative border border-neutral-primary/10 rounded-[12px] pt-[13px] px-[17px] pb-[15px] flex flex-col sm:block">
                                <div
                                    class="relative sm:absolute sm:top-[13px] sm:right-[13px] mb-2 sm:mb-0 flex justify-end">
                                    <button
                                        class="bg-slate-50 border border-neutral-primary/10 rounded-[80px] px-3 py-[6px] text-neutral-primary/60 text-[12px] font-bold tracking-[-2%] leading-[100%]">
                                        Tomorrow • 11:30 AM
                                    </button>
                                </div>

                                <h1
                                    class="text-[16px] font-bold text-neutral-primary leading-5 tracking-[-2%] mb-[6px]">
                                    Inspection</h1>
                                <p class="text-[12px] font-semibold text-neutral-primary/60 leading-[100%]">
                                    Pine View • Building A</p>
                            </div>

                            <div
                                class="relative border border-neutral-primary/10 rounded-[12px] pt-[13px] px-[17px] pb-[15px] flex flex-col sm:block">
                                <div
                                    class="relative sm:absolute sm:top-[13px] sm:right-[13px] mb-2 sm:mb-0 flex justify-end">
                                    <button
                                        class="bg-slate-50 border border-neutral-primary/10 rounded-[80px] px-3 py-[6px] text-neutral-primary/60 text-[12px] font-bold tracking-[-2%] leading-[100%]">
                                        Fri • 2:00 PM
                                    </button>
                                </div>

                                <h1
                                    class="text-[16px] font-bold text-neutral-primary leading-5 tracking-[-2%] mb-[6px]">
                                    Leaking kitchen sink</h1>
                                <p class="text-[12px] font-semibold text-neutral-primary/60 leading-[100%]">
                                    Oak St Apartments • Unit 3B</p>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <!-- Add Request Modal -->
            <AddRequestModal :isOpen="isAddRequestModalOpen" @close="isAddRequestModalOpen = false" />

        </div>
    </div>
</template>
