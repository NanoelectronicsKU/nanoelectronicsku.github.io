<template>
  <div class="members">
    <div class="page-header"></div>
    <div class="container">
      <h1 class="page-title">Member</h1>

      <div class="tabs">
        <router-link to="/members" class="tab active">Member</router-link>
        <router-link to="/alumni" class="tab">Alumni</router-link>
      </div>

      <div class="members-list">
        <div v-for="(member, index) in membersData.current" :key="index" class="member-item">
          <div class="member-photo">
            <img :src="`/img/${member.image}`" :alt="member.name" />
          </div>
          <div class="member-details">
            <div class="member-header">
              <h3 class="member-name">{{ member.name }}</h3>
              <p v-if="member.course" class="member-course">{{ member.course }}</p>
            </div>

            <div v-if="member.education && member.education.length > 0" class="member-section">
              <p v-for="(edu, idx) in member.education" :key="idx" class="member-text">{{ edu }}</p>
            </div>

            <p v-if="member.research" class="member-section">
              <strong>Research:</strong> {{ member.research }}
            </p>

            <div v-if="member.publications && member.publications.length > 0" class="member-section">
              <p v-for="(pub, idx) in member.publications" :key="idx" class="member-publication">{{ pub }}</p>
            </div>

            <p class="member-email">{{ member.email }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import membersData from '../data/members.json'

export default {
  name: 'Members',
  data() {
    return {
      membersData
    }
  }
}
</script>

<style scoped>
.members {
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

.members-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.member-item {
  display: flex;
  gap: 2.5rem;
  padding: 2rem;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.member-item:hover {
  border-color: #6c757d;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.member-photo {
  flex-shrink: 0;
}

.member-photo img {
  width: 140px;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.member-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.member-header {
  border-bottom: 2px solid #6c757d;
  padding-bottom: 0.75rem;
  margin-bottom: 0.5rem;
}

.member-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 0.25rem 0;
}

.member-course {
  font-size: 1rem;
  color: #6c757d;
  margin: 0;
  font-weight: 500;
}

.member-section {
  margin: 0;
  line-height: 1.6;
}

.member-text {
  font-size: 0.95rem;
  color: #555;
  margin: 0.15rem 0;
  line-height: 1.6;
}

.member-publication {
  font-size: 0.95rem;
  color: #333;
  font-weight: 600;
  margin: 0.25rem 0;
  line-height: 1.6;
}

.member-email {
  font-size: 0.95rem;
  color: #6c757d;
  text-decoration: underline;
  margin: 0.5rem 0 0 0;
  font-weight: 500;
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

  .members-list {
    gap: 1.5rem;
  }

  .member-item {
    flex-direction: column;
    padding: 1.5rem;
    gap: 1.5rem;
  }

  .member-photo {
    text-align: center;
    width: 100%;
  }

  .member-photo img {
    width: 120px;
    height: 150px;
  }

  .member-details {
    gap: 0.75rem;
  }

  .member-name {
    font-size: 1.3rem;
  }

  .member-course {
    font-size: 0.9rem;
  }

  .member-text {
    font-size: 0.85rem;
  }

  .member-publication {
    font-size: 0.85rem;
  }

  .member-email {
    font-size: 0.85rem;
  }
}
</style>
