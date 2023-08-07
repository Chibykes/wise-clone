import { GoChevronDown } from "react-icons/go";
import { MdCancel } from "react-icons/md";
import ConverterInput from "./ConverterInput";

export default function ConverterSection(){

    return (
        <section className="bg-[--color-lime] lg:px-0 px-5">

            <div className="lg:py-40 py-20 max-w-6xl mx-auto">
                <div className="lg:grid grid-cols-12 space-y-5">
                    <div className="col-span-6 space-y-8">
                        <h4 className="font-semibold lg:text-5xl text-4xl text-[--color-lime-dark]">
                            Save up to 9x when sending money abroad
                        </h4>
                        <p className="lg:text-xl text-lg text-[--color-lime-dark] max-w-sm">
                            Sending money shouldn&apos;t cost the earth, so we built Wise to save you money when you transfer and exchange internationally. We charge as little as possible: right now a tiny fee, eventually free.
                        </p>
                    </div>
                    <div className="lg:col-start-8 col-span-5">
                        <div className="
                            w-full h-full rounded-3xl pb-4
                            bg-white bg-[url(/img/media/tapestry-3.ceefa502.svg)] bg-no-repeat
                            bg-bottom bg-contain
                        ">
                            <div className="
                                lg:p-8 p-4 w-full h-full bg-white rounded-3xl
                                space-y-6
                            ">
                                <div className="space-y-1">
                                    <span className="text-sm text-neutral-700">You send exactly</span>
                                    <ConverterInput
                                        currency="GBP"
                                        flag="/img/flags/gbp.svg"
                                        value={1000}
                                    />
                                </div>

                                <div className="space-y-2">

                                    <div className="flex justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="
                                                grid place-content-center w-5 h-5 bg-neutral-200
                                                rounded-full font-semibold
                                            ">-</div>
                                            <span className="lg:text-lg text-sm text-[--color-black] font-semibold">6.38 GBP</span>
                                        </div>

                                        <div className="flex">
                                            <div className="">
                                                <span className="
                                                    lg:text-lg text-sm text-[--color-lime-dark] font-semibold 
                                                    underline underline-offset-4
                                                ">
                                                    Low cost transfer fee
                                                </span>
                                            </div>
                                            <GoChevronDown className="text-2xl" />
                                        </div>
                                    </div>

                                    <div className="flex justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="
                                                grid place-content-center w-5 h-5 bg-neutral-200
                                                rounded-full font-semibold
                                            ">=</div>
                                            <span className="lg:text-lg text-sm text-[--color-black] font-semibold">993.87 GBP</span>
                                        </div>

                                        <div className="flex">
                                            <div className="">
                                                <span className="
                                                    lg:text-lg text-sm text-neutral-500 relative
                                                ">
                                                    Total amount we’ll convert
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="
                                                grid place-content-center w-5 h-5 bg-neutral-200
                                                rounded-full font-semibold
                                            ">-</div>
                                            <span className="
                                                lg:text-lg text-sm text-[--color-lime-dark] font-semibold 
                                                underline underline-offset-4
                                            ">980.661 GBP</span>
                                        </div>

                                        <div className="flex">
                                            <div className="">
                                                <span className="
                                                    lg:text-lg text-sm text-[--color-lime-dark] font-semibold 
                                                    underline underline-offset-4
                                                ">
                                                    Guaranteed rate (41h)
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="space-y-1">
                                    <span className="text-sm text-neutral-700">Recipient gets exactly</span>
                                    <ConverterInput 
                                        currency="NGN"
                                        flag="/img/flags/ng.svg"
                                        value={982_386.91}
                                    />
                                </div>

                                <div className="p-4 flex gap-3 bg-neutral-200 rounded-2xl">
                                    <MdCancel className="text-5xl text-[#a8200d] shrink-0"/>
                                    <p className="text-base text-neutral-600">
                                        Sorry, we have stopped offering transfers to Nigeria. 
                                        Naira payments are no longer permitted by the Central Bank of Nigeria.
                                    </p>
                                </div>

                                <div className="flex justify-center items-center space-x-5">
                                    <div className="
                                        w-full px-6 py-3 text-[--color-lime-dark] font-semibold 
                                        bg-[--color-lime] hover:bg-[--color-lime-accent] rounded-full
                                        text-center
                                    ">
                                        Get started
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>

        </section>
    );

}