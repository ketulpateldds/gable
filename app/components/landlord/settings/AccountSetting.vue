<script setup>
const companyDisplay = ref('DISPLAY AS A COMPANY - NO')
const phoneNumber = ref('')
const emailAddress = ref('')
const profile = ref('profile')
const address = ref('')
const unitNumber = ref('')
const city = ref('')
const state = ref('')
const zipCode = ref('')
const accountMode = ref('Landlord')

const fileInput = ref(null)
const fileName = ref('No file chosen')

const triggerFilePicker = () => {
    fileInput.value?.click()
}

const onFileChange = (e) => {
    const file = e.target.files[0]
    fileName.value = file ? file.name : 'No file chosen'
}

// Change Password
const showChangePassword = ref(false)
const currentPassword = ref('')
const newPassword = ref('')
const confirmNewPassword = ref('')

const openChangePassword = () => {
    showChangePassword.value = true
}

const closeChangePassword = () => {
    showChangePassword.value = false
    currentPassword.value = ''
    newPassword.value = ''
    confirmNewPassword.value = ''
}
</script>

<template>
    <div class="border border-[#0F11141A] rounded-[24px]">
        <!-- Change Password View -->
        <div class="pt-[15px] pb-[25px] h-fit" v-if="showChangePassword">
            <div class="px-[14px] pb-[13px] border-b border-[#0F11141A] mb-8 flex items-center gap-3">
                <button @click="closeChangePassword"
                    class="w-8 h-8 border border-[#0F11141A] flex items-center justify-center rounded-full">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F1114" stroke-width="2.5"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M19 12H5" />
                        <path d="M12 19l-7-7 7-7" />
                    </svg>
                </button>
                <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%]">Change Password</h2>
            </div>

            <div class="px-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="mb-[14px]">
                    <label
                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">Current
                        Password</label>
                    <input v-model="currentPassword" type="password" placeholder="CURRENT PASSWORD"
                        class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] bg-primary text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                </div>
            </div>

            <div class="px-6 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div>
                    <label
                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">New
                        Password</label>
                    <input v-model="newPassword" type="password" placeholder="NEW PASSWORD"
                        class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] bg-primary text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />

                    <p class="text-[12px] font-bold text-[#0F111499] leading-4 tracking-[-2%] mt-2">
                        Password must be at least 8 characters and contain 1 number, both upper & lowercase letters
                    </p>
                </div>
                <div>
                    <label
                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">Confirm
                        New Password</label>
                    <input v-model="confirmNewPassword" type="password" placeholder="CONFIRM NEW PASSWORD"
                        class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] bg-primary text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                </div>
            </div>

            <div class="px-6 flex items-center justify-end gap-1">
                <button @click="closeChangePassword"
                    class="py-[13px] px-[21px] rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] hover:bg-[#F5F5F5] transition-colors">
                    CANCEL
                </button>
                <button
                    class="py-[14px] px-[21px] rounded-[80px] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%] hover:opacity-90 transition-opacity"
                    style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                    SAVE
                </button>
            </div>
        </div>

        <!-- Account Settings View -->
        <div class="pt-5 pb-6" v-else>
            <h2 class="px-6 text-[16px] font-bold text-[#0F1114] leading-[100%] pb-5 border-b border-[#0F11141A] mb-6">
                Account Settings</h2>

            <div class="px-6 border-b border-[#0F11141A] pb-6 mb-[22px]">
                <div class="flex flex-col sm:flex-row items-start gap-4">
                    <div class="w-12 h-12 rounded-[12px] bg-[#F2F6FF] flex items-center justify-center shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.1601 15.3598L16.0388 11.2386C15.6634 10.8632 15.0557 10.8632 14.6813 11.2386L10.5601 15.3598"
                                stroke="#004CE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M17.2799 20.1609H5.75988C4.16916 20.1609 2.87988 18.8716 2.87988 17.2809V5.76086C2.87988 4.17014 4.16916 2.88086 5.75988 2.88086H17.2799C18.8706 2.88086 20.1599 4.17014 20.1599 5.76086V17.2809C20.1599 18.8716 18.8706 20.1609 17.2799 20.1609Z"
                                stroke="#004CE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M15.3599 20.1607L9.31867 14.1194C8.94331 13.7441 8.33563 13.7441 7.96123 14.1194L3.30811 18.7725"
                                stroke="#004CE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M8.89447 8.3856C9.03506 8.52619 9.03506 8.75413 8.89447 8.89471C8.75388 9.0353 8.52594 9.0353 8.38535 8.89471C8.24476 8.75413 8.24476 8.52619 8.38535 8.3856C8.52594 8.24501 8.75388 8.24501 8.89447 8.3856"
                                stroke="#004CE5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div
                        class="border border-dashed border-[#0F11141A] rounded-[12px] bg-[#FAFAFA] w-full px-4 pt-[15px] pb-[13px]">
                        <div class="text-[12px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%] mb-[13px]">
                            Profile Image/picture</div>

                        <div
                            class="flex items-center border border-[#0F11141A] rounded-[8px] bg-[#FAFAFA] px-4 py-[11px] gap-[11px]">
                            <input ref="fileInput" type="file" accept="image/png,image/jpg,image/gif" class="hidden"
                                @change="onFileChange" />
                            <button @click="triggerFilePicker"
                                class="flex items-center gap-[6px] px-[14px] py-2 rounded-[16px] bg-[#0F1114] text-primary text-[12px] font-bold uppercase leading-[100%] tracking-[-2%] hover:opacity-80 transition-opacity">
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
                            <span class="text-[12px] font-bold text-[#0F111499] leading-[100%] tracking-[-2%]">
                                {{ fileName }}</span>
                        </div>

                        <div class="text-[12px] font-bold text-[#0F111499] leading-4 tracking-[-2%] mt-[5px]">
                            PNG/JPG recommended. Preview updates instantly.
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-[22px] px-6">
                <div>
                    <label
                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">Company</label>
                    <div class="relative">
                        <select v-model="companyDisplay"
                            class="w-full px-5 py-[15px] rounded-[80px] border border-[#0F11141A] bg-primary text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] uppercase tracking-[-2%] leading-[100%] appearance-none outline-none cursor-pointer">
                            <option selected>DISPLAY AS A COMPANY - NO</option>
                            <option>DISPLAY AS A COMPANY - YES</option>
                        </select>
                        <div class="absolute right-[18px] top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div>
                    <label
                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">Phone
                        Number</label>
                    <input v-model="phoneNumber" type="tel" placeholder="(555) 123-4567"
                        class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 pb-5 border-b border-[#0F11141A] mb-5">
                <div>
                    <label
                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">Email
                        Address</label>
                    <input v-model="emailAddress" type="email" placeholder="EMAIL@DOMAIN.COM"
                        class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />

                    <div class="flex items-center gap-2 mb-[9px] ml-[2px] mt-3">
                        <button
                            class="py-[9px] px-4 rounded-[80px] border border-[#0F111433] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%]">
                            CHANGE
                        </button>
                        <button
                            class="py-[9px] px-4 rounded-[80px] border border-[#0F111433] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%]">
                            VERIFY
                        </button>
                    </div>
                    <p class="text-[12px] font-bold text-[#0F111499] tracking-[-2%] leading-4 mb-4">
                        Your email is email@domain.com</p>
                </div>

                <div>
                    <label
                        class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">Profile</label>
                    <div class="relative">
                        <select v-model="profile"
                            class="w-full px-5 py-[15px] rounded-[80px] border border-[#0F11141A] bg-primary text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] uppercase tracking-[-2%] leading-[100%] appearance-none outline-none cursor-pointer">
                            <option value="profile" selected>PROFILE</option>
                            <option value="landlord">Landlord</option>
                            <option value="property-manager">Property Manager</option>
                        </select>
                        <div class="absolute right-[18px] top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </div>
                    </div>
                    <p class="ml-1 text-[12px] font-bold text-[#0F111499] tracking-[-2%] leading-4 mt-[5px]">
                        Switch tabs (demo) — all saved together.</p>
                </div>
            </div>

            <div
                class="px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-[#0F11141A] mb-5">
                <div>
                    <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[4px]">Password</h2>
                    <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">
                        Current Password: XXXXXXXX</p>
                </div>
                <button @click="openChangePassword"
                    class="self-start sm:self-auto py-[9px] px-4 rounded-[80px] border border-[#0F1114] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] hover:bg-[#F5F5F5] transition-colors">
                    CHANGE PASSWORD
                </button>
            </div>

            <div class="px-6 pb-6 border-b border-[#0F11141A] mb-5">
                <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-1">Address</h2>
                <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%] mb-[18px]">
                    Your mailing address.</p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-[22px]">
                    <div>
                        <label
                            class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">Address</label>
                        <input v-model="address" type="text" placeholder="123 Oak St"
                            class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] bg-primary text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] uppercase tracking-[-2%] leading-[100%] outline-none" />
                    </div>
                    <div>
                        <label
                            class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">Unit
                            #</label>
                        <input v-model="unitNumber" type="text" placeholder="Unit 4"
                            class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] bg-primary text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] uppercase tracking-[-2%] leading-[100%] outline-none" />
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label
                            class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">City</label>
                        <div class="relative">
                            <select v-model="city"
                                class="w-full px-5 py-[15px] rounded-[80px] border border-[#0F11141A] bg-primary text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] uppercase tracking-[-2%] leading-[100%] appearance-none outline-none cursor-pointer">
                                <option value="">123 Oak St</option>
                                <option>Oakland</option>
                            </select>
                            <div class="absolute right-[18px] top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F1114"
                                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-2">
                        <div class="flex-1">
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">State</label>
                            <input v-model="state" type="text" placeholder="CA"
                                class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] bg-primary text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] uppercase tracking-[-2%] leading-[100%] outline-none" />
                        </div>
                        <div class="flex-1">
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">Zip
                                Code</label>
                            <input v-model="zipCode" type="text" placeholder="94612"
                                class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] bg-primary text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] uppercase tracking-[-2%] leading-[100%] outline-none" />
                        </div>
                        <button
                            class="w-full sm:w-auto sm:h-11 py-[14px] sm:py-[15px] px-9 rounded-[80px] text-primary text-[12px] font-extrabold uppercase tracking-[-0.02em] leading-[100%] sm:mt-4"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                            UPDATE
                        </button>
                    </div>
                </div>
            </div>

            <div class="px-6">
                <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-1">Account Mode</h2>
                <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%] mb-3">
                    Choose the mode of your account.</p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div @click="accountMode = 'Landlord'"
                        class="p-4 rounded-[12px] px-4 pt-[13px] pb-[15px] border cursor-pointer transition-all"
                        :class="accountMode === 'Landlord' ? 'border-[#004CE580] bg-[#004CE50D]' : 'border-[#0F11141A]'">
                        <div class="text-[16px] font-bold leading-5 tracking-[-2%] mb-[6px] text-[#0F1114]">
                            Landlord
                        </div>
                        <div class="text-[12px] font-semibold text-[#0F111499] leading-[100%]">
                            For landlords who manage their own properties.
                        </div>
                    </div>

                    <div @click="accountMode = 'Property Manager'"
                        class="p-4 rounded-[12px] px-4 pt-[13px] pb-[15px] border cursor-pointer transition-all"
                        :class="accountMode === 'Property Manager' ? 'border-[#004CE580] bg-[#004CE50D]' : 'border-[#0F11141A]'">
                        <div class="text-[16px] font-bold leading-5 tracking-[-2%] mb-[6px] text-[#0F1114]">
                            Property Manager
                        </div>
                        <div class="text-[12px] font-semibold text-[#0F111499] leading-[100%]">
                            For Property Managers that manage properties for other people.
                        </div>
                    </div>
                </div>

                <button
                    class="py-[14px] px-5 rounded-[80px] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%] hover:opacity-90 transition-opacity"
                    style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                    UPDATE
                </button>
            </div>
        </div>
    </div>
</template>
