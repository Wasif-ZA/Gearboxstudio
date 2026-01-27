"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    LayoutDashboard,
    FileText,
    CreditCard,
    Users,
    Settings,
    ArrowUpRight,
    ArrowDownRight,
    Search,
    Bell,
    Menu,
    CheckCircle,
    Ellipsis,
    Filter,
    Download
} from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// --- MOCK DATA & TYPES ---

type ViewState = "overview" | "invoices" | "customers" | "settings";

const MOCK_TRANSACTIONS = [
    { id: 1, name: "Woolworths Group", email: "accounts@woolworths.com.au", date: "Today, 10:23 AM", amount: "$15,250.00", status: "Completed", avatar: "W" },
    { id: 2, name: "Atlassian Pty Ltd", email: "billing@atlassian.com", date: "Yesterday, 4:00 PM", amount: "$3,120.50", status: "Pending", avatar: "A" },
    { id: 3, name: "Telstra Corp", email: "finance@telstra.com.au", date: "Jan 15, 2026", amount: "$8,450.00", status: "Completed", avatar: "T" },
    { id: 4, name: "Canva Design", email: "invoices@canva.com", date: "Jan 12, 2026", amount: "$2,950.00", status: "Failed", avatar: "C" },
];

const MOCK_CUSTOMERS = [
    { id: 1, name: "Commonwealth Bank", status: "Active", mrr: "$45,000", users: 342 },
    { id: 2, name: "Macquarie Group", status: "Active", mrr: "$32,500", users: 156 },
    { id: 3, name: "Qantas Airways", status: "Churned", mrr: "$0", users: 0 },
    { id: 4, name: "Rio Tinto", status: "Active", mrr: "$28,900", users: 89 },
    { id: 5, name: "Wesfarmers", status: "Warning", mrr: "$12,400", users: 45 },
];

const CHART_DATA_6_MONTHS = [
    { label: "Jan", height: "40%", value: "$12k" },
    { label: "Feb", height: "55%", value: "$18k" },
    { label: "Mar", height: "85%", value: "$32k" },
    { label: "Apr", height: "45%", value: "$15k" },
    { label: "May", height: "65%", value: "$24k" },
];

const CHART_DATA_30_DAYS = [
    { label: "Wk 1", height: "30%", value: "$8k" },
    { label: "Wk 2", height: "45%", value: "$12k" },
    { label: "Wk 3", height: "60%", value: "$19k" },
    { label: "Wk 4", height: "90%", value: "$28k" },
    { label: "Wk 5", height: "75%", value: "$22k" },
];

// --- MAIN COMPONENT ---

