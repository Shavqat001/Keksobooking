const FILE_TYPE = ['jpg', 'png', 'jpeg', 'gif'];

let uploadImages = document.querySelector('.ad-form__upload input[type="file"]');
let placeForPhoto = document.querySelector('.ad-form__photo');

uploadImages.addEventListener('change', () => {
  let file = uploadImages.files[0];
  let fileName = file.name.toLowerCase();

  const matches = FILE_TYPE.some(el => {
    return fileName.endsWith(el);
  });

  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      placeForPhoto.style.background = `url('${reader.result}') center/cover no-repeat`;
    })
    reader.readAsDataURL(file);
  }
});
