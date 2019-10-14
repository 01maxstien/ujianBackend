const {sqlDB} = require('../database')

module.exports={
    //===================================MOVIES======================================
    getMovie : (req,res)=>{
        var sql = `SELECT * from movies`
        sqlDB.query(sql,(err,results)=>{
            if(err) return res.status(500).send('Gagal COK')

            res.status(200).send(results)
        })
    },postMovie : (req,res)=>{
        var sql = `INSERT INTO movies SET?`
        sqlDB.query(sql,req.body,(err,results)=>{
            if(err) return res.status(500).send('Gagal COK')

            res.status(200).send(results)
        })
    },deleteMovie : (req,res)=>{
        var sql = `DELETE from movies WHERE id=${req.query.id}`
        sqlDB.query(sql,req.body,(err,results)=>{
            if(err) return res.status(500).send('Gagal COK')

            res.status(200).send(results)
        })
    },updateMovie : (req,res)=>{
        var sql = `UPDATE movies SET nama='${req.body.nama}' WHERE id=${req.body.id}`
        sqlDB.query(sql,req.body,(err,results)=>{
            if(err) return res.status(500).send('Gagal COK')

            res.status(200).send(results)
        })
    }
    //===================================CATEGORIES======================================
    ,getCategories : (req,res)=>{
        var sql = `SELECT * from categories`
        sqlDB.query(sql,(err,results)=>{
            if(err) return res.status(500).send('Gagal COK')

            res.status(200).send(results)
        })
    },postCategorie : (req,res)=>{
        var sql = `INSERT INTO categories SET?`
        sqlDB.query(sql,req.body,(err,results)=>{
            if(err) return res.status(500).send('Gagal COK')

            res.status(200).send(results)
        })
    },updateCategorie : (req,res)=>{
        var sql = `UPDATE categories SET nama='${req.body.nama}' WHERE id=${req.body.id}`
        sqlDB.query(sql,req.body,(err,results)=>{
            if(err) return res.status(500).send('Gagal COK')

            res.status(200).send(results)
        })
    },deleteCategory : (req,res)=>{
        var sql = `DELETE from categories WHERE id=${req.query.id}`
        sqlDB.query(sql,req.body,(err,results)=>{
            if(err) return res.status(500).send('Gagal COK')

            res.status(200).send(results)
        })
    }
    //===================================CONNECTION======================================
    ,getConnection:(req,res)=>{
        var sql =`SELECT m.nama as namaMovie, k.nama as namaCategory
                    from movies  m 
                    join movcat c on m.id = m.id
                    join categories k on k.id=c.idmovie;` 

        sqlDB.query(sql,req.body,(err,results)=>{
            if(err) return res.status(500).send('Gagal COK')

            res.status(200).send(results)
        })
    },postConnection:(req,res)=>{
        var sql =`INSERT INTO  movcat 
                  SELECT m.nama as namaMovie, k.nama as namaCategory
                    from movies  m 
                    join movcat c on m.id = m.id
                    join categories k on k.id=c.idmovie;` 
                    
        sqlDB.query(sql,req.body,(err,results)=>{
            if(err) return res.status(500).send('Gagal COK')

            res.status(200).send(results)
        })
    }
    ,deleteConnection:(req,res)=>{
        var sql =`DELETE m.nama as namaMovie, k.nama as namaCategory
                    from movies  m 
                    join movcat c on m.id = m.id
                    join categories k on k.id=c.idmovie
                    where m.nama=${req.query.nama};` 

        sqlDB.query(sql,req.body,(err,results)=>{
            if(err) return res.status(500).send('Gagal COK')

            res.status(200).send(results)
        })
    }
}