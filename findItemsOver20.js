function findItemsOver20(items) {
  var itemsOver20 = [];
  for (var i in items) {
    var item = items[i];
    if (item.qty > 20) {
      itemsOver20.push(item);
    }
  }
  return itemsOver20;
}
