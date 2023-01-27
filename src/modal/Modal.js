import "./Modal.css"

const Modal = ({closeModal}) => {

   return (
      <div className="modalBackground">
         <div className="modalContainer">
            <button onClick={() => closeModal(false)}> X </button>
            <div className="title">
               <h1>주문방법 선택</h1>
            </div>
            <div className="body">
               <p>배달</p>
            </div>
            <div className="footer">
               <p>
                  <button>진행시켜</button>
               </p>
            </div>
         </div>
      </div>
   )
}

export default Modal;