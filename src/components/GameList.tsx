export default function GameList ({name, image, titlesList} : GameProps ) {
    return (
        <div className="w-full">
            {name}
            <ul>
                {titlesList.map((title) => (
                    <li className="w-full p-4 bg-white text-black" key={title.title}>{title.title}</li>
                ))}
            </ul>
        </div>
    )
}