export default {
    Query: {
        allDevs: async (parent, args, { Dev }) => {
            const devs = await Dev.find();
            return devs.map(x => {
                x._id = x._id.toString();
                return x;
            })
        }
    },
    Mutation: {
        createDev: async (parent, args, { Dev }) => {
            const dev = await new Dev(args).save();
            dev._id = dev._id.toString();
            return dev;
        }
    }
}