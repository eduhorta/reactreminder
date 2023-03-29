import React from 'react';

interface ButtonProps {
  title: string;
  onClick?: () => void;
}

function Button({ title, onClick }: ButtonProps) {
  return (
    <div
      className="cursor-pointer rounded-lg bg-roxo-900 p-1 text-white duration-300 ease-in-out hover:opacity-80"
      onClick={onClick}
    >
      {title}
    </div>
  );
}

export default Button;
