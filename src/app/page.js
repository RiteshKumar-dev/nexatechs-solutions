import BackgroundRippleEffectComponent from '@/components/BackgroundRippleEffectComponent';
import BrandMarquee from '@/components/BrandMarquee';
import ConsultationPopup from '@/components/ConsultationPopup';
import GetInTouch from '@/components/GetInTouch';
import ServicesSection from '@/components/ServicesSection';
import StrategicPathSection from '@/components/StrategicPathSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import TrustedBrandsSection from '@/components/TrustedBrandsSection';
import VideoSectionComponent from '@/components/VideoSectionComponent';

export default function Home() {
  return (
    <div>
      <BackgroundRippleEffectComponent />
      <BrandMarquee />
      <VideoSectionComponent />
      <TestimonialCarousel />
      <StrategicPathSection />
      <TrustedBrandsSection />
      <ServicesSection />
      <GetInTouch />
      {/* <ConsultationPopup /> */}
    </div>
  );
}
