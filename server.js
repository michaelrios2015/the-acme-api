const app = require('./app');
const { synchAndSeed } = require('./db');

const port = process.env.PORT || 3000;

const init = async()=>{
    
    await synchAndSeed;
    app.listen(port, ()=> {
        console.log(`listening on port ${port}`);
    });
}

init();