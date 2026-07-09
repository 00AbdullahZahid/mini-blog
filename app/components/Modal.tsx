"use client";

import { useEffect, useRef } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal(); // Opens natively with a backdrop overlay
    } else {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="text-center fixed inset-0 m-auto max-w-md w-full rounded-lg p-6 bg-black border border-gray-500 shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-sm"
    >
      <div className="flex flex-col items-center gap-4">
        {children}
        <button 
          onClick={onClose} 
          className="w-48 mt-4 px-4 py-2 bg-red-500 text-white rounded-full"
        >
          Close
        </button>
      </div>
    </dialog>
  );
}