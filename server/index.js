import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';

import db from './_db.js';

const resolvers = {
    Query: {
        games: () => db.games,
        game(_, args) {
            return db.games.find(game => game.id === args.id);
        },
        authors: () => db.authors,
        author(_, args) {
            return db.authors.find(author => author.id === args.id);
        },
        reviews: () => db.reviews,
        review(_, args) {
            return db.reviews.find(review => review.id === args.id);
        },
    },

    Game: {
        reviews(parent) {
            return db.reviews.filter(review => review.game_id === parent.id);
        },
    },

    Review: {
        game(parent) {
            return db.games.filter(game => game.id === parent.game_id);
        },
        author(parent) {
            return db.authors.filter(author => author.id === parent.author_id);
        },
    },
    Author: {
        reviews(parent) {
            return db.reviews.filter(review => review.author_id === parent.id);
        },
    },
    Mutation: {
        deleteGame(_, args) {
            db.games = db.games.filter(game => game.id !== args.id);
            return db.games;
        
        },

        addGame(_, args) {
            let newGame = {
                ...args.game,
                id: Math.floor(Math.random() * 10000).toString(),
                
            };
            db.games.push(newGame);
            return newGame;
        },

        updateGame(_, args) {
            db.games = db.games.map((g) => {
              if (g.id === args.id) {
                return {...g, ...args.edits}
              }
      
              return g
            })
      
            return db.games.find((g) => g.id === args.id)
        }
    }
};


const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: {port: 4000}
});

console.log(`🚀 Server ready at ${url}`);