export function Hero() {
    const { scrollY } = useScroll();
    const yPos = useTransform(scrollY, [0, 600], [0, -80], { clamp: true });

    // -- FUNCTIONAL STATE --
    const [activeView, setActiveView] = useState<ViewState>("overview");
    const [timeRange, setTimeRange] = useState("6m"); // '6m' or '30d'
    const [chartData, setChartData] = useState(CHART_DATA_6_MONTHS);
    const [stats, setStats] = useState({ receivable: "$252,057", collected: "$9,150", interactions: "843" });

    // Simulate Data Refresh when Time Range changes
    useEffect(() => {
        if (timeRange === "6m") {
            setChartData(CHART_DATA_6_MONTHS);
            setStats({ receivable: "$252,057", collected: "$9,150", interactions: "843" });
        } else {
            setChartData(CHART_DATA_30_DAYS);
            setStats({ receivable: "$84,200", collected: "$22,400", interactions: "312" });
        }
    }, [timeRange]);

    return (
        <section className="relative w-full flex flex-col items-center bg-[#FAFAFA] overflow-hidden font-sans selection:bg-lime-200 pt-24 pb-32 md:pt-32 md:pb-48">

            {/* --- 1. NEW GRID PATTERN --- */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-60" />

            {/* --- 2. ENHANCED AMBIENT GLOWS (More Vibrant) --- */}
            <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-[#d9f99d] rounded-full blur-[120px] opacity-40 pointer-events-none mix-blend-multiply" />
            <div className="absolute top-[10%] right-[-15%] w-[60vw] h-[60vw] bg-emerald-100 rounded-full blur-[120px] opacity-50 pointer-events-none mix-blend-multiply" />
            {/* Added a third central glow for depth */}
            <div className="absolute top-[20%] left-[30%] w-[40vw] h-[40vw] bg-blue-50 rounded-full blur-[100px] opacity-30 pointer-events-none mix-blend-multiply" />

            {/* --- HERO TEXT --- */}
            <div className="container relative z-10 px-4 mb-16 md:mb-20 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl space-y-8"
                >
                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] md:leading-[1.05]">
                        Collections in <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-600 to-lime-600">
                            Autopilot Mode
                        </span>
                    </h1>

                    <p className="text-base md:text-xl text-slate-500 font-medium max-w-xs sm:max-w-xl mx-auto leading-relaxed">
                        Maximize recovery, minimize costs. The intelligent platform that turns debt into revenue automatically.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-2">
                        <Button className="h-12 px-8 text-base font-bold bg-[#d9f99d] text-emerald-950 hover:bg-[#bef264] border border-lime-200 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                            Schedule Demo
                        </Button>
                        <Button variant="ghost" className="h-12 px-8 text-base font-medium text-slate-600 hover:bg-slate-100 rounded-xl transition-all">
                            View Pricing
                        </Button>
                    </div>

                    <div className="flex items-center justify-center gap-4 text-xs text-slate-500 font-medium pt-2">
                        <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-emerald-500" /> No credit card required</span>
                        <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-emerald-500" /> 14-day free trial</span>
                    </div>
                </motion.div>
            </div>

            {/* --- FUNCTIONAL DASHBOARD MOCKUP --- */}
            <motion.div
                style={{ y: yPos }}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-[1100px] px-2 sm:px-4 perspective-1200 z-20"
            >
                {/* Added Gradient Border Ring */}
                <div className="relative p-1 rounded-xl md:rounded-[1.6rem] bg-gradient-to-b from-white to-slate-200 shadow-2xl shadow-slate-200/50">
                    <div className="relative bg-white rounded-xl md:rounded-[1.5rem] border border-slate-100 flex flex-col md:flex-row overflow-hidden h-[600px] md:h-auto">

                        {/* --- SIDEBAR (Interactive) --- */}
                        <div className="hidden md:flex flex-col w-64 border-r border-slate-100 bg-slate-50/50 p-5 gap-2 shrink-0 backdrop-blur-sm">
                            <div className="flex items-center gap-3 px-2 mb-6">
                                <div className="w-8 h-8 bg-gradient-to-br from-emerald-800 to-lime-600 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-sm">GB</div>
                                <span className="text-base font-bold text-slate-800 tracking-tight">Gearbox</span>
                            </div>

                            {/* Navigation Items */}
                            <NavItem icon={<LayoutDashboard size={18} />} label="Overview" active={activeView === "overview"} onClick={() => setActiveView("overview")} />
                            <NavItem icon={<FileText size={18} />} label="Invoices" active={activeView === "invoices"} onClick={() => setActiveView("invoices")} />
                            <NavItem icon={<CreditCard size={18} />} label="Payments" active={false} onClick={() => { }} />
                            <NavItem icon={<Users size={18} />} label="Customers" active={activeView === "customers"} onClick={() => setActiveView("customers")} />

                            <div className="mt-auto pt-6 border-t border-slate-200/60">
                                <NavItem icon={<Settings size={18} />} label="Settings" active={activeView === "settings"} onClick={() => setActiveView("settings")} />
                            </div>
                        </div>

                        {/* --- MOBILE HEADER --- */}
                        <div className="md:hidden flex items-center justify-between p-4 border-b border-slate-100 bg-white z-10">
                            <div className="flex items-center gap-2">
                                <div className="w-7 h-7 bg-emerald-800 rounded-md flex items-center justify-center text-white text-[10px] font-bold">GB</div>
                                <span className="font-bold text-slate-800">Gearbox</span>
                            </div>
                            <Menu className="text-slate-500 w-5 h-5" />
                        </div>

                        {/* --- MAIN DYNAMIC CONTENT --- */}
                        <div className="flex-1 bg-white relative flex flex-col h-full overflow-hidden">

                            {/* Global Dashboard Header */}
                            <div className="flex items-center justify-between p-6 md:p-8 border-b border-slate-50">
                                <div>
                                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 capitalize">{activeView}</h2>
                                    <p className="text-xs text-slate-500 mt-1">Updates live.</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors cursor-pointer"><Search size={18} /></div>
                                    <div className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors cursor-pointer relative">
                                        <Bell size={18} />
                                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                                    </div>

                                    {/* --- 3. FIXED AVATAR (Switched to standard img tag) --- */}
                                    <div className="w-8 h-8 bg-slate-100 rounded-full border border-slate-100 overflow-hidden ml-1 relative">
                                        <img
                                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Juan"
                                            alt="User"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Scrollable Content Area */}
                            <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50/30">
                                <AnimatePresence mode="wait">

                                    {/* VIEW 1: OVERVIEW */}
                                    {activeView === "overview" && (
                                        <motion.div
                                            key="overview"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="space-y-6"
                                        >
                                            {/* KPI Cards */}
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                <StatCard title="Total Receivable" value={stats.receivable} trend="+12%" trendUp={true} />
                                                <StatCard title="Total Collected" value={stats.collected} trend="-0.5%" trendUp={false} />
                                                <StatCard title="Active Interactions" value={stats.interactions} trend="+18%" trendUp={true} />
                                            </div>

                                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                                                {/* Chart Section */}
                                                <div className="lg:col-span-5 p-6 rounded-2xl border border-slate-100 bg-white shadow-sm flex flex-col h-[320px]">
                                                    <div className="flex justify-between items-center mb-6">
                                                        <h3 className="text-sm font-bold text-slate-800">Recovery Trend</h3>
                                                        <div className="flex bg-slate-100 p-0.5 rounded-lg">
                                                            <button onClick={() => setTimeRange("6m")} className={`text-[10px] font-bold px-2 py-1 rounded-md transition-all ${timeRange === "6m" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"}`}>6M</button>
                                                            <button onClick={() => setTimeRange("30d")} className={`text-[10px] font-bold px-2 py-1 rounded-md transition-all ${timeRange === "30d" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"}`}>30D</button>
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 flex items-end justify-between gap-2">
                                                        {chartData.map((d, i) => (
                                                            <ChartBar key={i} height={d.height} label={d.label} value={d.value} active={i === 2} />
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Table Section */}
                                                <div className="lg:col-span-7 p-6 rounded-2xl border border-slate-100 bg-white shadow-sm h-[320px] flex flex-col">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <h3 className="text-sm font-bold text-slate-800">Recent Activity</h3>
                                                        <button className="text-[10px] font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-full transition-colors">View All</button>
                                                    </div>
                                                    <div className="flex-1 overflow-y-auto pr-2 space-y-2">
                                                        {MOCK_TRANSACTIONS.map((tx) => (
                                                            <TableRow key={tx.id} {...tx} />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* VIEW 2: INVOICES (Simple Placeholder) */}
                                    {activeView === "invoices" && (
                                        <motion.div
                                            key="invoices"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="flex flex-col items-center justify-center h-[400px] text-center space-y-4"
                                        >
                                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                                                <FileText size={32} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-slate-800">No Open Invoices</h3>
                                                <p className="text-slate-500 text-sm">You are all caught up!</p>
                                            </div>
                                            <Button variant="outline">Create Invoice</Button>
                                        </motion.div>
                                    )}

                                    {/* VIEW 3: CUSTOMERS (List View) */}
                                    {activeView === "customers" && (
                                        <motion.div
                                            key="customers"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
                                        >
                                            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                                                <div className="flex items-center gap-2">
                                                    <Button variant="outline" size="sm" className="h-8 gap-2 text-xs"><Filter size={12} /> Filter</Button>
                                                    <Button variant="outline" size="sm" className="h-8 gap-2 text-xs"><Download size={12} /> Export</Button>
                                                </div>
                                                <span className="text-xs font-bold text-slate-500">5 Results</span>
                                            </div>
                                            <table className="w-full text-sm text-left">
                                                <thead className="text-xs text-slate-400 uppercase bg-white border-b border-slate-100">
                                                    <tr>
                                                        <th className="px-6 py-3 font-bold">Company</th>
                                                        <th className="px-6 py-3 font-bold">Status</th>
                                                        <th className="px-6 py-3 font-bold">MRR</th>
                                                        <th className="px-6 py-3 font-bold text-right">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {MOCK_CUSTOMERS.map((customer) => (
                                                        <tr key={customer.id} className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors">
                                                            <td className="px-6 py-4 font-medium text-slate-800">{customer.name}</td>
                                                            <td className="px-6 py-4">
                                                                <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${customer.status === "Active" ? "bg-emerald-100 text-emerald-700" :
                                                                    customer.status === "Churned" ? "bg-slate-100 text-slate-500" : "bg-orange-100 text-orange-700"
                                                                    }`}>
                                                                    {customer.status}
                                                                </span>
                                                            </td>
                                                            <td className="px-6 py-4 font-mono text-slate-600">{customer.mrr}</td>
                                                            <td className="px-6 py-4 text-right">
                                                                <button className="text-slate-400 hover:text-slate-600"><Ellipsis size={16} /></button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </motion.div>
                                    )}

                                    {/* VIEW 4: SETTINGS */}
                                    {activeView === "settings" && (
                                        <motion.div
                                            key="settings"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="space-y-4 max-w-lg mx-auto py-10"
                                        >
                                            <h3 className="text-lg font-bold text-slate-900">Account Settings</h3>
                                            <div className="p-4 bg-white border border-slate-200 rounded-xl flex items-center justify-between">
                                                <div>
                                                    <div className="font-bold text-slate-800 text-sm">Notifications</div>
                                                    <div className="text-xs text-slate-500">Receive email alerts on payment</div>
                                                </div>
                                                <div className="w-10 h-6 bg-emerald-500 rounded-full relative cursor-pointer">
                                                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                                                </div>
                                            </div>
                                            <div className="p-4 bg-white border border-slate-200 rounded-xl flex items-center justify-between opacity-50">
                                                <div>
                                                    <div className="font-bold text-slate-800 text-sm">Dark Mode</div>
                                                    <div className="text-xs text-slate-500">Currently disabled for this demo</div>
                                                </div>
                                                <div className="w-10 h-6 bg-slate-200 rounded-full relative">
                                                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

// --- SUB-COMPONENTS (With Micro-Interactions) ---

function NavItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group relative overflow-hidden ${active
                ? "bg-white text-emerald-900 shadow-sm ring-1 ring-slate-100"
                : "text-slate-500 hover:bg-white/60 hover:text-emerald-900"
                }`}
        >
            {active && <motion.div layoutId="activeNav" className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />}
            <span className={active ? "text-emerald-600" : "text-slate-400 group-hover:text-emerald-600 transition-colors"}>{icon}</span>
            {label}
        </button>
    )
}

function StatCard({ title, value, trend, trendUp }: any) {
    return (
        <div className="p-5 rounded-2xl border border-slate-100 bg-white hover:border-emerald-100 hover:shadow-md transition-all group cursor-default">
            <div className="flex justify-between items-start mb-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{title}</span>
                <div className={`flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${trendUp ? "bg-lime-100 text-lime-700" : "bg-red-50 text-red-600"}`}>
                    {trendUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {trend}
                </div>
            </div>
            <div className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight group-hover:text-emerald-950 transition-colors">{value}</div>
        </div>
    )
}

function ChartBar({ height, label, value, active }: { height: string, label: string, value: string, active?: boolean }) {
    return (
        <div className="w-full flex flex-col items-center gap-2 group cursor-pointer relative">
            {/* Tooltip on Hover */}
            <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded mb-1">
                {value}
                <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
            </div>

            <div className="relative w-full rounded-md flex items-end justify-center overflow-hidden h-[180px] bg-slate-50 group-hover:bg-slate-100 transition-colors">
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: height }}
                    transition={{ type: "spring", stiffness: 60, damping: 15 }}
                    className={`w-full mx-1 rounded-t-sm relative ${active ? "bg-[#bef264]" : "bg-slate-200 group-hover:bg-slate-300"}`}
                >
                </motion.div>
            </div>
            <span className={`text-[10px] font-bold ${active ? "text-slate-900" : "text-slate-400 group-hover:text-slate-500"} transition-colors`}>{label}</span>
        </div>
    )
}

function TableRow({ name, email, date, amount, status, avatar }: any) {
    const isCompleted = status === "Completed";
    return (
        <div className="flex items-center justify-between text-xs p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group border border-transparent hover:border-slate-100">
            <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-[10px] ${isCompleted ? "bg-emerald-100 text-emerald-700" : status === "Pending" ? "bg-blue-50 text-blue-600" : "bg-red-50 text-red-600"
                    }`}>
                    {avatar}
                </div>
                <div>
                    <div className="font-bold text-slate-800">{name}</div>
                    <div className="text-[10px] text-slate-400 hidden sm:block">{email}</div>
                </div>
            </div>
            <div className="text-right">
                <div className="font-bold text-slate-800">{amount}</div>
                <div className={`text-[9px] font-bold uppercase ${isCompleted ? "text-emerald-600" : status === "Pending" ? "text-blue-500" : "text-red-500"}`}>{status}</div>
            </div>
        </div>
    )
}