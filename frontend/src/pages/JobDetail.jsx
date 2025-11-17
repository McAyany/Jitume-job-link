import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "@/api";
import { Button } from "@/components/ui/button";

export default function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    api.get(`/jobs/${id}`).then(res => setJob(res.data));
  }, [id]);

  if (!job) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
      <p className="mb-4">{job.description}</p>
      <Button onClick={() => alert("Applied successfully!")}>Apply Now</Button>
    </div>
  );
}
