<script setup>
defineProps({
    label: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        default: 'SELECT'
    },
    options: {
        type: Array,
        default: () => []
    },
    modelValue: {
        type: String,
        default: ''
    }
})

defineEmits(['update:modelValue'])
</script>

<template>
    <div class="flex flex-col gap-[5px]">
        <label class="ml-1 text-[12px] font-bold text-[#0F1114] leading-[100%] uppercase tracking-[-2%]">{{ label
            }}</label>
        <div class="relative">
            <select :value="modelValue" @change="$emit('update:modelValue', $event.target.value)"
                class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] placeholder:text-[#0F111466] text-[#0F1114] cursor-pointer appearance-none"
                :class="!modelValue ? 'text-[#0F111466]' : 'text-[#0F1114]'">
                <option value="" disabled selected>{{ placeholder }}</option>
                <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
            </select>
            <div class="absolute right-[13px] top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0F1114" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="text-[#0F1114]">
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </div>
        </div>
    </div>
</template>
