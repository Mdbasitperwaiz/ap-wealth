import React, { useState } from 'react';

const AdminLogin = ({ onLogin }: { onLogin: (token: string) => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      
      if (response.ok) {
        onLogin(data.token);
      } else {
        setError(data.error || 'Invalid credentials');
      }
    } catch (err) {
      setError('Server error connecting to backend');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#021226] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[url('/about-bg.png')] bg-cover bg-center bg-no-repeat opacity-10 blur-md"></div>
      <div className="w-full max-w-md glass p-10 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(38,208,124,0.05)] relative z-10">
        <div className="text-center mb-8">
          <img src="/logo.png" alt="AP Wealth Logo" className="h-14 w-auto mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white tracking-tight">Admin Portal</h2>
        </div>
        
        {error && <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl text-sm font-semibold text-center">{error}</div>}
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Username</label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} required className="w-full bg-[#021226]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#26D07C] focus:ring-1 focus:ring-[#26D07C] transition-all" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full bg-[#021226]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#26D07C] focus:ring-1 focus:ring-[#26D07C] transition-all" />
          </div>
          <button type="submit" disabled={loading} className="w-full bg-[#26D07C] text-[#021226] font-bold py-4 rounded-xl hover:bg-[#1db86c] hover:shadow-[0_0_20px_rgba(38,208,124,0.3)] transition-all disabled:opacity-50 mt-4">
            {loading ? 'Authenticating...' : 'Secure Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
