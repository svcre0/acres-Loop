import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, Clock, Package, TrendingDown, MapPin } from "lucide-react";

const GroupBuying = () => {
  const [groupOrders, setGroupOrders] = useState([]);

  useEffect(() => {
    fetch("https://acresloop.onrender.com/api/group-orders")
      .then((res) => res.json())
      .then(setGroupOrders)
      .catch(console.error);
  }, []);

  return (
    <section id="group-buying" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Save Through <span className="text-accent">Group Buying</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join forces with other local businesses to unlock wholesale prices and reduce costs through collective purchasing power.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 border-accent/20 hover:border-accent/40 transition-colors">
            <TrendingDown className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Lower Costs</h3>
            <p className="text-muted-foreground text-sm">
              Save 20-50% on bulk orders by pooling demand with nearby businesses
            </p>
          </Card>
          <Card className="text-center p-6 border-primary/20 hover:border-primary/40 transition-colors">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Build Community</h3>
            <p className="text-muted-foreground text-sm">
              Connect with like-minded business owners in your area
            </p>
          </Card>
          <Card className="text-center p-6 border-success/20 hover:border-success/40 transition-colors">
            <Package className="w-12 h-12 text-success mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Quality Assured</h3>
            <p className="text-muted-foreground text-sm">
              All group orders are organized by verified local businesses
            </p>
          </Card>
        </div>

        {/* Active Group Orders */}
        <div className="space-y-6 mb-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-foreground">Active Group Orders</h3>
            <Button variant="community">Start Group Order</Button>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {groupOrders.map((order) => (
              <Card key={order.id} className="hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <img src={order.image} alt={order.category} className="w-12 h-12 rounded object-contain" />
                      <div>
                        <Badge variant="secondary" className="text-xs mb-2">{order.category}</Badge>
                        <h4 className="font-semibold text-foreground leading-tight">{order.title}</h4>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{order.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1"><Users className="w-3 h-3" />{order.organizer}</div>
                    <div className="flex items-center gap-1"><MapPin className="w-3 h-3" />{order.location}</div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">
                        {order.currentParticipants}/{order.targetParticipants} businesses
                      </span>
                    </div>
                    <Progress
                      value={(order.currentParticipants / order.targetParticipants) * 100}
                      className="h-2"
                    />
                  </div>

                  <div className="bg-success/5 rounded-lg p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Group Price</span>
                      <span className="font-bold text-success text-lg">${order.pricePerUnit}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground line-through">Regular: ${order.originalPrice}</span>
                      <span className="font-medium text-success">Save {order.savings}%</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-warning">
                    <Clock className="w-4 h-4" />
                    {order.deadline}
                  </div>

                  <div className="space-y-2">
                    <Button variant="default" size="sm" className="w-full">Join Group Order</Button>
                    <Button variant="outline" size="sm" className="w-full">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4 pt-8">
          <h3 className="text-xl font-semibold text-foreground">Don't see what you need?</h3>
          <p className="text-muted-foreground">
            Start your own group buying campaign and invite other businesses to join
          </p>
          <Button variant="hero" size="lg">Create Group Order</Button>
        </div>
      </div>
    </section>
  );
};

export default GroupBuying;
