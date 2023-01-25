import { pixAPI } from "./pixFetch";

// Fetch date from pixApi then take two img sources, make img's in the html for them then display them.
export const pixUpdate = async (formInput) => {
  let data = await pixAPI(formInput);
  let pictures = [data.hits[0].previewURL, data.hits[1].previewURL];
  pictures.forEach(picture => {
    let div = document.getElementById('pictures');
    let img = document.createElement('img');
    img.src = picture;
    img.classList.add('formPictures');
    div.appendChild(img);
  })
};
