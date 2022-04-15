import { Loader } from 'components/Loader'
import * as S from './styles'

const Loading = () => {
  return (
    <S.Main>
      <Loader />
      <h2>Loading...</h2>
    </S.Main>
  )
}

export default Loading
