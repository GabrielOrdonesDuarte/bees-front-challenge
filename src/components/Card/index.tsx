import Tags from "components/Tags";
import React from "react";
import { IBreweries } from "services/brewery";

type CardProps = {
  breweries?: Array<IBreweries>;
  loading: boolean;
  setBreweries: React.Dispatch<React.SetStateAction<IBreweries[] | undefined>>;
};

const Card = ({ breweries, loading, setBreweries }: CardProps) => {
  const handleDelete = (breweryId: string) => {
    if (breweries)
      setBreweries(breweries.filter((brewery) => brewery.id !== breweryId));
  };

//   display: grid
//   grid-template-columns: repeat(3, 1fr)
//   gap: 48px

  const showCards = () => {
    if (loading) {
      return <h1>Carregando</h1>;
    } else {
      return (
        <div>
          {breweries &&
            breweries.map((brewery: IBreweries) => {
              const { brewery_type, postal_code, phone } = brewery;
              return (
                <div key={brewery.id}>
                  <button onClick={() => handleDelete(brewery.id)}>
                    delete
                  </button>
                  <h1>{brewery.name}</h1>
                  <p>{brewery.street}</p>
                  <p>
                    {brewery.city}, {brewery.state} - {brewery.country}
                  </p>
                  <Tags
                    brewery_type={brewery_type}
                    postal_code={postal_code}
                    phone={phone}
                  />
                </div>
              );
            })}
        </div>
      );
    }
  };

  return showCards();
};

export default Card;
