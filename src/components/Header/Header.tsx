import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import { useState } from 'react';
import NewStickyModal from '../NewStickyModal/NewStickyModal';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <header className="flex items-center justify-between bg-roxo-600 px-6 py-4">
      <Logo />
      <Button title="Add Sticky Note" onClick={toggleModal} />
      {isModalOpen && <NewStickyModal onClose={toggleModal} />}
    </header>
  );
}

export default Header;
