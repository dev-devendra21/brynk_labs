import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface CardTitleProps {
  title: string;
  className?: string;
}

interface CardDescriptionProps {
  description: string;
  className?: string;
}

interface CardComponent extends React.FC<CardProps> {
  Icon: React.FC<CardProps>;
  Title: React.FC<CardTitleProps>;
  Description: React.FC<CardDescriptionProps>;
}

const Card: CardComponent = ({ children, className = "" }) => {
  return <div className={`p-4 w-[300px] my-4 ${className}`}>{children}</div>;
};

const CardIcon: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`mb-2 bg-[#FFF8ED] p-2 rounded-full w-10 h-10 flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
};

const CardTitle: React.FC<CardTitleProps> = ({ title, className = "" }) => {
  return <h3 className={`text-xl font-semibold ${className}`}>{title}</h3>;
};

const CardDescription: React.FC<CardDescriptionProps> = ({
  description,
  className = "",
}) => {
  return <p className={`text-gray-600 ${className}`}>{description}</p>;
};

Card.Icon = CardIcon;
Card.Title = CardTitle;
Card.Description = CardDescription;

export default Card;
