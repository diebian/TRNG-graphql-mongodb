import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb://localhost/graphql-test-1')
    .then( () => console.log('MongoDB connected'))
    .catch( err => console.error(err));

// mongo models
import Dev from './models/Developers'

import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './schema';
import resolvers from './resolvers';

// settings
app.set('port', process.env.PORT || 7000);

const schemaEX = makeExecutableSchema({
    typeDefs, 
    resolvers
});

// routes
app.use('/graphql', express.json(), graphqlExpress({
    schema: schemaEX,
    /* context: {
        Dev
    } */
}));

app.use('graphiql', graphiqlExpress({
    endpointURL: 'graphql'
}));


app.listen(app.get('port'), () => {
    console.log('Server on port 7000');
});