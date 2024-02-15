<script setup lang="ts">
useHead({
  title: 'Repository Pattern'
})

const { data: posts }: any = await useAsyncData(() => $fetch('https://jsonplaceholder.typicode.com/posts'))
</script>

<template>
  <div class="mx-auto p-8 flex items-center justify-center">
    <ul>
      <span class="text-xl font-medium mb-2 block">Posts:</span>
      <li v-for="post in posts" :key="post.id" class="mb-2">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>
