<script setup lang="ts">
import Navbar from '~/components/landlord/Navbar.vue'
import Sidebar from '~/components/pro/Sidebar.vue'
import AccountSetting from '~/components/settings/AccountSetting.vue'
import BusinessProfileModel from '~/components/settings/BusinessProfileModel.vue'

interface NavSection {
    label: string
    active: boolean
}

const activeSection = ref<string>('Account Settings')

const navSections = reactive<NavSection[]>([
    {
        label: 'Account Settings',
        active: true
    },
    {
        label: 'Business Profile',
        active: false
    },
    {
        label: 'Integrations',
        active: false
    },
    {
        label: 'Notifications',
        active: false
    },
])

const selectSection = (label: string) => {
    activeSection.value = label
    navSections.forEach(s => s.active = s.label === label)
}
</script>

<template>
    <div class="flex min-h-screen bg-primary font-sans">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-4 sm:px-6 pt-[19px] pb-11 overflow-y-auto">
                <h1 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[4px]">Settings</h1>
                <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-0.02em] mb-5">
                    Manage tenants, owners, vendors and internal team contacts.
                </p>

                <!-- Mobile horizontal pill nav (visible below md) -->
                <div class="lg:hidden flex gap-2 overflow-x-auto scrollbar-hide pb-3 mb-4 -mx-4 px-4">
                    <button v-for="section in navSections" :key="section.label" @click="selectSection(section.label)"
                        class="shrink-0 px-4 py-2 rounded-[80px] text-[12px] font-bold leading-[100%] border transition-all whitespace-nowrap"
                        :class="section.label === activeSection
                            ? 'bg-[#004CE50D] border-[#004CE580] text-[#004CE5]'
                            : 'border-[#0F11141A] text-[#0F1114]'">
                        {{ section.label }}
                    </button>
                </div>

                <div class="flex gap-4 min-h-0">
                    <!-- Left Sidebar -->
                    <div
                        class="h-fit w-[272px] border border-[#0F11141A] rounded-[24px] p-4 hidden lg:flex flex-col shrink-0">
                        <div v-for="section in navSections" :key="section.label" @click="selectSection(section.label)"
                            class="flex items-center justify-between px-4 py-[11px] rounded-[12px] cursor-pointer transition-all border"
                            :class="section.label === activeSection
                                ? 'bg-[#004CE50D] border-[#004CE580]'
                                : 'border-transparent hover:border-[#0F11141A] hover:bg-[#F5F5F5]'">
                            <div class="text-[14px] font-bold leading-[100%] tracking-[-2%]"
                                :class="section.label === activeSection ? 'text-[#004CE5]' : 'text-[#0F1114]'">
                                {{ section.label }}
                            </div>
                            <div class="w-5 h-5 flex items-center justify-center">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                    :stroke="section.label === activeSection ? '#004CE5' : '#0F1114'" stroke-width="2.5"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <!-- Right Content Panel -->
                    <div class="flex-1 min-w-0 self-start">
                        <AccountSetting v-if="activeSection === 'Account Settings'" />
                        <BusinessProfileModel v-if="activeSection === 'Business Profile'" />
                    </div>

                </div>
            </main>
        </div>
    </div>
</template>
