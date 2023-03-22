import React from 'react';

interface ButtonProps {
  title: string;
  click?: () => void;
}

function Button({ title, click }: ButtonProps) {
  return (
    <div
      className="cursor-pointer rounded-lg bg-roxo-900 p-1 text-white duration-300 ease-in-out hover:opacity-80"
      onClick={click}
    >
      {title}
    </div>
  );
}

export default Button;
