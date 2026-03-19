import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { 
  Zap, LogOut, Search, RefreshCw, CheckCircle2, Clock, AlertCircle, 
  XCircle, Loader2, Users, LayoutDashboard, Settings, Menu, X, 
  Phone, Mail, MapPin, Calendar, ClipboardCheck, ChevronRight
} from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || '/api';
const DASHBOARD_PIN = 'sagar2024';

const STATUS_OPTIONS = ['New', 'In Progress', 'Completed', 'Cancelled'];

const statusConfig = {
  'New':         { icon: <Clock className="h-3 w-3" />,   bg: 'bg-blue-50',     text: 'text-blue-600',   border: 'border-blue-200' },
  'In Progress': { icon: <RefreshCw className="h-3 w-3" />, bg: 'bg-amber-50',    text: 'text-amber-600',  border: 'border-amber-200' },
  'Completed':   { icon: <CheckCircle2 className="h-3 w-3" />, bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200' },
  'Cancelled':   { icon: <XCircle className="h-3 w-3" />,   bg: 'bg-rose-50',    text: 'text-rose-600',   border: 'border-rose-200' },
};

export default function Dashboard() {
  const [authed, setAuthed]     = useState(() => localStorage.getItem('sagar_admin_auth') === 'true');
  const [pin, setPin]           = useState('');
  const [pinError, setPinError] = useState('');
  const [requests, setRequests] = useState([]);
  const [loading, setLoading]   = useState(false);
  const [fetchError, setFetchError] = useState('');
  const [search, setSearch]     = useState('');
  const [filterStatus, setFilter] = useState('All');
  const [updating, setUpdating] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const fetchRequests = useCallback(async () => {
    setLoading(true);
    setFetchError('');
    try {
      console.log(`Fetching requests from: ${API_URL}/service-request`);
      const { data } = await axios.get(`${API_URL}/service-request`);
      setRequests(Array.isArray(data) ? data : []);
    } catch (err) {
      const errorMsg = err.response?.data?.message || err.message;
      setFetchError(`Could not load requests: ${errorMsg}`);
      console.error('Dashboard fetch error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authed) fetchRequests();
  }, [authed, fetchRequests]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (pin === DASHBOARD_PIN) {
      setAuthed(true);
      localStorage.setItem('sagar_admin_auth', 'true');
      setPinError('');
    } else {
      setPinError('Incorrect PIN. Try again.');
    }
  };

  const handleSignOut = () => {
    setAuthed(false);
    localStorage.removeItem('sagar_admin_auth');
  };

  const updateStatus = async (id, status) => {
    setUpdating(id);
    try {
      const { data } = await axios.patch(`${API_URL}/service-request/${id}/status`, { status });
      setRequests(prev => prev.map(r => r._id === id ? data : r));
      if (selectedRequest?._id === id) setSelectedRequest(data);
    } catch {
      alert('Failed to update status.');
    } finally {
      setUpdating(null);
    }
  };

  const stats = {
    total:      requests.length,
    new:        requests.filter(r => r.status === 'New').length,
    inProgress: requests.filter(r => r.status === 'In Progress').length,
    completed:  requests.filter(r => r.status === 'Completed').length,
  };

  const filtered = requests.filter(r => {
    const matchStatus = filterStatus === 'All' || r.status === filterStatus;
    const q = search.toLowerCase();
    const matchSearch = !q
      || r.name?.toLowerCase().includes(q)
      || r.phone?.includes(q)
      || r.serviceType?.toLowerCase().includes(q);
    return matchStatus && matchSearch;
  });

  // ── PIN Login ─────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div className="min-h-screen bg-[#0D1B2A] flex items-center justify-center px-4 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-600/10 rounded-full blur-[120px]" />
        
        <div className="bg-white rounded-3xl p-8 shadow-2xl w-full max-w-md relative z-10 border border-white/20 backdrop-blur-sm">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-[#0D1B2A] shadow-inner shadow-blue-900/40">
              <Zap className="h-8 w-8 text-[#FFC107] animate-pulse" />
            </div>
            <h1 className="text-3xl font-black text-[#0D1B2A] tracking-tight">Admin Gateway</h1>
            <p className="text-gray-400 font-medium mt-1">Sagar Electricals Control Center</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block ml-1">Secure Access PIN</label>
              <input
                type="password"
                value={pin}
                onChange={e => { setPin(e.target.value); setPinError(''); }}
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-[#0D1B2A] focus:bg-white outline-none text-center text-3xl tracking-[1em] font-black transition-all"
                placeholder="••••"
                maxLength={20}
                autoFocus
              />
              {pinError && (
                <div className="flex items-center gap-1.5 text-rose-500 text-xs mt-2 font-bold justify-center bg-rose-50 py-2 rounded-lg">
                  <AlertCircle className="h-3 w-3" /> {pinError}
                </div>
              )}
            </div>
            <button type="submit"
              className="w-full py-4 rounded-2xl font-black text-white bg-[#0D1B2A] hover:bg-blue-900 transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-2 group text-lg">
              Authorize Access <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          
          <p className="text-center text-gray-400 text-[10px] mt-8 uppercase tracking-widest font-bold">
            Authorized Personnel Only
          </p>
        </div>
      </div>
    );
  }

  // ── Dashboard Layout ──────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col md:flex-row">
      
      {/* Sidebar - Desktop */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#0D1B2A] text-white transition-transform duration-300 md:relative md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full flex flex-col py-8 px-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-[#FFC107] p-2 rounded-xl shrink-0">
              <Zap className="h-6 w-6 text-[#0D1B2A]" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-xl tracking-tighter">SAGAR</span>
              <span className="text-[10px] font-black text-[#FFC107] tracking-[0.2em]">ELECTRICALS</span>
            </div>
          </div>

          <nav className="flex-1 space-y-2">
            <a 
              href="/" 
              className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-bold text-sm text-gray-400 hover:text-white hover:bg-white/5 mb-6 border border-white/10"
            >
              <ChevronRight className="h-4 w-4 rotate-180" /> Go to Website
            </a>
            {[
              { label: 'Overview', icon: <LayoutDashboard className="h-5 w-5" />, active: true },
              { label: 'Requests', icon: <ClipboardCheck className="h-5 w-5" /> },
              { label: 'Customers', icon: <Users className="h-5 w-5" /> },
              { label: 'Settings', icon: <Settings className="h-5 w-5" /> },
            ].map((item) => (
              <button 
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-bold text-sm ${item.active ? 'bg-white/10 text-[#FFC107] shadow-inner' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                {item.icon} {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <button 
              onClick={handleSignOut}
              className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl text-rose-400 hover:bg-rose-500/10 transition-all font-bold text-sm bg-rose-500/5 group"
            >
              <LogOut className="h-5 w-5 group-hover:-translate-x-1 transition-transform" /> Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 overflow-hidden">
        
        {/* Header */}
        <header className="bg-white/70 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
              {sidebarOpen ? <X /> : <Menu />}
            </button>
            <div>
              <h2 className="text-xl font-black text-[#0D1B2A] tracking-tight">Admin Overview</h2>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest hidden sm:block">Command Center</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
             <button onClick={fetchRequests} disabled={loading}
               className={`p-2.5 rounded-xl border border-gray-100 hover:bg-gray-50 transition-all ${loading ? 'text-blue-500' : 'text-gray-400 hover:text-[#0D1B2A]'}`}>
               <RefreshCw className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
             </button>
             <div className="h-8 w-[1px] bg-gray-100 mx-1 hidden sm:block" />
             <div className="flex items-center gap-3 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100">
               <div className="w-8 h-8 rounded-lg bg-[#0D1B2A] flex items-center justify-center font-bold text-xs text-[#FFC107]">SA</div>
               <span className="hidden sm:inline text-xs font-black text-[#0D1B2A]">Admin</span>
             </div>
          </div>
        </header>

        <div className="p-6 md:p-10 space-y-8 max-w-7xl mx-auto">
          
          {/* Error Banner */}
          {fetchError && (
             <div className="p-4 bg-rose-50 border border-rose-100 rounded-2xl text-rose-600 text-sm font-bold flex items-center gap-3 shadow-sm shadow-rose-100/50">
               <AlertCircle className="h-5 w-5 shrink-0" /> {fetchError}
             </div>
           )}

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Total Requests', val: stats.total, color: 'text-blue-600', icon: <LayoutDashboard />, bg: 'bg-blue-600/10' },
              { label: 'Awaiting Review', val: stats.new, color: 'text-amber-600', icon: <Clock />, bg: 'bg-amber-600/10' },
              { label: 'In Execution', val: stats.inProgress, color: 'text-indigo-600', icon: <Zap />, bg: 'bg-indigo-600/10' },
              { label: 'Successfully Closed', val: stats.completed, color: 'text-emerald-600', icon: <CheckCircle2 />, bg: 'bg-emerald-600/10' },
            ].map((s, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-50 relative overflow-hidden group hover:shadow-xl hover:shadow-[#0D1B2A]/5 transition-all duration-500">
                <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:scale-125 transition-transform duration-700 ${s.color}`}>
                  {s.icon}
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">{s.label}</p>
                <div className="flex items-baseline gap-2">
                  <span className={`text-4xl font-black ${s.color}`}>{s.val}</span>
                  <span className="text-gray-300 font-bold text-sm">active</span>
                </div>
              </div>
            ))}
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-50 overflow-hidden">
             {/* Card Header with Filters */}
             <div className="p-6 md:p-8 border-b border-gray-50 flex flex-col lg:flex-row gap-6 justify-between lg:items-center">
               <div className="relative flex-1 max-w-md group">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300 group-focus-within:text-[#0D1B2A] transition-colors" />
                 <input
                   type="text"
                   value={search}
                   onChange={e => setSearch(e.target.value)}
                   placeholder="Search service requests..."
                   className="w-full pl-12 pr-6 py-4 rounded-[1.5rem] bg-gray-50 border-2 border-transparent focus:border-[#0D1B2A]/10 focus:bg-white outline-none text-sm font-medium transition-all"
                 />
               </div>
               
               <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
                 {['All', ...STATUS_OPTIONS].map(s => (
                   <button key={s} onClick={() => setFilter(s)}
                     className={`px-6 py-2.5 rounded-2xl text-xs font-black whitespace-nowrap transition-all border-2 ${
                       filterStatus === s 
                       ? 'bg-[#0D1B2A] text-white border-[#0D1B2A] shadow-lg shadow-blue-900/20' 
                       : 'bg-white text-gray-400 border-gray-50 hover:border-gray-200'
                     }`}>
                     {s}
                   </button>
                 ))}
               </div>
             </div>

             {/* Dynamic List */}
             {loading ? (
                <div className="flex flex-col items-center justify-center py-32 text-gray-300 gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full border-4 border-gray-100 animate-pulse" />
                    <Loader2 className="absolute top-0 left-0 w-16 h-16 animate-spin text-[#0D1B2A]" />
                  </div>
                  <p className="font-black uppercase tracking-widest text-xs">Synchronizing Data...</p>
                </div>
              ) : filtered.length === 0 ? (
                <div className="text-center py-32 space-y-4">
                  <div className="w-20 h-20 bg-gray-50 rounded-[2rem] flex items-center justify-center mx-auto border border-gray-100">
                    <AlertCircle className="h-10 w-10 text-gray-200" />
                  </div>
                  <div>
                    <p className="text-[#0D1B2A] font-black text-lg">No Results Found</p>
                    <p className="text-gray-400 text-sm font-medium">Try adjusting your search or filters</p>
                  </div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50/50 border-b border-gray-100 text-left">
                        {['Requester', 'Service Category', 'Preferred Slot', 'Current Status', ''].map(h => (
                          <th key={h} className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {filtered.map((r) => (
                        <tr key={r._id} className="group hover:bg-gray-50/80 transition-all cursor-pointer" onClick={() => setSelectedRequest(r)}>
                          <td className="px-8 py-6">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-2xl bg-[#0D1B2A]/5 flex items-center justify-center text-[#0D1B2A] font-black text-lg group-hover:bg-[#0D1B2A] group-hover:text-white transition-all duration-300">
                                {r.name.charAt(0)}
                              </div>
                              <div>
                                <h4 className="font-black text-[#0D1B2A] text-sm group-hover:text-blue-600 transition-colors uppercase tracking-tight">{r.name}</h4>
                                <p className="text-gray-400 text-xs font-bold font-mono">{r.phone}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            <p className="text-sm font-bold text-gray-700 max-w-[200px] line-clamp-1">{r.serviceType}</p>
                            <div className="flex items-center gap-1.5 mt-1">
                               <MapPin className="h-3 w-3 text-gray-300" />
                               <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider truncate max-w-[150px]">{r.address}</span>
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            <div className="inline-flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100 group-hover:bg-white transition-colors">
                              <Calendar className="h-3.5 w-3.5 text-gray-400" />
                              <span className="text-xs font-black text-[#0D1B2A]">{r.preferredTime}</span>
                            </div>
                          </td>
                          <td className="px-8 py-6" onClick={e => e.stopPropagation()}>
                            <div className="flex items-center gap-4">
                              <div className={`px-4 py-2 rounded-2xl border flex items-center gap-2 transition-all ${statusConfig[r.status]?.bg} ${statusConfig[r.status]?.text} ${statusConfig[r.status]?.border}`}>
                                {statusConfig[r.status]?.icon}
                                <span className="text-[10px] font-black uppercase tracking-widest">{r.status}</span>
                              </div>
                              
                              <select 
                                value={r.status}
                                onChange={e => updateStatus(r._id, e.target.value)}
                                className="opacity-0 absolute w-32 h-10 cursor-pointer"
                              >
                                {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                              </select>
                            </div>
                          </td>
                          <td className="px-8 py-6 text-right">
                             <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-300 group-hover:text-[#0D1B2A] group-hover:bg-white transition-all">
                               <ChevronRight className="h-5 w-5" />
                             </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
          </div>
        </div>
      </main>

      {/* Detail Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#0D1B2A]/40 backdrop-blur-md" onClick={() => setSelectedRequest(null)} />
          <div className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl relative z-10 overflow-hidden animate-in fade-in zoom-in duration-300 border border-white/20">
            <div className={`h-32 ${statusConfig[selectedRequest.status]?.bg} flex items-end px-10 pb-6 relative`}>
               <button onClick={() => setSelectedRequest(null)} className="absolute top-6 right-6 p-2 rounded-full bg-white/50 hover:bg-white transition-all text-[#0D1B2A]">
                 <X className="h-5 w-5" />
               </button>
               <div className="w-20 h-20 rounded-[2rem] bg-white shadow-xl flex items-center justify-center text-[#0D1B2A] font-black text-3xl translate-y-12 border-4 border-white">
                 {selectedRequest.name.charAt(0)}
               </div>
            </div>
            
            <div className="px-10 pt-16 pb-12 space-y-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-3xl font-black text-[#0D1B2A] tracking-tighter uppercase">{selectedRequest.name}</h3>
                  <div className="flex items-center gap-4 mt-2">
                     <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${statusConfig[selectedRequest.status]?.bg} ${statusConfig[selectedRequest.status]?.text} ${statusConfig[selectedRequest.status]?.border}`}>
                       {selectedRequest.status}
                     </span>
                     <span className="text-gray-400 text-xs font-bold font-mono">{new Date(selectedRequest.createdAt).toLocaleString('en-IN')}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                   <a href={`tel:${selectedRequest.phone}`} className="p-4 rounded-3xl bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:scale-105 transition-transform">
                     <Phone className="h-6 w-6" />
                   </a>
                   <div className="relative">
                     <select 
                       value={selectedRequest.status}
                       onChange={e => updateStatus(selectedRequest._id, e.target.value)}
                       className="appearance-none p-4 px-8 rounded-3xl bg-[#0D1B2A] text-white font-black text-sm pr-12 cursor-pointer shadow-lg shadow-blue-900/30"
                     >
                       {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                     </select>
                     <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFC107] rotate-90 pointer-events-none" />
                   </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                 <div className="space-y-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] flex items-center gap-2"><LayoutDashboard className="h-3 w-3" /> Service Requested</label>
                       <p className="text-lg font-black text-[#0D1B2A]">{selectedRequest.serviceType}</p>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] flex items-center gap-2"><Clock className="h-3 w-3" /> Preferred Schedule</label>
                       <p className="text-lg font-black text-indigo-600">{selectedRequest.preferredTime}</p>
                    </div>
                 </div>
                 
                 <div className="space-y-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] flex items-center gap-2"><MapPin className="h-3 w-3" /> Execution Address</label>
                       <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 italic text-gray-600 text-sm leading-relaxed">
                         {selectedRequest.address}
                       </div>
                    </div>
                 </div>
              </div>

              {updating === selectedRequest._id && (
                <div className="flex items-center gap-3 text-blue-600 font-black text-xs uppercase tracking-widest justify-center animate-pulse">
                  <RefreshCw className="h-4 w-4 animate-spin" /> Synchronizing Changes...
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
