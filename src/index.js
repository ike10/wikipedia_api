const express = require('express');
const shortDescriptionRouter = require('./routes/shortdescription');

const app = express();

app.use('/api/shortdescription', shortDescriptionRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running and listening on port ${PORT}`));
