<script setup>
const propertyData = reactive({
    address: '',
    unit: '',
    city: '',
    zip: '',
    type: 'SINGLE INDIVIDUAL',
    bedrooms: '',
    bathrooms: '',
    sqft: '',
    amenities: [],
    laundry: '',
    parking: [],
    parkingPolicy: '',
    rent: '',
    securityDeposit: '',
    lateFeeDays: '',
    lateFeeType: '',
    electric: '',
    gas: '',
    water: '',
    garbage: '',
    sewage: '',
    dogPolicy: '',
    dogCount: '',
    dogDeposit: '',
    dogFee: '',
    catPolicy: '',
    catCount: '',
    catDeposit: '',
    catFee: '',
    sublet: '',
    shortTerm: '',
    newAmenity: '',
    selectedAmenities: '',
    newGround: '',
    selectedGrounds: '',
    concierge: '',
    smokingUnit: '',
    smokingBuilding: '',
    description: '',
    availability: '',
    leaseTerm: '',
    occupancy: 'UNIT IS VACANT - PUBLISH PROPERTY'
})

const propertyTypes = ['SINGLE INDIVIDUAL', 'CONDO', 'APARTMENT', 'TOWN HOME', 'MOBILE HOME']
</script>

<template>
    <div class="flex min-h-screen bg-primary">
        <Sidebar />

        <div class="flex-1 ml-64 flex flex-col min-h-screen">
            <Navbar />

            <div class="px-6 pt-[19px] pb-5 flex items-center justify-between">
                <div class="flex items-center gap-4">
                    <NuxtLink to="/dashboard"
                        class="w-10 h-10 my-[2px] rounded-full flex items-center justify-center border border-[#0F11141A]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l14 0" />
                            <path d="M5 12l4 4" />
                            <path d="M5 12l4 -4" />
                        </svg>
                    </NuxtLink>
                    <div>
                        <h1 class="text-xl font-bold text-[#0F1114] leading-[100%] mb-1">Add Property</h1>
                        <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-2%]">Create a new rental
                            listing for your portfolio.</p>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <button
                        class="h-10 px-6 rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold text-[#0F1114] uppercase leading-[100%] tracking-[-2%]">Save
                        Draft</button>
                    <button
                        class="h-10 px-6 rounded-[80px] text-primary text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%]"
                        style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">Add
                        Property</button>
                </div>
            </div>

            <main class="flex-1 px-6 flex gap-[30px] pb-32 items-start">
                <div class="flex-1 max-w-[800px]">
                    <form class="flex flex-col gap-x-4 gap-y-[14px]">
                        <FormSection title="Rental Property Address">
                            <FormInput v-model="propertyData.address" label="Street Address"
                                placeholder="123 MAIN ST" />
                            <FormInput v-model="propertyData.unit" label="Unit / APT #" placeholder="APT 101" />
                            <FormInput v-model="propertyData.city" label="City" placeholder="OAKLAND" />
                            <FormInput v-model="propertyData.zip" label="Zip Code" placeholder="94607" />
                        </FormSection>

                        <div class="flex flex-col border border-[#0F11141A] rounded-3xl pt-[21px] pb-[26px]">
                            <h3 class="px-[25px] text-base font-bold text-[#0F1114] leading-[100%] mb-5">Type of
                                Property </h3>
                            <div class="border border-[#0F11141A] mb-6"></div>
                            <SelectionGroup class="px-[25px]" v-model="propertyData.type" :options="propertyTypes" />
                        </div>

                        <div class="pt-[21px] pb-[25px] border border-[#0F11141A] rounded-3xl">
                            <h3 class="px-[25px] text-base font-bold text-[#0F1114] mb-5 leading-[100%]">
                                Bedrooms, Bathrooms & Size</h3>
                            <div class="mb-[21px] border border-[#0F11141A]"></div>
                            <div class="px-[25px] grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-[14px]">
                                <FormInput v-model="propertyData.bedrooms" label="NO OF BEDROOMS" type="number"
                                    placeholder="3" />
                                <FormInput v-model="propertyData.bathrooms" label="NO OF BATHROOMS" type="number"
                                    placeholder="2" />
                                <FormInput v-model="propertyData.sqft" label="PROPERTY SQFT" type="number"
                                    placeholder="1450" />
                            </div>
                        </div>

                        <div class="flex flex-col border border-[#0F11141A] rounded-3xl pt-[21px] pb-[26px]">
                            <h3 class="px-[25px] text-base font-bold text-[#0F1114] leading-[100%] mb-5">Appliances</h3>
                            <div class="border border-[#0F11141A] mb-6"></div>
                            <SelectionGroup class="px-[25px]" v-model="propertyData.amenities"
                                :options="['STOVE', 'OVEN', 'REFRIGERATOR', 'DISHWASHER', 'WASHER', 'DRYER']"
                                multiple />
                        </div>

                        <div class="flex flex-col border border-[#0F11141A] rounded-3xl pt-[21px] pb-[26px]">
                            <h3 class="px-[25px] text-base font-bold text-[#0F1114] leading-[100%] mb-5">Laundry
                                Included</h3>
                            <div class="border border-[#0F11141A] mb-6"></div>
                            <SelectionGroup class="px-[25px]" v-model="propertyData.laundry"
                                :options="['IN-UNIT', 'SHARED', 'HOOKUPS', 'NONE']" />
                        </div>

                        <div class="flex flex-col border border-[#0F11141A] rounded-3xl pt-[21px] pb-[25px]">
                            <h3 class="px-[25px] text-base font-bold text-[#0F1114] leading-[100%] mb-5">Parking</h3>
                            <div class="border border-[#0F11141A] mb-6"></div>
                            <SelectionGroup v-model="propertyData.parking" class="px-[25px]"
                                :options="['ATTACHED GARAGE', 'CARPORT', 'VALET PARKING', 'OFF-STREET PARKING', 'STREET PARKING', 'NO PARKING']"
                                multiple />
                            <div class="border border-[#0F11141A] mt-6 mb-[22px]"></div>
                            <PropertySelect v-model="propertyData.parkingPolicy" label="MONTHLY PARKING FEE"
                                class="max-w-[400px] px-[25px]" />
                        </div>

                        <FormSection title="Rent & Security Deposit">
                            <FormInput v-model="propertyData.rent" label="MONTHLY RENT AMOUNT" placeholder="2500" />
                            <FormInput v-model="propertyData.securityDeposit" label="SECURITY DEPOSIT AMOUNT"
                                placeholder="2500" />
                        </FormSection>

                        <FormSection title="Late Fees Policy">
                            <FormInput v-model="propertyData.lateFeeDays" label="DAYS BEFORE LATE FEE"
                                placeholder="3" />
                            <PropertySelect v-model="propertyData.lateFeeType" label="LATE FEE TYPE" />
                        </FormSection>

                        <div class="flex flex-col border border-[#0F11141A] rounded-3xl pt-[21px] pb-[25px]">
                            <h3 class="px-[25px] text-base font-bold text-[#0F1114] leading-[100%] mb-5">Utilities
                                Responsibility</h3>
                            <div class="border border-[#0F11141A] mb-[22px]"></div>
                            <div class="px-[25px] grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-[14px]">
                                <PropertySelect v-model="propertyData.electric" label="ELECTRIC" />
                                <PropertySelect v-model="propertyData.gas" label="GAS" />
                                <PropertySelect v-model="propertyData.water" label="WATER" />
                                <PropertySelect v-model="propertyData.garbage" label="GARBAGE" />
                                <PropertySelect v-model="propertyData.sewage" label="SEWAGE" />
                            </div>
                        </div>

                        <FormSection title="Dogs Policy">
                            <PropertySelect v-model="propertyData.dogPolicy" label="DOGS ALLOWED" />
                            <FormInput v-model="propertyData.dogCount" label="HOW MANY DOGS ALLOWED" placeholder="1" />
                            <FormInput v-model="propertyData.dogDeposit" label="ONE-TIME DOG DEPOSIT AMOUNT"
                                placeholder="300" />
                            <FormInput v-model="propertyData.dogFee" label="MONTHLY FEE AMOUNT" placeholder="" />
                        </FormSection>

                        <FormSection title="Cats Policy">
                            <PropertySelect v-model="propertyData.catPolicy" label="CATS ALLOWED" />
                            <FormInput v-model="propertyData.catCount" label="HOW MANY CATS ALLOWED" placeholder="1" />
                            <FormInput v-model="propertyData.catDeposit" label="ONE-TIME CAT DEPOSIT AMOUNT"
                                placeholder="300" />
                            <FormInput v-model="propertyData.catFee" label="MONTHLY FEE AMOUNT" placeholder="" />
                        </FormSection>

                        <div class="flex flex-col border border-[#0F11141A] rounded-3xl pt-[21px] pb-[21px]">
                            <h3 class="px-[25px] text-base font-bold text-[#0F1114] leading-[100%] mb-5">Unit Amenities
                            </h3>
                            <div class="border border-[#0F11141A] mb-[22px]"></div>
                            <div class="px-[25px] grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-[14px]">
                                <div>
                                    <FormInput v-model="propertyData.newAmenity" label="ADD AMENITY"
                                        placeholder="E.G., FITNESS CENTER" />
                                    <p class="text-[12px] font-semibold text-[#0F111499] mt-2 leading-4 tracking-[-2%]">
                                        Press Enter to add
                                    </p>
                                </div>
                                <div>
                                    <FormInput v-model="propertyData.selectedAmenities" label="SELECTED"
                                        placeholder="NONE YET" disabled />
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col border border-[#0F11141A] rounded-3xl pt-[21px] pb-[25px]">
                            <h3 class="px-[25px] text-base font-bold text-[#0F1114] leading-[100%] mb-5">Building
                                Amenities</h3>
                            <div class="border border-[#0F11141A] mb-[22px]"></div>
                            <div class="px-[25px] grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-[14px]">
                                <div>
                                    <FormInput v-model="propertyData.newGround" label="ADD AMENITY"
                                        placeholder="E.G., EV CHARGING" />
                                    <p
                                        class="text-[12px] font-semibold text-[#0F111499] mt-2 mb-3 leading-4 tracking-[-2%]">
                                        Press Enter to add
                                    </p>
                                    <button type="button"
                                        class="h-10 px-6 py-[13px] rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] text-[#0F1114]">SKIP</button>
                                </div>
                                <div>
                                    <FormInput v-model="propertyData.selectedGrounds" label="SELECTED"
                                        placeholder="NONE YET" disabled />
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col border border-[#0F11141A] rounded-3xl pt-[21px] pb-[25px]">
                            <h3 class="px-[25px] text-base font-bold text-[#0F1114] leading-[100%] mb-5">Grounds</h3>
                            <div class="border border-[#0F11141A] mb-[22px]"></div>
                            <div class="px-[25px] grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-[14px]">
                                <div>
                                    <FormInput v-model="propertyData.newGround" label="ADD AMENITY"
                                        placeholder="E.G., EV CHARGING" />
                                    <p
                                        class="text-[12px] font-semibold text-[#0F111499] mt-2 mb-3 leading-4 tracking-[-2%]">
                                        Press Enter to add
                                    </p>
                                    <button type="button"
                                        class="h-10 px-6 py-[13px] rounded-[80px] border border-[#0F1114] text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] text-[#0F1114]">SKIP</button>
                                </div>
                                <div>
                                    <FormInput v-model="propertyData.selectedGrounds" label="SELECTED"
                                        placeholder="NONE YET" disabled />
                                </div>
                            </div>
                        </div>

                        <FormSection title="Services">
                            <PropertySelect v-model="propertyData.concierge" label="CONCIERGE SERVICE" />
                        </FormSection>

                        <FormSection title="Smoking Policy">
                            <PropertySelect v-model="propertyData.smokingUnit" label="SMOKING PERMITTED IN UNIT" />
                            <PropertySelect v-model="propertyData.smokingBuilding"
                                label="SMOKING PERMITTED IN BUILDING" />
                        </FormSection>

                        <div class="flex flex-col border border-[#0F11141A] rounded-3xl pt-[21px] pb-[25px]">
                            <h3 class="px-[25px] text-base font-bold text-[#0F1114] leading-[100%] mb-5">Property Photos
                            </h3>
                            <div class="border border-[#0F11141A] mb-6"></div>
                            <div class="px-[25px]">
                                <div
                                    class="bg-[#FAFAFA] border border-dashed pt-[15px] px-[17px] pb-[13px] border-[#0F11141A] rounded-[12px]">
                                    <label
                                        class="block text-[12px] font-semibold text-[#0F1114] leading-[100%] tracking-[-2%] mb-[13px]">Upload
                                        Photos of the Unit and building</label>
                                    <div
                                        class="border border-[#0F11141A] rounded-[8px] px-4 py-3 flex items-center bg-[#FAFAFA]">
                                        <button type="button"
                                            class="h-8 px-[14px] py-2 rounded-[16px] bg-[#0F1114] text-primary text-[12px] font-bold uppercase leading-[100%] tracking-[-2%] flex items-center gap-[6px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="icon icon-tabler icons-tabler-outline icon-tabler-file-upload">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                                <path
                                                    d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
                                                <path d="M12 11v6" />
                                                <path d="M9.5 13.5l2.5 -2.5l2.5 2.5" />
                                            </svg>
                                            CHOOSE FILE
                                        </button>
                                        <span
                                            class="ml-[11px] text-[12px] font-bold leading-[100%] tracking-[-2%] text-[#0F111499]">No
                                            file chosen</span>
                                    </div>
                                    <p class="text-[12px] font-bold text-[#0F111499] leading-4 tracking-[-2%] mt-[5px]">
                                        Tip: You can select multiple photos.</p>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col border border-[#0F11141A] rounded-3xl pt-[21px] pb-[25px]">
                            <h3 class="px-[25px] text-base font-bold text-[#0F1114] leading-[100%] mb-5">Property
                                Description</h3>
                            <div class="border border-[#0F11141A] mb-[22px]"></div>
                            <div class="px-[25px]">
                                <label
                                    class="block ml-1 mb-[5px] text-[12px] font-bold text-[#0F1114] leading-[100%] uppercase tracking-[-2%]">WRITTEN
                                    DESCRIPTION OF THE UNIT</label>
                                <textarea v-model="propertyData.description"
                                    placeholder="DESCRIBE THE UNIT, UPGRADES, NEIGHBORHOOD, AND HIGHLIGHTS..."
                                    class="w-full h-[116px] px-5 py-[15px] rounded-xl border border-[#0F11141A] bg-white text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] uppercase leading-[100%] tracking-[-2%] focus:outline-none resize-none"></textarea>
                            </div>
                        </div>

                        <FormSection title="Property Availability">
                            <FormInput v-model="propertyData.availability" type="date" label="AVAILABLE DATE" />
                            <PropertySelect v-model="propertyData.leaseTerm" label="LEASE TERM" />
                        </FormSection>

                        <div class="flex flex-col border border-[#0F11141A] rounded-3xl pt-[21px] pb-[25px]">
                            <h3 class="px-[25px] text-base font-bold text-[#0F1114] leading-[100%] mb-5">Occupancy
                                Status</h3>
                            <div class="border border-[#0F11141A] mb-[25px]"></div>
                            <div class="px-[25px]">
                                <SelectionGroup v-model="propertyData.occupancy"
                                    :options="['UNIT IS OCCUPIED - ADD PROPERTY', 'UNIT IS VACANT - PUBLISH PROPERTY']" />
                                <p class="text-[12px] font-bold text-[#0F111499] leading-4 tracking-[-2%] mt-[9px]">If
                                    you publish, your property will be visible publicly and shared on your public
                                    listing.</p>
                            </div>
                        </div>
                    </form>
                </div>

                <!-- Right Sidebar Summary -->
                <div class="w-[340px] shrink-0 h-[408px] sticky top-24">
                    <div class="bg-white border border-[#0F11141A] rounded-3xl h-full flex flex-col">
                        <div class="flex items-center justify-between pt-[21px] pb-5 px-[25px]">
                            <h3 class="text-base font-bold text-[#0F1114] leading-[100%]">Summary</h3>
                            <span
                                class="text-[12px] font-bold text-[#004CE5] leading-[100%] flex items-center gap-[6px] tracking-[1px] uppercase"><span
                                    class="w-1 h-1 rounded-full bg-[#004CE5]"></span> Live</span>
                        </div>

                        <div class="border border-[#0F11141A]"></div>

                        <div class="flex flex-col pt-[21px] pb-5 border-b border-[#0F11141A]">
                            <div v-for="item in ['Address', 'Type', 'Rent', 'Deposit', 'Occupancy']" :key="item"
                                class="flex justify-between border-b border-[#0F11141A] pt-[21px] pb-5 px-6 first:pt-0 last:border-0 last:pb-0">
                                <span class="text-[13px] font-bold text-[#0F1114] leading-[100%]">{{ item }}</span>
                                <span class="text-[14px] font-bold text-[#0F111499] leading-[100%]">-</span>
                            </div>
                        </div>

                        <div
                            class="bg-[#FFF9F2] px-3 w-fit py-[7px] border border-[#E599171A] rounded-[60px] flex items-center gap-1 text-[#A16600] m-[16px]">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <path
                                    d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                <line x1="12" y1="9" x2="12" y2="13" />
                                <line x1="12" y1="17" x2="12.01" y2="17" />
                            </svg>
                            <span class="text-[12px] font-bold leading-[100%] tracking-[-2%] text-[#A16600]">Complete
                                required fields</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
