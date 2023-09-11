import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

// Modal.defaultStyles = {
//   overlay: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "rgba(255, 255, 255, 0.75)"
//   },
//   content: {
//     position: "absolute",
//     top: "40px",
//     left: "40px",
//     right: "40px",
//     bottom: "40px",
//     border: "1px solid #ccc",
//     background: "#fff",
//     overflow: "auto",
//     WebkitOverflowScrolling: "touch",
//     borderRadius: "4px",
//     outline: "none",
//     padding: "20px"
//   }
// };

type ModalProps = {
  children: string | React.ReactNode;
  isOpen: boolean;
  handleIsOpen: (status: boolean) => void;
};

const CustomModal: React.FC<ModalProps> = (props) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "25%",
      bottom: "auto",
      maxHeight: "95vh",
      marginRight: "-25%",
      color: "white",
      // backgroundColor: "inherit",
      // background: "inherit",
      transform: "translate(-50%, -50%)",
    },
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    props.handleIsOpen(false);
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="overflow-y-auto flex place-content-center justify-center items-center">
          {props.children}
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;
