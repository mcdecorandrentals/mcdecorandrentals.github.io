$(document).ready(function () {

    var $imageSrc;
    $('.gallery img').click(function () {
        $imageSrc = $(this).data('bigimage');
    });
    console.log($imageSrc);

    $('#myModal').on('shown.bs.modal', function (e) {
        $("#image").attr('src', $imageSrc);
    })

    $('#myModal').on('hide.bs.modal', function (e) {
        $("#image").attr('src', '');
    })

});