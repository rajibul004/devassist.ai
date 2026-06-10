import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Mail, MapPin, Code2 } from "lucide-react";
const DeveloperDetails = () => {
  const skills = [
    "Java",
    "Spring Boot",
    "React",
    "PostgreSQL",
    "Docker",
    "AWS",
  ];

  const projects = [
    {
      name: "DevAssist AI",
      description: "AI powered debugging assistant for developers",
      tech: "Spring Boot + React + AI",
    },
    {
      name: "Expense Tracker API",
      description: "Secure REST API with authentication",
      tech: "Java + PostgreSQL",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10">
      {/* Profile Card */}
      <div
        className="
        max-w-5xl mx-auto 
        bg-gray-900 
        rounded-3xl 
        p-8 
        shadow-xl
      "
      >
        <div
          className="
          flex flex-col 
          md:flex-row 
          gap-8 
          items-center
        "
        >
          <img
            src="https://github.com/rajibul004.png"
            className="
              w-40 h-40 
              rounded-full 
              border-4 
              border-blue-500
            "
          />

          <div className="flex-1">
            <h1
              className="
              text-4xl 
              font-bold
            "
            >
              Rajibul Mondal
            </h1>

            <p
              className="
              text-blue-400 
              mt-2
            "
            >
              Java Backend Developer
            </p>

            <p
              className="
              text-gray-400 
              mt-4
            "
            >
              Passionate backend developer building scalable applications using
              Java, Spring Boot and modern web technologies.
            </p>

            <div
              className="
              flex gap-4 
              mt-5
            "
            >
              <FaGithub size={24} />

              <FaLinkedin size={24} />

              <Mail />
            </div>
          </div>
        </div>

        {/* Skills */}

        <section className="mt-12">
          <h2
            className="
            text-2xl 
            font-semibold 
            flex gap-2
          "
          >
            <Code2 />
            Skills
          </h2>

          <div
            className="
            flex 
            flex-wrap 
            gap-3 
            mt-5
          "
          >
            {skills.map((skill) => (
              <span
                key={skill}
                className="
                 bg-blue-600/20
                 text-blue-300
                 px-4 py-2
                 rounded-full
                 "
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* About */}

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">About Developer</h2>

          <p className="text-gray-400 mt-4 leading-7">
            I am a Java Backend Developer focused on building scalable and
            production-ready applications. I created DevAssist AI to help
            developers debug faster, understand errors, and improve productivity
            using modern AI technologies.
          </p>
        </section>

        {/* Expertise */}

        <section className="mt-12">
          <h2 className="text-2xl font-semibold flex gap-2">
            <Code2 />
            Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-5 mt-5">
            {[
              "Backend Development",
              "REST API Design",
              "Database Design",
              "System Architecture",
              "AI Integration",
              "Cloud Deployment",
            ].map((item) => (
              <div
                key={item}
                className="
          bg-gray-800
          rounded-xl
          p-5
          text-center
          hover:bg-gray-700
          transition
          "
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Details */}

        <section className="mt-12">
          <div
            className="
          flex gap-2 
          text-gray-400
          "
          >
            <MapPin />
            India
          </div>
        </section>
      </div>
    </div>
  );
};

export default DeveloperDetails;
