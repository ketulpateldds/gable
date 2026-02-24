<script setup>
const { isSidebarOpen, closeSidebar } = useSidebar()
const route = useRoute()

// Close sidebar when route changes on mobile
watch(() => route.path, () => {
    closeSidebar()
})

const activeNav = computed(() => {
    const item = navItems.find(item => item.to === route.path)
    return item ? item.label : 'Dashboard'
})

const svg = (body) =>
    `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`

const navItems = [
    {
        label: 'Dashboard',
        to: '/dashboard',
        icon: svg('<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>'),
    },
    {
        label: 'Portfolio',
        to: '/portfolio',
        icon: svg('<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>'),
    },
    {
        label: 'Tenants',
        to: '/tenants',
        icon: svg('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'),
    },
    {
        label: 'Listings',
        to: '/listings',
        icon: svg('<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><circle cx="3" cy="6" r="1" fill="currentColor" stroke="none"/><circle cx="3" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="3" cy="18" r="1" fill="currentColor" stroke="none"/>'),
    },
    {
        label: 'Applications',
        to: '/dashboard',
        icon: svg('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>'),
    },
    {
        label: 'Accounting',
        to: '/dashboard',
        icon: svg('<line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>'),
    },
    {
        label: 'Documents',
        to: '/dashboard',
        icon: svg('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>'),
    },
    {
        label: 'Maintenance',
        to: '/dashboard',
        icon: svg('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'),
    },
    {
        label: 'Inspections',
        to: '/dashboard',
        icon: svg('<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'),
    },
    {
        label: 'Calendar',
        to: '/dashboard',
        icon: svg('<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>'),
    },
    {
        label: 'Contacts',
        to: '/dashboard',
        icon: svg('<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),
    },
    {
        label: 'Messages',
        to: '/dashboard',
        icon: svg('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'),
    },
    {
        label: 'Settings',
        to: '/dashboard',
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

            <nav class="flex flex-col gap-2 py-[25px] px-6 flex-1">
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
