import { Phone, Mail, ShoppingCart } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="bg-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>お電話でのご注文：0120-123-456（平日9:00-18:00）</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>support@moving-supplies.jp</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-red-600">引越し資材ストア</h1>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
            <a href="#products" className="hover:text-red-600 transition-colors">商品一覧</a>
            <a href="#features" className="hover:text-red-600 transition-colors">特徴</a>
            <a href="#campaign" className="hover:text-red-600 transition-colors">キャンペーン</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">お問い合わせ</a>
          </nav>
          
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-700 transition-colors">
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline">カート</span>
          </button>
        </div>
      </div>
    </header>
  );
}
