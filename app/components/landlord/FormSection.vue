<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="pt-[21px] pb-[25px] border border-[#0F11141A] rounded-3xl">
        <h3 class="px-[25px] text-base font-bold text-[#0F1114] mb-5 leading-[100%]">
            {{ title }}</h3>
        <div class="mb-[22px] border border-[#0F11141A]"></div>
        <div class="px-[25px] grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-[14px]">
            <slot />
        </div>
    </div>
</template>
