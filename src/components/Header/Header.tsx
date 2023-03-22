import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import { useState } from 'react';

function Header() {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber(number + 1);
    console.log(number);
  }

  return (
    <header className="flex items-center justify-between bg-roxo-600  px-12 py-4">
      <Logo />
      <p className="text-white">{number}</p>
      <Button click={increment} title="Adicionar Lembrete" />
    </header>
  );
}

export default Header;
