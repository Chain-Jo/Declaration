"use client" 
// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";


import { useLetterModal } from "@/store/use-letter-modal";


import { cn } from "@/lib/utils";

const Icon = Mail;

export default function Home() {
  const { open } = useLetterModal();
  return (
		<div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-col items-center justify-center p-4 gap-2">
			<div className="relative w-[360px] h-[160px] lg:w-[480px] lg:h-[280px] mb-8 lg:mb-0">
				{/* <Image src="/uwu.png" fill alt="UwU" /> */}
			</div>
			<div className="flex flex-col items-center gap-y-8">
				<h1 className="text-xl lg:text-3xl font-bold text-neutral-300 max-w-[480px] text-center">
				{/* <h1 className="text-xl lg:text-3xl font-bold text-letrasBlancas max-w-[480px] text-center"> */}
					<b>
          He hecho esto para ti... <br />
          </b>
				</h1>
          Espero que te guste 🙏
				<div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
        {/* <div className="h-[102px] w-[102px] relative">
          
								<Button size="lg" variant="default" className="w-full">
									Empieza ahora
								</Button>
                <div className="absolute -top-6 left-1 px-3 py-1 border-2 font-bold uppercase text-green-500 bg-white rounded-xl animate-pulse tracking-wide z-100">
                  Iniciar
                <div
                  className="absolute left-1/2 -bottom-4 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-x-1/2"
                />
                </div>
        </div> */}
    
                <Button
                  size="rounded"
                  variant={"danger"}
                  onClick={ open }
                  // Le cambié los px de 70 a 100
                  className="h-[140px] w-[140px] border-b-4 animate-pulse"
                >
                  <Icon
                    className={cn(
                      "h-20 w-20",
                      "fill-danger-foreground text-primary-foreground",
                    )}
                  />
                </Button>

				</div>
			</div>


		</div>
	)
}
