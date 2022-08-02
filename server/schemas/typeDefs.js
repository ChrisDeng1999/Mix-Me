const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        drinks: [Drink]
    }

    type Drink{
        _id: ID
        drinkName: String
        drinkIngredients: String
        createdAt: String
        reviews: String
    }

`




module.exports = typeDefs;
