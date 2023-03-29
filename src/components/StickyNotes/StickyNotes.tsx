import React from 'react';

function StickyNotes() {
  return (
    <>
      <div className="text-center">
        <h1 className="py-4 text-roxo-600">Lembretes -</h1>
      </div>
      <div className="mx-2 flex flex-wrap justify-start gap-6">
        <div className="w-48 bg-roxo-300">
          <h2 className="py-2 text-center">Título</h2>
          <p className="mx-2 h-24 overflow-auto break-all text-justify scrollbar-thin">
            Descrição Descrição Descrição Descrição Descrição Descrição
            Descrição Descrição Descrição Descrição Descrição Descrição
            Descrição Descrição Descrição Descrição Descrição Descrição
            Descrição Descrição Descrição Descrição Descrição Descrição
            Descrição Descrição Descrição
          </p>
        </div>
      </div>
    </>
  );
}

export default StickyNotes;
