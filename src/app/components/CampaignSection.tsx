import { Calendar, Gift, Percent, Tag } from 'lucide-react';

const campaigns = [
  {
    icon: Gift,
    title: '新規会員登録キャンペーン',
    period: '2026年2月1日 〜 2026年3月31日',
    description: '新規会員登録で500円分のクーポンプレゼント！',
    discount: '500円OFF',
    color: 'bg-purple-600',
    badge: '期間限定',
  },
  {
    icon: Percent,
    title: '春の引越しシーズン大感謝祭',
    period: '2026年3月1日 〜 2026年4月30日',
    description: '全商品が最大30%OFF！まとめ買いでさらにお得に！',
    discount: '最大30%OFF',
    color: 'bg-red-600',
    badge: '人気No.1',
  },
  {
    icon: Tag,
    title: 'まとめ買い割引キャンペーン',
    period: '常時開催中',
    description: '10,000円以上のお買い上げで送料無料＋5%OFF！',
    discount: '送料無料',
    color: 'bg-green-600',
    badge: '常時開催',
  },
];

const specialOffers = [
  {
    title: '引越しスタートパック',
    price: '¥4,980',
    originalPrice: '¥7,200',
    items: ['ダンボール大×10', 'ダンボール中×10', 'OPPテープ×3', '養生テープ×2', 'プチプチ×1'],
    popular: true,
  },
  {
    title: 'ファミリー引越しパック',
    price: '¥9,800',
    originalPrice: '¥14,000',
    items: ['ダンボール大×20', 'ダンボール中×20', 'OPPテープ×5', '養生テープ×3', 'プチプチ×2', 'ストレッチフィルム×1'],
    popular: false,
  },
  {
    title: '単身引越しパック',
    price: '¥2,980',
    originalPrice: '¥4,500',
    items: ['ダンボール大×5', 'ダンボール中×5', 'OPPテープ×2', '養生テープ×1'],
    popular: false,
  },
];

export function CampaignSection() {
  return (
    <section id="campaign" className="py-12 sm:py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            開催中のキャンペーン
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            今だけのお得なキャンペーンをお見逃しなく
          </p>
        </div>
        
        {/* キャンペーン一覧 */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {campaigns.map((campaign, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className={`${campaign.color} text-white p-6 relative`}>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                  {campaign.badge}
                </div>
                <campaign.icon className="w-12 h-12 mb-3" />
                <h3 className="text-xl font-bold mb-2">{campaign.title}</h3>
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <Calendar className="w-4 h-4" />
                  <span>{campaign.period}</span>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">{campaign.description}</p>
                <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-4 text-center mb-4">
                  <p className="text-2xl font-bold text-yellow-900">{campaign.discount}</p>
                </div>
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  詳細を見る
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* お得なセットプラン */}
        <div className="bg-white rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              お得なセットプラン
            </h3>
            <p className="text-gray-600">
              必要な資材がすべて揃った、お得なセット商品
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {specialOffers.map((offer, index) => (
              <div 
                key={index}
                className={`rounded-xl p-6 border-2 ${offer.popular ? 'border-red-600 bg-red-50 relative' : 'border-gray-200'}`}
              >
                {offer.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    最も人気
                  </div>
                )}
                
                <h4 className="text-xl font-bold mb-3 text-center">{offer.title}</h4>
                
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-400 line-through mb-1">{offer.originalPrice}</p>
                  <p className="text-3xl font-bold text-red-600">{offer.price}</p>
                  <p className="text-sm text-gray-600">（税込・送料無料）</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold mb-2 text-gray-700">セット内容：</p>
                  <ul className="space-y-1">
                    {offer.items.map((item, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  offer.popular 
                    ? 'bg-red-600 text-white hover:bg-red-700' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  今すぐ購入
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* カウントダウンタイマー風の演出 */}
        <div className="mt-12 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl p-8 sm:p-10 text-center">
          <p className="text-xl sm:text-2xl font-bold mb-4">
            🎉 春の大感謝祭は残り42日！
          </p>
          <p className="text-lg mb-6">
            このチャンスをお見逃しなく。今すぐご注文ください！
          </p>
          <button className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            キャンペーン商品を見る
            <span className="text-2xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
