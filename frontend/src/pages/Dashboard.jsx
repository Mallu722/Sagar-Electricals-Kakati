import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Zap, LogOut, Search, RefreshCw, CheckCircle2, Clock, AlertCircle, XCircle, Loader2 } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || '/api';
const DASHBOARD_PIN = 'sagar2024';

const STATUS_OPTIONS = ['New', 'In Progress', 'Completed', 'Cancelled'];

const statusStyle = {
  'New':         'bg-blue-100 text-blue-800',
  'In Progress': 'bg-amber-100 text-amber-800',
  'Completed':   'bg-emerald-100 text-emerald-800',
  'Cancelled':   'bg-red-100 text-red-800',
};

export default function Dashboard() {
  const [authed, setAuthed]     = useState(false);
  const [pin, setPin]           = useState('');
  const [pinError, setPinError] = useState('');
  const [requests, setRequests] = useState([]);
  const [loading, setLoading]   = useState(false);
  const [fetchError, setFetchError] = useState('');
  const [search, setSearch]     = useState('');
  const [filterStatus, setFilter] = useState('All');
  const [updating, setUpdating] = useState(null);

  const fetchRequests = useCallback(async () => {
    setLoading(true);
    setFetchError('');
    try {
      const { data } = await axios.get(`${API_URL}/service-request`);
      setRequests(Array.isArray(data) ? data : []);
    } catch (err) {
      setFetchError('Could not load requests. Is the backend running?');
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
      setPinError('');
    } else {
      setPinError('Incorrect PIN. Try again.');
    }
  };

  const updateStatus = async (id, status) => {
    setUpdating(id);
    try {
      const { data } = await axios.patch(`${API_URL}/service-request/${id}/status`, { status });
      setRequests(prev => prev.map(r => r._id === id ? data : r));
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
      <div style={{ background: '#0D1B2A' }} className="flex items-center justify-center px-4 py-24">
        <div className="bg-white rounded-3xl p-8 shadow-2xl w-full max-w-sm">
          <div className="text-center mb-7">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: '#0D1B2A' }}>
              <Zap className="h-7 w-7" style={{ color: '#FFC107' }} />
            </div>
            <h1 className="text-2xl font-extrabold" style={{ color: '#0D1B2A' }}>Dashboard Login</h1>
            <p className="text-gray-400 text-sm mt-1">Sagar Electricals — Admin</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-1.5">Enter PIN</label>
              <input
                type="password"
                value={pin}
                onChange={e => { setPin(e.target.value); setPinError(''); }}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none text-center text-2xl tracking-widest"
                placeholder="••••"
                maxLength={20}
                autoFocus
              />
              {pinError && <p className="text-red-500 text-xs mt-1.5 font-medium">{pinError}</p>}
            </div>
            <button type="submit"
              className="w-full py-3 rounded-xl font-bold text-white transition-colors hover:opacity-90"
              style={{ background: '#0D1B2A' }}>
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ── Dashboard ─────────────────────────────────────────────────────
  return (
    <div className="bg-gray-50 pb-12">

      {/* Top bar */}
      <div className="text-white px-6 py-4 flex items-center justify-between shadow-lg mb-8" style={{ background: '#0D1B2A' }}>
        <div className="flex items-center gap-2.5">
          <Zap className="h-6 w-6" style={{ color: '#FFC107' }} />
          <span className="font-extrabold text-lg">Sagar Electricals</span>
          <span className="text-gray-400 text-sm hidden sm:inline">/ Dashboard</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={fetchRequests} disabled={loading}
            className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors">
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">Refresh</span>
          </button>
          <button onClick={() => setAuthed(false)}
            className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-red-400 transition-colors">
            <LogOut className="h-4 w-4" /> Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Error banner */}
        {fetchError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium flex items-center gap-2">
            <AlertCircle className="h-4 w-4 shrink-0" /> {fetchError}
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Requests', val: stats.total,      color: '#0D1B2A',  bg: '#EFF6FF' },
            { label: 'New',            val: stats.new,         color: '#2563EB',  bg: '#EFF6FF' },
            { label: 'In Progress',    val: stats.inProgress,  color: '#D97706',  bg: '#FFFBEB' },
            { label: 'Completed',      val: stats.completed,   color: '#059669',  bg: '#ECFDF5' },
          ].map(s => (
            <div key={s.label} className="rounded-2xl p-5 shadow-sm border border-white"
              style={{ background: s.bg }}>
              <div className="text-3xl font-extrabold" style={{ color: s.color }}>{s.val}</div>
              <div className="text-sm text-gray-500 font-medium mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-5 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by name, phone, or service..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 outline-none text-sm"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {['All', ...STATUS_OPTIONS].map(s => (
              <button key={s} onClick={() => setFilter(s)}
                className="px-4 py-2 rounded-xl text-sm font-bold border transition-all"
                style={filterStatus === s
                  ? { background: '#0D1B2A', color: '#fff', borderColor: '#0D1B2A' }
                  : { background: '#fff', color: '#4B5563', borderColor: '#E5E7EB' }}>
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-20 text-gray-400 gap-3">
              <Loader2 className="animate-spin h-7 w-7" /> Loading requests...
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <AlertCircle className="h-10 w-10 mx-auto mb-3 opacity-40" />
              <p className="font-medium">No requests found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100 text-left">
                    {['Name', 'Phone', 'Service', 'Address', 'Preferred Time', 'Date', 'Status'].map(h => (
                      <th key={h} className="px-4 py-3 font-bold text-gray-600 whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((r, i) => (
                    <tr key={r._id}
                      className={`border-b border-gray-50 hover:bg-blue-50 transition-colors ${i % 2 !== 0 ? 'bg-gray-50/40' : ''}`}>
                      <td className="px-4 py-3 font-semibold whitespace-nowrap" style={{ color: '#0D1B2A' }}>{r.name}</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <a href={`tel:${r.phone}`} className="font-medium hover:underline" style={{ color: '#0D1B2A' }}>{r.phone}</a>
                      </td>
                      <td className="px-4 py-3 text-gray-700 max-w-[180px]">{r.serviceType}</td>
                      <td className="px-4 py-3 text-gray-500 max-w-[160px] truncate" title={r.address}>{r.address}</td>
                      <td className="px-4 py-3 text-gray-500 whitespace-nowrap text-xs">{r.preferredTime}</td>
                      <td className="px-4 py-3 text-gray-400 whitespace-nowrap text-xs">
                        {new Date(r.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </td>
                      <td className="px-4 py-3">
                        {updating === r._id ? (
                          <Loader2 className="animate-spin h-4 w-4 text-gray-400" />
                        ) : (
                          <select
                            value={r.status}
                            onChange={e => updateStatus(r._id, e.target.value)}
                            className={`text-xs font-bold px-3 py-1.5 rounded-full border-0 outline-none cursor-pointer ${statusStyle[r.status]}`}>
                            {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-gray-400 mt-5">
          Showing {filtered.length} of {requests.length} requests
        </p>
      </div>
    </div>
  );
}
