<script setup lang="ts">
interface NavLink {
    to: string;
    label: string;
}

const navLinks: NavLink[] = [
    { to: '/', label: 'Home' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/how-it-works', label: 'How it works' },
    { to: '/listings', label: 'Listings' },
    { to: '/tenant-placement', label: 'Tenant Placement' },
];

const isOpen = ref(false)
</script>

<template>
    <nav class="py-6">
        <div class="max-w-[1224px] mx-auto px-5 lg:px-1 flex items-center justify-between font-figtree">

            <!-- logo -->
            <NuxtLink to="/" class="flex items-center gap-2">
                <span class="w-6 h-6 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.7087 0.292786L19.7087 9.29279C20.3387 9.92279 19.8927 10.9998 19.0017 10.9998H18.0017V16.9998C18.0017 17.7954 17.6857 18.5585 17.1231 19.1211C16.5605 19.6837 15.7974 19.9998 15.0017 19.9998H14.0017V12.9998C14.0018 12.2346 13.7094 11.4983 13.1845 10.9415C12.6595 10.3848 11.9416 10.0497 11.1777 10.0048L11.0017 9.99979H9.00175C8.2061 9.99979 7.44304 10.3159 6.88043 10.8785C6.31782 11.4411 6.00175 12.2041 6.00175 12.9998V19.9998H5.00175C4.2061 19.9998 3.44304 19.6837 2.88043 19.1211C2.31782 18.5585 2.00175 17.7954 2.00175 16.9998V10.9998H1.00175C0.111748 10.9998 -0.335252 9.92279 0.294748 9.29279L9.29475 0.292786C9.48228 0.105315 9.73658 0 10.0017 0C10.2669 0 10.5212 0.105315 10.7087 0.292786ZM11.0017 11.9998C11.267 11.9998 11.5213 12.1051 11.7089 12.2927C11.8964 12.4802 12.0017 12.7346 12.0017 12.9998V19.9998H8.00175V12.9998C8.00178 12.7549 8.0917 12.5184 8.25446 12.3354C8.41722 12.1524 8.6415 12.0354 8.88475 12.0068L9.00175 11.9998H11.0017Z"
                            fill="url(#paint0_linear_logo_side)" />
                        <defs>
                            <linearGradient id="paint0_linear_logo_side" x1="20.0017" y1="-0.000214194" x2="0.00174632"
                                y2="19.9998" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#3388FF" />
                                <stop offset="1" stop-color="#004CE6" />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <span class="text-textPrimary font-extrabold text-2xl tracking-[-0.02em] leading-[100%]">Gable</span>
            </NuxtLink>

            <!-- Desktop Nav -->
            <div
                class="hidden lg:flex items-center rounded-[80px] bg-primary p-1 shadow-[0px_0px_40px_-20px_#0F1B3380]">
                <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to"
                    class="py-[13px] px-5 flex items-center rounded-[80px] text-[12px] font-bold uppercase tracking-[-0.02em] leading-none text-textPrimary transition-colors hover:text-brand-blue"
                    exact-active-class="!bg-brand-blue !text-primary !font-semibold hover:!text-white">
                    {{ link.label }}
                </NuxtLink>
            </div>

            <NuxtLink to="/signin"
                class="hidden lg:flex items-center justify-center px-6 py-[13px] border border-brand-blue text-brand-blue text-[12px] font-extrabold leading-none tracking-[-0.02em] uppercase rounded-[80px]">
                Sign In
            </NuxtLink>

            <!-- Mobile Menu Button -->
            <button class="lg:hidden flex items-center" @click="isOpen = !isOpen">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div v-if="isOpen" class="lg:hidden px-4 mt-4">
            <div class="flex flex-col gap-3 bg-primary backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to"
                    class="py-2 text-sm font-semibold uppercase text-textPrimary" @click="isOpen = false">
                    {{ link.label }}
                </NuxtLink>

                <NuxtLink to="/signin"
                    class="mt-2 text-center px-4 py-2 border border-brand-blue text-brand-blue rounded-full text-sm font-bold uppercase">
                    Sign In
                </NuxtLink>
            </div>
        </div>
    </nav>
</template>