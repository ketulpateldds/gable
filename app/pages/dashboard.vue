<script setup>
const properties = [
    {
        address: '123 Oak St',
        location: 'Oakland, CA',
        units: '4 units',
        tenants: 4,
        tickets: 1,
        balance: 0,
        img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80',
    },
    {
        address: '78 Brookwood Pl',
        location: 'Oakland, CA',
        units: 'Single-family',
        tenants: 0,
        tickets: 0,
        balance: 0,
        img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&q=80',
    },
    {
        address: '55 Crystal Falls Dr',
        location: 'Leander, TX',
        units: '3 bed / 2 bath',
        tenants: 1,
        tickets: 2,
        balance: 120,
        img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&q=80',
    },
    {
        address: '901 Market St',
        location: 'San Francisco, CA',
        units: '12 units',
        tenants: 14,
        tickets: 1,
        balance: 0,
        img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80',
    },
]
</script>

<template>
    <div class="flex min-h-screen bg-primary">

        <Sidebar />

        <div class="flex-1 ml-64 flex flex-col min-h-screen">
            <Navbar />

            <main class="flex-1 px-6 py-[19px]">

                <h1 class="text-xl font-bold text-[#0F1114] leading-[100%] mb-[19px]">Dashboard</h1>

                <div class="grid grid-cols-3 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-[27px]">

                    <div
                        class="rounded-3xl h-[200px] border border-[#0F11141A] shadow-sm flex overflow-hidden min-h-[130px]">
                        <NuxtImg src="/assets/dashboard/dashboard1.png" alt="Properties"
                            class="w-40 h-full object-cover shrink-0" />
                        <div class="flex flex-col justify-between px-6 pt-[18px] pb-6">
                            <div class="flex-1">
                                <h3 class="text-xl font-bold text-[#0F1114] leading-7 mb-[1px]">Properties</h3>
                                <p class="text-[14px] text-[#0F111466] leading-[18px]">View and manage your
                                    portfolio
                                </p>
                            </div>
                            <button
                                class="self-start py-[14px] text-center w-full h-[42px] rounded-[80px] border border-[#0F111433] text-[12px] font-extrabold tracking-[-2%] uppercase leading-[100%] text-[#0F1114]">
                                EXPLORE
                            </button>
                        </div>
                    </div>

                    <div
                        class="rounded-3xl h-[200px] border border-[#0F11141A] shadow-sm flex overflow-hidden min-h-[130px]">
                        <NuxtImg src="/assets/dashboard/dashboard2.png" alt="Properties"
                            class="w-40 h-full object-cover shrink-0" />
                        <div class="flex flex-col justify-between px-6 pt-[18px] pb-6">
                            <div class="flex-1">
                                <h3 class="text-xl font-bold text-[#0F1114] leading-7 mb-[1px]">Tenants</h3>
                                <p class="text-[14px] text-[#0F111466] leading-[18px]">Active renters and
                                    applications
                                </p>
                            </div>
                            <button
                                class="self-start py-[14px] text-center w-full h-[42px] rounded-[80px] border border-[#0F111433] text-[12px] font-extrabold tracking-[-2%] uppercase leading-[100%] text-[#0F1114]">
                                EXPLORE
                            </button>
                        </div>
                    </div>

                    <div class="relative h-[200px]">
                        <NuxtImg src="/assets/dashboard/dashboard3.png" alt="Maintenance"
                            class="absolute inset-0 w-full h-full object-cover rounded-3xl" />
                        <div class="absolute inset-0 rounded-3xl" style="background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
                        background-blend-mode: luminosity;" />
                        <div class="absolute bottom-0 left-0 right-0 pb-5 px-6">
                            <div class="flex items-center gap-[7px] mb-1">
                                <span class="text-xl font-bold leading-7 text-primary tracking-tight">Maintenance</span>
                                <span
                                    class="w-[30px] h-5 bg-[#FFFFFF26] backdrop-blur-[40px] text-primary text-[12px] font-bold leading-[100%] rounded-[40px] flex items-center justify-center shrink-0">5</span>
                            </div>
                            <span class="text-[14px] text-[#FFFFFF66] font-medium leading-[18px]">Open tickets and
                                inspections</span>
                        </div>
                    </div>
                </div>

                <section>
                    <h2 class="text-xl font-bold leading-[100%] text-[#0F1114] mb-[19px]">🔥 Hot Properties</h2>

                    <div class="grid grid-cols-4 gap-4">
                        <div v-for="property in properties" :key="property.address"
                            class="w-[272px] h-[338px] border border-[#0F11141A] rounded-[24px] flex flex-col">
                            <div class="relative h-[160px]  shrink-0">
                                <NuxtImg :src="property.img" :alt="property.address"
                                    class="w-full h-full object-cover rounded-t-[24px]" />
                                <button
                                    class="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-primary border-none flex items-center justify-center text-[#0F1114] hover:bg-slate-50 transition-colors cursor-pointer shadow-md">
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

                                <div class="flex items-center justify-between mb-4">
                                    <div class="flex-1 flex flex-col items-center">
                                        <span class="text-[14px] font-bold text-[#0F1114] leading-[100%] mb-[1px]">{{
                                            property.tenants }}</span>
                                        <span
                                            class="text-[10px] text-[#0F111466] font-medium leading-[100%]">Tenants</span>
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
                                        <span
                                            class="text-[10px] text-[#0F111466] font-medium leading-[100%]">Balance</span>
                                    </div>
                                </div>

                                <div class="px-6 flex gap-1">
                                    <button v-for="action in ['OPEN', 'LEDGER', 'MAINT...']" :key="action"
                                        class="flex-1 h-[34px] py-[10px] flex items-center justify-center bg-[#F5F5F5] rounded-[80px] text-[12px] font-semibold leading-[100%] text-[#0F1114] uppercase tracking-[-2%]">
                                        {{ action }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </div>
</template>