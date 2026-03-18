<script setup lang="ts">

const firstName = ref<string>('')
const lastName = ref<string>('')
const phoneNumber = ref<string>('')
const address = ref<string>('')
const zipCode = ref<string>('')
const city = ref<string>('')

const fileInput = ref<HTMLInputElement | null>(null)
const fileName = ref<string>('No file chosen')

const triggerFilePicker = () => {
    fileInput.value?.click()
}

const onFileChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    const file = target.files?.[0]
    fileName.value = file ? file.name : 'No file chosen'
}

const profession = ref<string>('')
const subDomain = ref<string>('')
const description = ref<string>('')

const displayAsCompany = ref<boolean>(false)
const showFullAddress = ref<boolean>(false)
const showCityState = ref<boolean>(false)
const activateProfile = ref<boolean>(false)

</script>

<template>
    <div class="border border-neutral-primary/10 rounded-[24px] mb-4">

        <div>
            <!-- Business Profile -->
            <div class="p-4 sm:p-6 pt-[21px] border-b border-neutral-primary/10">
                <div class="pb-5">
                    <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-1">Business Profile</h2>
                    <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">The name in your
                        account
                        will be displayed as your business name.</p>
                </div>

                <div class="flex flex-col sm:flex-row items-start gap-4 mb-[14px]">
                    <div
                        class="w-12 h-12 rounded-[12px] bg-status-info-bg text-brand-blue flex items-center justify-center shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.1601 15.3598L16.0388 11.2386C15.6634 10.8632 15.0557 10.8632 14.6813 11.2386L10.5601 15.3598"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M17.2799 20.1609H5.75988C4.16916 20.1609 2.87988 18.8716 2.87988 17.2809V5.76086C2.87988 4.17014 4.16916 2.88086 5.75988 2.88086H17.2799C18.8706 2.88086 20.1599 4.17014 20.1599 5.76086V17.2809C20.1599 18.8716 18.8706 20.1609 17.2799 20.1609Z"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M15.3599 20.1607L9.31867 14.1194C8.94331 13.7441 8.33563 13.7441 7.96123 14.1194L3.30811 18.7725"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M8.89447 8.3856C9.03506 8.52619 9.03506 8.75413 8.89447 8.89471C8.75388 9.0353 8.52594 9.0353 8.38535 8.89471C8.24476 8.75413 8.24476 8.52619 8.38535 8.3856C8.52594 8.24501 8.75388 8.24501 8.89447 8.3856"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div
                        class="border border-dashed border-neutral-primary/10 rounded-[12px] bg-neutral-50 w-full px-4 pt-[15px] pb-[13px]">
                        <div
                            class="text-[12px] font-semibold text-neutral-primary leading-[100%] tracking-[-2%] mb-[13px]">
                            Profile Image/picture</div>

                        <div
                            class="flex flex-col sm:flex-row sm:items-center border border-neutral-primary/10 rounded-[8px] bg-neutral-50 px-4 py-[11px] gap-[11px]">
                            <input ref="fileInput" type="file" accept="image/png,image/jpg,image/gif" class="hidden"
                                @change="onFileChange" />
                            <button @click="triggerFilePicker"
                                class="w-full sm:w-auto flex items-center justify-center gap-[6px] px-[14px] py-2 rounded-[16px] bg-neutral-primary text-primary text-[12px] font-bold uppercase leading-[100%] tracking-[-2%] hover:opacity-80 transition-opacity">
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
                                class="text-[12px] font-bold text-neutral-primary/60 leading-[100%] tracking-[-2%] truncate">
                                {{ fileName }}</span>
                        </div>

                        <div class="text-[12px] font-bold text-brand-blue leading-4 tracking-[-2%] mt-[5px]">
                            Update Image
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px] mb-3">
                    <div>
                        <label
                            class="ml-1 block text-[12px] font-bold text-neutral-primary uppercase tracking-[-2%] leading-[100%] mb-[5px]">First
                            Name</label>
                        <input v-model="firstName" type="text" placeholder="First Name"
                            class="w-full px-5 py-[14px] rounded-[80px] border border-neutral-primary/10 text-[12px] font-semibold text-neutral-primary uppercase tracking-[-2%] leading-[100%] placeholder:text-neutral-primary/40 outline-none" />
                    </div>

                    <div>
                        <label
                            class="ml-1 block text-[12px] font-bold text-neutral-primary uppercase tracking-[-2%] leading-[100%] mb-[5px]">Last
                            Name</label>
                        <input v-model="lastName" type="text" placeholder="Last Name"
                            class="w-full px-5 py-[14px] rounded-[80px] border border-neutral-primary/10 text-[12px] font-semibold text-neutral-primary uppercase tracking-[-2%] leading-[100%] placeholder:text-neutral-primary/40 outline-none" />
                    </div>

                    <div>
                        <label
                            class="ml-1 block text-[12px] font-bold text-neutral-primary uppercase tracking-[-2%] leading-[100%] mb-[5px]">Phone</label>
                        <input v-model="phoneNumber" placeholder="Phone"
                            class="w-full px-5 py-[14px] rounded-[80px] border border-neutral-primary/10 text-[12px] font-semibold text-neutral-primary uppercase tracking-[-2%] leading-[100%] placeholder:text-neutral-primary/40 outline-none" />
                    </div>
                </div>

                <div class="flex items-center justify-start mb-6">
                    <div @click="displayAsCompany = !displayAsCompany"
                        class="bg-neutral-primary/5 border border-neutral-primary/10 rounded-[80px] py-[9px] px-4 flex items-center gap-2 cursor-pointer select-none">
                        <div class="h-3 w-3 border shrink-0"
                            :class="displayAsCompany ? 'bg-brand-blue border-brand-blue' : 'bg-white border-neutral-primary'">
                            <svg v-if="displayAsCompany" width="10" height="10" viewBox="0 0 24 24" fill="none"
                                stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <div
                            class="text-[12px] font-semibold text-neutral-primary uppercase tracking-[-2%] leading-[100%]">
                            Display as a Company</div>
                    </div>
                </div>

                <div class="flex items-center justify-end">
                    <button
                        class="w-full sm:w-auto py-[14px] px-5 rounded-[80px] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%]"
                        style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                        Update
                    </button>
                </div>
            </div>

            <!-- Business Address -->
            <div class="p-4 sm:p-6 pt-5 border-b border-neutral-primary/10">
                <div class="mb-[18px]">
                    <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-1">Business Address</h2>
                    <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">Please add your
                        Business address and let customers know where you're located.</p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px] mb-3">
                    <div>
                        <label
                            class="ml-1 block text-[12px] font-bold text-neutral-primary uppercase tracking-[-2%] leading-[100%] mb-[5px]">Address</label>
                        <input v-model="address" type="text" placeholder="Address"
                            class="w-full px-5 py-[14px] rounded-[80px] border border-neutral-primary/10 text-[12px] font-semibold text-neutral-primary uppercase tracking-[-2%] leading-[100%] placeholder:text-neutral-primary/40 outline-none" />
                    </div>

                    <div>
                        <label
                            class="ml-1 block text-[12px] font-bold text-neutral-primary uppercase tracking-[-2%] leading-[100%] mb-[5px]">City</label>
                        <input v-model="city" type="text" placeholder="City"
                            class="w-full px-5 py-[14px] rounded-[80px] border border-neutral-primary/10 text-[12px] font-semibold text-neutral-primary uppercase tracking-[-2%] leading-[100%] placeholder:text-neutral-primary/40 outline-none" />
                    </div>

                    <div>
                        <label
                            class="ml-1 block text-[12px] font-bold text-neutral-primary uppercase tracking-[-2%] leading-[100%] mb-[5px]">Zip
                            Code</label>
                        <input v-model="zipCode" type="tel" placeholder="Zip Code"
                            class="w-full px-5 py-[14px] rounded-[80px] border border-neutral-primary/10 text-[12px] font-semibold text-neutral-primary uppercase tracking-[-2%] leading-[100%] placeholder:text-neutral-primary/40 outline-none" />
                    </div>
                </div>

                <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-1 mb-6">
                    <div @click="showFullAddress = !showFullAddress"
                        class="bg-neutral-primary/5 border border-neutral-primary/10 rounded-[80px] py-[9px] px-4 flex items-center gap-2 cursor-pointer select-none">
                        <div class="h-3 w-3 border shrink-0"
                            :class="showFullAddress ? 'bg-brand-blue border-brand-blue' : 'bg-white border-neutral-primary'">
                            <svg v-if="showFullAddress" width="10" height="10" viewBox="0 0 24 24" fill="none"
                                stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <div
                            class="text-[12px] font-semibold text-neutral-primary uppercase tracking-[-2%] leading-[100%]">
                            Show full address</div>
                    </div>
                    <div @click="showCityState = !showCityState"
                        class="bg-neutral-primary/5 border border-neutral-primary/10 rounded-[80px] py-[9px] px-4 flex items-center gap-2 cursor-pointer select-none">
                        <div class="h-3 w-3 border shrink-0"
                            :class="showCityState ? 'bg-brand-blue border-brand-blue' : 'bg-white border-neutral-primary'">
                            <svg v-if="showCityState" width="10" height="10" viewBox="0 0 24 24" fill="none"
                                stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <div
                            class="text-[12px] font-semibold text-neutral-primary uppercase tracking-[-2%] leading-[100%]">
                            Show City & State to customer</div>
                    </div>
                </div>

                <div class="flex items-center justify-end">
                    <button
                        class="w-full sm:w-auto py-[14px] px-5 rounded-[80px] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%]"
                        style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                        Update
                    </button>
                </div>
            </div>

            <!-- Professional services -->
            <div class="p-4 sm:p-6 pt-5 border-b border-neutral-primary/10">
                <div class="mb-[18px]">
                    <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-1">Professional services
                    </h2>
                    <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">What do you
                        specialize
                        in?</p>
                </div>

                <div class="mb-[42px]">
                    <label
                        class="ml-1 block text-[12px] font-bold text-neutral-primary uppercase tracking-[-2%] leading-[100%] mb-[5px]">Select
                        a profession</label>
                    <div class="relative">
                        <select v-model="profession"
                            class="w-full px-5 py-[15px] rounded-[80px] border border-neutral-primary/10 text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] appearance-none focus:outline-none bg-white"
                            :class="profession === '' ? 'text-neutral-primary/40' : 'text-neutral-primary'">
                            <option value="">Select a profession</option>
                        </select>
                        <svg class="absolute right-[14px] top-1/2 -translate-y-1/2 text-neutral-primary pointer-events-none"
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </div>
                </div>

                <div class="mb-6">
                    <label
                        class="ml-1 block text-[12px] font-bold text-neutral-primary uppercase tracking-[-2%] leading-[100%] mb-[5px]">Description
                        of services</label>
                    <textarea placeholder="Tell customers what you do. Let leads know why you stand out."
                        v-model="description"
                        class="w-full h-[108px] px-5 py-[15px] rounded-[12px] border border-neutral-primary/10 text-[12px] font-semibold text-neutral-primary tracking-[-2%] leading-[100%] placeholder:text-neutral-primary/40 outline-none resize-none"></textarea>
                </div>

                <div class="flex items-center justify-end">
                    <button
                        class="w-full sm:w-auto py-[14px] px-5 rounded-[80px] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%]"
                        style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                        Update
                    </button>
                </div>
            </div>

            <!-- Cover Photo -->
            <div class="p-4 sm:p-6 border-b border-neutral-primary/10">
                <div
                    class="border border-dashed border-neutral-primary/10 rounded-[12px] bg-neutral-50 w-full px-4 pt-[15px] pb-[13px]">
                    <div class="text-[12px] font-semibold text-neutral-primary leading-[100%] tracking-[-2%] mb-[13px]">
                        Cover photo</div>

                    <div
                        class="flex flex-col sm:flex-row sm:items-center border border-neutral-primary/10 rounded-[8px] bg-neutral-50 px-4 py-[11px] gap-[11px]">
                        <input ref="fileInput" type="file" accept="image/png,image/jpg,image/gif" class="hidden"
                            @change="onFileChange" />
                        <button @click="triggerFilePicker"
                            class="w-full sm:w-auto flex items-center justify-center gap-[6px] px-[14px] py-2 rounded-[16px] bg-neutral-primary text-primary text-[12px] font-bold uppercase leading-[100%] tracking-[-2%] hover:opacity-80 transition-opacity">
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
                            class="text-[12px] font-bold text-neutral-primary/60 leading-[100%] tracking-[-2%] truncate">
                            {{ fileName }}</span>
                    </div>

                    <div class="text-[12px] font-bold text-brand-blue leading-4 tracking-[-2%] mt-[5px]">
                        Update Image
                    </div>
                </div>
            </div>

            <!-- Public Business Profile -->
            <div class="p-4 sm:p-6 pt-5">
                <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-1">Public Business Profile</h2>
                <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%] mb-3">
                    A public link to advertise your business and get job leads.</p>

                <div class="flex items-center justify-start mb-[14px]">
                    <div @click="activateProfile = !activateProfile"
                        class="bg-neutral-primary/5 border border-neutral-primary/10 rounded-[80px] py-[9px] px-4 flex items-center gap-2 cursor-pointer select-none">
                        <div class="h-3 w-3 border shrink-0"
                            :class="activateProfile ? 'bg-brand-blue border-brand-blue' : 'bg-white border-neutral-primary'">
                            <svg v-if="activateProfile" width="10" height="10" viewBox="0 0 24 24" fill="none"
                                stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <div
                            class="text-[12px] font-semibold text-neutral-primary uppercase tracking-[-2%] leading-[100%]">
                            Activate business profile</div>
                    </div>
                </div>

                <div class="mb-6">
                    <label
                        class="ml-1 block text-[12px] font-bold text-neutral-primary uppercase tracking-[-2%] leading-[100%] mb-[5px]">Subdomain
                        URL</label>
                    <div class="relative">
                        <select v-model="subDomain"
                            :class="subDomain === '' ? 'text-neutral-primary/40' : 'text-neutral-primary'"
                            class="w-full px-5 py-[15px] rounded-[80px] border border-neutral-primary/10 text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] appearance-none focus:outline-none bg-white">
                            <option value="">Subdomain URL</option>
                        </select>
                        <svg class=" absolute right-3 top-1/2 -translate-y-1/2 text-neutral-primary pointer-events-none"
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </div>
                </div>

                <div class="flex items-center justify-end">
                    <button
                        class="w-full sm:w-auto py-[14px] px-5 rounded-[80px] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%]"
                        style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE5 100%);">
                        Update
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>
