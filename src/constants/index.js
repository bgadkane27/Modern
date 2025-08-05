import {
  UserRound,
  SearchCheck,
  Brain,
  MessageSquare,
  Users,
  Lightbulb,
  CalendarCheck,
  RefreshCw,
  Smile,
  Target,
  Phone,
  Mail,
  Linkedin,
  Github,
  MessageCircle,
} from "lucide-react";

export const aboutCards = [
  {
    icon: UserRound,
    title: "Who I Am",
    description: "I have a deep understanding of testing strategies, bug tracking, and delivering quality software products.",
  },
  {
    icon: SearchCheck,
    title: "Attentive",
    description: "I pay close attention to details, ensuring that no bug or inconsistency goes unnoticed throughout the development lifecycle.",
  },
  {
    icon: Brain,
    title: "Strong Analytical",
    description: "I break down complex problems into smaller, manageable parts, helping teams uncover root causes and prevent issues early.",
  },
  {
    icon: MessageSquare,
    title: "Excellent Communication",
    description: "I communicate clearly with developers, designers, and stakeholders to align expectations and ensure transparency in testing.",
  },
  {
    icon: Users,
    title: "Excellent Collaboration",
    description: "I work closely with cross-functional teams, contributing to a supportive and productive work environment that values quality.",
  },
  {
    icon: Lightbulb,
    title: "Curious and Proactive",
    description: "I constantly explore how systems behave and proactively suggest improvements—even before issues arise.",
  },
  {
    icon: CalendarCheck,
    title: "Strong Time Management",
    description: "I prioritize testing tasks efficiently, ensuring deliverables are completed on time without compromising quality.",
  },
  {
    icon: RefreshCw,
    title: "Patience and Perseverance",
    description: "I thoroughly retest edge cases and scenarios, staying calm through repetitive or challenging test cycles.",
  },
  {
    icon: Smile,
    title: "User-Centric Mindset",
    description: "I think like an end user to test real-world scenarios, ensuring the product delivers value and ease of use.",
  },
  {
    icon: Target,
    title: "Product Oriented",
    description: "I focus on how each feature contributes to the product’s overall goals, ensuring functionality aligns with user needs.",
  },
];

export const experiences = [
	{
		id: 1,
		name: "Expert Business Solutions",
		image: "/imgs/enfinity.svg",
		title: "QA/QC Enginner",
		period: "March 2023 - Present",
		list : [
			"Designing, developing, and executing test cases to ensure software quality and compliance with business requirements.",
			"Collaborating with cross-functional teams including developers, and product managers to understand requirements and plan testing activities.",
			"Identifying, logging, and tracking defects in issue management tool - Visual Studio Team Services.",
			"Performing manual and automated testing.",
		]
	},
	{
		id: 2,
		name: "WebRelier Software Solutions Pvt Ltd",
		image: "/imgs/webrelier.webp",
		title: "Software Test Engineer",
		period: "Aug 2020 - Feb 2023",
		list : [
			"Analyze Requirements/Stories.",
			"Identify test scenarios and create/update test cases.",
			"Environment Setup - test data and tools.",
			"Defect Reporting & Tracking.",
		]
	},
	{
		id: 3,
		name: "YES Bank Ltd",
		image: "/imgs/yesbank.svg",
		title: "Senior Officer",
		period: "Mar 2017 - Jul 2020",
		list : [
			"Handle core banking operations.",
			"Processing the customer request.",
			"Processing the forex transactions like inward and outward remittances.",
			"Handling the gold loan sales and process.",
		]
	},
	{
		id: 4,
		name: "HDFC Bank Ltd",
		image: "/imgs/hdfc.png",
		title: "Assistant Manager",
		period: "Mar 2015 - Mar 2017",
		list : [
			"Handle the teller counter.",
			"Check and process the account opening form.",
			"Handle the branch audit.",
			"processing the NEFT/RTGS/Fund Transfer requests.",
		]
	},
];

