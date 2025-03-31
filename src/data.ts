import { Product, Category } from './types';

export const categories: Category[] = [
  {
    id: 'games',
    name: 'اکانت‌های بازی',
    subcategories: ['steam', 'epic-games', 'playstation'],
    subcategoryNames: {
      'steam': 'استیم',
      'epic-games': 'اپیک گیمز',
      'playstation': 'پلی استیشن'
    }
  },
  {
    id: 'apps',
    name: 'نرم‌افزارها',
    subcategories: ['adobe', 'microsoft', 'autodesk'],
    subcategoryNames: {
      'adobe': 'ادوبی',
      'microsoft': 'مایکروسافت',
      'autodesk': 'اتودسک'
    }
  }
];

export const products: Product[] = [
  {
    id: 'steam-premium-1',
    title: 'اکانت استیم پریمیوم',
    description: 'اکانت استیم با بیش از 100 بازی و 2 سال سابقه، شامل بازی‌های محبوب و پرطرفدار. این اکانت دارای اعتبار کیف پول و امکان خرید بازی‌های جدید است.',
    price: 850000,
    category: 'games',
    subcategory: 'steam',
    image: 'https://images.unsplash.com/photo-1612287230517-fc951ff7298f',
    telegramLink: 'https://t.me/accountiha',
    features: [
      'بیش از 100 بازی',
      'سابقه 2 ساله',
      'دارای اعتبار کیف پول',
      'امکان تغییر ایمیل',
      'پشتیبانی از تمام بازی‌های آنلاین'
    ],
    warranty: '1 ماه گارانتی تعویض',
    deliveryTime: 'تحویل آنی',
    seller: {
      name: 'فروشگاه گیم سنتر',
      rating: 4.8,
      salesCount: 1240
    },
    seoDescription: 'خرید اکانت استیم پریمیوم با بیش از 100 بازی، گارانتی یک ماهه و تحویل آنی. دارای اعتبار کیف پول و امکان خرید بازی‌های جدید.'
  },
  {
    id: 'adobe-cc-1',
    title: 'اکانت ادوبی کریتیو کلود',
    description: 'دسترسی کامل به تمامی نرم‌افزارهای ادوبی کریتیو کلود شامل فتوشاپ، ایلوستریتور، پریمیر و افترافکت با یک سال اشتراک.',
    price: 1200000,
    category: 'apps',
    subcategory: 'adobe',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1',
    telegramLink: 'https://t.me/accountiha',
    features: [
      'دسترسی به تمام نرم‌افزارهای ادوبی',
      'یک سال اشتراک کامل',
      'آپدیت خودکار',
      'فضای ابری 100 گیگابایت',
      'پشتیبانی 24/7'
    ],
    warranty: '3 ماه گارانتی تعویض',
    deliveryTime: 'تحویل آنی',
    seller: {
      name: 'دیجیتال شاپ',
      rating: 4.9,
      salesCount: 2150
    },
    seoDescription: 'خرید اکانت ادوبی کریتیو کلود با دسترسی به تمام نرم‌افزارها، یک سال اشتراک کامل و فضای ابری 100 گیگابایت. گارانتی سه ماهه و تحویل آنی.'
  }
];