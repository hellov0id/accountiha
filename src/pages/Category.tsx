import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { categories, products } from '../data';

export default function Category() {
  const { category: categoryId, subcategory } = useParams();
  
  const category = categories.find(c => c.id === categoryId);
  
  if (!category) return <Navigate to="/" replace />;

  const filteredProducts = products.filter(p => 
    p.category === categoryId && 
    (!subcategory || p.subcategory === subcategory)
  );

  const currentSubcategoryName = subcategory ? category.subcategoryNames[subcategory] : '';

  return (
    <>
      <Helmet>
        <title>
          {subcategory 
            ? `${currentSubcategoryName} | ${category.name} | اکانتی‌ها`
            : `${category.name} | اکانتی‌ها`}
        </title>
        <meta 
          name="description" 
          content={`خرید انواع ${subcategory ? currentSubcategoryName : category.name} با بهترین قیمت و کیفیت در اکانتی‌ها`}
        />
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" dir="rtl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {subcategory ? currentSubcategoryName : category.name}
          </h1>
          <nav className="mt-4">
            <div className="flex flex-wrap gap-2">
              <Link
                to={`/${categoryId}`}
                className={`px-4 py-2 rounded-full ${
                  !subcategory
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                همه
              </Link>
              {category.subcategories.map(sub => (
                <Link
                  key={sub}
                  to={`/${categoryId}/${sub}`}
                  className={`px-4 py-2 rounded-full ${
                    subcategory === sub
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.subcategoryNames[sub]}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <Link
              key={product.id}
              to={`/${categoryId}/${product.subcategory}/${product.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-indigo-600">
                    {product.price.toLocaleString()} تومان
                  </span>
                  <span className="text-sm text-gray-500">
                    {category.subcategoryNames[product.subcategory]}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">محصولی در این دسته‌بندی یافت نشد</p>
          </div>
        )}
      </main>
    </>
  );
}