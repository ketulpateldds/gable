<script setup lang="ts">
const utilities = [
    { utility: 'Electricity', status: 'Awaiting tenant', action: 'Details' },
    { utility: 'Water', status: 'Awaiting tenant', action: 'Details' },
    { utility: 'Gas', status: 'Awaiting tenant', action: 'Details' },
    { utility: 'Trash', status: 'Disabled', action: 'Setup' },
    { utility: 'Sewer', status: 'Disabled', action: 'Setup' },
    { utility: 'Internet', status: 'Awaiting tenant', action: 'Details' },
];
</script>

<template>
    <!-- Utility Providers -->
    <div class="border border-neutral-primary/10 rounded-[24px] pt-[22px] mb-6">
        <h2 class="px-4 sm:px-6 text-[16px] font-bold text-neutral-primary leading-[100%] pb-5">Utility Providers</h2>

        <!-- table -->
        <div class="overflow-x-auto scrollbar-hide">
            <table class="w-full text-left border-collapse min-w-[800px] lg:min-w-0">
                <thead class="border-y border-neutral-primary/10 bg-[#FAFAFA] h-11">
                    <tr class="font-bold text-neutral-primary text-[14px] tracking-[-2%] leading-[100%]">
                        <th class="pt-[13px] pb-[14px] pl-4 sm:pl-6 pr-10 sm:pr-40 w-px">Utility</th>
                        <th class="pt-[13px] pb-[14px] px-4">Status</th>
                        <th class="pt-[13px] pb-[14px] pl-4 pr-4 sm:pr-6 w-px">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in utilities" :key="index"
                        class="border-b border-neutral-primary/10 last:border-0 font-semibold text-[14px] tracking-[-2%] leading-[100%]">
                        <td class="py-[21px] pl-4 sm:pl-6 pr-4 text-neutral-primary">
                            {{ item.utility }}
                        </td>
                        <td class="py-[21px] px-4"
                            :class="item.status === 'Awaiting tenant' ? 'text-[#A16600]' : 'text-neutral-primary/40'">
                            {{ item.status }}
                        </td>
                        <td class="py-[21px] pl-4 pr-4 sm:pr-6">
                            <button class="text-brand-blue font-bold">
                                {{ item.action }}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- Responsibility -->
    <div class="border border-neutral-primary/10 rounded-[24px] py-[22px] px-4 sm:px-6">
        <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[8px]">Responsibility</h2>

        <p class="text-[12px] font-medium text-neutral-primary/60 leading-[100%]">No utility responsibilities assigned
            yet.</p>
    </div>
</template>
