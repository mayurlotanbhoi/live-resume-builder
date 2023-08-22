const InitialState = {
  ProsnalDetail: {
    Name: "Name Middel Last",
    Contact: 917709433561,
    Email: "xxyyzz@gamil.com",
    Linkedin: "https://Linkedin.com",
    Github: "https://github.com",
    LeedCode: "https://leedcode.com",
  },
  EducatinalDetail: [
    {
      Year: 1980,
      Degree_Examination: "Bachelor of Engineering",
      Institution_Board:
        "Shri.Jaykumar Rawal Institute of Technology, Dondaicha",
      CGPA_Percentage: "74%",
    },
    {
      Year: 1980,
      Degree_Examination: "Bachelor of Engineering",
      Institution_Board:
        "Shri.Jaykumar Rawal Institute of Technology, Dondaicha",
      CGPA_Percentage: "74%",
    },
    {
      Year: 1980,
      Degree_Examination: "Bachelor of Engineering",
      Institution_Board:
        "Shri.Jaykumar Rawal Institute of Technology, Dondaicha",
      CGPA_Percentage: "74%",
    },
  ],
  ExperianceDetail: [
    {
      Designation: "TREANEE",
      Company_Name: "Newton Scholl",
      Start_Date: "01/12/2022",
      end_Date: "01/12/2022",
      Experiance_Type: "Internship and Certifications",

      Skill_1: "Full Stack Web Development and Problem Solving",
      Skill_2: "Technical Stack Learnt: HTML, CSS, JavaScript, React ,",
      Skill_3:
        "Participated in various coding competitions held by Newton School ,",
      Skill_4: "Worked on various projects",
    },
  ],
  ProjectDetail: [
    {
      Project_name: "TREANEE",
      Project_Domain: "Newton Scholl",
      Start_Date: "01/12/2022",
      end_Date: "01/12/2022",
      gitHub: "http//githum",
      hosted_link: "https//",
      feature_1: "Full Stack with Crud operation's application",
      feature_2: "Add, Read, Edit, and Delete functionality  ,",
      feature_3: "Jsonwebtokent Authentication,",
      feature_4: "eye-catching Ui, with dynamic images",
      Tech_Stack: "react node mtml css",
      project_Description:
        " By having auto care  app people  can book an appointment  with the auto mechanics so that people can get service at there doorstep, it will also help the mechanic to get more and more orders,",
    },
  ],
  SkillDetail: {
    Computer_languages: "Java, CSS, HTML, Javascript",
    Software_Packages: "Express JS, React, NodeJS",
    Additional_Courses_Taken: "Data Structure",
    Soft_Skills:
      "Communication Skills, Leadership, Time management, Creativity",
  },

  Co_crriculamDetail: [
    "Full Stack with Crud operation's application",
    "Add, Read, Edit, and Delete functionality",
    "Jsonwebtokent Authentication",
    "eye-catching Ui, with dynamic images",
  ],
};

const Reducer = (state = InitialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "ProsnalDetail":
      return { ...state, ProsnalDetail: action.payload };
    case "EducatinalDetail":
      return { ...state, EducatinalDetail: action.payload };
    case "ProjectDetail":
      return { ...state, ProjectDetail: action.payload };
    case "SkillDetail":
      return { ...state, SkillDetail: action.payload };
    case "CurriculamDetail":
      return { ...state, CurriculamDetail: action.payload };
    case "ExperianceDetail":
      return { ...state, ExperianceDetail: action.payload };
    default:
      return state;
  }
};

export default Reducer;
