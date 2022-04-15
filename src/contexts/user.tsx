import React, { useState, createContext, useContext, useEffect } from 'react'
import { getStorageItem, setStorageItem } from 'utils/localStorage/index'

const STORAGE_KEY = 'fullName'

export interface UserContextInterface {
  userName: string
  isAuthenticated: boolean
  addUser: (name: string) => void
  logout: () => void
}

export const UserContextDefaultValues = {
  userName: '',
  isAuthenticated: false,
  addUser: () => null,
  logout: () => null,
}

type UserProviderProps = {
  children: React.ReactNode
}

export const UserContext = createContext<UserContextInterface>(
  UserContextDefaultValues
)

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userName, setUserName] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const data = getStorageItem(STORAGE_KEY)

    if (data) {
      setUserName(data)
      setIsAuthenticated(true)
    }
  }, [])

  const addUser = (name: string) => {
    setUserName(name)
    setIsAuthenticated(true)
    setStorageItem(STORAGE_KEY, name)
  }

  const logout = () => {
    setUserName('')
    setIsAuthenticated(false)
    window.localStorage.removeItem(`BeesChallenge_${STORAGE_KEY}`)
  }

  return (
    <UserContext.Provider
      value={{ isAuthenticated, userName, addUser, logout }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
