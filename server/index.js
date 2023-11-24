const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
require('./mongodb/connection');

const userRouter = require('./routes/user.routes');
const postRouter = require('./routes/post.routes');

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});