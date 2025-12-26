<template>
  <div class="gallery">
    <div class="page-header"></div>
    <div class="container">
      <h1 class="page-title">Gallery</h1>

      <div v-for="(yearData, yearIndex) in galleryData.years" :key="yearIndex" class="year-section">
        <h2 class="year-title">{{ yearData.year }}</h2>

        <div class="gallery-grid">
          <div v-for="(image, index) in yearData.images" :key="index" class="gallery-item">
            <div class="gallery-image">
              <img :src="`/img/${image.src}`" :alt="image.caption" @click="openLightbox(yearIndex, index)" />
            </div>
            <p class="gallery-caption">{{ image.caption }}</p>
          </div>
        </div>
      </div>

      <!-- Lightbox -->
      <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
        <button class="lightbox-close" @click="closeLightbox">&times;</button>
        <button class="lightbox-prev" @click.stop="prevImage">&lsaquo;</button>
        <button class="lightbox-next" @click.stop="nextImage">&rsaquo;</button>
        <div class="lightbox-content" @click.stop>
          <img :src="`/img/${currentImage.src}`" :alt="currentImage.caption" />
          <p class="lightbox-caption">{{ currentImage.caption }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import galleryData from '../data/gallery.json'

export default {
  name: 'Gallery',
  data() {
    return {
      galleryData,
      lightboxOpen: false,
      currentYearIndex: 0,
      currentImageIndex: 0
    }
  },
  computed: {
    currentImage() {
      return this.galleryData.years[this.currentYearIndex].images[this.currentImageIndex]
    },
    allImages() {
      // Flatten all images with year info for navigation
      const images = []
      this.galleryData.years.forEach((yearData, yearIndex) => {
        yearData.images.forEach((image, imageIndex) => {
          images.push({ yearIndex, imageIndex, ...image })
        })
      })
      return images
    }
  },
  methods: {
    openLightbox(yearIndex, imageIndex) {
      this.currentYearIndex = yearIndex
      this.currentImageIndex = imageIndex
      this.lightboxOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeLightbox() {
      this.lightboxOpen = false
      document.body.style.overflow = 'auto'
    },
    nextImage() {
      // Get current flat index
      let flatIndex = this.allImages.findIndex(
        img => img.yearIndex === this.currentYearIndex && img.imageIndex === this.currentImageIndex
      )
      flatIndex = (flatIndex + 1) % this.allImages.length
      const nextImg = this.allImages[flatIndex]
      this.currentYearIndex = nextImg.yearIndex
      this.currentImageIndex = nextImg.imageIndex
    },
    prevImage() {
      // Get current flat index
      let flatIndex = this.allImages.findIndex(
        img => img.yearIndex === this.currentYearIndex && img.imageIndex === this.currentImageIndex
      )
      flatIndex = (flatIndex - 1 + this.allImages.length) % this.allImages.length
      const prevImg = this.allImages[flatIndex]
      this.currentYearIndex = prevImg.yearIndex
      this.currentImageIndex = prevImg.imageIndex
    }
  },
  beforeUnmount() {
    document.body.style.overflow = 'auto'
  }
}
</script>

<style scoped>
.gallery {
  padding-bottom: 2rem;
}

.page-header {
  background: url('/img/gal.jpg');
  background-size: cover;
  background-position: center;
  height: 300px;
  position: relative;
}

.page-header::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1));
}

.page-title {
  text-align: center;
  font-size: 3rem;
  margin: 2rem 0;
  color: #333;
}

.year-section {
  margin-bottom: 4rem;
}

.year-title {
  font-size: 2rem;
  font-weight: 700;
  color: #6c757d;
  margin-bottom: 2rem;
  padding-bottom: 0.75rem;
  border-bottom: 3px solid #6c757d;
  text-align: left;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.gallery-item {
  background: #f8f9fa;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.gallery-image {
  width: 100%;
  height: 400px;
  overflow: hidden;
  cursor: pointer;
}

.gallery-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-image:hover img {
  transform: scale(1.05);
}

.gallery-caption {
  padding: 1rem;
  text-align: center;
  font-size: 0.95rem;
  color: #555;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Lightbox */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  cursor: pointer;
}

.lightbox-content {
  max-width: 90%;
  max-height: 90vh;
  text-align: center;
  cursor: default;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  margin: 0 auto;
}

.lightbox-caption {
  color: white;
  margin-top: 1rem;
  font-size: 1.1rem;
}

.lightbox-close,
.lightbox-prev,
.lightbox-next {
  position: fixed;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid white;
  color: white;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 2001;
}

.lightbox-close:hover,
.lightbox-prev:hover,
.lightbox-next:hover {
  background: rgba(255, 255, 255, 0.3);
}

.lightbox-close {
  top: 2rem;
  right: 2rem;
  line-height: 1;
}

.lightbox-prev {
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
}

.lightbox-next {
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
}

@media (max-width: 768px) {
  .page-header {
    height: 200px;
  }

  .page-title {
    font-size: 2rem;
    margin: 1.5rem 0;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .gallery-image {
    height: 350px;
  }

  .lightbox-close,
  .lightbox-prev,
  .lightbox-next {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }

  .lightbox-close {
    top: 1rem;
    right: 1rem;
  }

  .lightbox-prev {
    left: 1rem;
  }

  .lightbox-next {
    right: 1rem;
  }
}
</style>
