import HeroSection from "@/components/LandingPage/HeroSection"
import Features from "@/components/LandingPage/Features"
import FeedBack from "@/components/LandingPage/Feedback"
import Deals from "@/components/LandingPage/Deals"
import Services from "@/components/LandingPage/Services"
import BookNow from "@/components/LandingPage/BookNow"
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <main
    >
      <HeroSection />
      <Features />
      <FeedBack />
      <Deals />
      <Services />
      <BookNow />
    </main>
  )
}


