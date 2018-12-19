$(function () {
       addListeners();
       $(".plus-icon").click(function () {
           $(this).toggleClass("fa-plus-square").toggleClass("fa-minus-square");
           $(".add-panel").slideToggle();
       });
       $("#Add-text").change(function () {
           let st = $(this).val();
           $("ul").append(setItem(st));
           addListeners();
           $(this).val("");
       });
});
function addListeners() {

    $(".check").unbind().bind("click",function () {
        $(this).siblings(".to-do").removeClass("to-do").addClass("done");
        $(this).hide();
        $(this).siblings(".todoCheck").show();
    });
    $(".todoCheck").unbind().bind("click",function () {
        $(this).siblings(".done").removeClass("done").addClass("to-do");
        $(this).hide();
        $(this).siblings(".check").show();
    });
    $(".edit").unbind().bind("click",function () {
        let st = $(this).siblings("strong").text();
        let inp = $(this).siblings(".f-center");
        inp.slideToggle();
        $(".f-center").not(inp).slideUp();
        console.log(st);
        inp.children().val(st);
    });
    $(".delete").unbind().bind("click",function () {
        $(this).closest("li").fadeOut(function () {
            $(this).remove();
        });

    });
    $(".edit-text").unbind().bind("change",function () {
        let str = $(this).val();
        $(this).parent().siblings("strong").text(str);
        $(this).parent().slideUp();
    });
}
function setItem(itemString) {
    return "<li>" +
        '<span class="indicator to-do"></span>' +
        '<strong>' + itemString + '</strong>' +
        '<i class="far fa-check-circle check" title="Mark As Done"></i>' +
        '<i class="far fa-minus-square todoCheck d-none" title="Mark As ToDo"></i>' +
        '<i class="far fa-edit edit" title="edit"></i>' +
        '<i class="far fa-trash-alt delete" title="delete"></i>' +
        '<div class="w-100 f-center d-none">' +
        '<input class="edit-text" type="text">' +
        '</div>' +  "<hr>" +
        '</li>' ;
}