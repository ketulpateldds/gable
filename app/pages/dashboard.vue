<template>
    <div class="dashboard-layout">
        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="sidebar-logo">
                <span class="logo-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M3 9.5L12 3L21 9.5V21H15V15H9V21H3V9.5Z" fill="#2563EB" stroke="#2563EB"
                            stroke-width="1.5" stroke-linejoin="round" />
                    </svg>
                </span>
                <span class="logo-text">Gable</span>
            </div>

            <nav class="sidebar-nav">
                <NuxtLink v-for="item in navItems" :key="item.label" :to="item.to" class="nav-item"
                    :class="{ active: item.label === 'Dashboard' }">
                    <component :is="item.icon" class="nav-icon" />
                    <span>{{ item.label }}</span>
                </NuxtLink>
            </nav>
        </aside>

        <!-- Main Content -->
        <div class="main-wrapper">
            <!-- Top Bar -->
            <header class="topbar">
                <div class="topbar-left">
                    <div class="search-bar">
                        <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.35-4.35" />
                        </svg>
                        <input type="text" placeholder="Search" class="search-input" />
                    </div>
                </div>
                <div class="topbar-right">
                    <button class="notif-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                        </svg>
                    </button>
                    <div class="user-chip">
                        <div class="user-avatar">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>
                        <div class="user-info">
                            <span class="user-name">Username</span>
                            <span class="user-role">Landlord</span>
                        </div>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>
                </div>
            </header>

            <!-- Page Content -->
            <main class="page-content">
                <h1 class="page-title">Dashboard</h1>

                <!-- Hero Cards -->
                <div class="hero-cards">
                    <div class="hero-card properties-card">
                        <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=200&q=80" alt="Properties"
                            class="hero-card-img" />
                        <div class="hero-card-body">
                            <h3>Properties</h3>
                            <p>View and manage your portfolio</p>
                            <button class="explore-btn">EXPLORE</button>
                        </div>
                    </div>

                    <div class="hero-card tenants-card">
                        <img src="https://images.unsplash.com/photo-1560472355-536de3962603?w=200&q=80" alt="Tenants"
                            class="hero-card-img" />
                        <div class="hero-card-body">
                            <h3>Tenants</h3>
                            <p>Active renters and applications</p>
                            <button class="explore-btn">EXPLORE</button>
                        </div>
                    </div>

                    <div class="hero-card maintenance-card">
                        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80"
                            alt="Maintenance" class="hero-card-img maintenance-img" />
                        <div class="maintenance-overlay">
                            <div class="maintenance-content">
                                <span class="maintenance-label">
                                    Maintenance
                                    <span class="badge">5</span>
                                </span>
                                <span class="maintenance-sub">Open tickets and inspections</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Hot Properties -->
                <section class="hot-properties">
                    <h2 class="section-title">🔥 Hot Properties</h2>
                    <div class="properties-grid">
                        <div v-for="property in properties" :key="property.address" class="property-card">
                            <div class="property-img-wrap">
                                <img :src="property.img" :alt="property.address" class="property-img" />
                                <button class="property-menu-btn">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <circle cx="12" cy="5" r="1.5" />
                                        <circle cx="12" cy="12" r="1.5" />
                                        <circle cx="12" cy="19" r="1.5" />
                                    </svg>
                                </button>
                            </div>
                            <div class="property-body">
                                <div class="property-address">{{ property.address }}</div>
                                <div class="property-location">{{ property.location }}</div>
                                <div class="property-stats">
                                    <div class="stat">
                                        <span class="stat-val">{{ property.tenants }}</span>
                                        <span class="stat-label">Tenants</span>
                                    </div>
                                    <div class="stat">
                                        <span class="stat-val">{{ property.tickets }}</span>
                                        <span class="stat-label">Open Tickets</span>
                                    </div>
                                    <div class="stat">
                                        <span class="stat-val"
                                            :class="{ 'text-green': property.balance > 0, 'text-gray': property.balance === 0 }">
                                            {{ property.balance > 0 ? `$${property.balance}` : '$0' }}
                                        </span>
                                        <span class="stat-label">Balance</span>
                                    </div>
                                </div>
                                <div class="property-actions">
                                    <button class="action-btn">OPEN</button>
                                    <button class="action-btn">LEDGER</button>
                                    <button class="action-btn">MAINT...</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </div>
</template>

<script setup>
import { defineComponent, h } from 'vue'

