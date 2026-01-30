export interface Candidate {
  id: string;
  name: string;
  recommendation: string;
  overallScore: number;
  codingScore: number;
  dsaScore: number;
  resumeUrl: string;
  topinReportUrl: string;
  tr1: {
    type: "dsa" | "technical";
    title: string;
    subtitle: string;
    interviewer: string;
    duration: string;
    focusAreas: string[];
    questions: string[];
    insights: {
      title: string;
      description: string;
    }[];
    recordingTitle: string;
    recordingSubtitle: string;
    recordingUrl: string;
  };
  tr2: {
    type: "dsa" | "technical";
    title: string;
    subtitle: string;
    interviewer: string;
    duration: string;
    focusAreas: string[];
    questions: string[];
    insights: {
      title: string;
      description: string;
    }[];
    recordingTitle: string;
    recordingSubtitle: string;
    recordingUrl: string;
  };
  strengths: string[];
  improvements: string[];
  interviewerInsights: {
    hiringSignal: string;
    confidenceLevel: string;
    industryReadiness: string;
    summary: string;
  };
}

export const candidates: Candidate[] = [
  {
    id: "harsh-mishra",
    name: "Harsh Mishra",
    recommendation: "Strong Hire",
    overallScore: 146.96,
    codingScore: 118.96,
    dsaScore: 5,
    resumeUrl: "https://nw-forms-backend-media-static.s3.ap-south-1.amazonaws.com/ccbp_prod/media/upload/resume/1763365853009_HarshMishra_22bec048_7e6a3eb7-d781-42d3-82a1-7657d7e96350.pdf",
    topinReportUrl: "https://config.topin.tech/candidate-statistics/f6abffac-0fcb-48ac-9db0-847e5fbaaac9/dfd8532d-7f58-458c-af4b-c27e5affacf0",
    tr1: {
      type: "dsa",
      title: "TR1 – DSA Interview",
      subtitle: "45–90 Minutes | Approach clarity, live coding, edge-case handling",
      interviewer: "Mostafijur Rahaman",
      duration: "1 Hour 11 Minutes",
      focusAreas: [
        "Problem-Solving",
        "Live Coding",
        "Edge Cases",
        "DSA",
        "Communication",
      ],
      questions: [
        "Minimum Number of Operations to Move All Balls to Each Box",
        "Maximum Subarray Sum With One Deletion",
      ],
      insights: [
        {
          title: "Problem-Solving Approach",
          description: "Demonstrated structured thinking, breaking down complex problems into manageable sub-problems before coding.",
        },
        {
          title: "Edge-Case Handling",
          description: "Proactively identified edge cases and boundary conditions, showing defensive programming awareness.",
        },
        {
          title: "Communication Clarity",
          description: "Articulated thought process clearly while coding, making it easy to follow the solution development.",
        },
      ],
      recordingTitle: "NxtWave Employability – DSA Interview",
      recordingSubtitle: "Ashish Tandi – 2025/12/23 09:43 GMT+05:30",
      recordingUrl: "https://drive.google.com/file/d/1kMFbZo1RbYWDRFKxXzZPCXsqmvpk1Fc1/view?usp=sharing",
    },
    tr2: {
      type: "technical",
      title: "TR2 – Technical & System Interview",
      subtitle: "45–90 Minutes | Code ownership, project depth, system thinking",
      interviewer: "Abhishek Sharma",
      duration: "45 Minutes",
      focusAreas: [
        "DSA",
        "Git",
        "HTML/CSS",
        "React",
        "Backend",
        "Database",
      ],
      questions: [
        "What data structure is used internally in a hashmap?",
        "How does JavaScript handle async operations though it is single-threaded?",
        "How do you push a new feature to an existing repository?",
        "Why do we create indexes in databases?",
        "Find the k-th smallest element in an array.",
      ],
      insights: [
        {
          title: "Full-Stack Understanding",
          description: "Shows comprehensive knowledge across the stack, from frontend frameworks to database optimization.",
        },
        {
          title: "Real-World Scenario Handling",
          description: "Applied theoretical concepts to practical scenarios effectively, demonstrating industry readiness.",
        },
        {
          title: "System Thinking",
          description: "Understood how different components interact in a system architecture context.",
        },
      ],
      recordingTitle: "NxtWave Employability – Interview Round 2",
      recordingSubtitle: "Harsh Mishra – 2025/12/28 11:42 GMT+05:30",
      recordingUrl: "https://drive.google.com/file/d/12yMyWFxKPLsFDCNRRv_Cu2AyU0eltkCD/view?usp=sharing",
    },
    strengths: [
      "Excellent coding proficiency with strong fundamentals in multiple programming paradigms",
      "Clear and articulate communication during technical discussions",
      "Strong understanding of full-stack development concepts and best practices",
      "Proactive in identifying edge cases and writing defensive code",
      "Good grasp of database concepts including indexing and query optimization",
    ],
    improvements: [
      "Deepen expertise in advanced data structures and algorithms for complex problem-solving",
      "Practice more competitive programming to improve DSA scores",
      "Explore system design concepts for scalability and architecture understanding",
      "Build more end-to-end projects to strengthen practical implementation experience",
    ],
    interviewerInsights: {
      hiringSignal: "Strong Hire",
      confidenceLevel: "High (92%)",
      industryReadiness: "Production Ready",
      summary: "Harsh Mishra demonstrates exceptional coding abilities and a solid understanding of full-stack development. His communication skills during technical discussions were clear and professional. While there's room for growth in advanced algorithmic thinking, his current skill set and learning trajectory make him an excellent candidate for mid-level engineering roles. Both interviewers expressed high confidence in his ability to contribute meaningfully to a development team from day one.",
    },
  },
  {
    id: "siva-surya-teja-meka",
    name: "Siva Surya Teja Meka",
    recommendation: "Strong Hire",
    overallScore: 120.13,
    codingScore: 92.13,
    dsaScore: 8,
    resumeUrl: "https://nw-forms-backend-media-static.s3.ap-south-1.amazonaws.com/ccbp_prod/media/upload/resume/1764159677183_Full-Stack%20Resume_1be5151c-78eb-4731-951a-d934ced0b76b.pdf",
    topinReportUrl: "https://config.topin.tech/candidate-statistics/440f624f-e7c2-4c45-b0e4-1f4c56487eda/4a0fceae-2ecd-44eb-9bd6-fd587be89684",
    tr1: {
      type: "dsa",
      title: "TR1 – DSA Interview",
      subtitle: "45–90 Minutes | Approach clarity, live coding, edge-case handling",
      interviewer: "Asish Kumar Upadhyay",
      duration: "46 Minutes",
      focusAreas: [
        "Problem-Solving",
        "Live Coding",
        "Edge Cases",
        "DSA",
        "Communication",
      ],
      questions: [
        "Vowels of All Substrings",
        "Removing Stars from a String",
      ],
      insights: [
        {
          title: "Problem-Solving Approach",
          description: "Demonstrated structured thinking and logical problem-solving skills.",
        },
        {
          title: "Code Implementation",
          description: "Showed ability to translate algorithmic thinking into working code.",
        },
        {
          title: "Communication",
          description: "Articulated thought process clearly during the interview.",
        },
      ],
      recordingTitle: "NxtWave Employability – DSA Interview",
      recordingSubtitle: "Siva Surya Teja Meka – TR1",
      recordingUrl: "https://drive.google.com/file/d/1rAwvXBDjt9Bs62lDVPR39I9UmEAA0tRZ/view?usp=sharing",
    },
    tr2: {
      type: "technical",
      title: "TR2 – Technical & System Interview",
      subtitle: "45–90 Minutes | Code ownership, project depth, system thinking",
      interviewer: "Pavani",
      duration: "58 Minutes",
      focusAreas: [
        "DSA",
        "HTML/CSS",
        "React",
        "Backend",
        "Database",
        "DevOps",
        "CS Fundamentals",
      ],
      questions: [
        "Rotate an array by K steps. Explain the approach, handle edge cases, and analyze time complexity.",
        "Design RESTful APIs for a to-do application with user authentication so that users can access only their own tasks. Explain endpoints and HTTP methods.",
        "Explain controlled components in React. How do useState and useEffect work, and when would you prefer useReducer over useState?",
        "Explain the purpose of <!DOCTYPE html>, semantic HTML, and the CSS box model. How does flexbox help in building responsive layouts?",
        "Explain how you would deploy a full-stack MERN application on a virtual machine, including backend process management, reverse proxy, database choice, and common deployment challenges.",
      ],
      insights: [
        {
          title: "Full-Stack Understanding",
          description: "Shows comprehensive knowledge across the stack, with strong focus on frontend development.",
        },
        {
          title: "Practical Application",
          description: "Demonstrated ability to apply theoretical concepts to real-world scenarios.",
        },
        {
          title: "System Deployment",
          description: "Good understanding of deployment processes and DevOps concepts.",
        },
      ],
      recordingTitle: "NxtWave Employability – Interview Round 2",
      recordingSubtitle: "Siva Surya Teja Meka – TR2",
      recordingUrl: "https://drive.google.com/file/d/1mrWTCbGDS_Gqcm2lLoNO2KBAp3mAOb7d/view?usp=sharing",
    },
    strengths: [
      "Strong frontend development skills with React",
      "Good understanding of full-stack development concepts",
      "Practical knowledge of deployment and DevOps",
      "Clear communication during technical discussions",
    ],
    improvements: [
      "Strengthen DSA fundamentals and problem-solving depth",
      "Deepen backend architecture understanding",
      "Practice more complex algorithmic problems",
      "Enhance system design knowledge",
    ],
    interviewerInsights: {
      hiringSignal: "Strong Hire",
      confidenceLevel: "High",
      industryReadiness: "Production Ready",
      summary: "Siva Surya Teja Meka demonstrates strong frontend development skills and a solid understanding of full-stack concepts. His practical knowledge of deployment and DevOps is notable. While DSA fundamentals could be strengthened, his overall technical competency and communication skills make him a strong candidate for frontend-focused roles.",
    },
  },
  {
    id: "harshitpandey",
    name: "Harshit Pandey",
    recommendation: "Strong Hire",
    overallScore: 129.91,
    codingScore: 100.91,
    dsaScore: 6,
    resumeUrl: "https://nw-forms-backend-media-static.s3.ap-south-1.amazonaws.com/ccbp_prod/media/upload/resume/1764039923120_Harshit_Pandey_MNNIT_fce91779-708c-4c5c-b529-b02bf830f6e6.pdf",
    topinReportUrl: "https://config.topin.tech/candidate-statistics/0465f9d9-ed0f-402e-8d4f-d9d07688f124/653bf935-af9d-42b3-ba10-0c3bedb704b6",
    tr1: {
      type: "dsa",
      title: "TR1 – DSA Interview",
      subtitle: "45–90 Minutes | Approach clarity, live coding, edge-case handling",
      interviewer: "Praveena",
      duration: "1 Hour 11 Minutes",
      focusAreas: [
        "Problem-Solving",
        "Live Coding",
        "Edge Cases",
        "DSA",
        "Communication",
      ],
      questions: [
        "Take K of Each Character from Left and Right",
        "Ways to Split Array into Good Subarrays",
      ],
      insights: [
        {
          title: "Problem-Solving Approach",
          description: "Demonstrated structured thinking and logical problem-solving skills.",
        },
        {
          title: "Code Implementation",
          description: "Showed ability to translate algorithmic thinking into working code.",
        },
        {
          title: "Communication",
          description: "Articulated thought process clearly during the interview.",
        },
      ],
      recordingTitle: "NxtWave Employability – DSA Interview",
      recordingSubtitle: "Harshit Pandey – TR1",
      recordingUrl: "https://drive.google.com/file/d/16eAoSH1fCEzrT4aTmVP6xz8JaJAkd2XN/view?usp=sharing",
    },
    tr2: {
      type: "technical",
      title: "TR2 – Technical & System Interview",
      subtitle: "45–90 Minutes | Code ownership, project depth, system thinking",
      interviewer: "Archita Sundaray",
      duration: "1 Hour",
      focusAreas: [
        "DSA",
        "HTML/CSS",
        "React",
        "Backend",
        "Database",
        "CS Fundamentals",
      ],
      questions: [
        "Explain websockets and why you would choose them over polling or long polling.",
        "Solve the problem: product of array except self. Explain brute force, optimized approach, and edge cases.",
        "Explain semantic HTML and how it improves accessibility and SEO. What problems arise if everything is built using div and span?",
        "Design a paginated GET API for a large list of products. Explain query parameters and response structure.",
        "Can you implement a stack using only queues? Explain push and pop operations with time and space complexity.",
      ],
      insights: [
        {
          title: "Full-Stack Understanding",
          description: "Shows comprehensive knowledge across the stack, with strong focus on frontend and backend concepts.",
        },
        {
          title: "Real-World Scenario Handling",
          description: "Applied theoretical concepts to practical scenarios effectively, demonstrating industry readiness.",
        },
        {
          title: "System Thinking",
          description: "Understood how different components interact in a system architecture context.",
        },
      ],
      recordingTitle: "NxtWave Employability – Interview Round 2",
      recordingSubtitle: "Harshit Pandey – TR2",
      recordingUrl: "https://drive.google.com/file/d/1AXr2Kazne3xPfyL7C7XsOAfGeAz4qmum/view?usp=sharing",
    },
    strengths: [
      "Strong frontend development skills with React and JavaScript",
      "Excellent HTML & CSS knowledge with practical implementation",
      "Good understanding of backend architecture and API design",
      "Strong problem-solving and algorithmic thinking",
      "Clear communication during technical discussions",
    ],
    improvements: [
      "Strengthen DSA fundamentals for more complex problems",
      "Deepen system design knowledge",
      "Practice more competitive programming",
      "Enhance database optimization skills",
    ],
    interviewerInsights: {
      hiringSignal: "Strong Hire",
      confidenceLevel: "High",
      industryReadiness: "Production Ready",
      summary: "Harshit Pandey demonstrates exceptional frontend development skills with strong React and JavaScript knowledge. His understanding of backend architecture and API design is solid. While DSA fundamentals could be strengthened, his overall technical competency, problem-solving skills, and communication make him an excellent candidate for full-stack roles.",
    },
  },
  {
    id: "aditi-rauthan",
    name: "Aditi Rauthan",
    recommendation: "Strong Hire",
    overallScore: 167,
    codingScore: 120,
    dsaScore: 9,
    resumeUrl: "https://nw-forms-backend-media-static.s3.ap-south-1.amazonaws.com/ccbp_prod/media/upload/resume/1762536310850_OnCampus4thyrResume-1_aa56c765-a285-4bbb-b7ac-9d1bd718682f.pdf",
    topinReportUrl: "https://config.topin.tech/candidate-statistics/9ed71c30-dc7b-4d83-903e-6494a9c9fb1f/623f4691-502c-45df-93eb-31205be1c938",
    tr1: {
      type: "dsa",
      title: "TR1 – DSA Interview",
      subtitle: "45–90 Minutes | Approach clarity, live coding, edge-case handling",
      interviewer: "Megha Gupta",
      duration: "1 Hour 16 Minutes",
      focusAreas: [
        "Problem-Solving",
        "Live Coding",
        "Edge Cases",
        "DSA",
        "Communication",
      ],
      questions: [
        "Longest Subarray of 1s After Deleting One Element",
        "Count Prime Gap Balanced Subarrays",
      ],
      insights: [
        {
          title: "Problem-Solving Approach",
          description: "Demonstrated structured thinking and logical problem-solving skills.",
        },
        {
          title: "Code Implementation",
          description: "Showed ability to translate algorithmic thinking into working code.",
        },
        {
          title: "Communication",
          description: "Articulated thought process clearly during the interview.",
        },
      ],
      recordingTitle: "NxtWave Employability – DSA Interview",
      recordingSubtitle: "Aditi Rauthan – TR1",
      recordingUrl: "https://drive.google.com/file/d/1_pkH-bFYwLr0t2ZCTmIF_HjhqQsecx-J/view?usp=sharing",
    },
    tr2: {
      type: "technical",
      title: "TR2 – Technical & System Interview",
      subtitle: "45–90 Minutes | Code ownership, project depth, system thinking",
      interviewer: "Disha",
      duration: "1 Hour",
      focusAreas: [
        "DSA",
        "HTML/CSS",
        "React",
        "Backend",
        "Database",
        "CS Fundamentals",
      ],
      questions: [
        "Explain how you modeled data in MongoDB for users, vendors, and bookings in your project.",
        "What happens if a payment succeeds but booking fails, or vice versa? How would you handle this case?",
        "Solve the problem: find the longest contiguous subarray with equal number of 0s and 1s. Explain the optimized approach and time complexity.",
        "How would you optimize performance for a large list of items or vendors on the frontend?",
        "Explain the difference between abstract class and interface, and where middleware fits in an Express application.",
      ],
      insights: [
        {
          title: "Full-Stack Understanding",
          description: "Shows comprehensive knowledge across the stack, with strong focus on state management and performance optimization.",
        },
        {
          title: "Real-World Scenario Handling",
          description: "Applied theoretical concepts to practical scenarios effectively, demonstrating industry readiness.",
        },
        {
          title: "System Thinking",
          description: "Understood how different components interact in a system architecture context, including payment flows and error handling.",
        },
      ],
      recordingTitle: "NxtWave Employability – Interview Round 2",
      recordingSubtitle: "Aditi Rauthan – TR2",
      recordingUrl: "https://drive.google.com/file/d/1Sxxu-ZEVM_oR1mh5_Mj5WV3WeH_Y5xsu/view?usp=sharing",
    },
    strengths: [
      "Excellent frontend development skills with React and state management",
      "Strong understanding of performance optimization",
      "Good knowledge of backend architecture and payment flows",
      "Solid database modeling and schema design skills",
      "Clear communication during technical discussions",
    ],
    improvements: [
      "Strengthen DSA fundamentals for more complex problems",
      "Deepen system design knowledge",
      "Practice more competitive programming",
      "Enhance CS fundamentals knowledge",
    ],
    interviewerInsights: {
      hiringSignal: "Strong Hire",
      confidenceLevel: "High",
      industryReadiness: "Production Ready",
      summary: "Aditi Rauthan demonstrates exceptional frontend development skills with strong React knowledge and performance optimization expertise. Her understanding of backend architecture, payment flows, and database modeling is solid. While DSA fundamentals could be strengthened, her overall technical competency, problem-solving skills, and communication make her an excellent candidate for full-stack roles.",
    },
  },
  {
    id: "aman-mittal",
    name: "Aman Mittal",
    recommendation: "Strong Hire",
    overallScore: 166,
    codingScore: 120,
    dsaScore: 8,
    resumeUrl: "https://nw-forms-backend-media-static.s3.ap-south-1.amazonaws.com/ccbp_prod/media/upload/resume/1764085546719_aman_R_3f827f6d-4ef5-46bf-8bde-b56121da3248.pdf",
    topinReportUrl: "https://config.topin.tech/candidate-statistics/bd5fe243-7983-4222-a1c2-86ad66e9c3fc/72c6ca2f-6837-498f-9001-be96681ef0d3",
    tr1: {
      type: "dsa",
      title: "TR1 – DSA Interview",
      subtitle: "45–90 Minutes | Approach clarity, live coding, edge-case handling",
      interviewer: "Komal",
      duration: "1 Hour 21 Minutes",
      focusAreas: [
        "Problem-Solving",
        "Live Coding",
        "Edge Cases",
        "DSA",
        "Communication",
      ],
      questions: [
        "Partition Labels",
        "Frequency of the Most Frequent Element",
      ],
      insights: [
        {
          title: "Problem-Solving Approach",
          description: "Demonstrated structured thinking and logical problem-solving skills.",
        },
        {
          title: "Code Implementation",
          description: "Showed ability to translate algorithmic thinking into working code.",
        },
        {
          title: "Communication",
          description: "Articulated thought process clearly during the interview.",
        },
      ],
      recordingTitle: "NxtWave Employability – DSA Interview",
      recordingSubtitle: "Aman Mittal – TR1",
      recordingUrl: "https://drive.google.com/file/d/1dJwN5frDAG0nHooS1VI7m1VgMR2BZ1zl/view?usp=sharing",
    },
    tr2: {
      type: "technical",
      title: "TR2 – Technical & System Interview",
      subtitle: "45–90 Minutes | Code ownership, project depth, system thinking",
      interviewer: "Archita Sundaray",
      duration: "1 Hour 12 Minutes",
      focusAreas: [
        "DSA",
        "HTML/CSS",
        "React",
        "Backend",
        "Database",
        "CS Fundamentals",
      ],
      questions: [
        "Explain semantic HTML and how it improves accessibility and SEO. What problems arise if everything is built using only div and span?",
        "Solve the problem: product of array except self. Explain optimized approach, edge cases, and complexity.",
        "Design a paginated API for fetching a large list of products. Show endpoint, query parameters, and response structure.",
        "How would you build a backend system resilient to failures of a critical third-party API like a payment gateway?",
        "Implement a stack using only queue data structures. Explain push, pop, and time complexity.",
      ],
      insights: [
        {
          title: "Full-Stack Understanding",
          description: "Shows comprehensive knowledge across the stack, with strong focus on frontend and backend concepts.",
        },
        {
          title: "Real-World Scenario Handling",
          description: "Applied theoretical concepts to practical scenarios effectively, demonstrating industry readiness.",
        },
        {
          title: "System Thinking",
          description: "Understood how different components interact in a system architecture context, including resilience and error handling.",
        },
      ],
      recordingTitle: "NxtWave Employability – Interview Round 2",
      recordingSubtitle: "Aman Mittal – TR2",
      recordingUrl: "https://drive.google.com/file/d/1btPSJpGV3_4qacWV99RIdWGLmON0Hw87/view?usp=sharing",
    },
    strengths: [
      "Excellent frontend development skills with React and JavaScript",
      "Strong HTML & CSS knowledge with accessibility and SEO focus",
      "Good understanding of backend architecture and API design",
      "Solid problem-solving and algorithmic thinking",
      "Clear communication during technical discussions",
    ],
    improvements: [
      "Strengthen DSA fundamentals for more complex problems",
      "Deepen system design knowledge",
      "Practice more competitive programming",
      "Enhance CS fundamentals knowledge",
    ],
    interviewerInsights: {
      hiringSignal: "Strong Hire",
      confidenceLevel: "High",
      industryReadiness: "Production Ready",
      summary: "Aman Mittal demonstrates exceptional frontend development skills with strong React and JavaScript knowledge. His understanding of backend architecture, API design, and system resilience is solid. While DSA fundamentals could be strengthened, his overall technical competency, problem-solving skills, and communication make him an excellent candidate for full-stack roles.",
    },
  },
];

export const getCandidateById = (id: string): Candidate | undefined => {
  return candidates.find((c) => c.id === id);
};

export const getCandidateLinks = (): Array<{ id: string; name: string; url: string }> => {
  return candidates.map((candidate) => ({
    id: candidate.id,
    name: candidate.name,
    url: `/${candidate.id}`,
  }));
};
