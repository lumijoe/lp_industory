import { ShoppingCart, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const products = [
  {
    id: 1,
    name: '引越し用ダンボール（大）',
    size: '520×380×340mm',
    price: '198',
    originalPrice: '280',
    image: 'https://images.unsplash.com/photo-1700165644892-3dd6b67b25bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkYm9hcmQlMjBib3hlcyUyMG1vdmluZ3xlbnwxfHx8fDE3NzEzNDEyNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'ベストセラー',
    rating: 4.8,
    reviews: 1234,
  },
  {
    id: 2,
    name: 'OPPテープ（梱包用）',
    size: '48mm×100m',
    price: '158',
    originalPrice: '220',
    image: 'https://images.unsplash.com/photo-1764266022094-c658e4301469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWNraW5nJTIwdGFwZSUyMHJvbGx8ZW58MXx8fHwxNzcxMzI2MjE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: '人気商品',
    rating: 4.9,
    reviews: 856,
  },
  {
    id: 3,
    name: '養生テープ（床・壁用）',
    size: '50mm×25m',
    price: '248',
    originalPrice: '350',
    image: 'https://images.unsplash.com/photo-1643216671460-81556d9a4fb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNraW5nJTIwdGFwZSUyMHBhaW50ZXJ8ZW58MXx8fHwxNzcxMzQxMjUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'おすすめ',
    rating: 4.7,
    reviews: 543,
  },
  {
    id: 4,
    name: '引越し用ダンボール（中）',
    size: '450×350×300mm',
    price: '168',
    originalPrice: '240',
    image: 'https://images.unsplash.com/photo-1766040923580-16ad32fae8b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBjYXJkYm9hcmQlMjBwYWNrYWdpbmd8ZW58MXx8fHwxNzcxMzQxMjUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: '',
    rating: 4.6,
    reviews: 678,
  },
  {
    id: 5,
    name: 'プチプチ（エアキャップ）',
    size: '1200mm×42m',
    price: '1,280',
    originalPrice: '1,800',
    image: 'https://images.unsplash.com/photo-1769355104335-acef3aa4c9b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpbmclMjBib3hlcyUyMHN1cHBsaWVzfGVufDF8fHx8MTc3MTM0MTI1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    badge: '',
    rating: 4.8,
    reviews: 421,
  },
  {
    id: 6,
    name: 'ストレッチフィルム',
    size: '500mm×300m',
    price: '980',
    originalPrice: '1,400',
    image: 'https://images.unsplash.com/photo-1718248648359-2a3a5fc579c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc3VwcGxpZXMlMjB3YXJlaG91c2V8ZW58MXx8fHwxNzcxMzQxMjUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: '',
    rating: 4.5,
    reviews: 289,
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            人気商品ラインナップ
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            プロも認める高品質な引越し資材を、業界最安値でご提供
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <ImageWithFallback 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 sm:h-56 object-cover"
                />
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {product.badge}
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-2 py-1 rounded text-xs font-bold">
                  {Math.round((1 - parseInt(product.price.replace(',', '')) / parseInt(product.originalPrice.replace(',', ''))) * 100)}%OFF
                </div>
              </div>
              
              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.size}</p>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center gap-1 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews}件)
                  </span>
                </div>
                
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-sm text-gray-400 line-through">¥{product.originalPrice}</span>
                  <span className="text-2xl font-bold text-red-600">¥{product.price}</span>
                  <span className="text-sm text-gray-600">（税込）</span>
                </div>
                
                <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  カートに入れる
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-50 transition-colors">
            すべての商品を見る（120点以上）
          </button>
        </div>
      </div>
    </section>
  );
}
