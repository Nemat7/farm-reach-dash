import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Package } from "lucide-react";
import productsImage from "@/assets/products-vegetables.jpg";

const products = [
  { id: 1, name: "Organic Tomatoes", price: "$3.50/kg", seller: "Green Farm Co.", category: "Vegetables", stock: "Available" },
  { id: 2, name: "Fresh Corn", price: "$2.80/kg", seller: "Sunny Fields", category: "Grains", stock: "Available" },
  { id: 3, name: "Premium Wheat", price: "$1.50/kg", seller: "Harvest Ltd.", category: "Grains", stock: "Limited" },
  { id: 4, name: "Organic Lettuce", price: "$2.20/bunch", seller: "Green Farm Co.", category: "Vegetables", stock: "Available" },
  { id: 5, name: "Fresh Carrots", price: "$1.80/kg", seller: "Root Masters", category: "Vegetables", stock: "Available" },
  { id: 6, name: "Chicken Eggs", price: "$4.50/dozen", seller: "Happy Hens Farm", category: "Poultry", stock: "Available" },
];

export const Marketplace = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Agricultural Marketplace</h2>
          <p className="text-muted-foreground mt-1">Buy and sell fresh produce directly</p>
        </div>
        <Button size="lg" className="gap-2">
          <Package className="h-5 w-5" />
          List Your Product
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-medium transition-shadow group">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
              <img 
                src={productsImage} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <Badge 
                className="absolute top-3 right-3"
                variant={product.stock === "Available" ? "default" : "secondary"}
              >
                {product.stock}
              </Badge>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-foreground mb-1">{product.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{product.seller}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-primary">{product.price}</span>
                <Badge variant="outline">{product.category}</Badge>
              </div>
              <Button className="w-full gap-2" size="lg">
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
