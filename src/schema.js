export default `

    type Dev {
        _id: String!
        name: String
        skills: String
    }

    type Query {
        allDevs: [Dev!]!
    }

    type Mutation {
        createDev(name: String!  skills: String!): Dev!
    }

`;