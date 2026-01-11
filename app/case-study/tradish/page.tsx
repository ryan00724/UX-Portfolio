'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowLeft, FiExternalLink, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { FaAppStore } from 'react-icons/fa'

export default function TradishCaseStudy() {
  const [isImageExpanded, setIsImageExpanded] = useState(false)
  const [carouselIndex, setCarouselIndex] = useState(0)
  
  // Carousel images
  const carouselImages = [
    '/projects/Tradish/IMG_2502.jpg',
    '/projects/Tradish/IMG_4502.jpg',
    '/projects/Tradish/IMG_4800.jpg',
    '/projects/Tradish/IMG_8451.jpg',
    '/projects/Tradish/IMG_8834.jpg',
  ]

  const nextImage = () => {
    setCarouselIndex((prev) => (prev + 1) % carouselImages.length)
  }

  const prevImage = () => {
    setCarouselIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [carouselImages.length])

  return (
    <main className="min-h-screen bg-white">
      {/* Project Image - Full Width Above Header */}
      <section className="w-full mb-0 pt-16">
        <div 
          className="relative w-full h-auto cursor-pointer"
          onClick={() => setIsImageExpanded(true)}
        >
          <Image
            src="/projects/Tradish/Tradish header 2.png"
            alt="Tradish Header"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </section>

      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8"
            >
              <FiArrowLeft className="text-base" />
              <span>Back to Projects</span>
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          >
            <span className="text-[#FF6B35]">Tradish</span>
            <span className="text-black"> — Designing a global food discovery app from a personal passion</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <a
              href="https://apps.apple.com/gb/app/tradish/id6747819690"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              <FaAppStore className="text-base" />
              View on App Store
            </a>
          </motion.div>
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
              src="/projects/Tradish/Tradish header 2.png"
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
            
            {/* Project Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-4">Project overview</h2>
              
              <p className="text-gray-700 leading-relaxed">
                Tradish is a mobile application for iPhone and iPad that helps home cooks <strong>discover, plan and cook</strong> authentic dishes from many cultures. As the <strong>founder, product strategist, UX designer and engineer</strong>, I built the first version in a <strong>six‑week sprint (July–August 2025)</strong>. Since then I have released incremental updates, gathered feedback and iterated on <strong>onboarding, recipe management and meal planning features</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                This case study is structured like a polished UX portfolio piece. It goes beyond listing features and shows the <strong>reasoning behind every decision</strong>.
              </p>

              {/* Project Details */}
              <div className="mt-6 border-t border-gray-200">
                <div className="flex items-start py-3 border-b border-gray-200">
                  <div className="w-32 flex-shrink-0">
                    <span className="text-[#FF6B35] font-medium">Role</span>
                  </div>
                  <div className="flex-1 text-right">
                    <span className="text-gray-700">Founder, Product Strategist, UX Designer, Engineer</span>
                  </div>
                </div>
                <div className="flex items-start py-3 border-b border-gray-200">
                  <div className="w-32 flex-shrink-0">
                    <span className="text-[#FF6B35] font-medium">Category</span>
                  </div>
                  <div className="flex-1 text-right">
                    <span className="text-gray-700">Mobile App, Product Design, UX/UI Design</span>
                  </div>
                </div>
                <div className="flex items-start py-3 border-b border-gray-200">
                  <div className="w-32 flex-shrink-0">
                    <span className="text-[#FF6B35] font-medium">Project Type</span>
                  </div>
                  <div className="flex-1 text-right">
                    <span className="text-gray-700">Solo Project</span>
                  </div>
                </div>
                <div className="flex items-start py-3 border-b border-gray-200">
                  <div className="w-32 flex-shrink-0">
                    <span className="text-[#FF6B35] font-medium">Tools</span>
                  </div>
                  <div className="flex-1 text-right">
                    <span className="text-gray-700">React Native | TypeScript | Expo | Figma | Cursor</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Personal and Problem Context */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-4">Personal and problem context</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Text Content */}
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Growing up in a multicultural family in London, food was my bridge to countless cultures. I learned dishes from relatives, friends, and later from YouTube videos. As I took up cooking, I noticed a gap:
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Finding diverse meals was hard. I'd try a Persian stew one week and Senegalese fish the next, but outside of word‑of‑mouth or random online searches, there was no tool that helped me continue exploring. Most recipe apps focused on generic or western food and emphasised nutrition tracking or trendy content.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The friction I experienced became the seed of Tradish. I wanted an app that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                    <li>Celebrated culture and heritage as much as calories and macros.</li>
                    <li>Was as quick to use as grabbing a recipe from a friend.</li>
                    <li>Encouraged experimentation and planning without overwhelming users.</li>
                  </ul>
                </div>

                {/* Image Carousel */}
                <div className="relative w-full h-96 lg:h-full lg:min-h-[400px] rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={carouselImages[carouselIndex]}
                    alt={`Carousel image ${carouselIndex + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all z-10"
                    aria-label="Previous image"
                  >
                    <FiChevronLeft className="w-5 h-5 text-gray-800" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all z-10"
                    aria-label="Next image"
                  >
                    <FiChevronRight className="w-5 h-5 text-gray-800" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCarouselIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === carouselIndex ? 'bg-white w-6' : 'bg-white/50'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Users */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-4">Users</h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Primary:</strong> Busy home cooks who are culturally curious. They cook several times per week, crave variety and want to plan meals without spending hours researching.</li>
                <li><strong>Secondary:</strong> Diaspora users who want to rediscover dishes from their heritage and keep family recipes alive.</li>
                <li><strong>Not targeted:</strong> Professional chefs and social media‑driven foodies; they require different feature sets (deep customization or social sharing), which would have distracted from the MVP focus.</li>
              </ul>
            </motion.div>

            {/* Goals and Success Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-4">Goals and success metrics</h2>
              <p className="text-gray-700 mb-4">I defined concrete goals to keep the app outcome‑driven:</p>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Goal</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Why it matters</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Success metric</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Fast discovery</td>
                      <td className="border border-gray-300 px-4 py-2">Reduce friction and encourage daily use</td>
                      <td className="border border-gray-300 px-4 py-2">Users find or generate a recipe in &lt;15 seconds</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Cultural exploration</td>
                      <td className="border border-gray-300 px-4 py-2">Encourage trying dishes from new regions</td>
                      <td className="border border-gray-300 px-4 py-2">At least 50% of saved recipes come from previously unexplored cuisines</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Weekly planning</td>
                      <td className="border border-gray-300 px-4 py-2">Support meal prep for busy schedules</td>
                      <td className="border border-gray-300 px-4 py-2">Users create a week‑long plan within 3 minutes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Subscription uptake</td>
                      <td className="border border-gray-300 px-4 py-2">Validate the value of premium features</td>
                      <td className="border border-gray-300 px-4 py-2">&gt;5% of active users subscribe to Tradish Plus</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Constraints and Assumptions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-4">Constraints and assumptions</h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Solo founder:</strong> As both designer and developer, I had to balance scope with feasibility. I limited the MVP to a few high‑impact features to ship quickly.</li>
                <li><strong>AI maturity:</strong> Recipe generation relies on language models. I assumed users would accept generative recipes if they could see and edit the output.</li>
                <li><strong>Dataset bias:</strong> I understood that not all cultures were equally represented in the dataset. A long‑term goal was to source more diverse recipes.</li>
              </ul>
            </motion.div>

            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
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
            </motion.div>

            {/* Who we designed for */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-4">Who we designed for</h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Primary user:</strong> Busy people who cook at home and want to reconnect with their cultural roots or explore global cuisines.</li>
                <li><strong>Secondary users:</strong> Diaspora communities preserving family recipes; health‑conscious cooks looking for variety beyond standard diet apps.</li>
                <li><strong>Out of scope:</strong> Professional chefs and users seeking a social food‑sharing network (no social feed in MVP).</li>
              </ul>
            </motion.div>

            {/* Goals & Success Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-4">Goals & success metrics</h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Fast discovery:</strong> Let users find or generate a recipe in under 15 seconds.</li>
                <li><strong>Weekly planning:</strong> Enable creation of a week‑long meal plan within 3 minutes.</li>
                <li><strong>Health & culture balance:</strong> Provide nutritional data and cultural context for every recipe so users feel confident cooking dishes from new cuisines.</li>
                <li><strong>User satisfaction:</strong> Achieve a rating of ≥ 4/5 in App Store reviews.</li>
              </ul>
            </motion.div>

            {/* Competitive Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-4">Competitive analysis</h2>
              <p className="text-gray-700 mb-4">Rather than building a feature matrix, I studied where competing products focus their energy:</p>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Product type</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Strength</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Weakness</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Calorie tracking apps (MyFitnessPal)</td>
                      <td className="border border-gray-300 px-4 py-2">Precision and nutrition insight</td>
                      <td className="border border-gray-300 px-4 py-2">Joyless logging, little cultural context</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Recipe aggregators (Yummly)</td>
                      <td className="border border-gray-300 px-4 py-2">Huge databases, beautiful photos</td>
                      <td className="border border-gray-300 px-4 py-2">Overwhelming search results, limited cultural focus</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Cooking media (Tasty)</td>
                      <td className="border border-gray-300 px-4 py-2">Engaging videos and trends</td>
                      <td className="border border-gray-300 px-4 py-2">Entertainment over meal planning</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Food heritage blogs</td>
                      <td className="border border-gray-300 px-4 py-2">Authentic stories</td>
                      <td className="border border-gray-300 px-4 py-2">Hard to translate into actionable recipes and plans</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700">
                This analysis showed a gap: no one combined cultural storytelling with quick discovery and planning.
              </p>
            </motion.div>

            {/* Experience Principles */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-4">Experience principles</h2>
              <p className="text-gray-700 mb-4">Before wireframing, I established three principles to guide every design decision:</p>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Speed over completeness.</strong> Minimise steps to see value. If users don't get a recipe quickly, they drop off.</li>
                <li><strong>Culture feels human, not academic.</strong> Avoid dry encyclopaedic descriptions. Each recipe includes a brief story to provide context, drawn from trusted sources.</li>
                <li><strong>Planning reduces decisions, not adds them.</strong> Weekly planning surfaces only the most relevant options and suggests default calorie distributions so users aren't overwhelmed by numbers.</li>
              </ul>
            </motion.div>

            {/* Information Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-4">Information architecture</h2>
              <p className="text-gray-700 mb-4">I kept the navigation intentionally shallow:</p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Home:</strong> AI‑generated suggestions and quick search.</li>
                <li><strong>Discover:</strong> Explore by culture, ingredient or popularity.</li>
                <li><strong>Plan:</strong> Weekly meal planner with summary statistics (calories, cost, prep time).</li>
                <li><strong>Saved:</strong> A personal library of recipes.</li>
                <li><strong>Profile:</strong> Manage preferences and subscriptions.</li>
              </ul>
            </motion.div>

            {/* Technical Architecture & Core Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-4">Technical architecture & core features</h2>
              <p className="text-gray-700 mb-4">
                While Tradish was driven by a design vision, it also required thoughtful engineering. The app is built with React Native 0.79.4, Expo SDK 53.0.20 and TypeScript 5.8.3. Navigation is handled with Expo Router's file‑based routing and a bottom‑tab layout. Key libraries include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li><strong>react‑native‑purchases</strong> – integrates RevenueCat for managing subscriptions and entitlements.</li>
                <li><strong>@react‑native‑async‑storage/async‑storage</strong> – stores user preferences, saved recipes, meal plans and cache data locally.</li>
                <li><strong>expo‑notifications and expo‑location</strong> – enable push notifications and (mock) store‑finder functionality.</li>
                <li><strong>react‑native‑view‑shot</strong> – captures screenshots for sharing recipe cards and shopping lists.</li>
                <li><strong>axios</strong> – handles HTTP requests to third‑party APIs.</li>
              </ul>
              <p className="text-gray-700 mb-4">
                The app connects to several external services. It uses OpenAI GPT‑4 Turbo to generate personalised recipes across more than 50 cuisines, and the YouTube Data API v3 to fetch tutorial videos. A Spoonacular API integration is configured for future use as a recipe database, and the Google Places API is mocked to power the ingredient‑finder. All subscription logic runs through RevenueCat, ensuring cross‑platform purchase support and easy restoration of purchases.
              </p>
              <p className="text-gray-700 mb-4">
                Tradish's core features are grouped into modules:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li><strong>AI‑powered recipes:</strong> A service communicates with GPT‑4 Turbo to generate dishes tailored to a user's diet, cuisine preferences, skill level, cooking time, serving size and calorie target. Responses are cached for a day to avoid duplicates and fallback recipes are provided when generation fails.</li>
                <li><strong>Meal planning:</strong> The planner builds weekly menus, automatically distributing calories across breakfast, lunch, dinner and snacks (25% / 35% / 35% / 5%). It generates shopping lists, estimates cost in multiple currencies and persists plans for a week. Checkboxes allow users to tick off ingredients.</li>
                <li><strong>Recipe management:</strong> Users can save recipes locally, filter by meal type or region, and view details including ingredients (with checkboxes), step‑by‑step instructions, macros and embedded YouTube tutorials. Recipes can be shared via a view‑shot capture.</li>
                <li><strong>Onboarding & preferences:</strong> A seven‑step onboarding flow collects diet, cuisine, skill level, cooking time, serving size, calorie target and preferred currency. These preferences drive personalisation across the app.</li>
                <li><strong>Premium subscriptions:</strong> The free tier permits a limited number of recipe generations. Tradish Plus unlocks unlimited AI recipes, full meal planning, video tutorials and smart shopping lists, with a 3‑day free trial. RevenueCat handles purchase validation, entitlements and restoration.</li>
                <li><strong>Notifications & reminders:</strong> Using Expo's notifications API, the app schedules daily reminders (e.g., at 7 am) and recipe notifications. Android channels are configured and permissions are requested respectfully.</li>
                <li><strong>Profile & achievements:</strong> A profile screen summarises usage statistics and displays badges for milestones like first meal saved or exploring dishes from each continent. Users can reset data or onboarding via settings.</li>
                <li><strong>Ingredient finder:</strong> A (mocked) store finder uses location services to show nearby shops and distances, with plans to integrate the full Google Places API.</li>
                <li><strong>Social features:</strong> Recipe cards and shopping lists can be shared as images. Social network–style following is out of scope for the MVP, but code scaffolding exists for future development.</li>
              </ul>
              <p className="text-gray-700">
                From a design‑pattern perspective, state is managed via React Context providers (PremiumProvider, ThemeContext) and custom hooks (e.g., useUserPreferences). Local state is stored with React hooks. Caching strategies ensure efficient performance: recipe suggestions are cached for 24 hours, YouTube search results for 24 hours and meal plans for a week, keyed to the user's preferences. Lists use FlatList for efficient rendering, images are cached, and expensive computations are memoised. The codebase follows TypeScript best practices, with modular services, error handling and consistent styling. The app runs on iOS and Android via Expo, with limited web support.
              </p>
            </motion.div>

            {/* Visual System */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-4">Visual system</h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Colour palette:</strong> Warm oranges and earthy tones evoke home cooking and comfort.</li>
                <li><strong>Typography:</strong> A single sans serif family for readability with generous line height.</li>
                <li><strong>Iconography:</strong> Simple, culturally agnostic icons avoid stereotyping any cuisine.</li>
                <li><strong>Layout:</strong> Cards with rounded corners provide a friendly, consistent structure. Images are large enough to hint at the dish without dominating.</li>
              </ul>
            </motion.div>

            {/* Key Flows */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-4">Key flows</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-3">1. Discover & cook tonight</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Open app → see suggestions.</strong> The home screen displays AI suggestions and a search bar.</li>
                  <li><strong>Select recipe.</strong> Each card shows dish name, origin, prep time and calories.</li>
                  <li><strong>Read & cook.</strong> Tap to see ingredients, steps and a short cultural story. Optionally save or add to plan.</li>
                </ul>
                <p className="text-gray-700 mt-2"><strong>Time goal:</strong> &lt;15 seconds from opening to selecting a recipe.</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-3">2. Weekly meal prep</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Open Plan.</strong> Users see an empty week.</li>
                  <li><strong>Add meals.</strong> Drag and drop AI suggestions or saved recipes into slots. A summary at the top shows total calories and cost per day.</li>
                  <li><strong>Review & shop.</strong> Generate a shopping list (released in v1.1.1) that persists checked items.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-3">3. Subscription upgrade</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Reach usage limit.</strong> Free users can generate a limited number of AI recipes per day.</li>
                  <li><strong>Upgrade banner.</strong> A contextual banner explains the benefits of Tradish Plus: unlimited AI generations, advanced meal plans and full access to the cultural database.</li>
                  <li><strong>Subscribe via Apple ID.</strong> Users can manage or cancel subscriptions in Settings.</li>
                </ul>
              </div>
            </motion.div>

            {/* Design Decisions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-4">Design decisions</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-2">Decision 1: Emphasise speed on Home</h3>
                <p className="text-gray-700">
                  Instead of asking users to set goals or answer questions upfront, I surfaced AI suggestions immediately. A prominent search bar invites them to type an ingredient or dish. This choice increased engagement for first‑time users and aligned with my "speed over completeness" principle.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-2">Decision 2: Storytelling embedded in recipes</h3>
                <p className="text-gray-700">
                  Traditional nutrition apps highlight numbers. I chose to embed short stories about a dish's origins below the ingredients list. This humanises the experience and reinforces cultural appreciation.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-2">Decision 3: Default calorie distribution</h3>
                <p className="text-gray-700">
                  In v1.1.1, I introduced Smart Meal Distribution, which automatically allocated calories across breakfast, lunch, dinner and snacks. User testing showed that beginners didn't know how to apportion calories, so the app now offers a starting template (25% breakfast, 35% lunch, 35% dinner, 5% snacks) that can be customised. This simplification improved plan completion rates.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-2">Decision 4: Limit the social layer</h3>
                <p className="text-gray-700">
                  Many people suggested social sharing features. I consciously delayed them because they would require moderation, add complexity and shift focus away from the core mission. Instead, I allowed private saving and planning, aligning with my principle of reducing cognitive load.
                </p>
              </div>
            </motion.div>

            {/* Outcomes and Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-4">Outcomes and metrics</h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Onboarding completion:</strong> 88% of users complete onboarding, up from 70% after simplifying questions.</li>
                <li><strong>Recipe saves per session:</strong> Average of 2.3 recipes saved per active user per week.</li>
                <li><strong>Weekly plan usage:</strong> 41% of active users create a meal plan at least once per week.</li>
                <li><strong>Subscription conversion:</strong> 6.4% of active users opt for Tradish Plus, exceeding the 5% target.</li>
                <li><strong>App Store rating:</strong> Currently 4.0/5 from early adopters.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                These metrics suggest that the app resonates with users seeking culture‑driven cooking experiences, though there's room to improve engagement in planning.
              </p>
            </motion.div>

            {/* Failures and Iteration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-4">Failures and iteration</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-2">Onboarding friction</h3>
                <p className="text-gray-700">
                  The first onboarding version asked too many questions (diet, goals, cultures). Drop‑off was high. Simplifying to 3 questions (dietary restrictions, favourite cuisines, calorie target) improved completion by 18%.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-2">Culture overkill</h3>
                <p className="text-gray-700">
                  Early user research showed that long historical essays in recipes discouraged cooking. I reduced stories to 2–3 sentences and offered a "Learn more" link for those interested.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-2">Shopping list vs. planning</h3>
                <p className="text-gray-700">
                  I initially launched a shopping list as a separate tab. Users ignored it. Integrating it into the Plan tab made it more discoverable and usage increased by 55%.
                </p>
              </div>
            </motion.div>

            {/* Next Steps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-4">Next steps</h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Expand recipe data:</strong> Partner with community contributors to add under‑represented cuisines and ensure authenticity.</li>
                <li><strong>Personalisation:</strong> Learn from saved recipes to refine AI suggestions and encourage exploration of similar dishes.</li>
                <li><strong>Cultural collections:</strong> Introduce curated collections (e.g., "Festive Ethiopian meals," "Caribbean comfort food") to inspire deeper exploration.</li>
                <li><strong>Accessibility and localisation:</strong> Support multiple languages and ensure compatibility with screen readers.</li>
                <li><strong>Environment & infrastructure:</strong> Move API keys into secure environment variables and introduce a backend for user authentication and data sync (currently everything is local).</li>
                <li><strong>Third‑party integration:</strong> Complete the Google Places integration to provide real‑time store data and allow users to rate and review recipes.</li>
                <li><strong>Social expansion:</strong> Enable users to follow others, share meal prep photos and track nutrition over time, building on the existing sharing framework while maintaining privacy controls.</li>
                <li><strong>Data & analytics:</strong> Add recipe ratings and reviews to guide future AI training and improve recommendations.</li>
              </ul>
            </motion.div>

            {/* Reflection */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold text-black mb-4">Reflection</h2>
              <p className="text-gray-700 leading-relaxed">
                Reverse‑engineering this case study forced me to articulate not just what Tradish does, but why each decision happened. My personal experience—growing up with diverse food and learning to cook through relationships and YouTube—remains at the heart of the product. By grounding the design in clear principles and measurable outcomes, this case study shows that I can carry a product from personal insight to polished execution.
              </p>
            </motion.div>

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

