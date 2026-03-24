<script setup lang="ts">
import Navbar from '~/components/landlord/Navbar.vue'
import Sidebar from '~/components/landlord/Sidebar.vue'

const requestDetails = [
    { label: 'TYPE', value: 'One time' },
    { label: 'PRIORITY', value: 'Normal' },
    { label: 'DATE INITIATED', value: 'Mar 08, 2026' },
    { label: 'DATE DUE', value: '-' },
    { label: 'STARTED WORK', value: '-' },
    { label: 'ENDED WORK', value: '-' },
    { label: 'LABOR TIME', value: '-' },
    { label: 'KEY RETURNED', value: '-' }
]

const tenantInformation = [
    { label: 'Authorization', value: 'Allowed to enter' },
    { label: 'Alarm Code', value: '89789' },
    { label: 'Pets', value: 'Dog' },
    { label: 'Availability time 1', value: 'Mar 10, 2026 · 8:00 AM – 12:00 PM' },
    { label: 'Availability time 2', value: '-' },
    { label: 'Availability time 3', value: '-' },
]
</script>

<template>
    <div class="flex min-h-screen bg-primary font-sans overflow-x-hidden">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-6 py-[22px] flex flex-col">

                <!-- Header -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-[19px]">
                    <div class="flex items-center gap-4">
                        <button
                            class="flex items-center justify-center w-10 h-10 rounded-full text-neutral-primary border border-neutral-primary/10 shrink-0">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l14 0" />
                                <path d="M5 12l4 4" />
                                <path d="M5 12l4 -4" />
                            </svg>
                        </button>
                        <div>
                            <div class="flex items-center gap-[6px]">
                                <h1 class="text-[20px] font-bold text-neutral-primary leading-[100%] mb-[4px]">
                                    Maintenance Request</h1>
                                <span
                                    class="bg-[#F5F5F5] px-3 py-[6px] rounded-[80px] text-[10px] font-bold text-neutral-primary uppercase tracking-[-0.02em] leading-[100%]">
                                    No. 123456</span>
                            </div>
                            <p class="text-[12px] text-neutral-primary/60 font-medium leading-4 tracking-[-0.02em]">
                                Property Maintenance
                            </p>
                        </div>
                    </div>

                    <div class="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto mt-4 sm:mt-0 sm:shrink-0">
                        <button
                            class="py-[13px] px-5 w-full sm:w-auto rounded-[80px] border border-neutral-primary text-[12px] font-extrabold text-neutral-primary uppercase leading-[100%] tracking-[-0.02em]">
                            Rules
                        </button>
                        <button
                            class="py-[12px] px-5 rounded-[80px] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%] flex items-center justify-center gap-[5px] w-full sm:w-auto"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 5l0 14" />
                                <path d="M5 12l14 0" />
                            </svg>
                            NEW REQUEST
                        </button>
                    </div>
                </div>

                <!-- Request Title -->
                <div class="flex items-center gap-[11px] mb-[17px]">
                    <h2 class="text-[16px] font-semibold text-neutral-primary leading-[100%]">Appliances / Refrigerator
                        / Temperature / Too cold</h2>
                    <div
                        class="bg-[#F2F6FF] text-brand-blue px-3 py-[7px] rounded-[80px] text-[10px] font-bold uppercase tracking-[0.02em] leading-[100%]">
                        New</div>
                </div>

                <!-- Request Overview -->
                <div class="border border-neutral-primary/10 rounded-[24px] mb-4 overflow-hidden">
                    <div class="px-6 py-[21px] border-b border-neutral-primary/10">
                        <h3 class="text-[16px] font-bold text-neutral-primary leading-[100%]">Request Overview</h3>
                    </div>

                    <div class="px-6 pt-[22px] pb-[19px] border-b border-neutral-primary/10">
                        <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-[27px] mb-[18px]">
                            <div>
                                <p
                                    class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                    PROPERTY</p>
                                <p class="text-[16px] font-medium text-neutral-primary leading-5">Sunset Apartments
                                </p>
                            </div>
                            <div>
                                <p
                                    class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                    ADDRESS AND UNIT</p>
                                <p class="text-[16px] font-medium text-neutral-primary leading-5">123 Main Street, San
                                    Francisco, CA 94122 • Unit 4B</p>
                            </div>
                        </div>

                        <div>
                            <p class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                DESCRIPTION</p>
                            <p class="text-[16px] font-medium text-neutral-primary leading-5">
                                Refrigerator is running too cold and freezing food on the middle shelves. Tenant
                                reports the issue has been getting worse over the last three days. Please inspect
                                thermostat settings, seals, and cooling controls.</p>
                        </div>
                    </div>

                    <div class="p-6 pt-[21px]">
                        <p class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-[9px]">
                            PHOTOS</p>
                        <div class="flex flex-wrap items-center gap-2">
                            <div
                                class="w-full sm:w-[242px] h-[136px] bg-status-info-bg border border-status-info-border rounded-[12px] flex items-center justify-center text-[14px] font-semibold text-status-info-text leading-5">
                                Image 1
                            </div>
                            <div
                                class="w-full sm:w-[242px] h-[136px] bg-status-info-bg border border-status-info-border rounded-[12px] flex items-center justify-center text-[14px] font-semibold text-status-info-text leading-5">
                                Image 2
                            </div>
                            <div
                                class="w-full sm:w-[242px] h-[136px] bg-status-info-bg border border-status-info-border rounded-[12px] flex items-center justify-center text-[14px] font-semibold text-status-info-text leading-5">
                                Image 3
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Assignee Information -->
                <div class="border border-neutral-primary/10 rounded-[24px] mb-4 overflow-hidden">
                    <div
                        class="px-6 py-[13px] border-b border-neutral-primary/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <h3 class="text-[16px] font-bold text-neutral-primary leading-[100%]">Assignee Information</h3>
                        <button
                            class="py-[10px] px-4 rounded-[80px] border border-neutral-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-0.02em] text-neutral-primary">
                            ADD ASSIGNEE
                        </button>
                    </div>

                    <div class="p-6">
                        <div
                            class="relative border border-neutral-primary/10 rounded-[12px] pb-[15px] px-[17px] pt-[13px] mb-[22px]">
                            <div>
                                <p
                                    class="text-[16px] font-bold text-neutral-primary leading-5 tracking-[-0.02em] mb-[6px] pr-20">
                                    Unassigned
                                </p>
                                <p class="text-[12px] font-semibold text-neutral-primary/60 leading-[100%] pr-20">Assign
                                    yourself, a team member, or a service pro.</p>
                            </div>

                            <div
                                class="absolute right-[9px] top-[9px] bg-status-info-bg border border-status-info-border text-status-info-text px-3 py-[7px] w-fit rounded-[80px] text-[10px] font-bold uppercase tracking-[0.02em] leading-[100%]">
                                PENDING
                            </div>
                        </div>

                        <div class="mb-3">
                            <BaseSelectField label="ASSIGNEE" placeholder="select Assignee" :options="[]" />
                        </div>

                        <div class="flex flex-col sm:flex-row items-center gap-2">
                            <button
                                class="w-full sm:w-auto py-[10px] px-4 rounded-[80px] border border-neutral-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-0.02em] text-neutral-primary">
                                CANCEL
                            </button>
                            <button
                                class="w-full sm:w-auto py-[11px] px-[13px] rounded-[80px] text-white text-[12px] font-extrabold uppercase leading-[100%] tracking-[-0.02em]"
                                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                                ADD
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Request Details -->
                <div class="border border-neutral-primary/10 rounded-[24px] mb-4 overflow-hidden">
                    <div class="px-6 py-[21px] border-b border-neutral-primary/10">
                        <h3 class="text-[16px] font-bold text-neutral-primary leading-[100%]">Request Details</h3>
                    </div>

                    <div class="p-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div v-for="detail in requestDetails" :key="detail.label"
                                class="border border-neutral-primary/10 rounded-[12px] px-[17px] pt-[15px] pb-[13px]">
                                <p
                                    class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                    {{ detail.label }}</p>
                                <p class="text-[16px] font-bold text-neutral-primary leading-5 tracking-[-0.02em]">
                                    {{ detail.value }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Tenant Information -->
                <div class="border border-neutral-primary/10 rounded-[24px] mb-4 overflow-hidden">
                    <div class="px-6 py-[21px] border-b border-neutral-primary/10">
                        <h3 class="text-[16px] font-bold text-neutral-primary leading-[100%]">Tenant Information</h3>
                    </div>

                    <div class="p-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div v-for="tenantDetail in tenantInformation" :key="tenantDetail.label"
                                class="border border-neutral-primary/10 rounded-[12px] px-[17px] pt-[15px] pb-[13px]">
                                <p
                                    class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                    {{ tenantDetail.label }}</p>
                                <p class="text-[16px] font-bold text-neutral-primary leading-5 tracking-[-0.02em]">
                                    {{ tenantDetail.value }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Materials -->
                <div class="border border-neutral-primary/10 rounded-[24px] mb-4 overflow-hidden">
                    <div
                        class="px-6 py-[13px] border-b border-neutral-primary/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <h3 class="text-[16px] font-bold text-neutral-primary leading-[100%]">Materials</h3>
                        <button
                            class="py-2 px-4 rounded-[80px] border border-neutral-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-0.02em] text-neutral-primary flex items-center justify-center gap-[6px]">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 5l0 14" />
                                <path d="M5 12l14 0" />
                            </svg>
                            ADD A ROW
                        </button>
                    </div>

                    <div class="p-6 pt-[22px]">
                        <p class="text-[12px] font-semibold text-neutral-primary/60 leading-[100%] mb-[14px]">
                            You and your Service Pro can add supplies/materials and quantity of every item.
                        </p>

                        <div class="flex flex-col lg:flex-row items-center gap-4 mb-4">
                            <input type="text" value="THERMOSTAT SENSOR"
                                class="flex-1 w-full lg:w-auto py-[14px] px-5 border border-neutral-primary/10 rounded-[80px] text-[12px] font-semibold text-neutral-primary uppercase leading-[100%] tracking-[-0.02em] outline-none">
                            <input type="text" value="PART"
                                class="w-full lg:w-[272px] py-[14px] px-5 border border-neutral-primary/10 rounded-[80px] text-[12px] font-semibold text-neutral-primary uppercase leading-[100%] tracking-[-0.02em] outline-none">

                            <div
                                class="py-[11px] px-[14px] border border-neutral-primary/10 rounded-[80px] flex items-center justify-between w-full lg:w-[176px] shrink-0">
                                <button class="text-neutral-primary w-5 h-5">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M5 12l14 0" />
                                    </svg>
                                </button>
                                <span
                                    class="text-[12px] font-semibold text-neutral-primary uppercase leading-[100%] tracking-[-0.02em] select-none">1</span>
                                <button class="text-neutral-primary w-5 h-5">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 5l0 14" />
                                        <path d="M5 12l14 0" />
                                    </svg>
                                </button>
                            </div>

                            <button
                                class="py-[15px] px-[50px] border border-neutral-primary rounded-[80px] text-[12px] font-extrabold text-neutral-primary uppercase leading-[100%] tracking-[-0.02em] shrink-0 w-full lg:w-auto">
                                REMOVE
                            </button>
                        </div>

                        <div class="flex flex-col sm:flex-row items-center gap-2">
                            <button
                                class="w-full sm:w-auto py-[10px] px-4 rounded-[80px] border border-neutral-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-0.02em] text-neutral-primary">
                                CANCEL
                            </button>
                            <button
                                class="w-full sm:w-auto py-[11px] px-[13px] rounded-[80px] text-white text-[12px] font-extrabold uppercase leading-[100%] tracking-[-0.02em]"
                                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                                ADD
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Transactions -->
                <div class="border border-neutral-primary/10 rounded-[24px] mb-4 overflow-hidden">
                    <div class="px-6 py-[21px] border-b border-neutral-primary/10">
                        <h3 class="text-[16px] font-bold text-neutral-primary leading-[100%]">Transactions</h3>
                    </div>

                    <div class="p-6 pb-[22px]">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[14px]">
                            <div class="border border-neutral-primary/10 rounded-[12px] px-[17px] pt-[15px] pb-[13px]">
                                <p
                                    class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-[4px]">
                                    - MONEY OUT</p>
                                <p class="text-[16px] font-bold text-[#CC2929] leading-5 tracking-[-0.02em]">$0.00
                                </p>
                            </div>
                            <div class="border border-neutral-primary/10 rounded-[12px] px-[17px] pt-[15px] pb-[13px]">
                                <p
                                    class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-[4px]">
                                    + MONEY IN</p>
                                <p class="text-[16px] font-bold text-[#21A635] leading-5 tracking-[-0.02em]">$0.00
                                </p>
                            </div>
                        </div>

                        <div class="flex flex-col lg:flex-row items-stretch lg:items-end gap-4 mb-[14px]">
                            <div class="flex-1 w-full">
                                <BaseInputField label="TRANSACTION NAME"
                                    placeholder="REPAIR LABOUR, PART REIMBURSEMENT" />
                            </div>

                            <div class="w-full lg:w-[272px] shrink-0">
                                <BaseSelectField label="TYPE" :options="['MONEY OUT', 'MONEY IN']" />
                            </div>

                            <div class="w-full lg:w-[176px] shrink-0">
                                <BaseInputField label="AMOUNT" placeholder="0.01" />
                            </div>

                            <button
                                class="w-full lg:w-auto py-4 px-5 rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-0.02em] shrink-0"
                                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                                ADD TRANSACTION
                            </button>
                        </div>

                        <p class="text-[12px] font-semibold text-neutral-primary/60 leading-[100%]">No Transaction added
                            yet.</p>
                    </div>
                </div>

                <!-- Attachments -->
                <div class="border border-neutral-primary/10 rounded-[24px]">
                    <div class="px-6 py-[21px] border-b border-neutral-primary/10">
                        <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%]">
                            Attachments</h2>
                    </div>

                    <div class="p-4 sm:p-6">
                        <div
                            class="bg-[#F2F5FA] border border-dashed border-brand-blue/50 rounded-[12px] h-[140px] p-4 flex items-center justify-center">
                            <p class="text-[14px] font-bold text-brand-blue leading-5 text-center">Drag and drop files
                                here or click to upload attachments
                            </p>
                        </div>
                    </div>
                </div>

            </main>

        </div>

    </div>
</template>
