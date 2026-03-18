<script setup lang="ts">
import Footer from '~/components/Footer.vue';
import Navbar from '~/components/Navbar.vue';
import type { ComparisonFeature, Plan } from '~/types/interfaces';

const isAnnual = ref<boolean>(false)

const plans = computed<Plan[]>(() => [
    {
        name: 'BASIC',
        price: 'Free',
        priceDetail: '',
        description: 'Get started with essential tools.',
        featuresHeader: 'Get Started with:',
        features: [
            'Listings',
            'Tenant applications'
        ],
        buttonText: 'GET STARTED',
        highlighted: false
    },
    {
        name: 'STARTER',
        price: isAnnual.value ? '$25' : '$31',
        priceDetail: '/month',
        basePrice: isAnnual.value ? '$2.00 per unit + $23.00 base fee' : '$2.50 per unit + $28.50 base fee',
        description: 'Designed for DIY landlords looking to automate tasks and simplify their portfolios.',
        featuresHeader: 'All Basic features, plus:',
        features: [
            'Lease tracking & management',
            'Maintenance requests',
            'Maintenance tracking',
            'Inspections / templates',
            'Move-in',
            'Move-out',
            'Periodic inspections',
            'One (1) eSignature/month',
            'Private messaging with tenants'
        ],
        buttonText: 'TRY FOR 14 DAYS',
        highlighted: false
    },
    {
        name: 'GROWTH',
        price: isAnnual.value ? '$30' : '$38',
        priceDetail: '/month',
        basePrice: isAnnual.value ? '$2.00 per unit + $28.00 base fee' : '$2.50 per unit + $35.50 base fee',
        description: 'Built for growing operators who need payments, tracking, and team collaboration in one place.',
        featuresHeader: 'All Starter features, plus:',
        features: [
            'Online rent payments',
            'Unlimited portfolios',
            'Rent collection & late fees',
            'Financial tracking',
            'Team management',
            'eSignatures/month',
            'Document storage'
        ],
        buttonText: 'TRY FOR 14 DAYS',
        highlighted: true
    },
    {
        name: 'PRO',
        price: isAnnual.value ? '$47' : '$58.50',
        priceDetail: '/month',
        basePrice: isAnnual.value ? '$24 per unit + $23.00 base fee' : '$30 per unit + $28.50 base fee',
        description: 'Get a dedicated repair coordinator and all of our software for high-touch operations.',
        featuresHeader: 'All Growth features, plus:',
        features: [
            '24/7 end-to-end repair coordination',
            'Instant issue diagnosis and troubleshooting',
            'Seamless work orders with your trusted pros'
        ],
        buttonText: 'TRY FOR 14 DAYS',
        highlighted: false
    }
])

const comparisonFeatures: ComparisonFeature[] = [
    { name: 'Listings', basic: true, starter: true, growth: true, pro: true },
    { name: 'Tenant applications', basic: true, starter: true, growth: true, pro: true },
    { name: 'Lease tracking & management', basic: false, starter: true, growth: true, pro: true },
    { name: 'Maintenance requests & tracking', basic: false, starter: true, growth: true, pro: true },
    { name: 'Inspections / templates', basic: false, starter: true, growth: true, pro: true },
    { name: 'Online rent payments', basic: false, starter: false, growth: true, pro: true },
    { name: 'Financial tracking', basic: false, starter: false, growth: true, pro: true },
    { name: 'Team management', basic: false, starter: false, growth: true, pro: true },
    { name: 'Document storage', basic: false, starter: false, growth: true, pro: true },
    { name: 'Repair coordination', basic: false, starter: false, growth: false, pro: true },
]
</script>

