//Start function Jquery scroll 400px 

$(window).scroll((function () {
    console.log($("#myCarousel").height())
    if ($(window).scrollTop() > $("#myCarousel").height()) {
        $('.scroll-to-top').show();
    } else {
        $('.scroll-to-top').hide();
    }
    let proportion = 0.2
    let ref = $("#myCarousel").height()*(proportion)
    if ($(window).scrollTop() > $("#myCarousel").height() - ref) {
        $("#firula")[0].style.backgroundColor = "white";
        $("#firula")[0].style.opacity = "1";

    } else {
        $("#firula")[0].style.backgroundColor = "white";
        $("#firula")[0].style.opacity = "0.5";
    }
}));

//End function Jquery scroll 400px 


$('#myTab a').on('click', function (event) {
    event.preventDefault()
    $(this).tab('show')
})







