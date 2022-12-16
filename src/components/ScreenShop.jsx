import html2canvas from "html2canvas";
import { Fragment, useRef, useState } from "react";
import iconScreen  from "../multimedia/screenshot.png"

const ScreenShop = () => {
  const [Image, setImage] = useState();
  const modalRef = useRef();

  const openModal = () => {
    const element = document.querySelector("#PremiacionIMG");
    const options = false;
    html2canvas(element, options).then((canvas) => {
      const url = canvas.toDataURL();
      setImage(url);
      modalRef.current.style.display = "block";
    });
  };

  const clossModal = () => {
    modalRef.current.style.display = "none";
  };

  return (
    <Fragment>
        <div className="captu-camara" onClick={openModal}>
          <img className="w-14 cursor-pointer hover:text-slate-300" src={iconScreen} alt="camara" />
        </div>
      <div className="modal"  ref={modalRef}>
        <div className="modal-dialog">
          <div className="modal-content modal-content-size">
            <div className="modal-body">
              <a href={Image} download="podium" >
                <img src={Image} alt="" />
              </a>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                id="btn-cerrar-modal"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={clossModal}
              >
                CERRAR
              </button>
              <a href={Image} download="podium" >
              <button
                type="button"
                id="btn-descargar-modal"
                className="btn btn-success"
                data-bs-dismiss="modal"
                onClick={clossModal}
              >
                DESCARGAR
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ScreenShop;
