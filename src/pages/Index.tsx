import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VendorDirectory from "@/components/VendorDirectory";
import GroupBuying from "@/components/GroupBuying";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <VendorDirectory />
        <GroupBuying />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
