/**
 * Created by sergey on 09.09.16.
 */
suite('Тесты страницы "О..."', function(){
    test('страница должна содержать ссылку на страницу контактов', function(){
        assert($('a[href="/contact"]').length);
    });
});