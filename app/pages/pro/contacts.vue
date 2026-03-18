<script setup lang="ts">
import Navbar from '@/components/landlord/Navbar.vue'
import Sidebar from '~/components/pro/Sidebar.vue';
import AddContactModal from '~/components/pro/AddContactModal.vue';

interface Contact {
    name: string
    phone: string
    email: string
}

const isModalOpen = ref<boolean>(false);

const contacts: Contact[] = [
    {
        name: "Alex Rivera",
        phone: "(555) 987-6543",
        email: "alex@domain.com",
    },
    {
        name: "Jamie Chen",
        phone: "(555) 123-4567",
        email: "jamie@domain.com",
    },
];

const getInitials = (name: string): string => {
    if (!name) return "";
    const parts = name.split(" ").filter(p => p.length > 0);
    if (parts.length === 0) return "";

    const first = parts[0];
    if (!first) return "";

    if (parts.length === 1) return first.substring(0, 2).toUpperCase();

    const last = parts[parts.length - 1];
    if (!last) return first.charAt(0).toUpperCase();

    return (first.charAt(0) + last.charAt(0)).toUpperCase();
};

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
                        <h1 class="text-[20px] font-bold text-neutral-primary leading-[100%] mb-[4px]">Contacts</h1>
                        <p class="text-[12px] text-neutral-primary/60 font-medium leading-4 tracking-[-2%]">Total: 2</p>
                    </div>
                    <div class="flex flex-wrap items-center gap-2">
                        <button
                            class="border border-neutral-primary rounded-[80px] px-[21px] py-[13px] text-[12px] font-extrabold text-neutral-primary uppercase leading-[100%] tracking-[-2%] whitespace-nowrap">
                            Import
                        </button>
                        <button @click="isModalOpen = true"
                            class="pl-[18px] pr-[21px] py-[12px] text-[12px] font-extrabold text-primary rounded-[80px] flex items-center gap-[10px] uppercase leading-[100%] tracking-[-2%]"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                            <div class="w-4 h-4 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                    stroke-linejoin="round" class="icon icon-tabler icons-tabler-plus">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 5l0 14" />
                                    <path d="M5 12l14 0" />
                                </svg>
                            </div>
                            Add new contact
                        </button>
                    </div>
                </div>

                <!-- Table -->
                <div class="border border-neutral-primary/10 rounded-[24px] overflow-x-auto">
                    <table class="w-full min-w-[900px]">
                        <thead>
                            <tr class="h-11 border-y border-neutral-primary/10 bg-[#FAFAFA]">
                                <th
                                    class="pl-6 pr-1 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-neutral-primary leading-[100%] tracking-[-2%] whitespace-nowrap">
                                    Contact Photo</th>
                                <th
                                    class="px-1 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-neutral-primary leading-[100%] tracking-[-2%] whitespace-nowrap">
                                    Name</th>
                                <th
                                    class="px-1 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-neutral-primary leading-[100%] tracking-[-2%] whitespace-nowrap">
                                    Phone Number</th>
                                <th
                                    class="px-1 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-neutral-primary leading-[100%] tracking-[-2%] whitespace-nowrap">
                                    Profile</th>
                                <th
                                    class="px-1 pr-6 pt-[14px] pb-[13px] text-left text-[14px] font-bold text-neutral-primary leading-[100%] tracking-[-2%] whitespace-nowrap w-px">
                                    Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(contact, i) in contacts" :key="i"
                                class="border-b border-neutral-primary/10 last:border-b-0 hover:bg-[#F9FAFB] transition-colors">
                                <td class="pl-6 pr-1 py-4 whitespace-nowrap">
                                    <div
                                        class="border border-status-info-border bg-status-info-bg rounded-[8px] px-[7px] py-[9px] text-brand-blue text-center w-fit text-[12px] font-extrabold leading-[100%] tracking-[-2%]">
                                        {{ getInitials(contact.name) }}
                                    </div>
                                </td>

                                <td class="px-1 py-[15px]">
                                    <div
                                        class="text-[14px] font-semibold text-neutral-primary leading-[100%] tracking-[-2%] mb-[2px]">
                                        {{ contact.name }}
                                    </div>
                                    <div
                                        class="text-[12px] font-semibold text-neutral-primary/60 leading-[100%] tracking-[-2%]">
                                        {{ contact.email }}
                                    </div>
                                </td>

                                <td
                                    class="px-1 py-[21px] text-[14px] font-semibold text-neutral-primary/60 leading-[100%] tracking-[-2%]">
                                    {{ contact.phone }}</td>

                                <td
                                    class="px-1 py-[24px] text-[14px] font-bold text-brand-blue leading-[100%] tracking-[-2%]">
                                    View Profile</td>

                                <td class="px-1 pr-6 py-4 flex items-center gap-1">
                                    <div
                                        class="border border-neutral-primary/10 h-8 w-8 rounded-full text-neutral-primary flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="icon icon-tabler icons-tabler-outline icon-tabler-message-circle">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path
                                                d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
                                        </svg>
                                    </div>
                                    <div
                                        class="border border-neutral-primary/10 h-8 w-8 rounded-full text-neutral-primary flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="icon icon-tabler icons-tabler-outline icon-tabler-pencil">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                            <path d="M13.5 6.5l4 4" />
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </main>

        </div>

        <!-- Add Contact Modal -->
        <AddContactModal :isOpen="isModalOpen" @close="isModalOpen = false" />
    </div>
</template>
