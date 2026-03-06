<script setup>
import { ref } from 'vue'

const accountType = ref('INDIVIDUAL')
const entityName = ref('')
const payoutAccount = ref('')
const firstName = ref('')
const lastName = ref('')
const dob = ref('')
const email = ref('')
const phone = ref('')
const ssn = ref('')
const address = ref('')
const cityStateZip = ref('')

const bankAccounts = ref([
    { id: 1, bank: 'Chase', account: '•••• 1234', entity: 'Personal', status: '', default: '', actions: '' },
    { id: 2, bank: 'Wells Fargo', account: '•••• 7788', entity: 'Blueporch LLC', status: '', default: '—', actions: '' }
])
</script>

<template>
    <div>
        <div class="px-6 py-[14px] border-b border-[#0F11141A] flex items-center justify-between">
            <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%]">Online Payments</h2>
            <div class="flex items-center gap-2">
                <button
                    class="py-[9px] px-4 rounded-[80px] border border-[#0F1114] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%]">
                    CHANGE PLAN
                </button>
                <button
                    class="py-[9px] px-4 rounded-[80px] border border-[#0F1114] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%]">
                    ACTIONS
                </button>
            </div>
        </div>

        <div class="p-6 border-b border-[#0F11141A]">
            <div class="border border-[#0F11141A] rounded-[12px]">
                <h3
                    class="text-[14px] font-bold text-[#0F1114] leading-[100%] pt-[14px] px-4 pb-[13px] border-b border-[#0F11141A]">
                    Get payments online!</h3>

                <div class="px-4 pt-[13px] pb-[18px]">
                    <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%] mb-[13px]">Accept ACH, credit
                        and debit card payments online straight to your bank accounts. Add multiple bank accounts and
                        entities. Tenant pays a per-transaction processing fee.
                    </p>

                    <div class="flex flex-wrap items-center gap-2">
                        <button
                            class="py-[14px] px-[20px] rounded-[80px] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%] hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                            GET STARTED
                        </button>
                        <button
                            class="py-[13px] px-4 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] hover:bg-[#F5F5F5] transition-colors whitespace-nowrap shrink-0">
                            TOGGLE CONNECTED (DEMO)
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="px-6 pt-[21px] pb-5 border-b border-[#0F11141A]">
            <h3 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[6px]">Online Payments</h3>
            <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%] mb-[13px]">
                Accept ACH, credit and debit card payments online straight to your bank accounts. Add multiple bank
                accounts and entities. Tenant pays a per-transaction processing fee.
            </p>

            <div class="flex items-center gap-2 mb-[21px]">
                <button @click="accountType = 'INDIVIDUAL'"
                    class="h-9 px-4 rounded-[80px] border flex items-center gap-[7px] transition-colors shrink-0"
                    :class="accountType === 'INDIVIDUAL' ? 'border-[#004CE580] bg-[#004CE50D]' : 'border-[#0F11141A] bg-[#0F111405]'">
                    <div class="w-3 h-3 rounded-full border-2 flex items-center justify-center shrink-0"
                        :class="accountType === 'INDIVIDUAL' ? 'border-[#004CE5]' : 'border-[#0F1114]'">
                        <div v-if="accountType === 'INDIVIDUAL'" class="w-[6px] h-[6px] rounded-full bg-[#004CE5]">
                        </div>
                    </div>
                    <span class="text-[12px] font-semibold uppercase tracking-[-2%] leading-[100%]"
                        :class="accountType === 'INDIVIDUAL' ? 'text-[#004CE5]' : 'text-[#0F1114]'">INDIVIDUAL</span>
                </button>

                <button @click="accountType = 'BUSINESS'"
                    class="h-9 px-4 rounded-[80px] border flex items-center gap-[7px] transition-colors shrink-0"
                    :class="accountType === 'BUSINESS' ? 'border-[#004CE580] bg-[#004CE50D]' : 'border-[#0F11141A] bg-[#0F111405]'">
                    <div class="w-3 h-3 rounded-full border-2 flex items-center justify-center shrink-0"
                        :class="accountType === 'BUSINESS' ? 'border-[#004CE5]' : 'border-[#0F1114]'">
                        <div v-if="accountType === 'BUSINESS'" class="w-[6px] h-[6px] rounded-full bg-[#004CE5]"></div>
                    </div>
                    <span
                        class="text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%]">BUSINESS</span>
                </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label
                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">ENTITY
                        / LLC NAME</label>
                    <input v-model="entityName" type="text" placeholder="PERSONAL"
                        class="w-full py-[14px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] placeholder:text-[#0F111466] outline-none" />

                    <p class="ml-1 mt-[5px] text-[12px] font-bold text-[#0F111499] leading-4 tracking-[-2%]">Use
                        this to manage multiple entities.</p>
                </div>
                <div>
                    <label
                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">DEFAULT
                        PAYOUT ACCOUNT</label>
                    <div class="relative">
                        <select v-model="payoutAccount"
                            class="w-full py-[15px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] placeholder:text-[#0F111466] appearance-none outline-none cursor-pointer bg-white">
                            <option value="" disabled selected hidden>CHASE •••• 1234</option>
                            <option value="chase">CHASE •••• 1234</option>
                        </select>
                        <div class="absolute right-[18px] top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="#0F1114" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="1 1 5 5 9 1"></polyline>
                            </svg>
                        </div>
                    </div>
                    <p class="ml-1 mt-[5px] text-[12px] font-bold text-[#0F111499] leading-4 tracking-[-2%]">Choose
                        where payouts are deposited.</p>
                </div>
            </div>
        </div>

        <div class="p-6 pt-[21px] border-b border-[#0F11141A]">
            <h3 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[18px]">Individual</h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-[22px] mb-[22px]">
                <div>
                    <label
                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">FIRST
                        NAME</label>
                    <input v-model="firstName" type="text" placeholder="FIRST NAME"
                        class="w-full py-[14px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] placeholder:text-[#0F111466] outline-none" />
                </div>

                <div>
                    <label
                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">LAST
                        NAME</label>
                    <input v-model="lastName" type="text" placeholder="LAST NAME"
                        class="w-full py-[14px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] placeholder:text-[#0F111466] outline-none" />
                </div>

                <div>
                    <label
                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">DATE
                        OF BIRTH</label>
                    <div class="relative">
                        <input v-model="dob" type="date" placeholder="DD-MM-YYYY"
                            class="w-full py-[14px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] placeholder:text-[#0F111466] appearance-none outline-none cursor-pointer bg-white">
                        <!-- <div class="absolute right-[18px] top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </div> -->
                    </div>
                </div>

                <div>
                    <label
                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">EMAIL
                        ADDRESS</label>
                    <input v-model="email" type="email" placeholder="EMAIL@DOMAIN.COM"
                        class="w-full py-[14px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] placeholder:text-[#0F111466] outline-none" />
                </div>

                <div>
                    <label
                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">PHONE
                        NUMBER</label>
                    <input v-model="phone" type="text" placeholder="(555) 123-4567"
                        class="w-full py-[14px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] placeholder:text-[#0F111466] outline-none" />
                </div>

                <div>
                    <label
                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">SSN</label>
                    <input v-model="ssn" type="password" placeholder="•••••••"
                        class="w-full py-[14px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] placeholder:text-[#0F111466] outline-none" />
                </div>

                <div>
                    <label
                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">HOME
                        ADDRESS</label>
                    <input v-model="address" type="text" placeholder="123 OAK ST"
                        class="w-full py-[14px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] placeholder:text-[#0F111466] outline-none" />
                </div>

                <div>
                    <label
                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">CITY,
                        STATE, ZIP</label>
                    <input v-model="cityStateZip" type="text" placeholder="OAKLAND, CA 94610"
                        class="w-full py-[14px] px-5 rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] placeholder:text-[#0F111466] outline-none" />
                </div>
            </div>

            <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%] mb-[21px]">
                By clicking Submit, you agree to the Stripe Services Agreement and the Stripe Connected Account
                Agreement, and you certify that the information you have provided is complete and correct.
            </p>

            <button
                class="py-[14px] px-5 rounded-[80px] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%] shrink-0 hover:opacity-90 transition-opacity"
                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                SUBMIT
            </button>
        </div>

        <!-- Bank Accounts Table -->
        <div class="px-6 pt-[21px] pb-[26px]">
            <h3 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[6px]">Bank accounts</h3>
            <p class="text-[12px] font-semibold text-[#0F111499] leading-[100%] mb-[22px]">
                List of added bank accounts = default payout account.
            </p>

            <div class="border border-[#0F11141A] rounded-[12px] overflow-hidden mb-[22px]">
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr class="bg-[#FAFAFA] border-b border-[#0F11141A] h-11">
                                <th
                                    class="pl-6 pr-4 text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                    Bank</th>
                                <th class="px-4 text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                    Account</th>
                                <th class="px-4 text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                    Entity</th>
                                <th class="px-4 text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                    Status</th>
                                <th class="px-4 text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                    Default</th>
                                <th
                                    class="pl-4 pr-6 text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] w-px">
                                    Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in bankAccounts" :key="item.id"
                                :class="index !== bankAccounts.length - 1 ? 'border-b border-[#0F11141A]' : ''">
                                <td
                                    class="pl-6 pr-4 py-[21px] text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                    {{ item.bank }}</td>
                                <td
                                    class="px-4 py-[21px] text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                    {{ item.account }}</td>
                                <td
                                    class="px-4 py-[21px] text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                    {{ item.entity }}</td>
                                <td
                                    class="px-4 py-[21px] text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                    {{ item.status }}</td>
                                <td
                                    class="px-4 py-[21px] text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%]">
                                    {{ item.default }}</td>
                                <td class="pl-4 pr-6 py-[14px] text-right">
                                    <div class="flex justify-end">
                                        <button
                                            class="w-8 h-8 rounded-full bg-[#0F1114] flex items-center justify-center hover:opacity-80 transition-opacity">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <button
                class="py-[12px] pl-[18px] pr-5 rounded-[80px] flex items-center gap-[6px] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%] hover:opacity-90 transition-opacity shrink-0"
                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                    stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                ADD BANK ACCOUNT
            </button>
        </div>
    </div>
</template>
