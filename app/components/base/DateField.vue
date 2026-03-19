<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        default: ""
    }
})

const date = ref('')
</script>

<template>
    <label
        class="ml-1 block text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] mb-[5px]">
        {{ props.label }}
    </label>
    <div class="relative">
        <input type="date" v-model="date" :class="date ? 'text-neutral-primary' : 'text-neutral-primary/40'"
            class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-neutral-primary/10 text-[12px] font-semibold text-neutral-primary uppercase leading-[100%] tracking-[-2%] focus:outline-none" />
        <svg class="absolute right-[14px] top-1/2 -translate-y-1/2 text-neutral-primary pointer-events-none"
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
    </div>
</template>