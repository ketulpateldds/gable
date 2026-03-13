<script setup>
import Navbar from '~/components/landlord/Navbar.vue'
import Sidebar from '~/components/tenant/Sidebar.vue'
import AccountSetting from '~/components/settings/AccountSetting.vue'
import OnlinePaymentTenant from '~/components/settings/OnlinePaymentTenant.vue'
import Notification from '~/components/settings/Notification.vue'

const activeTab = ref('Account Settings')

const tabs = [
    { label: 'Account Settings' },
    { label: 'Online Payment' },
    { label: 'Notifications' },
]

</script>

<template>
    <div class="relative flex min-h-screen bg-primary font-sans overflow-x-hidden">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 pt-[19px] pb-11 overflow-y-auto">
                <div class="px-4 sm:px-6">
                    <h1 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[4px]">Account Settings</h1>
                    <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-0.02em] mb-[17px]">
                        Lets you control and update account information and enable other products.
                    </p>
                </div>

                <div
                    class="px-4 sm:px-6 flex items-center gap-6 border-b border-[#0F11141A] mb-8 overflow-x-auto scrollbar-hide">
                    <button v-for="tab in tabs" :key="tab.label" @click="activeTab = tab.label"
                        class="pb-[11px] text-[12px] leading-[100%] whitespace-nowrap border-b-[2px] transition-colors"
                        :class="activeTab === tab.label
                            ? 'text-[#004CE5] border-[#004CE5] font-bold'
                            : 'text-[#0F1114] border-transparent font-semibold'">
                        {{ tab.label }}
                    </button>
                </div>

                <!-- Content -->
                <div class="px-4 sm:px-6">
                    <AccountSetting v-if="activeTab === 'Account Settings'" class="max-w-[848px]" />
                    <OnlinePaymentTenant v-if="activeTab === 'Online Payment'" class="max-w-[656px]" />
                    <Notification v-if="activeTab === 'Notifications'" class="max-w-[656px]" />
                </div>
            </main>
        </div>
    </div>
</template>
