<script setup lang="ts">
import Navbar from '~/components/landlord/Navbar.vue';
import Sidebar from '~/components/landlord/Sidebar.vue';

interface Unit {
    id: number;
    title: string;
    type: 'Apartment' | 'Room' | 'Storage' | 'Parking Space';
    beds?: number;
    baths?: number;
    size: number; // in SQ.FT
    rent: number;
    status: 'Occupied' | 'Vacant';
    tag: 'List';
    image: string;
}

const units: Unit[] = [
    {
        id: 1,
        title: 'Unit 1',
        type: 'Apartment',
        beds: 1,
        baths: 1,
        size: 700,
        rent: 2500,
        status: 'Occupied',
        tag: 'List',
        image: ''
    },
    {
        id: 2,
        title: 'Unit 1',
        type: 'Room',
        beds: 1,
        baths: 1,
        size: 700,
        rent: 2500,
        status: 'Vacant',
        tag: 'List',
        image: ''
    },
    {
        id: 3,
        title: 'Unit 1',
        type: 'Storage',
        size: 700,
        rent: 250,
        status: 'Occupied',
        tag: 'List',
        image: ''
    },
    {
        id: 4,
        title: 'Unit 1',
        type: 'Parking Space',
        size: 700,
        rent: 250,
        status: 'Occupied',
        tag: 'List',
        image: ''
    }
];

</script>

<template>
    <div class="flex min-h-screen bg-primary">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen transition-all duration-300">
            <Navbar />

            <main class="px-4 sm:px-6 pt-[19px] pb-12">

                <!-- Header -->
                <div class="pb-[22px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div class="flex items-center gap-4">
                        <NuxtLink to="/portfolio"
                            class="w-10 h-10 rounded-full flex items-center justify-center border border-neutral-primary/10 text-neutral-primary">
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
                            <h1 class="text-[20px] font-bold text-neutral-primary leading-[100%] mb-1">Properties •
                                Units
                            </h1>
                            <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">View
                                properties and
                                manage unit details, status, and listings.</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <button
                            class="px-5 py-[13px] rounded-[80px] border border-neutral-primary text-[12px] font-extrabold text-neutral-primary uppercase leading-[100%] tracking-[-2%] flex-1 sm:flex-initial text-center justify-center whitespace-nowrap">
                            CANCEL</button>
                        <button
                            class="px-5 py-[14px] rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] flex-1 sm:flex-initial text-center justify-center whitespace-nowrap"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">CREATE</button>
                    </div>
                </div>

                <!-- Building Details -->
                <div class="border border-neutral-primary/10 rounded-[24px]">
                    <div
                        class="px-4 sm:px-6 py-[14px] border-b border-neutral-primary/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                        <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%]">California Building</h2>

                        <div
                            class="bg-[#FAFAFA] border border-neutral-primary/10 rounded-[80px] px-[15px] py-[9px] self-start sm:self-auto">
                            <p
                                class="text-[12px] font-semibold text-neutral-primary leading-[100%] uppercase tracking-[-2%]">
                                100 Main St • San Francisco, CA 94114</p>
                        </div>
                    </div>

                    <!-- Units -->
                    <div class="pt-[21px] px-4 sm:px-6 pb-[33px]">
                        <h2 class="text-[14px] font-bold text-neutral-primary leading-[100%] mb-3">Units</h2>

                        <div v-for="unit in units" :key="unit.id"
                            class="relative border border-neutral-primary/10 rounded-[12px] mb-4 last:mb-0 flex flex-col lg:flex-row">

                            <!-- Image -->
                            <div
                                class="w-full h-[200px] lg:w-[200px] lg:h-[200px] rounded-t-[12px] lg:rounded-t-none lg:rounded-l-[12px] shrink-0 overflow-hidden bg-[#D9D9D9]">
                                <img v-if="unit.image" :src="unit.image" alt="unit image"
                                    class="w-full h-full object-cover" />
                            </div>

                            <!-- Badges: absolute on desktop, inline row on mobile -->
                            <div class="hidden lg:flex absolute top-4 right-4 items-center gap-2">
                                <div
                                    class="px-[15px] py-[9px] rounded-[80px] bg-brand-blue/5 border border-brand-blue/10 text-brand-blue text-[12px] font-bold leading-[100%] tracking-[-2%]">
                                    List
                                </div>
                                <div class="px-[15px] py-[9px] border rounded-[60px] text-[12px] font-bold leading-[100%] tracking-[-2%]"
                                    :class="unit.status === 'Occupied'
                                        ? 'bg-status-success-bg text-status-success-text border-status-success-border'
                                        : 'bg-status-warning-bg text-status-warning-text border-status-warning-border'">
                                    {{ unit.status }}
                                </div>
                            </div>

                            <div class="flex-1 pt-[22px] px-5 sm:px-6 pb-[25px]">
                                <!-- Mobile badges (inline) -->
                                <div class="flex lg:hidden items-center gap-2 mb-3">
                                    <div
                                        class="px-[15px] py-[9px] rounded-[80px] bg-brand-blue/5 border border-brand-blue/10 text-brand-blue text-[12px] font-bold leading-[100%] tracking-[-2%]">
                                        List
                                    </div>
                                    <div class="px-[15px] py-[9px] border rounded-[60px] text-[12px] font-bold leading-[100%] tracking-[-2%]"
                                        :class="unit.status === 'Occupied'
                                            ? 'bg-status-success-bg text-status-success-text border-status-success-border'
                                            : 'bg-status-warning-bg text-status-warning-text border-status-warning-border'">
                                        {{ unit.status }}
                                    </div>
                                </div>

                                <h3 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[5px]">
                                    {{ unit.title }}
                                </h3>
                                <p class="text-[12px] font-semibold text-neutral-primary/60 leading-[100%] mb-[11px]">
                                    {{ unit.type }}</p>

                                <p class="text-[12px] font-semibold text-neutral-primary leading-[100%] mb-[17px]">
                                    <span v-if="unit.beds">
                                        {{ unit.beds }} Beds/ {{ unit.baths }} Baths • {{ unit.size }} SQ.FT
                                    </span>
                                    <span v-else>
                                        {{ unit.size }} SQ.FT
                                    </span>
                                </p>

                                <p class="text-[16px] font-semibold text-neutral-primary leading-[100%] mb-[21px]">
                                    ${{ unit.rent }} Rent
                                </p>

                                <button
                                    class="px-[16px] py-[9px] text-[12px] font-bold text-brand-blue border border-brand-blue rounded-[80px] uppercase leading-[100%] tracking-[-2%]">
                                    VIEW UNIT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

        </div>

    </div>
</template>
