/**
 * Created by sergey on 21.09.16.
 */
const Attraction =require('../models/attraction');

exports.getAttraction = function(req, content, cb){
    Attraction.find({ approved: true }, function(err, attractions){
        if(err) return cb({ error: 'Внутренняя ошибка.' });
        cb(null, attractions.map(function(a){
            return {
                name: a.name,
                description: a.description,
                location: a.location,
            };
        }));
    });
};
exports.createAttraction = function(req, content, cb){
    var a = new Attraction({
        name: req.body.name,
        description: req.body.description,
        location: { lat: req.body.lat, lng: req.body.lng },
        history: {
            event: 'created',
            email: req.body.email,
            date: new Date(),
        },
        approved: false,
    });
    a.save(function(err, a){
        if(err) return cb({ error: 'Невозможно добавить ' +
        'достопримечательность.' });
        cb(null, { id: a._id });
    });
};
exports.getByIdAttraction = function(req, content, cb){
    Attraction.findById(req.params.id, function(err, attraction){
        if(err) return cb({ error: 'Невозможно извлечь ' +
        'достопримечательность.' });
        cb(null, {
            name: attraction.name,
            description: attraction.description,
            location: attraction.location,
        });
    });
};