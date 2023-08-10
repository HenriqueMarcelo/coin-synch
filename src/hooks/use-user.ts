import { UserInfo } from '@/@types/user-info'
import { apiJson } from '@/lib/axios'
import { useEffect, useState } from 'react'

export function useUser(user_id: string) {
  const [user, setUser] = useState<UserInfo | undefined>()

  async function getUser() {
    const { data } = await apiJson.get<UserInfo[]>(`/users?id=${user_id}`)

    return data[0]
  }

  useEffect(() => {
    async function aux() {
      const db_user = await getUser()
      setUser(db_user)
    }
    aux()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user_id])

  return { user }
}
