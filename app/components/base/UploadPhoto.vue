<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: "Photo"
    },
    description: {
        type: String,
        default: ""
    }
})
</script>

<template>
    <div class="border border-dashed border-neutral-primary/10 bg-[#FAFAFA] rounded-[12px] p-[17px] pb-[13px]">
        <p class="text-[12px] font-bold text-neutral-primary leading-[100%] uppercase tracking-[-2%] mb-[11px]">
            {{ props.title }}</p>
        <div
            class="flex flex-wrap sm:flex-nowrap items-center gap-[11px] border border-neutral-primary/10 rounded-[8px] pl-4 pr-[25px] py-[11px] bg-[#FAFAFA]">
            <button
                class="flex items-center gap-[6px] bg-neutral-primary text-white px-[14px] py-[8px] rounded-[16px] text-[12px] font-bold uppercase leading-[100%] tracking-[-2%]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M15 22h3a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h3" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M12 12v10" />
                    <path d="m9 15 3-3 3 3" />
                </svg>
                CHOOSE FILE
            </button>
            <span class="text-[12px] font-bold text-neutral-primary/60 leading-[100%] tracking-[-2%] flex-1">No
                file chosen</span>
        </div>
        <p v-if="props.description"
            class="mt-[5px] text-[12px] font-bold text-neutral-primary/60 leading-4 tracking-[-2%]">
            {{ props.description }}</p>
    </div>
</template>