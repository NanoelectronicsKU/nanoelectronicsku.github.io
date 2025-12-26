<template>
  <div class="research">
    <div class="page-header">
      <div class="header-image"></div>
    </div>
    <div class="container">
      <h1 class="page-title">Research</h1>

      <div class="research-layout">
        <div class="research-image">
          <img :src="`/img/${researchData.image}`" alt="Research" />
        </div>
        <div class="research-content">
          <div class="research-description">
            <p>{{ researchData.description }}</p>
          </div>
          <div v-for="(section, index) in researchData.sections" :key="index" class="research-section">
            <h2>{{ section.title }}</h2>
            <p>{{ section.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import researchData from '../data/research.json'

export default {
  name: 'Research',
  data() {
    return {
      researchData
    }
  }
}
</script>

<style scoped>
.research {
  padding-bottom: 2rem;
}

.page-header {
  margin-bottom: 3rem;
}

.header-image {
  background: url('/img/lab1.jpg');
  background-size: cover;
  background-position: center;
  height: 300px;
  position: relative;
}

.header-image::after {
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

.research-layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.research-image {
  position: sticky;
  top: 100px;
  height: fit-content;
}

.research-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.research-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.research-description {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid #6c757d;
}

.research-description p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin: 0;
}

.research-section {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid #6c757d;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.research-section:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.research-section h2 {
  color: #6c757d;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.research-section p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #555;
  margin: 0;
}

@media (max-width: 768px) {
  .header-image {
    height: 200px;
  }

  .page-title {
    font-size: 2rem;
    margin: 1.5rem 0;
  }

  .research-layout {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .research-image {
    position: static;
  }

  .research-description {
    padding: 1.5rem;
  }

  .research-description p {
    font-size: 1rem;
  }

  .research-section {
    padding: 1.5rem;
  }

  .research-section h2 {
    font-size: 1.5rem;
  }

  .research-section p {
    font-size: 1rem;
  }
}
</style>
