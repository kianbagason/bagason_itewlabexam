
=======
<template>
  <div class="home-page">
    <HeaderComponent />

    <div class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1>Welcome to <span class="gradient-text">StudentHub</span></h1>
          <p>Connect with fellow students, share your journey, and discover amazing opportunities on campus.</p>
          <div class="hero-stats">
            <div class="stat">
              <div class="stat-number">8</div>
              <div class="stat-label">Students</div>
            </div>
            <div class="stat">
              <div class="stat-number">5</div>
              <div class="stat-label">Cities</div>
            </div>
            <div class="stat">
              <div class="stat-number">∞</div>
              <div class="stat-label">Opportunities</div>
            </div>
          </div>
          <router-link to="/students" class="cta-button">
            Explore Students
          </router-link>
        </div>
        <div class="hero-image">
          <div class="floating-cards">
            <div 
              v-for="(student, index) in displayedStudents" 
              :key="student.id"
              :class="['card', `card-${index + 1}`]"
            >
              <img 
                v-if="student.profileImage" 
                :src="student.profileImage" 
                :alt="student.name"
                class="card-image"
              >
              <div v-else class="card-avatar">{{ getInitials(student.name) }}</div>
              <div class="card-name">{{ student.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="features-section">
      <div class="container">
        <h2>Why Choose StudentHub?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">👥</div>
            <h3>Connect</h3>
            <p>Connect with students from different universities and build meaningful relationships.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📚</div>
            <h3>Learn</h3>
            <p>Share knowledge, study tips, and collaborate on academic projects.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>Grow</h3>
            <p>Discover opportunities, internships, and career paths in your field.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="cta-section">
      <div class="container">
        <h2>Ready to Join the Community?</h2>
        <p>Start exploring student profiles and connect with like-minded individuals.</p>
        <router-link to="/students" class="cta-button secondary">
          Get Started
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import HeaderComponent from '../components/HeaderComponent.vue'

export default {
  components: {
    HeaderComponent
  },
  data() {
    return {
      students: [],
      displayedStudents: []
    }
  },
  async mounted() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      const profileImages = [
        'https://i.pravatar.cc/150?img=1',
        'https://i.pravatar.cc/150?img=2',
        'https://i.pravatar.cc/150?img=3'
      ]
      // Add profile images to students
      this.students = response.data.map((student, index) => ({
        ...student,
        profileImage: profileImages[index % profileImages.length]
      }))
      // Show only first 3 students on the hero section
      this.displayedStudents = this.students.slice(0, 3)
    } catch (err) {
      console.error('Failed to fetch students:', err)
      this.displayedStudents = []
    }
  },
  methods: {
    getInitials(name) {
      return name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
    }
  }
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: #FAFAFA;
}

.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 0 6rem;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="80" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="60" cy="30" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
  opacity: 0.5;
}

.hero-content {
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
}

.hero-text {
  flex: 1;
  width: 100%;
  text-align: center;
}

.hero-text h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
  word-break: break-word;
}

.gradient-text {
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline;
}

.hero-text p {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  line-height: 1.6;
}

.hero-stats {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.stat {
  text-align: center;
  flex: 0 1 auto;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 700;
  display: block;
}

.stat-label {
  font-size: 0.75rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.cta-button {
  display: inline-block;
  background: #0095F6;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 149, 246, 0.3);
}

.cta-button:hover {
  background: #007BDB;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 149, 246, 0.4);
}

.hero-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 400px;
  width: 100%;
}

.floating-cards {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  position: absolute;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 51, 160, 0.15);
  padding: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  width: 140px;
  transition: all 0.3s ease;
}

.card-image,
.card-avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #0095F6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 2rem;
  color: white;
}

.card-image {
  border: 4px solid white;
  box-shadow: 0 4px 12px rgba(0, 51, 160, 0.25);
}

.card-avatar {
  background: linear-gradient(135deg, #0033A0, #0095F6);
  border: 4px solid white;
  box-shadow: 0 4px 12px rgba(0, 51, 160, 0.25);
}

.card-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: #0033A0;
  word-break: break-word;
  line-height: 1.2;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0, 51, 160, 0.2);
}

/* Floating card positions */
.card-1 {
  left: 5%;
  top: -30px;
  animation: float1 3s ease-in-out infinite;
}

.card-2 {
  left: 50%;
  transform: translateX(-50%);
  top: 40px;
  animation: float2 3.5s ease-in-out infinite;
}

.card-3 {
  right: 5%;
  top: 0;
  animation: float3 3.2s ease-in-out infinite;
}

@keyframes float1 {
  0%, 100% { transform: translateY(-30px) rotate(-5deg); }
  50% { transform: translateY(10px) rotate(-5deg); }
}

@keyframes float2 {
  0%, 100% { transform: translateX(-50%) translateY(40px); }
  50% { transform: translateX(-50%) translateY(0); }
}

