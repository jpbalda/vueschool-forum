<template>
  <div class="flex-grid">
    <UserProfileCard
      v-if="!edit"
      :user="user"
      :user-posts-count="userPostsCount"
      :user-threads-count="userThreadsCount"
    />
    <UserProfileCardEditor
      v-else
      :user="user"
      :user-posts-count="userPostsCount"
      :user-threads-count="userThreadsCount"
    />

    <div class="col-7 push-top">
      <div class="profile-header">
        <span class="text-lead">{{ user.username }}'s recent activity</span>
        <a href="#">See only started threads?</a>
      </div>

      <hr>

      <PostList :posts="userPosts" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { countObjectProperties } from '@/utils'
import UserProfileCard from '@/components/UserProfileCard'
import UserProfileCardEditor from '@/components/UserProfileCardEditor'
import PostList from '@/components/PostList'

export default {
  components: {
    UserProfileCard,
    UserProfileCardEditor,
    PostList
  },
  props: {
    edit: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    ...mapGetters({
      user: 'authUser'
    }),
    userThreadsCount () {
      return countObjectProperties(this.user.threads)
    },
    userPostsCount () {
      return countObjectProperties(this.user.posts)
    },
    userPosts () {
      if (this.user.posts) {
        return Object
          .values(this.$store.state.posts)
          .filter(post => post.userId === this.user['.key'])
      }
      return []
    }
  }
}
</script>

<style>
</style>
