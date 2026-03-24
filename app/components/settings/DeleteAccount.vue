<template>
    <div class="border border-neutral-primary/10 rounded-[24px]">
        <!-- delete account -->
        <div class="px-4 sm:px-6 py-[21px] border-b border-neutral-primary/10">
            <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-1">Delete Account</h2>
            <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%]">Please note that all
                of the information will be permanently deleted.</p>
        </div>

        <!-- confirm account closure -->
        <div class="p-4 sm:p-6 pt-5">
            <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-1">Confirm account closure</h2>
            <p class="text-[12px] font-medium text-neutral-primary/60 leading-4 tracking-[-2%] mb-5">Account closure is
                a permanent action. Once your account is closed it will no longer be available to you and cannot be
                restored.</p>

            <div class="border border-neutral-primary/10 rounded-[16px] py-5 px-4 sm:px-6 mb-6">
                <h2 class="text-[16px] font-bold text-neutral-primary leading-[100%] mb-3">When would you like your
                    account to be deleted?</h2>

                <div
                    class="border border-neutral-primary/10 rounded-[8px] px-[17px] pt-[15px] pb-[14px] flex items-start justify-start gap-3 mb-2">
                    <div class="w-3 h-3 border border-neutral-primary shrink-0"></div>
                    <div>
                        <h1 class="text-[14px] font-semibold text-neutral-primary leading-[100%] mb-[7px]">Immediately
                        </h1>
                        <p class="text-[12px] font-medium text-neutral-primary/60 leading-[100%]">Today</p>
                    </div>
                </div>

                <div
                    class="border border-neutral-primary/10 rounded-[8px] px-[17px] pt-[15px] pb-[14px] flex items-start justify-start gap-3 mb-[22px]">
                    <div class="w-3 h-3 border border-neutral-primary shrink-0"></div>
                    <div>
                        <h1 class="text-[14px] font-semibold text-neutral-primary leading-[100%] mb-[7px]">Last Day of
                            this Month</h1>
                        <p class="text-[12px] font-medium text-neutral-primary/60 leading-[100%]">Month end Date</p>
                    </div>
                </div>

                <div class="mb-[14px] max-w-[392px]">
                    <BaseInputField label="Please enter your password" placeholder="PASSWORD" type="password" />
                </div>

                <div class="mb-[14px] max-w-[392px]">
                    <BaseInputField label="Type delete my account to confirm the action" placeholder="Confirmation"
                        type="password" />
                </div>

                <div class="mb-4">
                    <label
                        class="ml-1 block text-[12px] font-bold text-neutral-primary uppercase leading-[100%] tracking-[-2%] mb-[13px]">
                        Required phrase:</label>

                    <div
                        class="border border-dashed border-neutral-primary/10 bg-[#FAFAFA] rounded-[80px] px-5 py-[15px]">
                        <p
                            class="text-[12px] font-bold text-neutral-primary/80 uppercase leading-[100%] tracking-[-2%]">
                            delete my account</p>
                    </div>
                </div>

                <div
                    class="border border-neutral-primary/10 bg-[#FAFAFA] rounded-[8px] px-[17px] py-[12px] flex items-center gap-2 mb-[13px]">
                    <div class="w-3 h-3 border border-neutral-primary shrink-0"></div>
                    <p class="text-[12px] font-semibold text-neutral-primary/80 leading-5">I understand that by deleting
                        my account, I will not be able to access my account and all my data will be permanently deleted.
                    </p>
                </div>

                <p class="text-[12px] font-semibold text-neutral-primary/60 leading-4 tracking-[-2%]">This action is
                    permanent and cannot be undone.</p>
            </div>

            <!-- buttons -->
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
</template>
