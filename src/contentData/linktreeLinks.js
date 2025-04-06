import { SiGithub, SiTiktok, SiTwitch, SiPrintables } from "react-icons/si";
import {BsInstagram, BsThreads, BsQuestionLg, BsBuilding} from "react-icons/bs";
import {IoGlobeOutline} from "react-icons/io5";

const linktreeLinks = [
    {
        label: "Můj web",
        link: "https://klimondra.imbus.org/",
        iconComponent: IoGlobeOutline,
    },
    {
        label: "NGL - Anonymní otázky",
        link: "https://ngl.link/klimondra15527",
        iconComponent: BsQuestionLg,
    },
    {
        label: "Fiktivní firma Q3D",
        link: "https://site21059121.nicepage.io/",
        iconComponent: BsBuilding,
    },
    {
        label: "Instagram",
        link: "https://www.instagram.com/klimondra/",
        iconComponent: BsInstagram,
    },
    {
        label: "Threads",
        link: "https://www.threads.net/@klimondra",
        iconComponent: BsThreads,
    },
    {
        label: "Github",
        link: "https://github.com/Klimondra",
        iconComponent: SiGithub,
    },
    {
        label: "Printables",
        link: "https://www.printables.com/@Klimondra",
        iconComponent: SiPrintables,
    },
    {
        label: "Tiktok",
        link: "https://www.tiktok.com/@klimondracz",
        iconComponent: SiTiktok,
    },
    {
        label: "Twitch",
        link: "https://www.twitch.tv/klimondra",
        iconComponent: SiTwitch,
    }
];

export default linktreeLinks;