"use client";

interface CardProps {
  icon: string;
  title: string;
  description: string;
  colorClass: string;
  BGz?: number;
}

export default function Card({ 
  icon, 
  title, 
  description, 
  colorClass, 
  BGz = 1,
}: CardProps) {
  return (
    <div className={`${BGz === 1 ? "bg-background-primary" : BGz === 2 ? "bg-background-secondary" : "bg-background-tertiary"} border border-border-color/75 rounded-xl p-8`}>
      <div className={`${colorClass} w-min rounded-2xl mb-4`}>
        <h3 className="text-2xl md:text-5xl font-bold text-gray-900 p-4 w-min">{icon}</h3>
      </div>
      
      <h3 className="text-gray-900 font-semibold text-2xl mb-4">{title}</h3>

      <p className="text-gray-700">
        {description}
      </p>
    </div>
  );
}