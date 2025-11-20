import { useEffect, useState } from 'react';
import api from '@/api';
import WorkerCard from '@/components/WorkerCard';

export default function WorkersList() {
  const [workers, setWorkers] = useState([]);
  useEffect(()=>{
    api.get('/users') // we'll add this backend route below
      .then(res => setWorkers(res.data))
      .catch(err => console.error(err));
  },[]);
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl mb-4">Skilled Workers</h1>
      <div className="space-y-3">
        {workers.map(w => <WorkerCard key={w._id} worker={w} />)}
      </div>
    </div>
  );
}
