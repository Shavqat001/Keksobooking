const FILE_TYPE = ['jpg', 'png', 'jpeg', 'gif'];

let avatar = document.querySelector('#avatar');
let picture = document.querySelector('.ad-form-header__preview img');

avatar.addEventListener('change', () => {
  let file = avatar.files[0];
  let fileName = file.name.toLowerCase();

  const matches = FILE_TYPE.some(el => {
    return fileName.endsWith(el);
  });

  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      picture.src = reader.result;
    })
    reader.readAsDataURL(file);
  }
});
