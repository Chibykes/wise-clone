"use client";

import Image from "next/image";
import Link from "next/link";
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';
import { useState, useEffect } from  'react';

export default function Header(){

    const [showNav, setShowNav] = useState<Boolean>(false);

    useEffect(() => {

        let showBtn = document.querySelector('#show-nav');
        let closeBtn = document.querySelector('#close-nav');
        let nav = document.querySelector('nav');

        if(!showNav){
            
            document.body.style.overflow = "auto";
            showBtn?.classList.replace('hide-menu-btn', 'show-menu-btn');
            closeBtn?.classList.replace('show-menu-btn', 'hide-menu-btn');
            if(nav) nav.style.left = "-100%";
            return;
            
        }
        
        document.body.style.overflow = "hidden";
        closeBtn?.classList.replace('hide-menu-btn', 'show-menu-btn');
        showBtn?.classList.replace('show-menu-btn', 'hide-menu-btn');
        if(nav) nav.style.left = "0%";    
        
        
    }, [showNav])

    return (
        <header 
            className="
                flex items-center gap-8
                lg:max-w-6xl mx-auto h-20
                lg:border-b-none border-b
                lg:px-0 px-5 overflow-hidden
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

            <nav className="
                flex lg:flex-row flex-col w-full lg:justify-between lg:items-center
                lg:relative absolute bottom-0 -left-full z-[99]
                lg:h-auto mobile-nav-height bg-white
                lg:py-0 py-5 lg:px-0 px-5 gap-5 duration-500
                overflow-hidden
            ">
                <div className="lg:px-0 lg:py-0 px-4 pt-4">
                    <div className="
                        inline-block
                        px-4 py-1 text-[15px] text-[--color-lime-dark] font-semibold 
                        bg-[--color-lime] hover:bg-[--color-lime-accent] rounded-full
                    ">
                        Personal
                    </div>
                </div>

                <div className="
                    flex lg:gap-0 gap-5 lg:flex-row flex-col 
                    justify-between items-center lg:ml-auto
                    h-full
                ">
                    <ul className="
                        flex lg:flex-row flex-col lg:gap-1 gap-4 items-center list-none
                        lg:w-auto w-full overflow-auto px-4 lg:px-0 lg:py-0
                    ">
                        {/* <li></li> */}
                        <li className="lg:w-auto w-full">
                            <Link
                                className="
                                    px-2 py-1 text-[15px] text-[--color-lime-dark] font-semibold 
                                    hover:bg-[--color-accent] rounded-full
                                "
                                href="#"
                            >Pricing</Link>
                        </li>
                        <li className="lg:w-auto w-full">
                            <Link
                                className="
                                    px-2 py-1 text-[15px] text-[--color-lime-dark] font-semibold 
                                    hover:bg-[--color-accent] rounded-full
                                "
                                href="#"
                            >Help</Link>
                        </li>
                        <li className="lg:w-auto w-full">
                            <div
                                className="
                                    flex justify-between lg:justify-center items-center gap-1
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

                    <ul className="
                        flex lg:flex-row flex-col lg:gap-1 gap-4 items-center list-none
                        lg:w-auto w-full mt-auto shrink-0 bg-white lg:sticky bottom-0
                    ">
                        <li className="lg:w-auto w-full">
                            <div className="
                                px-2 lg:py-1 py-3 text-center
                                text-[15px] text-[--color-lime-dark] font-semibold 
                                hover:bg-[--color-accent] rounded-full
                                lg:border-none border border-[--color-lime-dark]
                            ">
                                Login
                            </div>
                        </li>
                        <li className="lg:w-auto w-full">
                            <div className="
                                px-4 lg:py-1 py-3 text-center
                                text-[15px] text-[--color-lime-dark] font-semibold 
                                rounded-full border-none border border-[--color-lime-dark] 
                                bg-[--color-lime] hover:bg-[--color-lime-accent]
                            ">
                                Register
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="ml-auto lg:hidden flex items-center relative">
                <div className="
                    grid place-content-center w-10 h-10 ml-auto
                    rounded-full bg-neutral-200 shrink-0
                    absolute top-0 left-0 duration-200 show-menu-btn                
                "
                    onClick={() => setShowNav(true)}
                    id="show-nav"
                >
                    <IoMenuOutline className="text-xl text-[--color-lime-dark]"/>
                </div>

                <div className="
                    grid place-content-center w-10 h-10 ml-auto
                    rounded-full bg-neutral-200 shrink-0
                    hide-menu-btn duration-200
                "
                    onClick={() => setShowNav(false)}
                    id="close-nav"
                >
                    <IoCloseOutline className="text-xl text-[--color-lime-dark]"/>
                </div>
            </div>

        </header>
    );

}