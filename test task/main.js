
var count = 0;
var text = $('#text'), area = $('#message'), countL = $('#countL');

$('#gene').click(function () {
    if (count < 10) {

        var url = 'https://gp-js-test.herokuapp.com/api';
        fetch(url).then(function (res) {
            return res.json();
        }).then(function (data) {

            function random(nameMas) {
                return data[nameMas][parseInt(Math.random() * data[nameMas].length)];
            }

            var adj = random('adjectives'), cit = random('cities');
            if (text.value != (adj + " " + cit)) {
                text.val((adj + " " + cit));
                area.append(adj + " " + cit + '\n');
                count++;
                countL.html(count + " of 10");

            }
        });


    }
});
$('#restart').click(function () {
    text.val('');
    area.html('');
    countL.html('0 of 10');
    count = 0;
});

/**
 * Created by isdel on 24-Feb-17.
 */
