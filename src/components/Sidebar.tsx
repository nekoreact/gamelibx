import { useState } from "react"

const sidebarOptionsList = [
    { name : "Videojugos" },
    { name : "Mi Lista" },
    { name : "Mis Records" },
    { name: "Cerrar Sesion" }
]
export default function Sidebar () {
    const [userName, setUserName] = useState("Victor X");
    return(
        <div className="sidebar h-screen text-[#000]">
            <ul className="flex flex-col p-2">
                {sidebarOptionsList.map((item) => (
                    <li key={item.name}>
                        <span>{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}