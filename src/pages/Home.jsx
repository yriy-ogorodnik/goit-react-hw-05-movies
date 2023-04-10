import { Link } from "react-router-dom";


const Home = () => {

   return(
      <div>
      {
         ["dog-1","dog-2","dog-3","dog-4","dog-5","dog-6"].map(dog => {
               return ( 
                  <Link key={dog} to={`${dog}`}>
                  {dog}
               </Link>)
      })}
      </div>
   )   
}




export default Home;