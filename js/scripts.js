$(function() {
  $("#list").submit(function(event) {
    event.preventDefault();
    var items = ["item1", "item2", "item3", "item4"]
    var items2 = items.map(function(item) {
      return $("#" + item).val().toUpperCase();
    });
    items2.sort();


    for (var index = 0; index < items2.length; index += 1) {
      $(".list-items").append("<li>" + items2[index] + "</li>");
    }


    console.log(items2);
    $(".list-items").show();
    $("#list").hide();


  });
});
