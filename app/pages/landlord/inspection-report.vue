<script setup>
import Navbar from '~/components/landlord/Navbar.vue';
import Sidebar from '~/components/landlord/Sidebar.vue';

definePageMeta({
    path: '/inspection-report',
})

const exteriors = [
    {
        title: "Landscaping",
        description: "Satisfactory condition at time of inspection.",
        image: "/assets/listing1.png",
        status: {
            label: "SATISFACTORY",
            textcolor: '#00813C',
            bgcolor: '#0FBC5F1A',
            bordercolor: '#0FBC5F80'
        }
    },
    {
        title: "Fences/Gates",
        description: "Minor wear noted; see photo. Functionality acceptable at time of inspection.",
        image: "/assets/listing1.png",
        status: {
            label: "OTHER",
            textcolor: '#0F1114',
            bgcolor: '#0F11140D',
            bordercolor: '#0F111433'
        }
    },
    {
        title: "Sprinklers/Timers",
        description: "Satisfactory condition at time of inspection.",
        image: "/assets/listing2.png",
        status: {
            label: "SATISFACTORY",
            textcolor: '#00813C',
            bgcolor: '#0FBC5F1A',
            bordercolor: '#0FBC5F80'
        }
    },
    {
        title: "Walks/Driveway",
        description: "Appears new / recently replaced; verified during inspection.",
        image: "/assets/listing3.png",
        status: {
            label: "New",
            textcolor: '#004CE5',
            bgcolor: '#004CE51A',
            bordercolor: '#004CE580'
        }
    }
];
</script>