<template>
    <div class="min-h-screen bg-primary font-figtree overflow-x-hidden">

        <div class="bg-hero-radial pb-[65px]">
            <Navbar />

            <!-- ─── HERO ───────────────────────────────────────────────────────── -->
            <section class="max-w-[1440px] mx-auto text-center py-10 px-6">
                <div
                    class="inline-block px-6 py-[14px] rounded-[80px] bg-brand-blue/10 text-brand-blue text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] mb-[25px]">
                    Pricing
                </div>

                <h1
                    class="text-[40px] md:text-[72px] lg:text-[96px] font-semibold text-neutral-primary leading-[1.1] lg:leading-[96px] mb-[20px] md:mb-[30px]">
                    Your Rentals.<br /> Fully Automated.
                </h1>

                <p
                    class="text-[16px] font-regular text-neutral-primary/80 leading-[1.4] lg:leading-[100%] mb-11 max-w-[600px] mx-auto lg:max-w-none px-4 lg:px-0">
                    The platform property owners and managers rely on to manage rentals from anywhere.
                </p>

                <div class="flex flex-col items-center gap-8">
                    <div
                        class="inline-flex items-center gap-2 px-6 py-[13px] rounded-[80px] bg-brand-blue/5 border border-brand-blue/20 text-brand-blue text-[14px] font-bold tracking-[-2%] leading-[100%]">
                        Save up to 20% with annual billing
                    </div>

                    <div class="flex items-center gap-4">
                        <span
                            class="text-[14px] font-bold uppercase tracking-[5%] leading-[100%] transition-colors duration-200"
                            :class="!isAnnual ? 'text-neutral-primary' : 'text-neutral-primary/60'">
                            Monthly Billing
                        </span>
                        <button @click="isAnnual = !isAnnual"
                            class="w-[76px] h-10 rounded-[80px] bg-brand-blue/5   relative transition-all shadow-sm ring-1 ring-neutral-primary/5"
                            style="box-shadow: 0px 0px 6px 0px #004CE533 inset;">
                            <div class="absolute w-8 h-8 rounded-full shadow-md transition-all duration-300 ease-in-out bg-primary top-1 left-1"
                                style="box-shadow: 0px 2px 4px 0px #004CE533;"
                                :class="isAnnual ? 'translate-x-9' : 'translate-x-0'">
                            </div>
                        </button>
                        <span
                            class="text-[14px] font-bold uppercase tracking-[5%] leading-[100%] transition-colors duration-300"
                            :class="isAnnual ? 'text-neutral-primary' : 'text-neutral-primary/60'">
                            Annual Billing
                        </span>
                    </div>
                </div>
            </section>

            <!-- ─── PRICING CARDS ──────────────────────────────────────────────── -->
            <section class="max-w-[1224px] mx-auto px-6 lg:px-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="plan in plans" :key="plan.name"
                    class="bg-primary rounded-[24px] px-6 lg:px-[31px] pb-8 pt-[29px] flex flex-col h-full">
                    <div class="mb-[11px]">
                        <span
                            class="text-[12px] font-bold text-neutral-primary/60 uppercase tracking-[10%] leading-[100%]">
                            {{ plan.name }}
                        </span>
                    </div>

                    <div class="flex items-baseline gap-1 mb-2">
                        <span class="text-[40px] font-bold text-neutral-primary tracking-[-2%] leading-[100%]">
                            {{ plan.price }}</span>
                        <span v-if="plan.priceDetail"
                            class="text-[16px] font-bold text-neutral-primary/40 tracking-[-2%] leading-[100%]">
                            {{ plan.priceDetail }}</span>
                    </div>

                    <div class="text-[14px] font-regular text-neutral-primary/80 leading-6 mb-[11px]">
                        {{ plan.basePrice }}
                    </div>

                    <p
                        class="text-[14px] font-regular text-neutral-primary/80 leading-[22px] pb-[26px] border-b border-neutral-primary/10">
                        {{ plan.description }}
                    </p>

                    <div class="flex-grow mt-[25px]">
                        <p class="text-[16px] font-bold text-neutral-primary leading-6 mb-4">
                            {{ plan.featuresHeader }}</p>
                        <ul class="flex flex-col gap-[6px] mb-[27px]">
                            <li v-for="feature in plan.features" :key="feature" class="flex items-start gap-2">
                                <div class="w-5 h-5 text-brand-blue flex items-center justify-center flex-shrink-0">
                                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="currentColor"
                                            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <span class="text-[14px] font-medium text-neutral-primary leading-5">{{ feature
                                }}</span>
                            </li>
                        </ul>
                    </div>

                    <button
                        class="w-full rounded-[80px] text-[14px] font-extrabold uppercase leading-[100%] tracking-[-2%] transition-all duration-300"
                        :class="plan.highlighted
                            ? 'text-primary py-[18px]'
                            : 'bg-primary py-[17px] border border-neutral-primary/15 text-neutral-primary'"
                        :style="plan.highlighted ? { background: 'linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%)' } : {}">
                        {{ plan.buttonText }}
                    </button>
                </div>
            </section>
        </div>

        <!-- ─── COMPARISON TABLE ───────────────────────────────────────────── -->
        <section class="max-w-[1224px] mx-auto py-16">
            <div class="bg-primary rounded-[24px] border border-neutral-primary/15">
                <div class="py-[34px] px-6 md:px-10">
                    <h2
                        class="text-[28px] md:text-[32px] font-bold text-neutral-primary leading-[100%] -tracking-[2%] mb-[2px]">
                        Compare all features
                    </h2>
                    <p class="text-[14px] md:text-[16px] font-normal text-neutral-primary/80 leading-6">A quick
                        side-by-side look
                        at what each plan includes.</p>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-left min-w-[800px]">
                        <thead>
                            <tr
                                class="bg-[#FAFAFA] border-y border-neutral-primary/10 text-[14px] font-medium uppercase leading-5 text-neutral-primary/60">
                                <th class="py-3 px-6 md:pl-10 md:pr-3">Feature</th>
                                <th class="text-center max-w-40 py-3 px-3">Basic</th>
                                <th class="text-center max-w-40 py-3 px-3">Starter</th>
                                <th class="text-center max-w-40 py-3 px-3">Growth</th>
                                <th class="text-center max-w-40 py-3 px-6 md:pr-10">Pro</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="feature in comparisonFeatures" :key="feature.name"
                                class="group  border-b border-[#0F11140D] group-last:border-0">
                                <td
                                    class="px-6 md:pl-10 md:pr-3 py-[19px] text-[16px] font-medium text-neutral-primary/80 leading-5">
                                    {{ feature.name }}
                                </td>
                                <td class="py-[19px] text-center">
                                    <div v-if="feature.basic" class="flex justify-center">
                                        <svg class="w-5 h-5 text-[#21A635]" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="currentColor"
                                                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <span v-else class="text-neutral-primary/60">—</span>
                                </td>
                                <td class="py-[19px] text-center">
                                    <div v-if="feature.starter" class="flex justify-center">
                                        <svg class="w-5 h-5 text-[#21A635]" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="currentColor"
                                                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <span v-else class="text-neutral-primary/60 font-bold">—</span>
                                </td>
                                <td class="py-[19px] text-center">
                                    <div v-if="feature.growth" class="flex justify-center">
                                        <svg class="w-5 h-5 text-[#21A635]" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="currentColor"
                                                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <span v-else class="text-neutral-primary/60 font-bold">—</span>
                                </td>
                                <td class="px-6 md:pr-10 py-[19px] text-center">
                                    <div v-if="feature.pro" class="flex justify-center">
                                        <svg class="w-5 h-5 text-[#21A635]" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.6667 5L7.50001 14.1667L3.33334 10" stroke="currentColor"
                                                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <span v-else class="text-neutral-primary/60 font-bold">—</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <Footer />
    </div>
</template>
