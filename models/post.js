const getAll = () => {
  return new Promise((resolve, reject) => {
    db.query("select * from posts", (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
};

const getSome = (number)=>{
  return new Promise((resolve,reject)=>{
    db.query("select * from posts limit 0,?",[number],(err,rows)=>{
      if(err) reject(err);
      resolve(rows);
    });
  });
};

const getOne = (id)=>{
  return new Promise((resolve,reject)=>{
    db.query("select * from posts where posts.id=?",[id],(err,rows)=>{
      if(err) return reject(err);
      if(rows[0]===undefined) return resolve('El post no existe');
      return resolve(rows[0]);
    })
  })
}

const create = ({titulo,autor,categoria,contenido,imagen})=>{
  return new Promise ((resolve,reject)=>{
    db.query('INSERT INTO posts (titulo,autor,categoria,contenido,imagen,fecha) VALUES (?,?,?,?,?,?)',[titulo,autor,categoria,contenido,imagen,new Date()],
    (err,result)=>{
      if(err) return reject(err);
      resolve(result);
    });
  });
};

module.exports = {
  getAll: getAll,
  getSome:getSome,
  getOne:getOne,
  create:create,
};
