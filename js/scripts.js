$(function() {
  $("#list").submit(function(event) {
    event.preventDefault();
    var items = ["item1", "item2", "item3", "item4"]
    var items2 = items.map(function(item) {
      return $("#" + item).val().toUpperCase();
    });
    items2.sort();

    items2.forEach(function(item){
      $(".list-items").append("<li>" + item + "</li>");
    });



    console.log(items2);
    $(".list-items").show();
    $("#list").hide();


  });
});
