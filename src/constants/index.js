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
    company: "Heriot Watt University",
    description: `I assisted in Year 1 Software Development lab classes at Heriot Watt University, helping students with Java coding, debugging, IDE setup, and exam marking. I also supported Year 1 students in Web Design and Databases lab classes, addressing queries on website and database design, along with simple PHP implementation.`,
    technologies: ["Java", "PHP", "Python", "HTML/CSS", "SQL"],
  },

  {
    year: "Jul '24 - Jul '24",
    role: "RBC Bluebay Work Experience",
    company: "RBC BlueBay Global Asset Management",
    description: `During my training at RBC BlueBay Global Asset Management, I had the opportunity to observe various teams and engage with several departments, gaining a thorough understanding of the business and strategic decision-making processes on the active trading floors. I learned from the Quant teams and Software Developers about creating proprietary software and machine learning models for stock selection, and working closely with portfolio managers deepened my understanding of managing and creating portfolios. Additionally, I placed third in the stock selection competition and my group won the Sovereign Credit Analysis competition, highlighting the valuable skills and knowledge I acquired during the training.`,
    technologies: ["Quantitative Analysis", "Stock Selection", "Portfolio Management"],
  },




];

export const PROJECTS = [
  {
    title: "Machine Learning Project",
    subtitle: "Song popularity predictor using Spotify Data",
    description:
      "In a collaborative project, we developed a predictive model for song popularity using Spotify data to forecast a song's success based on its attributes. I cleaned and explored the dataset using the Pandas library and created a Python script for efficient data handling. We implemented K-Nearest Neighbors, Decision Trees, and Neural Networks, achieving a prediction accuracy of 85% with the Neural Network model. By fine-tuning these models and optimizing their parameters, we effectively predicted song popularity, providing valuable insights for music producers and marketers to understand the key attributes that contribute to a song's success.",
    technologies: ["Python", "Scikit-Learn", "TensorFlow", "Keras", "PyTorch"],
    githubUrl: "https://github.com/dmml-heriot-watt/group-coursework-sos?tab=readme-ov-file",
  },

  {
    title: "Sales Prediction Using ML",
    subtitle: "BigMart Dataset Sales Prediction",
    description:
      "I developed a machine learning model to predict product sales across multiple stores, focusing on identifying key factors that drive higher sales. I cleaned and processed a dataset with over 8,500 entries, handled missing values, and performed feature engineering to enhance model accuracy. I tested multiple models, including Random Forest Regressor and XGBoost, and used cross-validation to ensure reliability. By refining the model with feature importance analysis, I achieved a high prediction accuracy with an R² score of 0.595 and a mean absolute error of 713.56.",
    technologies: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "Random Forest"],
    githubUrl: "https://github.com/omarriyaz/Big-Mart-Sales-Prediction",
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
      "Led a team of 8 in a study exploring how narratives affect human-robot interactions for navigation tasks. We used a Furhat robot with OpenAI’s GPT-3.5 as a dialogue system to evaluate how narratives influence instruction correctness, utility, recall, follow-up questions, and the robot's anthropomorphism and likeability. The project involved Python for data analysis, Kotlin for programming, prompt engineering, and building a virtual environment with rigorous experimental design. This work was selected by our professor for submission to the HAI conference, reflecting its significance and contribution to the field.",
    technologies: ["Python", "Kotlin", "Prompt Engineering", "NLP", "NLG"],
    githubUrl: "https://github.com/omarriyaz/FurGuide-Navigation-Assistant",
    youtubeLink: "https://www.youtube.com/watch?v=13Q6qLhceL8",
    pdfName: CA,
  },

  {
    title: "Beat Catalog Automation Script",
    subtitle: "Using Python for Audio Organization",
    description:
      "As a music producer, I developed a Python script to automate the organization and labeling of my extensive beat catalog, which includes over 2000 beats I created in FL Studio. Using tools like librosa, numpy, and pydub, the script efficiently converts MP3 files to WAV format, removes the initial 25 milliseconds of silence added by FL Studio, and calculates the BPM and musical key of each beat. This automation reduces the time required to provide artists with beat details by a significant amount, eliminating the need for manual detection with external plugins and enhancing workflow efficiency. The script processed and organized beats with an accuracy rate of up to 70%, making it a valuable tool for quickly sharing beats with artists.",
    technologies: ["Python", "Librosa", "NumPy", "Pydub", "FL Studio"],
    githubUrl: "https://github.com/omarriyaz/organize-my-beats",
  },

  {
    title: "Final Year Dissertation",
    subtitle: "Teaching Assistant Chatbot using NLP and ML",
    description:
      "In my 4th Year Honours project, I was tasked with developing a Teaching Assistant Chatbot to enhance student interactions with lecture materials. The challenge involved creating an efficient system that could handle diverse student queries about lecture content. I implemented PyPDF2 for extracting text from slides, used LangChain for preprocessing and retrieval, and integrated OpenAI's GPT-3.5 Turbo Chat Model to generate accurate responses. My actions led to the creation of a chatbot that reduced query resolution time by 40% and improved student engagement by 30%. The project was highly successful, earning an A grade and demonstrating a significant impact on both student learning and educator workload.",
    technologies: ["Python", "NLP", "ML", "Streamlit", "PyPDF2", "LangChain",],
    githubUrl: "https://github.com/omarriyaz/Teaching_Assistant_Chatbot",
    pdfName: Diss,
  },


  {
    title: "Android App Development Project",
    subtitle: "AR Scrapbooking App - Contra",
    description:
      "In a yearlong project, I led a team of 8 in developing Contra, an Augmented Reality (AR) scrapbooking application. The task was to create a social media platform where users could design and share interactive scrapbooks using AR technology. I coordinated the team’s efforts in UI/UX design, mobile and web development, and AR integration using React Native and ViroReact. We presented our project at an Expo, earning an A grade for our innovative approach and thorough documentation, which included design, implementation, and evaluation reports.",
    technologies: ["React Native", "Viro", "HTML/CSS", "JS", "AR"],
    githubUrl: "https://github.com/omarriyaz/Contra-AR-Android-App",
  },


  {
    title: "Data Visualization Project",
    subtitle: "COVID-19 Vaccination Effects visualized",
    description:
      "This project involved exploring and cleaning the dataset using Pandas and NumPy to ensure data accuracy. I then designed and developed the dashboard using HTML, CSS, JavaScript, and the D3 library. I incorporated various visualizations including line charts, choropleths, bar charts, bubble charts, and donut charts, all enhanced with tooltips, transitions, and animations.",
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
    githubUrl: "https://github.com/omarriyaz/Portfolio-Website",
  },
];

export const CONTACT = {
  address: "24 Westfield Rd, Edinburgh, EH11 2QB, United Kingdom",
  phoneNo: "+44 7541 182 796",
  email: "omarriyazbusiness@gmail.com",
};
