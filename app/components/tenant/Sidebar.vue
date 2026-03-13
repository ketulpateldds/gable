<script setup>
const { isSidebarOpen, closeSidebar } = useSidebar()
const route = useRoute()

// Close sidebar when route changes on mobile
watch(() => route.path, () => {
    closeSidebar()
})

const activeNav = computed(() => {
    if (route.path === '/add-property' || route.path === '/view-unit' || route.path === '/add-unit') return 'Portfolio'
    if (route.path === '/create-listing') return 'Listings'
    const item = navItems.find(item => item.to === route.path)
    return item ? item.label : 'Dashboard'
})

const svg = (body, viewBox = "0 0 24 24") =>
    `<svg width="18" height="18" viewBox="${viewBox}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`

const navItems = [
    {
        label: 'Dashboard',
        to: '/tenant/dashboard',
        icon: svg('<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8327 17.5H13.3327C12.4118 17.5 11.666 16.7542 11.666 15.8333V11.6667C11.666 10.7458 12.4118 10 13.3327 10H15.8327C16.7535 10 17.4993 10.7458 17.4993 11.6667V15.8333C17.4993 16.7542 16.7535 17.5 15.8327 17.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.8327 7.5H13.3327C12.4118 7.5 11.666 6.75417 11.666 5.83333V4.16667C11.666 3.24583 12.4118 2.5 13.3327 2.5H15.8327C16.7535 2.5 17.4993 3.24583 17.4993 4.16667V5.83333C17.4993 6.75417 16.7535 7.5 15.8327 7.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.16667 2.5H6.66667C7.5875 2.5 8.33333 3.24583 8.33333 4.16667V8.33333C8.33333 9.25417 7.5875 10 6.66667 10H4.16667C3.24583 10 2.5 9.25417 2.5 8.33333V4.16667C2.5 3.24583 3.24583 2.5 4.16667 2.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.16667 12.5H6.66667C7.5875 12.5 8.33333 13.2458 8.33333 14.1667V15.8333C8.33333 16.7542 7.5875 17.5 6.66667 17.5H4.16667C3.24583 17.5 2.5 16.7542 2.5 15.8333V14.1667C2.5 13.2458 3.24583 12.5 4.16667 12.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>', '0 0 20 20'),
    },
    {
        label: 'Rent',
        to: '/tenant/rent',
        icon: svg('<path d="M5.00299 6.87787H2.50195V4.37683" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.22656 16.6102C6.97687 17.0446 7.80805 17.3522 8.69342 17.5073" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.9043 12.6494C3.20942 13.4864 3.65127 14.2559 4.21318 14.9254" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.3184 17.5073C12.2037 17.3522 13.0341 17.0446 13.7852 16.6102" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.7988 14.9254C16.3607 14.2559 16.8026 13.4864 17.1077 12.6494" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.509 10.0041C17.509 5.85988 14.1501 2.50098 10.0059 2.50098C6.97965 2.50098 4.37773 4.29672 3.19141 6.8778" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.0067 7.6173V7.08625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.0067 12.3917V12.9219" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.62498 11.8224C8.8309 12.16 9.18272 12.3926 9.60873 12.3926H10.0064H10.4808C11.0985 12.3926 11.5979 11.8924 11.5979 11.2755C11.5979 10.7627 11.2486 10.3167 10.7517 10.1908L9.25941 9.81568C8.76337 9.69147 8.41406 9.24545 8.41406 8.73273C8.41406 8.11498 8.91427 7.6156 9.53119 7.6156H10.0064H10.4041C10.8284 7.6156 11.1802 7.8482 11.3853 8.185" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>', '0 0 20 20'),
    },
    {
        label: 'Requests',
        to: '/tenant/request',
        icon: svg('<path d="M9.9987 10V7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.99988 12.2485C9.96693 12.2485 9.93534 12.2615 9.91204 12.2848C9.88874 12.3081 9.87565 12.3397 9.87565 12.3727V12.3742C9.87596 12.4248 9.9067 12.4702 9.95353 12.4892C10.0004 12.5083 10.0541 12.4973 10.0896 12.4613C10.1251 12.4253 10.1355 12.3715 10.1158 12.3249C10.0962 12.2783 10.0504 12.2481 9.99987 12.2485" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.69777 14.0317C1.64822 10.8083 2.35631 6.55848 5.34027 4.17373C8.32423 1.78899 12.6255 2.03532 15.3177 4.74513C18.0099 7.45494 18.2282 11.7578 15.8241 14.7261C13.42 17.6945 9.16565 18.3748 5.95567 16.3043L3.81817 16.6615C3.68539 16.6837 3.55007 16.6403 3.45488 16.5451C3.35968 16.4499 3.31635 16.3146 3.33853 16.1818L3.69777 14.0317Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>', '0 0 20 20'),
    },
    {
        label: 'Utilities',
        to: '/tenant/utilities',
        icon: svg('<path fill-rule="evenodd" clip-rule="evenodd" d="M15 2.29167V6.04167C15 6.27179 14.8135 6.45833 14.5833 6.45833H13.3333C12.7808 6.45833 12.2509 6.23884 11.8602 5.84814C11.4695 5.45744 11.25 4.92753 11.25 4.375V3.95833C11.25 2.80774 12.1827 1.875 13.3333 1.875H14.5833C14.8135 1.875 15 2.06155 15 2.29167Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 5.41667H16.6667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 2.91667H16.6667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.2507 4.16663H10.0007C6.31875 4.16663 3.33398 7.15139 3.33398 10.8333C3.33398 14.5152 6.31875 17.5 10.0007 17.5C11.7688 17.5 13.4645 16.7976 14.7147 15.5473C15.9649 14.2971 16.6673 12.6014 16.6673 10.8333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.66232 8.33337L8.33398 10.8334H11.6673L10.339 13.3334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>', '0 0 20 20'),
    },
    {
        label: 'Applications',
        to: '/tenant/application',
        icon: svg('<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8857 10.4208C16.4457 9.8608 17.354 9.85997 17.914 10.4208V10.4208C18.474 10.9808 18.474 11.8891 17.9132 12.4491L13.1015 17.2566C12.9457 17.4125 12.734 17.5 12.5132 17.5H10.834V15.8208C10.834 15.6 10.9215 15.3883 11.0782 15.2316L15.8857 10.4208V10.4208Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.83398 7.50004H12.5007" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.83398 10.8333H10.0007" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.83398 14.1667H8.33398" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.8497 13.5166L14.8164 11.4833" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.8333 7.50004V5.00004C15.8333 4.07921 15.0875 3.33337 14.1667 3.33337H4.16667C3.24583 3.33337 2.5 4.07921 2.5 5.00004V15.8334C2.5 16.7542 3.24583 17.5 4.16667 17.5H7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5007 2.5V4.16667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.16667 2.5V4.16667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.83268 2.5V4.16667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>', '0 0 20 20'),
    },
    {
        label: 'Messages',
        to: '/tenant/messages',
        icon: svg('<path fill-rule="evenodd" clip-rule="evenodd" d="M3.78352 14.1692C2.98018 12.9758 2.49935 11.5475 2.49935 10C2.49935 5.8575 5.85685 2.5 9.99935 2.5C14.1418 2.5 17.4993 5.8575 17.4993 10C17.4993 14.1425 14.1418 17.5 9.99935 17.5C8.72768 17.5 7.53268 17.1775 6.48268 16.6192C5.36102 17.2175 4.08852 17.57 2.72935 17.57C2.36768 17.57 2.01518 17.5375 1.66602 17.4917C2.64352 16.6025 3.37852 15.4608 3.78352 14.1692Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>', '0 0 20 20'),
    },
    {
        label: 'Files',
        to: '/tenant/files',
        icon: svg('<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2" />'),
    },
    {
        label: 'Settings',
        to: '/tenant/settings',
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
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
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
                    <span class="h-5 w-5 flex items-center justify-center" v-html="item.icon" />
                    <span>{{ item.label }}</span>
                </NuxtLink>
            </nav>
        </aside>
    </div>
</template>
