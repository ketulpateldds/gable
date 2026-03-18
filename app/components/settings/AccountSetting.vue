<script setup>
const firstName = ref('')
const lastName = ref('')
const phoneNumber = ref('')
const companyName = ref('')
const address = ref('')
const state = ref('')
const zipCode = ref('')

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
    <div>
        <div class="border border-[#0F11141A] rounded-[24px] mb-4">
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
                            Password must be at least 8 characters and contain 1 number, both upper & lowercase
                            letters
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
            <div class="pt-5" v-else>
                <h2 class="px-6 text-[16px] font-bold text-[#0F1114] leading-[100%] pb-5 border-b border-[#0F11141A]">
                    Account Settings</h2>

                <div class="p-6 border-b border-[#0F11141A] pt-5">
                    <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-1">Profile</h2>
                    <p class="text-[12px] font-bold text-[#0F111499] leading-4 tracking-[-2%] mb-5">Profile details.
                        Your
                        profile is visible to your connected users.</p>

                    <div class="flex flex-col sm:flex-row items-start gap-4 mb-[14px]">
                        <div class="w-12 h-12 rounded-[12px] bg-[#F2F6FF] flex items-center justify-center shrink-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20.1601 15.3598L16.0388 11.2386C15.6634 10.8632 15.0557 10.8632 14.6813 11.2386L10.5601 15.3598"
                                    stroke="#004CE5" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M17.2799 20.1609H5.75988C4.16916 20.1609 2.87988 18.8716 2.87988 17.2809V5.76086C2.87988 4.17014 4.16916 2.88086 5.75988 2.88086H17.2799C18.8706 2.88086 20.1599 4.17014 20.1599 5.76086V17.2809C20.1599 18.8716 18.8706 20.1609 17.2799 20.1609Z"
                                    stroke="#004CE5" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M15.3599 20.1607L9.31867 14.1194C8.94331 13.7441 8.33563 13.7441 7.96123 14.1194L3.30811 18.7725"
                                    stroke="#004CE5" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M8.89447 8.3856C9.03506 8.52619 9.03506 8.75413 8.89447 8.89471C8.75388 9.0353 8.52594 9.0353 8.38535 8.89471C8.24476 8.75413 8.24476 8.52619 8.38535 8.3856C8.52594 8.24501 8.75388 8.24501 8.89447 8.3856"
                                    stroke="#004CE5" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>

                        <div
                            class="border border-dashed border-[#0F11141A] rounded-[12px] bg-[#FAFAFA] w-full px-4 pt-[15px] pb-[13px]">
                            <div
                                class="text-[12px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%] mb-[13px]">
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

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px] mb-3">
                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">First
                                Name</label>
                            <input v-model="firstName" type="text" placeholder="First Name"
                                class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                        </div>

                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">Last
                                Name</label>
                            <input v-model="lastName" type="text" placeholder="Last Name"
                                class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                        </div>

                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">Company</label>
                            <input v-model="companyName" type="text" placeholder="Company"
                                class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                        </div>

                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">Phone
                                Number</label>
                            <input v-model="phoneNumber" type="tel" placeholder="Phone Number"
                                class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                        </div>
                    </div>

                    <div class="flex items-center justify-start mb-[25px]">
                        <div
                            class="bg-[#0F111405] border border-[#0F11141A] rounded-[80px] py-[9px] px-4 flex items-center gap-2">
                            <div class="h-3 w-3 border border-[#0F1114]"></div>
                            <div
                                class="text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%]">
                                Display as a Company</div>
                        </div>
                    </div>

                    <div class="flex items-center justify-end">
                        <button
                            class="py-[14px] px-5 rounded-[80px] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%]"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                            Update
                        </button>
                    </div>
                </div>

                <div class="p-6 pt-5 border-b border-[#0F11141A]">
                    <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-3">Email address</h2>

                    <div
                        class="bg-[#F2F6FF] border border-[#004CE51A] rounded-[40px] py-[6px] px-3 text-[12px] font-bold text-[#004CE5CC] leading-[100%] mb-[10px] w-fit">
                        Verified
                    </div>

                    <p class="text-[12px] font-bold text-[#0F111499] leading-[100%] mb-[21px]">Your email
                        is email@domain.com</p>

                    <div class="flex items-center justify-end">
                        <button
                            class="self-start sm:self-auto py-[13px] px-4 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase tracking-[-2%] leading-[100%]">
                            CHANGE
                        </button>
                    </div>
                </div>

                <div class="p-6 pt-5 border-b border-[#0F11141A]">
                    <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-1">Password</h2>
                    <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%] mb-5">You haven't
                        changed the password yet.</p>

                    <div class="flex items-center justify-end">
                        <button @click="openChangePassword"
                            class="self-start sm:self-auto py-[13px] px-4 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase tracking-[-2%] leading-[100%]">
                            CHANGE
                        </button>
                    </div>
                </div>

                <div class="p-6 pt-5 border-b border-[#0F11141A]">
                    <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-1">Address</h2>
                    <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%] mb-[18px]">
                        Your mailing address.</p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px] mb-6">
                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">Address</label>
                            <input v-model="address" type="text" placeholder="Address"
                                class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                        </div>

                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">State</label>
                            <input v-model="state" type="text" placeholder="State"
                                class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                        </div>

                        <div>
                            <label
                                class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">Zip
                                Code</label>
                            <input v-model="zipCode" type="text" placeholder="Zip Code"
                                class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                        </div>
                    </div>

                    <div class="flex items-center justify-end">
                        <button
                            class="py-[14px] px-5 rounded-[80px] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%]"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                            Update
                        </button>
                    </div>
                </div>

                <div class="p-6 pt-5">
                    <!-- <div class="p-6 pt-5 border-b border-[#0F11141A]"> -->
                    <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-1">Additional settings</h2>
                    <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%] mb-[18px]">
                        Customize the additional settings of your account.</p>

                    <div class="mb-6">
                        <label
                            class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">Time
                            Zone</label>
                        <div class="relative">
                            <select
                                class="w-full h-11 px-5 py-[15px] rounded-[80px] border border-[#0F11141A] text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-[#0F1114] appearance-none focus:outline-none bg-white">
                                <option>America/Los_Angeles</option>
                            </select>
                            <svg class="absolute right-3 top-1/2 -translate-y-1/2 text-[#0F1114] pointer-events-none"
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </div>
                    </div>

                    <div class="flex items-center justify-end">
                        <button
                            class="py-[14px] px-5 rounded-[80px] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%]"
                            style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                            Update
                        </button>
                    </div>
                </div>

                <!-- <div class="p-6 pt-5">
                <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-1">Delete account</h2>
                <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%] mb-5">Please note that
                    all of the information will be permanently deleted.</p>

                <div class="flex items-center justify-end">
                    <button
                        class="self-start sm:self-auto py-[13px] px-[18px] rounded-[80px] border border-[#E50000] text-[12px] font-extrabold text-[#E50000] uppercase tracking-[-2%] leading-[100%]">
                        Delete
                    </button>
                </div>
            </div> -->

            </div>
        </div>

        <div class="border border-[#0F11141A] rounded-[24px]" v-if="showChangePassword === false">
            <div class="px-4 sm:px-6 pt-[21px] pb-5 border-b border-[#0F11141A]">
                <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-1">Delete Account</h2>
                <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Please note that all
                    of the information will be permanently deleted.</p>
            </div>

            <div class="p-4 sm:p-6 pt-5">
                <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-1">Confirm account closure</h2>
                <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%] mb-5">Account closure is a
                    permanent action. Once your account is closed it will no longer be available to you and cannot be
                    restored.</p>

                <div class="border border-[#0F11141A] rounded-[16px] py-5 px-4 sm:px-6 mb-6">
                    <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-3">When would you like your
                        account to
                        be deleted?</h2>

                    <div
                        class="border border-[#0F11141A] rounded-[8px] px-[17px] pt-[15px] pb-[14px] flex items-start justify-start gap-3 mb-2">
                        <div class="w-3 h-3 border border-[#0F1114] shrink-0"></div>
                        <div>
                            <h1 class="text-[14px] font-semibold text-[#0F1114] leading-[100%] mb-[7px]">Immediately
                            </h1>
                            <p class="text-[12px] font-medium text-[#0F111499] leading-[100%]">Today</p>
                        </div>
                    </div>

                    <div
                        class="border border-[#0F11141A] rounded-[8px] px-[17px] pt-[15px] pb-[14px] flex items-start justify-start gap-3 mb-[22px]">
                        <div class="w-3 h-3 border border-[#0F1114] shrink-0"></div>
                        <div>
                            <h1 class="text-[14px] font-semibold text-[#0F1114] leading-[100%] mb-[7px]">Last Day of
                                this Month</h1>
                            <p class="text-[12px] font-medium text-[#0F111499] leading-[100%]">Month end Date</p>
                        </div>
                    </div>

                    <div class="mb-[14px] max-w-[392px]">
                        <label
                            class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">Please
                            enter your password</label>
                        <input v-model="currentPassword" type="password" placeholder="PASSWORD"
                            class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] bg-primary text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                    </div>

                    <div class="mb-[14px] max-w-[392px]">
                        <label
                            class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] mb-[5px]">Type
                            delete my account to confirm the action</label>
                        <input v-model="newPassword" type="password" placeholder="Confirmation"
                            class="w-full px-5 py-[14px] rounded-[80px] border border-[#0F11141A] bg-primary text-[12px] font-semibold text-[#0F1114] uppercase tracking-[-2%] leading-[100%] placeholder:text-[#0F111466] outline-none" />
                    </div>

                    <div class="mb-4">
                        <label
                            class="ml-1 block text-[12px] font-bold text-[#0F1114] uppercase leading-[100%] tracking-[-2%] mb-[13px]">
                            Required phrase:</label>

                        <div class="border border-dashed border-[#0F11141A] bg-[#FAFAFA] rounded-[80px] px-5 py-[15px]">
                            <p class="text-[12px] font-bold text-[#0F1114CC] uppercase leading-[100%] tracking-[-2%]">
                                delete my account</p>
                        </div>
                    </div>

                    <div
                        class="border border-[#0F11141A] bg-[#FAFAFA] rounded-[8px] px-[17px] py-[12px] flex items-center gap-2 mb-[13px]">
                        <div class="w-3 h-3 border border-[#0F1114] shrink-0"></div>
                        <p class="text-[12px] font-semibold text-[#0F1114CC] leading-5">I understand that by deleting my
                            account, I will not be able to access my account and all my data will be permanently
                            deleted.
                        </p>
                    </div>

                    <p class="text-[12px] font-semibold text-[#0F111499] leading-4 tracking-[-2%]">This action is
                        permanent and cannot be undone.</p>
                </div>

                <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-2">
                    <button
                        class="w-full sm:w-auto py-[16px] px-6 rounded-[80px] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%]"
                        style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                        Keep my account
                    </button>
                    <button
                        class="w-full sm:w-auto py-[15px] px-[22px] rounded-[80px] border border-[#CC2929] text-[#CC2929] text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%]">
                        Delete Account
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>
