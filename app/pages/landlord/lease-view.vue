<script setup lang="ts">
import AgreementNotices from '~/components/landlord/lease-view/Agreement&Notices.vue';
import Insurance from '~/components/landlord/lease-view/Insurance.vue';
import LeaseTransactions from '~/components/landlord/lease-view/LeaseTransactions.vue';
import Tenants from '~/components/landlord/lease-view/Tenants.vue';
import Navbar from '~/components/landlord/Navbar.vue';
import Sidebar from '~/components/landlord/Sidebar.vue';
import Utilities from '~/components/landlord/lease-view/Utilities.vue';
import MoveInOutInspection from '~/components/landlord/lease-view/MoveInOutInspection.vue';

interface Tab {
    label: string;
}

const tabs: Tab[] = [
    { label: 'Tenants' },
    { label: 'Lease Transactions' },
    { label: 'Agreement & Notices' },
    { label: 'Insurance' },
    { label: 'Utilities' },
    { label: 'Move-in/Move-out Inspection' },
];

const activeTab = ref<string>(tabs[0]?.label || 'Tenants');

</script>

<template>
    <div class="min-h-screen bg-primary flex">
        <Sidebar />

        <div class="flex-1 flex flex-col min-w-0 lg:pl-[256px]">
            <Navbar />

            <main class="flex-1 overflow-y-auto pt-[19px] pb-20">

                <!-- Header -->
                <div class="px-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between mb-3 gap-4">
                    <div class="flex items-center gap-4">
                        <NuxtLink to="/landlord/properties-units"
                            class="w-10 h-10 rounded-full border border-neutral-primary/10 text-neutral-primary flex items-center justify-center shrink-0">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                        </NuxtLink>

                        <div>
                            <h1 class="text-[20px] font-bold text-neutral-primary leading-[100%] mb-1">100 Main St,
                                San Francisco, CA 94114</h1>

                            <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                Jan 20, 2026 - Jan 20, 2027</p>
                        </div>
                    </div>

                    <div class="flex items-start sm:items-center flex-col sm:flex-row gap-2">
                        <div class="flex items-center gap-2">
                            <button
                                class="w-10 h-10 rounded-full border border-neutral-primary/10 text-neutral-primary flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-pencil">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                    <path d="M13.5 6.5l4 4" />
                                </svg>
                            </button>
                            <button
                                class="w-10 h-10 rounded-full border border-neutral-primary/10 text-neutral-primary flex items-center justify-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="3 6 5 6 21 6" />
                                    <path
                                        d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    <line x1="10" y1="11" x2="10" y2="17" />
                                    <line x1="14" y1="11" x2="14" y2="17" />
                                </svg>
                            </button>
                        </div>

                        <div
                            class="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
                            <button
                                class="px-6 py-[13px] rounded-[80px] border border-neutral-primary text-neutral-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] whitespace-nowrap shrink-0">
                                End Lease
                            </button>
                            <button
                                class="px-6 py-[14px] text-primary bg-neutral-primary rounded-[80px] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] whitespace-nowrap shrink-0">
                                Setup collect Rent
                            </button>
                            <button
                                class="px-6 py-[14px] text-primary rounded-[80px] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] whitespace-nowrap shrink-0"
                                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                                Renew Lease
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Lease Info -->
                <div class="px-4 sm:px-6 sm:pl-20 flex flex-wrap items-center gap-1 mb-[22px]">
                    <div
                        class="bg-[#F5F5F5] py-[6px] px-[12px] rounded-[80px] text-neutral-primary text-[10px] font-semibold uppercase leading-[100%]">
                        Lease No. 123455</div>
                    <div
                        class="bg-[#F5F5F5] py-[6px] px-[12px] rounded-[80px] text-neutral-primary text-[10px] font-semibold uppercase leading-[100%]">
                        Lease # 1</div>

                    <div
                        class="py-[6px] px-[12px] bg-[#F2FFF4] border border-[#21A6351A] rounded-[60px] text-[#21A635] text-[10px] font-semibold uppercase leading-[100%]">
                        Active
                    </div>
                </div>

                <!-- Tabs -->
                <div
                    class="px-4 sm:px-6 flex items-center gap-[18px] border-b border-neutral-primary/10 mb-6 overflow-x-auto scrollbar-hide">
                    <button v-for="tab in tabs" :key="tab.label" @click="activeTab = tab.label"
                        class="pb-[11px] text-[12px] leading-[100%] whitespace-nowrap border-b-[2px] transition-colors"
                        :class="activeTab === tab.label
                            ? 'text-brand-blue border-brand-blue font-bold'
                            : 'text-neutral-primary/80 border-transparent font-semibold'">
                        {{ tab.label }}
                    </button>
                </div>

                <!-- Content -->
                <div class="px-4 sm:px-6">
                    <Tenants v-if="activeTab === 'Tenants'" />
                    <LeaseTransactions v-if="activeTab === 'Lease Transactions'" />
                    <AgreementNotices v-if="activeTab === 'Agreement & Notices'" />
                    <Insurance v-if="activeTab === 'Insurance'" />
                    <Utilities v-if="activeTab === 'Utilities'" />
                    <MoveInOutInspection v-if="activeTab === 'Move-in/Move-out Inspection'" />
                </div>

            </main>

        </div>

    </div>
</template>
