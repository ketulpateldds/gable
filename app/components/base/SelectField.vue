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
    options: {
        type: Array as PropType<Array<string | { value: string; label: string }>>,
        default: () => []
    },
    modelValue: {
        type: String,
        default: ""
    }
})

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

const getOptionValue = (option: string | { value: string; label: string }) =>
    typeof option === 'string' ? option : option.value

const getOptionLabel = (option: string | { value: string; label: string }) =>
    typeof option === 'string' ? option : option.label
</script>

<template>
    <div>
        <label v-if="props.label"
            class="ml-1 block text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] mb-[5px]">
            {{ props.label }}
        </label>
        <div class="relative">
            <select :value="props.modelValue"
                @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
                class="w-full py-[15px] px-5 rounded-[80px] border border-neutral-primary/10 text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-neutral-primary appearance-none focus:outline-none">
                <option v-if="props.placeholder" value="" disabled :selected="!props.modelValue">
                    {{ props.placeholder }}
                </option>
                <option v-for="option in props.options" :key="getOptionValue(option)" :value="getOptionValue(option)">
                    {{ getOptionLabel(option) }}
                </option>
            </select>
            <svg class="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-primary pointer-events-none"
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="m6 9 6 6 6-6" />
            </svg>
        </div>
    </div>
</template>