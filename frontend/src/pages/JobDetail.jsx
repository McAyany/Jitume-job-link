import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useUser, useAuth } from '@clerk/clerk-react';
import api from '@/api';

export default function JobDetail(){
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [note, setNote] = useState('');
  const { user } = useUser();
  const { getToken } = useAuth();

  useEffect(()=>{
    api.get(`/jobs/${id}`).then(r=>setJob(r.data)).catch(console.error);
  },[id]);

  async function apply() {
    if (!user) { alert('Sign in first'); return; }
    const token = await getToken();
    const res = await api.post(`/applications/${id}/apply`, { coverNote: note }, { headers: { 'x-clerk-user-id': user.id, Authorization: `Bearer ${token}` }});
    alert('Applied!');
  }

  if(!job) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
      <p className="text-gray-700 mb-4">{job.description}</p>
      <div className="mb-4">
        <textarea className="w-full border p-2 rounded" value={note} onChange={e=>setNote(e.target.value)} placeholder="Cover note (optional)"></textarea>
      </div>
      <button onClick={apply} className="px-4 py-2 bg-blue-600 text-white rounded">Apply</button>
    </div>
  );
}
