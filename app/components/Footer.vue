<template>
    <footer class="bg-hero-radial pt-[59px] pb-[132px]">
        <div class="max-w-[1224px] mx-auto px-5 lg:px-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-[34px]">

            <!-- Logo and description -->
            <div class="col-span-1 sm:col-span-2">
                <NuxtLink to="/" class="flex items-center gap-[5px] mb-[13px]">
                    <span class="w-6 h-6 flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M10.7087 0.292786L19.7087 9.29279C20.3387 9.92279 19.8927 10.9998 19.0017 10.9998H18.0017V16.9998C18.0017 17.7954 17.6857 18.5585 17.1231 19.1211C16.5605 19.6837 15.7974 19.9998 15.0017 19.9998H14.0017V12.9998C14.0018 12.2346 13.7094 11.4983 13.1845 10.9415C12.6595 10.3848 11.9416 10.0497 11.1777 10.0048L11.0017 9.99979H9.00175C8.2061 9.99979 7.44304 10.3159 6.88043 10.8785C6.31782 11.4411 6.00175 12.2041 6.00175 12.9998V19.9998H5.00175C4.2061 19.9998 3.44304 19.6837 2.88043 19.1211C2.31782 18.5585 2.00175 17.7954 2.00175 16.9998V10.9998H1.00175C0.111748 10.9998 -0.335252 9.92279 0.294748 9.29279L9.29475 0.292786C9.48228 0.105315 9.73658 0 10.0017 0C10.2669 0 10.5212 0.105315 10.7087 0.292786ZM11.0017 11.9998C11.267 11.9998 11.5213 12.1051 11.7089 12.2927C11.8964 12.4802 12.0017 12.7346 12.0017 12.9998V19.9998H8.00175V12.9998C8.00178 12.7549 8.0917 12.5184 8.25446 12.3354C8.41722 12.1524 8.6415 12.0354 8.88475 12.0068L9.00175 11.9998H11.0017Z"
                                fill="#00091A" />
                        </svg>
                    </span>
                    <span class="text-textPrimary font-extrabold text-2xl tracking-[-0.02em] leading-none">Gable</span>
                </NuxtLink>

                <p class="text-[14px] leading-5 font-normal text-neutral-primary/80 w-full lg:max-w-[288px] mb-[27px]">
                    Gable helps landlords, property managers, tenants, and service pros work together in one clean
                    system — so leasing, rent, maintenance, and documentation stay organized from day one.
                </p>

                <div class="flex items-center gap-2">
                    <div
                        class="w-10 h-10 rounded-full bg-textPrimary p-3 flex items-center justify-center text-primary cursor-pointer">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </div>
                    <div
                        class="w-10 h-10 rounded-full bg-textPrimary p-3 flex items-center justify-center text-primary cursor-pointer">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </div>
                    <div
                        class="w-10 h-10 rounded-full bg-textPrimary p-3 flex items-center justify-center text-primary cursor-pointer">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Company -->
            <div class="col-span-1">
                <h4 class="text-[16px] font-bold text-textPrimary leading-5 mb-[9px]">Company</h4>
                <ul class="space-y-[9px]">
                    <li v-for="link in ['About Us', 'Contact Us', 'Blog']" :key="link">
                        <NuxtLink to="#" class="text-[14px] font-normal text-textPrimary leading-[100%]">
                            {{ link }}</NuxtLink>
                    </li>
                </ul>
            </div>

            <!-- Type of user -->
            <div class="col-span-1">
                <h4 class="text-[16px] font-bold text-textPrimary leading-5 mb-[9px]">Type of user</h4>
                <ul class="space-y-[9px]">
                    <li v-for="link in ['Landlords', 'Tenant', 'Service Pros']" :key="link">
                        <NuxtLink to="#" class="text-[14px] font-normal text-textPrimary leading-[100%]">
                            {{ link }}</NuxtLink>
                    </li>
                </ul>
            </div>

            <!-- Dashboard -->
            <div class="col-span-1">
                <h4 class="text-[16px] font-bold text-textPrimary leading-5 mb-[9px]">Dashboard</h4>
                <ul class="space-y-[9px]">
                    <li v-for="link in ['Landlord', 'Tenant', 'Pro']" :key="link">
                        <NuxtLink to="#" class="text-[14px] font-normal text-textPrimary leading-[100%]">
                            {{ link }}</NuxtLink>
                    </li>
                </ul>
            </div>

            <!-- Legal -->
            <div class="col-span-1">
                <h4 class="text-[16px] font-bold text-textPrimary leading-5 mb-[9px]">Legal</h4>
                <ul class="space-y-[9px]">
                    <li v-for="link in ['Terms & Conditions', 'Privacy Policy']" :key="link">
                        <NuxtLink to="#" class="text-[14px] font-normal text-textPrimary leading-[100%]">
                            {{ link }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>