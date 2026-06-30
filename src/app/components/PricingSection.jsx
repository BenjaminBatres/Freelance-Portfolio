import React from 'react'
import SectionHeader from './ui/SectionHeader'
import PricingCard from './ui/PricingCard'

export default function PricingSection() {
    const pricingInfo = [
        {
            title: "Basic",
            subTitle: "$400-$800",
            description: "Transfer Ownership.",
            delivery: "5–7",
            perks: ["1–3 Pages (Home, About, Contact)", "Responsive Design", "Modern Website Redesign", "1 round of revisions", "Google Maps Integration", "Social Media Links", "Deployment Assistance"],
            bgColor: "#f3ffe3"
        },
        {
            title: "Small business website",
            subTitle: "$800-$1500",
            delivery: "7–14",
            description: 'Transfer Ownership.',
            perks: ["Everything in Basic","Up to 6 pages", "Custom UI Design", "Smooth Animations", "Image Optimization", "30 Days Support"],
            bgColor: "#fde4f9"
        },
        {
            title: "Hosting/maintenance",
            subTitle: "$50-$150/month",
            description: 'I host and maintain your site.',
            perks: ["Security and dependency updates","Ongoing website monitoring (uptime checks)", "Bug fixes and issue resolution", "Minor updates and content edits", "Performance optimization (keep it fast)"],
            bgColor: "#ffeeeb"
        },
    ]
  return (
    <section id='pricing' className='py-30 px-7.5 border-b-2'>
        <div className="max-w-4xl xl:max-w-7xl mx-auto">
            <SectionHeader title={"My Plans"} subTitle={"Get started without guessing the cost. "}/>

            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-10 '>
                {pricingInfo.map((info, id) => (
                    <PricingCard key={id} info={info} />
                ))}
            </div>
        </div>
    </section>
  )
}
