<script setup>
</script>

<template>
    <div>
        <div class="pt-[21px] pb-6 h-fit">
            <h2
                class="px-6 text-[16px] font-bold text-[#0F1114] leading-[100%] pb-5 border-b border-[#0F11141A] mb-[22px]">
                Additional settings</h2>

            <p
                class="px-6 text-[12px] font-semibold text-[#0F111499] leading-[100%] pb-[21px] border-b border-[#0F11141A] mb-[22px]">
                Customize the additional settings of your account.</p>

            <div class="px-6 grid grid-cols-1 sm:grid-cols-2 gap-[13px]">
                <div>
                    <label
                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">
                        Time zone</label>
                    <div class="relative">
                        <select
                            class="w-full px-5 py-[15px] rounded-[80px] border border-[#0F11141A] bg-primary text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] uppercase tracking-[-2%] leading-[100%] appearance-none outline-none cursor-pointer">
                            <option value="">America/Los_Angeles</option>
                        </select>
                        <div class="absolute right-[18px] top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </div>
                    </div>
                </div>

                <button
                    class="mt-[17px] py-[15px] px-6 w-fit rounded-[80px] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%] hover:opacity-90 transition-opacity"
                    style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                    Update
                </button>
            </div>
        </div>
    </div>
</template>
