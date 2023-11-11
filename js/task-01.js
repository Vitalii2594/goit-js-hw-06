const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.children;

console.log("Number of categories: " + categoryItems.length);

for (let i = 0; i < categoryItems.length; i++) {
  const categoryItem = categoryItems[i];
  const categoryTitle = categoryItem.firstElementChild;
  const categoryElements = categoryItem.children;

  console.log("Category: " + categoryTitle.textContent);
  console.log("Elements: " + categoryElements.length);
}
