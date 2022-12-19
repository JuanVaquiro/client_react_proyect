import {useState, useEffect } from "react";
import Spinner from "./Loanding";

const ModalLoading = ({ modalRef, clossModal, Image}) => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      setTimeout(() => {  
        setLoading(false)
      },1000)
    },[]);

  return (
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
  )
}

export default ModalLoading