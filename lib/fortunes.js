/**
 * Created by sergey on 08.09.16.
 */
let fortunes = [
    "Победи свои страхи, или они победят тебя.",
    "Рекам нужны истоки.",
    "Не бойся неведомого.",
    "Тебя ждет приятный сюрприз.",
    "Будь проще везде, где только можно."
];

exports.getFortune = function(){
    let idx= Math.floor(Math.random() * fortunes.length);
    return fortunes[idx];
};