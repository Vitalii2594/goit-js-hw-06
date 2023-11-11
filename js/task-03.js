const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryElement = document.querySelector(".gallery");

const ulElement = document.createElement("ul");
ulElement.classList.add("gallery-list");

images.forEach((image) => {
  const liElement = document.createElement("li");
  liElement.classList.add("gallery-item");

  const imgElement = document.createElement("img");
  imgElement.src = image.url;
  imgElement.alt = image.alt;

  liElement.appendChild(imgElement);
  ulElement.appendChild(liElement);
});

galleryElement.appendChild(ulElement);
