let changeElement = "background";

//Регулярка для выбора цифровых частей
let regEx = /\d+/ig;

$( function() {
    function hexFromRGB(r, g, b) {
        var hex = [
            r.toString( 16 ),
            g.toString( 16 ),
            b.toString( 16 )
        ];
        $.each( hex, function( nr, val ) {
            if ( val.length === 1 ) {
                hex[ nr ] = "0" + val;
            }
        });
        return hex.join( "" ).toUpperCase();
    }
    function refreshSwatch() {
        var red = $( "#red" ).slider( "value" ),
            green = $( "#green" ).slider( "value" ),
            blue = $( "#blue" ).slider( "value" ),
            hex = hexFromRGB( red, green, blue );

        //Изменение стилей
        switch(changeElement) {
            case "background":
                $("#swatch").css("background", "#" + hex);
                break;
            case "color":
                $("#swatch").css("color", "#" + hex);
                break;
            default:
                break;
        }
    }

    $( "#red, #green, #blue" ).slider({
        orientation: "horizontal",
        range: "min",
        max: 255,
        value: 127,
        slide:  refreshSwatch,
        change: refreshSwatch
    });


    // Начальное значение slider'ов
    $( "#red" ).slider( "value", 255 );
    $( "#green" ).slider( "value", 140 );
    $( "#blue" ).slider( "value", 60 );

    //Начальное значения стилей
    $("#swatch")[0].style.backgroundColor = "rgb(255, 140, 60)";
    $("#swatch")[0].style.color = "rgb(0, 0, 0)";
} );

$(".color-button").click(() => {

    // Устанавливается класс "select"
    $(".background-button").removeClass("select");
    $(".color-button").addClass("select");

    changeElement = "color";
    let rgbColor = $("#swatch")[0].style.color;

    let rgbArr = rgbColor.match(regEx);

    let red = rgbArr[0];
    let green = rgbArr[1];
    let bleu = rgbArr[2];

    //Задаются значение для slider'ов при переключении вкладок
    $( "#red" ).slider( "value", red );
    $( "#green" ).slider( "value", green );
    $( "#blue" ).slider( "value", bleu);
});

$(".background-button").click(() => {

    // // Устанавливается класс "select"
    $(".background-button").addClass("select");
    $(".color-button").removeClass("select");

    changeElement = "background";

    let rgbBackgroundColor = $("#swatch")[0].style.backgroundColor;


    let rgbArr = rgbBackgroundColor.match(regEx);

    let red = rgbArr[0];
    let green = rgbArr[1];
    let bleu = rgbArr[2];

    //Задаются значение для slider'ов при переключении вкладок
    $( "#red" ).slider( "value", red );
    $( "#green" ).slider( "value", green );
    $( "#blue" ).slider( "value", bleu);``
});