import { PROJECTS } from "../constants";
import { FaGithub, FaYoutubeSquare, FaGlobe } from "react-icons/fa";
import { RiFilePdf2Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useState } from "react";

const openPDF = (pdfUrl) => {
  window.open(pdfUrl, "_blank");
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 5);
  
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>      <div>
        {displayedProjects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 flex items-center justify-center"
            >
              {/* GitHub icon */}
              {project.githubUrl && project.title !== "Encore Marketers Website" && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-2xl hover:text-purple-500 cursor-pointer" />
                </a>
              )}
              {/* Website icon */}
              {project.websiteLink && (
                <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                  <FaGlobe className="text-2xl hover:text-purple-500 cursor-pointer ml-4" />
                </a>
              )}
              {/* YouTube icon */}
              {project.youtubeLink && (
                <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer">
                  <FaYoutubeSquare className="text-2xl  hover:text-purple-500 cursor-pointer ml-4" />
                </a>
              )}
              {/* PDF icon */}
              {project.pdfName && (
                <RiFilePdf2Fill
                  className="text-2xl hover:text-purple-500 cursor-pointer ml-4"
                  onClick={() => openPDF(project.pdfName)}
                />
              )}
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >              {/* Wrap the title in an anchor tag with the appropriate URL */}              <a href={project.websiteLink || project.githubUrl} target="_blank" rel="noopener noreferrer">
                <h6 className="mb-2 font-semibold">
                  {project.title} -{" "}
                  <span className="text-sm text-purple-500">{project.subtitle}</span>
                </h6>
              </a><p className="mb-4 text-neutral-400">{project.description}</p>              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-2 rounded bg-neutral-400 px-1.5 py-0.5 text-xs font-medium text-white"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>        ))}
      </div>
      
      <div className="flex justify-center mt-10 mb-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 text-white rounded bg-purple-500 hover:bg-purple-600 transition-colors"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show More"}
        </motion.button>
      </div>
    </div>
  );
};

export default Projects;