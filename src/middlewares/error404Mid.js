function error404 (req, res, next){
    res.status(404).render('Error')
}

module.exports = error404