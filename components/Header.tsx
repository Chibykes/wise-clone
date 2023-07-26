import Image from "next/image";
import Link from "next/link";

export default function Header(){

    return (
        <header 
            className="
                flex items-center gap-8
                lg:max-w-6xl mx-auto h-20
                lg:border-b-none border-b
            "
        >
            <div className="relative inline-block">
                <Image 
                    className=""
                    width={100}
                    height={20}
                    src={"/img/wise.svg"}
                    alt="wise brand logo"
                    priority
                />
            </div>

            <nav className="flex w-full justify-between items-center">
                <div className="">
                    <div className="
                        px-4 py-1 text-[15px] text-[--color-lime-dark] font-semibold 
                        bg-[--color-lime] hover:bg-[--color-lime-accent] rounded-full
                    ">
                        Personal
                    </div>
                </div>

                <div className="flex justify-between items-center ml-auto">
                    <ul className="flex items-center list-none">
                        <li></li>
                        <li className="">
                            <Link
                                className="
                                    px-2 py-1 text-[15px] text-[--color-lime-dark] font-semibold 
                                    hover:bg-[--color-accent] rounded-full
                                "
                                href="#"
                            >Pricing</Link>
                        </li>
                        <li className="">
                            <Link
                                className="
                                    px-2 py-1 text-[15px] text-[--color-lime-dark] font-semibold 
                                    hover:bg-[--color-accent] rounded-full
                                "
                                href="#"
                            >Help</Link>
                        </li>
                        <li className="">
                            <div
                                className="
                                    flex justify-center items-center gap-1
                                    px-2 py-1 text-[15px] text-[--color-lime-dark] font-semibold
                                "
                            >

                                <div className="relative">
                                    <Image 
                                        className="rounded-full bg-[url(/img/media/rectangle_fallback.png)]"
                                        width={28}
                                        height={28}
                                        src={"/img/flags/ngn.svg"}
                                        alt="country language"
                                        priority
                                    />
                                </div>
                                <span className="text-[15px] text-[--color-lime-dark] font-semibold">EN</span>
                            </div>
                        </li>
                    </ul>

                    <ul className="flex gap-1 items-center list-none">
                        <li>
                            <div className="
                                px-2 py-1 text-[15px] text-[--color-lime-dark] font-semibold 
                                hover:bg-[--color-accent] rounded-full
                                lg:border-none border border-[--color-lime-dark]
                            ">
                                Login
                            </div>
                        </li>
                        <li>
                            <div className="
                                px-4 py-1 text-[15px] text-[--color-lime-dark] font-semibold 
                                rounded-full lg:border-none border border-[--color-lime-dark] 
                                bg-[--color-lime] hover:bg-[--color-lime-accent]
                            ">
                                Register
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

        </header>
    );

}