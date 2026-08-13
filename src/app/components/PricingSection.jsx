import React from 'react'
import SectionHeader from './ui/SectionHeader'
import PricingCard from './ui/PricingCard'

export default function PricingSection() {
    const pricingPlans = [
  {
    name: "Simple Website",
    description:
      "A professional website built to establish your online presence.",
    price: "$400",
    period: "one-time",
    features: [
      "Up to 3 pages",
      "Next.js + React",
      "Responsive design",
      "Mobile, tablet and desktop",
      "Contact form",
      "Basic SEO setup",
      "Website deployment",
      "Basic performance optimization",
      "2 revision rounds",
      "7 days of post-launch support",
    ],
    buttonText: "Get Started",
    href: "#contact",
  },
  {
    name: "Managed Website",
    description:
      "Let me handle the technical side of your website so you don't have to.",
    price: "$35",
    period: "per month",
    popular: true,
    features: [
      "Website hosting management",
      "Domain connection assistance",
      "SSL / HTTPS",
      "Website deployment",
      "Website monitoring",
      "Minor content updates",
      "Minor bug fixes",
      "Basic performance checks",
      "Up to 1 hour of maintenance/month",
      "Technical support",
    ],
    buttonText: "Keep My Website Running",
    href: "#contact",
  },
  {
    name: "One-Time Support",
    description:
      "Need a few changes after your website is live. No problem.",
    price: "$75",
    period: "per support package",
    features: [
      "Up to 2 hours of support",
      "Minor text updates",
      "Image replacements",
      "Small styling changes",
      "Minor layout adjustments",
      "Minor bug fixes",
      "Valid for 30 days",
    ],
    buttonText: "Request Support",
    href: "#contact",
    note: "Major changes and new features are quoted separately.",
  },
];
  return (
    <section id='pricing' className='py-30 px-7.5 border-b-2'>
        <div className="max-w-4xl xl:max-w-7xl mx-auto">
            <SectionHeader title={"My Plans"} subTitle={"Get started without guessing the cost. "}/>

            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch '>
                {pricingPlans.map((plan, id) => (
                    <PricingCard key={id} plan={plan} />
                ))}
            </div>
        </div>
    </section>
  )
}
