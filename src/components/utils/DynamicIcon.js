"use client"
import * as ai from "react-icons/ai";
import * as bs from "react-icons/bs";
import * as bi from "react-icons/bi";
import * as di from "react-icons/di";
import * as fa from "react-icons/fa";
import * as fc from "react-icons/fc";
import * as fi from "react-icons/fi";
import * as gi from "react-icons/gi";
import * as go from "react-icons/go";
import * as gr from "react-icons/gr";
import * as hi from "react-icons/hi";
import * as hi2 from "react-icons/hi2";
import * as im from "react-icons/im";
import * as io from "react-icons/io";
import * as io5 from "react-icons/io5";
import * as md from "react-icons/md";
import * as ri from "react-icons/ri";
import * as si from "react-icons/si";
import * as sl from "react-icons/sl";
import * as tb from "react-icons/tb";
import * as tfi from "react-icons/tfi";
import * as ti from "react-icons/ti";
import * as vsc from "react-icons/vsc";
import * as wi from "react-icons/wi";

const iconLibraries = {
    ai, bs, bi, di, fa, fc, fi, gi, go, gr,
    hi, hi2, im, io, io5, md, ri, si, sl,
    tb, tfi, ti, vsc, wi,
};

export default function DynamicIcon({ lib, name, className }) {
    if (!lib || !name) {
        return null;
    }
    const iconLib = iconLibraries[lib?.toLowerCase()];
    if (iconLib && iconLib[name]) {
        const IconComponent = iconLib[name];
        return <IconComponent className={className} />;
    } else {
        console.warn(`Ikona ${name} v knihovně ${lib} nenalezena.`);
        return null;
    }
}