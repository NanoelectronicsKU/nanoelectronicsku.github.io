<template>
  <div class="home">
    <div class="container">
      <h1 class="main-title">Nanocrystal Electronics Laboratory</h1>

      <div class="research-image-container">
        <img
          src="/img/main_research.png"
          alt="Research Overview"
          class="research-image"
        />
      </div>

      <div class="research-description">
        <p>
          Our research focuses on understanding the fundamental physics, chemistry and materials
          science of nanocrystals and engineering the electronic properties of nanocrystal thin films.
          Utilizing these materials and unique strategies, we design low-cost and high-performance
          electronic and optoelectronic devices, and realize flexible and stretchable electronics
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
            <a href="mailto:sjoh1982@gmail.com">sjoh1982@gmail.com</a>
            으로 연락주세요.
          </p>

          <p class="english-text">
            We are looking for highly motivated students. Please contact
            <a href="mailto:sjoh1982@korea.ac.kr">sjoh1982@korea.ac.kr</a>,
            <a href="mailto:sjoh1982@gmail.com">sjoh1982@gmail.com</a>
            for more information.
          </p>
        </div>
      </div>

      <section class="research-highlights">
        <h2 class="section-title">Research Highlights</h2>

        <div class="highlight-list">
          <article
            v-for="(item, index) in highlights"
            :key="index"
            class="highlight-item"
            :class="{ 'has-image': item.image }"
          >
            <div class="highlight-year">{{ item.year }}</div>

            <div class="highlight-content">
              <span class="highlight-category">{{ item.category }}</span>
              <h3 class="highlight-title">{{ item.title }}</h3>
              <p class="highlight-description">{{ item.description }}</p>
            </div>

            <div v-if="item.image" class="highlight-image-container">
              <img :src="item.image" :alt="item.title" class="highlight-image" />
            </div>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      // 항목을 추가/수정할 때는 이 배열만 고치면 됩니다.
      // image는 선택사항입니다. 없으면 이미지 칸 없이 표시됩니다.
      // 이미지 파일은 public/img/ 폴더에 넣고 '/img/파일명' 으로 적어주세요.
      highlights: [
        {
          year: '2026',
          category: 'Award',
          title: 'JSST best presentation award (S. Oh)',
          description:
            'Wavelength-Selective Carrier Dynamics in a Quantum Dot-Based Dual-Input Upconversion Imaging Device',
          image: '/img/2026 JSST Award.png'
        },
        {
          year: '2026',
          category: 'Award',
          title: 'KIEEME best presentation award (S. Oh)',
          description:
            'Dual-Input Modulation of Carrier Dynamics in a Multispectral Quantum Dot Upconversion Infrared Image Sensor',
          image: '/img/2026 KIEEME Award.png'
        },
        {
          year: '2026',
          category: 'Award',
          title: 'QD 2026 poster award (J. Park)',
          description:
            'Scalable Quantum Dot Lithography via Functional Photoresist: Simultaneous Patterning and Surface Modification',
          image: '/img/2026 QD Award.png'
        },
        {
          year: '2026',
          category: 'Publication',
          title:
            'Designing a Quantum Dot Upconversion Infrared Image Sensor via a Photomultiplication Mechanism',
          description: 'A Decade of Excellence in Energy Research (ACS Energy Letters)',
          image: ''
        },
        {
          year: '2026',
          category: 'Publication',
          title:
            'High-Affinity Ligand-Enhanced Passivation of Group III–V Colloidal Quantum Dots for Sensitive Near-Infrared Photodetection',
          description: 'A Decade of Excellence in Energy Research (ACS Energy Letters)',
          image: ''
        }
      ]
    }
  }
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
  padding: 3rem 1rem 0;
  border-top: 2px solid #000;
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

/* Research Highlights */
.research-highlights {
  max-width: 1100px;
  margin: 4rem auto 0;
  padding: 3rem 1rem 0;
  border-top: 2px solid #000;
}

.section-title {
  margin: 0 0 2rem;
  font-size: 2rem;
  font-weight: 700;
  color: #000;
}

.highlight-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.highlight-item {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: #fff;
  border: 1px solid #d7d7d7;
}

/* 이미지가 있는 항목: 연도 | 내용 | 이미지 */
.highlight-item.has-image {
  grid-template-columns: 90px 1fr 240px;
  align-items: start;
}

.highlight-image-container {
  border: 1px solid #d7d7d7;
  background: #fff;
  overflow: hidden;
}

.highlight-image {
  width: 100%;
  height: auto;
  display: block;
}

.highlight-year {
  font-size: 1.3rem;
  font-weight: 700;
  color: #000;
  padding-top: 0.15rem;
}

.highlight-content {
  min-width: 0;
}

.highlight-category {
  display: inline-block;
  margin-bottom: 0.7rem;
  padding: 0.25rem 0.6rem;
  border: 1px solid #000;
  font-size: 0.8rem;
  font-weight: 700;
  line-height: 1.4;
  background-color: #f5f5f5;
}

.highlight-title {
  margin: 0 0 0.6rem;
  font-size: 1.2rem;
  line-height: 1.5;
  color: #000;
}

.highlight-description {
  margin: 0;
  font-size: 1rem;
  line-height: 1.7;
  color: #333;
}

@media (max-width: 968px) {
  .main-title {
    font-size: 2.5rem;
  }

  .highlight-item.has-image {
    grid-template-columns: 90px 1fr 180px;
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

  .research-highlights {
    margin-top: 3rem;
    padding-top: 2rem;
  }

  .section-title {
    font-size: 1.6rem;
  }

  .highlight-item,
  .highlight-item.has-image {
    grid-template-columns: 70px 1fr;
    gap: 1rem;
    padding: 1.25rem;
  }

  .highlight-item.has-image .highlight-image-container {
    grid-column: 1 / -1;
  }

  .highlight-year {
    font-size: 1.1rem;
  }

  .highlight-title {
    font-size: 1.05rem;
  }

  .highlight-description {
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

  .section-title {
    font-size: 1.4rem;
  }

  .highlight-item,
  .highlight-item.has-image {
    display: block;
  }

  .highlight-image-container {
    margin-top: 1rem;
  }

  .highlight-year {
    margin-bottom: 0.75rem;
  }

  .highlight-title {
    font-size: 1rem;
  }

  .highlight-description {
    font-size: 0.85rem;
  }
}
</style>