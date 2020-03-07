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

module.exports = {
  getAll: getAll,
  getSome:getSome
};
