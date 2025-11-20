import { useEffect, useState } from 'react';
import { useUser, useAuth } from '@clerk/clerk-react';
import api from '@/api';

export default function Applications(){
  const [apps, setApps] = useState([]);
  const { user } = useUser();
  const { getToken } = useAuth();

  useEffect(()=>{
    (async()=>{
      const token = await getToken();
      const res = await api.get('/applications/my', { headers: { 'x-clerk-user-id': user.id, Authorization: `Bearer ${token}` }});
      setApps(res.data);
    })();
  },[user]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl mb-4">My Applications</h1>
      {apps.map(a => (
        <div key={a._id} className="p-4 border rounded mb-2">
          <h3 className="font-bold">{a.job.title}</h3>
          <p>{a.coverNote}</p>
          <small className="text-sm text-gray-500">Status: {a.status}</small>
        </div>
      ))}
    </div>
  );
}
