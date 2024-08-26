const { User } = require('../models');

const resolvers = {
    Query: {
        me: async (parent, { user = null, params }) => {
            return User.findOne({
                $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
            });
        },
    },
    Mutation: {
        login: async (parent, args) => {
            return;
        },
        addUser: async (parent, args) => {
            return;
        },
        saveBook: async (parent, args) => {
            return;
        },
        removeBook: async (parent, args) => {
            return;
        },
    },
}

module.exports = resolvers;