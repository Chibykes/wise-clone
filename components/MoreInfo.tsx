import { RiBankLine, RiKeyLine } from 'react-icons/ri';


export default function MoreInfo(){

    return (
        <section className="max-w-6xl mx-auto py-20 lg:px-0 px-5">
            <hr className="border-neutral-300"/>

            <div className="flex lg:flex-row flex-col gap-8 justify-between p-8">
                <div className="flex items-center gap-5">
                    <div className="
                        grid place-content-center w-16 h-16
                        rounded-full bg-neutral-200 shrink-0
                    ">
                        <RiBankLine className="text-3xl text-neutral-700"/>
                    </div>
                    <p className='text-base text-neutral-700 font-semibold'>
                        We&apos;re regulated by the National Bank of Belgium
                    </p>
                </div>

                <div className="flex items-center gap-5">
                    <div className="
                        grid place-content-center w-16 h-16
                        rounded-full bg-neutral-200 shrink-0
                    ">
                        <RiKeyLine className="text-3xl text-neutral-700"/>
                    </div>
                    <p className='text-base text-neutral-700 font-semibold'>
                        We protect your details through &nbsp;
                        <span className="
                            text-base text-[--color-lime-dark] font-semibold relative
                            after:absolute after:-bottom-px after:left-0
                            after:w-full after:h-px after:bg-[--color-lime-dark]
                        ">strict standards</span>
                    </p>
                </div>
            </div>
        </section>
    );

}