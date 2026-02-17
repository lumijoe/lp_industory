import { Truck, Shield, CreditCard, HeadphonesIcon, Clock, PackageCheck } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: '15時までの注文で当日発送',
    description: '急な引越しでも安心。平日15時までのご注文で、その日のうちに発送いたします。',
    color: 'bg-red-100 text-red-600',
  },
  {
    icon: PackageCheck,
    title: '品質保証付き',
    description: '厳選した高品質な資材のみを取り扱い。万が一不良品があった場合は、即座に交換対応いたします。',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: CreditCard,
    title: '後払い対応可能',
    description: 'クレジットカード、銀行振込、代金引換、コンビニ後払いなど、多様な支払い方法に対応しています。',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: HeadphonesIcon,
    title: '専門スタッフがサポート',
    description: '引越し資材のプロがお客様の状況に応じて、最適な商品と数量をアドバイスいたします。',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Clock,
    title: '年中無休で営業',
    description: '土日祝日も休まず営業。お客様のご都合に合わせていつでもご注文いただけます。',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: Shield,
    title: '大量注文で更にお得',
    description: 'まとめ買いで更に割引。法人様や大規模な引越しにも対応いたします。',
    color: 'bg-pink-100 text-pink-600',
  },
];

const solutions = [
  {
    problem: '急な引越しで間に合わない',
    solution: '当日発送サービスで最短翌日お届け',
    detail: '15時までのご注文なら当日発送。主要都市部なら翌日午前中にお届け可能です。',
  },
  {
    problem: '必要な量が分からない',
    solution: '無料の引越し資材計算ツール',
    detail: '部屋の広さや荷物の量を入力するだけで、必要な資材の種類と数量を自動計算します。',
  },
  {
    problem: 'コストを抑えたい',
    solution: 'セット商品で最大30%OFF',
    detail: '人気商品をセットにした「引越しパック」なら、個別購入より大幅にお得です。',
  },
  {
    problem: '荷物が多くて大変',
    solution: 'プロ推奨の梱包マニュアル付き',
    detail: '効率的な梱包方法を解説したマニュアルを無料でお届け。作業時間を大幅に短縮できます。',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 特徴セクション */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              選ばれる6つの理由
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              お客様満足度95%以上を誇る、充実のサービス
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-5`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* 解決方法セクション */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              お困りごとを<span className="text-red-600">すべて解決</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              よくあるお悩みに、私たちの解決策をご提案します
            </p>
          </div>
          
          <div className="space-y-6">
            {solutions.map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 sm:p-8 border-l-4 border-red-600"
              >
                <div className="grid md:grid-cols-3 gap-4 sm:gap-6 items-center">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">お悩み</p>
                    <p className="text-lg font-semibold text-gray-800">{item.problem}</p>
                  </div>
                  <div>
                    <p className="text-sm text-red-600 mb-1">解決策</p>
                    <p className="text-xl font-bold text-red-600">{item.solution}</p>
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 実績セクション */}
        <div className="mt-16 bg-gray-900 text-white rounded-2xl p-8 sm:p-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-red-400 mb-2">50万+</p>
              <p className="text-gray-300">年間出荷実績</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-red-400 mb-2">95%</p>
              <p className="text-gray-300">お客様満足度</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-red-400 mb-2">120+</p>
              <p className="text-gray-300">取扱商品数</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-red-400 mb-2">翌日</p>
              <p className="text-gray-300">最短お届け日数</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
