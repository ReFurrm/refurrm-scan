import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';

const items = [
  { id: 1, name: 'Vintage Wooden Desk', price: 125, image: 'https://d64gsuwffb70l.cloudfront.net/690c55f62a1c1509e277d961_1762487303895_89ba8199.webp', status: 'Available' },
  { id: 2, name: 'Mid-Century Dresser', price: 95, image: 'https://d64gsuwffb70l.cloudfront.net/690c55f62a1c1509e277d961_1762487305863_f1bd760f.webp', status: 'Available' },
  { id: 3, name: 'Oak Writing Table', price: 110, image: 'https://d64gsuwffb70l.cloudfront.net/690c55f62a1c1509e277d961_1762487307577_67ad4320.webp', status: 'Reserved' },
  { id: 4, name: 'Brass Table Lamp', price: 45, image: 'https://d64gsuwffb70l.cloudfront.net/690c55f62a1c1509e277d961_1762487308818_d56b5c64.webp', status: 'Available' },
  { id: 5, name: 'Vintage Floor Lamp', price: 65, image: 'https://d64gsuwffb70l.cloudfront.net/690c55f62a1c1509e277d961_1762487310563_47c44f8b.webp', status: 'Available' },
  { id: 6, name: 'Art Deco Lamp', price: 55, image: 'https://d64gsuwffb70l.cloudfront.net/690c55f62a1c1509e277d961_1762487312284_40768bc2.webp', status: 'Available' },
  { id: 7, name: 'Leather Armchair', price: 180, image: 'https://d64gsuwffb70l.cloudfront.net/690c55f62a1c1509e277d961_1762487313034_488feef9.webp', status: 'Available' },
  { id: 8, name: 'Vintage Lounge Chair', price: 150, image: 'https://d64gsuwffb70l.cloudfront.net/690c55f62a1c1509e277d961_1762487314764_a785410b.webp', status: 'Available' },
  { id: 9, name: 'Club Chair', price: 165, image: 'https://d64gsuwffb70l.cloudfront.net/690c55f62a1c1509e277d961_1762487316724_c0a0b140.webp', status: 'Sold' },
  { id: 10, name: 'Ornate Wall Mirror', price: 75, image: 'https://d64gsuwffb70l.cloudfront.net/690c55f62a1c1509e277d961_1762487317509_878cb2e1.webp', status: 'Available' },
  { id: 11, name: 'Vintage Frame Mirror', price: 85, image: 'https://d64gsuwffb70l.cloudfront.net/690c55f62a1c1509e277d961_1762487321522_d16dd3f6.webp', status: 'Available' },
  { id: 12, name: 'Decorative Mirror', price: 70, image: 'https://d64gsuwffb70l.cloudfront.net/690c55f62a1c1509e277d961_1762487323484_894a7ef6.webp', status: 'Available' },
];

export function FeaturedItems() {
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (id: number) => {
    setCart([...cart, id]);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Featured Items</h2>
        <Badge variant="outline">{items.filter(i => i.status === 'Available').length} items available</Badge>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">{item.name}</h3>
              <div className="flex justify-between items-center mb-3">
                <span className="text-2xl font-bold text-blue-600">${item.price}</span>
                <Badge variant={item.status === 'Available' ? 'default' : 'secondary'}>
                  {item.status}
                </Badge>
              </div>
              <Button 
                className="w-full" 
                disabled={item.status !== 'Available'}
                onClick={() => addToCart(item.id)}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                {cart.includes(item.id) ? 'Added' : 'Add to Cart'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
