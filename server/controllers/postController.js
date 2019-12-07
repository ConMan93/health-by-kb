
module.exports = {

    createNewPost: async (req, res) => {
        try
        {
            let db = req.app.get('db');
            let { date, imageurl, video, message, page, title } = req.body;

            await db.create_new_post({date, imageurl, video, message, page, title});
            return res.status(200).send();
        }
        catch(error)
        {
            console.log(error)
            return res.status(500).send()
        }
    },

    getExercisePosts: async (req, res) => {
        try
        {
            let db = req.app.get('db');

            let exercisePosts = await db.get_exercise_posts();
            return res.status(200).send(exercisePosts);
        }
        catch(error)
        {
            console.log(error);
            res.status(500).send(error);
        }
    },

    getRecipePosts: async (req, res) => {
        try
        {
            let db = req.app.get('db');

            let recipePosts = await db.get_recipe_posts();
            return res.status(200).send(recipePosts);
        }
        catch(error)
        {  
            console.log(error);
            res.status(500).send(error);
        }
    },

    deletePost: async (req, res) => {
        try
        {
            let db = req.app.get('db');
            let { id, page } = req.params;

            let posts = await db.delete_post([id, page]);
            return res.status(200).send(posts);
        }
        catch(error)
        {
            console.log(error);
            res.status(500).send(error)
        }
    },

    getBlogPosts: async (req, res) => {
        try
        {
            let db = req.app.get('db');

            let blogPosts = await db.get_blog_posts();
            return res.status(200).send(blogPosts);
        }
        catch(error)
        {
            console.log(error);
            return res.status(500).send(error);
        }
    },

    getMotivationPosts: async (req, res) => {
        try
        {
            let db = req.app.get('db');

            let motivationPosts = await db.get_motivation_post();
            return res.status(200).send(motivationPosts);
        }
        catch(error)
        {
            console.log(error);
            return res.status(500).send();
        }
    },
}