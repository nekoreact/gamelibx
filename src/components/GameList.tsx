export default function GameList ({name, image, titlesList} : GameProps ) {
    return (
        <section className="w-full">
            <h1 className="my-2 text-[30px]">Lista de espera</h1>
            {name}
            <ul>
                {titlesList.map((title) => (
                    <li className="w-full p-4 bg-white text-black mb-2" key={title.title}>{title.title}</li>
                ))}
            </ul>
        </section>
    )
}