# Nuxt 3 Repository Pattern Example

This repository demonstrates a simple implementation of the Repository Pattern using Nuxt 3, TypeScript, and NitroPack for fetching data from an API.

## Project Structure

`app.vue`
The main component of the application, where the user data is fetched and displayed.

### Dependencies:
```
@/repository/user: User repository module.
~/types/user: User type definition.
```

### Usage:
1. Sets up the page title using the useHead function.
2. Initializes the user repository with the API using userRepository($api).
3. Fetches and displays a list of users on component mount.

```js
<script setup lang="ts">
// ... (imports and setup)

const { $api } = useNuxtApp()
const userReposity = userRepository($api)
const users: Ref<User[]> = ref([])

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
  <!-- ... (template to display user list) -->
</template>
```

`repository/user.ts`
The user repository module responsible for fetching user data from the API.

### Dependencies:

- nitropack: NitroPack fetch utility.
- ~/types/user: User type definition.

### Exports:
- userRepository: Function that initializes the user repository.

```js
// ... (imports)
export const userRepository = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
  async get(): Promise<User[]> {
    return fetch('/users')
  }
})
```

`plugin/api.ts`
Nuxt plugin to set up the API client using NitroPack's $fetch.

### Dependencies:

- nitropack: NitroPack fetch utility.
- useRuntimeConfig: Nuxt runtime configuration.

### Exports:
Nuxt plugin that provides the configured API instance.

```js
// ... (imports)
export default defineNuxtPlugin({
  setup() {
    const api = $fetch.create({
      baseURL: useRuntimeConfig().public.apiUrl
      // add more options here
    })

    return { 
      provide: { api }
    }
  }
})
```

## Getting Started
1. Install dependencies:

```
pnpm install
```

2. Run the application:
```
pnpm dev
```

3. Open your browser and visit http://localhost:3000 to see the application in action.

Feel free to adapt and extend this example for your own projects.