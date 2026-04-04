import React from 'react'
import SectionHeader from './ui/SectionHeader'
import PricingCard from './ui/PricingCard'

export default function PricingSection() {
    const pricingInfo = [
        {
            title: "Basic",
            subTitle: "$200-$500",
            description: "Transfer Ownership.",
            perks: ["1–3 Pages (Home, About, Contact)", "Responsive Design", "Clean, modern UI", "1 round of revisions"],
            bgColor: "#f3ffe3"
        },
        {
            title: "Hosting/maintenance",
            subTitle: "$20-$100/month",
            description: 'I host and maintain your site.',
            perks: ["Ongoing website monitoring (uptime checks)", "Bug fixes and issue resolution", "Minor updates and content edits", "Performance optimization (keep it fast)"],
            bgColor: "#fde4f9"
        },
    ]
  return (
    <section id='pricing' className='py-30 px-6 border-b-2'>
        <div className="max-w-7xl mx-auto">
            <SectionHeader title={"My Plans"} subTitle={"Get started without guessing the cost. "}/>

            <div className='grid md:grid-cols-2 gap-10 max-w-200 mx-auto'>
                {pricingInfo.map((info, id) => (
                    <PricingCard key={id} info={info} />
                ))}
            </div>
        </div>
    </section>
  )
}
