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

const create = ({titulo,autor,categoria,contenido,imagen})=>{
  return new Promise ((resolve,reject)=>{
    db.query('INSERT INTO posts (titulo,autor,categoria,contenido,imagen,fecha) VALUES (?,?,?,?,?,?)',[titulo,autor,categoria,contenido,imagen,new Date()],
    (err,result)=>{
      if(err) reject(err);
      resolve(result);
    });
  });
};

module.exports = {
  getAll: getAll,
  getSome:getSome,
  create:create,
};
