<script setup>
const props = defineProps({
    isOpen: Boolean,
});

const emit = defineEmits(["close"]);

const sections = [
    {
        name: "Exterior / Front Yard",
        items: [
            "LANDSCAPING", "FENCES / GATES", "SPRINKLERS / TIMERS", "WALKS / DRIVEWAY", "MAILBOX", "LIGHT FIXTURES", "BUILDING EXTERIOR",
        ],
    },
    {
        name: 'Entry',
        items: [
            'SCREEN DOORS', 'DOORS / KNOBS / LOCKS', 'WALLS / CEILINGS', 'FLOORING / BASEBOARDS', 'LIGHT FIXTURES / FANS', 'SWITCHES / OUTLETS'
        ]
    },
    {
        name: 'Living Room',
        items: [
            'DOORS / KNOBS / LOCKS', 'FLOORING / BASEBOARDS', 'WALLS / CEILINGS', 'WINDOWS / LOCKS / SCREENS', 'SWITCHES / OUTLETS', 'LIGHT FIXTURES / FANS', 'FIREPLACE EQUIPMENT'
        ]
    },
    {
        name: "Dining Room",
        items: [
            "TABLE/CHAIRS", "LIGHTING", "WALLS/CEILING", "FLOORING",
        ],
    },
    {
        name: "Kitchen",
        items: [
            "CABINETS", "COUNTERTOPS", "SINK/FAUCET", "APPLIANCES", "FLOORING", "LIGHTING",
        ],
    },
    {
        name: "Bedroom 1",
        items: ["WINDOWS/DOORS", "CLOSET", "FLOORING", "WALLS/CEILING"],
        addMore: true,
    },
    {
        name: "Bath 1",
        items: [
            "SINK/FAUCET", "TOILET", "SHOWER/TUB", "VANITY", "FLOORING", "EXHAUST FAN",
        ],
        addMore: true,
    },
    {
        name: "Hall / Stairs",
        items: [
            "STAIRS", "LIGHTING", "WALLS/CEILING", "FLOORING",
        ],
    },
    {
        name: "Laundry",
        items: ["WASHER/DRYER", "WATER HEATER", "FURNACE", "STORAGE", "FLOORING"],
    }
];

const tabs = [
    "Move-in Inspection",
    "Move-out Inspection",
    "Recurring · 3 / 6 / 12 months"
]

const activeTab = ref(0)

watch(
    () => props.isOpen,
    (newVal) => {
        if (typeof document !== "undefined") {
            if (newVal) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
        }
    },
);

onUnmounted(() => {
    if (typeof document !== "undefined") {
        document.body.style.overflow = "";
    }
});
</script>

<template>
    <Teleport to="body">
        <Transition name="fade">
            <div v-if="isOpen" class="fixed inset-0 bg-[#0F111466] z-[9998]" @click="emit('close')"></div>
        </Transition>

        <Transition name="slide">
            <div v-if="isOpen"
                class="fixed inset-y-0 right-0 w-full max-w-[544px] bg-white z-[9999] sm:rounded-l-[32px] flex flex-col py-5">
                <div class="px-4 sm:px-6 flex items-start justify-between mb-[17px]">
                    <div class="">
                        <h2 class="text-[18px] sm:text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[3px]">
                            Inspection templates
                        </h2>
                        <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-0.02em]">
                            Customize your room-by-room inspection checklists
                        </p>
                    </div>
                    <button @click="emit('close')"
                        class="text-[#0F1114] border border-[#0F11141A] rounded-[80px] h-10 w-10 flex items-center justify-center hover:opacity-70 transition-opacity mt-1 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <div class="flex-1 overflow-y-auto scrollbar-hide">
                    <div class="w-full mb-4">
                        <div
                            class="border-b border-[#0F11141A] flex items-center gap-5 px-4 sm:px-[28px] mb-5 overflow-x-auto scrollbar-hide">
                            <button v-for="(tab, index) in tabs" :key="index" @click="activeTab = index"
                                class="relative text-[12px] pb-[13px] leading-[100%] tracking-[-0.02em] whitespace-nowrap min-w-max"
                                :class="activeTab === index
                                    ? 'text-[#0F1114] font-bold'
                                    : 'text-[#0F111499] font-semibold'">
                                {{ tab }}
                                <span v-if="activeTab === index"
                                    class="absolute left-0 bottom-0 w-full h-[2px] bg-[#004CE5]" />
                            </button>
                        </div>

                        <h3 class="px-4 sm:px-6 text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[5px]">
                            {{ tabs[activeTab] }} template
                        </h3>
                        <p class="px-4 sm:px-6 text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-0.02em]">
                            Room-by-room condition documentation at move-in.
                        </p>
                    </div>

                    <div v-for="section in sections" :key="section.name">
                        <h3 class="px-4 sm:px-6 text-[16px] font-bold text-[#0F1114] leading-[100%] ml-[2px] mb-1">
                            {{ section.name }}
                        </h3>

                        <div class="px-4 sm:px-[22px] mb-4">
                            <div class="flex flex-wrap gap-1 mb-4">
                                <div v-for="item in section.items" :key="item"
                                    class="h-8 px-4 py-[10px] rounded-[80px] border border-[#0F11141A] bg-[#0F111405] text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] flex items-center gap-[8px] tracking-[-0.02em]">
                                    <div class="h-3 w-3 border border-[#0F1114] shrink-0"></div>
                                    {{ item }}
                                </div>
                            </div>
                            <button
                                class="h-10 pl-[18px] pr-5 py-3 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] flex items-center gap-[10px] tracking-[-0.02em] w-full sm:w-auto justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                                ADD PHOTOS
                            </button>
                        </div>

                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 px-4 sm:px-6 mb-[22px]">
                            <div v-for="i in 3" :key="i"
                                class="rounded-[8px] border border-dashed border-[#0F11141A] bg-[#FAFAFA] h-[80px] sm:h-[96px] flex items-center justify-center">
                                <span
                                    class="text-[11px] sm:text-[12px] font-extrabold text-[#0F111466] uppercase tracking-[-0.02em] leading-[100%]">PHOTO{{
                                        i }}</span>
                            </div>
                        </div>

                        <div class="px-4 sm:px-6" :class="section.addMore ? 'mb-4' : 'mb-5'">
                            <p
                                class="ml-1 text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] mb-[5px] tracking-[-0.02em]">
                                Comments
                            </p>
                            <textarea rows="2" placeholder="Add notes for this section..."
                                class="w-full h-[104px] border border-[#0F11141A] rounded-[12px] px-5 py-[15px] text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111499] leading-[100%] outline-none resize-none" />
                        </div>

                        <div class="px-4 sm:px-6 mb-5" v-if="section.addMore">
                            <button
                                class="h-10 rounded-[80px] pl-[18px] pr-[19px] py-3 text-[12px] text-primary font-extrabold uppercase leading-[100%] tracking-[-0.02em] flex items-center justify-center gap-[10px] w-full sm:w-auto"
                                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                                ADD {{ section.name }}
                            </button>
                        </div>
                    </div>

                    <div class="px-4 sm:px-6 py-[82px] flex justify-center text-center">
                        <p class="text-[12px] font-semibold text-[#0F1114] leading-[100%] tracking-[-0.02em]">Check out
                            rest of the options on this <span class="text-[#004CE5]">link</span></p>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
}
</style>
