export default `

    type Dev {
        _id: String!
        name: String 
    }

    type Query {
        allDevs: [Dev!]!
    }

    type Mutation {
        createDev(name: String!): Dev!
    }

`;