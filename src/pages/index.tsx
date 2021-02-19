import { Header, HomeHeader, HomeActions, Container, News } from 'components'

export default function Home() {
  return (
    <>
      <Header />
      <HomeHeader />
      <Container>
        <HomeActions />
        <News />
      </Container>
    </>
  )
}
