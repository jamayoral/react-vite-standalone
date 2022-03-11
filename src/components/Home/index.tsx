import * as styles from './styles'

export type HomeProps = {
  name?: string
}

const Home = ({ name = 'React Vite Standalone' }: HomeProps) => (
  <styles.Wrapper>
    <div>
      <h1>{name}</h1>
    </div>
  </styles.Wrapper>
)

export default Home
