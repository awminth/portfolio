
import React from 'react';
import Section from './Section';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <Section id="gallery" title="Life & Moments" backgroundClass="bg-white">
      {/* 
        Removed fixed height (h-96) to prevent overflow issues.
        Updated grid to be responsive: 
        - Mobile: 1 column
        - Tablet (sm): 2 columns (2x2 for 4 images)
        - Laptop (lg): 4 columns (1x4 for 4 images)
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {GALLERY_IMAGES.map((img, idx) => (
          <div 
            key={idx} 
            className="relative overflow-hidden rounded-2xl group cursor-pointer shadow-lg bg-slate-200"
            style={{ height: '300px' }}
          >
            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors z-10 duration-500"></div>
            <img 
              src={img} 
              alt={`Gallery ${idx + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <p className="text-slate-500 italic font-light">
          "Passionate about exploring the world, capturing moments, and continuous learning."
        </p>
      </div>
    </Section>
  );
};

export default Gallery;
