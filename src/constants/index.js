import CA from "../assets/FURGUIDE.pdf";
import Diss from "../assets/Diss.pdf";
import RO from "../assets/F21RO.pdf";


export const HERO_CONTENT = `I'm a BSc Computer Science Honors graduate from Heriot-Watt University with a focus on AI and Data Science. I'm skilled in Python, Java, SQL, and other programming languages, and have hands-on experience in Robotics, Machine Learning, and Data Analytics and Visualization. I've gained practical knowledge in Intelligent Automation and Cyber Security through internships and a Teaching Assistant role. I have strong communication skills, am self-driven, and always eager to learn. I'm particularly interested in AI applications in healthcare, sustainability, and automation. Outside of tech, I'm also a music producer with a successful YouTube channel and a competitive basketball player with leadership experience.`;

export const EXPERIENCES = [
  {
    year: "Jul '21 - Sept '21",
    role: "Software Engineering Intern",
    company: "Automation Anywhere",
    description: `As a Software Engineering Intern at Automation Anywhere, I developed Java modules for their Automation360 cloud platform. I contributed to migrating on-premises bots to the cloud and created a custom bot for the Heriot-Watt student portal, automating exam result delivery and re-sit examination guidance. I collaborated with the Quality Assurance Team, gaining experience in testing methodologies and ensuring product development met user requirements.`,
    technologies: ["Java", "Automation", "RPA", "Quality Assurance"],
  },

  {
    year: "Jun '23 - Jul '23",
    role: "Cyber Security Intern",
    company: "Paramount Computer Systems",
    description: `During my internship at Paramount Computer Systems, I explored cybersecurity principles and Microsoft's security solutions like Azure and Microsoft 365. I led a project implementing various security measures, including Conditional Access policies, email and endpoint security optimization, cloud application security, Data Loss Prevention, Network Security Group setup in Azure, and configuration of Microsoft Sentinel for proactive cybersecurity.`,
    technologies: ["MS Azure", "MS Sentinel", "MS 365", "Cybersecurity"],
  },

  {
    year: "Sept '23 - Mar '24",
    role: "Teaching Assistant",
    company: "Paramount Computer Systems",
    description: `I assisted in Year 1 Software Development lab classes at Heriot Watt University, helping students with Java coding, debugging, IDE setup, and exam marking. I also supported Year 1 students in Web Design and Databases lab classes, addressing queries on website and database design, along with simple PHP implementation.`,
    technologies: ["Java", "PHP", "Python", "HTML/CSS", "SQL"],
  },




];

