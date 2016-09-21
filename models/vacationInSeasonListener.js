/**
 * Created by sergey on 20.09.16.
 */
var mongoose = require('mongoose');
var vacationInSeasonListenerSchema = mongoose.Schema({
    email: String,
    skus: [String],
});
var VacationInSeasonListener = mongoose.model('VacationInSeasonListener',
    vacationInSeasonListenerSchema);
module.exports = VacationInSeasonListener;