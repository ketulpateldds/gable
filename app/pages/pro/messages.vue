<script setup lang="ts">
import Navbar from '~/components/landlord/Navbar.vue'
import Sidebar from '~/components/pro/Sidebar.vue'

interface Thread {
    id: number;
    name: string;
    lastMessage: string;
    time: string;
    initial: string;
    active: boolean;
}

interface ChatMessage {
    sender: string;
    time: string;
    text: string;
    isSelf: boolean;
}

interface Participant {
    name: string;
    role: string;
    initial: string;
}

const searchQuery = ref<string>('')
const messageText = ref<string>('')
const showChat = ref<boolean>(false)

const threads = ref<Thread[]>([
    {
        id: 1,
        name: 'Landlord',
        lastMessage: 'you and landlord are now connected on Messenger! • Jan 28',
        time: '',
        initial: 'A',
        active: true
    },
    {
        id: 2,
        name: 'Property Manager',
        lastMessage: 'Vendor assignment discus...',
        time: '2h ago',
        initial: 'PM',
        active: false
    },
    {
        id: 3,
        name: 'Tenant',
        lastMessage: 'Dishwasher not draining •...',
        time: 'Yesterday',
        initial: 'T',
        active: false
    }
])

const activeThread = computed<Thread | undefined>(() => threads.value.find(t => t.active))

const selectThread = (threadId: number): void => {
    threads.value.forEach(t => t.active = t.id === threadId)
    showChat.value = true
}

const goBack = (): void => {
    showChat.value = false
}

const chatMessages = ref<ChatMessage[]>([
    {
        sender: 'Property Manager',
        time: '09:10am',
        text: 'Can you approve the plumbing work at Oak St?',
        isSelf: false
    }
])

const participants: Participant[] = [
    { name: 'Landlord', role: 'Landlord', initial: 'L' },
    { name: 'Pro', role: 'Pro', initial: 'PM' }
]
</script>

