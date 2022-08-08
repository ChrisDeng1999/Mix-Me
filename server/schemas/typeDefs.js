const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        drinks: [Drink]!
    }

    type Drink {
        _id: ID
        drinkName: String
        drinkAuthor: String
        drinkIngredients: [ID]
        createdAt: String
        reviews: [Review]!
    }

    type Ingredient {
        _id: ID
        ingredientName: String
        ingredientType: String
        alcoholProof: Int
        ingredientUrl: String
    }

    type Spirit {
        _id: ID
        spiritName: String
        spiritType: String
        alcoholProof: Int
        spiritUrl: String
    }

    type Review {
        _id: ID
        reviewText: String
        reviewAuthor: String
        createdAt: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Recipes {
        _id: ID
        recipeName: String
        ingredientList: String
        spiritList: String
    }

    type Query {
        users: [User]
        user(username: String!): User
        drinks(username: String): [Drink]
        drink(drinkId: ID!): Drink
        Ingredient: [Ingredient]
        Spirit: [Spirit]
        Recipes: [Recipes]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addRecipes(recipeName: String, ingredientList: String, spiritList: String): Recipes
        addDrink(drinkName: String, drinkIngredients:[ID], drinkAuthor: String): Drink
        
    }
`




module.exports = typeDefs;
