import React from 'react';
import { Icon } from './Icon';

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, reviewCount }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      <div className="flex text-yellow-500">
        {[...Array(fullStars)].map((_, i) => (
          <Icon key={`full-${i}`} type="star-full" className="w-5 h-5" />
        ))}
        {halfStar && <Icon key="half" type="star-half" className="w-5 h-5" />}
        {[...Array(emptyStars)].map((_, i) => (
          <Icon key={`empty-${i}`} type="star-empty" className="w-5 h-5 text-gray-300" />
        ))}
      </div>
      {reviewCount !== undefined && (
         <p className="text-sm text-gray-500">({reviewCount})</p>
      )}
    </div>
  );
};

export default StarRating;
