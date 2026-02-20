<script setup lang="ts">
definePageMeta({ layout: false })

const router = useRouter()

const plans = [
    {
        id: 'starter',
        name: 'Starter',
        badge: '1-5 properties',
        badgeStyle: 'text-[#0F1114CC]',
        description: 'Great for getting organized with essentials.',
        tags: ['Core tools', 'Rent + maintenance'],
        textColor: '#0F1114'
    },
    {
        id: 'growth',
        name: 'Growth',
        badge: 'Most Popular!',
        badgeStyle: 'text-[#004CE5] font-bold',
        description: 'For growing portfolios and team workflows.',
        tags: ['Team access', 'Workflows'],
        textColor: '#004CE5'
    },
    {
        id: 'pro',
        name: 'Pro',
        badge: 'Advanced',
        badgeStyle: 'text-[#0F1114CC]',
        description: 'Advanced reporting, approvals, and operations.',
        tags: ['Approvals', 'Advanced reports'],
        textColor: '#0F1114'
    },
]

const selected = ref('starter')

const card = reactive({
    name: '',
    zip: '',
    number: '',
    expiry: '',
    cvc: '',
})

function onStartTrial() {
    router.push('/')
}
</script>

<template>
    <div class="min-h-screen bg-primary font-figtree flex flex-col items-center justify-center px-4 py-6">
        <div class="w-full max-w-[700px] border border-[#0F11141A] rounded-[32px] px-[33px] pt-[29px] pb-[33px]">

            <div class="flex items-center gap-4 mb-5">
                <button @click="router.back()"
                    class="w-10 h-10 rounded-[10px] p-[10px] border border-[#0F11141A] text-[#0F1114] flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M5 12l4 4" />
                        <path d="M5 12l4 -4" />
                    </svg>
                </button>
                <div class="flex flex-col gap-[3px]">
                    <h1 class="text-2xl font-extrabold text-[#0F1114] leading-[100%] tracking-[-0.02em]">Select plan
                    </h1>
                    <p class="text-base font-medium text-[#0F1114CC] leading-4">Starter, Growth, or Pro</p>
                </div>
            </div>

            <div class="w-full h-1 rounded-[16px] mb-7"
                style="background: linear-gradient(225.01deg, rgba(0, 76, 230, 0.1) 0%, rgba(51, 136, 255, 0.1) 100%);">
                <div class="h-full w-full rounded-[16px]"
                    style="background: linear-gradient(225.01deg, #004CE6 0%, #3388FF 100%);">
                </div>
            </div>

            <div class="flex flex-col md:flex-row gap-6">
                <div class="flex flex-col gap-2 flex-1">
                    <button v-for="plan in plans" :key="plan.id" @click="selected = plan.id" :class="[
                        'relative w-full text-left rounded-[16px] border px-[25px] pt-5 pb-[25px]',
                        selected === plan.id ? 'border-4 border-[#004CE51A] bg-[#004CE505]' : 'border-[#0F11141A]'
                    ]">
                        <span class="absolute top-[15px] right-[17px] text-[12px] leading-[100%] font-bold"
                            :style="{ color: plan.textColor }">
                            {{ plan.badge }}</span>

                        <h1 class="text-base font-bold text-[#0F1114] leading-5 mb-[7px]">{{ plan.name }}</h1>
                        <p class="text-[12px] text-[#0F1114CC] leading-5 mb-[10px]">{{ plan.description }}</p>
                        <div class="flex flex-wrap gap-2">
                            <span v-for="tag in plan.tags" :key="tag"
                                class="text-[12px] h-8 px-4 py-[9px] font-bold text-[#0F1114] bg-[#0F111405] border border-[#0F11141A] rounded-[16px] leading-[100%]">
                                {{ tag }}
                            </span>
                        </div>
                    </button>
                </div>

                <div
                    class="w-full md:max-w-[288px] border border-[#0F11141A] rounded-[16px] px-[25px] pt-[22px] pb-[21px] flex-shrink-0">
                    <p class="text-base font-extrabold text-[#0F1114] leading-[100%] tracking-[-0.02em] mb-[1px]">
                        Start your free 14-day trial</p>
                    <p class="text-[12px] font-medium text-[#0F1114CC] leading-4 mb-5">Enter credit card info (demo UI
                        only).</p>

                    <div class="flex flex-col gap-2">
                        <input v-model="card.name" type="text" placeholder="NAME ON CARD"
                            class="w-full h-[44px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] placeholder:text-[#0F111466] placeholder:uppercase font-semibold tracking-[-2%] leading-[100%] outline-none" />

                        <input v-model="card.zip" type="text" placeholder="ZIP"
                            class="w-full h-[44px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] placeholder:text-[#0F111466] placeholder:uppercase font-semibold tracking-[-2%] leading-[100%] outline-none" />

                        <input v-model="card.number" type="text" placeholder="1234 5678 9012 3456" maxlength="19"
                            class="w-full h-[44px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] placeholder:text-[#0F111466] font-semibold tracking-[-2%] leading-[100%] outline-none" />

                        <div class="flex gap-2">
                            <input v-model="card.expiry" type="text" placeholder="MM/YY" maxlength="5"
                                class="flex-1 h-[44px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] placeholder:text-[#0F111466] placeholder:uppercase font-semibold tracking-[-2%] leading-[100%] outline-none" />
                            <input v-model="card.cvc" type="text" placeholder="CVC" maxlength="4"
                                class="w-[70px] h-[44px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] placeholder:text-[#0F111466] placeholder:uppercase font-semibold tracking-[-2%] leading-[100%] outline-none" />
                        </div>

                        <button @click="onStartTrial"
                            class="w-full h-[50px] rounded-[80px] text-primary text-[14px] font-extrabold uppercase tracking-[-2%] leading-[100%] mt-[26px] outline-none"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                            Start My Free Trial
                        </button>

                        <p class="text-center font-medium text-[10px] text-[#0F1114CC] leading-4 mt-[19px]">
                            You won't be charged until the trial ends.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
