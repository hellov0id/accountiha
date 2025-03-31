import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Clock, Star, Award, ChevronLeft, ShoppingBag } from 'lucide-react';
import { products, categories } from '../data';

export default function Product() {
  const { category: categoryId, subcategory, productId } = useParams();
  
  const product = products.find(p => 
    p.id === productId && 
    p.category === categoryId && 
    p.subcategory === subcategory
  );

  if (!product) return <Navigate to="/" replace />;

  const category = categories.find(c => c.id === product.category);
  const subcategoryName = category?.subcategoryNames[product.subcategory];

  return (
    <>
      <Helmet>
        <title>{`${product.title} | اکانتی‌ها`}</title>
        <meta name="description" content={product.seoDescription} />
        <link rel="canonical" href={`https://accountiha.ir/${product.category}/${product.subcategory}/${product.id}`} />
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" dir="rtl">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-4 space-x-reverse">
            <li>
              <Link to="/" className="text-gray-500 hover:text-gray-700">خانه</Link>
            </li>
            <li className="flex items-center">
              <ChevronLeft className="h-4 w-4 text-gray-500 mx-2" />
              <Link to={`/${product.category}`} className="text-gray-500 hover:text-gray-700">
                {category?.name}
              </Link>
            </li>
            <li className="flex items-center">
              <ChevronLeft className="h-4 w-4 text-gray-500 mx-2" />
              <Link to={`/${product.category}/${product.subcategory}`} className="text-gray-500 hover:text-gray-700">
                {subcategoryName}
              </Link>
            </li>
            <li className="flex items-center">
              <ChevronLeft className="h-4 w-4 text-gray-500 mx-2" />
              <span className="text-gray-900">{product.title}</span>
            </li>
          </ol>
        </nav>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute top-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                {subcategoryName}
              </div>
            </div>

            {/* Product Info */}
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
              
              {/* Seller Info */}
              <div className="flex items-center mb-6 pb-6 border-b border-gray-100">
                <ShoppingBag className="h-5 w-5 text-gray-400" />
                <div className="mr-3">
                  <div className="text-sm text-gray-500">فروشنده</div>
                  <div className="flex items-center">
                    <span className="font-medium">{product.seller.name}</span>
                    <div className="flex items-center mr-4">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="mr-1 text-sm">{product.seller.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500 mr-2">
                      ({product.seller.salesCount.toLocaleString()} فروش)
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>
              
              {/* Features */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">ویژگی‌ها</h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Award className="h-5 w-5 text-indigo-600 ml-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warranty and Delivery */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                  <div className="mr-3">
                    <div className="text-sm text-gray-500">گارانتی</div>
                    <div className="font-medium">{product.warranty}</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <div className="mr-3">
                    <div className="text-sm text-gray-500">زمان تحویل</div>
                    <div className="font-medium">{product.deliveryTime}</div>
                  </div>
                </div>
              </div>

              {/* Price and Buy Button */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-indigo-600">
                    {product.price.toLocaleString()} تومان
                  </span>
                </div>
                <a
                  href={product.telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-indigo-600 text-white text-center px-6 py-4 rounded-xl font-medium hover:bg-indigo-700 transition-colors"
                >
                  خرید از تلگرام
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}