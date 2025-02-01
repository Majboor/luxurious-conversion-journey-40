import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Pricing = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/");
    const startFormEvent = new CustomEvent('startForm');
    window.dispatchEvent(startFormEvent);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-primary-DEFAULT to-accent-DEFAULT text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Unbeatable Value
        </h2>
        <div className="bg-background rounded-2xl p-8 shadow-xl animate-fade-in">
          <div className="text-foreground">
            <h3 className="text-2xl font-bold mb-4">Complete Website Package</h3>
            <div className="text-5xl font-bold mb-8">
              $15 <span className="text-lg">only</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Professional Website",
                "Free Hosting",
                "Free Cybersecurity",
                "5 Free Revisions",
                "24/7 Support",
              ].map((feature, index) => (
                <li key={index} className="flex items-center justify-center space-x-2">
                  <Check className="w-5 h-5 text-secondary-DEFAULT" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button 
              onClick={handleGetStarted}
              className="bg-secondary-DEFAULT text-secondary-foreground hover:bg-secondary-DEFAULT/90 px-8 py-6 rounded-lg text-lg font-semibold"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};