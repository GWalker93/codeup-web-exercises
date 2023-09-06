$(function() {
    // alert("Document has loaded")
    // var contents = $('#list').html();
    // alert(contents);
    // $('.codeup').css("border", "1px solid red");
    // $('li').css('font-size', '20px')
    // $('h1').css('background-color', 'yellow')
    // $('p').css('background-color', 'yellow')
    // $('li').css('background-color', 'yellow')
    // alert($("h1").html());
    // $('h1, p, li').css('background-color', 'yellow')


    $("h1").on("click", function () {
        $(this).css('background-color', 'red');
    });

    $("p").on("dblclick", function () {
        $(this).css('font-size', '18px');
    });



    $("li").on({
        mouseenter: function () {
            $(this).css("font-size" , "100px")
        },
        mouseleave: function () {
            $(this).css("font-size" , "10px")
        },
        }
    )

})


