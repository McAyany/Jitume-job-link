import { Link } from 'react-router-dom';

export default function WorkerCard({ worker }) {
  return (
    <div className="p-4 border rounded flex gap-4 items-center">
      <img src={worker.avatarUrl || '/default-avatar.png'} alt="" className="w-16 h-16 rounded-full object-cover"/>
      <div>
        <h3 className="font-bold">{worker.name || 'Unnamed'}</h3>
        <p className="text-sm text-gray-600">{worker.location || '—'}</p>
        <p className="text-sm text-gray-700 mt-1">{(worker.skills||[]).slice(0,3).join(', ')}</p>
      </div>
      <div className="ml-auto">
        <Link to={`/workers/${worker._id}`} className="text-blue-600">View</Link>
      </div>
    </div>
  );
}
