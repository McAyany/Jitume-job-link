import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
          Empowering Job Seekers & Employers
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          JobLink connects skilled workers with employers quickly, securely, and efficiently.  
          Find jobs, post jobs, or hire top talent around you.
        </p>

        <div className="mt-8 flex justify-center gap-5">
          <Link to="/jobs">
            <Button size="lg" className="bg-blue-600 text-white">
              I’m Looking for a Job
            </Button>
          </Link>

          <Link to="/workers">
            <Button size="lg" variant="outline">
              I Need Skilled Workers
            </Button>
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-3 gap-8">
        <Card className="shadow-lg">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3">Fast Job Search</h3>
            <p className="text-gray-600">Browse thousands of verified job listings near you.</p>
          </div>
        </Card>

        <Card className="shadow-lg">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3">Create a Professional Profile</h3>
            <p className="text-gray-600">Showcase your skills, experience, and availability.</p>
          </div>
        </Card>

        <Card className="shadow-lg">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3">Hire Skilled Workers</h3>
            <p className="text-gray-600">Employers can quickly find reliable workers with verified skills.</p>
          </div>
        </Card>
      </section>
    </div>
  );
}
