import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900" dir="rtl">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-indigo-400" />
              <span className="mr-2 text-xl font-bold text-white">اکانتی‌ها</span>
            </div>
            <p className="mt-4 text-gray-300 text-sm">
              مرجع خرید و فروش اکانت‌های دیجیتال
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">تماس با ما</h3>
            <div className="space-y-2">
              <a href="mailto:info@accountiha.ir" className="flex items-center text-gray-300 hover:text-white">
                <Mail className="h-5 w-5 ml-2" />
                info@accountiha.ir
              </a>
              <a href="https://t.me/accountiha" className="flex items-center text-gray-300 hover:text-white">
                <Phone className="h-5 w-5 ml-2" />
                تلگرام: @accountiha
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">دسترسی سریع</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-white">درباره ما</Link>
              <Link to="/terms" className="block text-gray-300 hover:text-white">قوانین و مقررات</Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white">تماس با ما</Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} اکانتی‌ها - تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}