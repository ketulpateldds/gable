<script setup>
import { ref, watch, onUnmounted } from 'vue'

const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true
    }
})

defineEmits(['close'])

const selectedProperty = ref('123 OAK - UNIT 4')
const leaseType = ref('FIXED')
const leaseNumber = ref('')
const startDate = ref('2026-02-24')
const endDate = ref('2027-02-24')
const insuranceRequired = ref(false)
const rentRequired = ref(false)
const dateDue = ref('25')
const frequency = ref('Monthly')
const markAllPaid = ref(false)

const chosenTenants = ref(['TAYLOR GREEN'])
const allTenants = ['TAYLOR GREEN', 'JORDAN LEE', 'AVERY PATEL', 'MORGAN DIAZ']
const chooseUtility = ref(["Electricity"])
const allUtility = ["Electricity", "GAS", "Water", "INTERNET", "SEWER", "TRASH"]

const deposits = ref([
    { type: 'Security Deposit', amount: '' }
])

const dependents = ref([
    { name: '', relationship: '' }
])

const transactions = ref([
    { name: '', amount: '', frequency: 'ONE-TIME', startDate: '2027-02-25' }
])

const lateFeesEnabled = ref(false)

const responsibilities = ref([
    { utility: 'Electricity', party: 'Tenants' }
])

const toggleTenant = (tenant) => {
    if (chosenTenants.value.includes(tenant)) {
        chosenTenants.value = chosenTenants.value.filter(t => t !== tenant)
    } else {
        chosenTenants.value.push(tenant)
    }
}

const toggleUtility = (utility) => {
    if (chooseUtility.value.includes(utility)) {
        chooseUtility.value = chooseUtility.value.filter(t => t !== utility)
    } else {
        chooseUtility.value.push(utility)
    }
}

const addDeposit = () => {
    deposits.value.push({ type: 'Security Deposit', amount: '' })
}

const removeDeposit = (index) => {
    deposits.value.splice(index, 1)
}

const addDependent = () => {
    dependents.value.push({ name: '', relationship: '' })
}

const removeDependent = (index) => {
    dependents.value.splice(index, 1)
}

const addTransaction = () => {
    transactions.value.push({ name: '', amount: '', frequency: 'ONE-TIME', startDate: '2027-02-25' })
}

const removeTransaction = (index) => {
    transactions.value.splice(index, 1)
}

const addResponsibility = () => {
    responsibilities.value.push({ utility: 'Electricity', party: 'Tenants' })
}

const removeResponsibility = (index) => {
    responsibilities.value.splice(index, 1)
}

watch(() => props.isOpen, (newVal) => {
    if (newVal) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
})

onUnmounted(() => {
    document.body.style.overflow = ''
})
</script>

