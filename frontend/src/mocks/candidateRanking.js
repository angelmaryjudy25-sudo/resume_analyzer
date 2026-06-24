const generateCandidates = () => {
    const names = [
        "Alice Johnson", "Sarah Wilson", "David Thomas", "Michael Brown", "Emily Davis",
        "Chris Evans", "Jessica Alba", "Ryan Gosling", "Emma Stone", "Tom Hardy",
        "Robert Downey", "Scarlett Johansson", "Benedict Cumberbatch", "Natalie Portman", "Morgan Freeman",
        "Denzel Washington", "Leonardo DiCaprio", "Brad Pitt", "Angelina Jolie", "Jennifer Lawrence",
        "Will Smith", "Tom Cruise", "Johnny Depp", "Keanu Reeves", "Meryl Streep",
        "Samuel L. Jackson", "Charlize Theron", "Christian Bale", "Anne Hathaway", "Matt Damon",
        "Julia Roberts", "George Clooney", "Sandra Bullock", "Hugh Jackman", "Jennifer Aniston",
        "Matthew McConaughey", "Jake Gyllenhaal", "Cillian Murphy", "Margot Robbie", "Ryan Reynolds",
        "Gal Gadot", "Henry Cavill", "Chris Hemsworth", "Mark Ruffalo", "Jeremy Renner",
        "Elizabeth Olsen", "Paul Rudd", "Chadwick Boseman", "Tom Holland", "Zendaya"
    ];

    const roles = ["Full Stack Developer", "Backend Engineer", "Data Scientist", "Product Manager", "DevOps Engineer"];
    const statuses = ["Applied", "Screened", "Shortlisted", "Interview", "Rejected"];

    return names.map((name, i) => ({
        id: i + 1,
        name,
        match: Math.floor(Math.random() * (98 - 60) + 60),
        atsScore: Math.floor(Math.random() * (95 - 70) + 70),
        experience: Math.floor(Math.random() * 12) + 1,
        status: statuses[Math.floor(Math.random() * statuses.length)],
        recommendedRole: roles[Math.floor(Math.random() * roles.length)],
        skills: ["React", "Node.js", "Python", "SQL", "Cloud Fundamentals"],
        missingSkills: ["AWS", "Docker", "Kubernetes"],
        education: "B.S. Computer Science",
        projects: 4,
        certifications: i % 3 === 0 ? ["AWS Practitioner"] : [],
        breakdown: {
            skills: Math.floor(Math.random() * 100),
            experience: Math.floor(Math.random() * 100),
            education: Math.floor(Math.random() * 100),
            certification: Math.floor(Math.random() * 100),
            projects: Math.floor(Math.random() * 100)
        }
    }));
};

const candidates = generateCandidates();

export const mockRankingData = {
    hero: {
        totalCandidates: 50,
        totalJobs: 5,
        topMatch: Math.max(...candidates.map(c => c.match)),
        bestCandidate: candidates.sort((a, b) => b.match - a.match)[0].name,
        avgMatch: Math.floor(candidates.reduce((acc, c) => acc + c.match, 0) / candidates.length)
    },
    candidates: candidates.sort((a, b) => b.match - a.match),
    jobs: [
        "Senior Frontend Developer",
        "Backend Engineer (Node.js)",
        "Data Scientist",
        "Product Manager",
        "DevOps Engineer"
    ],
    matrix: candidates.slice(0, 10).map(c => ({
        candidate: c.name,
        scores: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100)
        ]
    }))
};
