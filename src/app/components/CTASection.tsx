import { Phone, Mail, MessageCircle, ShoppingCart } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* メインCTA */}
        <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            今すぐご注文で<br className="sm:hidden" />当日発送！
          </h2>
          <p className="text-xl sm:text-2xl mb-8 opacity-90">
            15時までのご注文で、本日中に発送いたします
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-white text-red-600 px-10 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 transition-colors shadow-xl flex items-center gap-3 w-full sm:w-auto justify-center">
              <ShoppingCart className="w-6 h-6" />
              今すぐ注文する
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-white/10 transition-colors flex items-center gap-3 w-full sm:w-auto justify-center">
              <Phone className="w-6 h-6" />
              電話で相談する
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>送料無料（10,000円以上）</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>品質保証付き</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>最短翌日お届け</span>
            </div>
          </div>
        </div>
        
        {/* お問い合わせ方法 */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">お電話でのご注文</h3>
            <p className="text-3xl font-bold text-blue-600 mb-3">0120-123-456</p>
            <p className="text-sm text-gray-600 mb-4">
              平日 9:00〜18:00<br />
              土日祝 10:00〜17:00
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full">
              電話をかける
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 sm:p-8 text-center">
            <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">メールでのお問い合わせ</h3>
            <p className="text-lg font-semibold text-green-600 mb-3">support@moving-supplies.jp</p>
            <p className="text-sm text-gray-600 mb-4">
              24時間受付<br />
              原則24時間以内に返信
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors w-full">
              メールを送る
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 sm:p-8 text-center">
            <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">LINEで相談</h3>
            <p className="text-lg font-semibold text-purple-600 mb-3">@moving-supplies</p>
            <p className="text-sm text-gray-600 mb-4">
              10:00〜19:00<br />
              スタッフが直接対応
            </p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors w-full">
              LINEで相談
            </button>
          </div>
        </div>
        
        {/* よくある質問へのリンク */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            ご不明な点がございましたら、まずはよくある質問をご確認ください
          </p>
          <button className="text-red-600 font-semibold hover:underline text-lg">
            よくある質問を見る →
          </button>
        </div>
      </div>
    </section>
  );
}
