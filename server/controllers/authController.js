
module.exports = {

    login: async (req, res) => {
        try {
            let db = req.app.get('db');
            let { email, password } = req.body;
            email = email.toLowerCase();

            let userResponse = await db.get_user_by_email(email);
            let user = userResponse[0];

            if (!user) {
                return res.status(401).send('Email not found');
            }

            let isAuthenticated = password === user.password;
            if (!isAuthenticated) {
                return res.status(403).send('Incorrect password');
            }

            delete user.password;
            req.session.user = user;
            // console.log(user);
            return res.send(user);
        }
        catch (err) {
            console.log(error)
            return res.status(500).send(error);
        }
    },

    currentUser: async (req, res) => {

        res.send(req.session.user)
        
    }
    
}