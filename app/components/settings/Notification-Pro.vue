<script setup lang="ts">
const jobLead = ref<string>('')
</script>

<template>
    <div class="border border-neutral-primary/10 rounded-[16px] lg:rounded-[24px] h-fit">
        <div class="pt-[21px] px-4 lg:px-6 pb-5 border-b border-neutral-primary/10">
            <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-1">
                Notifications</h2>
            <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                Email • Feed • Security</p>
        </div>

        <div
            class="px-4 py-4 lg:px-6 lg:py-5 border-b border-neutral-primary/10 flex items-center justify-between gap-4">
            <div>
                <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-1">
                    Security</h2>
                <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                    Notification about all login activity.</p>
            </div>
            <div class="flex items-center gap-2">
                <input type="checkbox" class="w-3 h-3 border border-neutral-primary">
                <label class="text-[12px] font-semibold text-neutral-primary uppercase leading-[100%] tracking-[-2%]">
                    On</label>
            </div>
        </div>

        <div
            class="px-4 py-4 lg:px-6 lg:py-5 border-b border-neutral-primary/10 flex items-center justify-between gap-4">
            <div>
                <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-1">
                    Communication</h2>
                <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                    Notification about new messages.</p>
            </div>
            <div class="flex items-center gap-2">
                <input type="checkbox" class="w-3 h-3 border border-neutral-primary">
                <label class="text-[12px] font-semibold text-neutral-primary uppercase leading-[100%] tracking-[-2%]">
                    On</label>
            </div>
        </div>

        <div
            class="px-4 py-4 lg:px-6 lg:py-5 border-b border-neutral-primary/10 flex items-center justify-between gap-4">
            <div>
                <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-1">
                    Job Lead</h2>
                <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                    Notifications about new job leads, expired and ignored bids.</p>
            </div>
            <div class="flex items-center gap-2">
                <input type="checkbox" class="w-3 h-3 border border-neutral-primary">
                <label class="text-[12px] font-semibold text-neutral-primary uppercase leading-[100%] tracking-[-2%]">
                    On</label>
            </div>
        </div>

        <div class="px-4 py-4 lg:px-6 lg:py-5 border-b border-neutral-primary/10">
            <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-1">
                Job Lead</h2>
            <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%] mb-5">
                Notify about a new job lead</p>

            <div class="relative mb-6">
                <select v-model="jobLead"
                    class="w-full px-5 py-[15px] rounded-[80px] border border-neutral-primary/10 text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] appearance-none focus:outline-none bg-white"
                    :class="jobLead === '' ? 'text-neutral-primary/40' : 'text-neutral-primary'">
                    <option value="">Instantly</option>
                </select>
                <svg class="absolute right-[14px] top-1/2 -translate-y-1/2 text-neutral-primary pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </div>

            <div class="flex items-center gap-[11px] mb-[15px]">
                <input type="checkbox" class="w-4 h-4 border border-neutral-primary">
                <label class="text-[14px] font-medium text-neutral-primary leading-[100%] tracking-[-2%]">
                    Notify about new jobs received</label>
            </div>

            <div class="flex items-center gap-[11px] mb-[15px]">
                <input type="checkbox" class="w-4 h-4 border border-neutral-primary">
                <label class="text-[14px] font-medium text-neutral-primary leading-[100%] tracking-[-2%]">
                    Notify when jobs are not accepted or expired</label>
            </div>

            <div class="flex items-center gap-[11px] mb-6">
                <input type="checkbox" class="w-4 h-4 border border-neutral-primary">
                <label class="text-[14px] font-medium text-neutral-primary leading-[100%] tracking-[-2%]">
                    Notify when job rate & reviews published/deleted</label>
            </div>

            <div class="flex items-center justify-end">
                <button
                    class="py-[14px] px-5 rounded-[80px] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%] hover:opacity-90 transition-opacity"
                    style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                    Update
                </button>
            </div>
        </div>

        <div
            class="px-4 py-4 lg:px-6 lg:py-5 border-b border-neutral-primary/10 flex items-center justify-between gap-4">
            <div>
                <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-1">
                    Online Payments</h2>
                <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                    Notification about online payments made.</p>
            </div>
            <div class="flex items-center gap-2">
                <input type="checkbox" class="w-3 h-3 border border-neutral-primary">
                <label class="text-[12px] font-semibold text-neutral-primary uppercase leading-[100%] tracking-[-2%]">
                    On</label>
            </div>
        </div>

        <div class="px-4 py-4 lg:px-6 lg:py-5 border-b border-neutral-primary/10">
            <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-5">
                Online Payments</h2>

            <div class="flex items-center gap-[11px] mb-[15px]">
                <input type="checkbox" class="w-4 h-4 border border-neutral-primary">
                <label class="text-[14px] font-medium text-neutral-primary leading-[100%] tracking-[-2%]">
                    Notify when online payment is initiated</label>
            </div>

            <div class="flex items-center gap-[11px] mb-[15px]">
                <input type="checkbox" class="w-4 h-4 border border-neutral-primary">
                <label class="text-[14px] font-medium text-neutral-primary leading-[100%] tracking-[-2%]">
                    Notify when online payment is successfully cleared</label>
            </div>

            <div class="flex items-center gap-[11px] mb-6">
                <input type="checkbox" class="w-4 h-4 border border-neutral-primary">
                <label class="text-[14px] font-medium text-neutral-primary leading-[100%] tracking-[-2%]">
                    Notify when online payment is failed</label>
            </div>

            <div class="flex items-center justify-end">
                <button
                    class="py-[14px] px-5 rounded-[80px] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%] hover:opacity-90 transition-opacity"
                    style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                    Update
                </button>
            </div>
        </div>

        <div
            class="px-4 py-4 lg:px-6 lg:py-5 border-b border-neutral-primary/10 flex items-center justify-between gap-4">
            <div>
                <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-1">
                    Maintenance Requests</h2>
                <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                    Notifications about request updates.</p>
            </div>
            <div class="flex items-center gap-2">
                <input type="checkbox" class="w-3 h-3 border border-neutral-primary">
                <label class="text-[12px] font-semibold text-neutral-primary uppercase leading-[100%] tracking-[-2%]">
                    On</label>
            </div>
        </div>

        <div class="px-4 py-4 lg:px-6 lg:py-5 border-b border-neutral-primary/10">
            <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-5">
                Maintenance Requests</h2>

            <div class="flex items-center gap-[11px] mb-[15px]">
                <input type="checkbox" class="w-4 h-4 border border-neutral-primary">
                <label class="text-[14px] font-medium text-neutral-primary leading-[100%] tracking-[-2%]">
                    Notify about new request</label>
            </div>

            <div class="flex items-center gap-[11px] mb-[15px]">
                <input type="checkbox" class="w-4 h-4 border border-neutral-primary">
                <label class="text-[14px] font-medium text-neutral-primary leading-[100%] tracking-[-2%]">
                    Notify about status changes</label>
            </div>

            <div class="flex items-center gap-[11px] mb-6">
                <input type="checkbox" class="w-4 h-4 border border-neutral-primary">
                <label class="text-[14px] font-medium text-neutral-primary leading-[100%] tracking-[-2%]">
                    Notify about request message</label>
            </div>

            <div class="flex items-center gap-[11px] mb-6">
                <input type="checkbox" class="w-4 h-4 border border-neutral-primary">
                <label class="text-[14px] font-medium text-neutral-primary leading-[100%] tracking-[-2%]">
                    Notify about request resolved</label>
            </div>

            <div class="flex items-center gap-[11px] mb-6">
                <input type="checkbox" class="w-4 h-4 border border-neutral-primary">
                <label class="text-[14px] font-medium text-neutral-primary leading-[100%] tracking-[-2%]">
                    Notify about new invoice</label>
            </div>

            <div class="flex items-center justify-end">
                <button
                    class="py-[14px] px-5 rounded-[80px] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%] hover:opacity-90 transition-opacity"
                    style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                    Update
                </button>
            </div>
        </div>

        <div class="px-4 py-4 lg:px-6 lg:py-5 flex items-center justify-between gap-4">
            <div>
                <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-1">
                    Tips and Offers</h2>
                <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                    Text messages with promos, feature updates, and recommendations.</p>
            </div>
            <div class="flex items-center gap-2">
                <input type="checkbox" class="w-3 h-3 border border-neutral-primary">
                <label class="text-[12px] font-semibold text-neutral-primary uppercase leading-[100%] tracking-[-2%]">
                    On</label>
            </div>
        </div>

    </div>
</template>
