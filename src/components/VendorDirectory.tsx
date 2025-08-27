import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Search, MapPin, Star, Shield, Filter } from "lucide-react";

const VendorDirectory = () => {
  const [vendors, setVendors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const categories = [
    "All",
    "Farming & Produce",
    "Transportation",
    "Packaging",
    "Industrial IT Services",
    "Manufacturing",
    "Clothing Bales",
  ];

  // Fetch vendors when search or category changes
  useEffect(() => {
    const fetchVendors = async () => {
      setLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams();
        if (searchTerm) params.append("search", searchTerm);
        if (selectedCategory && selectedCategory !== "All") {
          params.append("category", selectedCategory);
        }

        const response = await fetch(`https://acresloop.onrender.com/api/vendors?${params.toString()}`);
        if (!response.ok) throw new Error("Failed to fetch vendors");
        const data = await response.json();
        setVendors(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVendors();
  }, [searchTerm, selectedCategory]);

  return (
    <section id="vendors" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Discover Local <span className="text-primary">Vendors</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find verified suppliers and service providers in your area.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="space-y-6 mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search vendors, services, or products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "local"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Vendor Grid */}
        {loading ? (
          <p className="text-center text-muted-foreground">Loading vendors...</p>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error}</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(searchTerm || selectedCategory !== "All" ? vendors : vendors.slice(0, 3)).map(
              (vendor) => (
                <Card
                  key={vendor.id}
                  className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20"
                >
                  <CardHeader className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={vendor.image}
                          alt={`${vendor.name} logo`}
                          className="w-10 h-10 object-contain rounded-md"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {vendor.name}
                            </h3>
                            {vendor.verified && (
                              <Shield className="w-4 h-4 text-success" />
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {vendor.category}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-warning fill-current" />
                        <span className="font-medium text-sm">
                          {vendor.rating}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          ({vendor.reviewCount})
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {vendor.location}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {vendor.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {vendor.badges.map((badge) => (
                        <Badge
                          key={badge}
                          variant="secondary"
                          className="text-xs"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="default" size="sm" className="flex-1">
                        View Profile
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Contact
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        )}

        {/* Load More Button (optional UI element) */}
        <div className="text-center pt-8">
          <Button variant="outline" size="lg">
            Load More Vendors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VendorDirectory;
