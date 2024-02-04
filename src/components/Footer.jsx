import { nanoid } from "nanoid";
import { TiSocialInstagram } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";

const data = [
    {id: nanoid(), icon: <TiSocialInstagram/>},
    {id: nanoid(), icon: <FaFacebook/>},
    {id: nanoid(), icon: <FaXTwitter/>},
    {id: nanoid(), icon: <CiLinkedin/>},
    {id: nanoid(), icon: <FaTelegramPlane/>}
]

const date = new Date().getFullYear()
const Footer = () => {
    const renderedIcons = data.map((icon)=> {
        return(
            <li key={icon.id}>{icon.icon}</li>
        )
    })
    return(
        <div className="absolute bottom-0 left-0 w-[100%] shadow-lg text-orange-700 border sm:flex hidden flex-col justify-between gap-1 font-mono items-center">
            <p>&copy; {date} Fatma-Tech. All rights reserved.</p>
            <ul className="font-mono mb-3 flex gap-2">{renderedIcons}</ul>
        </div>
    )
}

export default Footer;