<script setup lang="ts">
import { userRepository } from '@/repository/user'
import type { User } from "~/types/user"

useHead({
  title: 'Repository Pattern'
})

const { $api } = useNuxtApp()
const userReposity = userRepository($api)
const users: Ref<User[]> = ref([])

// use async data if you want to fetch data on server side or need reactivity
// const { data: users }: any = await useAsyncData(() => userReposity.get())

const fetchUsers = async () => {
  try {
    users.value = await userReposity.get()
  } catch (error: any) {
    throw new Error(error)
  }
}

onBeforeMount(() => fetchUsers())
</script>

<template>
  <div class="mx-auto p-8 flex items-center justify-center">
    <ul>
      <span class="text-xl font-medium mb-2 block">Users:</span>
      <li v-for="user in users" :key="user.id" class="mb-2">
       <pre> {{ user }}</pre>
      </li>
    </ul>
  </div>
</template> 