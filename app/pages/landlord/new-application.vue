<script setup lang="ts">
import Navbar from '~/components/landlord/Navbar.vue';
import Sidebar from '~/components/landlord/Sidebar.vue';

const displayedCompany = ref(false);
const currentResidence = ref(false);
const residenceType = ref<'rent' | 'own' | ''>('');

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
    { id: 1, creditor: '', phone: '', monthlyPayment: '' }
]);
const addObligation = () => {
    obligations.value.push({ id: Date.now(), creditor: '', phone: '', monthlyPayment: '' });
};
const removeObligation = (id: number) => {
    obligations.value = obligations.value.filter(o => o.id !== id);
};

</script>

<template>
    <div class="flex min-h-screen bg-primary">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-4 sm:px-6 pt-[22px] flex flex-col lg:flex-row gap-[30px] items-start">

                <div class="w-full lg:max-w-[944px] bg-primary overflow-hidden">

                    <!-- Header -->
                    <div class="pb-[22px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div class="flex items-center gap-4">
                            <NuxtLink to="/landlord/applications"
                                class="w-10 h-10 rounded-full flex items-center justify-center border border-neutral-primary/10 text-neutral-primary">
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
                                <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">Fill
                                    out the information below to apply for property 100 Main St Unit 10, San Francisco,
                                    CA 94114</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 w-full sm:w-auto">
                            <button
                                class="py-[13px] px-6 rounded-[80px] border border-neutral-primary/10 text-[12px] font-extrabold text-neutral-primary uppercase leading-[100%] tracking-[-2%] flex-1 sm:flex-initial text-center justify-center">
                                Cancel</button>
                            <button
                                class="py-[13px] px-5 rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] flex-1 sm:flex-initial text-center justify-center"
                                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">Submit
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

                        <div class="px-6 py-[25px]">
                            <BaseUploadPhoto title="Photo" description="Upload an optional applicant photo"
                                class="mb-4" />

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px]">
                                <div class="col-span-1">
                                    <BaseInputField label="First Name" placeholder="First Name" />
                                </div>

                                <div class="col-span-1">
                                    <BaseInputField label="Middle Name" placeholder="Middle Name" />
                                </div>

                                <div class="col-span-1">
                                    <BaseInputField label="Last Name" placeholder="Last Name" />
                                </div>

                                <div class="col-span-1">
                                    <BaseInputField label="Company Name" placeholder="Company Name" />
                                </div>

                                <div class="col-span-2 mt-[-2px] flex items-center justify-between">
                                    <label
                                        class="flex items-center gap-2 px-4 py-[9px] bg-neutral-primary/5 rounded-[80px] border border-neutral-primary/10">
                                        <input type="checkbox" class="hidden" v-model="displayedCompany" />
                                        <div
                                            class="w-3 h-3 border border-neutral-primary text-neutral-primary flex items-center justify-center">
                                            <svg v-if="displayedCompany" width="12" height="12" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="4"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span
                                            class="text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-neutral-primary">
                                            Display as a company
                                        </span>
                                    </label>
                                </div>

                                <div class="col-span-1">
                                    <BaseDateField label="Birth Date" />
                                </div>

                                <div class="col-span-1">
                                    <BaseInputField label="Email" placeholder="Email" />
                                </div>

                                <div class="col-span-1">
                                    <BaseInputField label="Phone Number" placeholder="Phone Number" />
                                </div>

                                <div class="col-span-1">
                                    <BaseDateField label="Preferred move-in date" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Additional Occupants -->
                    <div class="w-full border border-neutral-primary/10 rounded-[24px] mb-4 overflow-hidden">
                        <div
                            class="px-6 py-[19px] border-b border-neutral-primary/10 flex flex-wrap items-center justify-between gap-3">
                            <div class="flex-1 min-w-0">
                                <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[1px]">
                                    Additional Occupants</h2>
                                <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                    Include any occupants who will be living with the main applicant, if applicable.</p>
                            </div>
                            <button
                                class="py-[12px] px-5 rounded-[80px] border border-neutral-primary text-neutral-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] flex-1 sm:flex-initial text-center justify-center">
                                <div class="flex items-center gap-2">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add an occupant
                                </div>
                            </button>
                        </div>

                        <div class="p-6">
                            <div class="border border-neutral-primary/10 rounded-[12px] pt-[21px] px-6 pb-[26px]">
                                <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[17px]">Add a
                                    new co-occupant</h2>

                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px] mb-6">
                                    <div class="col-span-1">
                                        <BaseInputField label="First Name" placeholder="First Name" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="Last Name" placeholder="Last Name" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="Email" placeholder="Email" type="email" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="Phone Number" placeholder="Phone Number" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseDateField label="Birth Date" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="Relationship" placeholder="Type here" />
                                    </div>
                                </div>

                                <div class="flex items-center justify-end">
                                    <button
                                        class="text-neutral-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] px-6 py-[13px] rounded-[80px] border border-neutral-primary">
                                        Cancle</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Pets -->
                    <div class="w-full border border-neutral-primary/10 rounded-[24px] mb-4 overflow-hidden">
                        <div
                            class="px-6 py-[19px] border-b border-neutral-primary/10 flex flex-wrap items-center justify-between gap-3">
                            <div class="flex-1 min-w-0">
                                <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[1px]">
                                    Pets</h2>
                                <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                    Provide the information about your pets below if you have any.</p>
                            </div>
                            <button
                                class="py-[12px] px-5 rounded-[80px] border border-neutral-primary text-neutral-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] flex-1 sm:flex-initial text-center justify-center">
                                <div class="flex items-center gap-2">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add a Pet
                                </div>
                            </button>
                        </div>

                        <div class="p-6">
                            <div class="border border-neutral-primary/10 rounded-[12px] pt-[21px] px-6 pb-[26px]">
                                <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[17px]">Add a
                                    new Pet</h2>

                                <div class="mb-[14px]">
                                    <label
                                        class="ml-1 block text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] mb-[5px]">
                                        First Name
                                    </label>
                                    <div
                                        class="flex flex-wrap sm:flex-nowrap items-center gap-[11px] border border-neutral-primary/10 rounded-[8px] pl-4 pr-[25px] py-[11px] bg-[#FAFAFA]">
                                        <button
                                            class="flex items-center gap-[6px] bg-neutral-primary text-white px-[14px] py-[8px] rounded-[16px] text-[12px] font-bold uppercase leading-[100%] tracking-[-2%]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path
                                                    d="M15 22h3a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h3" />
                                                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                                <path d="M12 12v10" />
                                                <path d="m9 15 3-3 3 3" />
                                            </svg>
                                            CHOOSE FILE
                                        </button>
                                        <span
                                            class="text-[12px] font-bold text-neutral-primary/60 leading-[100%] tracking-[-2%] flex-1">No
                                            file chosen</span>
                                    </div>
                                </div>

                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px] mb-6">
                                    <div class="col-span-1">
                                        <BaseSelectField label="Type" placeholder="Select Type"
                                            :options="['Dog', 'Cat', 'Other']" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="Name" placeholder="Name" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="Weight" placeholder="Weight" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="Breed" placeholder="Breed" />
                                    </div>
                                </div>

                                <div class="flex items-center justify-end">
                                    <button
                                        class="text-neutral-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] px-6 py-[13px] rounded-[80px] border border-neutral-primary">
                                        Cancle</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Vehicles -->
                    <div class="w-full border border-neutral-primary/10 rounded-[24px] mb-4 overflow-hidden">
                        <div
                            class="px-6 py-[19px] border-b border-neutral-primary/10 flex flex-wrap items-center justify-between gap-3">
                            <div class="flex-1 min-w-0">
                                <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[1px]">
                                    Vehicles</h2>
                                <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                    Provide the information about your vehicles below.</p>
                            </div>
                            <button
                                class="py-[12px] px-5 rounded-[80px] border border-neutral-primary text-neutral-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] flex-1 sm:flex-initial text-center justify-center">
                                <div class="flex items-center gap-2">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add an vehicle
                                </div>
                            </button>
                        </div>

                        <div class="p-6">
                            <div class="border border-neutral-primary/10 rounded-[12px] pt-[21px] px-6 pb-[26px]">
                                <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[17px]">Add a
                                    new vehicle</h2>

                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px] mb-6">
                                    <div class="col-span-1">
                                        <BaseSelectField label="Type" placeholder="Select Type"
                                            :options="['Car', 'Bike', 'Other']" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="Make" placeholder="Make" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="Model" placeholder="Model" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="Year" placeholder="Year" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="Color" placeholder="Color" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="License Plate" placeholder="License Plate" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseSelectField label="Registration In" placeholder="Choose State"
                                            :options="['CA', 'TX', 'NY', 'FL', 'IL']" />
                                    </div>
                                </div>

                                <div class="flex items-center justify-end">
                                    <button
                                        class="text-neutral-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] px-6 py-[13px] rounded-[80px] border border-neutral-primary">
                                        Cancle</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Residential History -->
                    <div class="w-full border border-neutral-primary/10 rounded-[24px] mb-4 overflow-hidden">
                        <div
                            class="px-6 py-[19px] border-b border-neutral-primary/10 flex flex-wrap items-center justify-between gap-3">
                            <div class="flex-1 min-w-0">
                                <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[1px]">
                                    Residential History</h2>
                                <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                    Provide information about the residential history below.</p>
                            </div>
                            <button
                                class="py-[12px] px-5 rounded-[80px] border border-neutral-primary text-neutral-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] flex-1 sm:flex-initial text-center justify-center">
                                <div class="flex items-center gap-2">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add Residence
                                </div>
                            </button>
                        </div>

                        <div class="p-6 border-b border-neutral-primary/10">
                            <div class="border border-neutral-primary/10 rounded-[12px] pt-[21px] px-6 pb-[26px]">
                                <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-3">Add a
                                    new residence</h2>

                                <div class="flex items-center justify-between mb-[14px]">
                                    <label
                                        class="flex items-center gap-2 px-4 py-[9px] bg-neutral-primary/5 rounded-[80px] border border-neutral-primary/10">
                                        <input type="checkbox" class="hidden" v-model="currentResidence" />
                                        <div
                                            class="w-3 h-3 border border-neutral-primary text-neutral-primary flex items-center justify-center">
                                            <svg v-if="currentResidence" width="12" height="12" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="4"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span
                                            class="text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-neutral-primary">
                                            Current residence?
                                        </span>
                                    </label>
                                </div>

                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px] mb-6">
                                    <div class="col-span-1 sm:col-span-2">
                                        <BaseInputField label="Street Address" placeholder="Street Address" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="City" placeholder="City" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="State" placeholder="State" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="Zip Code" placeholder="Zip Code" />
                                    </div>

                                    <div class="col-span-1 flex items-center justify-start gap-2">
                                        <label @click="residenceType = 'rent'"
                                            class="flex items-center gap-2 px-4 py-[9px] bg-neutral-primary/5 rounded-[80px] border cursor-pointer border-neutral-primary/10">
                                            <div
                                                class="w-3 h-3 rounded-full border border-neutral-primary flex items-center justify-center">
                                                <svg v-if="residenceType === 'rent'" width="12" height="12"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                            </div>
                                            <span
                                                class="text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-neutral-primary">
                                                Rent
                                            </span>
                                        </label>

                                        <label @click="residenceType = 'own'"
                                            class="flex items-center gap-2 px-4 py-[9px] bg-neutral-primary/5 rounded-[80px] border cursor-pointer border-neutral-primary/10">
                                            <div
                                                class="w-3 h-3 rounded-full border border-neutral-primary flex items-center justify-center">
                                                <svg v-if="residenceType === 'own'" width="12" height="12"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                            </div>
                                            <span
                                                class="text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-neutral-primary">
                                                Own
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <div class="flex items-center justify-end">
                                    <button
                                        class="text-neutral-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] px-6 py-[13px] rounded-[80px] border border-neutral-primary">
                                        Cancle</button>
                                </div>
                            </div>
                        </div>

                        <div class="px-6 pt-[22px] pb-[26px]">
                            <label
                                class="ml-1 block text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] mb-[5px]">
                                Additional residence history information
                            </label>
                            <textarea placeholder="Enter any additional residence history information here"
                                class="w-full h-[120px] py-[14px] px-[17px] border border-neutral-primary/10 rounded-[12px] text-[12px] font-medium leading-[100%] tracking-[-2%] text-neutral-primary placeholder:text-neutral-primary/40 resize-none"></textarea>
                        </div>
                    </div>

                    <!-- Income -->
                    <div class="w-full border border-neutral-primary/10 rounded-[24px] mb-4 overflow-hidden">
                        <div
                            class="px-6 py-[19px] border-b border-neutral-primary/10 flex flex-wrap items-center justify-between gap-3">
                            <div class="flex-1 min-w-0">
                                <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[1px]">
                                    Income</h2>
                                <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                    Provide the information about the employment history and other income types below.
                                </p>
                            </div>
                            <button
                                class="py-[12px] px-5 rounded-[80px] border border-neutral-primary text-neutral-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] flex-1 sm:flex-initial text-center justify-center">
                                <div class="flex items-center gap-2">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add Income
                                </div>
                            </button>
                        </div>

                        <div class="p-6 border-b border-neutral-primary/10">
                            <div class="border border-neutral-primary/10 rounded-[12px] pt-[21px] px-6 pb-[26px]">
                                <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-3">Add a
                                    new income</h2>

                                <div class="flex items-center justify-between mb-[14px]">
                                    <label
                                        class="flex items-center gap-2 px-4 py-[9px] bg-neutral-primary/5 rounded-[80px] border border-neutral-primary/10">
                                        <input type="checkbox" class="hidden" v-model="currentResidence" />
                                        <div
                                            class="w-3 h-3 border border-neutral-primary text-neutral-primary flex items-center justify-center">
                                            <svg v-if="currentResidence" width="12" height="12" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="4"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span
                                            class="text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-neutral-primary">
                                            Current residence?
                                        </span>
                                    </label>
                                </div>

                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px] mb-6">
                                    <div class="col-span-1">
                                        <BaseInputField label="Income Type" placeholder="Select Income Type" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="Current Gross Income $"
                                            placeholder="Current Gross Income" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseDateField label="Start Date" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="Company/Employer" placeholder="Company/Employer" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="Position/title" placeholder="Position/title" />
                                    </div>

                                    <div class="col-span-1 sm:col-span-2">
                                        <BaseInputField label="Street Address" placeholder="Street Address" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="City" placeholder="City" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="State" placeholder="State" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="Zip Code" placeholder="Zip Code" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="Supervisor name" placeholder="Supervisor name" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="Supervisor email" placeholder="Supervisor email"
                                            type="email" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="Supervisor phone number"
                                            placeholder="Supervisor phone number" />
                                    </div>

                                </div>

                                <div class="flex items-center justify-end">
                                    <button
                                        class="text-neutral-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] px-6 py-[13px] rounded-[80px] border border-neutral-primary">
                                        Cancle</button>
                                </div>
                            </div>
                        </div>

                        <div class="p-6 pt-[22px] border-b border-neutral-primary/10">
                            <label
                                class="ml-1 block text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] mb-[5px]">
                                Additional income history information
                            </label>
                            <textarea placeholder="Enter any additional income history information here"
                                class="w-full h-[120px] py-[14px] px-[17px] border border-neutral-primary/10 rounded-[12px] text-[12px] font-medium leading-[100%] tracking-[-2%] text-neutral-primary placeholder:text-neutral-primary/40 resize-none"></textarea>
                        </div>

                        <div class="px-6 pt-[22px] pb-[26px]">
                            <p
                                class="text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] mb-[14px]">
                                Please list all of your financial obligations
                            </p>

                            <div class="border border-neutral-primary/10 rounded-[12px]">
                                <div class="overflow-x-auto">
                                <table class="w-full overflow-hidden">
                                    <thead>
                                        <tr class="bg-[#FAFAFA] h-11 border-b border-neutral-primary/10">
                                            <th
                                                class="text-left text-[14px] font-bold text-neutral-primary leading-[100%] tracking-[-2%] pl-6 px-1 py-[13px]">
                                                Name of Creditor</th>
                                            <th
                                                class="text-left text-[14px] font-bold text-neutral-primary leading-[100%] tracking-[-2%] px-1 py-[13px]">
                                                Phone</th>
                                            <th
                                                class="text-left text-[14px] font-bold text-neutral-primary leading-[100%] tracking-[-2%] px-1 py-[13px]">
                                                Monthly Payment Amount</th>
                                            <th
                                                class="text-left text-[14px] font-bold text-neutral-primary leading-[100%] tracking-[-2%] px-1 pr-6 py-[13px]">
                                                Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="obligation in obligations" :key="obligation.id"
                                            class="border-b border-neutral-primary/10">
                                            <td class="pl-5 px-1 py-[17px]">
                                                <input v-model="obligation.creditor" type="text" placeholder=""
                                                    class="w-[204px] px-4 py-[9px] rounded-[80px] border border-neutral-primary/10 text-[12px] font-semibold text-neutral-primary uppercase leading-[100%] tracking-[-2%] placeholder:text-neutral-primary/40 outline-none" />
                                            </td>
                                            <td class="px-1 py-[17px]">
                                                <input v-model="obligation.phone" type="tel" placeholder=""
                                                    class="w-[204px] px-4 py-[9px] rounded-[80px] border border-neutral-primary/10 text-[12px] font-semibold text-neutral-primary uppercase leading-[100%] tracking-[-2%] placeholder:text-neutral-primary/40 outline-none" />
                                            </td>
                                            <td class="px-1 py-[17px]">
                                                <input v-model="obligation.monthlyPayment" type="text" placeholder=""
                                                    class="w-[204px] px-4 py-[9px] rounded-[80px] border border-neutral-primary/10 text-[12px] font-semibold text-neutral-primary uppercase leading-[100%] tracking-[-2%] placeholder:text-neutral-primary/40 outline-none" />
                                            </td>
                                            <td class="px-1 pr-5 pt-[17px] pb-[19px] text-center">
                                                <button @click="removeObligation(obligation.id)"
                                                    class="w-8 h-8 flex items-center justify-center bg-[#F2F2F2] rounded-full text-neutral-primary hover:text-red-500 transition-colors text-[16px] font-bold leading-none mx-auto">
                                                    &times;
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                </div>

                                <div class="p-6">
                                    <button @click="addObligation"
                                        class="px-[19px] py-[10px] rounded-[80px] border border-brand-blue text-brand-blue text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] hover:bg-brand-blue/5 transition-colors">
                                        ADD OBLIGATION
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- Emergency Contact -->
                    <div class="w-full border border-neutral-primary/10 rounded-[24px] mb-4 overflow-hidden">
                        <div
                            class="px-6 py-[19px] border-b border-neutral-primary/10 flex flex-wrap items-center justify-between gap-3">
                            <div class="flex-1 min-w-0">
                                <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[1px]">
                                    Emergency Contact</h2>
                                <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                    Provide the information about the employment history and other income types below.
                                </p>
                            </div>
                            <button
                                class="py-[12px] px-5 rounded-[80px] border border-neutral-primary text-neutral-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] flex-1 sm:flex-initial text-center justify-center">
                                <div class="flex items-center gap-2">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add an Emergency Contact
                                </div>
                            </button>
                        </div>

                        <div class="p-6">
                            <div class="border border-neutral-primary/10 rounded-[12px] pt-[21px] px-6 pb-[26px]">
                                <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[17px]">Add a
                                    new Emergency Contact</h2>

                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px] mb-6">
                                    <div class="col-span-1">
                                        <BaseInputField label="Contact name" placeholder="Contact name" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="Contact Email" placeholder="Contact Email"
                                            type="email" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="Contact Phone number" placeholder="Contact Phone number"
                                            type="tel" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="Relationship to applicant"
                                            placeholder="Relationship to applicant" />
                                    </div>

                                    <div class="col-span-1 sm:col-span-2">
                                        <label
                                            class="ml-1 block text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] mb-[5px]">
                                            Details
                                        </label>
                                        <textarea placeholder="Enter details here"
                                            class="w-full h-[120px] py-[14px] px-[17px] border border-neutral-primary/10 rounded-[12px] text-[12px] font-medium leading-[100%] tracking-[-2%] text-neutral-primary placeholder:text-neutral-primary/40 resize-none"></textarea>
                                    </div>
                                </div>

                                <div class="flex items-center justify-end">
                                    <button
                                        class="text-neutral-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] px-6 py-[13px] rounded-[80px] border border-neutral-primary">
                                        Cancle</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Reference Contact -->
                    <div class="w-full border border-neutral-primary/10 rounded-[24px] mb-4 overflow-hidden">
                        <div
                            class="px-6 py-[19px] border-b border-neutral-primary/10 flex flex-wrap items-center justify-between gap-3">
                            <div class="flex-1 min-w-0">
                                <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[1px]">
                                    Reference Contact</h2>
                                <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                    Provide the information about the reference contacts if you have any.
                                </p>
                            </div>
                            <button
                                class="py-[12px] px-5 rounded-[80px] border border-neutral-primary text-neutral-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] flex-1 sm:flex-initial text-center justify-center">
                                <div class="flex items-center gap-2">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add Reference
                                </div>
                            </button>
                        </div>

                        <div class="p-6">
                            <div class="border border-neutral-primary/10 rounded-[12px] pt-[21px] px-6 pb-[26px]">
                                <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[17px]">Add a
                                    new Reference</h2>

                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px] mb-6">
                                    <div class="col-span-1">
                                        <BaseInputField label="Contact name" placeholder="Contact name" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="Contact Email" placeholder="Contact Email"
                                            type="email" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="Contact Phone number" placeholder="Contact Phone number"
                                            type="tel" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="Relationship to applicant"
                                            placeholder="Relationship to applicant" />
                                    </div>

                                    <div class="col-span-1">
                                        <BaseInputField label="Years known" placeholder="0" type="number" />
                                    </div>
                                </div>

                                <div class="flex items-center justify-end">
                                    <button
                                        class="text-neutral-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] px-6 py-[13px] rounded-[80px] border border-neutral-primary">
                                        Cancle</button>
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
                                Please answer the questions provided below.</p>
                        </div>

                        <div class="p-6">
                            <div v-for="q in backgroundQuestions" :key="q.key"
                                class="border border-neutral-primary/10 rounded-[12px] p-[21px] pb-6">
                                <p class="text-[16px] font-semibold text-neutral-primary leading-[100%] ml-1 mb-3">
                                    {{ q.question }}</p>
                                <div class="flex items-center gap-2">
                                    <label @click="q.answer = 'yes'"
                                        class="flex items-center gap-[7px] px-4 py-[9px] rounded-[80px] border border-neutral-primary/10 bg-neutral-primary/5 cursor-pointer">
                                        <div
                                            class="w-3 h-3 rounded-full border border-neutral-primary flex items-center justify-center">
                                            <div v-if="q.answer === 'yes'"
                                                class="w-[6px] h-[6px] rounded-full bg-neutral-primary"></div>
                                        </div>
                                        <span
                                            class="text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-neutral-primary">YES</span>
                                    </label>
                                    <label @click="q.answer = 'no'"
                                        class="flex items-center gap-[7px] px-4 py-[9px] rounded-[80px] border border-neutral-primary/10 bg-neutral-primary/5 cursor-pointer">
                                        <div
                                            class="w-3 h-3 rounded-full border border-neutral-primary flex items-center justify-center">
                                            <div v-if="q.answer === 'no'"
                                                class="w-[6px] h-[6px] rounded-full bg-neutral-primary"></div>
                                        </div>
                                        <span
                                            class="text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-neutral-primary">NO</span>
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- Attachments -->
                    <div class="w-full border border-neutral-primary/10 rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 pt-[21px] pb-[20px] border-b border-neutral-primary/10">
                            <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[1px]">
                                Attachments</h2>
                            <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">Add
                                documents to strengthen your application.</p>
                        </div>

                        <div class="p-6 pt-[22px]">
                            <label
                                class="ml-1 block text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] mb-[5px]">
                                Attach documents
                            </label>
                            <div
                                class="flex flex-wrap sm:flex-nowrap items-center gap-[11px] border border-neutral-primary/10 rounded-[8px] pl-4 pr-[25px] py-[11px] bg-[#FAFAFA]">
                                <button
                                    class="flex items-center gap-[6px] bg-neutral-primary text-white px-[14px] py-[8px] rounded-[16px] text-[12px] font-bold uppercase leading-[100%] tracking-[-2%]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="M15 22h3a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h3" />
                                        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                        <path d="M12 12v10" />
                                        <path d="m9 15 3-3 3 3" />
                                    </svg>
                                    CHOOSE FILE
                                </button>
                                <span
                                    class="text-[12px] font-bold text-neutral-primary/60 leading-[100%] tracking-[-2%] flex-1">No
                                    file chosen</span>
                            </div>
                        </div>
                    </div>

                    <!-- Applicant Authorization -->
                    <div class="w-full border border-neutral-primary/10 rounded-[24px] mb-4 overflow-hidden">
                        <div class="px-6 pt-[21px] pb-[20px] border-b border-neutral-primary/10">
                            <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-[1px]">
                                Applicant Authorization</h2>
                            <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">Review
                                and authorize verification.</p>
                        </div>

                        <div class="p-6 pb-[26px]">
                            <div
                                class="bg-[#FAFAFA] border border-neutral-primary/10 rounded-[8px] py-3 px-[17px] flex items-start justify-between gap-2">
                                <div class="w-3 h-3 border border-neutral-primary mt-[5px]"></div>
                                <p class="flex-1 text-[12px] font-semibold text-neutral-primary/80 leading-5">
                                    Applicant represents that all statements are true and correct and hereby authorizes
                                    landlord/agent to verify items including, but not limited to, obtaining of a credit
                                    report and agrees to furnish additional credit references upon request.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </main>

        </div>
        
    </div>
</template>
