import { useState, useEffect } from 'react';
import AdminLogin from './AdminLogin';
import { LogOut, RefreshCcw } from 'lucide-react';
import { API_URL } from '../config';

interface Contact {
  _id: string;
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
  status: 'pending' | 'contacted' | 'resolved';
  createdAt: string;
}

const AdminDashboard = () => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('adminToken'));
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchContacts = async () => {
    if (!token) return;
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/admin/contacts`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.status === 401) {
        handleLogout();
        return;
      }
      const data = await response.json();
      if (data.success) {
        setContacts(data.data);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchContacts();
  }, [token]);

  const handleLogin = (newToken: string) => {
    localStorage.setItem('adminToken', newToken);
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setToken(null);
    setContacts([]);
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const response = await fetch(`${API_URL}/api/admin/contacts/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (response.ok) {
        fetchContacts();
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (!token) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-[#021226] text-white selection:bg-[#26D07C] selection:text-[#021226]">
      <nav className="bg-[#0A2540] border-b border-white/5 py-4 px-6 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="AP Wealth" className="h-8 w-auto" />
          <h1 className="text-lg lg:text-xl font-bold border-l border-white/20 pl-4 tracking-tight">Admin Portal</h1>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={fetchContacts} className="p-2 hover:bg-white/10 text-gray-300 hover:text-white rounded-full transition-colors" title="Refresh">
            <RefreshCcw size={18} className={loading ? 'animate-spin' : ''} />
          </button>
          <button onClick={handleLogout} className="flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/20 transition-all text-sm font-semibold">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </nav>

      <div className="max-w-[1400px] mx-auto p-6 lg:p-10">
        <div className="mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
          <div>
            <h2 className="text-3xl font-extrabold mb-2">Lead Management</h2>
            <p className="text-gray-400 font-medium">View and manage your client consultation requests.</p>
          </div>
          <div className="bg-[#0A2540] px-5 py-3 rounded-xl border border-white/5 shadow-inner">
            <span className="text-gray-400 text-sm font-medium mr-3 uppercase tracking-wider">Total Leads:</span>
            <span className="font-extrabold text-[#26D07C] text-xl">{contacts.length}</span>
          </div>
        </div>

        <div className="glass rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/5 text-xs uppercase tracking-widest text-gray-400">
                  <th className="p-5 font-semibold">Date</th>
                  <th className="p-5 font-semibold">Client Info</th>
                  <th className="p-5 font-semibold">Interest</th>
                  <th className="p-5 font-semibold w-1/3">Message</th>
                  <th className="p-5 font-semibold text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {contacts.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-10 text-center text-gray-500 font-medium italic">No contact requests found yet.</td>
                  </tr>
                ) : (
                  contacts.map((contact) => (
                    <tr key={contact._id} className="hover:bg-white/5 transition-colors group">
                      <td className="p-5 text-sm text-gray-400 whitespace-nowrap">
                        {new Date(contact.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                      </td>
                      <td className="p-5">
                        <div className="font-bold text-gray-200 text-base">{contact.name}</div>
                        <div className="text-xs text-gray-400 mt-1.5 flex flex-col gap-1">
                          <a href={`mailto:${contact.email}`} className="hover:text-[#26D07C] transition-colors">{contact.email}</a>
                          <a href={`tel:${contact.phone}`} className="hover:text-[#26D07C] transition-colors">{contact.phone}</a>
                        </div>
                      </td>
                      <td className="p-5">
                        <span className="inline-block bg-[#26D07C]/10 border border-[#26D07C]/20 text-[#26D07C] px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                          {contact.interest}
                        </span>
                      </td>
                      <td className="p-5 text-sm text-gray-300 leading-relaxed">
                        {contact.message}
                      </td>
                      <td className="p-5 text-center">
                        <select
                          value={contact.status}
                          onChange={(e) => updateStatus(contact._id, e.target.value)}
                          className={`text-xs font-bold px-4 py-2 rounded-xl border outline-none appearance-none cursor-pointer text-center w-full max-w-[120px] transition-colors ${
                            contact.status === 'pending' ? 'bg-orange-500/10 text-orange-400 border-orange-500/30 hover:bg-orange-500/20' :
                            contact.status === 'contacted' ? 'bg-blue-500/10 text-blue-400 border-blue-500/30 hover:bg-blue-500/20' :
                            'bg-[#26D07C]/10 text-[#26D07C] border-[#26D07C]/30 hover:bg-[#26D07C]/20'
                          }`}
                        >
                          <option value="pending" className="bg-[#0A2540] text-orange-400">Pending</option>
                          <option value="contacted" className="bg-[#0A2540] text-blue-400">Contacted</option>
                          <option value="resolved" className="bg-[#0A2540] text-[#26D07C]">Resolved</option>
                        </select>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
