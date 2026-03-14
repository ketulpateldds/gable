<script setup>
import { ref, computed, reactive } from 'vue'

const props = defineProps({
    role: {
        type: String,
        default: 'landlord',
        validator: (v) => ['landlord', 'tenant'].includes(v)
    }
})

const frequency = ref('INSTANTLY')
const frequencies = ['INSTANTLY', 'HOURLY', 'DAILY']
const unsubscribe = ref(false)

// ─── All Notification Sections ──────────────────────────────────────────────
const allSections = reactive([
    {
        title: 'Security',
        role: 'both',
        settings: [
            { id: 'login', label: 'Notification about all Login activity.', email: true, feed: false, sms: false }
        ]
    },
    {
        title: 'Subscription',
        role: 'both',
        settings: [
            { id: 'sub', label: 'Notification about upcoming subscription renewal.', email: false, feed: false, sms: false }
        ]
    },
    {
        title: 'New Matches',
        role: 'tenant',
        settings: [
            { id: 'matches', label: 'Daily notification about new listings matching your search criteria.', email: false, feed: false, sms: false }
        ]
    },
    {
        title: 'New Leads',
        role: 'landlord',
        settings: [
            { id: 'leads', label: 'Notifications about new leads.', email: false, feed: false, sms: false, hasFrequency: true }
        ]
    },
    {
        title: 'Communication',
        role: 'both',
        settings: [
            { id: 'msgs', label: 'Notification about new messages.', email: false, feed: false, sms: false }
        ]
    },
    {
        title: 'Application',
        role: 'tenant',
        settings: [
            { id: 'msgs', label: 'Notifications when your landlord updates an application status.', email: false, feed: false, sms: false }
        ]
    },
    {
        title: 'Rental Application',
        role: 'landlord',
        settings: [
            { id: 'app_submitted', label: 'Notifications about new applications submitted by tenants.', email: false, feed: false, sms: false },
            { id: 'app_not_submitted', label: 'Notify when tenants did not submit applications.', email: false, feed: false, sms: false },
            { id: 'app_fee_paid', label: 'Notify when tenants paid application fees.', email: false, feed: false, sms: false },
        ]
    },
    {
        title: 'Online Payments',
        role: 'landlord',
        settings: [
            { id: 'payment_made', label: 'Notification about online payments made.', email: false, feed: false, sms: false },
            { id: 'payment_initiated', label: 'Notify when online payment is initiated.', email: false, feed: false, sms: false },
            { id: 'payment_cleared', label: 'Notify when online payment is successfully cleared.', email: false, feed: false, sms: false },
            { id: 'payment_failed', label: 'Notify when online payment is failed.', email: false, feed: false, sms: false },
        ]
    },
    {
        title: 'Tasks Assigned',
        role: 'landlord',
        settings: [
            { id: 'tasks_assigned', label: 'Notifications about assigned notes/tasks.', email: false, feed: false, sms: false }
        ]
    },
    {
        title: 'Connection Updates',
        role: 'landlord',
        settings: [
            { id: 'connections', label: 'Notifications about approved or declined connections.', email: false, feed: false, sms: false }
        ]
    },
    {
        title: 'Properties',
        role: 'landlord',
        settings: [
            { id: 'rental_reports_property_insurance', label: 'Notifications about rental reports and property insurance expiration.', email: false, feed: false, sms: false },
            { id: 'rental_report_ready', label: 'Notify when rental report is ready.', email: false, feed: false, sms: false },
            { id: 'property_insurance_expired', label: 'Notify when property insurance expired.', email: false, feed: false, sms: false }
        ]
    },
    {
        title: 'Listings',
        role: 'landlord',
        settings: [
            { id: 'listing_questions_tour_requests', label: 'Notifications about listings declined by listing services, listings new questions and tour requests.', email: false, feed: false, sms: false },
            { id: 'listing_questions_tour_requests', label: 'Notify about new questions and tour requests from potential tenants.', email: false, feed: false, sms: false },
            { id: 'listings_declined', label: 'Notify about your listings declined by listing services.', email: false, feed: false, sms: false }
        ]
    },
    {
        title: 'Listings',
        role: 'tenant',
        settings: [
            { id: 'listing_questions_tour_requests', label: 'Notifications regarding changes to favorited and invited listings.', email: false, feed: false, sms: false },
        ]
    },
    {
        title: 'Utility Setups',
        role: 'landlord',
        settings: [
            { id: 'tenant_activated_utilities', label: 'Notification when the tenant activated utilities for the lease.', email: false, feed: false, sms: false }
        ]
    },
    {
        title: 'Utility Setups',
        role: 'tenant',
        settings: [
            { id: 'tenant_activated_utilities', label: 'Notifications when utilities activated/disabled, purchases and utility setup.', email: false, feed: false, sms: false },
            { id: 'tenant_activated_utilities', label: 'Notify when utilities are enabled/disabled by landlord', email: false, feed: false, sms: false },
            { id: 'tenant_activated_utilities', label: 'Notify when utilities are not activated before lease start', email: false, feed: false, sms: false },
            { id: 'tenant_activated_utilities', label: 'Notify when internet purchase requested', email: false, feed: false, sms: false },
            { id: 'tenant_activated_utilities', label: 'Notify when landlord updated utility information', email: false, feed: false, sms: false },
        ]
    },
    {
        title: 'Invoices',
        role: 'both',
        settings: [
            { id: 'property_general_invoices', label: 'Notification about property and general invoices.', email: false, feed: false, sms: false },
            { id: 'invoice_posted', label: 'Notify when invoice is posted.', email: false, feed: false, sms: false },
            { id: 'rent_invoice_due', label: 'Notify when rent invoice is due.', email: false, feed: false, sms: false },
            { id: 'rent_invoice_overdue', label: 'Notify when rent invoice is overdue.', email: false, feed: false, sms: false },
            { id: 'rent_invoice_overdue', label: 'Notify when late fee is posted', email: false, feed: false, sms: false },
        ]
    },
    {
        title: 'Lease',
        role: 'landlord',
        settings: [
            { id: 'lease_updates_notices_insurance', label: 'Notifications about lease updates, notices, and insurance.', email: false, feed: false, sms: false },
            { id: 'lease_expired', label: 'Notify when lease is expired', email: false, feed: false, sms: false },
            { id: 'renters_insurance_provided', label: 'Notify when renters insurance is provided', email: false, feed: false, sms: false },
            { id: 'renters_insurance_expired', label: 'Notify when renters insurance expired', email: false, feed: false, sms: false },
            { id: 'lease_notice_agreement_signed', label: 'Notify when lease/notice/agreement is signed', email: false, feed: false, sms: false }
        ]
    },
    {
        title: 'Lease',
        role: 'tenant',
        settings: [
            { id: 'lease_expired', label: 'Notify when lease is shared', email: false, feed: false, sms: false },
            { id: 'renters_insurance_provided', label: 'Notify when signature/insurance required', email: false, feed: false, sms: false },
            { id: 'renters_insurance_expired', label: 'Notify when renters insurance expired', email: false, feed: false, sms: false },
            { id: 'lease_notice_agreement_signed', label: 'Notify when insurance requested', email: false, feed: false, sms: false }
        ]
    },
    {
        title: 'Rent reporting',
        role: 'tenant',
        settings: [
            { id: 'move_in_checklist', label: 'Notify about reporting to credit bureaus enabled/disabled', email: false, feed: false, sms: false },
            { id: 'move_in_checklist', label: 'Notify a day before when auto pay initiated', email: false, feed: false, sms: false },
            { id: 'move_out_reminder', label: 'Notify about failed/successfully payment', email: false, feed: false, sms: false }
        ]
    },
    {
        title: 'Move-In / Move-Out',
        role: 'tenant',
        settings: [
            { id: 'move_in_checklist', label: 'Notify when inspection is required to submit', email: false, feed: false, sms: false },
            { id: 'move_in_checklist', label: 'Notify when inspection invitation to submit is about to expire', email: false, feed: false, sms: false },
            { id: 'move_out_reminder', label: 'Notify when inspection is completed by landlord', email: false, feed: false, sms: false }
        ]
    },
    {
        title: 'Maintenance Requests',
        role: 'both',
        settings: [
            { id: 'maintenance_request_updates', label: 'Notifications about request updates.', email: false, feed: false, sms: false },
            { id: 'new_request', label: 'Notify about new request.', email: false, feed: false, sms: false },
            { id: 'request_status_changes', label: 'Notify about status changes.', email: false, feed: false, sms: false },
            { id: 'request_message', label: 'Notify about request message.', email: false, feed: false, sms: false },
            { id: 'request_resolved', label: 'Notify about request resolved.', email: false, feed: false, sms: false }
        ]
    },
    {
        title: 'Job Invitations',
        role: 'landlord',
        settings: [
            { id: 'job_invitation_updates', label: 'Notifications about job invitations updates.', email: false, feed: false, sms: false },
            { id: 'bidding_request_received', label: 'Notify about bidding request received.', email: false, feed: false, sms: false },
            { id: 'bidding_invitation_expired', label: 'Notify about bidding invitation expired.', email: false, feed: false, sms: false },
            { id: 'job_invitation_cancelled', label: 'Notify when job invitation cancelled.', email: false, feed: false, sms: false },
            { id: 'rate_review_published_declined', label: 'Notify when rate & review published/declined.', email: false, feed: false, sms: false }
        ]
    },
    {
        title: 'Tips and Offers',
        role: 'both',
        settings: [
            { id: 'tips_offers_promos_updates', label: 'Text messages with promos, feature updates, and recommendations.', email: true, feed: false, sms: false }
        ]
    }
])

