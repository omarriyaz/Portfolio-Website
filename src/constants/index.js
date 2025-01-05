import CA from "../assets/FURGUIDE.pdf";
import Diss from "../assets/Diss.pdf";
import RO from "../assets/F21RO.pdf";


export const HERO_CONTENT = `Im a MSc student at Bath University, specializing in AI and Data Science. I code mostly in Python, Java and SQL, I have hands-on experience in Robotics, Machine Learning, and Data Analytics/Visualization. Through work experience, I have gained practical knowledge in Intelligent Automation, Software Devlopment and Data Science. I have strong communication skills, am self-driven, and eager to learn. Outside of tech, I am also a music producer with a successful YouTube channel and a competitive basketball player with leadership experience.`;

export const EXPERIENCES = [
  {
    year: "Jun '25 - Present",
    role: "WDOT Software Developer",
    company: "Nomura",
    description: ``,
    technologies: ["Java", "Spring Boot", "SQL", "Microservices"],
  },

  {
    year: "Jul '24 - Jul '24",
    role: "Software Developer",
    company: "Clean Blast International",
    description: `Developed a custom Python app to automate the extraction, cleaning and visualization of sales data. Built an interactive dashboard displaying key performance indicators to provide real-time insights into company performance.`,
    technologies: ["Python", "Data Analyst", "Data Visualization", "Sales Analytics"],
  },

  {
    year: "Jul '24 - Jul '24",
    role: "RBC Bluebay Work Experience",
    company: "RBC BlueBay Global Asset Management",
    description: `Gained in depth exposure to the business operations and decision making by observing the teams on active trading floors at RBC BlueBay Global Asset Management. Engaged with the Quant teams and Software Developers to learn about developing proprietary software and machine learning models for stock selection.`,
    technologies: ["Quantitative Analysis", "Stock Selection", "Portfolio Management"],
  },

  {
    year: "Sept '23 - Mar '24",
    role: "Teaching Assistant",
    company: "Heriot Watt University",
    description: `Assisted for the Software Development and Databases courses, guiding students through coding challenges, debugging, and IDE setup for over 100 students. Tutored at the Code Clinic, a coding support program, offering tailored guidance on various programming issues.`,
    technologies: ["Java", "PHP", "Python", "HTML/CSS", "SQL"],
  },

  {
    year: "Jun '23 - Jul '23",
    role: "Cyber Security Intern",
    company: "Paramount Computer Systems",
    description: `Explored cybersecurity frameworks and Microsoft's security solutions, including Azure and Microsoft 365, enhancing knowledge of these technologies. Implemented Conditional Access, cloud security, DLP policies, and NSGs in Azure.`,
    technologies: ["MS Azure", "MS Sentinel", "MS 365", "Cybersecurity"],
  },

  {
    year: "Jul '21 - Sept '21",
    role: "Software Engineering Intern",
    company: "Automation Anywhere",
    description: `Developed and Integrated Java modules for the Automation360 cloud platform. Contributed to the migration of 20 on-premises bots to the cloud, improving scalability and reducing maintenance for business processes. Created a custom bot for Heriot-Watt University’s student portal, automating exam result notifications and re-sit guidance, streamlining information delivery for students. Collaborated with the QA Team to implement testing methods, ensuring adherence to user requirements.`,
    technologies: ["Java", "Automation", "RPA", "Quality Assurance"],
  },
];

