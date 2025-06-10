 import CA from "../assets/FURGUIDE.pdf";
import Diss from "../assets/Diss.pdf";
import RO from "../assets/F21RO.pdf";
import ML from "../assets/ML2.pdf";
import RL from "../assets/RL.pdf";
import BML from "../assets/BML.pdf";


export const HERO_CONTENT = `I'm a software developer at Nomura. I code mostly in Java, Python and SQL. I'm an expert in Machine/Deep Learning, and Data Analytics. I did my MSc in Data Science at the University of Bath, and a BSc (Hons.) in Computer Science at Heriot Watt University. Through work experience, I have gained practical knowledge in Software Devlopment, Intelligent Automation, and Data Science. I have strong communication skills, am self-driven, and eager to learn. Outside of tech, I'm also a music producer with a YouTube channel and a competitive basketball player.`;

export const EXPERIENCES = [
  {
    year: "Jun '25 - Present",
    role: "Trade Service Developer",
    company: "Nomura",
    description: "",
    technologies: ["Java", "Spring Boot", "SQL", "Microservices"],
  },

  {
    year: "Jul '24 - Aug '24",
    role: "Software Developer",
    company: "Clean Blast International",
    description: `Developed a custom Python based app to automate the extraction, cleaning and visualization of sales data. Built an interactive dashboard displaying key performance indicators to provide real-time insights into company performance.`,
    technologies: ["Python", "Data Analyst", "Data Visualization", "Sales Analytics"],
  },

  {
    year: "Jul '24 - Jul '24",
    role: "RBC Bluebay Work Experience",
    company: "RBC BlueBay Global Asset Management",
    description: `Gained exposure to the business operations and decision making by observing the teams on active trading floors at RBC BlueBay Global Asset Management. Engaged with the Quant teams and Software Developers to learn about developing proprietary software and machine learning models for stock selection.`,
    technologies: ["Quantitative Analysis", "Stock Selection", "Portfolio Management"],
  },

  {
    year: "Sept '23 - Mar '24",
    role: "Teaching Assistant",
    company: "Heriot Watt University",
    description: `Assisted for the Software Development and Databases courses, helping students with their coding questions, debugging, and IDE setup for over 100 students. Tutored at the Code Clinic, a coding support program, offering tailored guidance on various programming issues.`,
    technologies: ["Java", "PHP", "Python", "HTML/CSS", "SQL"],
  },

  {
    year: "Jun '23 - Jul '23",
    role: "Cyber Security Intern",
    company: "Paramount Computer Systems",
    description: `Learned about cybersecurity frameworks and Microsoft's security solutions, including Azure and Microsoft 365. Implemented Conditional Access, cloud security, DLP policies, and NSGs in Azure, as a part of a capestone project.`,
    technologies: ["MS Azure", "MS Sentinel", "MS 365", "Cybersecurity"],
  },

  {
    year: "Jul '21 - Sept '21",
    role: "Software Engineering Intern",
    company: "Automation Anywhere",
    description: `Developed and Integrated Java modules for the Automation360 cloud platform. Contributed to the migration of 20 on-premises bots to the cloud. Created a custom bot for Heriot-Watt University’s student portal, automating exam result notifications and re-sit guidance. Collaborated with the QA Team to implement testing methods.`,
    technologies: ["Java", "Automation", "RPA", "Quality Assurance"],
  },
];

