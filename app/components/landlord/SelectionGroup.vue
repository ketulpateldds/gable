<script setup>
const props = defineProps({
    label: {
        type: String,
        required: false
    },
    options: {
        type: Array,
        required: true
    },
    modelValue: {
        type: [String, Array],
        default: null
    },
    multiple: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['update:modelValue'])

const isSelected = (option) => {
    if (Array.isArray(props.modelValue)) {
        return props.modelValue.includes(option)
    }
    return props.modelValue === option
}

const toggle = (option) => {
    if (props.multiple) {
        const newValue = Array.isArray(props.modelValue) ? [...props.modelValue] : []
        const index = newValue.indexOf(option)
        if (index > -1) {
            newValue.splice(index, 1)
        } else {
            newValue.push(option)
        }
        emit('update:modelValue', newValue)
    } else {
        emit('update:modelValue', option)
    }
}
</script>

<template>
    <div class="flex flex-col gap-2">
        <label v-if="label" class="text-[12px] font-bold text-[#0F1114] leading-[100%] mb-1">{{ label }}</label>
        <div class="flex flex-wrap gap-2">
            <button v-for="option in options" :key="option" @click="toggle(option)" type="button"
                class="h-8 px-4 bg-[#0F111405] flex items-center justify-center gap-[7px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold leading-[100%] uppercase tracking-[-2%] text-[#0F1114]">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="5.5" :stroke="isSelected(option) ? '#004CE6' : 'currentColor'"
                        stroke-width="1" />
                    <circle v-if="isSelected(option)" cx="6" cy="6" r="3" fill="#004CE6" />
                </svg>
                {{ option }}
            </button>
        </div>
    </div>
</template>