export const projects = [
  {
    id: 1,
    image: "/imgs/main (1).jpg",
    name: "HRMS",
    description: "Enfinity HRMS, a user-friendly cloud-based HR software in MENA which simplifies HR management, from recruitment to retirement, helps you retain talent and build a high-performing workforce.",
    tags: ["hr core", "payroll", "self service", "attendance", "learning", "performance"],
    link: "https://www.onenfinity.com/hrms",
  },
  {
    id: 2,
    image: "/imgs/main (2).jpg",
    name: "ERP",
    description: "Enfinity ERP lies a comprehensive suite of applications, seamlessly integrating accounting, sales, purchase, inventory, fixed assets and service.",
    tags: ["accounting", "sales", "purchase", "inventory", "fixed asset", "service"],
    link: "https://www.onenfinity.com/erp",
  },
  {
    id: 3,
    image: "/imgs/main (3).jpg",
    name: "CRM",
    description: "Enfinity CRM is a cutting-edge customer relationship management solution. Enfinity CRM simplifies it, focusing on efficient customer engagement, streamlining business processes, and enhancing productivity.",
    tags: ["lead", "opportunity", "salesman"],
    link: "https://www.onenfinity.com/crm",
  },
  {
    id: 4,
    image: "/imgs/main (4).jpg",
    name: "Retail",
    description: "Enfinity Retail is a cutting-edge cloud-based retail Point of Sale (POS) system, meticulously crafted to simplify and enhance the operational efficiency of retailers.",
    tags: ["pos", "payment methods", "salesman"],
    link: "https://www.onenfinity.com/retail",
  },
  {
    id: 5,
    image: "/imgs/main (5).jpg",
    name: "Restaurant",
    description: "Enfinity Restaurant is a comprehensive Point-of-Sale (POS) and restaurant management system crafted to meet the diverse needs of modern restaurants.",
    tags: ["pos", "payment methods", "salesman"],
    link: "https://www.onenfinity.com/restaurant",
  },
  {
    id: 6,
    image: "/imgs/main (6).jpg",
    name: "Subscription",
    description: "Enfinity Subscription is a cloud-based software designed for businesses aiming to optimize their subscription billing processes.",
    tags: ["product", "plan","addon","coupon","charges", "billingfrequencies"],
    link: "https://www.onenfinity.com/subscription",
  },
  {
    id: 7,
    image: "/imgs/main (7).jpg",
    name: "Real-Estate",
    description: "Enfinity Real-Estate is a cutting-edge cloud-based solution tailored for property rental management. From seamless rent collection to intuitive analytics, we offer comprehensive tools that make managing real estate assets a breeze.",
    tags: ["property", "rent collection", "security deposit"],
    link: "https://www.onenfinity.com/real-estate",
  },
  {
    id: 8,
    image: "/imgs/main (8).jpg",
    name: "Loan Origination System",
    description: "Loan Origination System streamlines the end-to-end loan process with a task-based workflow and real-time alerts. It ensures faster and more efficient loan approvals.",
    tags: ["customer", "loan application", "repayment", "emi"],
    link: "https://www.ltfinance.com/personal-loan",
  },
];

export const contact = [
  {
    id: 1,
    label: "WhatsApp",
    value: "+91 9673929867",
    sublabel: "	Message me",
    icon: MessageCircle,    
    link: "https://wa.me/919673929867?text=Hi%20Baburao%2C%20I%20found%20you%20via%20your%20portfolio!",
    image: "/imgs/main (1).jpg",
  },
  {
    id: 2,
    label: "Phone",
    value: "+91 9673929867",
    sublabel: "Call me",
    icon: Phone,
    link: "tel:+919673929867",
    image: "/imgs/main (2).jpg",
  },
  {
    id: 3,
    label: "Email",
    value: "bgadkane@gmail.com",
    sublabel: "Send me an email",
    icon: Mail,
    link: "mailto:bgadkane@gmail.com",
    image: "/imgs/main (3).jpg",
  },
  {
    id: 4,
    label: "LinkedIn",
    value: "linkedin.com/bgadkane",
    sublabel: "Connect me",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/baburao-adkane-443476250/",
    image: "/imgs/main (4).jpg",
  },
  {
    id: 5,
    label: "GitHub",
    value: "github.com/bgadkane",
    sublabel: "Visit",
    icon: Github,
    link: "https://github.com/bgadkane27",
    image: "/imgs/main (5).jpg",
  },
];
