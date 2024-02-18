import type { NitroFetchRequest, $Fetch } from "nitropack"

import type { User } from "~/types/user"

export const userRepository = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
  async get(): Promise<User[]> {
    return fetch('/users')
  }
})