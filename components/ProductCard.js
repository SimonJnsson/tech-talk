import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Confetti from 'react-confetti';


function ProductCard({ product }) {
  const formattedPrice = product.price.toFixed(2);
  const discountedPrice = (product.price - (product.price * product.discountPercentage / 100)).toFixed(2);

  const [isCartAnimating, setIsCartAnimating] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isCircular, setIsCircular] = useState(false);


  function handleAddToCartClick() {
    setIsCartAnimating(true);
    setShowConfetti(true);
    setIsCircular(true);
    setTimeout(() => {
      setIsCartAnimating(false)
      setIsCircular(false)
    }, 1000);
  }
  

  return (
<div
  className={`relative bg-white overflow-hidden flex flex-col border border-solid border-gray-200 ${
    isCartAnimating ? 'animate-barrel-roll' : ''
  } ${isCircular ? 'rounded-full' : 'rounded-lg'}`}
>    <div className="aspect-w-1 aspect-h-1 bg-gray-200 flex-shrink-0">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-cover w-full h-full transition-opacity duration-300 ease-in-out hover:opacity-75 border border-pink-500"
        />
      </div>
      <div className="px-4 py-2 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h2>
          <p className="text-sm text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center">
            <div className="text-lg font-semibold text-gray-800 mr-2">${formattedPrice}</div>
            {product.discountPercentage > 0 && (
              <>
                <div className="text-sm text-gray-600 line-through mr-2">${discountedPrice}</div>
                <div className="text-sm text-green-600 font-semibold">{product.discountPercentage}% off</div>
              </>
            )}
          </div>
        </div>
        <div className="mt-4">
        <button
  className="bg-brand text-white px-4 py-2 rounded hover:bg-pink-800"
  onClick={handleAddToCartClick}
>
  Add to Cart
</button>
{showConfetti && (
            <Confetti
              width={500}
              height={500}
              numberOfPieces={1000}
              recycle={false}
              onConfettiComplete={() => setShowConfetti(false)}
            />
          )}

        </div>
      </div>
    </div>
  );
}

export default ProductCard;