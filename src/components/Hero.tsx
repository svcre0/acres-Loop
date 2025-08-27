import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users, Handshake } from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-community-warm/10 to-local-highlight/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-success/10 text-success border border-success/20 rounded-full px-4 py-2 text-sm font-medium">
                <MapPin className="w-4 h-4" />
                Hyper Marketplace
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
               Connect  {" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                With  Top Vendors 
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                Connect with nearby suppliers, service providers, and logistics partners. 
                Build trust, reduce costs through group buying, and strengthen your community's economic ecosystem.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">1,000+</div>
                  <div className="text-sm text-muted-foreground">Local Businesses</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Handshake className="w-5 h-5 text-success" />
                <div>
                  <div className="font-semibold text-foreground">98%</div>
                  <div className="text-sm text-muted-foreground">Trust Rating</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                <div>
                  <div className="font-semibold text-foreground">50km</div>
                  <div className="text-sm text-muted-foreground">Average Distance</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Find Local Vendors
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="local" size="lg">
                Become a Vendor
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success" />
                Verified businesses only
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Secure payments
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-accent" />
                24/7 support
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Local business community connecting through LocalLoop marketplace"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating trust badge */}
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg p-4 border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-success to-trust-badge flex items-center justify-center">
                  <Handshake className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Trusted Network</div>
                  <div className="text-xs text-muted-foreground">1,000+ verified connections</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;