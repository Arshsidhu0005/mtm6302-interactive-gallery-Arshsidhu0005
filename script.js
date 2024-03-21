const images = [
  { thumb: "./images/thumbnails/cat.jpg", src: "./images/cat.jpg" },
  { thumb: "./images/thumbnails/dog.jpg", src: "./images/dog.jpg" },
  { thumb: "./images/thumbnails/river.jpg", src: "./images/river.jpg" },
  { thumb: "./images/thumbnails/mountain.jpg", src: "./images/mountain.jpg" },
  { thumb: "./images/thumbnails/sky.jpg", src: "./images/sky.jpg" },
  { thumb: "./images/thumbnails/land.jpg", src: "./images/land.jpg" },
  { thumb: "./images/thumbnails/sun.jpg", src: "./images/sun.jpg" },
  { thumb: "./images/thumbnails/earth.jpg", src: "./images/earth.jpg" },
  { thumb: "./images/thumbnails/fire.jpg", src: "./images/fire.jpg" },
  { thumb: "./images/thumbnails/water.jpeg", src: "./images/water.jpeg" },
  { thumb: "./images/thumbnails/lake.jpg", src: "./images/lake.jpg" },
  { thumb: "./images/thumbnails/tower.jpg", src: "./images/tower.jpg" }
];

function populateGallery() {
  const galleryElement = document.getElementById("image-gallery");

  images.forEach((image, index) => {
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image-container");

    const img = document.createElement("img");
    img.setAttribute("src", image.thumb);
    img.setAttribute("alt", "Image " + (index + 1));
    img.addEventListener("click", () => openFullSize(index));

    imageDiv.appendChild(img);
    galleryElement.appendChild(imageDiv);
  });
}

function openFullSize(index) {
  const fullsize = document.getElementById("fullsize");
  const fullsizeImg = document.querySelector(".fullsize-img");
  const existingCaption = document.querySelector(".fullsize .caption");
  if (existingCaption) {
    existingCaption.remove();
  }
  const caption = document.createElement("div");
  caption.classList.add("caption");
  caption.textContent = "An image";
  fullsize.appendChild(caption);
  fullsizeImg.setAttribute("src", images[index].src);
  fullsizeImg.addEventListener("click", () => closeFullSize());
  fullsize.style.display = "flex";
}

function closeFullSize() {
  const fullsize = document.getElementById("fullsize");
  fullsize.style.display = "none";
}

populateGallery();
