export function PopUpGallery() {
  const images = [
    {
      url: 'https://d64gsuwffb70l.cloudfront.net/690c55f62a1c1509e277d961_1762489656294_ee47ec24.webp',
      alt: 'Community shopping at pop-up sale'
    },
    {
      url: 'https://d64gsuwffb70l.cloudfront.net/690c55f62a1c1509e277d961_1762489657080_dc83df34.webp',
      alt: 'Shoppers browsing items'
    },
    {
      url: 'https://d64gsuwffb70l.cloudfront.net/690c55f62a1c1509e277d961_1762489658884_b9d03995.webp',
      alt: 'People examining goods'
    },
    {
      url: 'https://d64gsuwffb70l.cloudfront.net/690c55f62a1c1509e277d961_1762489660662_287c6bc5.webp',
      alt: 'Community at outdoor sale'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience Our Pop-Up Sales</h2>
      <p className="text-lg text-gray-600 mb-8">
        Join your neighbors at our mobile camper events. Browse rescued items, meet families reunited with their belongings, and support our mission in person.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <img 
              src={image.url} 
              alt={image.alt}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-blue-50 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us In Person</h3>
        <p className="text-gray-700">
          All sales happen on-site at our scheduled locations. Check our schedule below to find when we'll be in your area!
        </p>
      </div>
    </div>
  );
}
