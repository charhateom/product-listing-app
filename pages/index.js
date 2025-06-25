export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Hero Section */}
        <div className="relative h-64 bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
          <div className="text-center z-10 px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Discover Amazing Products
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Explore our premium collection of tech gadgets and accessories
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Welcome to Our Store
              </h2>
              <p className="text-gray-600 mb-6">
                We offer the latest technology products with premium quality and 
                competitive prices. Start browsing our collection to find your perfect match.
              </p>
              <a 
                href="/products" 
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all hover:from-blue-700 hover:to-indigo-700"
              >
                Browse Products
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: 'M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4',
                title: 'Premium Quality',
                description: 'All products meet our strict quality standards'
              },
              {
                icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
                title: 'Secure Payment',
                description: '100% secure payment methods'
              },
              {
                icon: 'M5 13l4 4L19 7',
                title: 'Easy Returns',
                description: '30-day return policy'
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl border border-gray-100 hover:border-blue-200 transition-all hover:shadow-sm"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <svg 
                    className="w-6 h-6 text-blue-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d={feature.icon} 
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}