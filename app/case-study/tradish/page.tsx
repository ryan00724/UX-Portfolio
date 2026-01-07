'use client'

import { useState } from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowLeft, FiExternalLink, FiX } from 'react-icons/fi'
import { FaAppStore } from 'react-icons/fa'

export default function TradishCaseStudy() {
  const [isImageExpanded, setIsImageExpanded] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8"
          >
            <FiArrowLeft className="text-base" />
            <span>Back to Projects</span>
          </Link>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-[#FF6B35]">Tradish</span>
            <span className="text-black">: Re‑imagining cultural meal discovery</span>
          </h1>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="https://apps.apple.com/gb/app/tradish/id6747819690"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              <FaAppStore className="text-base" />
              View on App Store
            </a>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="container mx-auto max-w-4xl">
          <div 
            className="relative w-full h-auto rounded-lg overflow-hidden bg-white cursor-pointer"
            onClick={() => setIsImageExpanded(true)}
          >
            <Image
              src="/projects/Tradish/Tradish header.png"
              alt="Tradish Header"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Expanded Image Modal */}
      {isImageExpanded && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsImageExpanded(false)}
        >
          <button
            onClick={() => setIsImageExpanded(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close image"
          >
            <FiX className="w-8 h-8" />
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <Image
              src="/projects/Tradish/Tradish header.png"
              alt="Tradish Header - Expanded"
              width={1920}
              height={1080}
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            {/* Role & Context */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-black mb-4">Role & context</h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Type of project:</strong> Founder‑led, solo product & UX design for a food‑tech startup.</li>
                <li><strong>Platform:</strong> iOS (iPhone/iPad). Designed for native mobile with an eye toward web and watch OS expansion.</li>
                <li><strong>Timeline:</strong> 6 weeks for design & development (June – July 2025). Ongoing refinements through August 2025.</li>
                <li><strong>My role:</strong> I acted as product strategist, UX designer, and engineer.</li>
              </ul>
            </div>

            {/* Problem */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-black mb-4">Problem</h2>
              <p className="text-gray-700 mb-4">
                People who cook cultural dishes at home face three recurring issues:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li><strong>Finding authentic recipes:</strong> Recipes from diverse cultures are scattered across blogs and cookbooks. Searching through generic apps is time‑consuming.</li>
                <li><strong>Remembering ingredients and tracking nutrition:</strong> Home cooks often lose track of the ingredients, calories and cost of traditional meals.</li>
                <li><strong>Planning culturally rich meals for the week:</strong> Busy schedules make it hard to plan balanced cultural meals and manage shopping lists.</li>
              </ul>
              <p className="text-gray-700">
                Tradish set out to answer: <strong>How can we help home cooks quickly discover, plan and cook authentic ethnic meals without sacrificing convenience or health goals?</strong>
              </p>
            </div>

            {/* Who we designed for */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-black mb-4">Who we designed for</h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Primary user:</strong> Busy people who cook at home and want to reconnect with their cultural roots or explore global cuisines.</li>
                <li><strong>Secondary users:</strong> Diaspora communities preserving family recipes; health‑conscious cooks looking for variety beyond standard diet apps.</li>
                <li><strong>Out of scope:</strong> Professional chefs and users seeking a social food‑sharing network (no social feed in MVP).</li>
              </ul>
            </div>

            {/* Goals & Success Metrics */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-black mb-4">Goals & success metrics</h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Fast discovery:</strong> Let users find or generate a recipe in under 15 seconds.</li>
                <li><strong>Weekly planning:</strong> Enable creation of a week‑long meal plan within 3 minutes.</li>
                <li><strong>Health & culture balance:</strong> Provide nutritional data and cultural context for every recipe so users feel confident cooking dishes from new cuisines.</li>
                <li><strong>User satisfaction:</strong> Achieve a rating of ≥ 4/5 in App Store reviews.</li>
              </ul>
            </div>

            {/* Competitive Snapshot */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-black mb-4">Competitive snapshot</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">App (competitor)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Strengths</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Gaps where Tradish differentiates</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Yummly / Paprika</td>
                      <td className="border border-gray-300 px-4 py-2">Large recipe databases, shopping list integration</td>
                      <td className="border border-gray-300 px-4 py-2">Mostly western recipes; little cultural context; no AI‑generated ethnic recipes.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">MyFitnessPal</td>
                      <td className="border border-gray-300 px-4 py-2">Comprehensive nutrition tracking</td>
                      <td className="border border-gray-300 px-4 py-2">Focus on calorie counts rather than cultural exploration; no recipe discovery.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Tasty</td>
                      <td className="border border-gray-300 px-4 py-2">Beautiful step‑by‑step videos</td>
                      <td className="border border-gray-300 px-4 py-2">Entertainment‑driven; limited meal planning features; not tailored to individual diets.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">EatOkra</td>
                      <td className="border border-gray-300 px-4 py-2">Directory of Black‑owned restaurants</td>
                      <td className="border border-gray-300 px-4 py-2">Focuses on dining out rather than home cooking.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 mt-4">
                <strong>Insight:</strong> There was an opportunity to blend personalised recipe generation, cultural storytelling, and nutrition tracking into one streamlined experience.
              </p>
            </div>

            {/* Defining the MVP */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-black mb-4">Defining the MVP</h2>
              <p className="text-gray-700 mb-4">
                Based on time and resource constraints, we scoped the following features for the initial release (v1.0–1.1):
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li><strong>AI‑powered recipe search & generation</strong> – quickly find or create personalised ethnic recipes using preferences and available ingredients.</li>
                <li><strong>Personalised meal planning</strong> – organise weekly meals tailored to user goals, culture and taste.</li>
                <li><strong>Nutrition tracking</strong> – display calories and macronutrients for each recipe.</li>
                <li><strong>Cultural exploration</strong> – share stories and traditions behind dishes.</li>
                <li><strong>Suggested upgrades (subscription)</strong> – unlimited AI generations and full access to the cultural food database through Tradish Plus.</li>
              </ul>
              <p className="text-gray-700">
                Features intentionally postponed for future releases included grocery delivery, social sharing, advanced diet filters and real‑time grocery pricing. A simple shopping list was flagged as "coming soon".
              </p>
            </div>

            {/* Key User Flows */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-black mb-4">Key user flows</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-3">1. Discover & log a meal</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Onboard:</strong> Users set dietary preferences and cultural interests.</li>
                  <li><strong>Home ("Let's cook!"):</strong> The app presents AI‑generated recipe suggestions and a quick search bar.</li>
                  <li><strong>Select recipe:</strong> Tapping a suggestion reveals a detailed recipe card with prep time, cultural origin and nutritional data.</li>
                  <li><strong>Cook & log:</strong> Users can cook using guided steps and then log the meal to track calories and save it for later.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-3">2. Plan your week</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Meal plan:</strong> Users open the Meal Prep Plan screen.</li>
                  <li><strong>Add meals:</strong> They add recipes (AI‑generated or previously saved) to each day.</li>
                  <li><strong>Summary:</strong> A summary view shows total weekly calories, cost and prep time along with a breakdown across breakfast, lunch and dinner (calorie distribution defaults to 25/35/35/5 for snacks, as introduced in v1.1.1).</li>
                  <li><strong>Shop smarter:</strong> A shopping list (introduced in v1.1.1 with interactive check‑off) lets users compile ingredients and check off items as they shop.</li>
                </ul>
              </div>
            </div>

            {/* Design Decisions */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-black mb-4">Design decisions</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-2">Fast discovery over perfect detail</h3>
                <p className="text-gray-700">
                  The home screen emphasises AI‑generated suggestions and a prominent search bar so users can start cooking right away. We accepted that some recommendations might not be perfect, but speed encourages daily use.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-2">Culture + context, not just calories</h3>
                <p className="text-gray-700">
                  Each recipe card includes a brief cultural backstory along with prep time, calories and macros. This positions Tradish as an educational companion rather than a utilitarian food log.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-2">Visual grouping for cognitive ease</h3>
                <p className="text-gray-700">
                  In the meal planner, calories and cost are grouped by meal (breakfast, lunch, dinner, snacks) with a simple pie‑chart‑like distribution; this helps users quickly assess their weekly balance.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-2">Modular navigation</h3>
                <p className="text-gray-700">
                  Navigation is limited to five tabs (Home, Log, Discover, Saved, Profile). This keeps the information architecture shallow so users never get lost.
                </p>
              </div>
            </div>

            {/* Final UI Highlights */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-black mb-4">Final UI highlights</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-2">Home & discovery</h3>
                <p className="text-gray-700">
                  The home screen features playful illustrations and AI‑powered recommendations with clear call‑to‑action buttons. A global search field invites users to search by dish, ingredient, or culture. Beneath, cultural tags allow easy filtering.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-2">Recipe detail</h3>
                <p className="text-gray-700">
                  Cards use large photos and simple ingredient lists. Nutrition information is shown alongside a short story about the dish's origin, encouraging users to appreciate cultural heritage while cooking.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-2">Meal planner</h3>
                <p className="text-gray-700">
                  A calendar‑style layout lets users drag and drop recipes into a week view. A summary at the top displays total calories, estimated cost and total prep time per day. In version 1.1.1 we added Smart Meal Distribution where the app automatically spreads calories across breakfast, lunch, dinner and snacks, and interactive shopping lists with persistent state so items stay checked off.
                </p>
              </div>
            </div>

            {/* Outcomes */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-black mb-4">Outcomes</h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>User rating:</strong> The initial release achieved a 4/5 rating on the App Store (based on the first review).</li>
                <li><strong>Positive feedback:</strong> Users appreciated the cultural context and ease of recipe discovery.</li>
                <li><strong>Areas for improvement:</strong> Some feedback noted limited recipe variety and the absence of social features. Onboarding and recipe management were improved in versions 1.0.2 and 1.1.2.</li>
              </ul>
            </div>

            {/* What I'd do next */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-black mb-4">What I'd do next</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Expand recipe database & AI training:</strong> Increase the variety of cultures represented and refine the recommendation model based on user feedback.</li>
                <li><strong>Integrate shopping & budget tools:</strong> Connect with grocery services or allow users to compare prices across stores.</li>
                <li><strong>Introduce community features:</strong> Enable users to share their own family recipes and discover dishes from neighbours.</li>
                <li><strong>Accessibility & localisation:</strong> Support more languages and accessibility features to make Tradish inclusive worldwide.</li>
              </ul>
            </div>

            {/* Reflection */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-black mb-4">Reflection</h2>
              <p className="text-gray-700">
                Reversing the design narrative for Tradish highlighted the importance of clearly articulating why each decision was made and how constraints shaped the MVP. By grounding the story in user problems and the value of cultural discovery, the case study reads like a coherent design process rather than a list of features.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

