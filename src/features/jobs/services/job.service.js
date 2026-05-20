const jobService = {
    findAll: () => {
        const jobs = [{
                id: 1,
                title: "Senior Java Developer",
                category: "Engineering",
                skills: ["Java", "Spring Boot", "PostgreSQL"],
                employmentType: "Full-time",
                location: "Ho Chi Minh City, Vietnam",
                postedTime: "Posted 2 days ago",
                description: "Design, develop, and maintain high-quality Java applications using Spring Boot framework. Collaborate with teams..."
            },
            {
                id: 2,
                title: "UI/UX Designer",
                category: "Design",
                skills: ["Figma", "UX Research", "Prototyping"],
                employmentType: "Full-time",
                location: "Ho Chi Minh City, Vietnam",
                postedTime: "Posted 5 days ago",
                description: "Create intuitive and visually stunning user interfaces. Conduct user research and usability testing..."
            },
            {
                id: 3,
                title: "DevOps Engineer",
                category: "Engineering",
                skills: ["Docker", "K8s", "AWS", "Terraform"],
                employmentType: "Full-time",
                location: "Ha Noi, Vietnam",
                postedTime: "Posted 1 week ago",
                description: "Build and maintain CI/CD pipelines, manage cloud infrastructure, and ensure system reliability..."
            },
            {
                id: 4,
                title: "Product Manager",
                category: "Product",
                skills: ["Agile", "Jira", "Roadmap"],
                employmentType: "Full-time",
                location: "Ho Chi Minh City, Vietnam",
                postedTime: "Posted 3 days ago",
                description: "Define product vision, roadmap, and strategy. Work closely with engineering and design teams..."
            },
            {
                id: 5,
                title: "Digital Marketing Specialist",
                category: "Marketing",
                isNew: true,
                skills: ["SEO", "Google Ads", "Analytics"],
                employmentType: "Contract",
                location: "Remote",
                postedTime: "Posted 1 day ago",
                description: "Plan and execute digital marketing campaigns across multiple channels including SEO, SEM, social media..."
            },
            {
                id: 6,
                title: "Data Analyst",
                category: "Analytics",
                skills: ["SQL", "Python", "Power BI"],
                employmentType: "Full-time",
                location: "Ho Chi Minh City, Vietnam",
                postedTime: "Posted 4 days ago",
                description: "Analyze business data, build dashboards, and provide actionable insights to support decision-making..."
            }
        ];
        return jobs;
    },
};

export default jobService;