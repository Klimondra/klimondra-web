const isActive = {
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
}

const ProjectList = [
    {
        id: 1,
        slug: "imbus",
        title: "Imbus",
        img: "/projectImages/imbusLogo.png",
        techStack: ["C Sharp", "Git", "Github"],
        startedDate: {
            month: 12,
            year: 2024
        },
        endedDate: {...isActive},
        secondBtn: {
            label: "Oficiální web >>",
            link: "https://imbus.org/"
        },
        description: "Imbus je projekt, který vytvářím společně ještě s jedním kamarádem. Původně to vzniklo jako sranda (ostatně jako většina mých projektů), že si uděláme generátor hlášení v MHD. Pak jsme to začali postupně rozšiřovat a vzniká okolo toho  spousta věci na kterých si procvičujeme naše programovací schopnosti. \n\nPůvodní aplikace na hlášení zastávek v MHD, byla postavena v C# Windows Forms. Jestli to někdy rozšíříme na něco jiného, třeba na webovou aplikaci nebo na více platforem, neví ani bůh, ale ještě uvidíme. \n\nAplikace umí vlastně spouštět zvuky hlášení zastávek, v Hradci Králové. Dokonce jsou zde i originální zvuky z MHD, které nám poskytnul DPMHK. \n\nAplikace pravděpodobně nikdy NEBUDE veřejně vydána, a to z důvodu právě autorských práv na hlášení.",
        links: [
            { label: "Webová stránka", link: "https://imbus.org/" },
        ],
    },
    {
        id: 2,
        slug: "muj-web",
        title: "Můj Web",
        img: "/logos/K-pixel-logo-blue.svg",
        techStack: ["HTML", "CSS", "SASS", "JavaScript", "React", "Git", "Github"],
        startedDate: {
            month: 8,
            year: 2023
        },
        endedDate: {...isActive},
        secondBtn: {
            label: "Hlavní stránka >>",
            link: "https://klimondra.imbus.org/"
        },
        description: "Svůj první web jsem začal dělat, v srpnu roku 2023. V té době, no řekněmem vypadal otřesně, ale pokus dobrý. Na pozadí bylo zvláštní video, a responzivita nebyla nic moc. Tenkrát (mimochodem, přijde mi zvláštní mluvit o roce 2023 jako 'tenkrát', ale budiž) web běžel čistě na HTML a CSS. \n\nV září léta páně 2024, jsem si řekl, že by to chtělo nějakou revoluci, a vytvořil jsem druhou verzi webu. Ta už byla o dost lepší, držel jsem se určité barevné palety, dokonce tam byly i nějaké animace. Tenhle web byl hodně obstojný.\n\nJenže pak jsem se začal pořádně učit JavaScript, a přišlo na React. A to je vám úplně jiný svět. A tak ani né po moc dlouhé době od spuštění druhé verze webu, jsem začal vytvářet třetí verzi webu. Stalo se tak letos, v roce 2025, v únoru. \n\nAktuálně web běží na reactu, konkrétně pomocí Create-react-app. Dneska už bych to zase udělal jinak, postavil bych web na Next JS (což je teda rozšíření pro React), takže migrace možná ještě bude :D. Já jsem zatím s podobou webu poměrně spokojen, a budu tady přidávat další věci. Minimílně do chvílě dokud nebudu mít motivaci a skilly o level výš, abych třeba vytvořil verzi 4. Ale trojka je mé oblíbené číslo, tak by tahle verze mohla nějakou dobu vydržet :)",
        links: [
            { label: "Hlavní stránka", link: "https://klimondra.imbus.org/" },
            { label: "GitHub", link: "https://github.com/Klimondra/klimondra-web" },
        ],
    },
]

export default ProjectList;