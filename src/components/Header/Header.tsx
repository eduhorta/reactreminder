import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import { useState } from 'react';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="flex items-center justify-between bg-roxo-600 px-6 py-4">
      <Logo />
      <Button title="Adicionar Lembrete" />
    </header>
  );
}

export default Header;
