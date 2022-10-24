// Question 5: (Adding interactivity features on apple.com website’s footer section)
// The following question is based on the responsive Apple website you built back in phase 1. As
// we didn't cover JavaScript back then, we didn't implement some of the interactive features of
// the website that are provided by JavaScript. You can use apple.com’s responsive code we wrote
// from the link provided below to implement the interactivity of apple.com's footer section.
// Responsive code for apple.com:
// ● https://evangadi.com/files/apple/responsive-code-jquery-for-footer.zip

// You can refer to apple.com’s live website to check how the footer behaves:
// ● https://www.apple.com/
// In summary, the footer fully displays all the five columns in expanded state while viewed on
// desktop or tablet size devices. You are required to implement the following mobile size
// features.
// Features on mobile size devices:
// ● Each of the five columns collapse to a single column. Make these columns collapse to
// a single column.
// ● All the sub-links under each <h3> are hidden. Hide these sub-links
// ● There is also a newly added "+" sign on the right side of each <h3> to trigger the
// expansion of the sub-links upon onclick event. Add the added "+" sign on the right
// side of each <h3>. (Hint: everything up to this point can be achieved without using
// any JavaScript at all. Bootstrap and CSS would be enough to achieve these).
// ● When users click on the "+" sign, the hidden sub-links under the respective <h3>
// slide down and show. Then the "+" sign changes to the "x" sign. (Hint: Use jQuery to
// implement the following feature)
// ● When users click on the "+" sign, the sub-links slide up and get hidden. Note: this
// interactivity only happens on mobile size devices. (Hint: Use jQuery to implement
// the following feature)

// $("#shop").click(function () {
//     $(".shop1").toggle();
// });

// $("#service").click(function () {
//     $(".service1").toggle();
// });
// // -----------------------------------

// $("footer-links-wrapper").first("h3").click(function () {
//     $("ul").toggle();
// });
// $(').click(function() {
//     $(this).children('ul').toggle()
// })

// $("h3:contains('Shop and Learn'").click(function () {
//     $("h3:contains('Shop and Learn'):ul").toggle();
// });

// $("h3").click(function (x) {
//     $(this).next("ul").toggle(500)
// })

// $("h3").on({
// click: function () {
//     $("this").next("ul").css("max-width <= 768px", toggle(500));
// }
// })

if($(window).width() <= 768) {
var hello =$(".footer-links-wrapper  h3 ")
console.log(hello)
// 
$(document).ready(function() {
    hello.click(function (e) {
        $(this).next().toggle();
        $(this).toggleClass('expanded');
        });
});
}

// $(".product-title").removeClass("product-title")

// $('.bodytext').css({'color':'red'})

// console.log($("#navbarResponsive").attr("id"))
// $("#navbarResponsive").removeAttr("id")
// console.log($("#navbarResponsive").attr("id"))

// $("#page-top").addClass("abebe");
// $("#page-top").toggleClass("abebe");
// $("#page-top").addClass("abebe1");