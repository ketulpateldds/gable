<script setup>
const properties = [
    {
        address: '123 Oak St',
        location: 'Oakland, CA',
        units: '4 units',
        tenants: 4,
        tickets: 1,
        balance: 0,
        img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80'
    },
    {
        address: '78 Brookwood Pl',
        location: 'Oakland, CA',
        units: 'Single-family',
        tenants: 0,
        tickets: 0,
        balance: 0,
        img: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=80'
    },
    {
        address: '55 Crystal Falls Dr',
        location: 'Leander, TX',
        units: '3 bed / 2 bath',
        tenants: 1,
        tickets: 2,
        balance: 120,
        img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80'
    },
    {
        address: '901 Market St',
        location: 'San Francisco, CA',
        units: '12 units',
        tenants: 14,
        tickets: 1,
        balance: 0,
        img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80'
    },
    {
        address: '123 Oak St',
        location: 'Oakland, CA',
        units: '4 units',
        tenants: 4,
        tickets: 1,
        balance: 0,
        img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80'
    },
    {
        address: '78 Brookwood Pl',
        location: 'Oakland, CA',
        units: 'Single-family',
        tenants: 0,
        tickets: 0,
        balance: 0,
        img: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=80'
    },
    {
        address: '55 Crystal Falls Dr',
        location: 'Leander, TX',
        units: '3 bed / 2 bath',
        tenants: 1,
        tickets: 2,
        balance: 120,
        img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80'
    },
    {
        address: '901 Market St',
        location: 'San Francisco, CA',
        units: '12 units',
        tenants: 14,
        tickets: 1,
        balance: 0,
        img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80'
    }
]

const activeFilter = ref('ALL')
</script>

<template>
    <div class="flex min-h-screen bg-primary">
        <Sidebar aria-label="Sidebar Navigation" />

        <div class="flex-1 ml-64 flex flex-col min-h-screen">
            <Navbar />

            <main class="relative flex-1 px-6 pt-[19px] pb-12">

                <div class="flex items-center justify-between mb-[19px]">
                    <h1 class="text-xl font-bold text-[#0F1114] leading-[100%]">Portfolio</h1>

                    <div class="absolute right-6 top-[11px] flex items-center gap-2">
                        <div class="relative w-[344px]">
                            <div class="absolute inset-y-0 left-2 top-2 h-6 w-6 flex items-center pointer-events-none">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F111466"
                                    stroke-width="2">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.35-4.35" />
                                </svg>
                            </div>
                            <input type="text" placeholder="Search by address, city, owner, tag..."
                                class="w-full h-10 border border-[#0F11141A] rounded-[80px] pl-[38px] pr-4 text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] leading-[100%] tracking-[-2%]" />
                        </div>

                        <button
                            class="h-10 px-6 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] leading-[100%] tracking-[-2%] uppercase">
                            Import
                        </button>

                        <button
                            class="h-10 px-[18px] py-3 rounded-[80px] text-[12px] font-extrabold text-primary flex items-center gap-[10px]"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="3">
                                <path d="M12 5v14M5 12h14" />
                            </svg>
                            <span class="uppercase tracking-[-2%] leading-[100%]">Add Property</span>
                        </button>
                    </div>
                </div>

                <div class="flex items-center gap-1 mb-6">
                    <button v-for="filter in ['ALL', 'OCCUPIED', 'VACANT']" :key="filter" @click="activeFilter = filter"
                        :class="[
                            'h-8 px-4 rounded-[80px] text-[12px] text-center leading-[100%] uppercase tracking-[-2%]',
                            activeFilter === filter ? 'bg-[#0F1114] font-bold text-primary shadow-md' : 'bg-primary border border-[#0F11141A] font-semibold text-[#0F1114]'
                        ]">
                        {{ filter }}
                    </button>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    <div v-for="(property, index) in properties" :key="index"
                        class="min-w-[272px] h-[338px] border border-[#0F11141A] rounded-[24px] flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                        <div class="relative h-[160px] shrink-0">
                            <NuxtImg :src="property.img" :alt="property.address" class="w-full h-full object-cover" />
                            <button
                                class="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-primary border-none flex items-center justify-center text-[#0F1114] cursor-pointer ">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <circle cx="12" cy="7" r="1.5" />
                                    <circle cx="12" cy="12" r="1.5" />
                                    <circle cx="12" cy="17" r="1.5" />
                                </svg>
                            </button>
                        </div>

                        <div class="pt-5 pb-6 flex-1 flex flex-col">
                            <div class="px-6 text-base font-extrabold text-[#0F1114] leading-[100%] mb-[6px]">
                                {{ property.address }}</div>
                            <div class="px-6 text-[12px] text-[#0F1114CC] font-medium leading-[100%] mb-[13px]">
                                {{ property.location }} • <span class="font-bold">{{ property.units }}</span>
                            </div>

                            <div class="flex items-center justify-between mb-4 mt-auto">
                                <div class="flex-1 flex flex-col items-center">
                                    <span class="text-[14px] font-bold text-[#0F1114] leading-[100%] mb-[1px]">{{
                                        property.tenants }}</span>
                                    <span class="text-[10px] text-[#0F111466] font-medium leading-[100%]">Tenants</span>
                                </div>
                                <div class="w-px h-[27px] bg-[#0F11141A]"></div>
                                <div class="flex-1 flex flex-col items-center">
                                    <span class="text-[14px] font-bold text-[#0F1114] leading-[100%] mb-[1px]">{{
                                        property.tickets }}</span>
                                    <span class="text-[10px] text-[#0F111466] font-medium leading-[100%]">Open
                                        Tickets</span>
                                </div>
                                <div class="w-px h-[27px] bg-[#0F11141A]"></div>
                                <div class="flex-1 flex flex-col items-center">
                                    <span class="text-[14px] font-bold text-[#0F1114] leading-[100%] mb-[1px]">{{
                                        property.balance > 0 ? `$${property.balance}` : '$0' }}</span>
                                    <span class="text-[10px] text-[#0F111466] font-medium leading-[100%]">Balance</span>
                                </div>
                            </div>

                            <div class="px-6 flex gap-1">
                                <button v-for="action in ['OPEN', 'LEDGER', 'MAINT...']" :key="action"
                                    class="flex-1 h-[34px] flex items-center justify-center bg-[#F5F5F5] rounded-full text-[12px] font-semibold leading-[100%] text-[#0F1114] uppercase tracking-[-2%] hover:bg-slate-200 transition-colors">
                                    {{ action }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
