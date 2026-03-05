<script setup>
import { ref } from 'vue'

const notifications = ref([
    {
        id: 1,
        title: 'New maintenance request',
        subtitle: 'Maintenance • 10 minutes ago',
        tags: [
            { text: 'MAINTENANCE', color: '#A16600', bg: '#E599170D', border: '#E599171A' },
            { text: 'CRITICAL', color: '#CC2929', bg: '#CC29290D', border: '#CC29291A' }
        ],
        unread: true
    },
    {
        id: 2,
        title: 'Rent payment failed',
        subtitle: 'Payments • 1 hour ago',
        tags: [
            { text: 'PAYMENTS', color: '#21A635', bg: '#21A6350D', border: '#21A6351A' },
            { text: 'HIGH', color: '#A16600', bg: '#E599170D', border: '#E599171A' }
        ],
        unread: true
    },
    {
        id: 3,
        title: 'New application submitted',
        subtitle: 'Applications • Yesterday',
        tags: [
            { text: 'APPLICATIONS', color: '#A16600', bg: '#E599170D', border: '#E599171A' }
        ],
        unread: false
    },
    {
        id: 4,
        title: 'New message from tenant',
        subtitle: 'Messages • 2 days ago',
        tags: [
            { text: 'MESSAGES', color: '#0F1114', bg: '#0F11140D', border: '#0F11141A' }
        ],
        unread: false
    }
])
</script>

<template>
    <div class="flex min-h-screen bg-white font-sans">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 p-6 pt-[19px]">
                <div class="max-w-[1240px] mx-auto">
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-5">
                        <div class="flex items-center gap-[16px]">
                            <NuxtLink to="/dashboard"
                                class="w-10 h-10 rounded-full border border-[#0F11141A] flex items-center justify-center hover:bg-[#F5F5F5] transition-colors shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 12l14 0" />
                                    <path d="M5 12l4 4" />
                                    <path d="M5 12l4 -4" />
                                </svg>
                            </NuxtLink>
                            <div>
                                <h1 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[4px]">
                                    Notifications
                                </h1>
                                <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">
                                    Recent activity across your portfolio
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start sm:items-center flex-col sm:flex-row gap-2">
                            <button
                                class="px-5 py-[13px] rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] whitespace-nowrap">
                                MARK ALL AS READ
                            </button>
                            <NuxtLink to="/settings "
                                class="px-5 py-[13px] rounded-[80px] flex items-center justify-center text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%] hover:opacity-90 transition-opacity whitespace-nowrap"
                                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                                NOTIFICATION SETTINGS
                            </NuxtLink>
                        </div>
                    </div>

                    <div class="border border-[#0F11141A] rounded-[24px] overflow-hidden">
                        <div v-for="(notification, index) in notifications" :key="notification.id"
                            class="px-6 pt-[21px] flex items-center justify-between gap-4 transition-colors hover:bg-[#FAFAFA]"
                            :class="index !== notifications.length - 1 ? 'border-b border-[#0F11141A] pb-6' : 'pb-[25px]'">
                            <div class="flex flex-col gap-3">
                                <div>
                                    <h3
                                        class="text-[16px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] mb-[4px]">
                                        {{ notification.title }}
                                    </h3>
                                    <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">
                                        {{ notification.subtitle }}
                                    </p>
                                </div>
                                <div class="flex flex-wrap items-center gap-2">
                                    <span v-for="tag in notification.tags" :key="tag.text"
                                        class="px-[11px] py-[7px] rounded-[80px] flex items-center border justify-center text-[10px] font-bold uppercase tracking-[2%] leading-[100%]"
                                        :style="{ backgroundColor: tag.bg, color: tag.color, borderColor: tag.border }">
                                        {{ tag.text }}
                                    </span>
                                </div>
                            </div>

                            <div v-if="notification.unread" class="w-2 h-2 rounded-full bg-[#004CE5] shrink-0"></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
