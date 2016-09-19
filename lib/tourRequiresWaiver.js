/**
 * Created by sergey on 14.09.16.
 */
module.exports = function(req,res,next){
    var cart = req.session.cart;
    if(!cart) return next();
    if(cart.some(function(item){ return item.product.requiresWaiver; })){
        if(!cart.warnings) {
            cart.warnings = [];
        }
        cart.warnings.push('Один или более выбранных вами' +
            'туров требуют документа про отказ от ответственности.');
    }
    next();
};