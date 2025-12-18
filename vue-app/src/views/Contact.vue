<template>
  <div class="contact">
    <div class="page-header"></div>
    <div class="container">
      <h1 class="page-title">Contact</h1>

      <div class="contact-content">
        <div class="contact-info">
          <h2 class="prof-name">{{ contactData.professor }}</h2>
          <p class="contact-message">{{ contactData.message }}</p>

          <div class="contact-details">
            <div class="contact-item">
              <h3>Address</h3>
              <p>
                {{ contactData.address.building }}<br>
                {{ contactData.address.department }}<br>
                {{ contactData.address.university }}<br>
                {{ contactData.address.street }}<br>
                {{ contactData.address.country }}
              </p>
            </div>

            <div class="contact-item">
              <h3>Phone</h3>
              <p>{{ contactData.phone }}</p>
            </div>

            <div class="contact-item">
              <h3>Fax</h3>
              <p>{{ contactData.fax }}</p>
            </div>

            <div class="contact-item">
              <h3>E-mail</h3>
              <p>{{ contactData.email }}</p>
            </div>
          </div>
        </div>

        <div class="contact-map">
          <h3>Direction</h3>
          <div class="map-container">
            <iframe
              :src="contactData.mapUrl"
              width="100%"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contactData from '../data/contact.json'

export default {
  name: 'Contact',
  data() {
    return {
      contactData
    }
  }
}
</script>

<style scoped>
.contact {
  padding-bottom: 2rem;
}

.page-header {
  background: url('/img/con1.jpg');
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
  margin: 2rem 0;
  color: #333;
}

.contact-content {
  max-width: 900px;
  margin: 0 auto;
}

.contact-info {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 3rem;
}

.prof-name {
  font-size: 1.8rem;
  color: #6c757d;
  margin-bottom: 1rem;
}

.contact-message {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #555;
  line-height: 1.6;
}

.contact-details {
  display: grid;
  gap: 1.5rem;
}

.contact-item h3 {
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 0.5rem;
}

.contact-item p {
  line-height: 1.6;
  color: #555;
}

.contact-map h3 {
  font-size: 1.5rem;
  color: #6c757d;
  margin-bottom: 1rem;
}

.map-container {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.map-container iframe {
  display: block;
}

@media (max-width: 768px) {
  .page-header {
    height: 200px;
  }

  .page-title {
    font-size: 2rem;
    margin: 1.5rem 0;
  }

  .contact-info {
    padding: 1.5rem;
  }

  .prof-name {
    font-size: 1.5rem;
  }

  .contact-message {
    font-size: 1rem;
  }

  .map-container iframe {
    height: 300px;
  }
}
</style>