// SVG Icon components
const makeIcon = (paths) => defineComponent({
    render: () => h('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, paths.map(d => h('path', { d })))
})

const IconDashboard = defineComponent({ render: () => h('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [h('rect', { x: '3', y: '3', width: '7', height: '7', rx: '1' }), h('rect', { x: '14', y: '3', width: '7', height: '7', rx: '1' }), h('rect', { x: '3', y: '14', width: '7', height: '7', rx: '1' }), h('rect', { x: '14', y: '14', width: '7', height: '7', rx: '1' })]) })
const IconPortfolio = makeIcon(['M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'])
const IconTenants = makeIcon(['M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2', 'M23 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75', 'M9 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0'])
const IconListings = makeIcon(['M8 6h13', 'M8 12h13', 'M8 18h13', 'M3 6h.01', 'M3 12h.01', 'M3 18h.01'])
const IconApplications = makeIcon(['M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z', 'M14 2v6h6', 'M16 13H8', 'M16 17H8', 'M10 9H8'])
const IconAccounting = makeIcon(['M12 2v20', 'M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'])
const IconDocuments = makeIcon(['M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z', 'M14 2v6h6'])
const IconMaintenance = makeIcon(['M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'])
const IconInspections = makeIcon(['M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z', 'M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z'])
const IconCalendar = makeIcon(['M3 4h18v18H3z', 'M16 2v4', 'M8 2v4', 'M3 10h18'])
const IconContacts = makeIcon(['M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2', 'M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z'])
const IconMessages = makeIcon(['M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'])
const IconSettings = makeIcon(['M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z', 'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z'])

const navItems = [
    { label: 'Dashboard', to: '/dashboard', icon: IconDashboard },
    { label: 'Portfolio', to: '/portfolio', icon: IconPortfolio },
    { label: 'Tenants', to: '/tenants', icon: IconTenants },
    { label: 'Listings', to: '/listings', icon: IconListings },
    { label: 'Applications', to: '/applications', icon: IconApplications },
    { label: 'Accounting', to: '/accounting', icon: IconAccounting },
    { label: 'Documents', to: '/documents', icon: IconDocuments },
    { label: 'Maintenance', to: '/maintenance', icon: IconMaintenance },
    { label: 'Inspections', to: '/inspections', icon: IconInspections },
    { label: 'Calendar', to: '/calendar', icon: IconCalendar },
    { label: 'Contacts', to: '/contacts', icon: IconContacts },
    { label: 'Messages', to: '/messages', icon: IconMessages },
    { label: 'Settings', to: '/settings', icon: IconSettings },
]

const properties = [
    {
        address: '123 Oak St',
        location: 'Oakland, CA · 4 units',
        tenants: 4,
        tickets: 1,
        balance: 0,
        img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80',
    },
    {
        address: '78 Brookwood Pl',
        location: 'Oakland, CA · Single-family',
        tenants: 0,
        tickets: 0,
        balance: 0,
        img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&q=80',
    },
    {
        address: '55 Crystal Falls Dr',
        location: 'Leander, TX · 3 bed / 2 bath',
        tenants: 1,
        tickets: 2,
        balance: 120,
        img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&q=80',
    },
    {
        address: '901 Market St',
        location: 'San Francisco, CA · 12 units',
        tenants: 14,
        tickets: 1,
        balance: 0,
        img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80',
    },
]
</script>

<style scoped>
/* ─── Layout ─────────────────────────────────────────── */
.dashboard-layout {
    display: flex;
    min-height: 100vh;
    background: #FFFFFF;
    font-family: 'DM Sans', 'Segoe UI', sans-serif;
}

/* ─── Sidebar ─────────────────────────────────────────── */
.sidebar {
    width: 200px;
    min-height: 100vh;
    background: #FFFFFF;
    color: #0f172a;
    display: flex;
    flex-direction: column;
    padding: 0;
    flex-shrink: 0;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 100;
    overflow-y: auto;
}

.sidebar-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 18px 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    margin-bottom: 8px;
}

.logo-icon {
    width: 32px;
    height: 32px;
    background: #fff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo-text {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.3px;
}

.sidebar-nav {
    display: flex;
    flex-direction: column;
    padding: 4px 10px;
    gap: 2px;
}

.nav-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 12px;
    border-radius: 8px;
    text-decoration: none;
    font-size: 13.5px;
    font-weight: 500;
    transition: background 0.15s, color 0.15s;
}

.nav-item:hover {
    background: rgba(255, 255, 255, 0.07);
    color: #e2e8f0;
}

.nav-item.active {
    background: #2563eb;
    color: #fff;
}

.nav-icon {
    flex-shrink: 0;
    opacity: 0.85;
}

/* ─── Main Wrapper ─────────────────────────────────────── */
.main-wrapper {
    flex: 1;
    margin-left: 200px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

/* ─── Topbar ──────────────────────────────────────────── */
.topbar {
    height: 60px;
    background: #fff;
    border-bottom: 1px solid #e8edf3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    position: sticky;
    top: 0;
    z-index: 50;
}

.topbar-left {
    display: flex;
    align-items: center;
    gap: 16px;
}

.search-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #f1f5f9;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 7px 14px;
    width: 280px;
}

.search-icon {
    color: #94a3b8;
    flex-shrink: 0;
}

.search-input {
    border: none;
    background: transparent;
    outline: none;
    font-size: 13.5px;
    color: #374151;
    width: 100%;
}

.search-input::placeholder {
    color: #94a3b8;
}

.topbar-right {
    display: flex;
    align-items: center;
    gap: 12px;
}

.notif-btn {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #64748b;
    cursor: pointer;
    transition: background 0.15s;
}

.notif-btn:hover {
    background: #f8fafc;
}

.user-chip {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px 6px 8px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    background: #fff;
    cursor: pointer;
    transition: background 0.15s;
}

.user-chip:hover {
    background: #f8fafc;
}

.user-avatar {
    width: 28px;
    height: 28px;
    background: #e0eaff;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2563eb;
}

.user-info {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
}

.user-name {
    font-size: 12.5px;
    font-weight: 600;
    color: #1e293b;
}

.user-role {
    font-size: 11px;
    color: #94a3b8;
}

/* ─── Page Content ────────────────────────────────────── */
.page-content {
    padding: 28px 28px 40px;
    flex: 1;
}

.page-title {
    font-size: 22px;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 20px;
    letter-spacing: -0.3px;
}

/* ─── Hero Cards ──────────────────────────────────────── */
.hero-cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    margin-bottom: 32px;
}

.hero-card {
    background: #fff;
    border-radius: 14px;
    overflow: hidden;
    display: flex;
    align-items: stretch;
    border: 1px solid #e8edf3;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
}

.hero-card-img {
    width: 130px;
    height: 100%;
    object-fit: cover;
    flex-shrink: 0;
}

.hero-card-body {
    padding: 18px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
}

.hero-card-body h3 {
    font-size: 16px;
    font-weight: 700;
    color: #0f172a;
    margin: 0;
}

.hero-card-body p {
    font-size: 12.5px;
    color: #64748b;
    margin: 0 0 12px;
    line-height: 1.4;
}

.explore-btn {
    align-self: flex-start;
    padding: 8px 20px;
    border-radius: 999px;
    border: 1.5px solid #0f172a;
    background: transparent;
    font-size: 11.5px;
    font-weight: 700;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: background 0.15s, color 0.15s;
}

.explore-btn:hover {
    background: #0f172a;
    color: #fff;
}

/* Maintenance card */
.maintenance-card {
    position: relative;
    overflow: hidden;
    min-height: 120px;
}

.maintenance-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.maintenance-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.65) 0%, rgba(15, 23, 42, 0.3) 100%);
    display: flex;
    align-items: flex-end;
    padding: 20px;
}

