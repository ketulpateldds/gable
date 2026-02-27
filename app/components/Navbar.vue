<script setup>
const { toggleSidebar } = useSidebar()
</script>

<template>
    <header
        class="sticky top-0 z-40 h-16 bg-primary border-b border-[#0F11141A] flex items-center justify-between px-4 lg:px-[22px] py-3 shrink-0">

        <div class="flex items-center gap-4 lg:gap-8">
            <button @click="toggleSidebar" class="lg:hidden p-1 text-[#0F1114]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>

            <NuxtLink to="/dashboard" class="flex items-center gap-2">
                <span class="w-6 h-6 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2L3 8V18H8V13.5C8 12.119 8.895 11 10 11C11.105 11 12 12.119 12 13.5V18H17V8L10 2Z"
                            fill="#004CE5" />
                        <path d="M8 18V13.5C8 12.119 8.895 11 10 11C11.105 11 12 12.119 12 13.5V18" fill="#EBF2FF" />
                    </svg>
                </span>
                <span class="text-[#0F1114] font-extrabold text-[20px] tracking-[-2%] leading-[100%]">Blueporch</span>
            </NuxtLink>

            <div class="relative hidden sm:block w-[300px] lg:w-[463px]">
                <div
                    class="absolute inset-y-0 left-2 top-2 w-6 h-6 flex items-center justify-center pointer-events-none">
                    <svg class="text-slate-400" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                    </svg>
                </div>
                <input type="text" placeholder="Search"
                    class="w-full h-10 border border-[#0F11141A] rounded-[80px] pl-[38px] pr-4 text-[12px] tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] focus:outline-none" />
            </div>
        </div>

        <div class="flex items-center gap-2">
            <button
                class="relative h-10 w-10 rounded-full border border-[#0F11141A] flex items-center justify-center cursor-pointer group">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F1114" stroke-width="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                <span class="absolute top-[9px] right-[11px] w-2 h-2 bg-[#004CE5] rounded-full"></span>
            </button>

            <div
                class="h-10 flex items-center gap-2 pl-1 pr-3 py-1 border border-[#0F11141A] rounded-[80px] cursor-pointer">
                <div class="w-8 h-8 bg-[#F2F6FF] rounded-full flex items-center justify-center text-[#004CE5]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                </div>
                <div class="hidden sm:flex flex-col mr-[18px]">
                    <span class="text-[12px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">Username</span>
                    <span
                        class="text-[10px] text-[#0F111466] font-semibold leading-[100%] tracking-[-2%]">Landlord</span>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F1114" stroke-width="2.5">
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </div>
        </div>
    </header>
</template>
