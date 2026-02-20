<script setup lang="ts">
definePageMeta({ layout: false })

const router = useRouter()

const accountTypes = [
    { id: 'landlord', label: 'Landlord', description: 'Self-manage or hire a property manager.' },
    { id: 'property-manager', label: 'Property Manager', description: 'Manage multiple owners and properties.' },
    { id: 'teammate', label: 'Teammate', description: 'Join a landlord/PM team and collaborate.' },
    { id: 'tenant', label: 'Tenant', description: 'Pay rent, request repairs, view documents.' },
    { id: 'service-pro', label: 'Service Pro', description: 'Receive work orders and submit invoices.' },
]

const selected = ref('landlord')

function onContinue() {
    router.push('/signup/account-details')
}
</script>

<template>
    <div class="min-h-screen bg-primary font-figtree flex flex-col items-center justify-center px-4 py-2">
        <div class="w-full max-w-[874px] border border-[#0F11141A] rounded-[32px] px-[33px] pt-[29px] pb-[33px]">

            <div class="flex items-center gap-4 mb-5">
                <button @click="router.back()"
                    class="w-10 h-10 rounded-[10px] p-[10px] border border-[#0F11141A] text-[#0F1114] flex-shrink-0 my-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M19 12H5M5 12l7 7M5 12l7-7" />
                    </svg>
                </button>

                <div class="flex flex-col gap-[3px]">
                    <h1 class="text-2xl font-extrabold text-[#0F1114] leading-[100%] tracking-[-0.02em]">Account type
                    </h1>
                    <p class="text-[12px] font-medium text-[#0F1114CC] leading-4">
                        What best describes you?
                    </p>
                </div>
            </div>

            <div class="w-full h-1 bg-[#0F11141A] rounded-[16px] mb-8"
                style="background: linear-gradient(225.01deg, rgba(0, 76, 230, 0.1) 0%, rgba(51, 136, 255, 0.1) 100%);">
                <div class="h-full w-1/3 rounded-[16px]"
                    style="background: linear-gradient(225.01deg, #004CE6 0%, #3388FF 100%);">
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <button v-for="type in accountTypes" :key="type.id" @click="selected = type.id" :class="[
                    'relative text-left rounded-[16px] border pl-[25px] pr-[29px] py-5 transition-colors',
                    selected === type.id
                        ? 'border-[#0F1114]'
                        : 'border-[#0F111426]'
                ]">
                    <span v-if="selected === type.id"
                        class="absolute top-[13px] right-[13px] w-5 h-5 rounded-full bg-[#0F1114] p-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 13l4 4L19 7" />
                        </svg>
                    </span>

                    <p class="text-base font-bold text-[#0F1114] leading-5 mb-[7px]">
                        {{ type.label }}
                    </p>
                    <p class="text-[12px] text-[#0F1114CC] leading-4">{{ type.description }}</p>
                </button>
            </div>

            <div class="flex justify-end">
                <button @click="onContinue"
                    class="h-[50px] px-8 rounded-[80px] text-primary text-[14px] font-extrabold uppercase tracking-[-2%] leading-[100%]"
                    style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                    Continue
                </button>
            </div>
        </div>
    </div>
</template>
