import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_DRINK } from '../utils/queries';

const Drink = () => {
  const { username: userParam } = useParams();

  console.log({ username: userParam });

  const { loading, error, data } = useQuery(QUERY_DRINK, {
    variables: { username: userParam },
  });
  if (loading) return null;
  if (error) return `Error! ${error}`;

  console.log(data);

  const AllUserDrinks = () => {
    for (let i = 0; i < data.user.drinks.length; i++) {
      const element = data.user.drinks[i];
      console.log(element);
      return (
        <div>
          <h4>{element.drinkName}</h4>
          <p>{element.createdAt}</p>
        </div>
      );
    }
  }

  return (
    <div>
      <h3 className="mb-2" align="center">{data.user.username}'s Mixer</h3>
      <div>{AllUserDrinks()}</div>
    </div>
  );
};

export default Drink;