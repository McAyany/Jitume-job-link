import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import api from "@/api";
import { Link } from "react-router-dom";

export default function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api.get("/jobs").then(res => setJobs(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Available Jobs</h2>
      <div className="grid gap-4">
        {jobs.map(job => (
          <Card key={job._id}>
            <h3 className="font-bold text-lg">{job.title}</h3>
            <p>{job.description}</p>
            <Link to={`/jobs/${job._id}`} className="text-blue-600 text-sm">View Details</Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
