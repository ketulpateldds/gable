<script setup lang="ts">
import Navbar from '~/components/landlord/Navbar.vue';
import Sidebar from '~/components/landlord/Sidebar.vue';

// Background Questions
const backgroundQuestions = ref([
    { key: 'smoke', question: 'Do you or any occupants smoke?', answer: '' as 'yes' | 'no' | '' },
    { key: 'bankruptcy', question: 'Have you ever filed for bankruptcy?', answer: '' as 'yes' | 'no' | '' },
    { key: 'evicted', question: 'Have you ever been evicted or asked to move?', answer: '' as 'yes' | 'no' | '' },
    { key: 'crime', question: 'Have you ever been charged or convicted of a crime?', answer: '' as 'yes' | 'no' | '' },
]);

interface Obligation {
    id: number;
    creditor: string;
    phone: string;
    monthlyPayment: string;
}
const obligations = ref<Obligation[]>([
    { id: 1, creditor: 'Chase Bank', phone: '(800) 935-9935', monthlyPayment: '$320' },
    { id: 2, creditor: 'Capital One', phone: '(877) 383-4802', monthlyPayment: '$210' }
]);
</script>

<template>
    <div class="flex min-h-screen bg-primary">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-4 sm:px-6 pt-[22px] flex flex-col lg:flex-row gap-[30px] items-start">

                <div class="w-full lg:max-w-[944px] bg-primary overflow-hidden">

                    <!-- Header -->
                    <div class="pb-[22px] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div class="flex items-center gap-4">
                            <NuxtLink to="/landlord/applications"
                                class="w-10 h-10 rounded-full flex items-center justify-center border border-neutral-primary/10 text-neutral-primary shrink-0">
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
                                <h1 class="text-[20px] font-bold text-neutral-primary leading-[100%] mb-1">Rental
                                    Application</h1>
                                <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                    Property 100 Main St Unit 10, San francisco, CA 94114
                                </p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 w-full md:w-auto">
                            <button
                                class="py-[13px] px-6 rounded-[80px] border border-neutral-primary/10 text-[12px] font-extrabold text-neutral-primary uppercase leading-[100%] tracking-[-2%] flex-1 md:flex-initial text-center justify-center whitespace-nowrap">
                                Export PDF</button>
                            <button
                                class="py-[14px] px-6 rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] flex-1 md:flex-initial text-center justify-center whitespace-nowrap"
                                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">Print
                                Application</button>
                        </div>
                    </div>

                    <!-- Applicant Information -->
                    <div class="w-full border border-neutral-primary/10 rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 pt-[21px] pb-[20px] border-b border-neutral-primary/10">
                            <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[1px]">
                                Applicant Information</h2>
                            <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">Enter
                                the primary applicant details.</p>
                        </div>

                        <div class="px-6 pt-[22px] pb-5 border-b border-neutral-primary/10">
                            <p class="text-[12px] font-semibold text-neutral-primary uppercase leading-[100%] mb-1">
                                Photo</p>
                            <p class="text-[16px] font-medium text-neutral-primary/60 leading-5">No photo
                                uploaded</p>
                        </div>

                        <div class="px-6 pt-[22px] pb-5 border-b border-neutral-primary/10 flex flex-wrap items-center gap-6 lg:gap-16">
                            <div class="whitespace-nowrap">
                                <p
                                    class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                    First Name</p>
                                <p class="text-[16px] font-medium text-neutral-primary leading-5">John</p>
                            </div>
                            <div class="whitespace-nowrap">
                                <p
                                    class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                    Middle Name</p>
                                <p class="text-[16px] font-medium text-neutral-primary leading-5">Andrew</p>
                            </div>
                            <div class="whitespace-nowrap">
                                <p
                                    class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                    Last Name</p>
                                <p class="text-[16px] font-medium text-neutral-primary leading-5">Doe</p>
                            </div>
                            <div class="whitespace-nowrap">
                                <p
                                    class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                    Company Name</p>
                                <p class="text-[16px] font-medium text-neutral-primary leading-5">Doe Consulting
                                    LLC</p>
                            </div>
                            <div class="whitespace-nowrap">
                                <p
                                    class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                    Display as a company</p>
                                <p class="text-[16px] font-medium text-neutral-primary leading-5">yes</p>
                            </div>
                        </div>

                        <div class="px-6 pt-[22px] pb-5 flex flex-wrap items-center gap-6 lg:gap-16">
                            <div class="whitespace-nowrap">
                                <p
                                    class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                    Date of Birth</p>
                                <p class="text-[16px] font-medium text-neutral-primary leading-5">1988-05-14</p>
                            </div>
                            <div class="whitespace-nowrap">
                                <p
                                    class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                    Email</p>
                                <p class="text-[16px] font-medium text-neutral-primary leading-5">[EMAIL_ADDRESS]</p>
                            </div>
                            <div class="whitespace-nowrap">
                                <p
                                    class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                    Phone Number</p>
                                <p class="text-[16px] font-medium text-neutral-primary leading-5">(555) 212-8899</p>
                            </div>
                            <div class="whitespace-nowrap">
                                <p
                                    class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                    Prefered Move In Date</p>
                                <p class="text-[16px] font-medium text-neutral-primary leading-5">2026-04-01</p>
                            </div>
                        </div>
                    </div>

                    <!-- Additional Occupants -->
                    <div class="w-full border border-neutral-primary/10 rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 pt-[21px] pb-[20px] border-b border-neutral-primary/10">
                            <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[1px]">
                                Additional Occupants</h2>
                            <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                Occupants listed with the application.</p>
                        </div>

                        <div class="p-6">
                            <div class="border border-neutral-primary/10 rounded-[12px] mb-4">
                                <h2
                                    class="text-[16px] font-bold text-neutral-primary leading-[100%] pt-[22px] pb-5 px-6 border-b border-neutral-primary/10">
                                    Occupant 1</h2>

                                <div class="px-6 pt-[22px] pb-5 flex flex-wrap items-center gap-6 lg:gap-14">
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            First Name</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">John</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Last Name</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Doe</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Email</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">
                                            john.doe@email.com</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Phone Number</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">(555) 212-8899
                                        </p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Birth Date</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">1988-05-14</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Relationship</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Spouse</p>
                                    </div>
                                </div>
                            </div>

                            <div class="border border-neutral-primary/10 rounded-[12px]">
                                <h2
                                    class="text-[16px] font-bold text-neutral-primary leading-[100%] pt-[22px] pb-5 px-6 border-b border-neutral-primary/10">
                                    Occupant 2</h2>

                                <div class="px-6 pt-[22px] pb-5 flex flex-wrap items-center gap-6 lg:gap-14">
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            First Name</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Lucas</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Last Name</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Doe</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Email</p>
                                        <!-- <p class="text-[16px] font-medium text-neutral-primary leading-5">
                                            john.doe@email.com</p> -->
                                        <p class="text-[16px] font-medium text-neutral-primary/60 leading-5 italic">
                                            Not Provided</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Phone Number</p>
                                        <!-- <p class="text-[16px] font-medium text-neutral-primary leading-5">(555) 212-8899
                                        </p> -->
                                        <p class="text-[16px] font-medium text-neutral-primary/60 leading-5 italic">
                                            Not Provided</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Birth Date</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">2018-08-14</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Relationship</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Child</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Pets -->
                    <div class="w-full border border-neutral-primary/10 rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 py-[19px] border-b border-neutral-primary/10">
                            <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[1px]">
                                Pets</h2>
                            <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                Pets included with the application.</p>
                        </div>

                        <div class="p-6">
                            <div class="border border-neutral-primary/10 rounded-[12px] mb-4">
                                <h2
                                    class="text-[16px] font-bold text-neutral-primary leading-[100%] pt-[22px] pb-5 px-6 border-b border-neutral-primary/10">
                                    Pet 1</h2>

                                <div class="px-6 pt-[22px] pb-5 flex flex-wrap items-center gap-6 lg:gap-14">
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Photo</p>
                                        <p class="text-[16px] font-medium text-neutral-primary/60 leading-5 italic">
                                            Not photo provided</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Type</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Dog</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Name</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Buddy</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Weight</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">35 lbs</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Breed</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Golden
                                            Retriever </p>
                                    </div>
                                </div>
                            </div>

                            <div class="border border-neutral-primary/10 rounded-[12px] mb-4">
                                <h2
                                    class="text-[16px] font-bold text-neutral-primary leading-[100%] pt-[22px] pb-5 px-6 border-b border-neutral-primary/10">
                                    Pet 2</h2>

                                <div class="px-6 pt-[22px] pb-5 flex flex-wrap items-center gap-6 lg:gap-14">
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Photo</p>
                                        <p class="text-[16px] font-medium text-neutral-primary/60 leading-5 italic">
                                            Not photo provided</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Type</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Cat</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Name</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Milo</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Weight</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">12 lbs</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Breed</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Tabby</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Vehicles -->
                    <div class="w-full border border-neutral-primary/10 rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 py-[19px] border-b border-neutral-primary/10">
                            <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[1px]">
                                Vehicles</h2>
                            <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                Vehicles listed in the application.</p>
                        </div>

                        <div class="p-6">
                            <div class="border border-neutral-primary/10 rounded-[12px] mb-4">
                                <h2
                                    class="text-[16px] font-bold text-neutral-primary leading-[100%] pt-[22px] pb-5 px-6 border-b border-neutral-primary/10">
                                    Vehicle 1</h2>

                                <div class="px-6 pt-[22px] pb-5 flex flex-wrap items-center gap-6 lg:gap-14">
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Type</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Automobile</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Make</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Toyota</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Model</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Camry</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Year</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">2021</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Color</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Black</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            License Plate</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">8ABC123</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Registered In</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">CA</p>
                                    </div>
                                </div>
                            </div>

                            <div class="border border-neutral-primary/10 rounded-[12px]">
                                <h2
                                    class="text-[16px] font-bold text-neutral-primary leading-[100%] pt-[22px] pb-5 px-6 border-b border-neutral-primary/10">
                                    Vehicle 2</h2>

                                <div class="px-6 pt-[22px] pb-5 flex flex-wrap items-center gap-6 lg:gap-14">
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Type</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">SUV</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Make</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Honda</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Model</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">CR-V</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Year</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">2020</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Color</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Silver</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            License Plate</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">9XYZ789</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Registered In</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">CA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Residential History -->
                    <div class="w-full border border-neutral-primary/10 rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 py-[19px] border-b border-neutral-primary/10">
                            <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[1px]">
                                Residential History</h2>
                            <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                Residential history provided by the applicant.</p>
                        </div>

                        <div class="p-6">
                            <div class="border border-neutral-primary/10 rounded-[12px] mb-4">
                                <h2
                                    class="text-[16px] font-bold text-neutral-primary leading-[100%] pt-[22px] pb-5 px-6 border-b border-neutral-primary/10">
                                    Residence 1</h2>

                                <div
                                    class="px-6 pt-[22px] pb-5 border-b border-neutral-primary/10 flex flex-wrap items-center gap-6 lg:gap-14">
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Current Residence?</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Yes</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Street Address</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">1450 Market St
                                        </p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            City</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">San Francisco
                                        </p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            State</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">CA</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Zip Code</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">94103</p>
                                    </div>
                                </div>

                                <div
                                    class="px-6 pt-[22px] pb-5 border-b border-neutral-primary/10 flex flex-wrap items-center gap-6 lg:gap-14">
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Move In Date</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">2022-01-01</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Residence Type</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Rent</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Move Out Date</p>
                                        <p class="text-[16px] font-medium text-neutral-primary/60 leading-5 italic">Not
                                            provided</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Monthly Rent</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">$2800</p>
                                    </div>
                                </div>

                                <div class="px-6 pt-[22px] pb-5 flex flex-wrap items-center gap-6 lg:gap-14">
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Landlord Full Name</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Michael Smith
                                        </p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Email</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">
                                            landlord@email.com</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Phone Number</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">(555) 444-1122
                                        </p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            If Owned, Please Explain</p>
                                        <p class="text-[16px] font-medium text-neutral-primary/60 leading-5 italic">Not
                                            provided</p>
                                    </div>
                                </div>
                            </div>

                            <div class="border border-neutral-primary/10 rounded-[12px]">
                                <h2
                                    class="text-[16px] font-bold text-neutral-primary leading-[100%] pt-[22px] pb-5 px-6 border-b border-neutral-primary/10">
                                    Residence 2</h2>

                                <div
                                    class="px-6 pt-[22px] pb-5 border-b border-neutral-primary/10 flex flex-wrap items-center gap-6 lg:gap-14">
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Current Residence?</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">No</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Street Address</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">210 Pine Ave
                                        </p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            City</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Oakland</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            State</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">CA</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Zip Code</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">94607</p>
                                    </div>
                                </div>

                                <div
                                    class="px-6 pt-[22px] pb-5 border-b border-neutral-primary/10 flex flex-wrap items-center gap-6 lg:gap-14">
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Residence Type</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Rent</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Move In Date</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">2019-01-01</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Move Out Date</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">2021-12-31</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Monthly Rent</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">$2200</p>
                                    </div>
                                </div>

                                <div class="px-6 pt-[22px] pb-5 flex flex-wrap items-center gap-6 lg:gap-14">
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Landlord Full Name</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Laura Bennett
                                        </p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Email</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">
                                            laura@email.com</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Phone Number</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">(555) 333-8844
                                        </p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            If Owned, Please Explain</p>
                                        <p class="text-[16px] font-medium text-neutral-primary/60 leading-5 italic">Not
                                            provided</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Income -->
                    <div class="w-full border border-neutral-primary/10 rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 py-[19px] border-b border-neutral-primary/10">
                            <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[1px]">
                                Income</h2>
                            <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                Employment history and other income types.</p>
                        </div>

                        <div class="p-6 border-b border-neutral-primary/10">
                            <div class="border border-neutral-primary/10 rounded-[12px] mb-4">
                                <h2
                                    class="text-[16px] font-bold text-neutral-primary leading-[100%] pt-[22px] pb-5 px-6 border-b border-neutral-primary/10">
                                    Income 1</h2>

                                <div
                                    class="px-6 pt-[22px] pb-5 border-b border-neutral-primary/10 flex flex-wrap items-center gap-6 lg:gap-14">
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Income Type</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Full-time</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Current Employment?</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Yes</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Start Date</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">2021-06-01</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Company/Employer</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Tech Solutions
                                            Inc</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Position/Title</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Software
                                            Engineer</p>
                                    </div>
                                </div>

                                <div
                                    class="px-6 pt-[22px] pb-5 border-b border-neutral-primary/10 flex flex-wrap items-center gap-6 lg:gap-14">
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Monthly Income</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">$8500</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Street Address</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">500 Howard St
                                        </p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            City</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">San Francisco
                                        </p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            State</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">CA</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Zip Code</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">94105</p>
                                    </div>
                                </div>

                                <div class="px-6 pt-[22px] pb-5 flex flex-wrap items-center gap-6 lg:gap-14">
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Supervisor Full Name</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Sarah Johnson
                                        </p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Supervisor Email</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">
                                            sarah.j@techsolutions.com</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Supervisor Phone Number</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">(555) 987-2211
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="border border-neutral-primary/10 rounded-[12px]">
                                <h2
                                    class="text-[16px] font-bold text-neutral-primary leading-[100%] pt-[22px] pb-5 px-6 border-b border-neutral-primary/10">
                                    Income 2</h2>

                                <div
                                    class="px-6 pt-[22px] pb-5 border-b border-neutral-primary/10 flex flex-wrap items-center gap-6 lg:gap-14">
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Income Type</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Full-time</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Current Employment?</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Yes</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Start Date</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">2021-06-01</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Company/Employer</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Tech Solutions
                                            Inc</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Position/Title</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Software
                                            Engineer</p>
                                    </div>
                                </div>

                                <div
                                    class="px-6 pt-[22px] pb-5 border-b border-neutral-primary/10 flex flex-wrap items-center gap-6 lg:gap-14">
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Monthly Income</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">$8500</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Street Address</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">500 Howard St
                                        </p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            City</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">San Francisco
                                        </p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            State</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">CA</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Zip Code</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">94105</p>
                                    </div>
                                </div>

                                <div class="px-6 pt-[22px] pb-5 flex flex-wrap items-center gap-6 lg:gap-14">
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Supervisor Full Name</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Sarah Johnson
                                        </p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Supervisor Email</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">
                                            sarah.j@techsolutions.com</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Supervisor Phone Number</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">(555) 987-2211
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="px-6 pt-[22px] pb-5 border-b border-neutral-primary/10">
                            <p class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                Additional income history information</p>
                            <p class="text-[16px] font-medium text-neutral-primary leading-5">Occasional freelance web
                                development projects averaging $500-$1000 per month.</p>
                        </div>

                        <div class="px-6 pt-[22px] pb-[26px]">
                            <p class="text-[12px] font-bold text-neutral-primary/40 uppercase leading-[100%] mb-[14px]">
                                PLEASE LIST ALL OF YOUR FINANCIAL OBLIGATIONS
                            </p>

                            <div class="border border-neutral-primary/10 rounded-[12px] overflow-hidden">
                                <div class="overflow-x-auto">
                                    <table class="w-full">
                                        <thead>
                                            <tr class="bg-[#FAFAFA] h-11 border-b border-neutral-primary/10">
                                                <th
                                                    class="text-left text-[14px] font-bold text-neutral-primary leading-[100%] tracking-[-2%] pl-6 px-1 py-[13px]">
                                                    Name of Creditor</th>
                                                <th
                                                    class="text-left text-[14px] font-bold text-neutral-primary leading-[100%] tracking-[-2%] px-1 py-[13px]">
                                                    Phone</th>
                                                <th
                                                    class="text-left text-[14px] font-bold text-neutral-primary leading-[100%] tracking-[-2%] px-1 pr-6 py-[13px]">
                                                    Monthly Payment Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="obligation in obligations" :key="obligation.id"
                                                class="border-b border-neutral-primary/10 last:border-b-0">
                                                <td
                                                    class="pl-6 px-1 py-[21px] text-[14px] font-semibold text-neutral-primary/60 leading-[100%] tracking-[-2%]">
                                                    {{ obligation.creditor }}</td>
                                                <td
                                                    class="px-1 py-[21px] text-[14px] font-semibold text-neutral-primary/60 leading-[100%] tracking-[-2%]">
                                                    {{ obligation.phone }}</td>
                                                <td
                                                    class="px-1 pr-6 py-[21px] text-[14px] font-semibold text-neutral-primary/60 leading-[100%] tracking-[-2%]">
                                                    {{ obligation.monthlyPayment }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- Emergency Contact -->
                    <div class="w-full border border-neutral-primary/10 rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 pt-[21px] pb-[20px] border-b border-neutral-primary/10">
                            <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[1px]">
                                Emergency Contact</h2>
                            <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                Emergency contacts provided by the applicant.</p>
                        </div>

                        <div class="p-6">
                            <div class="border border-neutral-primary/10 rounded-[12px] overflow-hidden">
                                <h2
                                    class="text-[16px] font-bold text-neutral-primary leading-[100%] pt-[22px] pb-5 px-6 border-b border-neutral-primary/10">
                                    Emergency Contact 1</h2>

                                <div
                                    class="px-6 pt-[22px] pb-5 border-b border-neutral-primary/10 flex flex-wrap items-center gap-6 lg:gap-14">
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Contact Name</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Robert Doe</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Contact Email</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">
                                            robert@email.com</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Contact Phone Number</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">(555) 111-4455
                                        </p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Relationship to Applicant</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Father</p>
                                    </div>
                                </div>

                                <div class="px-6 pt-[22px] pb-5 flex flex-wrap items-center gap-6 lg:gap-14">
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Details</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Primary
                                            emergency contact</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Reference Contact -->
                    <div class="w-full border border-neutral-primary/10 rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 pt-[21px] pb-[20px] border-b border-neutral-primary/10">
                            <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[1px]">
                                Reference Contact</h2>
                            <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                Reference contacts listed in the application.</p>
                        </div>

                        <div class="p-6">
                            <div class="border border-neutral-primary/10 rounded-[12px] overflow-hidden mb-4">
                                <h2
                                    class="text-[16px] font-bold text-neutral-primary leading-[100%] pt-[22px] pb-5 px-6 border-b border-neutral-primary/10">
                                    Reference 1</h2>

                                <div
                                    class="px-6 pt-[22px] pb-5 border-b border-neutral-primary/10 flex flex-wrap items-center gap-6 lg:gap-14">
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Contact Name</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Emily Parker
                                        </p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Contact Email</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">
                                            emily.parker@email.com</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Contact Phone Number</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">(555) 777-1199
                                        </p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Relationship to Applicant</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Friend</p>
                                    </div>
                                </div>

                                <div class="px-6 pt-[22px] pb-5 flex flex-wrap items-center gap-6 lg:gap-14">
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Years Known</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">6</p>
                                    </div>
                                </div>
                            </div>

                            <div class="border border-neutral-primary/10 rounded-[12px] overflow-hidden">
                                <h2
                                    class="text-[16px] font-bold text-neutral-primary leading-[100%] pt-[22px] pb-5 px-6 border-b border-neutral-primary/10">
                                    Reference 2</h2>

                                <div
                                    class="px-6 pt-[22px] pb-5 border-b border-neutral-primary/10 flex flex-wrap items-center gap-6 lg:gap-14">
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Contact Name</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Daniel Kim</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Contact Email</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">
                                            daniel.k@email.com</p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Contact Phone Number</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">(555) 888-2299
                                        </p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Relationship to Applicant</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">Former
                                            Landlord</p>
                                    </div>
                                </div>

                                <div class="px-6 pt-[22px] pb-5 flex flex-wrap items-center gap-6 lg:gap-14">
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Years Known</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">3</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Background Questions -->
                    <div class="w-full border border-neutral-primary/10 rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 pt-[21px] pb-[20px] border-b border-neutral-primary/10">
                            <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[1px]">
                                Background Questions</h2>
                            <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                Applicant responses to the screening questions.</p>
                        </div>

                        <div class="p-6">
                            <div v-for="q in backgroundQuestions" :key="q.key"
                                class="border border-neutral-primary/10 rounded-[12px] overflow-hidden mb-4 last:mb-0">
                                <h2
                                    class="text-[16px] font-bold text-neutral-primary leading-[100%] pt-[22px] pb-5 px-6 border-b border-neutral-primary/10">
                                    {{ q.question }}</h2>
                                <div class="p-6">
                                    <div class="mb-[22px]">
                                        <div
                                            class="inline-flex items-center px-[15px] py-[9px] rounded-full bg-[#FFF2F2] border border-[#CC29291A] text-[#CC2929] text-[12px] font-bold uppercase leading-[100%] tracking-[-2%]">
                                            {{ q.answer || 'NO' }}
                                        </div>
                                    </div>
                                    <div>
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            PLEASE EXPLAIN</p>
                                        <p class="text-[16px] font-medium text-neutral-primary/60 leading-5 italic">
                                            Not provided</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Attachments -->
                    <div class="w-full border border-neutral-primary/10 rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 pt-[21px] pb-[20px] border-b border-neutral-primary/10">
                            <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[1px]">
                                Attachments</h2>
                            <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                Supporting documents added with the application.</p>
                        </div>

                        <div class="px-6 pt-[19px] pb-[21px]">
                            <ul class="flex flex-col gap-[7px]">
                                <li class="text-[16px] font-medium text-neutral-primary leading-5">March_Paystub.pdf
                                </li>
                                <li class="text-[16px] font-medium text-neutral-primary leading-5">Driver_License.jpg
                                </li>
                                <li class="text-[16px] font-medium text-neutral-primary leading-5">Employment_Letter.pdf
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Applicant Authorization -->
                    <div class="w-full border border-neutral-primary/10 rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 pt-[21px] pb-[20px] border-b border-neutral-primary/10">
                            <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[1px]">
                                Applicant Authorization</h2>
                            <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                Application certification and signature details.</p>
                        </div>

                        <div class="p-6">
                            <div class="border border-brand-blue/20 bg-brand-blue/[0.02] rounded-[12px] p-6 pb-[21px]">
                                <div
                                    class="mb-[22px] inline-flex items-center px-[13px] py-[9px] rounded-full border border-[#21A6351A] bg-[#F2FFF4] text-[#21A635] text-[12px] font-bold leading-[100%] tracking-[-2%]">
                                    Authorized

                                </div>
                                <div class="flex flex-wrap items-center gap-6 lg:gap-[38px]">
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Applicant Name</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">John Andrew
                                            Doe
                                        </p>
                                    </div>
                                    <div class="whitespace-nowrap">
                                        <p
                                            class="text-[12px] font-semibold text-neutral-primary/60 uppercase leading-[100%] mb-1">
                                            Date</p>
                                        <p class="text-[16px] font-medium text-neutral-primary leading-5">2026-03-10</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Signature -->
                    <div class="w-full border border-neutral-primary/10 rounded-[24px] mb-6 overflow-hidden">
                        <div class="px-6 pt-[21px] pb-[20px] border-b border-neutral-primary/10">
                            <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[1px]">
                                Signature</h2>
                            <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                Applicant certification for printed records.</p>
                        </div>

                        <div class="px-6 pt-[48px] pb-[22px]">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4">
                                <div class="col-span-1">
                                    <div class="border-b border-neutral-primary mb-[13px]"></div>
                                    <p
                                        class="text-[14px] font-semibold text-neutral-primary/80 leading-4 tracking-[-2%]">
                                        Applicant Signature
                                    </p>
                                </div>
                                <div class="col-span-1">
                                    <div class="border-b border-neutral-primary mb-[13px]"></div>
                                    <p
                                        class="text-[14px] font-semibold text-neutral-primary/80 leading-4 tracking-[-2%]">
                                        Date
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p
                        class="text-[14px] font-semibold text-neutral-primary/40 leading-4 tracking-[-2%] text-center mb-12">
                        Use the Print Application or Export PDF button to save a clean letter-size application packet.
                    </p>

                </div>

            </main>

        </div>

    </div>
</template>
