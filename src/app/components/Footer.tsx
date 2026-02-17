import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* 会社情報 */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-400">引越し資材ストア</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              プロも認める高品質な引越し資材を、業界最安値でお届けします。当日発送で急な引越しにも対応いたします。
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* 商品カテゴリー */}
          <div>
            <h4 className="font-bold mb-4">商品カテゴリー</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">ダンボール</a></li>
              <li><a href="#" className="hover:text-white transition-colors">梱包用テープ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">養生資材</a></li>
              <li><a href="#" className="hover:text-white transition-colors">緩衝材</a></li>
              <li><a href="#" className="hover:text-white transition-colors">セット商品</a></li>
              <li><a href="#" className="hover:text-white transition-colors">その他資材</a></li>
            </ul>
          </div>
          
          {/* サポート */}
          <div>
            <h4 className="font-bold mb-4">サポート</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">よくある質問</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ご利用ガイド</a></li>
              <li><a href="#" className="hover:text-white transition-colors">配送について</a></li>
              <li><a href="#" className="hover:text-white transition-colors">返品・交換</a></li>
              <li><a href="#" className="hover:text-white transition-colors">お支払い方法</a></li>
              <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
            </ul>
          </div>
          
          {/* 企業情報 */}
          <div>
            <h4 className="font-bold mb-4">企業情報</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">会社概要</a></li>
              <li><a href="#" className="hover:text-white transition-colors">採用情報</a></li>
              <li><a href="#" className="hover:text-white transition-colors">プレスリリース</a></li>
              <li><a href="#" className="hover:text-white transition-colors">利用規約</a></li>
              <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
              <li><a href="#" className="hover:text-white transition-colors">特定商取引法</a></li>
            </ul>
          </div>
        </div>
        
        {/* 営業時間・お問い合わせ */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <div>
              <h5 className="font-semibold mb-2 text-red-400">営業時間</h5>
              <p className="text-gray-400">
                電話受付：平日 9:00〜18:00 / 土日祝 10:00〜17:00<br />
                メール・LINE：24時間受付（返信は営業時間内）
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-red-400">お問い合わせ</h5>
              <p className="text-gray-400">
                TEL: 0120-123-456（通話料無料）<br />
                Email: support@moving-supplies.jp
              </p>
            </div>
          </div>
        </div>
        
        {/* コピーライト */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2026 引越し資材ストア. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
