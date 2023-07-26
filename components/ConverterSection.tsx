
export default function ConverterSection(){

    return (
        <section className="bg-[--color-lime]">

            <div className="py-40 max-w-6xl mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-6 space-y-8">
                        <h4 className="font-semibold text-5xl text-[--color-lime-dark]">
                            Save up to 9x when sending money abroad
                        </h4>
                        <p className="text-xl text-[--color-lime-dark] max-w-sm">
                            Sending money shouldn&apos;t cost the earth, so we built Wise to save you money when you transfer and exchange internationally. We charge as little as possible: right now a tiny fee, eventually free.
                        </p>
                    </div>
                    <div className="col-start-8 col-span-5">
                        <div className="
                            w-full h-full rounded-3xl pb-4
                            bg-white bg-[url(/img/media/tapestry-3.ceefa502.svg)] bg-no-repeat
                            bg-bottom bg-contain
                        ">
                            <div className="p-8 w-full h-full bg-white rounded-3xl">
                                <span className="text-sm text-neutral-700">You send exactly</span>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </section>
    );

}