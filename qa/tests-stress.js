/**
 * Created by sergey on 20.09.16.
 */
"use strict";
var loadtest = require('loadtest');
var expect = require('chai').expect;
suite('Стрессовые тесты', ()=> {
    test('Домашняя страница должна обрабатывать 50 ' +
        'запросов в секунду', done=> {
        var options = {
            url: 'http://localhost:3000',
            concurrency: 4,
            maxRequests: 50,
        };
        loadtest.loadTest(options, (err, result)=> {
            expect(!err);
            expect(result.totalTimeSeconds < 1);
            done();
        });
    });
});