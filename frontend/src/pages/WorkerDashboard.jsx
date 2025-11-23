import { useUser, useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import api from "@/api";

export default function WorkerDashboard() {
  const { user } = useUser();
  const { getToken } = useAuth();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    (async () => {
      const token = await getToken();
      const res = await api.get("/workers/me", {
        headers: {
          "x-clerk-user-id": user.id,
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(res.data);
    })();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Worker Profile</h1>
      {/* Form to create/edit worker profile */}
    </div>
  );
}
