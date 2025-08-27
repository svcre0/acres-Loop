import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary-glow flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">ᗩᑕᖇᗴᔕ ᒪᗝᗝᑭ</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Strengthening local economies by connecting businesses with trusted nearby suppliers and service providers.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* For Businesses */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">For Businesses</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Find Vendors</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Group Buying</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Become a Vendor</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Business Directory</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Trust & Safety</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Report an Issue</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get in Touch</h3>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@localloop.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+27 (000) 123-4567</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>123 Menlyn Ave<br />Local Business District</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60">
              © 2024 Loop. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/80">
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;