import { FaLinkedin, FaGithub, FaYoutubeSquare } from "react-icons/fa";
import { RiFilePdf2Fill } from "react-icons/ri";
import PDFDocument from "../assets/CV.pdf";

const Navbar = () => {
  const openPDF = () => {
    window.open(PDFDocument, "_blank");
  };

  return (
    <nav className="mb-20 flex items-center justify-center py-6">
      <div className="flex items-center justify-center gap-4 text-2xl">
        <button onClick={openPDF}>
          <RiFilePdf2Fill />
        </button>
        <a href="https://www.linkedin.com/in/omarriyaz/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.youtube.com/@omar16riyaz/videos" target="_blank" rel="noopener noreferrer">
          <FaYoutubeSquare />
        </a>
        <a href="https://github.com/omarriyaz" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
