import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X,  Users, Shield, Zap } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            
            <span className="text-xl font-bold text-foreground">ᗩᑕᖇᗴᔕ ᒪᗝᗝᑭ</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#vendors" className="text-muted-foreground hover:text-foreground transition-colors">
              Find Vendors
            </a>
            <a href="#group-buying" className="text-muted-foreground hover:text-foreground transition-colors">
              Group Buying
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How it Works
            </a>
            <a href="#trust" className="text-muted-foreground hover:text-foreground transition-colors">
              Trust & Safety
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="hero">Join Loop</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#vendors" className="text-muted-foreground hover:text-foreground transition-colors">
                Find Vendors
              </a>
              <a href="#group-buying" className="text-muted-foreground hover:text-foreground transition-colors">
                Group Buying
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                How it Works
              </a>
              <a href="#trust" className="text-muted-foreground hover:text-foreground transition-colors">
                Trust & Safety
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost">Sign In</Button>
                <Button variant="hero">Join Loop</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
