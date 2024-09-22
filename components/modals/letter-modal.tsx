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
                        Llevo un tiempo queriendo decirte esto, pero no sabía el momento o manera de decirtelo. Así que cree esto como medio para expreserte mis sentimientos, ojalá sea de tu agrado y no sea muy cursi, disfruté mucho haciendolo, principalmente porque era para ti, es la forma más tecnóloga y a mi estilo que se me ocurrió jaja.<br />
                        <br /> 
                        El caso, quisiera decirte tantas cosas y extenderme, pero opté por ser lo más breve posible, parte de eso es que si te soy sincero, esta es la primera vez que hago esto, pero todo se resume a que disfruto mucho de tu compañía, abrazos, mensajes, así como escucharte, hablar contigo y conocerte cada día más, a medida que te he ido conociendo, no solo vi que eres una persona madura, sino que también posees un corazón noble y dulce, los pequeños detalles que capaz tu no veas, pero para mi, significan mucho, algo como un mensaje de <span>&quot;ya llegaste?&quot;</span> o <span>&quot;que tal tu día?&quot;</span>, el como me apoyas en mis entrenamientos, la confianza que me tienes, tu buena relación con tu familia, esas y tantas cosas de ti me gustan, <b>tú me gustas</b> y quisiera ser más que un amigo, incluso que un novio. No sé si el sentimiento sea mutuo, pero tu misma lo dijiste, debo dar el paso, es mejor saber la respuesta que vivir pensando en el <span>&quot;que hubiese pasado&quot;</span>. Si crees que no es el momento, creo que eres una persona persona por la cual vale la pena esperar o si el sentimiento no es el mismo lo entenderé, pero indiferentemente de lo que pienses, puedes seguir contando conmigo. Te quiero y un abrazo.<br /> <br />
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