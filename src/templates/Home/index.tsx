import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from 'components/TextField'
import Checkbox from 'components/Checkbox'
import { useUser } from 'hooks/use-profile'

import * as S from './styles'

const Home = () => {
  const [user, setUser] = useState<string>('')
  const [isOverAge, setIsOverAge] = useState<boolean>(false)
  const { addUser, isAuthenticated } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/list')
    }
  }, [isAuthenticated, navigate])

  const validateFullName = (name: string): boolean => {
    const fullName = name.trim().split(' ')
    return fullName.length >= 2
  }

  const nameValidation = validateFullName(user)

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    const regex = /[^a-zA-Z-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]/
    const cleanText = value.replace(regex, '')
    setUser(cleanText)
  }

  const handleCheckbox = (value: boolean) => {
    setIsOverAge(value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addUser(user)
    navigate('/list')
  }

  const TextFieldProps = {
    placeholder: 'Full name',
    type: 'text',
    name: 'name',
    value: user,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
      handleOnChange(event),
  }

  const CheckboxProps = {
    label: 'Are you older than 18 years old?',
    labelFor: 'overage',
    onCheck: (value: boolean) => handleCheckbox(value),
  }

  return (
    <S.Home>
      <S.Form onSubmit={handleSubmit}>
        <S.FormTitle>Please, enter your full name below</S.FormTitle>
        <S.FormTitle>Only alphabetical characters are accepted</S.FormTitle>

        <TextField {...TextFieldProps} />
        <Checkbox {...CheckboxProps} />

        <S.Button type="submit" disabled={!isOverAge || !nameValidation}>
          Enter
        </S.Button>
      </S.Form>

      <S.HeroImage
        src="/assets/bee.svg"
        alt="Bee illustration"
        width={278}
        height={278}
      />
    </S.Home>
  )
}

export default Home
