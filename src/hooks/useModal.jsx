import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = () => {
    setSelectedItem(null);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setIsOpen(false);
  };

  return {
    isOpen,
    selectedItem,
    setSelectedItem,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useModal;
