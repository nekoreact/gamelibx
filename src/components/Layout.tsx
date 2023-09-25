import Sidebar from "./Sidebar";

export default function Layout ({ children }) {
    return (
        <>
            <Sidebar></Sidebar>
            
            <main className="pl-[200px]">{children}</main>
            
        </>
    )
}