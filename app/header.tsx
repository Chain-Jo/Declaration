
type Props = object;

export const Header = ({
    // adminIds
}: Props) => {
    return (
        // <header className="h-20 w-full border-b-2 border-slate-200 px-4">
        <header className="h-20 w-full border-b-2 border-linea px-4 bg-green-950">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    {/* <Image src="/img/MYS-logo-512.png" height={40} width={40} alt="Logo"/> */}
                    <h1 className="text-1xl font-extrabold text-amber-500 tracking-wide">
                        Mezclas & Sabores 
                    </h1>

                </div>

            </div>
        </header>
    )
}
