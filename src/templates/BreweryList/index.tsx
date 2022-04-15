import { useNavigate } from "react-router-dom";
import { useUser } from "contexts/user";
import { useEffect } from "react";
import { getBreweries } from "services/brewery";

const BreweryList = () => {
   const { logout } = useUser();
   const navigate = useNavigate();

   useEffect(() => {
      const fetch = async () => {
         try {
            const data = await getBreweries();
            console.log(data);
         } catch (error) {
            console.log(error);
         }
      }
      fetch();
   }, [])
   
   const handleGoBack = () => {
      logout();
      navigate("/");
   };

   return (
      <>
         <button onClick={handleGoBack}>Voltar</button>
         <h1>brewery List</h1>
      </>
   );
};

export default BreweryList;
