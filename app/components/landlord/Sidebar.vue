<script setup>
const { isSidebarOpen, closeSidebar } = useSidebar()
const route = useRoute()

// Close sidebar when route changes on mobile
watch(() => route.path, () => {
    closeSidebar()
})

const activeNav = computed(() => {
    if (route.path === '/landlord/add-property' || route.path === '/landlord/view-unit' || route.path === '/landlord/add-unit') return 'Portfolio'
    if (route.path === '/landlord/create-listing' || route.path.startsWith('/landlord/listings/')) return 'Listings'
    if (route.path === '/landlord/new-application' || route.path === '/landlord/view-application') return 'Applications'
    if (route.path === '/landlord/inspection-report' || route.path === '/landlord/inspection/template' || route.path === '/landlord/create-inspection') return 'Inspections'
    const item = navItems.find(item => item.to === route.path)
    return item ? item.label : 'Dashboard'
})

const svg = (body, viewBox = '0 0 24 24') =>
    `<svg width="18" height="18" viewBox="${viewBox}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0">${body}</svg>`

const navItems = [
    {
        label: 'Dashboard',
        to: '/landlord/dashboard',
        icon: svg('<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8327 17.5H13.3327C12.4118 17.5 11.666 16.7542 11.666 15.8333V11.6667C11.666 10.7458 12.4118 10 13.3327 10H15.8327C16.7535 10 17.4993 10.7458 17.4993 11.6667V15.8333C17.4993 16.7542 16.7535 17.5 15.8327 17.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.8327 7.5H13.3327C12.4118 7.5 11.666 6.75417 11.666 5.83333V4.16667C11.666 3.24583 12.4118 2.5 13.3327 2.5H15.8327C16.7535 2.5 17.4993 3.24583 17.4993 4.16667V5.83333C17.4993 6.75417 16.7535 7.5 15.8327 7.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.16667 2.5H6.66667C7.5875 2.5 8.33333 3.24583 8.33333 4.16667V8.33333C8.33333 9.25417 7.5875 10 6.66667 10H4.16667C3.24583 10 2.5 9.25417 2.5 8.33333V4.16667C2.5 3.24583 3.24583 2.5 4.16667 2.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.16667 12.5H6.66667C7.5875 12.5 8.33333 13.2458 8.33333 14.1667V15.8333C8.33333 16.7542 7.5875 17.5 6.66667 17.5H4.16667C3.24583 17.5 2.5 16.7542 2.5 15.8333V14.1667C2.5 13.2458 3.24583 12.5 4.16667 12.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>', '0 0 20 20'),
    },
    {
        label: 'Portfolio',
        to: '/landlord/portfolio',
        icon: svg('<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2" />'),
    },
    {
        label: 'Tenants',
        to: '/landlord/tenants',
        icon: svg('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'),
    },
    {
        label: 'Listings',
        to: '/landlord/listings',
        icon: svg('<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" /><path d="M9 12h6" /><path d="M9 16h6" />'),
    },
    {
        label: 'Applications',
        to: '/landlord/applications',
        icon: svg('<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8857 10.4208C16.4457 9.8608 17.354 9.85997 17.914 10.4208V10.4208C18.474 10.9808 18.474 11.8891 17.9132 12.4491L13.1015 17.2566C12.9457 17.4125 12.734 17.5 12.5132 17.5H10.834V15.8208C10.834 15.6 10.9215 15.3883 11.0782 15.2316L15.8857 10.4208V10.4208Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.83398 7.50004H12.5007" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.83398 10.8333H10.0007" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.83398 14.1667H8.33398" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.8497 13.5166L14.8164 11.4833" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.8333 7.50004V5.00004C15.8333 4.07921 15.0875 3.33337 14.1667 3.33337H4.16667C3.24583 3.33337 2.5 4.07921 2.5 5.00004V15.8334C2.5 16.7542 3.24583 17.5 4.16667 17.5H7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5007 2.5V4.16667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.16667 2.5V4.16667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.83268 2.5V4.16667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>', '0 0 20 20'),
    },
    {
        label: 'Leads',
        to: '/landlord/leads',
        icon: svg('<path d="M17.4999 16.6667L13.3333 16.6666" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.4833 16.6683V8.32422" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.33325 14.1436V12.537C3.33325 12.0848 3.51289 11.6512 3.83265 11.3314C4.15241 11.0116 4.58609 10.832 5.03829 10.832H6.64453C7.0967 10.832 7.53036 11.0116 7.85011 11.3314L10.3338 13.8147C10.9997 14.4805 10.9998 15.56 10.334 16.2259L8.72781 17.8325C8.40808 18.1523 7.97439 18.332 7.52217 18.332C7.06995 18.3321 6.63623 18.1525 6.31644 17.8327L3.83271 15.3493C3.51291 15.0295 3.33325 14.5958 3.33325 14.1436Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.80399 13.3051C5.82027 13.2889 5.84664 13.2889 5.8629 13.3052C5.87915 13.3215 5.87914 13.3478 5.86288 13.3641C5.84661 13.3804 5.82025 13.3804 5.80397 13.3641C5.7877 13.3479 5.78767 13.3215 5.80391 13.3052L5.80399 13.3051" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1.89656 5.39934C1.65062 5.86251 1.60172 6.40524 1.76091 6.90491C2.03629 7.77174 2.84976 8.3536 3.75908 8.33416C4.66839 8.31472 5.45625 7.69862 5.69433 6.82081C5.70942 6.76982 5.75626 6.73484 5.80943 6.73484C5.86261 6.73484 5.90944 6.76982 5.92454 6.82081C6.16765 7.71429 6.97898 8.33429 7.90495 8.33419C8.83091 8.33409 9.64211 7.71391 9.88503 6.82039C9.90009 6.76938 9.94693 6.73437 10.0001 6.73437C10.0533 6.73437 10.1001 6.76938 10.1152 6.82039C10.3583 7.71389 11.1695 8.33395 12.0955 8.33392C13.0215 8.33389 13.8327 7.71376 14.0757 6.82024C14.0908 6.76927 14.1377 6.7343 14.1908 6.7343C14.244 6.7343 14.2908 6.76927 14.3059 6.82024C14.5441 7.69796 15.3318 8.31398 16.2411 8.33345C17.1503 8.35292 17.9637 7.77119 18.2392 6.90448C18.3985 6.40474 18.3496 5.86189 18.1036 5.39864L16.6813 2.58315C16.3978 2.02188 15.8225 1.66797 15.1937 1.66797H4.80682C4.178 1.66797 3.60271 2.02188 3.31919 2.58315L1.89656 5.39934Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>', '0 0 20 20'),
    },
    {
        label: 'Accounting',
        to: '/landlord/accounting',
        icon: svg('<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5833 17.5H5.41667C4.49583 17.5 3.75 16.7542 3.75 15.8333V4.16667C3.75 3.24583 4.49583 2.5 5.41667 2.5H14.5833C15.5042 2.5 16.25 3.24583 16.25 4.16667V15.8333C16.25 16.7542 15.5042 17.5 14.5833 17.5Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.6667 6.2487H13.3334" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.6667 8.7487H13.3334" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.66675 12.4987H13.3334" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.66675 14.9987H13.3334" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.91667 5.6237V4.9987" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.91667 9.3737V9.9987" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.83175 8.92833C6.99341 9.19333 7.27008 9.37667 7.60425 9.37667H7.91675H8.28925C8.77425 9.37667 9.16675 8.98333 9.16675 8.49917C9.16675 8.09667 8.89258 7.74583 8.50258 7.6475L7.33091 7.35417C6.94091 7.25583 6.66675 6.905 6.66675 6.5025C6.66675 6.01833 7.06008 5.625 7.54425 5.625H7.91675H8.22925C8.56258 5.625 8.83841 5.8075 9.00008 6.07167" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>', '0 0 20 20'),
    },
    {
        label: 'Documents',
        to: '/landlord/document',
        icon: svg('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>'),
    },
    {
        label: 'Maintenance',
        to: '/landlord/maintenance',
        icon: svg('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'),
    },
    {
        label: 'Inspections',
        to: '/landlord/inspections',
        icon: svg('<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 15a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M18.5 18.5l2.5 2.5" /><path d="M4 6h16" /><path d="M4 12h4" /><path d="M4 18h4" />'),
    },
    {
        label: 'Calendar',
        to: '/landlord/calendar',
        icon: svg('<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M4 11h16" /><path d="M7 14h.013" /><path d="M10.01 14h.005" /><path d="M13.01 14h.005" /><path d="M16.015 14h.005" /><path d="M13.015 17h.005" /><path d="M7.01 17h.005" /><path d="M10.01 17h.005" />'),
    },
    {
        label: 'Contacts',
        to: '/landlord/contact',
        icon: svg('<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M16 22a4 4 0 0 0-8 0"/><circle cx="12" cy="15" r="3"/>'),
    },
    {
        label: 'Messages',
        to: '/landlord/messages',
        icon: svg('<path fill-rule="evenodd" clip-rule="evenodd" d="M3.78352 14.1692C2.98018 12.9758 2.49935 11.5475 2.49935 10C2.49935 5.8575 5.85685 2.5 9.99935 2.5C14.1418 2.5 17.4993 5.8575 17.4993 10C17.4993 14.1425 14.1418 17.5 9.99935 17.5C8.72768 17.5 7.53268 17.1775 6.48268 16.6192C5.36102 17.2175 4.08852 17.57 2.72935 17.57C2.36768 17.57 2.01518 17.5375 1.66602 17.4917C2.64352 16.6025 3.37852 15.4608 3.78352 14.1692Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>', '0 0 20 20'),
    },
    {
        label: 'Settings',
        to: '/landlord/settings',
        icon: svg('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'),
    },
]
</script>

