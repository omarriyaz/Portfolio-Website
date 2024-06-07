import { PROJECTS } from "../constants";
import { FaGithub, FaYoutubeSquare } from "react-icons/fa";
import { RiFilePdf2Fill } from "react-icons/ri";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 flex items-center justify-center"
            >
              {/* GitHub icon */}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-2xl hover:text-purple-500 cursor-pointer" />
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
                <a href={project.pdfName} target="_blank" rel="noopener noreferrer">
                  <RiFilePdf2Fill className="text-2xl hover:text-purple-500 cursor-pointer ml-4" />
                </a>
              )}
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              {/* Wrap the title in an anchor tag with the appropriate GitHub URL */}
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <h6 className="mb-2 font-semibold">
                  {project.title} -{" "}
                  <span className="text-sm text-purple-100">{project.subtitle}</span>
                </h6>
              </a>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;