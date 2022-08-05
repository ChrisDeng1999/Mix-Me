import { gql } from '@apollo/client';

export const QUERY_INGREDIENT = gql`
query Ingredient {
    Ingredient {
      ingredientName
      ingredientType
      alcoholProof
      ingredientUrl
      _id
    }
  }
`
export const QUERY_SPIRIT = gql`
query Spirit {
    Spirit {
      _id
      spiritName
      spiritType
      alcoholProof
      spiritUrl
    }
  }
  `