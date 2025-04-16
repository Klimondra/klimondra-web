// app/linktree/page.js
export const revalidate = 90;

import { getLinks } from "@/services/linkService";
import AnimatedDotBg from "../../components/homePage/animatedDotBg";
import DynamicIcon from "@/components/global/DynamicIcon";
import "./Linktree.css";

export default async function LinktreePage() {
    // Data se načtou během generování stránky, NE až při zobrazení uživateli
    const linktreeLinks = await getLinks();

    return (
        <section id="linktreePage">
            <div className="animBg">
                <AnimatedDotBg />
            </div>
            <div className="linkBoard">
                <h2>Linktree</h2>
                <p>Tady jsou nějaké odkazy, co by se mohly hodit...</p>
                <div>
                    {linktreeLinks.map((link) => (
                        <a href={link.link} key={link.link}>
                            {link.icon ? (
                                <DynamicIcon lib={link.icon.lib} name={link.icon.name} className={"linkIcon"} />
                            ) : (
                                <DynamicIcon lib="Md" name="MdLink" className={"linkIcon"} />
                            )}
                            <p>{link.label}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}