// @ts-nocheck
const Resto = require('../models/resto');

//créer un resto
exports.newresto = (req, res, next) => {
  const resto = new Resto({
    resto: req.body.resto, 
    detail: req.body.detail, 
    frozen: false,
    num: req.body.num,
    adresse: req.body.adresse, }); 
  resto.save()
    .then(() => { res.status(201).json({ message: 'todo céer' }); })
    .catch((error) => { res.status(401).json({ error: 'Invalid requete!'+error }); });
};

//liste de tous les resto
exports.getAllResto = (req, res, next) => {
  Resto.find()
  .then((restos) => { res.status(200).json({ restos }); })
  .catch((error) => { 
    console.log(error)
    res.status(401).json({ error: 'Invalid request!' }); 
  }); 
};
//pour un resto
exports.getOneResto = (req, res, next) => {
  Resto.findById({ _id: req.params.id })
  .then((resto) => { res.status(200).json({ data: resto }); })
  .catch((error) => { res.status(401).json({ error: 'Invalid request!' }); }); 
};

exports.updateResto = (req, res, next) => {
  const resto = { ...req.body }; 
  Resto.updateOne({ _id: req.params.id }, { ...resto, _id: req.params.id })
  .then(() => { res.status(200).json({ message: 'mise à jour' }); })
  .catch((error) => { res.status(401).json({ error: 'Invalid request!' }); }); 
};
exports.deleteResto = (req, res, next) => {
  Todo.findOne({ _id: req.params.id })
  .then(resto => { 
    Resto.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'todo supprimé' }))
    .catch(error => res.status(401).json({ error: 'Invalid request!' })); 
  })
  .catch(error => res.status(401).json({ error: 'Invalid request!' })); 
};