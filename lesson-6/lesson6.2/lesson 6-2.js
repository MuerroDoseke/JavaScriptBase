const gallery = {
  settings: {
    previewSelector: '.mySuperGallery',
    openedImageWrapperClass: 'galleryWrapper',
    openedImageClass: 'galleryWrapper__image',
    openedImageScreenClass: 'galleryWrapper__screen',
    openedImageCloseButtonClass: 'galleryWrapper__close',
    openedImageCloseButtonSrc: 'images/gallery/close.png',
    openedImageNextButtonSrc: 'images/gallery/next.png',
    openedImageNextButtonClass: 'galleryWrapper__next',
    openedImageBackButtonSrc: 'images/gallery/back.png',
    openedImageBackButtonClass: 'galleryWrapper__back',
    imageNotFoundSrc: 'images/gallery/allright.jpg',
  },

  init(settings) {
    this.settings = Object.assign(this.settings, settings);
    document.querySelector(this.settings.previewSelector).addEventListener('click', event => this.containerClickHandler(event));
  },

  containerClickHandler(event) {
    if (event.target.tagName !== 'IMG') {
      return;
    }
    this.openedImageEl = event.target;
    this.openImage(event.target.dataset.full_image_url);
  },

  openImage(src) {
    const openedImageEl = this.getScreenContainer().querySelector(`.${this.settings.openedImageClass}`);
    const img = new Image();
    img.onload = () => openedImageEl.src = src;
    img.onerror = () => openedImageEl.src = this.settings.imageNotFoundSrc;
    img.src = src;
  },

  getScreenContainer() {
    const galleryWrapperElement = document.querySelector(`.${this.settings.openedImageWrapperClass}`);
    if (galleryWrapperElement) {
      return galleryWrapperElement;
    }
    return this.createScreenContainer();
  },

  createScreenContainer() {
    const galleryWrapperElement = document.createElement('div');
    galleryWrapperElement.classList.add(this.settings.openedImageWrapperClass);
    const backButton = new Image();
    backButton.classList.add(this.settings.openedImageBackButtonClass);
    backButton.src = this.settings.openedImageBackButtonSrc;
    galleryWrapperElement.appendChild(backButton);
    backButton.addEventListener('click', () => {
      this.openedImageEl = this.getPrevImage();
      this.openImage(this.openedImageEl.dataset.full_image_url);
    });
    const nextButton = new Image();
    nextButton.classList.add(this.settings.openedImageNextButtonClass);
    nextButton.src = this.settings.openedImageNextButtonSrc;
    galleryWrapperElement.appendChild(nextButton);

    nextButton.addEventListener('click', () => {
      this.openedImageEl = this.getNextImage();
      this.openImage(this.openedImageEl.dataset.full_image_url);
    });
    const galleryScreenElement = document.createElement('div');
    galleryScreenElement.classList.add(this.settings.openedImageScreenClass);
    galleryWrapperElement.appendChild(galleryScreenElement);
    const closeImageElement = new Image();
    closeImageElement.classList.add(this.settings.openedImageCloseButtonClass);
    closeImageElement.src = this.settings.openedImageCloseButtonSrc;
    closeImageElement.addEventListener('click', () => this.close());
    galleryWrapperElement.appendChild(closeImageElement);
    const image = new Image();
    image.classList.add(this.settings.openedImageClass);
    galleryWrapperElement.appendChild(image);
    document.body.appendChild(galleryWrapperElement);
    return galleryWrapperElement;
  },

  getNextImage() {
    const nextSibling = this.openedImageEl.nextElementSibling;
    return nextSibling ? nextSibling : this.openedImageEl.parentElement.firstElementChild;
  },

  getPrevImage() {
    const prevSibling = this.openedImageEl.previousElementSibling;
    if (prevSibling) {
      return prevSibling;
    } else {
      return this.openedImageEl.parentElement.lastElementChild;
    }
  },

  close() {
    document.querySelector(`.${this.settings.openedImageWrapperClass}`).remove();
  }
};

window.onload = () => gallery.init({previewSelector: '.galleryPreviewsContainer'});