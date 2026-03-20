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

            <NuxtLink to="/landlord/dashboard" class="lg:hidden flex items-center gap-2">
                <span class="w-6 h-6 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.7087 0.292786L19.7087 9.29279C20.3387 9.92279 19.8927 10.9998 19.0017 10.9998H18.0017V16.9998C18.0017 17.7954 17.6857 18.5585 17.1231 19.1211C16.5605 19.6837 15.7974 19.9998 15.0017 19.9998H14.0017V12.9998C14.0018 12.2346 13.7094 11.4983 13.1845 10.9415C12.6595 10.3848 11.9416 10.0497 11.1777 10.0048L11.0017 9.99979H9.00175C8.2061 9.99979 7.44304 10.3159 6.88043 10.8785C6.31782 11.4411 6.00175 12.2041 6.00175 12.9998V19.9998H5.00175C4.2061 19.9998 3.44304 19.6837 2.88043 19.1211C2.31782 18.5585 2.00175 17.7954 2.00175 16.9998V10.9998H1.00175C0.111748 10.9998 -0.335252 9.92279 0.294748 9.29279L9.29475 0.292786C9.48228 0.105315 9.73658 0 10.0017 0C10.2669 0 10.5212 0.105315 10.7087 0.292786ZM11.0017 11.9998C11.267 11.9998 11.5213 12.1051 11.7089 12.2927C11.8964 12.4802 12.0017 12.7346 12.0017 12.9998V19.9998H8.00175V12.9998C8.00178 12.7549 8.0917 12.5184 8.25446 12.3354C8.41722 12.1524 8.6415 12.0354 8.88475 12.0068L9.00175 11.9998H11.0017Z"
                            fill="url(#paint0_linear_logo_nav)" />
                        <defs>
                            <linearGradient id="paint0_linear_logo_nav" x1="20.0017" y1="-0.000214194" x2="0.00174632"
                                y2="19.9998" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#3388FF" />
                                <stop offset="1" stop-color="#004CE6" />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
            </NuxtLink>

            <div class="relative hidden sm:block w-[150px] md:w-[300px] lg:w-[463px]">
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

        <div class="flex items-center gap-1 sm:gap-2">
            <button @click="navigateTo('/notifications')"
                class="relative h-10 w-10 rounded-full border border-[#0F11141A] flex items-center justify-center cursor-pointer group shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F1114" stroke-width="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                <span class="absolute top-[9px] right-[11px] w-2 h-2 bg-[#004CE5] rounded-full"></span>
            </button>

            <div
                class="h-10 flex items-center gap-2 pl-1 pr-2 sm:pr-3 py-1 border border-[#0F11141A] rounded-[80px] cursor-pointer shrink-0">
                <div class="w-8 h-8 bg-[#F2F6FF] rounded-full flex items-center justify-center text-[#004CE5]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                </div>
                <div class="hidden sm:flex flex-col sm:mr-2 lg:mr-[18px]">
                    <span class="text-[12px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">Username</span>
                    <span
                        class="text-[10px] text-[#0F111466] font-semibold leading-[100%] tracking-[-2%]">Landlord</span>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F1114" stroke-width="2.5"
                    class="shrink-0">
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </div>
        </div>
    </header>
</template>
