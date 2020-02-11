module.exports = function (pool) {
    var getpro = ""
    var accType = ""

    async function provinces(pro){
     getpro = pro


    }

    async function getAccommodation(type){
       accType = type 
    }

    async function getVisitor(){
  
        await pool.query('insert into visited (name_, email, province, acc_type, area, dates) values ($1, $2, $3, $4, $5,$6')
    }


    return{
        getVisitor ,
        provinces,
        getAccommodation
    }
}