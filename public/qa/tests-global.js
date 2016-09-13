/**
 * Created by sergey on 09.09.16.
 */
suite('Глобальный тесты', function(){
    test('У данной страницы допустимый заголовок', function(){
        assert(document.title && document.title.match(/\S/) &&
            document.title.toUpperCase() !== 'TODO');
    });
});