import { FaAngleDoubleRight } from "react-icons/fa";
import { AiOutlineCodepen } from "react-icons/ai";
import { FiBriefcase } from "react-icons/fi";
import { FiDatabase } from "react-icons/fi";
import { FiRefreshCw } from "react-icons/fi";

import Card from "./ui/Card";

const About = () => {
  return (
    <div>
      <section className="md:hidden absolute top-[120%] left-2">
        <div className="relative h-full">
          <div className="h-[63rem] rounded-2xl w-2 bg-[#F5F5F5]"></div>
          <div className="absolute top-0 left-0 w-2 rounded-2xl bg-green-500 h-[7rem]"></div>

          <div className="absolute top-2 left-0 h-full  flex flex-col justify-around -translate-x-1/4">
            <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow"></div>

            <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow"></div>

            <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow"></div>
          </div>
        </div>
      </section>
      <section className="flex justify-evenly flex-wrap">
        <Card>
          <Card.Icon>
            <FaAngleDoubleRight className="text-[#FFBD59] w-15 h-15" />
          </Card.Icon>
          <Card.Title title="Ready to Go Algos" />
          <Card.Description
            description="We have ready accelerators embedded with learnings from hundreds of past
projects, generating actionable results."
          />
        </Card>
        <Card>
          <Card.Icon>
            <AiOutlineCodepen className="text-[#FFBD59] w-15 h-15" />
          </Card.Icon>
          <Card.Title title="Internal capability building" />
          <Card.Description description="We productize all our work, enhance them with the latest AI technology, and train your internal teams to leverage them." />
        </Card>
      </section>
      <section className="hidden md:flex justify-center">
        <div className="relative w-4/5">
          <div className="w-full rounded-2xl h-2 bg-[#F5F5F5]"></div>
          <div className="absolute top-0 left-0 h-2 rounded-2xl bg-green-500 w-[10%]"></div>

          <div className="absolute top-1/2 left-0 w-full  flex justify-around -translate-y-1/2">
            <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow"></div>

            <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow"></div>

            <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow"></div>
          </div>
        </div>
      </section>

      <section className="flex justify-evenly flex-wrap">
        <Card>
          <Card.Icon>
            <FiDatabase className="text-[#FFBD59] w-15 h-15" />
          </Card.Icon>
          <Card.Title title=" Multi-source data" />
          <Card.Description description="Our solutions work with old, new, or incomplete datasets, in different formats, and from varied sources." />
        </Card>
        <Card>
          <Card.Icon>
            <FiBriefcase className="text-[#FFBD59] w-15 h-15" />
          </Card.Icon>
          <Card.Title title="Stakeholder alignment" />
          <Card.Description description="No black boxes. Stakeholders understand the “how”, “so what” and “now what”, leading to clear decision-making trade offs." />
        </Card>
        <Card>
          <Card.Icon>
            <FiRefreshCw className="text-[#FFBD59] w-15 h-15" />
          </Card.Icon>
          <Card.Title title="Continuous engagement" />
          <Card.Description
            description="We engage in the long-term to enhance, course-correct, and adopt new models to
continuously refine your work."
          />
        </Card>
      </section>
    </div>
  );
};

export default About;
