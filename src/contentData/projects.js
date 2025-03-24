import imbusLogo from "../assets/projectImages/imbusLogo.png"
import kLogo from "../assets/projectImages/K-Logo.png"

const isActive = {
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
}

const ProjectList = [
    {
        title: "Imbus",
        img: imbusLogo,
        techStack: ["C Sharp", "Git", "Github", "React"],
        startedDate: {
            month: 12,
            year: 2024
        },
        endedDate: {...isActive},
        secondBtn: {
            label: "Oficiální web >>",
            link: "https://imbus.org/"
        },
        description: "",
    },
    {
        title: "Můj Web",
        img: kLogo,
        techStack: ["HTML", "CSS", "SASS", "JavaScript", "React", "Git", "Github"],
        startedDate: {
            month: 8,
            year: 2023
        },
        endedDate: {...isActive},
        secondBtn: {
            label: "Hlavní stránka >>",
            link: "https://klimondra.vercel.app/"
        },
        description: "",
    },
]

export default ProjectList;