<template>
    <div class="flex min-h-screen bg-primary font-sans">
        <Sidebar />

        <div class="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 transition-all duration-300">
            <Navbar />

            <main class="flex-1 px-6 py-[19px] flex flex-col h-[calc(100vh-64px)] overflow-hidden">
                <h1 class="text-[20px] font-bold text-[#0F1114] leading-[100%] mb-5 shrink-0">Messages</h1>

                <div class="flex-1 border border-[#0F11141A] rounded-[24px] flex overflow-hidden bg-primary">

                    <!-- Thread Directory (hidden on mobile when chat is open) -->
                    <div class="border-r border-[#0F11141A] flex flex-col shrink-0 transition-all duration-300" :class="[
                        'w-full lg:w-[272px]',
                        showChat ? 'hidden lg:flex' : 'flex'
                    ]">
                        <div class="pt-[22px] pl-[21px] pr-6 pb-4 border-b border-[#0F11141A] mb-4">
                            <div class="flex items-center justify-between gap-2 mb-[13px]">
                                <h2 class="ml-[3px] text-[16px] font-bold text-[#0F1114] leading-[100%]">
                                    Threads
                                </h2>
                                <button
                                    class="text-[12px] font-extrabold text-[#004CE5] flex items-center gap-[6px] uppercase tracking-[-2%] leading-[100%]">
                                    <span class="text-[12px]">+</span> New
                                </button>
                            </div>

                            <div
                                class="relative flex items-center h-10 px-4 rounded-[80px] bg-primary border border-[#0F11141A]">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F111466"
                                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                                <input v-model="searchQuery" type="text" placeholder="Search threads"
                                    class="ml-2 flex-1 text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] outline-none" />
                            </div>
                        </div>

                        <div class="flex flex-col gap-2 overflow-y-auto scrollbar-hide pl-4 pr-[17px]">
                            <div v-for="thread in threads" :key="thread.id" @click="selectThread(thread.id)"
                                class="flex items-center gap-3 pl-3 pr-8 py-[11px] cursor-pointer transition-all border rounded-[12px] relative"
                                :class="thread.active
                                    ? 'bg-[#004CE50D] border-[#004CE580]'
                                    : 'border-[#0F11141A]'">
                                <div
                                    class="h-8 w-8 rounded-[6px] bg-[#F2F6FF] border border-[#004CE51A] flex items-center justify-center text-[#004CE5] text-[12px] font-extrabold leading-[100%] tracking-[-0.02em] shrink-0">
                                    {{ thread.initial }}
                                </div>

                                <div
                                    class="absolute top-[6px] right-[9px] text-[10px] font-bold text-[#0F111499] leading-[100%] tracking-[-0.02em]">
                                    {{ thread.time }}</div>

                                <div class="flex-1 min-w-0">
                                    <div
                                        class="text-[14px] font-semibold text-[#0F1114] leading-[100%] tracking-[-0.02em] mb-[1px]">
                                        {{ thread.name }}</div>
                                    <div
                                        class="text-[12px] font-semibold text-[#0F111499] leading-[100%] truncate tracking-[-0.02em]">
                                        {{ thread.lastMessage }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Chat Area (hidden on mobile when directory is shown) -->
                    <div class="flex-1 flex flex-col min-w-0" :class="showChat ? 'flex' : 'hidden lg:flex'">

                        <div class="p-4 pt-[13px] shrink-0">
                            <!-- Back button (mobile only) -->
                            <button @click="goBack"
                                class="lg:hidden flex items-center gap-1 text-[12px] font-bold text-[#004CE5] mb-3">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                                Back
                            </button>

                            <h2 class="text-[16px] font-bold text-[#0F1114] leading-[100%] mb-[1px]">{{
                                activeThread?.name }}</h2>

                            <p class="text-[12px] font-medium text-[#0F111499] leading-4 tracking-[-0.02em] mb-3">
                                you and landlord are now connected on Messenger! • Jan 28
                            </p>

                            <div class="flex items-center gap-2 flex-wrap">
                                <div v-for="p in participants" :key="p.name"
                                    class="flex items-center gap-[7px] pt-2 pb-[9px] pl-[9px] pr-[11px] border border-[#0F11141A] rounded-[10px]">
                                    <div
                                        class="h-6 w-6 rounded-[6px] border border-[#0F11141A] bg-[#F2F6FF] flex items-center justify-center text-[#004CE5] text-[10px] font-extrabold leading-[100%] tracking-[-0.02em] shrink-0">
                                        {{ p.initial }}
                                    </div>
                                    <div class="flex flex-col">
                                        <span
                                            class="text-[12px] font-bold text-[#0F1114] leading-[100%] tracking-[-0.02em]">
                                            {{ p.name }}</span>
                                        <span
                                            class="text-[10px] font-bold text-[#0F111466] leading-[100%] tracking-[-0.02em]">
                                            {{ p.role }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            class="flex-1 overflow-y-auto p-4 bg-[#F5F6FA] border-y border-[#0F11141A] flex flex-col gap-4 scrollbar-hide">
                            <div class="flex justify-center mb-[10px]">
                                <div
                                    class="px-4 py-[7px] bg-white border border-[#004CE533] rounded-[40px] text-[12px] font-extrabold text-[#0F1114] leading-[100%] tracking-[-0.02em]">
                                    Today
                                </div>
                            </div>

                            <div v-for="(msg, i) in chatMessages" :key="i" class="flex flex-col"
                                :class="msg.isSelf ? 'items-end' : 'items-start'">
                                <div
                                    class="max-w-[80%] bg-primary border border-[#0F11141A] rounded-[12px] px-4 py-[13px] text-[12px] font-semibold leading-4 tracking-[-0.02em] text-[#0F111499]">
                                    <div class="flex items-center gap-2 mb-[5px]">
                                        <span class="text-[14px] font-bold text-[#0F1114] leading-[100%]">
                                            {{ msg.sender }}</span>
                                        <span class="text-[12px] font-bold text-[#0F111466] leading-[100%]">
                                            {{ msg.time }}</span>
                                    </div>
                                    {{ msg.text }}
                                </div>
                            </div>
                        </div>

                        <div class="py-[14px] pl-4 pr-[15px] flex items-center gap-2 shrink-0">
                            <div
                                class="flex-1 relative flex items-center h-10 px-5 rounded-[80px] bg-primary border border-[#0F11141A]">
                                <input v-model="messageText" type="text" placeholder="Type to chat"
                                    class="flex-1 text-[12px] font-semibold text-[#0F1114] placeholder:text-[#0F111466] leading-[100%] tracking-[-0.02em] outline-none" />
                            </div>
                            <button
                                class="h-10 w-10 flex items-center justify-center rounded-full bg-[#0F1114] hover:opacity-80 transition-opacity">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white"
                                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path
                                        d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48">
                                    </path>
                                </svg>
                            </button>
                            <button
                                class="h-10 pl-[18px] pr-[19px] py-2 rounded-[80px] text-primary text-[12px] font-extrabold uppercase tracking-[-2%] leading-[100%] flex items-center gap-[6px]"
                                style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%); box-shadow: 0px 4px 8px -2px #004CE580;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-send">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M10 14l11 -11" />
                                    <path
                                        d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                                </svg>
                                SEND
                            </button>
                        </div>
                    </div>
                </div>

            </main>

        </div>

    </div>
</template>
