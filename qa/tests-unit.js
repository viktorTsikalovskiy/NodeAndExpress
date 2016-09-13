/**
 * Created by sergey on 09.09.16.
 */
var fortune = require('../lib/fortunes.js');
var expect = require('chai').expect;
suite('Тесты печений-предсказаний', function(){
    test('getFortune() должна возвращать предсказание', function(){
        expect(typeof fortune.getFortune() === 'string');
    });
});