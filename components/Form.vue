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
            errmsg: ''
        };
    },
    methods: {
        async handleSubmit() {
            const data = {
                name: this.form.name,
                email: this.form.email,
                message: this.form.message
            };

            try {
                const response = await fetch("https://fabform.io/f/PMM4PBu", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();
                this.submitted = result.success ? true : false;

            } catch (error) {
                console.error("Error submitting form:", error);
                this.errmsg = "Error submitting form. Please try again later. 😥";
            }
        }
    }

}
</script>

<template>
    <form v-if="!submitted" @submit.prevent="handleSubmit" method="POST" class="form-container">
        <div class="form-group">
            <label for="name" class="form-label">Name:</label>
            <input name="name" v-model="form.name" type="text" id="name" class="form-input"
                placeholder="Enter your name" required />
        </div>

        <!-- Email Field -->
        <div class="form-group">
            <label for="email" class="form-label">Email:</label>
            <input name="email" v-model="form.email" type="email" id="email" class="form-input"
                placeholder="Enter your email" required />
        </div>

        <!-- Message Field -->
        <div class="form-group">
            <label for="message" class="form-label">Message:</label>
            <textarea v-model="form.message" id="message" class="form-input" rows="5" placeholder="Your message"
                required></textarea>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="form-button">
            Submit
        </button>

    </form>

    <!-- Success Message -->
    <div v-else class="form-submit-message-container">
        <div v-if="errmsg" class="form-submit-message-error">
            <span>
                {{ errmsg }}
            </span>
        </div>
        <div v-else class="form-submit-message-success">
            <span>
                Your message has been sent successfully. Thank you! 😊
            </span>
        </div>
    </div>
</template>

<style>
.form-container {
    width: 100%;

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

.form-submit-message-container div {
    color: #fff;
    padding: 1em;
    border-radius: var(--radius-radius4);
    font-size: 1.5em;
    font-weight: 500;
    text-align: center;

    margin-bottom: 2em;
}

.form-submit-message-error {
    background-color: var(--red-card);
}

.form-submit-message-success {
    background-color: var(--plum-purple-500);
}
</style>