export const PROJECTS = [
  {
    title: "Machine Learning Project",
    subtitle: "Song popularity predictor using Spotify Data",
    description:
      "In this collaborative project, we developed a predictive model to forecast song popularity using Spotify data, focusing on predicting a song's popularity based on its attributes. Our process involved cleaning and exploring the dataset with the Pandas library, creating a Python script for efficient data handling, and using K-Nearest Neighbors, Decision Trees, and Neural Networks for predictive modeling.",
    technologies: ["Python", "Scikit-Learn", "TensorFlow", "Keras", "PyTorch"],
    githubUrl: "https://github.com/dmml-heriot-watt/group-coursework-sos?tab=readme-ov-file",
  },

  {
    title: "AI Career Advice Web App",
    subtitle: "AI-powered project idea generator for students",
    description:
      "AI Project Idea Generator is a Streamlit application that helps users generate project ideas, which they can add into their cv, to help break into into various career fields. By using YouTube videos related to specified role or field, the app extracts useful information and generates projects ideas to help users start in their chosen fields.",
    technologies: ["Python", "Youtube API", "LLM", "AI", "Llama3.1"],
    githubUrl: "https://github.com/omarriyaz/ai-project-ideas/tree/main",
  },

  {
    title: "NHS Cancer Wait Times Analysis",
    subtitle: "EDA on NHS Cancer Wait Times Data",
    description:
      "Analyzed the Cancer Waiting Times dataset from the Public Health Scotland Open Data platform to assess compliance with 62-day and 31-day cancer treatment standards across Scotland. Focused on identifying regional variations in waiting times, trends over time, and disparities across specific cancer types, including Head & Neck, Lung, and Breast cancer. Conducted a comprehensive analysis that revealed significant differences in waiting times between NHS boards and council areas, identified common delays in the cancer treatment pathway, and highlighted areas needing improvement. The findings provided actionable insights into enhancing cancer care delivery and informed strategies for reducing treatment delays, contributing to the overall goal of improving patient outcomes in Scotland.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Analysis"],
    githubUrl: "https://github.com/omarriyaz/NHS_cancer_wait_times_analysis",
  },

  {
    title: "Conversational Agent Project",
    subtitle: "Impact of Narratives on HRI",
    description:
      "Led a team of eight members in a study focused on the use of narratives in human-robot interactions to assist with navigation tasks. We used a Furhat robot combined with OpenAI’s GPT-3.5 for dialogue, examining how narratives affected the accuracy, utility, and recall of instructions, as well as their impact on follow-up questions, the robot’s anthropomorphism, and its likeability. The research aimed to enhance our understanding of user experience and cognitive processes in narrative-based interactions. The project involved Python for data analysis, Kotlin for programming the Furhat robot, prompt engineering, building a virtual environment in Minecraft, and a carefully designed experimental setup to ensure reliable results. This paper was selected by our professor for submission to the HAI conference, which was then turned into a poster that got published in HAI, reflecting its significance and contribution to the field.",
    technologies: ["Python", "Kotlin", "Prompt Engineering", "NLP", "NLG"],
    githubUrl: "https://github.com/omarriyaz/FurGuide-Navigation-Assistant",
    youtubeLink: "https://www.youtube.com/watch?v=13Q6qLhceL8",
    pdfName: CA,
  },

  {
    title: "Beat Catalog Automation Script",
    subtitle: "Using Python for Audio Organization",
    description:
      "As a music producer, I created a Python script to automate the organization and labeling of my extensive beat catalog, which includes over 2,000 beats I produced in FL Studio. The script uses tools like librosa, numpy, and pydub to convert MP3 files to WAV, remove the initial 25 milliseconds of silence added by FL Studio, and calculate the BPM and musical key of each beat. This automation significantly speeds up the process of providing artists with beat details, eliminating the need for manual detection and external plugins, and enhancing workflow efficiency. The script achieves up to 70% accuracy in processing and organizing beats, making it an great tool for quickly sharing beats with artists.",
    technologies: ["Python", "Librosa", "NumPy", "Pydub", "FL Studio"],
    githubUrl: "https://github.com/omarriyaz/organize-my-beats",
  },

  {
    title: "Final Year Dissertation",
    subtitle: "Teaching Assistant Chatbot using NLP and ML",
    description:
      "For my 4th Year Honours project, I developed a Teaching Assistant Chatbot that integrated machine learning and natural language processing. I used PyPDF2 for extracting text from lecture slides, LangChain for preprocessing and conversational retrieval, and OpenAI's GPT-3.5 Turbo Chat Model for generating responses. The chatbot allowed students to interact with lecture materials through natural language queries. My final dissertation received an A grade, showcasing the chatbot's effectiveness in improving query resolution, enhancing the learning experience, and reducing the workload for professors.",
    technologies: ["Python", "NLP", "ML", "Streamlit", "PyPDF2", "LangChain",],
    githubUrl: "https://github.com/omarriyaz/Teaching_Assistant_Chatbot",
    pdfName: Diss,
  },


  {
    title: "Android App Development Project",
    subtitle: "AR Scrapbooking App - Contra",
    description:
      "I led a team of eight members in a year-long project to develop an AR Scrapbooking App called Contra. This platform combined social media and scrapbooking, allowing users to create and share AR-enhanced scrapbooks. Built using React Native and ViroReact, the app enabled users to post and interact with AR content. We earned an A grade for our presentation at an Expo and submitted detailed documentation, including design, implementation, evaluation reports, and user guides. The project focused on UI/UX design, mobile and web development, and integrating augmented reality features.",
    technologies: ["React Native", "Viro", "HTML/CSS", "JS", "AR"],
    githubUrl: "https://github.com/omarriyaz/Contra-AR-Android-App",
  },


  {
    title: "Data Visualization Project",
    subtitle: "COVID-19 Vaccination Effects visualized",
    description:
      "I worked on a Data Visualization project using a COVID-19 dataset. After cleaning and exploring the data with Pandas and NumPy, I created an interactive dashboard using HTML, CSS, JavaScript, and the D3 library. The dashboard featured line charts, a choropleth, bar charts, bubble charts, and donut charts, all enhanced with tooltips, transitions, and animations. The visualizations highlighted the global impact of COVID-19 vaccination on deaths and cases.",
    technologies: ["HTML/CSS", "JavaScript", "D3", "Pandas", "NumPy", "Data Visualization"],
    githubUrl: "https://github.com/omarriyaz/COVID19-Data-Visualization",
  },


  {
    title: "Robotics Project",
    subtitle: "Mars Rover Exploration using BBR and ER in Webots",
    description:
      "The project involved using Behavior Based Robotics (BBR) and Evolutionary Robotics (ER), with controllers coded in Python for a Mars rover replica in Webots. The BBR controllers successfully navigated predetermined paths and reward zones, while the ER approach encountered challenges, prompting further exploration of potential improvements. This project was instrumental in teaching me about the practical challenges of robotics and provided valuable insights into the effectiveness and limitations of bio inspired strategies.",
    technologies: ["Python", "Webots", "Robotics", "BBR", "ER"],
    pdfName: RO,
  },

  {
    title: "Sales Prediction Using ML",
    subtitle: "BigMart Dataset Sales Prediction",
    description:
      "I developed a machine learning model to predict product sales across multiple stores, aiming to identify the key factors driving higher sales. I cleaned and processed a dataset with over 8,500 entries, handled missing values, and performed feature engineering to improve model accuracy. I tested various models, including Random Forest Regressor and XGBoost, using cross-validation for reliability. By refining the model through feature importance analysis, I achieved a prediction accuracy with an R² score of 0.595 and a mean absolute error of 713.56.",
    technologies: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "Random Forest"],
    githubUrl: "https://github.com/omarriyaz/Big-Mart-Sales-Prediction",
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
      "I designed and developed my personal portfolio website using React and Tailwind CSS. The site highlights my projects, experiences, and contact information in a clean and user-friendly layout. To improve the user experience, I added animations and transitions, making the site engaging and interactive. This project allowed me to showcase my web development skills and creativity while providing a platform to display my work and connect with potential employers.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "HTML/CSS", "Web Development"],
    githubUrl: "https://github.com/omarriyaz/Portfolio-Website",
  },
];

export const CONTACT = {
  address: "Bath, United Kingdom",
  email: "omarriyazbusiness@gmail.com",
};
