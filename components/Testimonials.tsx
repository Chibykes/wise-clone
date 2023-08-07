"use client";
import Image from "next/image";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import { useState } from 'react';


type Testimonial = {
    img: string,
    quote: string,
    bg: string,
    color: string,
    btnText: string,
}

const testimonials:Testimonial[] = [
    {
        img: "/img/media/expats-v3@2x.c2d88418.png",
        quote: "Wise has changed the game in terms of simplicity, and certainly been a lifesaver for expat living.",
        bg: "--color-lime",
        color: "--color-lime-dark",
        btnText: "Watch video"
    },
    {
        img: "/img/flags/uk.d10318b2.svg",
        quote: "I use Wise to pay a mortgage in a different country each month. Superb. That simple.",
        bg: "--color-lime-dark",
        color: "--color-lime",
        btnText: "Gerald on Trustpilot"
    },
    {
        img: "/img/flags/us.f6645a01.svg",
        quote: " The best money travel buddy! Wise makes finances easier to deal with instantly.",
        bg: "--bg-testimonial-1",
        color: "--color-black",
        btnText: "Gemma on Trustpilot"
    },
    {
        img: "/img/flags/dk.3b07d4dd.svg",
        quote: "Wise has been a lifesaver for me as a student in a foreign country.",
        bg: "--bg-testimonial-2",
        color: "--color-purple-dark",
        btnText: "Stefani on Trustpilot"
    },
]

export default function Testimonials(){

    const [currentIndex, setCurentIndex] = useState<number>(0);

    const nextTestimonial = () => {

        let testimonials:HTMLDivElement[] = Array.from(document.querySelectorAll('#testimonials > *'));
        if(currentIndex === testimonials.length - 1) return;

        testimonials[currentIndex].style.scale = "0";
        testimonials[currentIndex].style.opacity = "0";

        testimonials.forEach((el:HTMLDivElement) => {
            el.style.transform = `translateX(-${((currentIndex+1) * 100)}%)`;
        });

        setCurentIndex(n => n+1);

    }
    
    const previousTestimonial = () => {
        
        let testimonials:HTMLDivElement[] = Array.from(document.querySelectorAll('#testimonials > *'));
        if(currentIndex === 0) return;
    
        testimonials[currentIndex-1].style.scale = "1";
        testimonials[currentIndex-1].style.opacity = "1";
        testimonials.forEach((el:HTMLDivElement) => {
            el.style.transform = `translateX(-${((currentIndex-1) * 100)}%)`;
        });
        
        setCurentIndex(n => n-1);
    }

    return (
        <section className="overflow-hidden">

            <div className="max-w-6xl mx-auto py-20 lg:px-0 px-5">
                <div className="grid grid-cols-12 grid-row-2 lg:gap-0 gap-8 isolate">

                    <div className="lg:col-span-6 col-span-12 space-y-12 relative z-10">
                        <h1 className="
                            font-[--wise-sans] lg:text-8xl text-5xl
                        ">For people going<br />places</h1>
                    </div>

                    <div id="testimonials" className="
                        lg:col-start-8 lg:row-span-2 lg:col-span-5 col-span-10
                        flex flex-1 relative isolate
                    ">
                        {testimonials.map(({img, quote, bg, color, btnText}:Testimonial, index) => (
                            <div key={index} className="duration-500 w-full h-full lg:pr-8 pr-4 last:pr-0 flex-shrink-0">
                                <div className={`
                                    rounded-3xl w-full h-full flex flex-col gap-16 p-8 min-h-[600px]
                                `}
                                    data-tabindex={index}
                                    style={{
                                        background: `var(${bg})`
                                    }}
                                >

                                    <div className="relative">
                                        <Image 
                                            className="lg:w-36 lg:h-36 w-20 h-20"
                                            src={img}
                                            width={150}
                                            height={150}
                                            alt={btnText}
                                        />
                                    </div>

                                    <p 
                                        className={`text-3xl font-semibold`}
                                        style={{
                                            color: `var(${color})`
                                        }}
                                    >
                                        &ldquo;{quote}&rdquo;
                                    </p>

                                    <div className="flex items-center space-x-5 mt-auto">
                                        <div className={`
                                            lg:inline-block lg:w-auto block w-full text-center
                                            px-6 py-3 font-semibold 
                                            hover:bg-[#3a341c] rounded-full
                                        `}
                                            style={{
                                                background: `var(${color})`,
                                                color: `var(${bg})`,
                                            }}
                                        >
                                            {btnText}
                                        </div>
                                    </div>


                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="lg:row-start-2 lg:col-span-6 col-span-12 space-y-12 relative z-10">
                        <div className="flex gap-4 justify-start items-center">
                            <button className={`
                                lg:w-[78px] lg:h-[78px] w-14 h-14
                                grid place-content-center rounded-full
                                bg-neutral-200 hover:bg-neutral-300 text-neutral-700
                                disabled:bg-neutral-100 disabled:text-neutral-300
                            `}
                                onClick={previousTestimonial}
                                disabled={(currentIndex === 0) ? true : false}
                                >
                                <VscArrowLeft className="lg:text-5xl text-3xl" />
                            </button>
                            <button className={`
                                lg:w-[78px] lg:h-[78px] w-14 h-14
                                grid place-content-center rounded-full
                                bg-neutral-200 hover:bg-neutral-300 text-neutral-700
                                disabled:bg-neutral-100 disabled:text-neutral-300
                            `}
                                onClick={nextTestimonial}
                                disabled={(currentIndex === testimonials.length - 1) ? true : false}
                            >
                                <VscArrowRight className="lg:text-5xl text-3xl" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );

}