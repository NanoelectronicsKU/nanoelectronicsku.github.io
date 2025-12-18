<template>
  <div class="alumni">
    <div class="page-header"></div>
    <div class="container">
      <h1 class="page-title">Member</h1>

      <div class="tabs">
        <router-link to="/members" class="tab">Member</router-link>
        <router-link to="/alumni" class="tab active">Alumni</router-link>
      </div>

      <div class="alumni-grid">
        <div v-for="(alumnus, index) in membersData.alumni" :key="index" class="alumni-card">
          <h3 class="alumni-name">{{ alumnus.name }}</h3>
          <p class="alumni-degree">{{ alumnus.degree }}</p>
          <p class="alumni-position">{{ alumnus.currentPosition }}</p>
          <p class="alumni-year">{{ alumnus.yearEarned }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import membersData from '../data/members.json'

export default {
  name: 'Alumni',
  data() {
    return {
      membersData
    }
  }
}
</script>

<style scoped>
.alumni {
  padding-bottom: 2rem;
}

.page-header {
  background: url('/img/group.jpg');
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
  margin: 2rem 0 1.5rem;
  color: #333;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.tab {
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 2px solid #e0e0e0;
  background: white;
}

.tab:hover {
  background: #f0f0f0;
  text-decoration: none;
}

.tab.active {
  background: #6c757d;
  color: white;
  border-color: #6c757d;
}

.alumni-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.alumni-card {
  padding: 1.5rem;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
}

.alumni-card:hover {
  border-color: #6c757d;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.alumni-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 0.75rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #6c757d;
}

.alumni-degree {
  font-size: 0.95rem;
  font-weight: 600;
  color: #6c757d;
  margin: 0.5rem 0;
}

.alumni-position {
  font-size: 0.9rem;
  color: #555;
  margin: 0.5rem 0;
  font-weight: 500;
}

.alumni-year {
  font-size: 0.85rem;
  color: #888;
  margin: 0.5rem 0 0 0;
}

@media (max-width: 968px) {
  .alumni-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
}

@media (max-width: 768px) {
  .page-header {
    height: 200px;
  }

  .page-title {
    font-size: 2rem;
    margin: 1.5rem 0 1rem;
  }

  .tabs {
    gap: 0.5rem;
  }

  .tab {
    padding: 0.625rem 1.5rem;
    font-size: 1rem;
  }

  .alumni-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .alumni-card {
    padding: 1.25rem;
  }

  .alumni-name {
    font-size: 1.1rem;
  }

  .alumni-degree {
    font-size: 0.9rem;
  }

  .alumni-position {
    font-size: 0.85rem;
  }

  .alumni-year {
    font-size: 0.8rem;
  }
}
</style>
