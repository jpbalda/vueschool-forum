<template>
  <form @submit.prevent="save">
    <div class="form-group">
      <textarea
        id=""
        v-model="text"
        name=""
        cols="30"
        rows="10"
        class="form-input"
      />
    </div>
    <div class="form-actions">
      <button class="btn-blue">
        Submit post
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    threadId: {
      default: null,
      type: String
    },
    post: {
      default: null,
      type: Object
    }
  },
  data () {
    return {
      text: this.post ? this.post.text : ''
    }
  },
  computed: {
    isUpdate () {
      return !!this.post
    }
  },
  methods: {
    save () {
      this.persist()
        .then(post => {
          this.$emit('save', { post })
        })
    },
    create () {
      const post = {
        text: this.text,
        threadId: this.threadId
      }
      this.text = ''

      return this.$store.dispatch('createPost', post)
    },
    update () {
      const payload = {
        id: this.post['.key'],
        text: this.text
      }
      return this.$store.dispatch('updatePost', payload)
    },
    persist () {
      return this.isUpdate ? this.update() : this.create()
    }
  }
}
</script>
