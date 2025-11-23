import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function ChooseRole() {
  const { user } = useUser();
  const navigate = useNavigate();

  async function setRole(role) {
    await user.update({
      publicMetadata: { role }
    });

    if (role === "employer") navigate("/dashboard");
    else navigate("/worker-dashboard");
  }
  useEffect(() => {
  if (!user) return;

  const role = user.publicMetadata.role;

  if (role === "employer") navigate("/dashboard");
  if (role === "worker") navigate("/worker-dashboard");
  }, [user]);

  return (
    <div className="max-w-lg mx-auto mt-20 p-6 text-center">
      <h1 className="text-2xl font-bold mb-6">Choose Your Account Type</h1>

      <div className="space-y-4">
        <button
          onClick={() => setRole("employer")}
          className="w-full p-3 bg-blue-600 text-white rounded"
        >
          I Want to Hire Workers (Employer)
        </button>

        <button
          onClick={() => setRole("worker")}
          className="w-full p-3 bg-green-600 text-white rounded"
        >
          I Want to Find Jobs (Worker)
        </button>
      </div>
    </div>
  );
}
