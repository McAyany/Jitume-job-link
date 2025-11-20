import { useEffect, useState } from 'react';
import { useUser, useAuth } from '@clerk/clerk-react';
import api from '@/api';

export default function EmployerDashboard(){
  const { user } = useUser();
  const { getToken } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({ title:'', description:'', location:'', skillsRequired:'', wage:'' });

  useEffect(()=>{
    if(!user) return;
    (async()=>{
      const token = await getToken();
      const res = await api.get('/employer/my', { headers: { 'x-clerk-user-id': user.id, Authorization: `Bearer ${token}` }});
      setJobs(res.data);
    })();
  },[user]);

  async function submit(e){
    e.preventDefault();
    const token = await getToken();
    const res = await api.post('/employer', {
      ...form,
      skillsRequired: form.skillsRequired.split(',').map(s=>s.trim())
    }, { headers: { 'x-clerk-user-id': user.id, Authorization: `Bearer ${token}` }});
    setJobs(prev=>[res.data, ...prev]);
    setForm({ title:'', description:'', location:'', skillsRequired:'', wage:'' });
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Employer Dashboard</h1>
      <form onSubmit={submit} className="space-y-3 mb-6">
        <input className="w-full p-2 border rounded" placeholder="Job title" value={form.title} onChange={e=>setForm({...form,title:e.target.value})}/>
        <textarea className="w-full p-2 border rounded" placeholder="Description" value={form.description} onChange={e=>setForm({...form,description:e.target.value})}/>
        <input className="w-full p-2 border rounded" placeholder="Location" value={form.location} onChange={e=>setForm({...form,location:e.target.value})}/>
        <input className="w-full p-2 border rounded" placeholder="Skills (comma separated)" value={form.skillsRequired} onChange={e=>setForm({...form,skillsRequired:e.target.value})}/>
        <input className="w-full p-2 border rounded" placeholder="Wage" value={form.wage} onChange={e=>setForm({...form,wage:e.target.value})}/>
        <button className="px-4 py-2 bg-green-600 text-white rounded">Post Job</button>
      </form>

      <h2 className="text-xl font-semibold mb-2">Your Jobs</h2>
      <div className="space-y-3">
        {jobs.map(j=>(
          <div key={j._id} className="p-4 border rounded">
            <h3 className="font-bold">{j.title}</h3>
            <p>{j.description}</p>
            <small className="text-gray-500">{j.location} • {j.wage}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
