import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import ProblemSelector from "../components/ProblemSelector";
import KeyServices from "../components/KeyServices";
import OperatingPrinciples from "../components/OperatingPrinciples";
import DirectorMessage from "../components/DirectorMessage";
import Qualifications from "../components/Qualifications";
import WhyChooseUs from "../components/WhyChooseUs";
import Confidentiality from "../components/Confidentiality";
import CaseExamples from "../components/CaseExamples";
import Testimonials from "../components/Testimonials";
import Channels from "../components/Channels";
import ContactForm from "../components/ContactForm";
import PricingInfo from "../components/PricingInfo";
import FAQ from "../components/FAQ";
import Location from "../components/Location";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSelector />
        <KeyServices />
        <DirectorMessage />
        <Qualifications />
        <OperatingPrinciples />
        <WhyChooseUs />
        <Confidentiality />
        <CaseExamples />
        <Testimonials />
        <Channels />
        <ContactForm />
        <PricingInfo />
        <FAQ />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
