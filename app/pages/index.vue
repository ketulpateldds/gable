<script setup lang="ts">
import Footer from '~/components/Footer.vue';
import Navbar from '~/components/Navbar.vue';

const features = [
    {
        title: 'Place qualified tenants quickly',
        description: 'Streamlined screening + leasing workflow built for speed.',
        icon: `/assets/Thunder, Lightning, Notifications.png`,
    },
    {
        title: 'Automate rent collection and accounting',
        description: 'Receive, log, and reconcile receipts, and see any report to management.',
        icon: `/assets/science-rotate.png`,
    },
    {
        title: 'Manage the lease effortlessly from signing to renewals',
        description: 'Digital signatures, renewals and referral easily.',
        icon: `/assets/documet-edit-pen.png`,
    },
    {
        title: 'Access fast, reliable repair coordination, day or night',
        description: 'Get real-time coordination with local repair support.',
        icon: `/assets/Tools, Settings.png`,
    },
]

const steps = [
    {
        title: 'Set up your property',
        description: 'Add units, rent details, rules, activities and lease documents.',
    },
    {
        title: 'Place tenants + sign digitally',
        description: 'Collect applications, screen, approve. Enc-sign leases in less time.',
    },
    {
        title: 'Run daily operations',
        description: 'Track rent payments, log maintenance history, produce financial reports, and connect.',
    },
]

const listings = [
    {
        price: '$3,245/mo',
        address: '123 Main St, City',
        type: 'Modern Home',
        sqft: 1284,
        beds: 3,
        baths: 2,
        bgClass: 'from-amber-300 to-orange-400',
        Image: '/assets/listing1.png'
    },
    {
        price: '$3,245/mo',
        address: '123 Main St, City',
        type: 'Modern Home',
        sqft: 1284,
        beds: 3,
        baths: 2,
        bgClass: 'from-slate-300 to-slate-500',
        Image: '/assets/listing2.png'
    },
    {
        price: '$3,245/mo',
        address: '123 Main St, City',
        type: 'Modern Home',
        sqft: 1284,
        beds: 3,
        baths: 2,
        bgClass: 'from-stone-300 to-stone-500',
        Image: '/assets/listing3.png'
    },
]
</script>

