<script>
export default {
    name: 'Form',
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: '',
            },
            submitted: false,
        };
    },
}
</script>

<template>
    <form @submit.prevent="handleSubmit" class="form-container">
        <div class="form-group">
            <label for="name" class="form-label">Name:</label>
            <input v-model="form.name" type="text" id="name" class="form-input" placeholder="Enter your name"
                required />
        </div>

        <!-- Email Field -->
        <div class="form-group">
            <label for="email" class="form-label">Email:</label>
            <input v-model="form.email" type="email" id="email" class="form-input" placeholder="Enter your email"
                required />
        </div>

        <!-- Message Field -->
        <div class="form-group">
            <label for="message" class="form-label">Message:</label>
            <textarea v-model="form.message" id="message" class="form-input" rows="5" placeholder="Your message"
                required></textarea>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="form-button unavaible">
            Submit
        </button>

        <!-- Success Message -->
        <p v-if="submitted" class="form-success">Thank you for your message!</p>
    </form>
</template>

<style>
.form-container {
    width: 60%;

    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;

    border-radius: var(--radius-radius8);
    padding: 2em;
}

.form-group {
    display: grid;
    margin: 1em 0;
}

.form-label {
    font-size: 1.5em;
    font-weight: 500;
}

.form-input {
    background-color: rgba(255, 255, 255, 0.1);
    width: 100%;
    padding: 1em;
    font-size: 1.5em;
    border-radius: var(--radius-radius4);
    border: 1px solid var(--gray-gray500);
}

.form-button {
    background-color: var(--plum-purple-500);
    color: #fff;
    font-size: 1.5em;
    font-weight: 600;
    font-style: italic;
    letter-spacing: 2px;
    padding: 1em;
}

#name:focus {
    outline-style: solid;
    outline-width: 2px;
    outline-color: var(--yellow-card);
}

#email:focus {
    outline-style: solid;
    outline-width: 2px;
    outline-color: var(--pink-card);
}

#message {
    resize: none;
}

#message:focus {
    outline-style: solid;
    outline-width: 2px;
    outline-color: var(--plum-purple-500);
}

@media(max-width: 767px) {
    .form-container {
        width: 100%;
    }
}
</style>