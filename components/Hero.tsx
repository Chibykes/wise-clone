
export default function Hero(){

    return (
        <section className="max-w-6xl mx-auto">

            <div className="flex flex-col justify-center items-center pt-20 pb-10 lg:px-0 px-5 space-y-8">
                <h1 className="text-center text-[---color-black] lg:text-8xl text-5xl font-bold">
                    Save when you spend <br />
                    worldwide
                </h1>
                <p className="max-w-md text-neutral-700 text-center text-xl">
                    Get your money moving internationally.
                    Save up to 9x when you send with Wise.
                </p>

                <div className="flex lg:flex-row flex-col justify-center items-center gap-5 w-full">
                    <div className="
                        lg:inline-block lg:w-auto block w-full text-center
                        px-6 py-3 text-[--color-lime-dark] font-semibold 
                        bg-[--color-lime] hover:bg-[--color-lime-accent] rounded-full
                    ">
                        Send money now
                    </div>
                    <div className="
                        lg:inline-block lg:w-auto block w-full text-center
                        px-6 py-3 text-[--color-lime-dark] font-semibold 
                        bg-transparent hover:bg-[--color-lime-accent] rounded-full
                        border border-[--color-limie-dark] hover:border-transparent
                        duration-200
                    ">
                        Open an account
                    </div>
                </div>

                <div className="pt-5">
                    <video 
                        className="max-h-[500px]"
                        poster="/img/media/poster.ff25224b.jpg" 
                        autoPlay
                        loop 
                        muted 
                        playsInline 
                    >
                        <source 
                            src="/video/3d-globe-72a5cb0edcbe31cf385aa34558b1c435.webm"
                            type="video/webm; codecs=av01.0.12M.08.0.110.01.01.01.0"
                        />
                        <source 
                            src="/video/3d-globe-cfe618f7f706583422789cd9773a062a.mp4"
                            type="video/mp4"
                        />
                    
                    </video>
                </div>
            </div>

        </section>
    );

}