<template>
    <div class="min-h-screen bg-white font-figtree">

        <section class="bg-hero-radial">
            <Navbar />

            <!-- ─── HERO ───────────────────────────────────────────────────────── -->
            <div class="max-w-[1440px] mx-auto px-[108px] pt-[61px] pb-[138px] flex items-center justify-between">
                <!-- Left -->
                <div>
                    <p
                        class="h-10 w-[300px] rounded-[80px] border border-[#004CE51A] text-[12px] font-semibold text-[#00091A] uppercase tracking-wider mb-[18px] flex items-center justify-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="outerGrad" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stop-color="#3388FF" stop-opacity="0.3" />
                                    <stop offset="100%" stop-color="#004CE5" stop-opacity="0.3" />
                                </linearGradient>
                                <linearGradient id="innerGrad" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stop-color="#3388FF" />
                                    <stop offset="100%" stop-color="#004CE5" />
                                </linearGradient>
                            </defs>
                            <!-- Outer halo circle: 16×16 -->
                            <circle cx="8" cy="8" r="8" fill="url(#outerGrad)" />
                            <!-- Inner solid circle: 8×8 (r=4, centered) -->
                            <circle cx="8" cy="8" r="4" fill="url(#innerGrad)" />
                        </svg>
                        Settings & Property Billing Rules
                    </p>

                    <h1 class="text-8xl font-semibold text-[#0F1114] leading-[96px] tracking-0%">
                        Property Management
                    </h1>

                    <h1 class="text-8xl font-playfair italic text-[#0F1114] leading-[96px] tracking-0% mb-[37px]">
                        Simplified
                    </h1>

                    <p class="font-normal text-base text-[#0F1114CC] leading-[100%] tracking-[0%] mb-11 max-w-[600px]">
                        Leasing Tools, Repair Coordination, Management Tools, Local Support.
                    </p>

                    <button
                        class="h-[50px] w-[156px] rounded-[80px] uppercase inline-flex items-center justify-center gap-2 bg-[linear-gradient(225.01deg,_#3388FF_0%,_#004CE6_100%)] text-white text-sm font-extrabold px-6 py-3 leading-[100%] tracking-[-2%]">
                        Try For Free
                    </button>
                </div>

                <!-- Right — Dashboard card -->
                <div class="relative flex-shrink-0" style="width:520px; height:480px;">
                    <div class="absolute top-0 right-[73px] bg-primary rounded-[32px] pt-[28px] pb-10"
                        style="width:520px; height:426px; box-shadow: 0px 0px 40px -20px #0F1B3333;">

                        <div class="px-8">
                            <p class="text-base font-bold text-[#00091A] leading-[100%] tracking-normal mb-[7px]">Your
                                Property Dashboard</p>
                            <p
                                class="text-[12px] text-[#0F1114CC] leading-5 tracking-normal opacity-50 mb-[26px] w-full">
                                A clean command center for leasing, repairs, and rent — all in one place.
                            </p>
                        </div>

                        <hr class="border-1 border-[#0F11140D] pb-5">

                        <div class="space-y-7 px-8">
                            <div class="mb-[28px]">
                                <div class="flex justify-between text-base leading-[100%] text-[#00091A] mb-6">
                                    <span class="font-semibold">Occupancy</span>
                                    <span
                                        class="font-bold border border-[#0F11140D] bg-[#0F111405] rounded-[80px] h-[38px] w-[72px] flex items-center justify-center">72%</span>
                                </div>
                                <div class="relative w-full h-[6px] bg-[#EDF3FA] rounded-full">
                                    <div class="absolute left-0 top-0 h-[6px] bg-[linear-gradient(90deg,#3388FF,#004CE5)] rounded-full"
                                        style="width:72%"></div>
                                    <div class="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#004CE5] rounded-full shadow-md"
                                        style="left:calc(72% - 8px)"></div>
                                </div>
                            </div>

                            <div>
                                <div class="flex justify-between text-base leading-[100%] text-[#00091A] mb-6">
                                    <span class="font-semibold">Open Repairs</span>
                                    <span
                                        class="font-bold border border-[#0F11140D] bg-[#0F111405] rounded-[80px] h-[38px] w-[52px] flex items-center justify-center">3</span>
                                </div>
                                <div class=" relative w-full h-[6px] bg-[#EDF3FA] rounded-full">
                                    <div class="absolute left-0 top-0 h-[6px] bg-[linear-gradient(90deg,#3388FF,#004CE5)] rounded-full"
                                        style="width:30%"></div>
                                    <div class="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#004CE5] rounded-full shadow-md"
                                        style="left:calc(30% - 8px)"></div>
                                </div>
                            </div>

                            <div>
                                <div class="flex justify-between text-base leading-[100%] text-[#00091A] mb-6">
                                    <span class="font-semibold">Rent Collected</span>
                                    <span
                                        class="font-bold border border-[#0F11140D] bg-[#0F111405] rounded-[80px] h-[38px] w-[52px] flex items-center justify-center">3</span>
                                </div>
                                <div class="relative w-full h-[6px] bg-[#EDF3FA] rounded-full">
                                    <div class="absolute left-0 top-0 h-[6px] bg-[linear-gradient(90deg,#3388FF,#004CE5)] rounded-full"
                                        style="width:82%"></div>
                                    <div class="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#004CE5] rounded-full shadow-md"
                                        style="left:calc(82% - 8px)"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="absolute top-[247px] right-0 rounded-[32px] overflow-hidden"
                        style="width:288px; height:260px;">
                        <NuxtImg src="/assets/hero-image.jpg" alt="3D isometric house"
                            class="w-full h-full object-cover" />
                    </div>

                </div>
            </div>
        </section>

        <!-- ─── FEATURES ───────────────────────────────────────────────────── -->
        <section class="bg-white px-6 md:px-[108px] py-12 md:py-20">
            <div class="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="feat in features" :key="feat.title"
                    class="relative h-auto min-h-[400px] md:h-[440px] py-[28px] px-8 border border-[#0F111426] rounded-3xl group">
                    <h3 class="text-2xl font-bold text-[#00091A] leading-7 mb-[13px]">{{ feat.title }}</h3>
                    <p class="text-base text-[#0F1114CC] leading-5">{{ feat.description }}</p>
                    <div class="absolute bottom-[21px] right-[14px] h-[102px] w-[102px]">
                        <NuxtImg :src="feat.icon" alt="Feature icon" class="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>

        <!-- ─── HOW IT GOES ────────────────────────────────────────────────── -->
        <section class="bg-hero-radial px-6 py-12 md:px-[108px] md:py-[84px]">
            <div class="max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row justify-between gap-12 lg:gap-[100px]">
                <div class="border-t border-b border-[#0F11141A] w-full lg:w-[600px]">
                    <div v-for="(step, i) in steps" :key="i" class="flex gap-5 pt-12">
                        <span
                            class="text-xl leading-[100%] font-bold p-3 flex items-center justify-center h-12 w-12 border border-[#0F11141A] rounded-full text-[#00091A] shrink-0">{{
                                i + 1 }}</span>
                        <div class="border-b border-[#0F11141A] pb-11 w-full"
                            :class="{ 'border-b-0': i === steps.length - 1 }">
                            <h4 class="text-2xl leading-7 font-bold text-[#00091A] mb-[5px]">{{ step.title }}</h4>
                            <p class="text-base leading-5 text-[#0F1114CC]">{{ step.description }}</p>
                        </div>
                    </div>
                </div>

                <div class="pt-0 lg:pt-[33px] w-full lg:w-[520px]">
                    <h2 class="text-4xl md:text-[64px] md:leading-[64px] font-semibold text-[#00091A] mb-[15px]">How it
                        goes</h2>
                    <p class="text-xl leading-7 text-[#0F1114CC] mb-8 md:mb-[78px]">
                        A simple loop that keeps your property running smoothly.
                    </p>

                    <p class="text-xl leading-7 font-bold text-[#00091A] mb-5">Need hands-on help?</p>
                    <p class="text-base leading-5 text-[#0F1114CC] font-normal mb-9">Use Gable as software-only, or
                        combine it with management services depending on your needs.</p>

                    <button
                        class="w-12 h-12 rounded-full bg-[#004CE51A] text-[#004CE5] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l14 0" />
                            <path d="M15 16l4 -4" />
                            <path d="M15 8l4 4" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>

        <!-- ─── EXPLORE LISTINGS ───────────────────────────────────────────── -->
        <section class="bg-primary px-6 md:px-[108px] pt-12 md:pt-[66px] mb-12 md:mb-[102px]">
            <div class="max-w-[1440px] mx-auto">
                <h2
                    class="text-4xl md:text-[64px] md:leading-[64px] font-semibold text-[#00091A] mb-8 md:mb-[59px] text-center">
                    Explore <span class="font-playfair italic font-normal">Listings</span>
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[25px]">
                    <div v-for="listing in listings" :key="listing.address" class="overflow-hidden group">
                        <div class="h-[288px] rounded-[24px] border border-[#0F111426] overflow-hidden mb-[18px]">
                            <NuxtImg :src="listing.Image" alt="3D isometric house" class="w-full h-full object-cover" />
                        </div>
                        <div class="p-4 md:p-0">
                            <p class="text-2xl leading-[100%] font-extrabold text-[#00091A] mb-[7px]">
                                {{ listing.price }}
                            </p>
                            <p class="text-base font-medium leading-[100%] text-[#0F1114CC] mb-[7px]">
                                {{ listing.address }}</p>
                            <p class="text-xl leading-[100%] text-[#00091A] font-bold mb-[19px]">{{ listing.type }}</p>
                            <div class="flex items-center flex-wrap h-auto text-sx text-[#00091A] mb-6 gap-y-2">
                                <span class="flex items-center">📐 <span class="text-[14px] leading-[100%] pr-4">
                                        {{ listing.sqft }}
                                        sqft </span></span>
                                <span class="border-r border-l border-[#0F111466] pr-4 pl-4 flex items-center">🛏 <span
                                        class="text-[14px] leading-[100%]"> {{ listing.beds }}
                                        Bedrooms </span></span>
                                <span class="pl-4 flex items-center">🚿 <span class="text-[14px] leading-[100%]">
                                        {{ listing.baths }} Bathrooms </span></span>
                            </div>
                            <button
                                class="w-full h-[50px] text-[14px] font-extrabold text-[#00091A] border border-[#0F111433] rounded-[80px] leading-[100%] uppercase tracking-[-2%]">
                                Request Tour
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ─── CTA BANNER ─────────────────────────────────────────────────── -->
        <section class="bg-gradient-radial px-6 md:px-[108px] mb-12 md:mb-16">
            <div class="max-w-[1440px] mx-auto">
                <div class="rounded-[32px] overflow-hidden flex flex-col lg:flex-row min-h-[400px] lg:h-[536px]"
                    style="background: radial-gradient(55.56% 100% at 50% 0%, #FFFFFF 0%, #EDF3FA 100%);">

                    <div class="flex-1 px-8 py-12 lg:py-0 lg:pl-20 flex flex-col justify-center h-full">
                        <h2
                            class="text-4xl md:text-[64px] md:leading-[64px] font-semibold text-[#00091A] mb-6 md:mb-[30px]">
                            Ready to
                            <span class="font-playfair inline-block font-normal italic">get started?</span>
                        </h2>
                        <p class="text-base leading-5 text-[#0F1114CC] mb-9">
                            Go immediately to your property dashboard.
                        </p>
                        <button class="pl-8 pr-[27px] inline-flex items-center h-[50px] gap-3 text-primary text-[14px] font-extrabold uppercase tracking-[-2%] leading-[100%] rounded-[80px] w-fit transition-colors shadow
                            " style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                            Get Started Now
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l14 0" />
                                <path d="M15 16l4 -4" />
                                <path d="M15 8l4 4" />
                            </svg>
                        </button>
                    </div>

                    <div
                        class="hidden lg:flex flex-shrink-0 w-[704px] h-full rounded-tr-[32px] rounded-br-[32px] overflow-hidden">
                        <NuxtImg src="/assets/footer.png" class="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>

        <Footer />

    </div>
</template>