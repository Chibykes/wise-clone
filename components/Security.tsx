import { RiBankLine, RiKeyLine, RiLock2Line, RiPhoneLockLine } from "react-icons/ri";

export default function Security(){

    return (
        <section className="max-w-6xl mx-auto lg:py-40 py-20 lg:px-0 px-5">

            <div className="flex lg:flex-row flex-col gap-4 items-center">
                
                <div className="col-span-7 space-y-8 lg:order-0 order-1">
                    <p className="lg:text-6xl text-4xl text-[--color-black] font-semibold">
                        Disappoint thieves
                    </p>

                    <p className="text-[--color-black] lg:text-xl text-lg lg:w-2/3">
                        Every month, our customers trust us to move around £9 billion of their money. Here are some of the important ways we protect them.
                    </p>

                    <div className="
                        inline-block
                        px-6 py-3 text-[--color-lime-dark] font-semibold 
                        bg-[--color-lime] hover:bg-[--color-lime-accent] rounded-full
                        border border-[--color-lime] hover:border-transparent
                        duration-200 shrink-0
                    ">
                        How we keep your money safe
                    </div>
                </div>

                <div className="col-start-8 col-span-4">
                    <picture className="inline-block lg:w-full w-1/2 mx-auto">
                        <img
                            src="/img/media/lock-large@1x.webp"
                            alt=""
                        />
                    </picture>
                </div>


            </div>

            <div className="max-w-6xl mx-auto py-20">

                <div className="flex lg:flex-row flex-col justify-between lg:p-8 lg:gap-20 gap-10">

                    <div className="flex flex-col gap-5">
                        <div className="
                            grid place-content-center lg:w-20 lg:h-20 w-16 h-16
                            rounded-full bg-neutral-200
                        ">
                            <RiLock2Line className="lg:text-5xl text-3xl text-neutral-700"/>
                        </div>
                        <p className='lg:text-lg text-base text-neutral-700 font-semibold'>
                            Our dedicated fraud and security teams work to keep your money safe
                        </p>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="
                            grid place-content-center lg:w-20 lg:h-20 w-16 h-16
                            rounded-full bg-neutral-200
                        ">
                            <RiPhoneLockLine className="lg:text-5xl text-3xl text-neutral-700"/>
                        </div>
                        <p className='lg:text-lg text-base text-neutral-700 font-semibold'>
                            We use 2-factor authentication to protect your account
                        </p>
                    </div>
                    
                    <div className="flex flex-col gap-5">
                        <div className="
                            grid place-content-center lg:w-20 lg:h-20 w-16 h-16
                            rounded-full bg-neutral-200
                        ">
                            <RiBankLine className="lg:text-5xl text-3xl text-neutral-700"/>
                        </div>
                        <p className='lg:text-lg text-base text-neutral-700 font-semibold'>
                            We hold your money with established financial institutions
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );

}