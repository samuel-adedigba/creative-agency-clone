import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-blue-600 w-12 h-12 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};