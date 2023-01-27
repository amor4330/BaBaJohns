import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./modal/Modal";

const Home = () => {
   
   const [openModal, setOpenModal] = useState(false);

   return(
      <div>
         {openModal && <Modal closeModal={setOpenModal}/>}
         <h3>맛 좋은 바바존스</h3>
         <ul>
            <li><Link to ='/menu'>메뉴보여줘</Link></li>
            <li><Link to ='/delivery'>배달해줘</Link></li>
            <li><Link to ='/pickUp'>포장해줘</Link></li>

            <button className="openModalBtn" 
                    onClick={() => setOpenModal(true)}>모달나와줘
            </button>
         </ul>
      </div>
   )
}

export default Home;