import {IoLogoDiscord, IoLogoInstagram, IoMail} from "react-icons/io5";

const ContactPageLinks = [
    {
        id: 1,
        label: "E-mail: klimondra@imbus.org",
        icon: IoMail,
        link: "mailto:klimondra@imbus.org?subject=Zpr%C3%A1va%20ze%20str%C3%A1nky%20kontakt%20na%20webu",
    },
    {
        id: 2,
        label: "Instagram: klimondra",
        icon: IoLogoInstagram,
        color: "rgba(225, 48, 108, 0.5)",
        link: "https://www.instagram.com/klimondra/",
    },
    {
        id: 3,
        label: "Discord: klimondra",
        icon: IoLogoDiscord,
        color: "rgba(114, 137, 218, 0.5)",
        link: "https://discordapp.com/users/821336004643520512",
    }
]

export default ContactPageLinks;