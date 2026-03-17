<script setup lang="ts">
import Navbar from '@/components/landlord/Navbar.vue'
import AddRequestModal from '~/components/pro/AddRequestModal.vue';
import Sidebar from '~/components/pro/Sidebar.vue';

interface StatusColors {
    bgColor: string;
    borderColor: string;
    textColor: string;
}

interface MaintenanceRequest {
    status: string;
    id: string;
    category: string;
    property: string;
    priority: string;
    client: string;
}

const isAddRequestModalOpen = ref<boolean>(false)

const getStatusColors = (color: string): StatusColors | Record<string, never> => {
    if (color === "High") {
        return {
            bgColor: "#FFF2F2",
            borderColor: "#E517171A",
            textColor: "#A10000",
        };
    }

    if (color === "New") {
        return {
            bgColor: "#F2F6FF",
            borderColor: "#004CE51A",
            textColor: "#004CE5",
        };
    }

    if (color === "Waiting" || color === "Medium") {
        return {
            bgColor: "#FFF9F2",
            borderColor: "#E599171A",
            textColor: "#A16600",
        };
    }

    if (color === "In Progress" || color === "Low") {
        return {
            bgColor: "#F2FFF4",
            borderColor: "#21A6351A",
            textColor: "#21A635",
        };
    }

    return {};
};

const requests: MaintenanceRequest[] = [
    {
        status: "New",
        id: "#10021",
        category: "Plumbing",
        property: "Oak St Apartments",
        priority: "High",
        client: "Jamie Chen",
    },
    {
        status: "In Progress",
        id: "#10022",
        category: "Electrical",
        property: "Pine View",
        priority: "Medium",
        client: "Alex Rivera",
    },
    {
        status: "Waiting",
        id: "#10023",
        category: "Appliance",
        property: "Market St Condo",
        priority: "Low",
        client: "Taylor Smith",
    },
];

</script>

<template>
    <div class="relative flex min-h-screen bg-primary font-sans overflow-x-hidden">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-6 pt-[19px] pb-10 flex flex-col">

                <!-- Header -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                    <div>
                        <h1 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-[4px]">Requests</h1>
                        <p class="text-[12px] text-[#0F111499] font-medium leading-4 tracking-[-2%]">Total: 3</p>
                    </div>
                    <div>
                        <button @click="isAddRequestModalOpen = true"
                            class="pl-[18px] pr-[21px] py-[13px] text-[12px] font-extrabold text-primary rounded-[80px] flex items-center gap-[10px] uppercase leading-[100%] tracking-[-2%]"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                stroke-linejoin="round" class="icon icon-tabler icons-tabler-plus">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 5l0 14" />
                                <path d="M5 12l14 0" />
                            </svg>
                            Add Request
                        </button>
                    </div>
                </div>

                <!-- Table -->
                <div class="border border-[#0F11141A] rounded-[24px]">
                    <div class="flex flex-col md:flex-row md:items-center justify-between p-4 sm:p-6 gap-4">
                        <div class="relative w-full md:w-[344px]">
                            <svg class="absolute left-2 top-1/2 -translate-y-1/2 text-[#0F111466]"
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <input type="text" placeholder="Search Here"
                                class="w-full h-10 pl-[38px] pr-4 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold placeholder:text-[#0F111466] leading-[100%] tracking-[-2%] text-[#0F1114] focus:outline-none" />
                        </div>
                        <button
                            class="pl-[21px] pr-[15px] py-[9px] rounded-[80px] border border-[#0F11141A] text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] flex items-center gap-[14px] whitespace-nowrap hover:bg-slate-50 transition-colors">
                            Status
                            <div class="h-5 w-5 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="text-[#0F1114]">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </button>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="w-full min-w-[900px]">
                            <thead>
                                <tr class="h-11 border-y border-[#0F11141A] bg-[#FAFAFA]">
                                    <th
                                        class="pl-6 pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Status</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        ID</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Category</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Property</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        Status</th>
                                    <th
                                        class="pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] whitespace-nowrap w-[124px]">
                                        Client</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(request, i) in requests" :key="i"
                                    class="border-b border-[#0F11141A] last:border-b-0 hover:bg-[#F9FAFB] transition-colors">
                                    <td
                                        class="pl-6 pr-1 pt-[17px] pb-4 text-[12px] font-bold leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        <div class="inline-flex items-center gap-[7px] px-3 py-[5px] rounded-full border"
                                            :style="{
                                                backgroundColor: getStatusColors(request.status).bgColor,
                                                borderColor: getStatusColors(request.status).borderColor,
                                                color: getStatusColors(request.status).textColor
                                            }">
                                            {{ request.status }}
                                        </div>
                                    </td>

                                    <td
                                        class="px-1 py-[21px] text-[14px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">
                                        {{ request.id }}</td>

                                    <td
                                        class="px-1 py-[21px] text-[14px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">
                                        {{ request.category }}</td>

                                    <td
                                        class="px-1 py-[21px] text-[14px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">
                                        {{ request.property }}</td>

                                    <td
                                        class="px-1 pt-[17px] pb-4 text-[12px] font-bold leading-[100%] tracking-[-2%] whitespace-nowrap">
                                        <div class="inline-flex items-center gap-[7px] px-3 py-[6px] rounded-full border"
                                            :style="{
                                                backgroundColor: getStatusColors(request.priority).bgColor,
                                                borderColor: getStatusColors(request.priority).borderColor,
                                                color: getStatusColors(request.priority).textColor
                                            }">
                                            {{ request.priority }}
                                        </div>
                                    </td>

                                    <td
                                        class="px-1 pr-6 py-[21px] text-[14px] font-semibold text-[#0F111499] leading-[100%] tracking-[-2%]">
                                        {{ request.client }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

            </main>

        </div>

        <!-- Add Request Modal -->
        <AddRequestModal :isOpen="isAddRequestModalOpen" @close="isAddRequestModalOpen = false" />
    </div>
</template>
