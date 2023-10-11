export default function Button({title, icon, className, onClickFunction} : any) {
    return (
        <button className="text-[14px] bg-[#e15252] p-3" onClick={onClickFunction}>{title}</button>
    )
}