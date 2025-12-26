<template>
  <div class="home">
    <div class="container">
      <h1 class="main-title">Nanocrystal Electronics Laboratory</h1>

      <div class="research-image-container">
        <img src="/img/main_research.png" alt="Research Overview" class="research-image" />
      </div>

      <div class="research-description">
        <p>
          Our research focuses on understanding the fundamental physics, chemistry and materials
          science of nanocrystals and engineering the electronic properties of nanocrystals thin films.
          Utilizing these materials and unique strategies, we design low-cost and high performance
          electronic and opto-electronic devices, and realize the flexible and stretchable electronics
          for energy harvesting and wearable sensor technology.
        </p>
      </div>

      <div class="bottom-section">
        <div class="lab-image-container">
          <img src="/img/25.5.jpg" alt="Laboratory" class="lab-image" />
        </div>
        <div class="contact-section">
          <p class="korean-text">
            함께 연구할 학부생/대학원생의 연락을 기다립니다. 관심하여 상담을 원하는 학생은
            <a href="mailto:sjoh1982@korea.ac.kr">sjoh1982@korea.ac.kr</a>,
            <a href="mailto:sjoh1982@gmail.com">sjoh1982@gmail.com</a> 으로 연락주세요.
          </p>
          <p class="english-text">
            We are looking for highly motivated students. Please contact
            <a href="mailto:sjoh1982@korea.ac.kr">sjoh1982@korea.ac.kr</a>,
            <a href="mailto:sjoh1982@gmail.com">sjoh1982@gmail.com</a> for more information.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  padding: 3rem 0;
  background-color: #f5f5f5;
}

.main-title {
  font-size: 3rem;
  font-weight: 700;
  color: #000;
  text-align: center;
  margin: 0 0 3rem 0;
  padding-bottom: 1rem;
  border-bottom: 4px solid #000;
}

.research-image-container {
  max-width: 700px;
  margin: 0 auto 3rem;
  background: white;
  border: 2px solid #000;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}

.research-image {
  width: 100%;
  height: auto;
  display: block;
}

.research-description {
  max-width: 1100px;
  margin: 0 auto 4rem;
  padding: 0 1rem;
}

.research-description p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #000;
  margin: 0;
  text-align: left;
}

.bottom-section {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 0 1rem;
  border-top: 2px solid #000;
  padding-top: 3rem;
}

.lab-image-container {
  background: white;
  border: 2px solid #000;
  overflow: hidden;
}

.lab-image {
  width: 100%;
  height: auto;
  display: block;
  vertical-align: top;
}

.contact-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
}

.korean-text,
.english-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #000;
  margin: 0;
}

.korean-text {
  margin-bottom: 1rem;
}

.contact-section a {
  color: #6c757d;
  text-decoration: underline;
}

.contact-section a:hover {
  color: #5a6268;
}

@media (max-width: 968px) {
  .main-title {
    font-size: 2.5rem;
  }

  .research-image-container {
    min-height: 300px;
  }

  .research-description p {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .home {
    padding: 2rem 0;
  }

  .main-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .research-image-container {
    margin-bottom: 2rem;
    min-height: 250px;
  }

  .research-description {
    margin-bottom: 2.5rem;
  }

  .research-description p {
    font-size: 0.95rem;
  }

  .bottom-section {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-top: 2rem;
  }

  .korean-text,
  .english-text {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .research-image-container {
    min-height: 200px;
  }

  .research-description p {
    font-size: 0.9rem;
  }

  .korean-text,
  .english-text {
    font-size: 0.85rem;
  }
}
</style>
