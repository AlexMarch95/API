const galleryContainer = document.getElementById('photos')
const img1 = document.getElementById('one');
const img2 = document.getElementById('two');
const img3 = document.getElementById('three');
const img4 = document.getElementById('fourth');
const img5 = document.getElementById('five');
const img6 = document.getElementById('six');
const img7 = document.getElementById('seven');
const img8 = document.getElementById('eight');
const img9 = document.getElementById('nine');
const img10 = document.getElementById('ten');
const img11 = document.getElementById('eleven');
const img12 = document.getElementById('twelve');
let arr = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
const url = "https://api.unsplash.com/photos/random?query=spring&client_id=DpzH6k-RL_UKnms15_UeVg1tH9yLJ3hTb7czvVxAQGY"

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  const dataPhoto = data.urls.regular
  return dataPhoto
}
function creatingImg() {
  const img = document.createElement("img");
  // img.classList.add("gallery-img");
  img.src = `${getData()}`;
  img.alt = `image`;
  galleryContainer.append(img);
}

// getData();
async function creatingPhotos() {
  for (let i = 0; i < arr.length; i++) {
    const res = await fetch(url);
    const data = await res.json();
    const dataPhoto = data.urls.regular;
    arr[i].src = dataPhoto
  }
}
creatingPhotos()
creatingImg()