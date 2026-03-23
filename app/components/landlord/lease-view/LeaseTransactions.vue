<template>
    <!-- Recurring Rent -->
    <div class="border border-neutral-primary/10 rounded-[24px] pt-[22px] mb-4">
        <h2 class="px-6 text-[16px] font-bold text-neutral-primary leading-[100%] pb-5">Recurring Rent</h2>

        <!-- table -->
        <div class="overflow-x-auto scrollbar-hide">
            <table class="w-full text-left border-collapse min-w-[800px] lg:min-w-0">
                <thead class="border-y border-neutral-primary/10 bg-[#FAFAFA] h-11">
                    <tr class="font-bold text-neutral-primary text-[14px] tracking-[-2%] leading-[100%]">
                        <th class="pt-[13px] pb-[14px] pl-6 pr-4">Status</th>
                        <th class="pt-[13px] pb-[14px] px-4">First Invoice</th>
                        <th class="pt-[13px] pb-[14px] px-4">Category</th>
                        <th class="pt-[13px] pb-[14px] px-4">Next Invoice</th>
                        <th class="pt-[13px] pb-[14px] pl-4 pr-6">Total & Schedule</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        class="border-b border-neutral-primary/10 last:border-0 font-semibold text-[14px] tracking-[-2%] leading-[100%]">
                        <td class="py-[21px] pl-6 pr-4 text-[#008A09]">
                            Active
                        </td>
                        <td class="py-6 px-4 text-neutral-primary/80 whitespace-nowrap">Jan 20, 2026</td>
                        <td class="py-6 px-4 text-neutral-primary/80">Rent</td>
                        <td class="py-6 px-4 text-neutral-primary/80">Apr 15, 2026</td>
                        <td class="py-4 pl-4 pr-6">
                            <div class="text-neutral-primary font-bold">$1,000.00</div>
                            <div class="text-neutral-primary/60 font-medium">Monthly</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- Other recurring transactions -->
    <div class="border border-neutral-primary/10 rounded-[24px] py-[22px] px-4 sm:px-6 mb-4">
        <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[8px]">Other recurring transactions</h2>

        <p class="text-[12px] font-medium text-neutral-primary/60 leading-[100%]">No recurring transactions configured.
        </p>
    </div>

    <!-- Extra fees -->
    <div class="border border-neutral-primary/10 rounded-[24px] py-[22px] px-4 sm:px-6">
        <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[8px]">Extra fees</h2>

        <p class="text-[12px] font-medium text-neutral-primary/60 leading-[100%]">No extra fees set up yet.</p>
    </div>
</template>
