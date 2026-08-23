<template>
  <BaseContent>
    <section id="contacts" class="section-contacts">
      <SectionName>контакты</SectionName>
      <div class="section-contacts__content">
        <div class="section-contacts__contacts">
          <ContactCard
            v-for="(contact, i) in contacts"
            :key="contact.title"
            v-motion-fade-visible-once
            :delay="(i - 1) * 120"
            :href="contact.href"
            :title="contact.title"
            :value="contact.value"
          />
        </div>
        <div class="section-contacts__try-to-contact">
          <p class="section-contacts__try-to-contact-title">Готов к новым предложениям</p>
          <p class="section-contacts__try-to-contact-description">
            Открыт для full-time работы. Пишите — отвечу в течение нескольких часов.
          </p>
          <a
            class="section-contacts__try-to-contact-button"
            href="https://t.me/shestiv"
            target="_blank"
            rel="noopener noreferrer"
            >Написать в Telegram</a
          >
        </div>
      </div>
    </section>
  </BaseContent>
</template>

<script setup lang="ts">
const contacts = [
  {
    href: 'https://t.me/shestiv',
    title: 'Telegram',
    value: '@shestiv',
  },
  {
    href: 'mailto:ivan31122003@mail.ru',
    title: 'Email',
    value: 'ivan31122003@mail.ru',
  },
  {
    href: 'tel:+79124554156',
    title: 'Телефон',
    value: '+7 (912) 455-41-56',
  },
  {
    title: 'Город',
    value: 'Санкт-Петербург',
  },
  {
    href: 'https://gitlab.com/ivan31122003',
    title: 'GitLab',
    value: 'gitlab.com',
  },
];
</script>

<style scoped lang="scss">
.section-contacts {
  &__content {
    margin-top: 16px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;

    @include up($bp-lg) {
      grid-template-columns: 3fr 2fr;
    }
  }

  &__contacts {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    @include up($bp-md) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__try-to-contact {
    padding: 24px;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  &__try-to-contact-title {
    font-size: var(--color-text);
    font-weight: 600;
    color: var(--color-text);
  }

  &__try-to-contact-button {
    text-decoration: none;
    padding: 8px 16px;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    background-color: var(--color-bg);
    color: var(--color-text);
    font-size: var(--color-text);
    cursor: pointer;
    transition:
      border-color 0.2s ease-in-out,
      background-color 0.2s ease-in-out,
      transform 0.2s ease-in-out;

    &:hover {
      border-color: var(--color-accent);
      background-color: var(--color-accent);
    }
  }
}
</style>
