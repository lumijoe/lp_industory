import { Truck, Clock, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-red-50 to-orange-50 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              業界最安値挑戦中！
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              引越し資材は<br />
              <span className="text-red-600">当日発送</span>で<br />
              すぐにお届け
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600">
              ダンボール、ガムテープ、養生テープなど、引越しに必要な資材を<br className="hidden sm:block" />
              まとめて即日発送。15時までのご注文で当日出荷いたします。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors shadow-lg">
                今すぐ注文する
              </button>
              <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-50 transition-colors">
                商品カタログを見る
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="flex flex-col items-center text-center">
                <Truck className="w-10 h-10 sm:w-12 sm:h-12 text-red-600 mb-2" />
                <p className="text-xs sm:text-sm font-semibold">当日発送</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-red-600 mb-2" />
                <p className="text-xs sm:text-sm font-semibold">年中無休</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Award className="w-10 h-10 sm:w-12 sm:h-12 text-red-600 mb-2" />
                <p className="text-xs sm:text-sm font-semibold">品質保証</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1700165644892-3dd6b67b25bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkYm9hcmQlMjBib3hlcyUyMG1vdmluZ3xlbnwxfHx8fDE3NzEzNDEyNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="引越し資材"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-gray-900 p-4 sm:p-6 rounded-xl shadow-xl hidden sm:block">
              <p className="text-sm font-semibold">今なら</p>
              <p className="text-2xl sm:text-3xl font-bold">最大30%OFF</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