.maintenance-content {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.maintenance-label {
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 8px;
}

.badge {
    background: #ef4444;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.maintenance-sub {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.78);
}

/* ─── Hot Properties ──────────────────────────────────── */
.section-title {
    font-size: 17px;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 16px;
}

.properties-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
}

.property-card {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #e8edf3;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
    transition: box-shadow 0.2s, transform 0.2s;
}

.property-card:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
}

.property-img-wrap {
    position: relative;
    height: 140px;
}

.property-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.property-menu-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 28px;
    height: 28px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #374151;
}

.property-body {
    padding: 12px 14px 14px;
}

.property-address {
    font-size: 13.5px;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 2px;
}

.property-location {
    font-size: 11.5px;
    color: #64748b;
    margin-bottom: 12px;
}

.property-stats {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid #f1f5f9;
}

.stat {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.stat-val {
    font-size: 14px;
    font-weight: 700;
    color: #0f172a;
}

.stat-val.text-green {
    color: #16a34a;
}

.stat-val.text-gray {
    color: #64748b;
}

.stat-label {
    font-size: 10.5px;
    color: #94a3b8;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.property-actions {
    display: flex;
    gap: 6px;
}

.action-btn {
    flex: 1;
    padding: 6px 4px;
    background: #f1f5f9;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    font-size: 10.5px;
    font-weight: 600;
    color: #475569;
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s;
    letter-spacing: 0.2px;
}

.action-btn:hover {
    background: #e2e8f0;
    border-color: #cbd5e1;
}

/* ─── Responsive ──────────────────────────────────────── */
@media (max-width: 1200px) {
    .properties-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 900px) {
    .hero-cards {
        grid-template-columns: 1fr 1fr;
    }

    .maintenance-card {
        grid-column: 1 / -1;
        min-height: 100px;
    }
}

@media (max-width: 768px) {
    .sidebar {
        width: 64px;
    }

    .sidebar-logo .logo-text,
    .nav-item span {
        display: none;
    }

    .sidebar-logo {
        justify-content: center;
        padding: 18px 12px;
    }

    .nav-item {
        justify-content: center;
        padding: 10px;
    }

    .main-wrapper {
        margin-left: 64px;
    }

    .hero-cards {
        grid-template-columns: 1fr;
    }

    .hero-card-img {
        width: 100px;
    }

    .maintenance-card {
        grid-column: auto;
        min-height: 100px;
    }

    .properties-grid {
        grid-template-columns: 1fr 1fr;
    }

    .search-bar {
        width: 180px;
    }
}

@media (max-width: 520px) {
    .properties-grid {
        grid-template-columns: 1fr;
    }

    .page-content {
        padding: 20px 16px 32px;
    }

    .user-info {
        display: none;
    }

    .search-bar {
        width: 140px;
    }
}
</style>