<template>
    <div>
        <!-- Backdrop for mobile -->
        <div v-if="isSidebarOpen" @click="closeSidebar"
            class="fixed inset-0 bg-[#0F11144D] z-40 lg:hidden transition-opacity"></div>

        <aside
            class="fixed top-0 left-0 bottom-0 z-50 w-[256px] bg-primary border-r border-[#0F11141A] flex flex-col overflow-y-auto shrink-0 scrollbar-hide transition-transform duration-300 transform lg:translate-x-0"
            :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'">

            <div class="flex items-center justify-between p-6 lg:hidden">
                <span class="text-[#0F1114] font-extrabold text-[20px]">Menu</span>
                <button @click="closeSidebar" class="p-1 text-[#0F1114]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            <div class="hidden lg:flex items-center gap-[6px] px-[38px] pt-[20px] pb-5">
                <div class="w-6 h-6 flex items-center justify-center overflow-hidden shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.7087 0.292786L19.7087 9.29279C20.3387 9.92279 19.8927 10.9998 19.0017 10.9998H18.0017V16.9998C18.0017 17.7954 17.6857 18.5585 17.1231 19.1211C16.5605 19.6837 15.7974 19.9998 15.0017 19.9998H14.0017V12.9998C14.0018 12.2346 13.7094 11.4983 13.1845 10.9415C12.6595 10.3848 11.9416 10.0497 11.1777 10.0048L11.0017 9.99979H9.00175C8.2061 9.99979 7.44304 10.3159 6.88043 10.8785C6.31782 11.4411 6.00175 12.2041 6.00175 12.9998V19.9998H5.00175C4.2061 19.9998 3.44304 19.6837 2.88043 19.1211C2.31782 18.5585 2.00175 17.7954 2.00175 16.9998V10.9998H1.00175C0.111748 10.9998 -0.335252 9.92279 0.294748 9.29279L9.29475 0.292786C9.48228 0.105315 9.73658 0 10.0017 0C10.2669 0 10.5212 0.105315 10.7087 0.292786ZM11.0017 11.9998C11.267 11.9998 11.5213 12.1051 11.7089 12.2927C11.8964 12.4802 12.0017 12.7346 12.0017 12.9998V19.9998H8.00175V12.9998C8.00178 12.7549 8.0917 12.5184 8.25446 12.3354C8.41722 12.1524 8.6415 12.0354 8.88475 12.0068L9.00175 11.9998H11.0017Z"
                            fill="url(#paint0_linear_logo_side)" />
                        <defs>
                            <linearGradient id="paint0_linear_logo_side" x1="20.0017" y1="-0.000214194" x2="0.00174632"
                                y2="19.9998" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#3388FF" />
                                <stop offset="1" stop-color="#004CE6" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <span class="text-[#0F1114] font-extrabold text-[20px] tracking-[-2%] leading-[100%]">Blueporch</span>
            </div>

            <nav class="flex flex-col gap-2 py-[25px] lg:pt-0 px-6 flex-1">
                <NuxtLink v-for="item in navItems" :key="item.label" :to="item.to"
                    class="h-[42px] flex items-center gap-3 px-4 py-[11px] rounded-[80px] text-[14px] leading-[100%]"
                    :class="item.label === activeNav
                        ? 'text-primary font-bold bg-[linear-gradient(225.01deg,_#3388FF_0%,_#004CE6_100%)] shadow-[0px_4px_8px_-2px_#004CE580]'
                        : 'text-[#0F1114] font-medium'">
                    <span class="h-5 w-5" v-html="item.icon" />
                    <span>{{ item.label }}</span>
                </NuxtLink>
            </nav>
        </aside>
    </div>
</template>
