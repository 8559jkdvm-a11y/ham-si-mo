
import React, { useState, useEffect } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Edit2, Check, X } from 'lucide-react';

interface EditableTextProps {
  id: string;
  defaultText: string;
  className?: string;
  multiline?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

const EditableText: React.FC<EditableTextProps> = ({ 
  id, 
  defaultText, 
  className = '', 
  multiline = false,
  as: Component = 'span' 
}) => {
  const { isAdmin, getText, updateContent } = useAdmin();
  const currentText = getText(id, defaultText);
  
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(currentText);

  useEffect(() => {
    setTempValue(currentText);
  }, [currentText]);

  const handleSave = () => {
    updateContent(id, tempValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempValue(currentText);
    setIsEditing(false);
  };

  if (!isAdmin) {
    // Render text with line breaks if it contains newlines
    if (multiline) {
       return (
         <Component className={className} dangerouslySetInnerHTML={{ __html: currentText.replace(/\n/g, '<br />') }} />
       );
    }
    return <Component className={className}>{currentText}</Component>;
  }

  if (isEditing) {
    return (
      <div className="relative group inline-block w-full">
        {multiline ? (
          <textarea
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            className={`w-full p-2 border-2 border-primary rounded shadow-lg bg-white text-gray-900 z-10 relative ${className}`}
            rows={5}
          />
        ) : (
          <input
            type="text"
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            className={`w-full p-1 border-2 border-primary rounded shadow-lg bg-white text-gray-900 z-10 relative ${className}`}
          />
        )}
        <div className="absolute -top-8 right-0 flex gap-1 z-20 bg-white p-1 rounded shadow">
          <button onClick={handleSave} className="p-1 bg-green-500 text-white rounded hover:bg-green-600"><Check size={16} /></button>
          <button onClick={handleCancel} className="p-1 bg-gray-500 text-white rounded hover:bg-gray-600"><X size={16} /></button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group inline-block cursor-pointer border border-transparent hover:border-dashed hover:border-primary/50 rounded px-1 -mx-1 transition-all" onClick={() => setIsEditing(true)}>
      {multiline ? (
         <Component className={className} dangerouslySetInnerHTML={{ __html: currentText.replace(/\n/g, '<br />') }} />
      ) : (
         <Component className={className}>{currentText}</Component>
      )}
      <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 bg-primary text-white p-1 rounded-full transform translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <Edit2 size={12} />
      </div>
    </div>
  );
};

export default EditableText;
