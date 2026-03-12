import HeroSlide from "../slides/HeroSlide";
import LitteratureEngageeSlide from "../slides/LitteratureEngageeSlide";
import ContexteHistoriqueSlide from "../slides/ContexteHistoriqueSlide";
import PresentationOeuvreSlide from "../slides/PresentationOeuvreSlide";
import ResumeRomanSlide from "../slides/ResumeRomanSlide";
import OeuvreEngageeSlide from "../slides/OeuvreEngageeSlide";
import ProcedesLitterairesSlide from "../slides/ProcedesLitterairesSlide";
import MessageHugoSlide from "../slides/MessageHugoSlide";
import ImpactOeuvreSlide from "../slides/ImpactOeuvreSlide";
import ConclusionSlide from "../slides/ConclusionSlide";
import SourcesSlide from "../slides/SourcesSlide";

interface SlidesProps {
  onStartQuiz: () => void;
}

function Slides({ onStartQuiz }: SlidesProps) {

  const slides = [
    HeroSlide,
    LitteratureEngageeSlide,
    ContexteHistoriqueSlide,
    PresentationOeuvreSlide,
    ResumeRomanSlide,
    OeuvreEngageeSlide,
    ProcedesLitterairesSlide,
    MessageHugoSlide,
    ImpactOeuvreSlide,
    ConclusionSlide,
    SourcesSlide
  ];

return (
  <div className="relative">
    
    <button
      onClick={onStartQuiz}
      className="fixed top-8 right-8 z-50 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
    >
      Start Quiz
    </button>

    {slides.map((SlideComponent, index) => (
      <SlideComponent key={index} />
    ))}

    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-gray-600 text-sm">
      Scroll to navigate slides
    </div>

  </div>
);
}

export default Slides;