<template>
    <div class="flex min-h-screen bg-primary font-sans overflow-x-hidden">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-4 sm:px-6 py-[22px] flex flex-col">
                <div class="mb-[18px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div class="flex items-center gap-4">
                        <NuxtLink to="/portfolio"
                            class="w-10 h-10 my-[2px] rounded-full flex items-center justify-center border border-[#0F11141A]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l14 0" />
                                <path d="M5 12l4 4" />
                                <path d="M5 12l4 -4" />
                            </svg>
                        </NuxtLink>
                        <div>
                            <h1 class="text-xl font-bold text-[#0F1114] leading-[100%] mb-1">Move-in Inspection Report
                            </h1>
                            <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Move-in •
                                California Building • Unit 1</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 w-full sm:w-auto">
                        <button
                            class="h-10 px-5 rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] flex-1 sm:flex-initial text-center justify-center"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                            Print / Save Pdf
                        </button>
                    </div>
                </div>

                <div class="border border-[#0F11141A] rounded-[24px] mb-4">
                    <div class="py-[21px] px-6 border-b border-[#0F11141A]">
                        <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%]">Inspection details</h2>
                    </div>

                    <div
                        class="px-6 pt-[22px] pb-[21px] flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-14">
                        <div>
                            <p class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[4px]">
                                Property</p>
                            <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%]">California
                                Building</p>
                        </div>

                        <div>
                            <p class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[4px]">
                                Address</p>
                            <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%]">100 Main St, San
                                Francisco, CA 94114</p>
                        </div>

                        <div>
                            <p class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[4px]">
                                Unit</p>
                            <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%]">Unit 1 • Apartment
                            </p>
                        </div>

                        <div>
                            <p class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[4px]">
                                Assignee</p>
                            <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%]">Myself</p>
                        </div>

                        <div>
                            <p class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[4px]">
                                Date Completed</p>
                            <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%]">2026-03-10</p>
                        </div>

                        <div>
                            <p class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[4px]">
                                Tenant</p>
                            <p class="text-[16px] font-bold text-[#0F1114] leading-5 tracking-[-2%]">Tenant Name</p>
                        </div>
                    </div>
                </div>

                <div class="border border-[#0F11141A] rounded-[24px]">
                    <div class="py-[18px] px-6 flex items-center gap-[10px] border-b border-[#0F11141A]">
                        <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%]">Exterior/Front Yard</h2>

                        <div class="bg-[#F2F6FF] border border-[#004CE51A] rounded-[40px] pb-[7px] pt-[6px] px-3">
                            <p class="text-[10px] font-extrabold text-[#004CE5] leading-[100%] uppercase">
                                0/7</p>
                        </div>
                    </div>

                    <div class="p-6 flex flex-col gap-4">
                        <div v-for="exterior in exteriors" :key="exterior.title">
                            <div class="border border-[#0F11141A] rounded-[12px]">
                                <div
                                    class="py-[10px] px-4 flex items-center justify-between gap-[10px] border-b border-[#0F11141A]">
                                    <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%]">{{ exterior.title }}
                                    </h2>

                                    <div class="border rounded-[80px] pb-[7px] pt-[6px] px-3" :style="{
                                        backgroundColor: exterior.status.bgcolor,
                                        borderColor: exterior.status.bordercolor
                                    }">
                                        <p class="text-[10px] font-semibold leading-[100%] uppercase"
                                            :style="{ color: exterior.status.textcolor }">
                                            {{ exterior.status.label }}</p>
                                    </div>
                                </div>

                                <div class="px-4 pt-[14px] pb-[17px]">
                                    <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%] mb-[13px]">
                                        {{ exterior.description }}
                                    </p>
                                    <div class="w-full sm:w-[184px] h-[180px] sm:h-[120px]">
                                        <img :src="exterior.image" class="rounded-[8px] w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="px-6 my-12 sm:my-[101px] text-center">
                    <p class="text-[24px] font-bold text-[#0F1114] leading-[100%]">Check rest of the parameters here:-
                        <span class="underline text-[#004CE5]">Link</span>
                    </p>
                </div>

                <div class="border border-[#0F11141A] rounded-[24px] mb-4">
                    <div class="py-[21px] px-6 border-b border-[#0F11141A]">
                        <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%]">Tenant signature</h2>
                    </div>

                    <div class="px-6 pt-[22px] pb-[25px]">
                        <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%] mb-[21px]">By signing below,
                            the tenant acknowledges this inspection report reflects the condition of
                            the unit at move-in. Notes and photos are provided for documentation purposes.</p>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="border border-[#0F11141A] rounded-[12px] px-[17px] pt-[15px] pb-[13px]">
                                <p
                                    class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[26px]">
                                    Tenant name</p>
                                <h2 class="text-[16px] font-bold text-[#0F1114] uppercase leading-5 tracking-[-2%]">
                                    Tenant name</h2>
                            </div>

                            <div class="border border-[#0F11141A] rounded-[12px] px-[17px] pt-[15px] pb-[13px]">
                                <p
                                    class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[26px]">
                                    Date</p>
                                <h2 class="text-[16px] font-bold text-[#0F1114] uppercase leading-5 tracking-[-2%]">
                                    2026-03-10</h2>
                            </div>

                            <div class="border border-[#0F11141A] rounded-[12px] p-[17px] pt-[15px]">
                                <p class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[5px]">
                                    Tenant Signature</p>
                                <div
                                    class="border-dashed border-[#0F11141A] rounded-[8px] bg-[#FAFAFA] py-[42px] text-center">
                                    <p
                                        class="text-[14px] font-bold text-[#0F111499] uppercase leading-5 tracking-[-2%]">
                                        Sign here (digital signature area)</p>
                                </div>
                            </div>

                            <div class="border border-[#0F11141A] rounded-[12px] p-[17px] pt-[15px]">
                                <p class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[5px]">
                                    Optional notes</p>
                                <div
                                    class="border-dashed border-[#0F11141A] rounded-[8px] bg-[#FAFAFA] py-[42px] text-center">
                                    <p
                                        class="text-[14px] font-bold text-[#0F111499] uppercase leading-5 tracking-[-2%]">
                                        Add any final tenant notes before signing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="border border-[#0F11141A] rounded-[24px] mb-10">
                    <div class="py-[21px] px-6 border-b border-[#0F11141A]">
                        <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%]">Landlord / Property Manager
                            signature</h2>
                    </div>

                    <div class="px-6 pt-[22px] pb-[25px]">
                        <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%] mb-[21px]">By signing below,
                            the landlord or property manager acknowledges this inspection report has been reviewed and
                            will be retained for records.</p>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="border border-[#0F11141A] rounded-[12px] px-[17px] pt-[15px] pb-[13px]">
                                <p
                                    class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[26px]">
                                    Name</p>
                                <h2 class="text-[16px] font-bold text-[#0F1114] uppercase leading-5 tracking-[-2%]">
                                    Landlord / Property Manager</h2>
                            </div>

                            <div class="border border-[#0F11141A] rounded-[12px] px-[17px] pt-[15px] pb-[13px]">
                                <p
                                    class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[26px]">
                                    Date</p>
                                <h2 class="text-[16px] font-bold text-[#0F1114] uppercase leading-5 tracking-[-2%]">
                                    2026-03-10</h2>
                            </div>

                            <div class="border border-[#0F11141A] rounded-[12px] p-[17px] pt-[15px]">
                                <p class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[5px]">
                                    Tenant Signature</p>
                                <div
                                    class="border-dashed border-[#0F11141A] rounded-[8px] bg-[#FAFAFA] py-[42px] text-center">
                                    <p
                                        class="text-[14px] font-bold text-[#0F111499] uppercase leading-5 tracking-[-2%]">
                                        Sign here (digital signature area)</p>
                                </div>
                            </div>

                            <div class="border border-[#0F11141A] rounded-[12px] p-[17px] pt-[15px]">
                                <p class="text-[12px] font-semibold text-[#0F111499] uppercase leading-[100%] mb-[5px]">
                                    Optional notes</p>
                                <div
                                    class="border-dashed border-[#0F11141A] rounded-[8px] bg-[#FAFAFA] py-[42px] text-center">
                                    <p
                                        class="text-[14px] font-bold text-[#0F111499] uppercase leading-5 tracking-[-2%]">
                                        Add any final notes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
