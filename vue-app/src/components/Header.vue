<template>
  <header class="header">
    <nav class="navbar">
      <div class="navbar-container">
        <router-link to="/" class="navbar-logo">
          <img src="/img/mark.png" alt="Lab Logo" />
        </router-link>
        <button class="mobile-menu-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="navbar-menu" :class="{ 'active': isMobileMenuOpen }">
          <li><router-link to="/" @click="closeMobileMenu">Home</router-link></li>
          <li><router-link to="/research" @click="closeMobileMenu">Research</router-link></li>
          <li><router-link to="/professor" @click="closeMobileMenu">Professor</router-link></li>
          <li><router-link to="/members" @click="closeMobileMenu">Member</router-link></li>
          <li><router-link to="/publications" @click="closeMobileMenu">Publications</router-link></li>
          <li><router-link to="/gallery" @click="closeMobileMenu">Gallery</router-link></li>
          <li><router-link to="/contact" @click="closeMobileMenu">Contact</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    }
  }
}
</script>

<style scoped>
.header {
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-container {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.navbar-logo {
  display: flex;
  align-items: center;
  padding: 1rem 0;
}

.navbar-logo img {
  height: 60px;
  transition: transform 0.3s ease;
}

.navbar-logo img:hover {
  transform: scale(1.05);
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 3px 0;
  transition: 0.3s;
}

.navbar-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.5rem;
}

.navbar-menu li {
  margin: 0;
}

.navbar-menu a {
  display: block;
  padding: 0.75rem 1.25rem;
  color: #333;
  text-decoration: none;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.navbar-menu a:hover {
  background-color: #f0f0f0;
  color: #6c757d;
}

.navbar-menu a.router-link-active {
  background-color: #6c757d;
  color: white;
}

@media (max-width: 1000px) {
  .navbar-container {
    padding: 0 1rem;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .navbar-menu {
    position: fixed;
    top: 80px;
    left: -100%;
    flex-direction: column;
    background-color: white;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    gap: 0;
    padding: 1rem 0;
  }

  .navbar-menu.active {
    left: 0;
  }

  .navbar-menu li {
    margin: 0;
  }

  .navbar-menu a {
    padding: 1rem;
    border-radius: 0;
  }
}
</style>
