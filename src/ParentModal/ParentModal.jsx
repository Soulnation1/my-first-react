import { useState } from "react";
import Modal from "../Modal/Modal";
const ParentModal = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex text-center relative flex-col mb-[400px]">
      <div className="flex">
        <button
          onClick={() => setOpenModal(true)}
          className="px-4 py-3 bg-blue-400 rounded-xl transition hover:bg-blue-600"
        >
          Open Modal
        </button>
      </div>
      {openModal && <Modal />}
    </div>
  );
};

export default ParentModal;
