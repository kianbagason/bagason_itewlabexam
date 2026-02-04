<template>
  <div class="students-page">
    <HeaderComponent />
    <div class="content">
      <h1>Students</h1>
      <input v-model="searchQuery" type="text" placeholder="Search students by name..." class="search-input">
      <div v-if="loading" class="loading">Loading...</div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <div v-else class="students-list">
        <StudentComponent
          v-for="student in filteredStudents"
          :key="student.id"
          :student="student"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import HeaderComponent from '../components/HeaderComponent.vue'
import StudentComponent from '../components/StudentComponent.vue'

export default {
  components: {
    HeaderComponent,
    StudentComponent
  },
  data() {
    return {
      students: [],
      loading: true,
      error: null,
      searchQuery: ''
    }
  },
  computed: {
    filteredStudents() {
      if (!this.searchQuery) {
        return this.students
      }
      return this.students.filter(student =>
        student.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  },
  async mounted() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      const profileImages = [
        'https://i.pravatar.cc/150?img=1',
        'https://i.pravatar.cc/150?img=2',
        'https://i.pravatar.cc/150?img=3',
        'https://i.pravatar.cc/150?img=4',
        'https://i.pravatar.cc/150?img=5',
        'https://i.pravatar.cc/150?img=6',
        'https://i.pravatar.cc/150?img=7',
        'https://i.pravatar.cc/150?img=8'
      ]
      // Add profile images to students
      this.students = response.data.map((student, index) => ({
        ...student,
        profileImage: profileImages[index % profileImages.length]
      }))
    } catch (err) {
      this.error = 'Failed to fetch students'
    } finally {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.students-page {
  min-height: 100vh;
  background-color: #F5F5F5;
  width: 100%;
}

.content {
  padding: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

h1 {
  text-align: center;
  color: #0033A0;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  word-break: break-word;
}

.search-input {
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto 2rem;
  padding: 0.75rem;
  border: 2px solid #0033A0;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #FFFFFF;
  color: #0033A0;
  box-sizing: border-box;
}

.search-input:focus {
  outline: none;
  border-color: #CE1126;
  box-shadow: 0 0 0 3px rgba(206, 17, 38, 0.1);
}

.loading {
  text-align: center;
  font-size: 1.25rem;
  color: #0033A0;
  padding: 2rem 1rem;
}

.error {
  text-align: center;
  font-size: 1rem;
  color: #CE1126;
  background-color: #FFE6E6;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
}

.students-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;
}

/* Tablet screens */
@media (min-width: 768px) {
  .content {
    padding: 2rem;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  .search-input {
    margin: 0 auto 2rem;
  }

  .students-list {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
}

/* Large desktop */
@media (min-width: 1200px) {
  .content {
    padding: 2rem;
  }

  .students-list {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
}

/* Small mobile */
@media (max-width: 480px) {
  .content {
    padding: 1rem;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .search-input {
    font-size: 16px;
  }

  .loading {
    font-size: 1rem;
    padding: 1.5rem 1rem;
  }

  .error {
    font-size: 0.9rem;
    padding: 0.75rem;
  }
}
</style>
