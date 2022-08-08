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
  export const QUERY_USER = gql`
  query User($username: String!) {
    user(username: $username) {
      username
      drinks {
        _id
      }
    }
  }`


  export const QUERY_DRINK = gql`
  query Drink($username: String!) {
    user(username: $username) {
      username
      drinks {
        drinkName
        drinkAuthor
        createdAt
        drinkIngredients {
          _id
          ingredientType
          ingredientName
          alcoholProof
          ingredientUrl
        }
        reviews {
          reviewText
          reviewAuthor
          createdAt
        }
      }
    }
  }
  `

  export const QUERY_ALLDRINKS = gql`
  query Drinks {
    drinks {
      _id
      drinkName
      drinkAuthor
      createdAt
      reviews {
        _id
        reviewText
        reviewAuthor
        createdAt
      }
      drinkIngredients {
        _id
        ingredientName
        ingredientType
        alcoholProof
        ingredientUrl
      }
    }
  }
  `