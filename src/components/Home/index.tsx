import * as S from './styles'

export type HomeProps = {
  name?: string
}

const Home = ({ name = 'React Vite Standalone' }: HomeProps) => (
  <S.Wrapper>
    <h1>{name}</h1>
  </S.Wrapper>
)

export default Home
