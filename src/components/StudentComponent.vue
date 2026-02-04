<template>
  <div class="student-card">
    <div class="student-header">
      <div class="profile-image-container">
        <img 
          v-if="student.profileImage" 
          :src="student.profileImage" 
          :alt="student.name"
          class="profile-image"
        >
        <div v-else class="profile-avatar">{{ getInitials(student.name) }}</div>
      </div>
      <div class="header-info">
        <h3>{{ student.name }}</h3>
        <p class="username">@{{ student.username }}</p>
        <p class="company">{{ student.company.name }}</p>
      </div>
    </div>

    <div class="student-body">
      <p class="catchphrase">"{{ student.company.catchPhrase }}"</p>
      <div class="quick-info">
        <div class="info-item">
          <span class="label">📧</span>
          <span class="value">{{ truncateEmail(student.email) }}</span>
        </div>
        <div class="info-item">
          <span class="label">📍</span>
          <span class="value">{{ student.address.city }}</span>
        </div>
      </div>
    </div>

    <button @click="toggleDetails" class="details-btn">
      {{ showDetails ? '▼ Hide Details' : '▶ Show Details' }}
    </button>

    <transition name="slide">
      <div v-if="showDetails" class="details-expanded">
        <div class="detail-row">
          <span class="detail-label">📞 Phone:</span>
          <span class="detail-value">{{ student.phone }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">🌐 Website:</span>
          <span class="detail-value">{{ student.website }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">🏢 Company:</span>
          <span class="detail-value">{{ student.company.name }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">💼 Business:</span>
          <span class="detail-value">{{ student.company.bs }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">📮 Address:</span>
          <span class="detail-value">{{ student.address.street }}, {{ student.address.suite }}<br>{{ student.address.city }}, {{ student.address.zipcode }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'StudentComponent',
  props: {
    student: Object
  },
  data() {
    return {
      showDetails: false
    }
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails
    },
    getInitials(name) {
      return name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
    },
    truncateEmail(email) {
      if (email.length > 25) {
        return email.substring(0, 22) + '...'
      }
      return email
    }
  }
}
</script>

<style scoped>
.student-card {
  background: linear-gradient(135deg, #FFFFFF 0%, #F8F9FB 100%);
  border: none;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 51, 160, 0.08);
  padding: 1.5rem;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  overflow: hidden;
  position: relative;
}

.student-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 51, 160, 0.15);
  border: 1px solid rgba(0, 149, 246, 0.2);
}

.student-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #0033A0, #0095F6, #CE1126);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.student-card:hover::before {
  transform: scaleX(1);
}

.student-header {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.profile-image-container {
  flex-shrink: 0;
  position: relative;
}

.profile-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: 0 4px 12px rgba(0, 51, 160, 0.2);
  display: block;
}

.profile-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0033A0, #0095F6);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.8rem;
  border: 4px solid white;
  box-shadow: 0 4px 12px rgba(0, 51, 160, 0.2);
}

.header-info {
  flex: 1;
  min-width: 0;
}

.header-info h3 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #0033A0;
  word-break: break-word;
}

.username {
  margin: 0.25rem 0;
  font-size: 0.9rem;
  color: #0095F6;
  font-weight: 500;
}

.company {
  margin: 0.5rem 0 0;
  font-size: 0.85rem;
  color: #666;
  font-weight: 500;
  word-break: break-word;
}

.student-body {
  border-top: 1px solid rgba(0, 51, 160, 0.1);
  padding-top: 1rem;
}

.catchphrase {
  margin: 0 0 1rem;
  font-size: 0.95rem;
  font-style: italic;
  color: #0095F6;
  text-align: center;
  padding: 0.75rem;
  background: rgba(0, 149, 246, 0.05);
  border-radius: 8px;
  border-left: 3px solid #0095F6;
}

.quick-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: #333;
}

.info-item .label {
  font-size: 1.1rem;
  min-width: 24px;
}

.info-item .value {
  word-break: break-word;
  color: #666;
}

.details-btn {
  background: linear-gradient(135deg, #0033A0, #0095F6);
  color: #FFFFFF;
  border: none;
  padding: 0.7rem 1.4rem;
  cursor: pointer;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.details-btn:hover {
  background: linear-gradient(135deg, #002266, #007BDB);
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(0, 51, 160, 0.3);
}

.details-btn:active {
  transform: scale(0.98);
}

.details-expanded {
  border-top: 1px solid rgba(0, 51, 160, 0.1);
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  animation: slideDown 0.3s ease;
}

.detail-row {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(0, 51, 160, 0.03);
  border-radius: 8px;
  border-left: 3px solid #0033A0;
  align-items: flex-start;
}

.detail-label {
  font-weight: 600;
  color: #0033A0;
  min-width: fit-content;
}

.detail-value {
  color: #555;
  font-size: 0.95rem;
  word-break: break-word;
  line-height: 1.4;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Mobile optimization */
@media (max-width: 480px) {
  .student-card {
    padding: 1rem;
    gap: 0.75rem;
  }

  .profile-image,
  .profile-avatar {
    width: 70px;
    height: 70px;
    border-width: 3px;
  }

  .profile-avatar {
    font-size: 1.5rem;
  }

  .header-info h3 {
    font-size: 1.1rem;
  }

  .student-header {
    gap: 0.75rem;
  }

  .details-btn {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }

  .detail-row {
    gap: 0.5rem;
    padding: 0.6rem;
    font-size: 0.9rem;
  }
}
</style>
