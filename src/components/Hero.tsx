
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background -z-10" />
      
      <div className="text-center space-y-6 max-w-3xl mx-auto animate-fade-up">
        <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full font-medium text-primary mb-6">
          De lekkerste tosti's voor jouw evenement
        </div>
        
        <div className="w-full max-w-xl mx-auto mb-8">
          <img 
            src="/lovable-uploads/57192971-da23-4294-acbf-0fb2612abdbb.png" 
            alt="Tistos service image" 
            className="w-full h-auto object-contain rounded-lg shadow-md" 
          />
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground">Unieke tosti's, klaar in een handomdraai</p>
        
        <Button size="lg" className="mt-8">
          Vraag een gratis proeverij aan
        </Button>
      </div>
      
      <div className="absolute bottom-8 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>;
};
