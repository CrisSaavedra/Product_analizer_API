const express = require('express');
const api1 = require("./v1/routes/routes");
const cors = require('cors');
const { use } = require('express/lib/router');
const app= express();
const PORT = 9090;



app.use(cors());

app.use("/api",api1);

app.listen(PORT, ()=> { 
    console.log(`server listening on port ${PORT}`)
});

