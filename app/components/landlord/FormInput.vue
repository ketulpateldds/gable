<script setup>
defineProps({
    label: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    },
    modelValue: {
        type: [String, Number],
        default: ''
    }
})

defineEmits(['update:modelValue'])
</script>

<template>
    <div class="flex flex-col gap-[5px]">
        <label class="ml-1 text-[12px] font-bold text-[#0F1114] leading-[100%] uppercase tracking-[-2%]">
            {{ label }}</label>
        <div class="relative">
            <input :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
                :placeholder="placeholder"
                class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] uppercase leading-[100%] tracking-[-2%] text-[#0F1114] placeholder:text-[#0F111466] focus:outline-none" />
            <svg v-if="type === 'date'"
                class="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
        </div>
    </div>
</template>
