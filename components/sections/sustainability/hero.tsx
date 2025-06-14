import { SustainabilityHeroImage } from "@/assets"
import Image from "next/image"

export default function HeroSection() {
    return (
        <section className="aspect-[1442/609] w-full min-h-[330px] md:h-[609px] relative">
            <Image
                src={SustainabilityHeroImage}
                alt="sustainability image"
                fill
                className="-z-10 object-cover object-left"
            />
            <div className="container flex flex-col justify-end h-full pb-6 sm:pb-12 md:pb-32  space-y-7">
                <h1 className="title text-primary max-w-[543px]">AL Say's Commitment to Sustainability</h1>
                <p className="max-w-[543px] text-grey-800 body-md">
                    At All Says Trading Co., sustainability is integrated into every aspect of our operations.
                    We are committed to minimizing environmental impact, promoting social responsibility,
                    and supporting sustainable development across all sectors we serve.
                </p>
            </div>
        </section>
    )
}
