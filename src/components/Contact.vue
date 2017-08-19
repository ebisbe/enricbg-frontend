<template>
    <div class="span-3-25">
        <form>
            <div class="field" v-if="response" v-html="response"></div>
            <div class="field half">
                <label for="name">Name *</label>
                <input v-model="name" type="text" name="name" id="name" placeholder="Write your name"/>
            </div>
            <div class="field half">
                <label for="email">Email *</label>
                <input v-model="email" type="email" name="email" id="email" placeholder="Write your email"/>
            </div>
            <div class="field">
                <label for="message">Message *</label>
                <textarea v-model="message" name="message" id="message" rows="4"
                          placeholder="Write me a message"></textarea>
            </div>
            <ul class="actions">
                <li><input type="button" @click="submit" value="Send Message" class="button special"/></li>
            </ul>
        </form>
    </div>
</template>

<script>
  export default {
    name: 'contact',
    data () {
      return {
        name: '',
        email: '',
        message: '',
        response: ''
      }
    },
    methods: {
      submit: function () {
        this.axios.post('messages', {
          params: {
            name: this.name,
            email: this.email,
            message: this.message
          }
        })
          .then((response) => {
            this.response = 'Message sent correctly!'

            this.name = ''
            this.email = ''
            this.message = ''
          })
          .catch((error) => {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              this.response = error.response.data.error
              console.log(error.response.status)
              console.log(error.response.headers)
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request)
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message)
            }
            console.log(error.config)
          })
      }
    }
  }
</script>