// ─── Computed merged sections based on role ──────────────────────────────────
const sections = computed(() => {
    return allSections.filter(section => section.role === 'both' || section.role === props.role)
})

const toggleCheckbox = (setting, type) => {
    setting[type] = !setting[type]
}
</script>

<template>
    <div class="border border-[#0F11141A] rounded-[24px]">
        <div class="pt-[21px] pb-6">
            <h2 class="px-6 text-[16px] font-bold text-[#0F1114] leading-[100%] pb-5">
                Notifications</h2>

            <div class="px-6 flex items-center justify-between bg-[#FAFAFA] border-y border-[#0F11141A]">
                <h2 class="py-[14px] text-[12px] font-bold text-[#0F111499] leading-[100%] tracking-[-2%]">
                    Notifications</h2>

                <div class="hidden sm:flex py-[14px] gap-[37px]">
                    <p class="text-[12px] font-bold text-[#0F111499] leading-[100%] tracking-[-2%]">
                        Email</p>
                    <p class="text-[12px] font-bold text-[#0F111499] leading-[100%] tracking-[-2%]">
                        Feed</p>
                    <p class="text-[12px] font-bold text-[#0F111499] leading-[100%] tracking-[-2%]">
                        SMS</p>
                </div>
            </div>

            <div v-for="section in sections" :key="section.title">
                <p
                    class="px-6 pt-[21px] pb-5 text-[14px] font-bold text-[#0F1114] leading-[100%] tracking-[-2%] border-b border-[#0F11141A]">
                    {{ section.title }}</p>

                <div v-for="(setting, sIdx) in section.settings" :key="sIdx" class="px-6 border-b border-[#0F11141A]">

                    <div class="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-4 sm:gap-0">
                        <p class="text-[14px] font-medium text-[#0F1114] leading-[100%] tracking-[-2%]">
                            {{ setting.label }}</p>

                        <div class="flex items-center gap-6 sm:gap-[50px]">
                            <div class="flex items-center gap-2 sm:hidden">
                                <span class="text-[10px] font-bold text-[#0F111499] uppercase">Email</span>
                                <button @click="toggleCheckbox(setting, 'email')"
                                    class="h-4 w-4 flex-shrink-0 flex items-center justify-center transition-colors"
                                    :class="setting.email ? 'bg-[#0055FF] border-[#0055FF]' : 'bg-white border border-[#0F1114]'">
                                    <svg v-if="setting.email" width="12" height="12" viewBox="0 0 24 24" fill="none"
                                        stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </button>
                            </div>
                            <button @click="toggleCheckbox(setting, 'email')"
                                class="hidden sm:flex h-4 w-4 flex-shrink-0 items-center justify-center transition-colors"
                                :class="setting.email ? 'bg-[#0055FF] border-[#0055FF]' : 'bg-white border border-[#0F1114]'">
                                <svg v-if="setting.email" width="12" height="12" viewBox="0 0 24 24" fill="none"
                                    stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </button>

                            <div class="flex items-center gap-2 sm:hidden">
                                <span class="text-[10px] font-bold text-[#0F111499] uppercase">Feed</span>
                                <button @click="toggleCheckbox(setting, 'feed')"
                                    class="h-4 w-4 flex-shrink-0 flex items-center justify-center transition-colors"
                                    :class="setting.feed ? 'bg-[#0055FF] border-[#0055FF]' : 'bg-white border border-[#0F1114]'">
                                    <svg v-if="setting.feed" width="12" height="12" viewBox="0 0 24 24" fill="none"
                                        stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </button>
                            </div>
                            <button @click="toggleCheckbox(setting, 'feed')"
                                class="hidden sm:flex h-4 w-4 flex-shrink-0 items-center justify-center transition-colors"
                                :class="setting.feed ? 'bg-[#0055FF] border-[#0055FF]' : 'bg-white border border-[#0F1114]'">
                                <svg v-if="setting.feed" width="12" height="12" viewBox="0 0 24 24" fill="none"
                                    stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </button>

                            <div class="flex items-center gap-2 sm:hidden">
                                <span class="text-[10px] font-bold text-[#0F111499] uppercase">SMS</span>
                                <button @click="toggleCheckbox(setting, 'sms')"
                                    class="h-4 w-4 flex-shrink-0 flex items-center justify-center transition-colors"
                                    :class="setting.sms ? 'bg-[#0055FF] border-[#0055FF]' : 'bg-white border border-[#0F1114]'">
                                    <svg v-if="setting.sms" width="12" height="12" viewBox="0 0 24 24" fill="none"
                                        stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </button>
                            </div>
                            <button @click="toggleCheckbox(setting, 'sms')"
                                class="hidden sm:flex h-4 w-4 flex-shrink-0 items-center justify-center transition-colors"
                                :class="setting.sms ? 'bg-[#0055FF] border-[#0055FF]' : 'bg-white border border-[#0F1114]'">
                                <svg v-if="setting.sms" width="12" height="12" viewBox="0 0 24 24" fill="none"
                                    stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div v-if="setting.hasFrequency" class="flex flex-wrap gap-1 pb-[18px] mt-[-7px]">
                        <button v-for="freq in frequencies" :key="freq" @click="frequency = freq"
                            class="py-[9px] px-[14px] rounded-[80px] border border-[#0F11141A] bg-[#0F111405] text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] transition-colors flex items-center gap-[7px] text-[#0F1114]">
                            <div
                                class="w-3 h-3 rounded-full border-2 border-[#0F11141A] flex items-center justify-center">
                                <div v-if="frequency === freq" class="w-[8px] h-[8px] rounded-full bg-[#0F1114]"></div>
                            </div>
                            {{ freq }}
                        </button>
                    </div>
                </div>
            </div>

            <div class="px-6 flex items-center justify-start my-4">
                <div
                    class="px-4 py-[9px] bg-[#0F111405] border border-[#0F11141A] rounded-[80px] flex items-center gap-2 text-[12px] font-semibold uppercase leading-[100%] tracking-[-2%] text-[#0F1114]">
                    <button @click="unsubscribe = !unsubscribe"
                        class="h-3 w-3 flex-shrink-0 flex items-center justify-center transition-colors"
                        :class="unsubscribe ? 'bg-[#0055FF] border-[#0055FF]' : 'bg-white border border-[#0F1114]'">
                        <svg v-if="unsubscribe" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white"
                            stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </button>
                    Unsubscribe from receiving text messages
                </div>
            </div>

            <div class="px-6 flex justify-end">
                <button
                    class="px-5 py-[14px] rounded-[80px] flex items-center gap-2 text-[12px] font-extrabold uppercase leading-[100%] tracking-[-2%] text-primary"
                    style="background: linear-gradient(225.01deg, #3388FF 0%, #004CE6 100%);">
                    Update
                </button>
            </div>
        </div>
    </div>
</template>