<template>
    <Teleport to="body">

        <div class="relative z-[100]">

            <Transition enter-active-class="transition-opacity duration-300 ease-out" enter-from-class="opacity-0"
                enter-to-class="opacity-100" leave-active-class="transition-opacity duration-200 ease-in"
                leave-from-class="opacity-100" leave-to-class="opacity-0">
                <div v-if="isOpen" class="fixed inset-0 bg-[#0F111466] backdrop-blur-[2px]" @click="$emit('close')">
                </div>
            </Transition>

            <Transition enter-active-class="transition-transform duration-300 ease-out transform"
                enter-from-class="translate-x-full" enter-to-class="translate-x-0"
                leave-active-class="transition-transform duration-300 ease-in transform"
                leave-from-class="translate-x-0" leave-to-class="translate-x-full">
                <div v-if="isOpen"
                    class="fixed inset-y-0 right-0 z-[101] w-full sm:w-[544px] bg-primary h-full sm:rounded-l-[32px] px-4 sm:px-6 pt-5 pb-6 shadow-2xl flex flex-col overflow-hidden">

                    <!-- Close button -->
                    <button @click="$emit('close')"
                        class="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 p-2 rounded-full border border-neutral-primary/10 flex items-center justify-center text-neutral-primary z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <!-- Header -->
                    <div class="mb-[18px] mt-2 sm:mt-0">
                        <h2 class="text-[20px] font-bold text-neutral-primary leading-[100%] mb-[3px]">Move in</h2>
                        <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">Set up
                            lease, tenants, payments, deposits, and utilities.</p>
                    </div>

                    <!-- Form -->
                    <div class="flex-1 overflow-y-auto scrollbar-hide flex flex-col">
                        <div class="mb-4 text-left">
                            <BaseSelectField label="SELECT PROPERTY" v-model="selectedProperty"
                                :options="['123 OAK - UNIT 4']" />
                            <p class="text-[12px] font-bold text-neutral-primary/60 leading-4 tracking-[-2%] mt-[5px]">
                                Select a property dropdown</p>
                        </div>

                        <!-- Lease Terms -->
                        <div class="mb-5">
                            <h3 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-1">Lease Terms</h3>
                            <p
                                class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%] mb-[18px]">
                                Select the lease type, start and end dates</p>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px]">
                                <div class="col-span-1 sm:col-span-1">
                                    <BaseSelectField label="SELECT FIXED OR MONTH-TO-MONTH" v-model="leaseType"
                                        :options="['FIXED', 'MONTH-TO-MONTH']" />
                                </div>

                                <div class="col-span-1">
                                    <BaseInputField label="LEASE #" v-model="leaseNumber" placeholder="OPTIONAL" />
                                </div>

                                <div class="col-span-1">
                                    <BaseDateField label="STARTS ON" v-model="startDate" />
                                </div>

                                <div class="col-span-1">
                                    <BaseDateField label="ENDS ON" v-model="endDate" />
                                </div>
                            </div>
                        </div>

                        <!-- Tenants -->
                        <div class="mb-5">
                            <h3 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-1">Tenants</h3>
                            <p
                                class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%] mb-[18px]">
                                If
                                your tenant is connected with you, the lease will be automatically shared with them</p>

                            <label
                                class="ml-1 block text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] mb-[5px]">CHOOSE
                                TENANTS</label>

                            <div class="flex flex-wrap gap-2">
                                <button v-for="tenant in allTenants" :key="tenant" @click="toggleTenant(tenant)"
                                    class="py-[9px] px-4 rounded-[80px] border border-neutral-primary/10 bg-neutral-primary/5 text-[12px] text-neutral-primary font-semibold uppercase leading-[100%] tracking-[-2%] flex items-center gap-2">
                                    <div v-if="chosenTenants.includes(tenant)"
                                        class="w-3 h-3 bg-neutral-primary flex items-center justify-center">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white"
                                            stroke-width="4">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <div v-else class="w-3 h-3 border border-neutral-primary"></div>
                                    {{ tenant }}
                                </button>
                            </div>
                        </div>

                        <!-- Renters Insurance -->
                        <div class="mb-5">
                            <h3 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-1">Renters Insurance
                            </h3>
                            <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%] mb-3">
                                Require
                                renters insurance or allow tenants to submit proof of an existing policy.</p>

                            <button @click="insuranceRequired = !insuranceRequired"
                                class="py-[9px] px-4 rounded-[80px] border border-neutral-primary/10 bg-neutral-primary/5 text-[12px] text-neutral-primary font-semibold uppercase leading-[100%] tracking-[-2%] flex items-center gap-2">
                                <div v-if="insuranceRequired"
                                    class="w-3 h-3 bg-neutral-primary flex items-center justify-center">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white"
                                        stroke-width="4">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <div v-else class="w-3 h-3 border border-neutral-primary"></div>
                                INSURANCE REQUIRED BEFORE SIGNING
                            </button>
                        </div>

                        <!-- Dependents -->
                        <div class="mb-5">
                            <div class="flex items-center justify-between gap-10 mb-[18px]">
                                <div>
                                    <h3 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-1">
                                        Dependents
                                    </h3>
                                    <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                        Dependents live with the property but do not have access to Tenant Portal or
                                        online payments.</p>
                                </div>
                                <button @click="addDependent"
                                    class="pl-[18px] pr-[21px] py-3 rounded-[80px] border border-neutral-primary flex items-center gap-[10px] text-[12px] font-extrabold text-neutral-primary uppercase leading-[100%] tracking-[-2%] shrink-0">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2.5">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    ADD DEPENDENT
                                </button>
                            </div>

                            <div v-for="(dep, index) in dependents" :key="index"
                                class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px] items-end">
                                <div>
                                    <BaseInputField label="NAME" v-model="dep.name" placeholder="FULL NAME" />
                                </div>
                                <div class="flex items-center gap-3">
                                    <div class="flex-1">
                                        <BaseInputField label="RELATIONSHIP" v-model="dep.relationship"
                                            placeholder="CHILD, SPOUSE, ROOMMATE..." />
                                    </div>
                                    <button @click="removeDependent(index)"
                                        class="mt-[17px] h-8 w-8 flex items-center justify-center text-neutral-primary hover:opacity-70 transition-opacity">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Rent Payments -->
                        <div class="mb-5">
                            <h3 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-1">Rent Payments
                            </h3>
                            <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%] mb-3">
                                Enter the
                                rent amount, payment frequency, and start date.</p>

                            <button @click="rentRequired = !rentRequired"
                                class="mb-[14px] py-[9px] px-4 rounded-[80px] border border-neutral-primary/10 bg-neutral-primary/5 text-[12px] text-neutral-primary font-semibold uppercase leading-[100%] tracking-[-2%] transition-colors flex items-center gap-2 text-left">
                                <div v-if="rentRequired"
                                    class="w-3 h-3 bg-neutral-primary flex items-center justify-center shrink-0">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white"
                                        stroke-width="4">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <div v-else class="w-3 h-3 border border-neutral-primary shrink-0"></div>
                                Enable Recurring Rent Invoicing
                            </button>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px] mb-4">
                                <div class="col-span-1">
                                    <BaseDateField label="First rent date" v-model="startDate" />
                                </div>

                                <div class="col-span-2 sm:col-span-1">
                                    <BaseSelectField label="Date due (Day)" v-model="dateDue"
                                        :options="['10', '15', '20', '25']" />
                                </div>

                                <div class="col-span-1">
                                    <BaseSelectField label="Frequency" v-model="frequency"
                                        :options="['Monthly', 'Weekly', 'Bi-weekly', 'Yearly']" />
                                </div>

                                <div class="col-span-1">
                                    <BaseInputField label="Total amount" v-model="totalAmount" placeholder="0" />
                                </div>
                            </div>

                            <button @click="markAllPaid = !markAllPaid"
                                class="py-[9px] px-4 rounded-[80px] border border-neutral-primary/10 bg-neutral-primary/5 text-[12px] text-neutral-primary font-semibold uppercase leading-[100%] tracking-[-2%] transition-colors flex items-center gap-2 text-left">
                                <div v-if="markAllPaid"
                                    class="w-3 h-3 bg-neutral-primary flex items-center justify-center shrink-0">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white"
                                        stroke-width="4">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <div v-else class="w-3 h-3 border border-neutral-primary shrink-0"></div>
                                mark all past invoice as paid
                            </button>
                        </div>

                        <!-- Deposits -->
                        <div class="mb-5">
                            <div class="flex items-center justify-between gap-10 mb-[18px]">
                                <div>
                                    <h3 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-1">Deposits
                                    </h3>
                                    <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                        Include any additional deposits for your lease here.</p>
                                </div>
                                <button @click="addDeposit"
                                    class="pl-[18px] pr-[21px] py-3 rounded-[80px] border border-neutral-primary flex items-center gap-[10px] text-[12px] font-extrabold text-neutral-primary uppercase leading-[100%] tracking-[-2%] shrink-0">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2.5">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    ADD DEPOSIT
                                </button>
                            </div>

                            <div v-for="(dep, index) in deposits" :key="index"
                                class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px] mb-4 items-end">
                                <div>
                                    <BaseSelectField label="Type" v-model="dep.type"
                                        :options="['Security Deposit', 'Pet Deposit', 'Other']" />
                                </div>

                                <div class="flex items-center gap-3">
                                    <div class="flex-1">
                                        <BaseInputField label="Amount" v-model="dep.amount" placeholder="0" />
                                    </div>
                                    <button @click="removeDeposit(index)"
                                        class="mt-[17px] h-8 w-8 flex items-center justify-center text-neutral-primary hover:opacity-70 transition-opacity">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Other Lease Transactions -->
                        <div class="mb-5">
                            <div class="flex items-center justify-between gap-6 mb-[18px]">
                                <div>
                                    <h3 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-1">Other
                                        Lease
                                        Transactions</h3>
                                    <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                        Add one-time or recurring invoice charges included in the lease.</p>
                                </div>
                                <button @click="addTransaction"
                                    class="pl-[18px] pr-[21px] py-3 rounded-[80px] border border-neutral-primary flex items-center gap-[10px] text-[12px] font-extrabold text-neutral-primary uppercase leading-[100%] tracking-[-2%] shrink-0">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2.5">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    ADD TRANSACTION
                                </button>
                            </div>

                            <div v-for="(trans, index) in transactions" :key="index"
                                class="flex items-center gap-2 sm:gap-[6px] mb-4 group">
                                <div class="flex-1">
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 mb-[14px]">
                                        <div>
                                            <BaseInputField label="Name" v-model="trans.name"
                                                placeholder="EXAMPLE: MOVE - IN FEE" />
                                        </div>
                                        <div>
                                            <BaseInputField label="Amount" v-model="trans.amount" placeholder="0" />
                                        </div>
                                    </div>

                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px]">
                                        <div>
                                            <BaseSelectField label="Frequency" v-model="trans.frequency"
                                                :options="['ONE-TIME', 'MONTHLY', 'WEEKLY']" />
                                        </div>

                                        <div>
                                            <BaseDateField label="Start Date" v-model="trans.startDate" />
                                        </div>
                                    </div>

                                    <button @click="removeTransaction(index)"
                                        class="h-8 w-8 flex items-center justify-center text-neutral-primary hover:opacity-70 transition-opacity shrink-0">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <!-- Late Fees -->
                            <div class="mb-5">
                                <h3 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-1">Late Fees
                                </h3>
                                <p
                                    class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%] mb-3">
                                    Enable
                                    both fees; daily fee begins the day after the one-time fee is applied.</p>

                                <div class="flex flex-wrap items-center gap-2">
                                    <button @click="lateFeesEnabled = !lateFeesEnabled"
                                        class="py-[9px] px-4 rounded-[80px] border border-neutral-primary/10 bg-neutral-primary/5 text-[12px] text-neutral-primary font-semibold uppercase leading-[100%] tracking-[-2%] transition-colors flex items-center gap-2 text-left">
                                        <div v-if="lateFeesEnabled"
                                            class="w-3 h-3 bg-neutral-primary flex items-center justify-center shrink-0">
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white"
                                                stroke-width="4">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div v-else class="w-3 h-3 border border-neutral-primary shrink-0"></div>
                                        One time rent late fee
                                    </button>

                                    <button @click="lateFeesEnabled = !lateFeesEnabled"
                                        class="py-[9px] px-4 rounded-[80px] border border-neutral-primary/10 bg-neutral-primary/5
                                text-[12px] text-neutral-primary font-semibold uppercase leading-[100%] tracking-[-2%] transition-colors flex items-center gap-2 text-left">
                                        <div v-if="lateFeesEnabled"
                                            class="w-3 h-3 bg-neutral-primary flex items-center justify-center shrink-0">
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white"
                                                stroke-width="4">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div v-else class="w-3 h-3 border border-neutral-primary shrink-0"></div>
                                        Daily rent late fee
                                    </button>
                                </div>
                            </div>

                            <!-- Responsibilities & Providers -->
                            <div class="mb-5">
                                <div class="flex items-center justify-between gap-10 mb-[18px]">
                                    <div>
                                        <h3 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-1">
                                            Responsibilities & Providers</h3>
                                        <p
                                            class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">
                                            Choose who is responsible for utilities each month.</p>
                                    </div>
                                    <button @click="addResponsibility"
                                        class="pl-[18px] pr-[21px] py-3 rounded-[80px] border border-neutral-primary flex items-center gap-[10px] text-[12px] font-extrabold text-neutral-primary uppercase leading-[100%] tracking-[-2%] hover:bg-slate-50 transition-colors shrink-0">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2.5">
                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                        </svg>
                                        ADD Responsibility
                                    </button>
                                </div>

                                <div v-for="(item, index) in responsibilities" :key="index"
                                    class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px] mb-4 items-end">
                                    <div>
                                        <BaseSelectField label="Utility" v-model="item.utility"
                                            :options="[{ label: 'ONE-TIME', value: 'ONE-TIME' }, { label: 'MONTHLY', value: 'MONTHLY' }, { label: 'WEEKLY', value: 'WEEKLY' }]" />
                                    </div>
                                    <div class="flex items-center gap-3">
                                        <div class="flex-1">
                                            <BaseSelectField label="Responsible party" v-model="item.party"
                                                :options="[{ label: 'Tenants', value: 'Tenants' }, { label: 'Landlord', value: 'Landlord' }, { label: 'Shared', value: 'Shared' }]" />
                                        </div>
                                        <button @click="removeResponsibility(index)"
                                            class="mt-[17px] h-8 w-8 flex items-center justify-center text-[#0F1114] hover:opacity-70 transition-opacity">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2">
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- Utility Providers Settings -->
                            <div>
                                <h3 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-1">Utility
                                    Providers
                                    Settings</h3>
                                <p
                                    class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%] mb-3">
                                    Select which services tenants must set up.</p>

                                <div class="flex flex-wrap gap-1">
                                    <button v-for="utility in allUtility" :key="utility" @click="toggleUtility(utility)"
                                        class="py-[9px] px-4 rounded-[80px] border border-neutral-primary/10 bg-neutral-primary/5 text-[12px] text-neutral-primary font-semibold uppercase leading-[100%] tracking-[-2%] transition-colors flex items-center gap-2">
                                        <div v-if="chooseUtility.includes(utility)"
                                            class="w-3 h-3 bg-neutral-primary flex items-center justify-center">
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white"
                                                stroke-width="4">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div v-else class="w-3 h-3 border border-neutral-primary"></div>
                                        {{ utility }}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Buttons -->
                        <div
                            class="mt-auto pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 sm:gap-2">
                            <button @click="$emit('close')"
                                class="py-[13px] px-5 rounded-[80px] border border-neutral-primary text-[12px] font-extrabold text-neutral-primary uppercase leading-[100%] tracking-[-2%] hover:bg-slate-50 transition-colors">CANCEL</button>
                            <button
                                class="py-[14px] px-5 rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] hover:opacity-95 transition-opacity"
                                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                                Send Invite
                            </button>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </Teleport>
</template>
