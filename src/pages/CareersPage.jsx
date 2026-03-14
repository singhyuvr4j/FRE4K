import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Briefcase,
  MapPin,
  ArrowRight,
  Search,
  Coffee,
  User2Icon,
  Heart,
  Laptop,
  GraduationCap,
  Globe2,
  DollarSign,
  Gem,
  Award,
  ChevronDown,
  CheckCircle,
} from "lucide-react";

const JobCard = ({ job, isExpanded, onToggle }) => (
  <div className="group">
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-primarytext/50 transition-all duration-300">
      <div className="p-6 cursor-pointer" onClick={() => onToggle(job.id)}>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white group-hover:text-primarytext transition-colors">
              {job.title}
            </h3>
            <p className="text-blue-100">{job.description}</p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-zinc-800/80 text-blue-100">
                <Briefcase className="w-4 h-4" /> {job.type}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-zinc-800/80 text-blue-100">
                <MapPin className="w-4 h-4" /> {job.location}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-zinc-800/80 text-blue-100">
                <DollarSign className="w-4 h-4" /> {job.salary}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={job.href}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-primarytext text-white rounded-lg hover:bg-primarytext/90 transition-colors whitespace-nowrap"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Apply Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <ChevronDown
              className={`w-6 h-6 text-blue-100 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6 border-t border-zinc-800">
          <h4 className="text-lg font-semibold text-white mb-4">
            Requirements
          </h4>
          <ul className="space-y-3">
            {job.requirements.map((requirement, index) => (
              <li key={index} className="flex items-start gap-3 text-blue-100">
                <CheckCircle className="w-5 h-5 text-primarytext mt-0.5 shrink-0" />
                <span>{requirement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const CareersPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedJobId, setExpandedJobId] = useState(null);

  const departments = [
    { id: "all", label: "All Roles" },
    { id: "engineering", label: "Engineering" },
    { id: "support", label: "Support" },
    { id: "marketing", label: "Marketing" },
    { id: "operations", label: "Operations" },
  ];

  const jobs = [
    {
      id: 1,
      title: "Senior Backend Developer",
      department: "engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$100k - $150k",
      description:
        "Join our core team building high-performance game server infrastructure.",
      requirements: [
        "Experience with Go, Rust, or similar systems languages",
        "Background in distributed systems",
        "Game server optimization knowledge",
      ],
      href: "https://example.com/",
    },
    {
      id: 2,
      title: "Technical Support Specialist",
      department: "support",
      location: "Hybrid",
      type: "Full-time",
      salary: "$50k - $70k",
      description:
        "Help gamers and server owners optimize their gaming experience.",
      requirements: [
        "Deep knowledge of game servers",
        "Strong communication skills",
        "Problem-solving abilities",
      ],
      href: "https://example.com/",
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$90k - $130k",
      description:
        "Build and maintain our cloud infrastructure and deployment systems.",
      requirements: [
        "Experience with Kubernetes and Docker",
        "Infrastructure as Code expertise",
        "Monitoring and alerting systems",
      ],
      href: "https://example.com/",
    },
    {
      id: 4,
      title: "Marketing Manager",
      department: "marketing",
      location: "Remote",
      type: "Full-time",
      salary: "$70k - $90k",
      description:
        "Lead our marketing initiatives and grow our gaming community.",
      requirements: [
        "Gaming industry experience",
        "Digital marketing expertise",
        "Community building skills",
      ],
      href: "https://example.com/",
    },
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Competitive Salary",
      description:
        "Industry-leading compensation packages with equity options.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health Benefits",
      description:
        "Comprehensive health, dental, and vision coverage for you and your family.",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Work-Life Balance",
      description: "Flexible working hours and unlimited PTO policy.",
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Remote Work",
      description: "Work from anywhere with our distributed-first approach.",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Learning Budget",
      description:
        "Annual budget for courses, conferences, and certifications.",
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "Team Retreats",
      description: "Regular company retreats to meet and bond with the team.",
    },
  ];

  const values = [
    {
      icon: <Gem className="w-6 h-6" />,
      title: "Innovation First",
      description: "We push the boundaries of whats possible in game hosting.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do.",
    },
    {
      icon: <User2Icon className="w-6 h-6" />,
      title: "Community",
      description: "We build and nurture our gaming communities.",
    },
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      (activeFilter === "all" || job.department === activeFilter) &&
      (job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleJob = (jobId) => {
    setExpandedJobId(expandedJobId === jobId ? null : jobId);
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Careers | VoltForge</title>
      </Helmet>
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/30 via-black/50 to-black" />
        </div>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Help us shape the future of game hosting and make an impact in the
              gaming industry
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters Section */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-lg border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-primarytext focus:ring-1 focus:ring-primarytext transition-colors"
              />
            </div>
            <div className="relative">
              <div className="flex overflow-x-auto scrollbar-hide -mx-4 sm:mx-0">
                <div className="flex gap-2 px-12 sm:px-0 pb-2 sm:pb-0">
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => setActiveFilter(dept.id)}
                      className={`flex-none px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                        activeFilter === dept.id
                          ? "bg-primarytext text-white shadow-lg shadow-primarytext/20"
                          : "bg-zinc-900/50 text-blue-100 hover:bg-zinc-800 hover:text-white"
                      }`}
                    >
                      {dept.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="py-8 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                isExpanded={expandedJobId === job.id}
                onToggle={toggleJob}
              />
            ))}
            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-blue-100">
                  No positions found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-16 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
              We offer competitive benefits and a great work environment to help
              you thrive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-primarytext/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primarytext/10 flex items-center justify-center text-primarytext mb-4 group-hover:bg-primarytext group-hover:text-white transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
              The principles that guide us in building the future of game
              hosting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg text-center hover:border-primarytext/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-xl bg-primarytext/10 flex items-center justify-center text-primarytext mx-auto mb-4 group-hover:bg-primarytext group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-blue-100">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Don't See Your Role?
          </h2>
          <p className="text-lg lg:text-xl text-blue-100">
            We're always looking for talented people. Send us your resume and
            we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
            <a
              href="mailto:example@voltforge.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primarytext hover:bg-primarytext/90 text-white rounded-lg transition-all duration-300 group"
            >
              Send Resume
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
