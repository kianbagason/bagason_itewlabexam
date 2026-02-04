<template>
  <div class="student-list-item" @click="$emit('select-student', student)">
    <div class="student-avatar">
      <img :src="student.profileImage" :alt="student.name" />
    </div>

    <div class="student-info">
      <div class="student-header">
        <h3 class="student-name">{{ student.name }}</h3>
        <span class="student-location">{{ student.address.city }}, Philippines</span>
      </div>

      <div class="student-details">
        <div class="detail-item">
          <span class="detail-label">🎓 Course:</span>
          <span class="detail-value">{{ student.company.bs }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">📧 Email:</span>
          <span class="detail-value">{{ student.email }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">🏢 Company:</span>
          <span class="detail-value">{{ student.company.name }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">📱 Phone:</span>
          <span class="detail-value">{{ student.phone }}</span>
        </div>
      </div>

      <div class="student-tagline">
        "{{ student.company.catchPhrase }}"
      </div>
    </div>

    <div class="student-actions">
      <button class="action-btn primary" @click.stop="$emit('select-student', student)">
        View Profile
      </button>
      <button class="action-btn secondary" @click.stop="toggleLike">
        {{ isLiked ? '❤️' : '🤍' }}
      </button>
      <button class="action-btn secondary" @click.stop="shareStudent">
        📤
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentCard',
  props: {
    student: {
      type: Object,
      required: true
    },
    isSelected: {
      type: Boolean,
      default: false
    }
  },
  emits: ['select-student'],
  data() {
    return {
      isLiked: false,
      isBookmarked: false,
      likesCount: Math.floor(Math.random() * 50) + 10
    }
  },
  methods: {
    getInitials(name) {
      return name.split(' ').map(n => n[0]).join('').toUpperCase()
    },
    toggleLike() {
      this.isLiked = !this.isLiked
      this.likesCount += this.isLiked ? 1 : -1
    },
    toggleBookmark() {
      this.isBookmarked = !this.isBookmarked
    },
    shareStudent() {
      if (navigator.share) {
        navigator.share({
          title: `Check out ${this.student.name}'s profile`,
          text: `${this.student.name} - ${this.student.company.catchPhrase}`,
          url: window.location.href
        })
      } else {
        alert(`Share ${this.student.name}'s profile: ${window.location.href}`)
      }
    }
  }
}
</script>

<style scoped>
.student-list-item {
  display: flex;
  align-items: center;
  background: #FFFFFF;
  border: 1px solid #E1E8ED;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  gap: 1.5rem;
}

.student-list-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: #1DA1F2;
}

.student-avatar {
  flex-shrink: 0;
}

.student-avatar img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #E1E8ED;
  transition: border-color 0.2s ease;
  background: #F5F8FA;
}

.student-list-item:hover .student-avatar img {
  border-color: #1DA1F2;
}

.student-info {
  flex: 1;
  min-width: 0;
}

.student-header {
  margin-bottom: 0.75rem;
}

.student-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #14171A;
  margin: 0 0 0.25rem 0;
}

.student-location {
  font-size: 0.9rem;
  color: #657786;
  font-weight: 500;
}

.student-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem 1.5rem;
  margin-bottom: 0.75rem;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.detail-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: #657786;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.detail-value {
  font-size: 0.9rem;
  color: #14171A;
  font-weight: 500;
  word-break: break-word;
}

.student-tagline {
  font-size: 0.95rem;
  color: #1DA1F2;
  font-style: italic;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.student-actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-shrink: 0;
}

.action-btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.action-btn.primary {
  background: #1DA1F2;
  color: white;
}

.action-btn.primary:hover {
  background: #1991DB;
  transform: translateY(-1px);
}

.action-btn.secondary {
  background: #F5F8FA;
  color: #657786;
  border: 1px solid #E1E8ED;
}

.action-btn.secondary:hover {
  background: #E1E8ED;
  color: #14171A;
}


</style>
