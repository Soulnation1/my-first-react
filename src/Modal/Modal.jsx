// import { useState } from "react";
const Modal = () => {
//  const [modalScreen, setModalScreen] = useState(true);
//  if (!modalScreen) {
//   return null;
//  }
  return (
    <div
      // onClick={() => setModalScreen(false)}
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
       
        <p>This is a modal component.</p>
      </div>
    </div>
  );
};

export default Modal;
