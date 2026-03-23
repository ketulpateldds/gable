<template>
    <div class="border border-neutral-primary/10 rounded-[24px]">
        <!-- Tenant Information Header -->
        <div class="pt-[22px] px-4 sm:px-6 pb-5 border-b border-neutral-primary/10">
            <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%]">
                Tenant Information</h2>
        </div>

        <!-- Tenant Information -->
        <div class="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div class="col-span-1 border border-neutral-primary/10 rounded-[12px] p-4 sm:p-5 sm:pl-6">
                <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div>
                        <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[5px]">Julie Jay</h2>
                        <p class="text-[12px] font-medium text-neutral-primary/60 leading-[100%]">sfhome@gmail.com</p>
                    </div>

                    <div class="flex items-center gap-4">
                        <div
                            class="py-[10px] px-4 bg-[#F5F5F5] rounded-[80px] text-[12px] font-semibold text-neutral-primary uppercase tracking-[-2%] leading-[100%]">
                            Lease shared
                        </div>
                        <button
                            class="w-10 h-10 rounded-full border border-neutral-primary/10 text-neutral-primary flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                                <path d="M3 7l9 6l9 -6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div class="col-span-1 border border-neutral-primary/10 rounded-[12px] p-4 sm:p-5 sm:pl-6">
                <div>
                    <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[5px]">Details</h2>
                    <p class="text-[12px] font-medium text-neutral-primary/60 leading-[100%]">Fixed lease type.</p>
                </div>
            </div>

            <div class="col-span-1 sm:col-span-2 border border-neutral-primary/10 rounded-[12px] p-4 sm:p-5 sm:pl-6">
                <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div>
                        <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[5px]">Dependents</h2>
                        <p class="text-[12px] font-medium text-neutral-primary/60 leading-[100%]">No dependents added
                            yet.</p>
                    </div>

                    <button
                        class="w-full sm:w-auto py-[12px] px-5 rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] flex items-center justify-center sm:justify-start gap-[10px]"
                        style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-plus">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 5l0 14" />
                            <path d="M5 12l14 0" />
                        </svg>
                        Add Dependent
                    </button>
                </div>
            </div>

        </div>

    </div>
</template>
