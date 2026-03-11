<script setup>
import Navbar from '@/components/landlord/Navbar.vue'
import Sidebar from '~/components/tenant/Sidebar.vue'

const emit = defineEmits(['cancel', 'save'])

const tabs = ['Electricity', 'Gas', 'Water', 'Internet', 'Cable']
const activeTab = ref('Electricity')
const accountId = ref('')
const activationDate = ref('')

const handleSave = () => {
    emit('save', {
        tab: activeTab.value,
        accountId: accountId.value,
        activationDate: activationDate.value
    })
}

</script>

<template>
    <div class="relative flex min-h-screen bg-primary font-sans overflow-x-hidden">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-4 sm:px-6 pt-[19px] pb-10 flex flex-col">

                <div class="mb-5">
                    <h1 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[4px]">Utility providers</h1>
                    <p class="text-[12px] text-[#0F111499] font-medium leading-4 tracking-[-2%]">Set up and confirm your
                        utilities for your rental.</p>
                </div>

                <div class="flex flex-col xl:flex-row gap-4">
                    <div class="flex flex-col w-full xl:w-[368px] h-fit border border-[#0F11141A] rounded-[24px]">
                        <div v-for="(t, i) in tabs" :key="i"
                            class="pt-[22px] pb-5 px-6 last:border-0 border-b border-[#0F11141A] flex items-center justify-between gap-2">
                            <div>
                                <h1 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[1px]">{{ t }}
                                </h1>
                                <p class="text-[12px] text-[#0F111499] font-medium leading-4 tracking-[-2%]">Set up</p>
                            </div>

                            <div>
                                <button
                                    class="py-[10px] px-4 border border-[#004CE5] rounded-[80px] text-[#004CE5] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%]">
                                    SetUp
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex flex-col w-full xl:w-[752px] border border-[#0F11141A] rounded-[24px] pt-[22px] pb-[26px]">
                        <h2 class="px-6 text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[17px]">Set Up</h2>

                        <div class="px-6 flex gap-6 border-b border-[#0F11141A] mb-5 overflow-x-auto scrollbar-hide">
                            <button v-for="tab in tabs" :key="tab" @click="activeTab = tab" :class="[
                                'pb-[11px] text-[12px] leading-[100%] border-b-2 -mb-px transition-colors duration-150 whitespace-nowrap bg-transparent outline-none cursor-pointer',
                                activeTab === tab
                                    ? 'text-[#004CE5] border-[#004CE5] font-bold'
                                    : 'text-[#0F1114CC] border-transparent font-semibold'
                            ]">
                                {{ tab }}
                            </button>
                        </div>

                        <div class="px-6 mb-5">
                            <h3 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-1">Step 1</h3>
                            <p class="text-[12px] text-[#0F111499] font-medium leading-4 tracking-[-2%] mb-3">Select
                                provider company and create account on their website.
                            </p>
                            <div class="flex gap-2 flex-wrap">
                                <button
                                    class="inline-flex items-center justify-center py-3 px-5 rounded-[80px] border border-[#004CE5] text-[#004CE5] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] cursor-pointer">
                                    PROVIDER WEBSITE
                                </button>
                                <button
                                    class="inline-flex items-center justify-center py-3 px-5 rounded-[80px] border border-[#0F1114] text-[#0F1114] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] cursor-pointer">
                                    CHOOSE PROVIDER
                                </button>
                            </div>
                        </div>

                        <div class="px-6 mb-6">
                            <h3 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-1">Step 2</h3>
                            <p class="text-[12px] text-[#0F111499] font-medium leading-4 tracking-[-2%] mb-[18px]">Once
                                you create an account with a provider above, enter that account’s ID below to confirm
                                you’ve turned it on.
                            </p>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div class="col-span-1">
                                    <label
                                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Account
                                        ID
                                    </label>
                                    <input type="text" placeholder="Account ID"
                                        class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                                </div>

                                <div class="col-span-1">
                                    <label
                                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[5px]">Activation
                                        Date
                                    </label>
                                    <div class="relative">
                                        <input type="date"
                                            class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] focus:outline-none" />
                                        <svg class="absolute right-4 top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col-reverse sm:flex-row sm:items-center justify-end gap-2 px-6">
                            <button @click="$emit('cancel')"
                                class="py-[13px] px-5 rounded-[80px] border border-[#0F1114] text-[#0F1114] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] cursor-pointer w-full sm:w-auto">
                                CANCEL
                            </button>
                            <button @click="handleSave"
                                class="py-[13px] px-6 rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] cursor-pointer w-full sm:w-auto"
                                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                                SAVE
                            </button>
                        </div>

                    </div>
                </div>
            </main>

        </div>
    </div>
</template>