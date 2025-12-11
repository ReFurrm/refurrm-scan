export default function ShopSection() {
  // INSTRUCTIONS FOR UPDATING SHOP ITEMS:
  // 1. Visit https://refurrm.org/collections/all to see all products
  // 2. Update the products array below with new items
  // 3. For each product, update: name, price, image URL, and shopUrl
  // 4. To get image URLs: right-click product image on refurrm.org > "Copy image address"
  // 5. To get shop URLs: copy the product page URL from refurrm.org
  
  const products = [
    { 
      id: 1, 
      name: 'Funny Conversation Hoodie', 
      price: 34.99, 
      image: 'https://refurrm.org/cdn/shop/files/12103250050883980861_2048.jpg?v=1761556346&width=500',
      impact: 'Supports family reunions',
      shopUrl: 'https://refurrm.org/products/funny-conversation-hoodie-for-everyday-comfort'
    },
    { 
      id: 2, 
      name: 'Funny Unisex Hooded Sweatshirt', 
      price: 34.99, 
      image: 'https://refurrm.org/cdn/shop/files/12010388158657944552_2048.jpg?v=1761556121&width=500',
      impact: 'Supports family reunions',
      shopUrl: 'https://refurrm.org/products/funny-unisex-hooded-sweatshirt-with-humor'
    },
    { 
      id: 3, 
      name: 'Men\'s NUBLEND® Hoodie', 
      price: 37.99, 
      image: 'https://refurrm.org/cdn/shop/files/12221559242006525623_2048.jpg?v=1761918597&width=500',
      impact: 'Supports family reunions',
      shopUrl: 'https://refurrm.org/products/mens-nublend%C2%AE-hooded-sweatshirt'
    },
    { 
      id: 4, 
      name: 'Men\'s NUBLEND® Hoodie (Alt)', 
      price: 37.99, 
      image: 'https://refurrm.org/cdn/shop/files/12221559242006525623_2048_07ad4924-fcf4-4bb9-bf91-75e890497492.jpg?v=1761918631&width=500',
      impact: 'Supports family reunions',
      shopUrl: 'https://refurrm.org/products/mens-nublend%C2%AE-hooded-sweatshirt-1'
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Poppins'] font-semibold text-5xl text-[#1C2E25] text-center mb-4">
          ReFURRM Shop
        </h2>
        <p className="font-['Open_Sans'] text-xl text-[#315E47] text-center mb-12">
          Every purchase supports our mission to reunite families with their treasures
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-[#F6F4EE] rounded-2xl overflow-hidden border-2 border-[#C8BFAE] hover:shadow-xl transition-shadow">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-['Poppins'] font-semibold text-xl text-[#1C2E25] mb-2">{product.name}</h3>
                <p className="font-['Open_Sans'] text-sm text-[#50E3E3] mb-4">{product.impact}</p>
                <div className="flex justify-between items-center">
                  <span className="font-['Poppins'] font-semibold text-2xl text-[#315E47]">${product.price}</span>
                  <a 
                    href={product.shopUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#315E47] text-[#F6F4EE] px-6 py-2 rounded-full hover:bg-[#50E3E3] hover:text-[#1C2E25] transition-colors inline-block"
                  >
                    Buy
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a 
            href="https://refurrm.org/collections/all" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#50E3E3] text-[#1C2E25] px-8 py-4 rounded-full font-['Poppins'] font-semibold text-lg hover:bg-[#315E47] hover:text-[#F6F4EE] transition-colors"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
