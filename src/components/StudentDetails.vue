<template>
  <div class="student-details-container">
    <div class="profile-header">
      <div class="profile-banner"></div>
      <div class="profile-info">
        <div class="profile-image-large">
          <img 
            v-if="student.profileImage" 
            :src="student.profileImage" 
            :alt="student.name"
            class="profile-img"
          >
          <div v-else class="profile-avatar-large">{{ getInitials(student.name) }}</div>
        </div>
        <div class="profile-text">
          <h2>{{ student.name }}</h2>
          <p class="username">@{{ student.username }}</p>
          <p class="company-badge">{{ student.company.name }}</p>
        </div>
      </div>
    </div>

    <div class="student-details-content">
      <div class="section">
        <h3 class="section-title">📋 Basic Information</h3>
        <div class="details-grid">
          <div class="detail-item">
            <span class="detail-label">Email</span>
            <span class="detail-value">{{ student.email }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Phone</span>
            <span class="detail-value">{{ student.phone }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Username</span>
            <span class="detail-value">{{ student.username }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Website</span>
            <span class="detail-value">{{ student.website }}</span>
          </div>
        </div>
      </div>

      <div class="section">
        <h3 class="section-title">🏢 Company Details</h3>
        <div class="company-card">
          <div class="company-content">
            <h4>{{ student.company.name }}</h4>
            <p class="catchphrase">"{{ student.company.catchPhrase }}"</p>
            <p class="bs-line"><strong>Business:</strong> {{ student.company.bs }}</p>
          </div>
        </div>
      </div>

      <div class="section">
        <h3 class="section-title">📍 Location</h3>
        <div class="address-card">
          <p><strong>Street:</strong> {{ student.address.street }}</p>
          <p><strong>Suite:</strong> {{ student.address.suite }}</p>
          <p><strong>City:</strong> {{ student.address.city }}</p>
          <p><strong>Postal Code:</strong> {{ student.address.zipcode }}</p>
          <div class="coordinates">
            <span>📌 {{ student.address.geo.lat }}, {{ student.address.geo.lng }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  student: {
    type: Object,
    required: true
  }
})

const getInitials = (name) => {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
}
</script>

<style scoped>
.student-details-container {
  background: #FFFFFF;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 51, 160, 0.1);
}

.profile-header {
  position: relative;
  padding-bottom: 2rem;
}

.profile-banner {
  height: 180px;
  background: linear-gradient(135deg, #0033A0, #0095F6, #667eea);
  position: relative;
  overflow: hidden;
}

.profile-banner::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="30" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="70" r="1.5" fill="rgba(255,255,255,0.1)"/></svg>');
  opacity: 0.3;
}

.profile-info {
  display: flex;
  align-items: flex-end;
  padding: 0 2rem;
  gap: 2rem;
  margin-top: -50px;
  position: relative;
  z-index: 1;
}

.profile-image-large {
  flex-shrink: 0;
}

.profile-img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 6px solid white;
  box-shadow: 0 8px 24px rgba(0, 51, 160, 0.25);
  display: block;
}

.profile-avatar-large {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0033A0, #0095F6);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 2.5rem;
  border: 6px solid white;
  box-shadow: 0 8px 24px rgba(0, 51, 160, 0.25);
}

.profile-text {
  flex: 1;
  padding-bottom: 0.5rem;
}

.profile-text h2 {
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  color: #0033A0;
  word-break: break-word;
}

.username {
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #0095F6;
  font-weight: 500;
}

.company-badge {
  margin: 0.75rem 0 0;
  font-size: 0.95rem;
  background: linear-gradient(135deg, #0033A0, #0095F6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
}

.student-details-content {
  padding: 2rem;
}

.section {
  margin-bottom: 2rem;
}

.section:last-child {
  margin-bottom: 0;
}

.section-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #0033A0;
  margin: 0 0 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 3px solid #0095F6;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.detail-item {
  background: linear-gradient(135deg, #F8F9FB, #FFFFFF);
  padding: 1.25rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 51, 160, 0.1);
  transition: all 0.3s ease;
}

.detail-item:hover {
  border-color: rgba(0, 149, 246, 0.3);
  box-shadow: 0 4px 12px rgba(0, 51, 160, 0.08);
  transform: translateY(-2px);
}

.detail-label {
  display: block;
  font-size: 0.85rem;
  font-weight: 700;
  color: #0033A0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
}

.detail-value {
  display: block;
  font-size: 1rem;
  color: #333;
  word-break: break-word;
  line-height: 1.5;
}

.company-card {
  background: linear-gradient(135deg, rgba(0, 149, 246, 0.08), rgba(0, 51, 160, 0.05));
  border: 2px solid #0095F6;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.company-card:hover {
  border-color: #0033A0;
  box-shadow: 0 4px 16px rgba(0, 51, 160, 0.15);
  transform: translateY(-2px);
}

.company-content h4 {
  margin: 0 0 0.75rem;
  font-size: 1.25rem;
  color: #0033A0;
  font-weight: 700;
}

.catchphrase {
  margin: 0.75rem 0;
  font-size: 1rem;
  font-style: italic;
  color: #0095F6;
  padding: 0.75rem;
  background: rgba(0, 149, 246, 0.1);
  border-left: 4px solid #0095F6;
  border-radius: 4px;
}

.bs-line {
  margin: 0.75rem 0 0;
  font-size: 0.95rem;
  color: #555;
}

.address-card {
  background: linear-gradient(135deg, #F8F9FB, #FFFFFF);
  border-left: 4px solid #CE1126;
  padding: 1.5rem;
  border-radius: 8px;
  line-height: 1.8;
}

.address-card p {
  margin: 0.5rem 0;
  font-size: 0.95rem;
  color: #333;
  word-break: break-word;
}

.coordinates {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 51, 160, 0.1);
  font-size: 0.9rem;
  color: #0095F6;
  font-weight: 500;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .profile-info {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    padding: 0 1rem;
    margin-top: -60px;
  }

  .profile-img,
  .profile-avatar-large {
    width: 120px;
    height: 120px;
    border-width: 4px;
  }

  .profile-avatar-large {
    font-size: 2rem;
  }

  .profile-text h2 {
    font-size: 1.5rem;
  }

  .student-details-content {
    padding: 1.5rem;
  }

  .details-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
}

@media (max-width: 480px) {
  .profile-banner {
    height: 120px;
  }

  .profile-info {
    margin-top: -40px;
    padding: 0 1rem;
    gap: 0.75rem;
  }

  .profile-img,
  .profile-avatar-large {
    width: 100px;
    height: 100px;
    border-width: 3px;
  }

  .profile-avatar-large {
    font-size: 1.8rem;
  }

  .profile-text h2 {
    font-size: 1.3rem;
  }

  .username {
    font-size: 0.9rem;
  }

  .student-details-content {
    padding: 1rem;
  }

  .detail-item {
    padding: 1rem;
  }

  .company-card {
    padding: 1rem;
  }

  .address-card {
    padding: 1rem;
  }
}
</style>
