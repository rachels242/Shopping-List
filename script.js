$("button").click(function(event) {
    $("ul").append(
      "<li>" +
      [""][Math.floor(Math.random())] + "</li>"
    );
  });

    $("ul").on("click", ".shopping-item-toggle", function() {
      $(this).parent().parent().find('.shopping-item').toggleClass("shopping-item__checked");
  });


  $("ul").on("click", ".shopping-item-delete", function() {
      event.preventDefault();
    $(event.target).closest("li").remove();
  });


  
