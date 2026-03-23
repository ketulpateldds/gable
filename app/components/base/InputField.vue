<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        default: ""
    },
    placeholder: {
        type: String,
        default: ""
    },
    type: {
        type: String,
        default: "text"
    }
})
</script>

<template>
    <label
        class="ml-1 block text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] mb-[5px]">
        {{ props.label }}
    </label>

    <input :type="props.type" :placeholder="props.placeholder"
        class="w-full px-5 py-[14px] rounded-[80px] border border-neutral-primary/10 text-[12px] font-semibold text-neutral-primary placeholder:uppercase tracking-[-2%] leading-[100%] placeholder:text-neutral-primary/40 outline-none" />
</template>