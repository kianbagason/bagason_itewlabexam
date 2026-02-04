<template>
  <header>
    <div class="header-content">
      <div class="logo-section">
        <div class="logo">📚</div>
        <h1>StudentHub</h1>
      </div>



      <nav class="nav-icons">
        <router-link to="/" class="nav-icon" :class="{ active: $route.path === '/' }">
          🏠
        </router-link>
        <router-link to="/students" class="nav-icon" :class="{ active: $route.path === '/students' }">
          👥
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    handleSearch() {
      // Emit search event to parent components
      this.$emit('search', this.searchQuery)
    }
  }
}
</script>

<style scoped>
header {
  background: #FFFFFF;
  border-bottom: 1px solid #DBDBDB;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
}

.header-content {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  box-sizing: border-box;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.logo {
  font-size: 1.25rem;
}

h1 {
  font-family: 'Billabong', cursive;
  font-size: 1.5rem;
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  font-weight: normal;
  white-space: nowrap;
}

.search-bar {
  position: relative;
  flex: 1;
  max-width: 300px;
  margin: 0 2rem;
}

.search-bar input {
  width: 100%;
  padding: 0.5rem 2.5rem 0.5rem 1rem;
  border: 1px solid #DBDBDB;
  border-radius: 8px;
  background: #FAFAFA;
  font-size: 0.9rem;
  outline: none;
}

.search-bar input:focus {
  border-color: #0095F6;
  background: #FFFFFF;
}

.search-icon {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #8E8E8E;
  font-size: 0.8rem;
}

.nav-icons {
  display: flex;
  gap: 1rem;
}

.nav-icon {
  font-size: 1.5rem;
  text-decoration: none;
  color: #262626;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.2s;
}

.nav-icon:hover {
  background: #FAFAFA;
}

.nav-icon.active {
  color: #0095F6;
}

/* Tablet and above */
@media (min-width: 768px) {
  .header-content {
    max-width: 1200px;
    padding: 0.75rem 2rem;
  }

  .logo {
    font-size: 1.5rem;
  }

  h1 {
    font-size: 1.8rem;
  }
}

/* Mobile */
@media (max-width: 480px) {
  header {
    padding: 0.5rem 0;
  }

  .header-content {
    padding: 0.5rem 0.75rem;
  }

  .logo {
    font-size: 1.1rem;
  }

  h1 {
    font-size: 1.2rem;
  }

  .nav-icons {
    gap: 0.5rem;
  }

  .nav-icon {
    font-size: 1.3rem;
    padding: 0.4rem;
  }
}


</style>
