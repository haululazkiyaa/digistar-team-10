import { useContext, useEffect } from "react";

import Hero from "../components/hero/Hero";
import ModalLayout from "../layout/ModalLayout";
import { NotificationContext } from "../context/NotificationContext";
import ProductList from "../components/product/ProductList";
import Shortcut from "../components/shortcut/Shortcut";
import useModal from "../hooks/useModal";

const Home = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { handleShowNotification, setShowNotification } =
    useContext(NotificationContext);

  useEffect(() => {
    // handleOpenModal();
    setTimeout(() => {
      handleShowNotification(
        "1 Produk Menunggu Ulasan",
        "Hai SASA, kamu memiliki 1 produk yang belum diulas. Yuk segera ulas produknya!"
      );
    }, 1000);
  }, []);

  return (
    <div>
      <Hero />
      <Shortcut />
      <ProductList />
      <ModalLayout isOpen={isOpen} closeBtnAction={() => handleCloseModal()}>
        <p>Hello</p>
      </ModalLayout>
    </div>
  );
};

export default Home;
