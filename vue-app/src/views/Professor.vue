<template>
  <div class="professor">
    <div class="page-header"></div>
    <div class="container">
      <h1 class="page-title">Professor</h1>

      <div class="prof-main">
        <div class="prof-photo">
          <img :src="`/img/${professorData.image}`" :alt="professorData.name" />
        </div>
        <div class="prof-info">
          <h2 class="prof-name">{{ professorData.name }}</h2>
          <div class="prof-details">
            <p><strong>{{ professorData.title }}</strong></p>
            <p>{{ professorData.department }}</p>
            <p>{{ professorData.university }}</p>
            <p><strong>Phone:</strong> {{ professorData.phone }}</p>
            <p><strong>Fax:</strong> {{ professorData.fax }}</p>
            <p><strong>E-mail:</strong> {{ professorData.email }}</p>
            <p><strong>Office:</strong> {{ professorData.office }}</p>
          </div>
        </div>
      </div>

      <div class="prof-section">
        <h3 class="section-title">Education</h3>
        <div class="timeline">
          <div v-for="(edu, index) in professorData.education" :key="index" class="timeline-item">
            <div class="timeline-period">{{ edu.period }}</div>
            <div class="timeline-content">
              <p><strong>{{ edu.degree }}</strong></p>
              <p>{{ edu.institution }}</p>
              <p v-if="edu.advisor"><em>Advisor: {{ edu.advisor }}</em></p>
            </div>
          </div>
        </div>
      </div>

      <div class="prof-section">
        <h3 class="section-title">Work Experience</h3>
        <div class="timeline">
          <div v-for="(exp, index) in professorData.experience" :key="index" class="timeline-item">
            <div class="timeline-period">{{ exp.period }}</div>
            <div class="timeline-content">
              <p><strong>{{ exp.position }}</strong></p>
              <p>{{ exp.institution }}</p>
              <p v-if="exp.advisor"><em>Advisor: {{ exp.advisor }}</em></p>
              <p v-if="exp.pi"><em>PI: {{ exp.pi }}</em></p>
            </div>
          </div>
        </div>
      </div>

      <div class="prof-section">
        <h3 class="section-title">Research Interests</h3>
        <ul class="interest-list">
          <li v-for="(interest, index) in professorData.researchInterests" :key="index">
            {{ interest }}
          </li>
        </ul>
      </div>

      <div class="prof-section">
        <h3 class="section-title">Awards</h3>
        <div class="awards-grid">
          <div v-for="(award, index) in professorData.awards" :key="index" class="award-item">
            <div class="award-date">{{ award.date }}</div>
            <div class="award-title">{{ award.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import professorData from '../data/professor.json'

export default {
  name: 'Professor',
  data() {
    return {
      professorData
    }
  }
}
</script>

<style scoped>
.professor {
  padding-bottom: 2rem;
}

.page-header {
  background: url('/img/hand.jpg');
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

.prof-main {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
}

.prof-photo img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.prof-name {
  font-size: 2rem;
  color: #6c757d;
  margin-bottom: 1.5rem;
}

.prof-details p {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.prof-section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.8rem;
  color: #6c757d;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #6c757d;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.timeline-item {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.timeline-item:hover {
  transform: translateX(8px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.timeline-period {
  font-weight: 600;
  color: #6c757d;
  white-space: nowrap;
}

.timeline-content p {
  margin-bottom: 0.25rem;
  line-height: 1.6;
}

.interest-list {
  list-style: none;
  padding: 0;
}

.interest-list li {
  padding: 0.75rem 1.5rem;
  margin-bottom: 0.5rem;
  background: #f8f9fa;
  border-left: 4px solid #6c757d;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.interest-list li:hover {
  background: #e9ecef;
  transform: translateX(8px);
}

.awards-grid {
  display: grid;
  gap: 1rem;
}

.award-item {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.award-item:hover {
  background: #e9ecef;
  transform: translateX(8px);
}

.award-date {
  font-weight: 600;
  color: #6c757d;
}

@media (max-width: 768px) {
  .page-header {
    height: 200px;
  }

  .page-title {
    font-size: 2rem;
    margin: 1.5rem 0;
  }

  .prof-main {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1.5rem;
  }

  .prof-photo {
    max-width: 300px;
    margin: 0 auto;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .timeline-item,
  .award-item {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .timeline-period,
  .award-date {
    font-size: 0.9rem;
  }
}
</style>