export const PROJECTS = [
  {
    title: "Machine Learning Project",
    subtitle: "Song popularity predictor using Spotify Data",
    description:
      "In this collaborative project, we developed a predictive model for song popularity using Spotify data, aiming to predict a song’s popularity based on its attributes. Our work included dataset cleaning and exploring using the Pandas Library, implementing a Python script for efficient data handling, and applying K-Nearest Neighbors, Decision Trees, and Neural Networks for predictive modeling.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "ML"],
    githubUrl: "https://github.com/dmml-heriot-watt/group-coursework-sos?tab=readme-ov-file",
  },

  {
    title: "Conversational Agent Project",
    subtitle: "Impact of Narratives on HRI",
    description:
      "Lead a group of 8 that conducted a study exploring the implementation of narratives in human-robot interactions to aid navigation tasks. Utilizing a Furhat robot paired with OpenAI’s GPT 3.5 as a dialogue system, we investigated the impact of narratives on instruction correctness, utility, and recall, along with their influence on the quantity of follow-up questions and the Furhat robot's anthropomorphism and likeability. The research aimed to deepen understanding of user experience and cognitive processes in narrative-based interactions. The experiment involved Python for data analysis, Kotlin for Furhat robot programming, prompt engineering, building a virtual environment and rigorous experimental design to ensure optimal results.",
    technologies: ["Python", "Kotlin", "Prompt Engineering", "NLP", "NLG"],
    githubUrl: "https://github.com/Shivaanee/Furhat-Nav-Assistant",
    youtubeLink: "https://www.youtube.com/watch?v=13Q6qLhceL8",
    pdfName: CA,
  },

  {
    title: "Final Year Dissertation",
    subtitle: "Teaching Assistant Chatbot using NLP and ML",
    description:
      "During my 4th Year Honours project, I developed a Teaching Assistant Chatbot integrating machine learning and natural language processing. Leveraging technologies such as PyPDF2 for slide text extraction, LangChain for preprocessing and conversational retrieval, and OpenAI's GPT-3.5 Turbo Chat Model for responses, the chatbot enables students to interact with lecture materials via natural language queries. The final dissertation received an A grade, demonstrating the chatbots effectiveness in enhancing query resolution, improving the learning experience, and streamlining workload for educators.",
    technologies: ["Python", "NLP", "ML", "Streamlit", "PyPDF2", "LangChain",],
    githubUrl: "https://github.com/omarriyaz/Teaching_Assistant_Chatbot",
    pdfName: Diss,
  },


  {
    title: "Android App Development Project",
    subtitle: "Augmented Reality Scrapbooking App - Contra",
    description:
      "Led a team of 8 members in a yearlong project to create an Augmented Reality Scrapbooking Application called Contra. This social media/scrapbooking platform allowed users to create and share scrapbooks using AR technology. Built with React Native and ViroReact, the app enabled users to post and interact with AR-enhanced scrapbooks. Our group achieved an A grade for presenting the project at an Expo and submitting comprehensive documentation, including design and implementation reports, evaluation reports, and user guides. The project involved UI/UX design, mobile and web development, and augmented reality integration.",
    technologies: ["React Native", "Viro", "HTML/CSS", "JS", "AR"],
    githubUrl: "https://github.com/omarriyaz/Contra-AR-Android-App",
  },


  {
    title: "Data Visualization Project",
    subtitle: "COVID-19 Vaccination Effects visualized",
    description:
      "I also undertook a Data Visualization project using a COVID-19 dataset. After exploring and cleaning the dataset using Pandas and NumPy, I used HTML, CSS, JavaScript, and the D3 library to visualize the data on a dashboard. Employing line charts, a choropleth, bar charts, bubble charts, and donut charts, all with tooltips, transitions and animations to showcase the effects of COVID-19 vaccination on deaths and cases worldwide.",
    technologies: ["HTML/CSS", "JavaScript", "D3", "Pandas", "NumPy", "Data Visualization"],
    githubUrl: "https://github.com/omarriyaz/COVID19-Data-Visualization",
  },


  {
    title: "Robotics Project",
    subtitle: "Mars Rover Exploration using BBR and ER in Webots",
    description:
      "The project was delivered using Behavior Based Robotics (BBR) and Evolutionary Robotics (ER), and the controllers were coded in Python for a Mars rover replica in Webots. BBR controllers successfully navigated predetermined paths and reward zones, while the ER approach faced challenges, motivating further ways to drive enhancements. This project was very crucial in teaching me the practical challenges and in providing us valuable insights into the effectiveness and limitations of bio-inspired strategies in Mars exploration.",
    technologies: ["Python", "Webots", "Robotics", "BBR", "ER"],
    pdfName: RO,
  },

  {
    title: "3D Graphics Project",
    subtitle: "3D Graphics Engine using OpenGL and C++",
    description:
      "In our F20GA 3D graphics project, I played a pivotal role within our team of four members. I focused on creating a detailed pirate key rendering using Blender and seamlessly integrated it with my teammates' work to construct an immersive pirate ship scene. Employing Unreal Engine, I animated the ship to enhance its realism and visual appeal. Using C++ and OpenGL, I added interactive elements, enabling users to engage dynamically with the environment. This project underscored my adeptness in 3D modeling, animation, and collaborative teamwork, culminating in a captivating final product.",
    technologies: ["C++", "OpenGL", "Blender", "Unreal Engine", "3D Graphics"],
    githubUrl: "https://github.com/omarriyaz/3D-Graphics-Project",
  },

  {
    title: "Porfolio Website Project",
    subtitle: "Portfolio Website using React and Tailwind CSS",
    description:
      "I designed and developed my personal portfolio website using React and Tailwind CSS. The website showcases my projects, experiences, and contact information in a visually appealing and user-friendly manner. I implemented animations and transitions to enhance the user experience and ensure the website is engaging and interactive. The project allowed me to demonstrate my web development skills and creativity, and provided me with a platform to showcase my work and connect with potential employers and collaborators.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "HTML/CSS", "Web Development"],
    githubUrl: "https://github.com/omarriyaz/3D-Graphics-Project",
  },
];

export const CONTACT = {
  address: "24 Westfield Rd, Edinburgh, EH11 2QB, United Kingdom",
  phoneNo: "+44 7541 182 796",
  email: "omarriyazbusiness@gmail.com",
};
