
import React, { useRef } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Camera } from 'lucide-react';

interface EditableImageProps {
  id: string;
  defaultSrc: string;
  alt: string;
  className?: string;
}

const EditableImage: React.FC<EditableImageProps> = ({ id, defaultSrc, alt, className = '' }) => {
  const { isAdmin, getImage, updateContent } = useAdmin();
  const currentSrc = getImage(id, defaultSrc);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        updateContent(id, base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isAdmin) {
    return <img src={currentSrc} alt={alt} className={className} />;
  }

  return (
    <div className={`relative group ${className}`}>
      <img src={currentSrc} alt={alt} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer" onClick={() => fileInputRef.current?.click()}>
        <div className="bg-white text-gray-900 px-4 py-2 rounded-full font-bold flex items-center gap-2 shadow-lg hover:scale-105 transition-transform">
          <Camera size={20} />
          <span>이미지 변경</span>
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
};

export default EditableImage;
