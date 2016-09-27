import $ from 'jquery';

let timeout = null

$(".app-login form").on("submit", (e) => {
  e.preventDefault();

  $(".app-login .app-body").addClass("__loading")

  clearTimeout(timeout)
  timeout = setTimeout(() => {
    $(".app-login .app-body").removeClass("__loading")
  }, 3000)
});