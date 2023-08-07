import Image from "next/image";

export default function MissionStatement(){

    return (
        <section className="bg-[--color-lime-dark] lg:py-40 py-20 lg:px-0 px-5">

            <div className="max-w-6xl mx-auto space-y-16">

                <div className="space-y-8">
                    <h1 className="lg:text-8xl text-5xl text-[--color-lime]">Meet money without borders</h1>
                    <div className="lg:grid grid-cols-12">
                        <div className="col-start-7 col-span-6">
                            <p className="text-[--color-accent] lg:text-2xl text-xl font-semibold">
                                Our dream is for people to live and work anywhere seamlessly. That means money without borders: moving it instantly, transparently, conveniently, and — eventually — for free.
                            </p>
                        </div>
                    </div>
                </div>

                <picture className="inline-block w-full">
                    <img
                        src="/img/media/mission-section-2.eedf08cb.jpg"
                        alt=""
                    />
                </picture>

                <div className="lg:flex justify-between items-center lg:space-x-5 space-y-5">
                    <div className="
                        text-[--color-accent] text-xl lg:w-[60%]
                    ">
                        The Wise account is the universal way for you to manage money internationally. It&apos;s made for the world. And it&apos;s built to save your money and time, so you can do more of the things you love.
                    </div>
                    <div className="
                        inline-block text-center
                        px-6 py-3 text-[--color-lime-dark] font-semibold 
                        bg-[--color-lime] hover:bg-[--color-lime-accent] rounded-full
                        border border-[--color-lime] hover:border-transparent
                        duration-200 shrink-0
                    ">
                        Learn about our mission
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 grid-cols-1 gap-16 items-center">

                    <div className="lg:col-span-6">
                        <picture className="inline-block w-full">
                            <img
                                src="/img/media/mission-section-1.f30247b0.jpg"
                                alt=""
                            />
                        </picture>
                    </div>

                    <div className="lg:col-span-5 space-y-8">
                        <p className="text-5xl text-[--color-lime] font-semibold">
                            Believe in an open world
                        </p>

                        <p className="text-[--color-accent] text-xl">
                            The world is richer when money has no borders. Your ideas fuel the Mission Roadmap that&apos;s getting us there — tell us what you want to see.
                        </p>

                        <div className="
                            inline-block
                            px-6 py-3 text-[--color-lime-dark] font-semibold 
                            bg-[--color-lime] hover:bg-[--color-lime-accent] rounded-full
                            border border-[--color-lime] hover:border-transparent
                            duration-200 shrink-0
                        ">
                            Check our Mission Roadmap
                        </div>
                    </div>


                </div>

            </div>

        </section>
    );

}