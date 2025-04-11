import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import Title from "../ui/title";

export default function About() {
  return (
    <div className="px-4 flex flex-col items-center">
      <Title content="About Me" />
      <section
        id="about"
        className="bg-[var(--primary)] rounded-2xl py-16 px-4 sm:px-8 lg:px-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className=" text-lg mb-8">
            I'm an aspiring
            <span className="font-semibold text-indigo-400 px-0.5">
              Software Engineer
            </span>
            passionate about building scalable systems and clean APIs.Currently
            mastering Spring Boot, Expressjs, Go while diving deep into system
            design, microservices, and clean architecture.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 text-left">
            <div className="flex justify-center items-center gap-4">
              <FaCode className="text-indigo-500  text-6xl rounded-full" />
              <div>
                <h3 className="text-lg font-semibold">Backend Engineering</h3>
                <p className=" text-sm">
                  Proficient in Go, Java, Spring Boot, and RESTful APIs.
                  Obsessed with performance and clean code.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-4">
              <FaLaptopCode className="text-indigo-500 text-6xl rounded-full" />
              <div>
                <h3 className="text-lg font-semibold ">Microservices & Auth</h3>
                <p className=" text-sm">
                  Building secure, scalable microservices using JWT, PostgreSQL,
                  and Docker.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-4">
              <FaRocket className="text-indigo-500 text-6xl rounded-full" />
              <div>
                <h3 className="text-lg font-semibold ">Always Learning</h3>
                <p className=" text-sm">
                  System design, DSA, and production-grade code — leveling up
                  every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
