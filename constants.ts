
import { ResumeData } from './types';

export const RESUME: ResumeData = {
  name: "Swathi Reddy",
  title: "Full Stack Java Developer",
  email: "swathireddysampath@gmail.com",
  linkedIn: "linkedin.com/in/SwathiReddy",
  mobile: "+1 5572204765",
  location: "St. Louis, Missouri",
  summary: "Experienced Full Stack Java Developer with 5 years of professional experience in designing, developing, and deploying scalable web and enterprise applications. Proficient in Java, Spring Boot, React.js, Angular, RESTful APIs, and cloud platforms including AWS and Azure. Delivered microservices and connected systems that improved system performance by 35%. Led Agile teams, optimizing CI/CD pipelines, and integrating complex backend and frontend systems.",
  skills: [
    {
      title: "Backend & Core",
      skills: ["Java", "Spring Boot", "Spring Cloud", "Microservices", "Python", "Groovy", "Hibernate", "Spring AI"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "Angular", "Redux", "TypeScript", "Tailwind CSS", "Material-UI", "WebSockets"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (EC2, S3, Lambda)", "Azure", "Docker", "Kubernetes", "Jenkins", "Terraform", "GitLab CI/CD"]
    },
    {
      title: "Databases & Messaging",
      skills: ["PostgreSQL", "MongoDB", "Oracle", "Kafka", "RabbitMQ", "Redis", "DynamoDB"]
    }
  ],
  experience: [
    {
      company: "GEICO",
      role: "Senior Software Developer",
      period: "February 2024 – Present",
      bullets: [
        "Designed microservices for policy management improving transaction efficiency by 30% using Spring Boot.",
        "Led development of customer-facing React.js apps reducing page load time by 25%.",
        "Implemented event-driven architecture using Kafka for real-time claims updates.",
        "Automated infra-as-code with Terraform on AWS, reducing provisioning time by 40%.",
        "Mentored 4 junior developers and improved team code quality through TDD principles."
      ],
      tech: ["Java", "Spring Boot", "React", "Kafka", "AWS", "Docker", "Kubernetes", "Terraform"]
    },
    {
      company: "First Citizens Bank",
      role: "Software Developer",
      period: "January 2021 – December 2022",
      bullets: [
        "Created responsive banking dashboards using Angular and TypeScript.",
        "Engineered secure banking applications with Java and Oracle DB, improving efficiency by 30%.",
        "Refactored legacy modules with Spring Boot and Hibernate, reducing complexity by 25%.",
        "Automated CI/CD pipelines using Azure DevOps.",
        "Managed a team of 6 developers to implement end-to-end banking solutions."
      ],
      tech: ["Angular", "Java", "Spring Boot", "Oracle", "Azure DevOps", "Hibernate"]
    },
    {
      company: "Ford Motor Company",
      role: "Software Developer",
      period: "June 2019 – January 2021",
      bullets: [
        "Architected scalable apps for connected vehicle data, improving system response by 35%.",
        "Built React.js dashboards for telemetry visualization.",
        "Optimized PostgreSQL queries and indices for high-volume connected vehicle data.",
        "Streamlined release cycle times by 35% through Jenkins and Git.",
        "Deployed microservices to AWS EC2 with auto-scaling optimization."
      ],
      tech: ["Java 11", "Spring Boot", "React", "PostgreSQL", "AWS EC2", "Jenkins"]
    }
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      school: "Saint Louis University",
      date: "December 2024",
      location: "St. Louis, Missouri"
    }
  ],
  certifications: [
    "AWS Certified Solutions Architect – Associate"
  ]
};
