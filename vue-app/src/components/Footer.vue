<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-logo">
        <img src="/img/ze.png" alt="Korea University Logo" />
      </div>
      <div class="footer-info">
        <p class="footer-address">
          Department of Materials Science and Engineering, Korea University,
          Anam-Dong, Seongbuk-Gu, Seoul 136-713, Republic of Korea
        </p>
        <p class="footer-copyright">
          Copyright 2025. Nanocrystal Electronics Lab. All right reserved
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-color: #f8f9fa;
  padding: 2rem 5%;
  margin-top: 4rem;
  border-top: 1px solid #e0e0e0;
}

.footer-content {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.footer-logo img {
  width: 240px;
  height: auto;
}

.footer-info {
  flex: 1;
  min-width: 300px;
}

.footer-address {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 0.5rem;
}

.footer-copyright {
  font-size: 0.85rem;
  color: #888;
  margin: 0;
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem 1.5rem;
  }

  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .footer-logo img {
    width: 200px;
  }

  .footer-info {
    min-width: 100%;
  }

  .footer-address,
  .footer-copyright {
    font-size: 0.8rem;
  }
}
</style>
