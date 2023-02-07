import Sequelize from 'sequelize';
const sequalizeConnection= new Sequelize('a5','root','',{
    host:'localhost',
    dialect:'mysql'
});

const connectionDB= async()=>{
    return await sequalizeConnection
    .sync({alert:true, force:false})
    .then(()=>{
        console.log('Database connected');
    })
    .catch((err)=>{
        console.log(err);
    })
}

export{
    sequalizeConnection,
    connectionDB
}

