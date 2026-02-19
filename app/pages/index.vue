<script setup lang="ts">
const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/listings', label: 'Listings' },
    { to: '/tenant-management', label: 'Tenant Management' },
]

const features = [
    {
        title: 'Place qualified tenants quickly',
        description: 'Streamlined screening + leasing workflow built for speed.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 40 40" class="w-10 h-10"><circle cx="20" cy="14" r="6"/><path stroke-linecap="round" stroke-linejoin="round" d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12"/><path stroke-linecap="round" d="M28 10l2 2 4-4"/></svg>`,
    },
    {
        title: 'Automate rent collection and accounting',
        description: 'Receive, log, and reconcile receipts, and see any report to management.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 40 40" class="w-10 h-10"><rect x="8" y="10" width="24" height="20" rx="2"/><path stroke-linecap="round" d="M14 20h12M14 25h8"/><circle cx="20" cy="16" r="3"/></svg>`,
    },
    {
        title: 'Manage the lease effortlessly from signing to renewals',
        description: 'Digital signatures, renewals and referral easily.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 40 40" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8h16a2 2 0 012 2v20a2 2 0 01-2 2H12a2 2 0 01-2-2V10a2 2 0 012-2z"/><path stroke-linecap="round" d="M15 16h10M15 21h7M15 26h5"/><path stroke-linecap="round" d="M25 14l3 3-6 6"/></svg>`,
    },
    {
        title: 'Access fast, reliable repair coordination, day or night',
        description: 'Get real-time coordination with local repair support.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 40 40" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M28 12a8 8 0 00-11.31 11.31l-8 8 2.83 2.83 8-8A8 8 0 0028 12z"/><path stroke-linecap="round" d="M24 16l-4 4"/></svg>`,
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
            <!-- ─── NAVBAR ─────────────────────────────────────────────────────── -->
            <nav class="py-6">
                <div
                    class="max-w-[1440px] mx-auto pl-[106px] pr-[108px] flex items-center justify-between font-figtree h-auto">
                    <NuxtLink to="/" class="flex items-center gap-2">
                        <!-- House icon matching design -->
                        <span class="w-6 h-6 flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 2L3 8V18H8V13.5C8 12.119 8.895 11 10 11C11.105 11 12 12.119 12 13.5V18H17V8L10 2Z"
                                    fill="#1A56DB" />
                                <path d="M8 18V13.5C8 12.119 8.895 11 10 11C11.105 11 12 12.119 12 13.5V18"
                                    fill="#EBF2FF" />
                            </svg>
                        </span>
                        <span
                            class="text-[#00091A] font-extrabold text-2xl tracking-[-0.02em] leading-none">Gable</span>
                    </NuxtLink>

                    <div
                        class="flex items-center h-[46px] rounded-[80px] bg-primary shadow-[0px_0px_40px_-20px_#0F1B3380] p-1 gap-1">
                        <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to"
                            class="h-[38px] px-4 flex items-center rounded-[80px] text-[12px] font-bold uppercase tracking-[-0.02em] leading-none text-[#00091A] transition-colors hover:text-[#004CE5]"
                            exact-active-class="!bg-[#004CE5] !text-white !font-semibold hover:!text-white">
                            {{ link.label }}
                        </NuxtLink>
                    </div>

                    <!-- CTA -->
                    <a href="#"
                        class="flex items-center justify-center w-[92px] h-10 border border-[#004CE5] text-[#004CE5] text-[12px] font-extrabold leading-none tracking-[-0.02em] uppercase rounded-[80px]">
                        Sign In
                    </a>
                </div>
            </nav>

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

                    <!-- White dashboard card -->
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

                    <!-- 3D house image — overlaps bottom-right of card -->
                    <div class="absolute top-[247px] right-0 rounded-[32px] overflow-hidden"
                        style="width:288px; height:260px;">
                        <NuxtImg src="/assets/hero-image.jpg" alt="3D isometric house"
                            class="w-full h-full object-cover" />
                    </div>

                </div>
            </div>
        </section>

        <!-- ─── FEATURES ───────────────────────────────────────────────────── -->
        <section class="bg-white px-[108px] py-20">
            <div class="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="feat in features" :key="feat.title"
                    class="h-[440px] py-[28px] px-8 border border-[#0F111426] rounded-3xl group">
                    <h3 class="text-2xl font-bold text-[#00091A] leading-7 mb-[13px]">{{ feat.title }}</h3>
                    <p class="text-base text-[#0F1114CC] leading-5">{{ feat.description }}</p>
                </div>
            </div>
        </section>

        <!-- ─── HOW IT GOES ────────────────────────────────────────────────── -->
        <section class="bg-hero-radial px-[108px] py-[84px]">
            <div class="max-w-[1440px] mx-auto flex justify-between">
                <!-- Steps -->
                <div class="border-t border-b border-[#0F11141A] w-[600px]">
                    <div v-for="(step, i) in steps" :key="i" class="flex gap-5 pt-12">
                        <span
                            class="text-xl leading-[100%] font-bold flex items-center justify-center h-12 w-12 border border-[#0F11141A] rounded-full text-[#00091A]">{{
                                i + 1 }}</span>
                        <div class="border-b border-[#0F11141A] pb-11 w-full">
                            <h4 class="text-2xl leading-7 font-bold text-[#00091A] mb-[5px]">{{ step.title }}</h4>
                            <p class="text-base leading-5 text-[#0F1114CC]">{{ step.description }}</p>
                        </div>
                    </div>
                </div>

                <!-- Right copy -->
                <div class="pt-[33px] w-[520px]">
                    <h2 class="text-[64px] leading-[64px] font-semibold text-[#00091A] mb-[15px]">How it goes</h2>
                    <p class="text-xl leading-7 text-[#0F1114CC] mb-[78px]">
                        A simple loop that keeps your property running smoothly.
                    </p>

                    <p class="text-xl leading-7 font-bold text-[#00091A] mb-5">Need hands-on help?</p>
                    <p class="text-base leading-5 text-[#0F1114CC] font-normal mb-9">Use Gable as software-only, or
                        combine it with management services depending on your needs.</p>

                    <button class="w-12 h-12 rounded-full bg-[#004CE51A] flex items-center justify-center">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>

        <!-- ─── EXPLORE LISTINGS ───────────────────────────────────────────── -->
        <section class="bg-primary pt-[66px] px-[108px]">
            <div class="max-w-[1440px] mx-auto">
                <h2 class="text-[64px] leading-[64px] font-semibold text-[#00091A] mb-[59px] text-center">
                    Explore <span class="font-playfair italic font-normal">Listings</span>
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-[25px]">
                    <div v-for="listing in listings" :key="listing.address" class="overflow-hidden group">
                        <div class="h-[288px] rounded-[24px] border border-[#0F111426] overflow-hidden mb-[18px]">
                            <NuxtImg :src="listing.Image" alt="3D isometric house" class="w-full h-full object-cover" />
                        </div>
                        <div class="p-4">
                            <p class="text-2xl leading-[100%] font-extrabold text-[#00091A] mb-[7px]">
                                {{ listing.price }}
                            </p>
                            <p class="text-base font-medium leading-[100%] text-[#0F1114CC] mb-[7px]">
                                {{ listing.address }}</p>
                            <p class="text-xl leading-[100%] text-[#00091A] font-bold mb-[19px]">{{ listing.type }}</p>
                            <div class="flex items-center h-6 text-sx text-[#00091A] mb-6">
                                <span>📐 <span class="text-[14px] leading-[100%] pr-4">
                                        {{ listing.sqft }}
                                        sqft </span></span>
                                <span class="border-r border-l border-[#0F111466] pr-4 pl-[17px]">🛏 <span
                                        class="text-[14px] leading-[100%]"> {{ listing.beds }}
                                        Bedrooms </span></span>
                                <span class=" pl-[17px]">🚿 <span class="text-[14px] leading-[100%]"> {{ listing.baths
                                }}
                                        Bathrooms </span></span>
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
        <section class="bg-gradient-radial h-[536px] px-[108px]">
            <div class="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div class="rounded-3xl overflow-hidden grid lg:grid-cols-2 bg-white shadow-lg min-h-[240px]">
                    <!-- Left copy -->
                    <div class="p-10 lg:p-14 flex flex-col justify-center">
                        <h2 class="text-4xl font-bold text-gray-900 leading-tight mb-3">
                            Ready to<br />
                            <span class="font-playfair italic">get started?</span>
                        </h2>
                        <p class="text-sm text-gray-500 leading-relaxed mb-8 max-w-xs">
                            Go immediately to your property dashboard.
                        </p>
                        <a href="#"
                            class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-6 py-3 rounded-full w-fit transition-colors shadow">
                            Get Started Now
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                    <!-- Right image -->
                    <div class="hidden lg:block bg-gradient-to-br from-sky-200 to-blue-400 relative">
                        <NuxtImg src="/assets/footer.png" class="w-full h-full" />
                    </div>
                </div>
            </div>
        </section>

        <!-- ─── FOOTER ─────────────────────────────────────────────────────── -->
        <footer class="bg-white border-t border-gray-100 py-12">
            <div class="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
                <!-- Brand -->
                <div class="col-span-2 md:col-span-1">
                    <a href="#" class="flex items-center gap-1.5 mb-4">
                        <span class="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center">
                            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                                <path d="M7 1L13 5V13H9V9H5V13H1V5L7 1Z" fill="white" />
                            </svg>
                        </span>
                        <span class="text-gray-900 font-bold text-sm">Gable</span>
                    </a>
                    <p class="text-[11px] text-gray-400 leading-relaxed max-w-[200px]">
                        Leasing tools, property managers can use to find and manage tenants—as a growing or as an
                        individual investor.
                    </p>
                    <div class="flex items-center gap-3 mt-5">
                        <a href="#"
                            class="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-100 hover:text-blue-600 transition-colors text-xs">in</a>
                        <a href="#"
                            class="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-100 hover:text-blue-600 transition-colors text-xs">f</a>
                        <a href="#"
                            class="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-100 hover:text-blue-600 transition-colors text-xs">X</a>
                    </div>
                </div>

                <!-- Company -->
                <div>
                    <p class="text-xs font-bold text-gray-800 mb-4">Company</p>
                    <ul class="space-y-2.5">
                        <li v-for="link in ['About Us', 'Contact Us', 'Careers', 'Blog']" :key="link">
                            <a href="#" class="text-xs text-gray-500 hover:text-blue-600 transition-colors">{{ link
                                }}</a>
                        </li>
                    </ul>
                </div>

                <!-- Type of user -->
                <div>
                    <p class="text-xs font-bold text-gray-800 mb-4">Type of User</p>
                    <ul class="space-y-2.5">
                        <li v-for="link in ['Landlords', 'Tenant', 'Service Pros']" :key="link">
                            <a href="#" class="text-xs text-gray-500 hover:text-blue-600 transition-colors">{{ link
                                }}</a>
                        </li>
                    </ul>
                </div>

                <!-- Dashboard + Legal -->
                <div class="space-y-6">
                    <div>
                        <p class="text-xs font-bold text-gray-800 mb-4">Dashboard</p>
                        <ul class="space-y-2.5">
                            <li v-for="link in ['Landlord', 'Tenant', 'Pro']" :key="link">
                                <a href="#" class="text-xs text-gray-500 hover:text-blue-600 transition-colors">{{ link
                                    }}</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p class="text-xs font-bold text-gray-800 mb-4">Legal</p>
                        <ul class="space-y-2.5">
                            <li v-for="link in ['Terms & Conditions', 'Privacy Policy']" :key="link">
                                <a href="#" class="text-xs text-gray-500 hover:text-blue-600 transition-colors">{{ link
                                    }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div
                class="max-w-[1440px] mx-auto px-6 lg:px-12 border-t border-gray-100 pt-6 text-[10px] text-gray-400 text-center">
                © {{ new Date().getFullYear() }} Gable. All rights reserved.
            </div>
        </footer>

    </div>
</template>