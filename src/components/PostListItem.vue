<template>
  <div class="post">
    <div class="user-info">
      <a
        href="#"
        class="user-name"
      >
        {{ user.name }}
      </a>

      <a href="#">
        <img
          :src="user.avatar"
          alt
          class="avatar-large"
        >
      </a>

      <p class="desktop-only text-small">
        {{ userPostCount }} posts
      </p>
    </div>

    <div class="post-content">
      <template v-if="!editing">
        <div>
          {{ post.text }}
        </div>
        <a
          href="#"
          style="margin-left: auto;"
          class="link-unstyled"
          title="Make a change"
          @click.prevent="editing = true"
        >
          <i class="fa fa-pencil" />
        </a>
      </template>
      <div
        v-else
        style="width: 100%"
      >
        <PostEditor
          :post="post"
          @save="editing = false"
          @cancel="editing = false"
        />
      </div>
    </div>

    <div class="post-date text-faded">
      <div
        v-if="post.edited"
        class="edition-info"
      >
        edited
      </div>
      <AppDate :timestamp="post.publishedAt" />
    </div>
  </div>
</template>

<script>
import { countObjectProperties } from '@/utils'
import PostEditor from './PostEditor'

export default {
  components: {
    PostEditor
  },
  props: {
    post: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      editing: false
    }
  },
  computed: {
    user () {
      return this.$store.state.users[this.post.userId]
    },
    userPostCount () {
      return countObjectProperties(this.user.posts)
    }
  }
}
</script>
