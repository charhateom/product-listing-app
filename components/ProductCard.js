import React from 'react';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      {product.onSale && (
        <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          SALE
        </div>
      )}

      <div className="relative h-60 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-30">
          <Link href={`/products/${product.id}`}>
            <button className="bg-white text-gray-800 px-4 py-2 rounded-full font-medium shadow-md hover:bg-gray-100 transition-colors">
              Quick View
            </button>
          </Link>
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 truncate">
            {product.name}
          </h3>
          <div className="flex items-center bg-blue-50 px-2 py-1 rounded-full">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-sm font-medium">{product.rating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div>
            {product.originalPrice ? (
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-sm line-through text-gray-500">
                  ${product.originalPrice.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          
          <Link href={`/products/${product.id}`}>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;