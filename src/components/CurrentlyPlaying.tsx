import Image from 'next/image';
export default function CurrentlyPlaying () {
    return (
        <div className="flex">
            <div className="flex flex-col text-[#000] bg-[#fff] p-4">
                <div className='fitter'>
                    <Image
                        width={200}
                        height={200}
                        src="/ratchet-clank-ps2.webp"
                        className='image-fit'
                        alt="Picture of the author"
                    />
                </div>
                <span>
                    Ratchet and Clank
                </span>
                <span>Puntuacion: 5/5</span>
                <span>
                    <span>Genero:</span>
                    <span>Plataforma</span>
                </span>
                <span></span>
            </div>
            <div className="ml-2 flex flex-col text-[#000] bg-[#fff] p-4">
                <div className='fitter'>
                    <Image
                        width={200}
                        height={200}
                        src="/ratchet-clank-ps2.webp"
                        className='image-fit'
                        alt="Picture of the author"
                    />
                </div>
                <span>
                    Ratchet and Clank
                </span>
                <span>Puntuacion: 5/5</span>
                <span>
                    <span>Genero:</span>
                    <span>Plataforma</span>
                </span>
                <span></span>
            </div>
            <div className="ml-2 flex flex-col text-[#000] bg-[#fff] p-4">
                <div className='fitter'>
                    <Image
                        width={200}
                        height={200}
                        src="/ratchet-clank-ps2.webp"
                        className='image-fit'
                        alt="Picture of the author"
                    />
                </div>
                <span>
                    Ratchet and Clank
                </span>
                <span>Puntuacion: 5/5</span>
                <span>
                    <span>Genero:</span>
                    <span>Plataforma</span>
                </span>
                <span></span>
            </div>
            <div className="ml-2 flex flex-col text-[#000] bg-[#fff] p-4">
                <div className='fitter'>
                    <Image
                        width={200}
                        height={200}
                        src="/ratchet-clank-ps2.webp"
                        className='image-fit'
                        alt="Picture of the author"
                    />
                </div>
                <span>
                    Ratchet and Clank
                </span>
                <span>Puntuacion: 5/5</span>
                <span>
                    <span>Genero:</span>
                    <span>Plataforma</span>
                </span>
                <span></span>
            </div>
        </div>
    )
}