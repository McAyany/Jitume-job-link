import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold">Welcome to JobLink</h1>
      <p className="mt-4 text-gray-600">Find jobs or hire skilled workers easily.</p>
      <Link to="/jobs"><Button className="mt-6">Browse Jobs</Button></Link>
    </div>
  );
}
