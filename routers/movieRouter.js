const express = require('express')
const router = express.Router()
const {movieController} = require('../controllers')

//================MOVIE=============================
router.get('/getMovie',movieController.getMovie)
router.post('/postMovie',movieController.postMovie)
router.post('/updateMovie',movieController.updateMovie)
router.delete('/deleteMovie',movieController.deleteMovie)

//===============CATEGORIES=============================
router.get('/getCategorie',movieController.getCategories)
router.post('/postCategorie',movieController.postCategorie)
router.post('/updateCategorie',movieController.updateCategorie)
router.delete('/deleteCategorie',movieController.deleteCategory)

//==============CONNECTION===================================
router.get('/getConnection',movieController.getConnection)
router.get('/deleteConnection',movieController.deleteConnection)
router.get('/postConnection',movieController.postConnection)
router.get('/getMovieName',movieController.getMovieName)
router.get('/getMovieCategory',movieController.getMovieCategory)

module.exports=router