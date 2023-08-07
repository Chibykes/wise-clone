"use client";

import Image from 'next/image';
import { GoChevronDown } from 'react-icons/go';

type Props = {
    currency: string,
    flag: string,
    value: number
}


export default function ConverterInput({ currency, flag, value }:Props){
    return (
        <div className="
            flex w-full focus:outline outline-black
            border border-neutral-500 rounded-xl
            overflow-hidden
        ">
            <input className="
                focus:outline-none w-full bg-transparent p-5 pr-0
                text-2xl
            "
                onChange={(e) => e.target.value = e.target.value}
                value={value?.toLocaleString()}
            />
            <div className="flex shrink-0 p-5 gap-2 justify-center items-center">
                <div className="relative">
                    <Image 
                        className='w-5 h-5 lg:w-7 lg:h-7'
                        src={flag}
                        width={30}
                        height={30}
                        alt={currency}
                    />
                </div>
                <p className='font-bold text-xl text-[--color-lime-dark]'>{currency}</p>
                <GoChevronDown className="text-2xl" />
            </div>
        </div>
    );
}