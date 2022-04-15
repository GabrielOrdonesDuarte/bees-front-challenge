import { useNavigate } from 'react-router-dom'

import { useUser } from 'hooks/use-profile'

import * as S from './styles'

const Header = () => {
  const { userName, logout } = useUser()
  const navigate = useNavigate()

  const handleGoBack = () => {
    logout()
    navigate('/')
  }

  return (
    <S.Header>
      <S.Action onClick={handleGoBack}>
        <img src="assets/arrow_back.svg" alt="Go back" /> Go back
      </S.Action>

      <S.Name>{userName}</S.Name>
    </S.Header>
  )
}

export default Header
