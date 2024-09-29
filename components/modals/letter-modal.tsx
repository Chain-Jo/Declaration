"use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

import { 
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
import { useLetterModal } from "@/store/use-letter-modal";


export const LetterModal = () => {
    // const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const { isOpen, close } = useLetterModal();

    useEffect(() => setIsClient(true), []);

    if (!isClient) {
        return null;
    }

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md bg-red-50">
                <DialogHeader>
                    <div className="flex items-center w-full justify-center">
                        <Image
                            src="/uwu.png"
                            alt="uwu"
                            height={150}
                            width={150}
                        />
                    </div>
                    {/*  */}
                    <DialogTitle className="text-justify font-bold text-2xl text-red-600">
                        <span className="text-black">Para: </span>Sarah 
                    </DialogTitle>
                    <DialogDescription className="text-justify text-xs">
                        Llevo un tiempo queriendo decirte esto, pero no sabía el momento o manera de expresarlo. Así que cree esto para hacerlo, ojalá sea de tu agrado y no sea muy cursi, disfruté mucho haciéndolo, principalmente porque era para ti, es la forma más tecnóloga y a mi estilo que se me ocurrió jaja.<br />
                        <br /> 
                        Quisiera decirte tantas cosas y extenderme, pero opté por ser lo más objetivo posible y todo se resume a que disfruto mucho de tu compañía, abrazos, mensajes, así como escucharte, hablarte, etc. A medida que te he ido conociendo, no solo vi que eres una persona con valores y principios acorde a los míos, sino que también posees un corazón noble y dulce, los pequeños detalles que capaz tu no veas, pero para mi, significan mucho, algo como un mensaje de <span>&quot;¿Ya llegaste?&quot;</span> o <span>&quot;¿Que tal tu día?&quot;</span>, el cómo me apoyas en mis entrenamientos, la confianza que me tienes, tu energía tan cálida, esas y tantas cosas de ti que me gustan... <br /><b>Tú me gustas.</b> <br /> <br />
                        Y para este punto te considero más que una amiga, siento que eres esa persona en la cual puedo contar en las buenas y en las malas, esa persona con la cual puedo aprender a amar, esa personal con la cual quiero estar. No sé si el sentimiento sea mutuo, pero tú misma lo dijiste, debo dar el paso, es mejor saber la respuesta que vivir pensando en el <span>&quot;¿que hubiese pasado?&quot;</span>. Si crees que no es el momento, tranquila, creo que eres una persona persona por la cual vale mucho la pena esperar e indiferentemente de lo que pienses, cuenta conmigo. Te quiero y aprecio un montón.<br /> <br />
                        <div className="font-bold text-black">De todas nuestras coincidencias, conocerte fue la mejor de todas...</div> 
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4">
                    <div className="flex flex-col gap-y-4 w-full">

                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
};