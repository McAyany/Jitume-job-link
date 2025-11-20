import { useEffect, useState } from 'react';
import { useUser, useAuth } from '@clerk/clerk-react';
import api from '@/api';

export default function Profile() {
  const { user } = useUser();
  const { getToken } = useAuth();
  const [profile, setProfile] = useState({ name:'', email:'', role:'worker', skills:[], location:'', contact:'', bio:'' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const token = await getToken();
      try {
        const res = await api.get('/profile/me', { headers: { 'x-clerk-user-id': user.id, Authorization: `Bearer ${token}` }});
        setProfile(res.data);
      } catch (err) {
        // not exist yet
        setProfile(prev => ({ ...prev, name: user.fullName || '' , email: user.primaryEmailAddress?.emailAddress || user.emailAddresses?.[0]?.emailAddress || '' }));
      } finally {
        setLoading(false);
      }
    })();
  }, [user]);

  async function save(e) {
    e.preventDefault();
    const token = await getToken();
    await api.post('/profile/me', profile, { headers: { 'x-clerk-user-id': user.id, Authorization: `Bearer ${token}` }});
    alert('Saved');
  }

  if(!user) return <p className="p-6">Please sign in.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <form onSubmit={save} className="space-y-4">
        <input value={profile.name||''} onChange={e=>setProfile({...profile, name:e.target.value})} placeholder="Full name" className="w-full p-2 border rounded"/>
        <input value={profile.email||''} onChange={e=>setProfile({...profile, email:e.target.value})} placeholder="Email" className="w-full p-2 border rounded"/>
        <input value={profile.location||''} onChange={e=>setProfile({...profile, location:e.target.value})} placeholder="Location" className="w-full p-2 border rounded"/>
        <input value={profile.skills?.join(',')||''} onChange={e=>setProfile({...profile, skills: e.target.value.split(',').map(s=>s.trim())})} placeholder="Skills (comma separated)" className="w-full p-2 border rounded"/>
        <textarea value={profile.bio||''} onChange={e=>setProfile({...profile, bio:e.target.value})} placeholder="Short bio" className="w-full p-2 border rounded h-28"/>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
        </div>
      </form>
    </div>
  );
}
