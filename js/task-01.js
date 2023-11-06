const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.querySelectorAll("li.item");

console.log("Number of categories: " + categoryItems.length);

categoryItems.forEach(function (categoryItem) {
  const categoryTitle = categoryItem.querySelector("h2");
  const categoryElements = categoryItem.querySelectorAll("li");
  console.log("Category: " + categoryTitle.textContent);
  console.log("Elements: " + categoryElements.length);
});
