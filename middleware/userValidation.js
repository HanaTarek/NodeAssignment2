function ValidateUser ( req , res , next ){
       
    const { name , age } = req.body ; 
    if ( age < 12  ){
        res.status(404).send({ error :" small age "} );
    }
    if( !name ){
        res.status(404).send({ error :" name is required"});
    }
    next();
  

}


module.exports;
