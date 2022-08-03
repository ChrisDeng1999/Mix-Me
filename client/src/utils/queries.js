import { gql } from '@apollo/client';

export const QUERY_INGREDIENT = gql`
query Ingredient {
    Ingredient {
      ingredientName
      ingredientType
      alcoholProof
      _id
    }
  }
`