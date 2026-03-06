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
                class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] uppercase leading-[100%] tracking-[-2%] text-[#0F1114] placeholder:text-[#0F111466]" />
        </div>
    </div>
</template>
