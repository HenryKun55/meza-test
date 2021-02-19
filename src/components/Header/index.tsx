import * as S from './styles'

export const Header = () => (
  <S.Wrapper>
    <S.Container>
      <S.Logo />
      <S.Content>
        <S.Categories>
          <S.CategoriesIcon />
          Categorias
        </S.Categories>
        <S.Input placeholder="O que você procura?" />
      </S.Content>

      <S.User>
        <S.UserIcon />
        Entrar
        <S.CartIcon />
      </S.User>
    </S.Container>
  </S.Wrapper>
)
