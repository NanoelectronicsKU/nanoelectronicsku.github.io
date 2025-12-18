<template>
  <div class="publications">
    <div class="container">
      <h1 class="page-title">Publications</h1>

      <div v-if="loading" class="loading-message">
        Loading publications...
      </div>

      <div v-else-if="error" class="error-message">
        {{ error }}
      </div>

      <div v-else class="publications-layout">
        <!-- Year Sidebar -->
        <div class="year-sidebar">
          <div
            v-for="yearData in publicationsData.publications"
            :key="yearData.year"
            class="year-link"
            :class="{ active: activeYear === yearData.year }"
            @click="scrollToYear(yearData.year)"
          >
            {{ yearData.year }}
          </div>
        </div>

        <!-- Publications List -->
        <div class="publications-content">
          <div
            v-for="yearData in publicationsData.publications"
            :key="yearData.year"
            :id="`year-${yearData.year}`"
            class="year-section"
          >
            <div class="year-header" @click="toggleYear(yearData.year)">
              <h2 class="year-title">
                {{ yearData.year }} ({{ yearData.papers.length }})
              </h2>
              <span class="toggle-icon" :class="{ open: openYears.includes(yearData.year) }">▼</span>
            </div>

            <div v-show="openYears.includes(yearData.year)" class="papers-list">
              <div
                v-for="paper in yearData.papers"
                :key="paper.number"
                class="paper-item"
              >
                <div class="paper-number">{{ paper.number }}</div>
                <div class="paper-details">
                  <p class="paper-title">"{{ paper.title }}"</p>
                  <p class="paper-authors">{{ paper.authors }}</p>
                  <p class="paper-journal">
		  <em>{{ paper.journal }}</em> {{ paper.volume }}{{ paper.issue }}{{ paper.page }} ({{ paper.year }})
                  </p>
                </div>
                <a
                  v-if="paper.url"
                  :href="paper.url"
                  target="_blank"
                  class="paper-link"
                  rel="noopener noreferrer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchPublications } from '../services/publicationsService'

export default {
  name: 'Publications',
  data() {
    return {
      publicationsData: { publications: [] },
      activeYear: '',
      openYears: [],
      loading: true,
      error: null
    }
  },
  async mounted() {
    try {
      this.publicationsData = await fetchPublications()

      // Open all years by default
      this.openYears = this.publicationsData.publications.map(y => y.year)

      // Set first year as active
      if (this.publicationsData.publications.length > 0) {
        this.activeYear = this.publicationsData.publications[0].year
      }

      this.loading = false
    } catch (err) {
      this.error = 'Failed to load publications. Please try again later.'
      this.loading = false
      console.error('Error loading publications:', err)
    }
  },
  methods: {
    toggleYear(year) {
      const index = this.openYears.indexOf(year)
      if (index > -1) {
        this.openYears.splice(index, 1)
      } else {
        this.openYears.push(year)
      }
    },
    scrollToYear(year) {
      this.activeYear = year
      const element = document.getElementById(`year-${year}`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }
}
</script>

<style scoped>
.publications {
  padding: 3rem 0;
}

.page-title {
  text-align: center;
  font-size: 3rem;
  margin: 0 0 3rem 0;
  color: #000;
  font-weight: 700;
}

.loading-message,
.error-message {
  text-align: center;
  font-size: 1.2rem;
  padding: 3rem;
  margin: 2rem auto;
  max-width: 600px;
}

.loading-message {
  color: #666;
}

.error-message {
  color: #dc3545;
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
}

.publications-layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

.year-sidebar {
  position: sticky;
  top: 100px;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  background: white;
  border: 2px solid #000;
  border-radius: 20px;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  scrollbar-width: thin;
  scrollbar-color: #000 #f0f0f0;
}

.year-sidebar::-webkit-scrollbar {
  width: 8px;
}

.year-sidebar::-webkit-scrollbar-track {
  background: #f0f0f0;
  border-radius: 10px;
}

.year-sidebar::-webkit-scrollbar-thumb {
  background: #000;
  border-radius: 10px;
}

.year-sidebar::-webkit-scrollbar-thumb:hover {
  background: #333;
}

.year-link {
  padding: 0.75rem 2rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}

.year-link:hover {
  background: #f0f0f0;
}

.year-link.active {
  background: #000;
  color: white;
}

.publications-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.year-section {
  scroll-margin-top: 100px;
}

.year-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 2px solid #000;
  cursor: pointer;
  user-select: none;
}

.year-header:hover {
  background: #f8f9fa;
}

.year-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #000;
  margin: 0;
}

.toggle-icon {
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  color: #000;
}

.toggle-icon.open {
  transform: rotate(180deg);
}

.papers-list {
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.paper-item {
  display: grid;
  grid-template-columns: 60px 1fr auto;
  gap: 1.5rem;
  align-items: start;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e0e0e0;
}

.paper-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.paper-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  text-align: right;
  padding-top: 0.25rem;
}

.paper-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.paper-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #000;
  margin: 0;
}

.paper-authors {
  font-size: 1rem;
  color: #555;
  margin: 0;
}

.paper-journal {
  font-size: 1rem;
  color: #555;
  margin: 0;
}

.paper-journal em {
  font-style: italic;
}

.paper-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: #000;
  transition: all 0.3s ease;
  border: 2px solid #000;
  border-radius: 8px;
}

.paper-link:hover {
  background: #000;
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 968px) {
  .publications-layout {
    grid-template-columns: 150px 1fr;
    gap: 2rem;
  }

  .year-link {
    font-size: 1.1rem;
    padding: 0.65rem 1.5rem;
  }

  .year-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .publications-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .year-sidebar {
    position: static;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem;
    gap: 0.5rem;
  }

  .year-link {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 8px;
  }

  .year-title {
    font-size: 1.3rem;
  }

  .paper-item {
    grid-template-columns: 50px 1fr;
    gap: 1rem;
  }

  .paper-link {
    grid-column: 2;
    width: 36px;
    height: 36px;
    margin-top: 0.5rem;
  }

  .paper-number {
    font-size: 1.2rem;
  }

  .paper-title {
    font-size: 1rem;
  }

  .paper-authors,
  .paper-journal {
    font-size: 0.9rem;
  }
}
</style>