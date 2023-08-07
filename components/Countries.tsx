import Image from "next/image";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si"

type Country = {
    name: string,
    flag: string,
}

export default function Countries(){

    let countries:Country[] = [
        { name: 'Andorra', flag: '/img/flags/ad.svg'},
        { name: 'Argentina', flag: '/img/flags/ars.svg'},
        { name: 'Australia', flag: '/img/flags/au.svg'},
        { name: 'Austria', flag: '/img/flags/at.svg'},
        { name: 'Bangladesh', flag: '/img/flags/bdt.svg'},
        { name: 'Belgium', flag: '/img/flags/be.svg'},
        { name: 'Botswana', flag: '/img/flags/bw.svg'},
        { name: 'Brazil', flag: '/img/flags/br.svg'},
        { name: 'Nigeria', flag: '/img/flags/ng.svg'},
    ]

    return (
        <section className="bg-[--color-accent] lg:py-40 py-20 lg:px-0 px-5 space-y-20">

            <div className="max-w-6xl mx-auto space-y-12">

                <div className="space-y-12">
                    <p className="text-5xl text-[--color-black] font-semibold">
                        Wise works nearly everywhere
                    </p>
                    <div className="
                        inline-block
                        px-4 py-1 text-[15px] text-[--color-lime-dark] font-semibold 
                        bg-[--color-lime] hover:bg-[--color-lime-accent] rounded-full
                    ">
                        Send money
                    </div>
                </div>

                <div className="grid lg:grid-cols-4 grid-cols-1 gap-y-10">

                    {countries.map(({flag, name}:Country) => (
                        <div key={name} className="space-y-5">
                            <div className="relative">
                                <Image 
                                    src={flag}
                                    width={50}
                                    height={50}
                                    alt=""
                                />
                            </div>
                            <span className="text-[--color-lime-dark] font-semibold inline-block underline underline-offset-4">
                                {name}
                            </span>
                        </div>
                    ))}
                    
                </div>
            </div>

            <footer className="max-w-6xl mx-auto space-y-8">
                <div className="
                    grid lg:grid-cols-4 grid-cols-1 lg:justify-items-start 
                    justify-items-center text-center gap-5
                ">
                    
                    <div className="space-y-5">
                        <p className="text-sm font-[500]">Company and team</p>

                        <div className="space-y-[.125rem]">
                            <p className="footer-links">Company and team</p>
                            <p className="footer-links">Security</p>
                            <p className="footer-links">Press</p>
                            <p className="footer-links">Careers</p>
                            <p className="footer-links">Service status</p>
                            <p className="footer-links">Investor relations</p>
                            <p className="footer-links">Mission roadmap</p>
                            <p className="footer-links">Affiliates and partnerships</p>
                            <p className="footer-links">Help centre</p>
                            <p className="footer-links">Reviews</p>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <p className="text-sm font-[500]">Wise Products</p>

                        <div className="space-y-[.125rem]">
                            <p className="footer-links">International money transfer</p>
                            <p className="footer-links">Wise account</p>
                            <p className="footer-links">International debit card</p>
                            <p className="footer-links">Travel money card</p>
                            <p className="footer-links">Large amount transfer</p>
                            <p className="footer-links">Receive money</p>
                            <p className="footer-links">Assets</p>
                            <p className="footer-links">Wise Platform</p>
                            <p className="footer-links">Wise Business</p>
                            <p className="footer-links">Business debit card</p>
                            <p className="footer-links">Mass payments</p>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <p className="text-sm font-[500]">Resources</p>

                        <div className="space-y-[.125rem]">
                            <p className="footer-links">News and blog</p>
                            <p className="footer-links">Currency converter</p>
                            <p className="footer-links">Swift/BIC codes</p>
                            <p className="footer-links">IBAN codes</p>
                            <p className="footer-links">Rate alerts</p>
                            <p className="footer-links">Compare exchange rates</p>
                            <p className="footer-links">Invoice generator</p>
                            <p className="footer-links">Business Calculators</p>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <p className="text-sm font-[500]">Follow us</p>

                        <div className="space-y-[.125rem] flex gap-4 items-center">
                            <SiFacebook className="text-xl text-neutral-700"/>
                            <SiTwitter className="text-xl text-neutral-700"/>
                            <SiInstagram className="text-xl text-neutral-700"/>
                        </div>
                    </div>
                </div>

                <hr className="border-neutral-300"/>

                <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">
                    <div className="col-span-1">
                        <div className="relative block mx-auto">
                            <Image 
                                className="block mx-auto"
                                width={100}
                                height={20}
                                src={"/img/wise.svg"}
                                alt="wise brand logo"
                                priority
                            />
                        </div>
                    </div>
                    <div className="
                        lg:col-span-3 grid lg:grid-cols-3 grid-cols-1 lg:justify-items-start 
                        justify-items-center text-center gap-1
                    ">
                        <p className="footer-links">Legal</p>
                        <p className="footer-links">Privacy policy</p>
                        <p className="footer-links">Cookie Policy</p>
                        <p className="footer-links">Complaints</p>
                        <p className="footer-links">Country site map</p>
                        <p className="footer-links">Modern slavery statement</p>
                    </div>
                </div>

                <div className="pt-4 space-y-2 max-w-3xl mx-auto">
                    <p className="text-sm text-center text-neutral-700">© Wise Payments Limited 2023</p>
                    <p className="text-sm text-center text-neutral-700">Wise is authorised by the Financial Conduct Authority under the Electronic Money Regulations 2011, Firm Reference <span className="underline underline-offset-4">900507</span>, for the issuing of electronic money.</p>
                    <p className="text-sm text-center text-neutral-700">All investment services are provided by the respective Wise Assets <span className="underline underline-offset-4">entity in your location</span>.</p>
                </div>
                
            </footer>

        </section>
    );

}