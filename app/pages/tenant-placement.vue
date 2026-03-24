<script setup lang="ts">
import Footer from '~/components/Footer.vue';
import Navbar from '~/components/Navbar.vue';
import { ref } from 'vue';

const formData = ref({
    address: '',
    email: '',
    phone: ''
})
</script>

<template>
    <div class="min-h-screen bg-primary font-figtree overflow-x-hidden">

        <div class="bg-hero-radial">
            <Navbar />

            <!-- ─── HERO ───────────────────────────────────────────────────────── -->
            <section class="max-w-[1224px] mx-auto pt-[82px] pb-[106px]">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <!-- Left Content -->
                    <div class="text-left flex flex-col items-start">
                        <div
                            class="py-[13px] px-5 w-fit bg-brand-blue/5 border border-brand-blue/10 rounded-[80px] text-[12px] font-bold text-textPrimary uppercase tracking-[10%] leading-[100%] mb-[18px]">
                            Fastest tenant placement and lowest days on market
                        </div>

                        <h1 class="text-[96px] font-semibold text-neutral-primary leading-[96px] mb-[33px]">
                            Tenant<br />
                            <span class="font-playfair italic font-normal">Placement</span>
                        </h1>

                        <p class="text-[16px] font-normal text-neutral-primary/80 leading-6 max-w-[496px] mb-[42px]">
                            Professional media, same-day listing, fast screening, and compliant lease generation built
                            in — all designed to get your rental leased fast.
                        </p>

                        <div class="flex items-center gap-5">
                            <button
                                class="text-primary px-6 py-[18px] rounded-full text-[14px] font-extrabold uppercase tracking-[-2%] leading-[100%]"
                                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                                Lease my rental
                            </button>
                            <div class="flex flex-col">
                                <span class="text-[20px] font-bold text-brand-blue leading-[100%] mb-[5px]">$1395</span>
                                <span class="text-[12px] font-medium text-neutral-primary/80 leading-[100%]">one-time
                                    fee</span>
                            </div>
                        </div>
                    </div>

                    <!-- Right Card -->
                    <div class="w-full flex justify-center lg:justify-end">
                        <div class="bg-primary rounded-[32px] max-w-[520px] w-full"
                            style="box-shadow: 0px 0px 40px -20px #0F1B3333;">
                            <div class="pt-7 pb-[26px] px-8 border-b border-neutral-primary/5">
                                <h2 class="text-[20px] font-bold text-textPrimary mb-[1px] leading-[100%]">Lease my
                                    rental</h2>
                                <p class="text-[12px] font-normal text-neutral-primary/80 leading-5">Fastest tenant
                                    placement, and lowest days on market.</p>
                            </div>

                            <form @submit.prevent class="pt-[30px] p-8">
                                <div class="mb-[14px]">
                                    <BaseInputField v-model="formData.address" type="text" label="Property Address"
                                        placeholder="123 MAIN ST, CITY, STATE" />
                                </div>
                                <div class="mb-[14px]">
                                    <BaseInputField v-model="formData.email" type="email" label="Email"
                                        placeholder="YOU@EXAMPLE.COM" />
                                </div>
                                <div class="mb-8">
                                    <BaseInputField v-model="formData.phone" type="tel" label="Phone"
                                        placeholder="(555) 555-5555" />
                                </div>
                                <button
                                    class="w-full py-[18px] rounded-[80px] text-primary font-extrabold uppercase tracking-[-2%] leading-[100%] text-[14px]"
                                    style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                                    Get Started
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- ─── FEATURES SECTION ───────────────────────────────────────────── -->
        <section class="bg-neutral-primary py-[45px]">
            <div class="max-w-[1224px] mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- Card 1 -->
                    <div class="border border-primary/10 rounded-[24px] px-10 py-[30px]">
                        <h3 class="text-[24px] font-bold text-primary leading-[100%] mb-[11px]">Same-day listing</h3>
                        <p class="text-[16px] font-normal text-primary/60 leading-6">
                            Launch your rental quickly across premium channels.
                        </p>
                    </div>

                    <!-- Card 2 -->
                    <div class="border border-primary/10 rounded-[24px] px-10 py-[30px]">
                        <h3 class="text-[24px] font-bold text-primary leading-[100%] mb-[11px]">Fast screening</h3>
                        <p class="text-[16px] font-normal text-primary/60 leading-6">
                            Income, credit, and background checks in one streamlined flow.
                        </p>
                    </div>

                    <!-- Card 3 -->
                    <div class="border border-primary/10 rounded-[24px] px-10 py-[30px]">
                        <h3 class="text-[24px] font-bold text-primary leading-[100%] mb-[11px]">Compliant lease
                            generation</h3>
                        <p class="text-[16px] font-normal text-primary/60 leading-6">
                            Use your lease or one of our trusted partner lease templates.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ─── tenant Ads ───────────────────────────────────────────── -->
        <section class="max-w-[1224px] mx-auto pt-[102px] pb-[109px]">
            <p class="text-[20px] font-semibold text-textPrimary leading-[28px] text-center mb-[41px]">Reach more
                tenants by advertising your rental on top premium listing sites.</p>

            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <div class="border border-neutral-primary/10 rounded-[24px] h-[120px] flex justify-center items-center">
                    <NuxtImg src="/assets/zillow_logo.jpg" class="h-[30px]" />
                </div>

                <div class="border border-neutral-primary/10 rounded-[24px] h-[120px] flex justify-center items-center">
                    <NuxtImg src="/assets/trulia.jpg" class="h-[30px]" />
                </div>

                <div class="border border-neutral-primary/10 rounded-[24px] h-[120px] flex justify-center items-center">
                    <NuxtImg src="/assets/apartments.jpg" class="h-[30px]" />
                </div>

                <div class="border border-neutral-primary/10 rounded-[24px] h-[120px] flex justify-center items-center">
                    <NuxtImg src="/assets/redfin_logo.jpg" class="h-[30px]" />
                </div>

                <div class="border border-neutral-primary/10 rounded-[24px] h-[120px] flex justify-center items-center">
                    <NuxtImg src="/assets/hotpads.jpg" class="h-[30px]" />
                </div>
            </div>
        </section>

        <div class="bg-hero-radial py-[108px]">
            <!-- ─── INQUIRIES & SHOWINGS ────────────────────────────────────────── -->
            <section class="max-w-[1224px] mx-auto mb-[104px]">
                <div class="flex gap-6">
                    <!-- Left Card: Let us Handle... -->
                    <div class="flex-1 max-w-[704px] w-full bg-primary rounded-[32px] p-10 pt-[37px] h-fit"
                        style="box-shadow: 0px 0px 40px -20px #0F1B3333;">
                        <span
                            class="text-[12px] font-bold text-neutral-primary/60 uppercase tracking-[10%] leading-[100%] block mb-[13px]">Basic</span>
                        <h2
                            class="text-[40px] font-semibold text-neutral-primary leading-[44px] tracking-[-2%] mb-[18px]">
                            Let us Handle Tenant Inquiries and Showings</h2>
                        <p class="text-[16px] font-normal text-neutral-primary/60 leading-6 mb-[26px]">
                            Professional media, same-day listing, fast screening, and compliant lease generation
                            built
                            in — all designed to get your rental leased fast.
                        </p>

                        <div class="flex flex-col gap-2">
                            <div
                                class="border border-neutral-primary/10 rounded-[20px] px-[25px] pt-[23px] pb-[19px] flex gap-3">
                                <div
                                    class="w-6 h-6 rounded-full bg-[#EDF2FA] flex items-center justify-center flex-shrink-0">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="text-brand-blue"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h4
                                        class="text-[16px] font-semibold text-neutral-primary tracking-[-2%] leading-[100%] mb-[1px]">
                                        Responsive tenant communication</h4>
                                    <p class="text-[14px] font-normal text-neutral-primary/80 leading-6">We answer
                                        questions quickly and keep prospective renters engaged.</p>
                                </div>
                            </div>

                            <div
                                class="border border-neutral-primary/10 rounded-[20px] px-[25px] pt-[23px] pb-[19px] flex gap-3">
                                <div
                                    class="w-6 h-6 rounded-full bg-[#EDF2FA] flex items-center justify-center flex-shrink-0">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="text-brand-blue"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h4
                                        class="text-[16px] font-semibold text-neutral-primary tracking-[-2%] leading-[100%] mb-[1px]">
                                        Showing coordination
                                    </h4>
                                    <p class="text-[14px] font-normal text-neutral-primary/80 leading-6">Scheduling
                                        and
                                        logistics are handled for you from inquiry to tour.</p>
                                </div>
                            </div>

                            <div
                                class="border border-neutral-primary/10 rounded-[20px] px-[25px] pt-[23px] pb-[19px] flex gap-3">
                                <div
                                    class="w-6 h-6 rounded-full bg-[#EDF2FA] flex items-center justify-center flex-shrink-0">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="text-brand-blue"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h4
                                        class="text-[16px] font-semibold text-neutral-primary tracking-[-2%] leading-[100%] mb-[1px]">
                                        Application review support</h4>
                                    <p class="text-[14px] font-normal text-neutral-primary/80 leading-6">We help
                                        move
                                        qualified applicants through a faster decision process.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Card: What's included -->
                    <div class="flex-1 max-w-[496px] w-full bg-primary rounded-[32px] p-10 pt-[30px] h-fit"
                        style="box-shadow: 0px 0px 40px -20px #0F1B3333;">
                        <h3
                            class="text-[32px] font-semibold text-neutral-primary leading-[44px] tracking-[-2%] mb-[21px]">
                            What's included</h3>

                        <div class="flex flex-col gap-2">
                            <div v-for="(item, i) in [
                                { title: 'Responsive tenant communication' },
                                { title: 'Advertising to premium listing websites' },
                                { title: 'Pre-qualification of tenants' },
                                { title: 'Application and credit check background', },
                                { title: 'Electronic lease signing', description: 'Scheduling and logistics are handled for you from inquiry to tour.' },
                                { title: 'Property inspection and report' },
                                { title: 'Security deposit and first-month rent processing' },
                                { title: 'Direct tenant-to-landlord payments' }
                            ]" :key="i"
                                class="flex items-center gap-3 p-[17px] border border-neutral-primary/10 rounded-[20px]">
                                <div
                                    class="w-6 h-6 rounded-full bg-[#EDF2FA] flex items-center justify-center flex-shrink-0">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="text-brand-blue"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <span class="text-[14px] font-medium text-neutral-primary/80">
                                        {{ item.title }}</span>
                                    <p v-if="item.description"
                                        class="text-[14px] font-normal text-neutral-primary/80 leading-5">
                                        {{ item.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ─── FILL YOUR RENTAL FASTER ────────────────────────────────────── -->
            <section class="max-w-[1224px] mx-auto">
                <div class="p-10 pt-[37px] bg-primary rounded-[32px]" style="box-shadow: 0px 0px 40px -20px #0F1B3333;">
                    <div class="mb-[16px]">
                        <span
                            class="text-[12px] font-bold text-neutral-primary/60 uppercase tracking-[10%] leading-[100%] block mb-[13px]">What's
                            included</span>
                        <h2
                            class="text-[40px] font-semibold text-neutral-primary leading-[44px] tracking-[-2%] mb-[9px]">
                            Everything you need to fill your rental faster</h2>
                        <p class="text-[16px] font-normal text-neutral-primary/80 leading-6">
                            Built to reduce vacancy, attract qualified tenants, and simplify the leasing process
                            from listing to lease signing.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <!-- Card 1: Listing Photos -->
                        <div class="border border-neutral-primary/10 rounded-[20px] p-[25px] pb-5">
                            <div
                                class="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mb-[21px]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-brand-blue"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M23 19C23 20.1046 22.1046 21 21 21H3C1.89543 21 1 20.1046 1 19V8C1 6.89543 1.89543 6 3 6H7L9 3H15L17 6H21C22.1046 6 23 6.89543 23 8V19Z"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <h3
                                class="text-[16px] font-semibold text-neutral-primary leading-[100%] tracking-[-2%] mb-[7px]">
                                Professional Listing Photos</h3>
                            <p class="text-[14px] font-normal text-neutral-primary/80 leading-5">
                                High-quality photography, 3D virtual tours, and detailed floorplans to make your
                                rental stand out.
                            </p>
                        </div>

                        <!-- Card 2: Tenant Screening -->
                        <div class="border border-neutral-primary/10 rounded-[20px] p-[25px] pb-5">
                            <div
                                class="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mb-[21px]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-brand-blue"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 2L3 14H12V22L22 10H13V2Z" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <h3
                                class="text-[16px] font-semibold text-neutral-primary leading-[100%] tracking-[-2%] mb-[7px]">
                                Instant Applications & Tenant Screening</h3>
                            <p class="text-[14px] font-normal text-neutral-primary/80 leading-5">
                                Income, credit, and background verified to help you select the best-qualified
                                tenant.
                            </p>
                        </div>

                        <!-- Card 3: Lease Signing -->
                        <div class="border border-neutral-primary/10 rounded-[20px] p-6 pb-5">
                            <div
                                class="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mb-[21px]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-brand-blue"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11 4H4C2.89543 4 2 4.89543 2 6V20C2 21.1046 2.89543 22 4 22H18C19.1046 22 20 21.1046 20 20V13M18.5 2.5C19.3284 1.67157 20.6716 1.67157 21.5 2.5C22.3284 3.32843 22.3284 4.67157 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <h3
                                class="text-[16px] font-semibold text-neutral-primary leading-[100%] tracking-[-2%] mb-[7px]">
                                Electronic Lease Signing</h3>
                            <p class="text-[14px] font-normal text-neutral-primary/80 leading-5">
                                Use your existing lease or one of our partners' leases for a smooth, compliant
                                signing experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- Ready to lease your rental? -->
        <section class="max-w-[1224px] mx-auto text-center pt-[192px] pb-[206px]">
            <h2 class="text-[64px] font-semibold text-textPrimary leading-[64px] mb-7">Ready to lease your
                <span class="font-playfair italic font-normal">rental?</span>
            </h2>

            <p class="text-[16px] font-normal text-textPrimary/80 leading-6 mb-[34px]">Get your property listed fast,
                screened quickly, and leased with less hassle.</p>

            <button
                class="px-6 py-[18px] bg-brand-blue text-white rounded-[80px] text-[14px] font-extrabold uppercase tracking-[-2%] leading-[100%] hover:bg-blue-700 transition-colors"
                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                Get Started
            </button>
        </section>

        <Footer />
    </div>
</template>
