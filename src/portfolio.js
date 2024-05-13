/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Prajwal Mahaveera",
  title: "Hey, I'm Prajwal",
  subTitle: emoji(
    "A Computer Science Graduate Student at Arizona State University passionate about Software Development with experience in building applications with Javascript / AWS and proficient in Java."
  ),
  //resumeLink:
  //  "https://docs.google.com/document/d/1N184u4PVUUqLkwr25gfvLEzcEUO-01iR/edit?usp=sharing&ouid=102853679855982342543&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  gmail: "pmahavee@asu.edu",
  github: "https://github.com/PrajwalMahaveera",
  linkedin: "https://www.linkedin.com/in/prajwal-mahaveera",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "More about me", 
  subTitle: "A Full Stack Developer with goal-driven creative mindset and passion to learn and innovate.",
  skills: [
    emoji(
      "⚡ Currently pursuing Master's in Computer Science at Arizona State University with an year of experience as an Application Development Associate at Accenture and Software Development Intern at Surya Software Pvt Ltd."
    ),
    emoji("⚡ Currently looking for SDE Roles")
    // emoji(
    //   "⚡ Building custom Docker images and dockerfiles"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "express",
      fontAwesomeClassname: "fab fa-express"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Arizona State University",
      logo: require("./assets/images/asulogo.webp"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2022 - May 2024",
      desc: "",
      descBullets: [
        "CSE 460: Software Analysis and Development, CSE 463: Intro to Human-Computer Interaction, CSE 512: Distributed Database Systems",
        "CSE 545: Software Security, CSE 535: Mobile Computing, CSE 539: Applied Cryptography",
        "CSE 551: Foundations of Algorithms, CSE 573: Semantic Web Mining, CSE 575: Statistical Machine Learning"
      ]
    },
    {
      schoolName: "RNS Institute of Technology",
      logo: require("./assets/images/RNSITimage.png"),
      subHeader: "Bachelor of Technology in Electronics & Communication Engineering",
      duration: "August 2017 - August 2021",
      desc: "",
      descBullets: [
        " Object-Oriented Programming, Data Structures and Algorithms, Operating System",
        " Database Systems, Machine Learning, Software Engineering"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend/Cloud/Python/Docker", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SQLs/Databases/Flink",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend/Networks/R",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    // {
    //   role: "Software Consultant Intern",
    //   company: "Local Grown Salads",
    //   companylogo: require("./assets/images/LGS5.png"),
    //   date: "May 2023 – Present",
    //   desc: "",
    //   descBullets: [
    //     "Wrote SQL queries to manage table deletions and modifications within AWS RDS. Collaborated on testing AWS Lambda functions using Postman, leading to a noteworthy enhancement of results by 20%.",
    //     "Collaborated with cross-functional teams to build Dataflow diagrams, designed and executed a team roadmap, leading a group of four to achieve successful results."
    //   ]
    // },
    {
      role: "Software Consultant Intern",
      company: "Local Grown Salads",
      companylogo: require("./assets/images/LGS5.png"),
      date: "May 2023 – August 2023",
      desc: "",
      descBullets: [
        "Built several critical APIs for the dashboard ensuring the robustness of services.Developed reports using CRON jobs, contributing to data accuracy & efficient reporting.",
        "Led cross-functional teams, creating Dataflow diagrams and executing successful team roadmaps."
      ]
    },
    // {
    //   role: "Application Development Associate",
    //   company: "Accenture",
    //   companylogo: require("./assets/images/accenture.png"),
    //   date: "Aug 2021 – May 2022",
    //   desc: "",
    //   descBullets: ["Collaborated with Agilent and internal teams to troubleshoot software issues, significantly improving file upload speeds by up to 30%.",
    //     "Served as primary client liaison for the Openlab application, taking ownership of the application and proactively identifying and debugging core issues to ensure optimal performance and customer satisfaction.",
    //     "Supported life science applications like Openlab and Empower, clearing approximately 90 software issues and incidents weekly. Leveraged project management software JIRA to track the project's progress and Git for version control to complete it two weeks before the expected duration."
    //   ]
    // },
    {
      role: "Application Development Associate",
      company: "Accenture",
      companylogo: require("./assets/images/accenture.png"),
      date: "Aug 2021 – May 2022",
      desc: "",
      descBullets: [
        "Resolved software functionality issues, resulting in a 35% improvement in file upload speeds in the application.",
        "Addressed high-priority customer software issues and served as the point of contact for Openlab application, ensuring effective communication and client satisfaction."
      ]
    },
    // {
    //   role: "Software Development Intern",
    //   company: "Surya Software Pvt Ltd",
    //   companylogo: require("./assets/images/SuryaSoft2.png"),
    //   date: "July 2021 – July 2022",
    //   desc: "",
    //   descBullets: [
    //     "Designed and developed responsive web pages utilizing React.Js library, ChartJs, and FluentUI framework, achieving highly visual and interactive user interfaces that effectively convey complex data and information.",
    //     "Programmed a dashboard that handles POST requests, handling user concurrency up to 10. Collaborated with a team of five to enhance existing code, integrating new features such as the date and currency selection to boost user engagement and interactivity. Worked closely with team members to identify and resolve bugs and ensure smooth project delivery.",
    //   ]
    // },
    {
      role: "Software Development Intern",
      company: "Surya Software Pvt Ltd",
      companylogo: require("./assets/images/SuryaSoft2.png"),
      date: "March 2021 – May 2022",
      desc: "",
      descBullets: [
        "Developed visually rich and interactive web pages using React.JS, ChartJS, and FluentUI, effectively communicating complex data.",
        "Revamped existing codebase using GraphQL with FluentUI components, elevating user engagement and overall interactivity by 28%.",
      ]
    },
    {
      role: "GSA: Graduate Student Assistant",
      company: "Grader",
      companylogo: require("./assets/images/ASU.png"),
      date: "August 2023 – Present",
      desc: "",
      descBullets: [
        "CSE 470: Introduction to Computer Graphics: Managed a class of 125 students, grading and debugging JavaScript programs to provide comprehensive feedback to students.  ",
        "CSE 477: Intro to Geomteric CAD:  Managed a class of 60 students, assessed assignments, exams, and projects for using Wolfram Mathematica. "
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Here are some of my most favorite projects in no particular order",
  projects: [
    {
      image: require("./assets/images/DDS.png"),
      projectName: "MobileChain Pro: Mobile Phone Supply Management",
      projectDesc: "Implementated a supply chain tracking and management system using CockroachDB for SQL, MongoDB for NoSQL, and Docker for increased scalability, improve data retrieval, and reduced failure.",
      footerLink: [
        // {
        //   name: "Visit repo",
        //   url: "https://github.com/Surya-Narayan/546-lambda"
        // }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nft.png"),
      projectName: "NFT Marketplace",
      projectDesc: "Developed an NFT memberships marketplace that lets the users buy/sell NFTs and maintained code repositories using Git that also prioritizes Web Accessibility (A11Y) concerns in the UI/UX design.",
      footerLink: [
        // {
        //   name: "Visit repo",
        //   url: "https://github.com/Surya-Narayan/Pacman"
        // }
      ]
    },
    {
      image: require("./assets/images/FacialRecognition.png"),
      projectName: "Cloud-Optimized Facial Recognition Solution",
      projectDesc: "An end-to-end facial recognition system using AWS Amplify, seamlessly integrating AWS Lambda functions, DynamoDB for data storage, and AWS Rekognition for image analysis ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://awsfacerecognition.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/Journal.png"),
      projectName: "Android Journaling Application",
      projectDesc: "An Android application on Android Studio using the MVC (Model-View-Controller) structure to add/modify, store, and share journals. Added the user authentication method using Google account.",
      footerLink: [
        // {
        //   name: "Visit repo",
        //   url: "https://github.com/Surya-Narayan/Cloud-Computing/tree/master/CC_0094_0155_0260_1509_Final_Project"
        // }
      ]
    },
    {
      image: require("./assets/images/HCI.png"),
      projectName: "Enhancing PennyJuice for Modern Appeal",
      projectDesc: "Redesigned the PennyJuice website, addressing flaws by incorporating key HCI laws. Analyzed user data, achieving an increase in task satisfaction of average SUS score from 34.17 to 84.5.",
      footerLink: [
        {
          name: "View redesign",
          url: "https://un26ff.axshare.com/#id=p5vr8a&p=homepage"
        }
      ]
    },
    {
      image: require("./assets/images/FakeReview.png"),
      projectName: "Fake Reviews Detection",
      projectDesc: "Applied ML models to differentiate fake vs authentic reviews, emphasizing date variance and activity time. Compared model performances, suggested leveraging review content and sentiment analysis.",
      footerLink: [
        // {
        //   name: "View redesign",
        //   url: "https://un26ff.axshare.com/#id=p5vr8a&p=homepage"
        // }
      ]
    },
    {
      image: require("./assets/images/AWSnotes.png"),
      projectName: "Serverless Notebook API",
      projectDesc: "Developed RESTful APIs using Node.js, AWS Lambda, DynamoDB, and API Gateway through AWS CodePipeline for automated CI/CD processes deploying Lambda functions and DynamoDB tables via Infrastructure as Code (IaC) using Serverless Framework.",
      footerLink: [
        // {
        //   name: "View redesign",
        //   url: "https://un26ff.axshare.com/#id=p5vr8a&p=homepage"
        // }
      ]
    },
    {
      image: require("./assets/images/HeartRate.png"),
      projectName: "HealthVitals Pro",
      projectDesc: "Developed an Android Context Monitoring App, integrating smartphone sensors and camera tech for heart rate and respiratory monitoring. Enabled secure data storage with SQLite for vital sign records.",
      footerLink: [
        // {
        //   name: "View redesign",
        //   url: "https://un26ff.axshare.com/#id=p5vr8a&p=homepage"
        // }
      ]
    },
    {
      image: require("./assets/images/AndroidStudio.png"),
      projectName: "HealthGuardian: Vital Mindful Companion",
      projectDesc: "Android application with real-time weather updates, personalized health recommendations personalized mindfulness suggestions aligned with daily routines.",
      footerLink: [
        // {
        //   name: "Visit repo",
        //   url: "https://github.com/Surya-Narayan/546-lambda"
        // }
        //  you can add extra buttons here.
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Participations and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Cloud Practitioner Certificate",
      subtitle:
        "Successfully completed the AWS Cloud Practitioner Certification.",
      image: require("./assets/images/AWS_Certificate.png"),
      imageAlt: "AWS Cloud Practitioner",
      footerLink: [{name: "Certification", url: "https://www.credly.com/badges/de88f9db-55e3-4185-8663-03687ae1feb9/linked_in_profile"}],
    },
    {
      title: "Arranged and managed Open House Expo",
      subtitle:
        "Successfully organized and oversaw an Open House Project Expo, demonstrating my strong event management skills and ability to coordinate a large-scale event.",
      image: require("./assets/images/RNSITimage.png"),
      imageAlt: "Open House Expo RNSIT",
      footerLink: [
      ]
    },
    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// mimick achievemnt section again 
// extra-curricular section
const extracurricular = {
  title: emoji("Extra Curricular "),
  subtitle:
    "Clubs, Volunteering and things outside tech",
  achievementsCards: [
    {
      title: "Volunteer for Aikya",
      subtitle:
        "Served food and taught government primary school kids under Akshaya Patra Foundation",
      image: require("./assets/images/aikya-logo-1.png"),
      imageAlt: "Akshaya Patra Foundation logo",
      footerLink: [ {
        name: "NGO Website",
        url: "https://www.linkedin.com/company/the-akshaya-patra-foundation/"
      }
      ]
    },

    {
      title: "PES DebSoc Member",
      subtitle:
        "Member of PES University Debate Society",
      image: require("./assets/images/pes-debsoc-logo.jpeg"),
      imageAlt: "PES Debsoc Logo",
      footerLink: [ {
        name: "About DebSoc",
        url: "https://clubs.pes.edu/debate-society"
      }
      ]
    },

    {
      title: "Aatmatrisha-19 Fest Organizer",
      subtitle:
        "Organizer for Aatmatrisha fest, the annual techno-cultural fest of PES University.",
      image: require("./assets/images/pes-debsoc-logo.jpeg"),
      imageAlt: "PES Debsoc Logo",
      footerLink: [ {
        name: "About fest",
        url: "https://clubs.pes.edu/aatmatrisha"
      }
      ]
    },

  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Papers",
  subtitle:
    "Here are some reseach papers I presented",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      //url: "https://ieeexplore.ieee.org/document/9913572",
      title: "Performance Analysis of GPSR Protocols",
      description:
        "National conference on “Emerging Trends in Engineering, Science and Technology (NCETEST-4)-  Jul 2, 2021"
    },
    {
      url: "https://www.ijitee.org/wp-content/uploads/papers/v9i2S/B12251292S19.pdf",
      title: "PATIENT MONITORING SYSTEM",
      description:
        "The International Journal of Innovative Technology and Exploring Engineering (IJITEE) - Dec 10, 2019"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
  //  "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (602) 815-0973",
  email_address: "pmahavee@asu.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  extracurricular,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
