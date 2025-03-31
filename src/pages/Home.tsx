import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { categories, products } from '../data';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>اکانتی‌ها | فروشگاه اکانت‌های دیجیتال</title>
        <meta name="description" content="خرید انواع اکانت‌های دیجیتال شامل اکانت بازی، اکانت استریمینگ و سرویس‌های VPN" />
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" dir="rtl">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            مرجع خرید و فروش اکانت‌های دیجیتال
          </h1>
          <p className="text-xl text-gray-600">
            اکانت مورد نظر خود را با بهترین قیمت خریداری کنید
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">دسته‌بندی‌ها</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/${category.id}`}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                <div className="text-sm text-gray-600">
                  {Object.values(category.subcategoryNames).join(' • ')}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">جدیدترین محصولات</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.slice(0, 6).map((product) => (
              <Link
                key={product.id}
                to={`/${product.category}/${product.subcategory}/${product.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-indigo-600">
                      {product.price.toLocaleString()} تومان
                    </span>
                    <span className="text-sm text-gray-500">
                      {categories.find(c => c.id === product.category)?.subcategoryNames[product.subcategory]}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}