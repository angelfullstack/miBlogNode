const getAll=()=>{
    return new Promise((resolve,reject)=>{
        if(err) return reject(err)
        resolve(rows);

    });
}

module.exports={
    getAll:getAll,
}