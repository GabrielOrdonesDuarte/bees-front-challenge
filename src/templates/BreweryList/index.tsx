import { useNavigate } from "react-router-dom";
import { useUser } from "contexts/user";

const BreweryList = () => {
   const { logout } = useUser();
   const navigate = useNavigate();

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
