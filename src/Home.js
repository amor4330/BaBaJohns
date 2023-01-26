import { Link } from "react-router-dom";


const Home = () => {
   
   return(
      <div>
         <h3>맛 좋은 바바존스</h3>
         <ul>
            <li><Link to ='/menu'>메뉴보여줘</Link></li>
            <li><Link to ='/delivery'>배달해줘</Link></li>
            <li><Link to ='/pickUp'>포장해줘</Link></li>
         </ul>
      </div>
   )
}

export default Home;