@keyframes float3 {
  0%, 100% { transform: translateY(0) rotate(5deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

/* Tablet screens */
@media (min-width: 768px) {
  .hero-content {
    padding: 2rem;
    flex-direction: row;
    gap: 3rem;
    max-width: 1200px;
  }

  .hero-text {
    flex: 1;
    text-align: left;
  }

  .hero-text h1 {
    font-size: 2.5rem;
  }

  .hero-text p {
    font-size: 1.1rem;
  }

  .hero-stats {
    justify-content: flex-start;
    gap: 2rem;
  }

  .stat-number {
    font-size: 2.2rem;
  }

  .stat-label {
    font-size: 0.85rem;
  }

  .cta-button {
    padding: 0.9rem 2rem;
    font-size: 1rem;
  }

  .hero-image {
    min-height: 450px;
  }

  .card {
    width: 150px;
    padding: 1.75rem;
  }

  .card-image,
  .card-avatar {
    width: 100px;
    height: 100px;
    font-size: 2.3rem;
  }

  .card-name {
    font-size: 1rem;
  }
}

/* Large desktop */
@media (min-width: 1024px) {
  .hero-section {
    padding: 4rem 0 6rem;
  }

  .hero-content {
    padding: 0 2rem;
  }

  .hero-text h1 {
    font-size: 3.5rem;
  }

  .hero-text p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }

  .hero-stats {
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .stat-number {
    font-size: 2.5rem;
  }

  .stat-label {
    font-size: 0.9rem;
    letter-spacing: 1px;
  }

  .cta-button {
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }

  .hero-image {
    min-height: 500px;
  }

  .card {
    width: 160px;
    padding: 2rem;
  }

  .card-image,
  .card-avatar {
    width: 110px;
    height: 110px;
    font-size: 2.5rem;
  }

  .card-name {
    font-size: 1.05rem;
  }
}

/* Mobile optimization */
@media (max-width: 767px) {
  .hero-image {
    min-height: 350px;
    margin-top: 1.5rem;
    width: 100%;
  }

  .card {
    width: 130px;
    padding: 1.2rem;
  }

  .card-image,
  .card-avatar {
    width: 80px;
    height: 80px;
    font-size: 1.8rem;
  }

  .card-name {
    font-size: 0.85rem;
  }

  .card-1 {
    left: 2%;
    top: -20px;
    animation: float1-mobile 3s ease-in-out infinite;
  }

  .card-2 {
    left: 50%;
    transform: translateX(-50%);
    top: 30px;
    animation: float2-mobile 3.5s ease-in-out infinite;
  }

  .card-3 {
    right: 2%;
    top: 5px;
    animation: float3-mobile 3.2s ease-in-out infinite;
  }

  @keyframes float1-mobile {
    0%, 100% { transform: translateY(-20px) rotate(-3deg); }
    50% { transform: translateY(5px) rotate(-3deg); }
  }

  @keyframes float2-mobile {
    0%, 100% { transform: translateX(-50%) translateY(30px); }
    50% { transform: translateX(-50%) translateY(5px); }
  }

  @keyframes float3-mobile {
    0%, 100% { transform: translateY(5px) rotate(3deg); }
    50% { transform: translateY(-10px) rotate(3deg); }
  }
}

@media (max-width: 480px) {
  .hero-text h1 {
    font-size: 1.8rem;
  }

  .hero-text p {
    font-size: 0.95rem;
  }

  .hero-stats {
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .stat-number {
    font-size: 1.5rem;
  }

  .stat-label {
    font-size: 0.65rem;
  }

  .cta-button {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }

  .hero-image {
    min-height: 300px;
    margin-top: 1rem;
  }

  .card {
    width: 120px;
    padding: 1rem;
  }

  .card-image,
  .card-avatar {
    width: 70px;
    height: 70px;
    font-size: 1.5rem;
  }

  .card-name {
    font-size: 0.8rem;
  }

  .card-1 {
    left: 0;
    top: -15px;
  }

  .card-2 {
    left: 50%;
    transform: translateX(-50%);
    top: 20px;
  }

  .card-3 {
    right: 0;
    top: 10px;
  }
}

.features-section {
  padding: 2rem 0;
  background: white;
}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
}

.features-section h2 {
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #262626;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.feature-card {
  background: #FAFAFA;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #DBDBDB;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  color: #262626;
}

.feature-card p {
  color: #8E8E8E;
  line-height: 1.6;
  font-size: 0.95rem;
}

.cta-section {
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  text-align: center;
}

.cta-section h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #262626;
}

.cta-section p {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: #8E8E8E;
}

.cta-button.secondary {
  background: #262626;
}

.cta-button.secondary:hover {
  background: #000000;
}

/* Tablet screens */
@media (min-width: 768px) {
  .features-section {
    padding: 4rem 0;
  }

  .container {
    padding: 0 2rem;
  }

  .features-section h2 {
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
  }

  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .feature-card {
    padding: 2rem;
  }

  .feature-icon {
    font-size: 3rem;
  }

  .feature-card h3 {
    font-size: 1.4rem;
  }

  .cta-section {
    padding: 4rem 2rem;
  }

  .cta-section h2 {
    font-size: 2.2rem;
  }

  .cta-section p {
    font-size: 1.1rem;
  }
}

/* Large desktop */
@media (min-width: 1024px) {
  .features-section {
    padding: 5rem 0;
  }

  .features-section h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }

  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .cta-section {
    padding: 5rem 0;
  }

  .cta-section h2 {
    font-size: 2.5rem;
  }

  .cta-section p {
    font-size: 1.25rem;
  }
}
</style>
