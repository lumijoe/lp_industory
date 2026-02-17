import { AlertCircle, Package, DollarSign, Clock } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: '急な引越しで資材が間に合わない',
    description: '引越し日が迫っているのに、資材の手配が間に合わず焦っている...',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Package,
    title: 'どれくらいの量が必要か分からない',
    description: '初めての引越しで、ダンボールやテープの必要量が予想できない...',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: DollarSign,
    title: '引越し費用をできるだけ抑えたい',
    description: '引越しには何かとお金がかかる。資材だけでも安く済ませたい...',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: AlertCircle,
    title: '荷物が多くて梱包が大変',
    description: '大量の荷物を効率よく梱包するための資材が足りない...',
    color: 'bg-orange-100 text-orange-600',
  },
];

export function ProblemsSection() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            引越しのこんなお悩み、<br className="sm:hidden" />ありませんか？
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            多くのお客様が抱える引越し資材の悩みを解決します
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className={`w-14 h-14 rounded-full ${problem.color} flex items-center justify-center mb-4`}>
                <problem.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-3">{problem.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block bg-red-50 border-2 border-red-600 rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
            <p className="text-xl sm:text-2xl font-bold text-red-600 mb-2">
              これらの悩み、すべて解決できます！
            </p>
            <p className="text-gray-700">
              当社の引越し資材サービスなら、スピード・品質・価格すべてにご満足いただけます
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
