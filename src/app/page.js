import BackgroundRippleEffectComponent from '@/components/BackgroundRippleEffectComponent';
import BrandMarquee from '@/components/BrandMarquee';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import VideoSectionComponent from '@/components/VideoSectionComponent';

export default function Home() {
  return (
    <div>
      <BackgroundRippleEffectComponent />
      <BrandMarquee />
      <VideoSectionComponent />
      <TestimonialCarousel />
    </div>
  );
}
