<script setup>
</script>

<template>
    <div class="border border-neutral-primary/10 rounded-[24px]">
        <div class="pt-[21px] pb-6 h-fit">
            <h2
                class="px-6 text-[16px] font-bold text-neutral-primary leading-[100%] pb-5 border-b border-neutral-primary/10 mb-[22px]">
                Additional settings</h2>

            <p
                class="px-6 text-[12px] font-semibold text-neutral-primary/60 leading-[100%] pb-[21px] border-b border-neutral-primary/10 mb-[22px]">
                Customize the additional settings of your account.</p>

            <div class="px-6 grid grid-cols-1 sm:grid-cols-2 gap-[13px]">
                <div>
                    <BaseSelectField label="Time zone"
                        :options="[{ label: 'America/Los_Angeles', value: 'America/Los_Angeles' }]" />
                </div>

                <button
                    class="mt-[17px] py-[15px] px-6 w-fit rounded-[80px] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%]"
                    style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                    Update
                </button>
            </div>
        </div>
    </div>
</template>