export const PROJECTS = [
  {
    title: "Conversational Agent Project",
    subtitle: "Impact of Narratives on HRI",
    description: "Led a team of eight in a study focused on the use of narratives in human-robot interactions to assist with instructions. We used a Furhat robot with GPT-3.5, seeing how narratives affected the accuracy, utility, and recall of instructions, as well as their impact on follow-up questions, the robot's anthropomorphism and likeability. This paper was published to HAI 24'.",
    technologies: ["Python", "Kotlin", "Prompt Engineering", "NLP", "NLG"],
    githubUrl: "https://github.com/omarriyaz/FurGuide-Navigation-Assistant",
    youtubeLink: "https://www.youtube.com/watch?v=13Q6qLhceL8",
    pdfName: CA,
    websiteLink: "https://dl.acm.org/doi/abs/10.1145/3687272.3690900",
  },

  {
    title: "Computer Vision Project",
    subtitle: "Age and Gender Classification",
    description: "Built a CNN from scratch using Tensorflow, for age and gender classification using the UTKFace Dataset, and later applied transfer learning with VGG16. The final model achieved over 90% accuracy and 6.5 MAE, which was top 3 in our class.",
    technologies: ["Python", "TensorFlow", "Keras", "VGG16", "Computer Vision"],
    githubUrl: "https://github.com/omarriyaz/age-gender-cnn-transferlearning",
    pdfName: ML,
  },

  {
  title: "Bayesian Machine Learning",
  subtitle: "Bayesian Inference and Gaussian Processes",
  description: "Developed Bayesian models to predict the degradation of mechanical components over time using limited data. I implemented a hierarchical model in NumPyro with HMC sampling, followed by an enhanced model that used diagnostic features. I also compared performance against a traditional black box regression model, showing the Bayesian approach’s advantages in uncertainty quantification and sparse data scenarios.",
  technologies: ["Uncertainty", "Bayesian Machine Learning", "Python", "NumPyro"],
  githubUrl: "https://github.com/omarriyaz/bayesian-modelling",
  pdfName: BML,
  },

  {
  title: "Reinforcement Learning Project",
  subtitle: "Comparison of RL Algorithms",
  description: "A comparison of four reinforcement learning algorithms: TD3, SAC, PPO, and DDPG, using the BipedalWalker-v3 environment from OpenAI Gym. The goal was to evaluate their performance in terms of stability, sample efficiency, and final reward. We used PyTorch for the implementation, running experiments with consistent hyperparameters and random seeds to ensure fair benchmarking.",
  technologies: ["Python", "PyTorch", "Gym", "RL", "TD3", "SAC", "PPO", "DDPG"],
  githubUrl: "https://github.com/omarriyaz/reinforcement-learning-project",
  pdfName: RL,
  },

  {
    title: "Undergrad Dissertation",
    subtitle: "Teaching Assistant Chatbot using NLP and ML",
    description: "I developed a Teaching Assistant Chatbot that used ML and NLP. I used PyPDF2 for extracting text from lecture slides, LangChain for preprocessing and conversational retrieval, and OpenAI's GPT-3.5 Turbo Chat Model for generating responses. The chatbot allowed students to interact with lecture materials through natural language queries. My final dissertation received an A grade, showing the chatbot's effectiveness in improving query resolution and reducing the workload for professors.",
    technologies: ["Python", "NLP", "ML", "Streamlit", "PyPDF2", "LangChain",],
    githubUrl: "https://github.com/omarriyaz/Teaching_Assistant_Chatbot",
    pdfName: Diss,
  },

  {
  title: "Racetrack Reinforcement Learning",
  subtitle: "Dyna Q+ Reinforcement Learning",
  description: "Implemented a Dyna Q+ learning agent to navigate a racetrack grid environment. The coursework demonstrated core RL concepts like Bellman equations, exploration-exploitation trade-offs, and convergence analysis.",
  technologies: ["Python", "NumPy", "Reinforcement Learning", "Q-Learning", "Gridworld"],
  githubUrl: "https://github.com/omarriyaz/racetrack-rl-coursework",
  },
  
  {
    title: "Machine Learning Project",
    subtitle: "Song popularity predictor using Spotify Data",
    description: "In this collaborative project, we developed a predictive model to forecast song popularity using Spotify data, focusing on predicting a song's popularity based on its attributes. Our process involved cleaning and exploring the dataset with the Pandas library, creating a Python script for efficient data handling, and using K-Nearest Neighbors, Decision Trees, and Neural Networks for predictive modeling.",
    technologies: ["Python", "Scikit-Learn", "TensorFlow", "Keras", "PyTorch"],
    githubUrl: "https://github.com/dmml-heriot-watt/group-coursework-sos?tab=readme-ov-file",
  },

  {
    title: "AI Career Advice Web App",
    subtitle: "AI-powered project idea generator for students",
    description: "AI Project Idea Generator is a Streamlit application that helps users generate project ideas, which they can add into their cv, to help break into into various career fields. By using YouTube videos related to specified role or field, the app extracts useful information and generates projects ideas to help users start in their chosen fields.",
    technologies: ["Python", "Youtube API", "LLM", "AI", "Llama3.1"],
    githubUrl: "https://github.com/omarriyaz/ai-project-ideas/tree/main",
  },

  {
    title: "Deep Learning Classifier",
    subtitle: "Breast Cancer Classification",
    description: "Built a deep learning classifier to diagnose breast cancer using the Wisconsin dataset, performing exploratory data analysis and applying a neural network model with regularization and dropout techniques. Achieved approximately 97% accuracy.",
    technologies: ["Python", "Pandas", "Tensorflow", "Deep Learning"],
    githubUrl: "https://github.com/omarriyaz/breast_cancer_diagnosis",
  },

  {
    title: "Deep Learning Classifier",
    subtitle: "Skin Classification",
    description: "Built a deep learning pipeline to classify skin lesions as benign or malignant using dermoscopic images. Used transfer learning, feature selection, and SVMs to achieve high accuracy across multiple datasets.",
    technologies: ["Python", "TensorFlow", "Keras", "Transfer Learning", "SVM"],
    githubUrl: "https://github.com/omarriyaz/skin_classifying",

  },
  
  {
    title: "NHS Cancer Wait Times Analysis",
    subtitle: "EDA on NHS Cancer Wait Times Data",
    description: "Analyzed the Cancer Waiting Times dataset from the Public Health Scotland Open Data platform to assess compliance with 62-day and 31-day cancer treatment standards. Focused on identifying regional variations in waiting times, trends over time, and disparities across specific cancer types. Conducted an analysis that revealed significant differences in waiting times between NHS boards and council areas, identified common delays in the cancer treatment pathway, and highlighted areas needing improvement.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Analysis"],
    githubUrl: "https://github.com/omarriyaz/NHS_cancer_wait_times_analysis",
  },

  {
    title: "Beat Catalog Automation Script",
    subtitle: "Using Python for Audio Organization",
    description: "I created a Python script to automate the organization and labeling of my extensive beat catalog, which includes over 2,000 beats I produced in FL Studio. The script uses tools like librosa, numpy, and pydub to convert MP3 files to WAV, remove the initial 25 milliseconds of silence added by FL Studio, and calculate the BPM and musical key of each beat. The script achieves up to 70% accuracy in processing and organizing beats, making it an great tool for quickly sharing beats with artists.",
    technologies: ["Python", "Librosa", "NumPy", "Pydub", "FL Studio"],
    githubUrl: "https://github.com/omarriyaz/organize-my-beats",
  },

  {
    title: "Data Analytics Project",
    subtitle: "Tesco Grocery vs Educational Attainment",
    description: "Analysed Tesco grocery data to identify purchasing patterns and their relation to education levels. Added external educational data, created visualisations to extract insights, and summarised findings through a presentation and infographic targeted at a general audience.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Analysis"],
    githubUrl: "https://github.com/omarriyaz/Tesco_Grocery_and_Educational_Attainment",
    websiteLink: "https://www.canva.com/design/DAGgT8k5pB8/trdXWdav1UpPVjEnTYFZ8g/view?utm_content=DAGgT8k5pB8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8ddb2553b9"
  },

  {
    title: "Software Development Project",
    subtitle: "Traffic Monitoring System",
    description: "Created a traffic monitoring server with a JSON-based API for managing vehicle entries across locations. Implemented full user authentication, session management, and support for adding, undoing, and summarising traffic data. Built functionality to generate downloadable CSV reports, aggregating daily vehicle counts by type and location. Ensured data integrity through a well-structured SQLite schema and maintained compatibility with a provided front-end and regression test suite.",
    technologies: ["Python", "SQL", "Database Management", "Regression Tests", "JavaScript"],
    githubUrl: "https://github.com/omarriyaz/traffic_data_capture_app",
  },

  {
    title: "Android App Development Project",
    subtitle: "AR Scrapbooking App",
    description: "I led a team of eight members in a year-long project to develop an AR Scrapbooking App called Contra. This platform combined social media and scrapbooking, allowing users to create and share AR-enhanced scrapbooks. Built using React Native and ViroReact, the app enabled users to post and interact with AR content.",
    technologies: ["React Native", "Viro", "HTML/CSS", "JS", "AR"],
    githubUrl: "https://github.com/omarriyaz/Contra-AR-Android-App",
  },


  {
    title: "Data Visualization Project",
    subtitle: "COVID-19 Vaccination Effects visualized",
    description: "I worked on a Data Visualization project using a COVID-19 dataset. After cleaning and exploring the data with Pandas and NumPy, I created an interactive dashboard using HTML, CSS, JavaScript, and the D3 library. The dashboard featured line charts, a choropleth, bar charts, bubble charts, and donut charts, all enhanced with tooltips, transitions, and animations. The visualizations highlighted the global impact of COVID-19 vaccination on deaths and cases.",
    technologies: ["HTML/CSS", "JavaScript", "D3", "Pandas", "NumPy", "Data Visualization"],
    githubUrl: "https://github.com/omarriyaz/COVID19-Data-Visualization",
  },


  {
    title: "Robotics Project",
    subtitle: "Mars Rover Exploration using BBR and ER in Webots",
    description: "The project involved using Behavior Based Robotics and Evolutionary Robotics, with controllers coded in Python for a Mars rover replica in Webots. The controllers successfully navigated predetermined paths and reward zones, while the ER approach encountered challenges, prompting further exploration of potential improvements.",
    technologies: ["Python", "Webots", "Robotics", "BBR", "ER"],
    pdfName: RO,
  },

  {
    title: "Sales Prediction Using ML",
    subtitle: "BigMart Dataset Sales Prediction",
    description: "Developed a ML model to predict product sales across multiple stores, aiming to identify the key factors driving higher sales. I cleaned and processed a dataset with over 8,500 entries, handled missing values, and performed feature engineering to improve model accuracy. I tested various models, including Random Forest Regressor and XGBoost, using cross-validation for reliability. By refining the model through feature importance analysis, I achieved a prediction accuracy with an R² score of 0.595 and a mean absolute error of 713.56.",
    technologies: ["XGBoost", "Random Forest", "Python", "Pandas", "Scikit-Learn"],
    githubUrl: "https://github.com/omarriyaz/Big-Mart-Sales-Prediction",
  },

  {
    title: "3D Graphics Project",
    subtitle: "3D Graphics Engine using OpenGL and C++",
    description: "In our F20GA 3D graphics project, I focused on creating a detailed pirate key rendering using Blender and integrated it with my teammates' work to construct an immersive pirate ship scene. Using Unreal Engine, I animated the treasure chest. Using C++ and OpenGL, I added interactive elements, enabling users to engage with the environment.",
    technologies: ["C++", "OpenGL", "Blender", "Unreal Engine", "3D Graphics"],
    githubUrl: "https://github.com/omarriyaz/3D-Graphics-Project",
  },

  {
    title: "Porfolio Website Project",
    subtitle: "Portfolio Website using React and Tailwind CSS",
    description: "Designed and developed my personal portfolio website using React and Tailwind CSS. The site highlights my projects, experiences, and contact information in a clean and user-friendly layout. This project allowed me to showcase my web development skills and creativity while providing a platform to display my work and connect with potential employers.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "HTML/CSS", "Web Development"],
    githubUrl: "https://github.com/omarriyaz/Portfolio-Website",
  },

  {
  title: "Encore Marketers Website",
  subtitle: "Company Website with React and Tailwind CSS",
  description: "I developed a website for Encore Marketers, a digital marketing agency. Built using React and Tailwind CSS, the site showcases the agency's services, portfolio, and contact options. I integrated Supabase to manage the backend database for handling inquiries. Additionally, I used EmailJS to enable real-time contact form submissions, allowing users to send messages directly to the agency's email.",
  technologies: ["React", "Tailwind CSS", "JavaScript", "Supabase", "EmailJS", "Web Development"],
  githubUrl: "https://github.com/omarriyaz/encoremarkets-website",
  websiteLink: "https://encoremarketers.vercel.app/",
}
];

export const CONTACT = {
  address: "London, United Kingdom",
  email: "omarriyazbusiness@gmail.com",
};
