const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const isCustomAuth = token.length < 500;
        let decodedData;

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, process.env.SECRET_KEY);
            req.email = decodedData.email;
            req.userId = decodedData?.id;
            next();
        }

    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Something went wrong" });
    }
};

module.exports = auth;