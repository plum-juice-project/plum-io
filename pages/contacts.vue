<template>
  <div class="contacts-header">
    <h1 class="contacts-header-title">Contacts</h1>
    <div class="contacts-header-content">
      <span class="contacts-header-paragraph">
        If you have any questions, please feel free to contact us.
      </span>
      <div class="contacts-header-img">
        <NuxtImg src="/computer-logo.png" />
      </div>
    </div>
  </div>
  <div class="content-body contacts-content">
    <div class="contatcs-content-socials">
      <h1 class="contacts-content-socials-title">Our socials</h1>
      <div class="mt-6 text-8xl w-full flex justify-center">
        <UsefulLinks />
      </div>
    </div>
    <Divider color="white" vspace="30" />
    <div class="contacts-content-header">
      <h1 class="contacts-content-form-title">Contact form</h1>
      <div class="contacts-content-form-content">
        <Form />
      </div>
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
export default {
  name: "contacts",
  components: {
    Form,
  },
};
</script>

<style>
.contacts-header {
  width: 100%;
  display: grid;
  gap: var(--space-threeunits);
  max-width: 1440px;
  align-items: flex-start;
  padding-left: var(--space-fiveunits);
  padding-right: var(--space-fiveunits);
  flex-direction: column;

  margin-top: 5em;

  color: rgb(255, 255, 255);
}

.contacts-header-content {
  display: flex;
  justify-content: space-between;

  gap: var(--space-sixunits);
}

.contacts-header-title {
  font-size: 4.5em;
  font-weight: 500;
  letter-spacing: 2px;
}

.contacts-header-paragraph {
  font-size: 2.5em;
  line-height: 60px;
}

.contacts-header-img {
  width: 300px;
  height: 300px;

  background-color: var(--yellow-card);

  display: flex;
  justify-content: end;
  align-items: center;
}

.contacts-header-img img {
  scale: 1.5;
}

.contacts-content {
  color: #fff;
}

.contatcs-content-socials {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.contacts-content-socials-title {
  font-size: 3em;
  font-weight: 500;
  letter-spacing: 2px;
  margin: var(--space-oneandhalfunits);
}

.contacts-content-header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.contacts-content-form-title {
  font-size: 3em;
  font-weight: 500;
  letter-spacing: 2px;
  margin: var(--space-twounits);
}

.contacts-content-form-content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (max-width: 768px) {
  .contacts-header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .contacts-header-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .contacts-header-paragraph {
    text-align: center;
    font-size: 1.5em;
    line-height: 1.5em;
  }

  .contacts-header-img {
    display: none;
  }
}
</style>
