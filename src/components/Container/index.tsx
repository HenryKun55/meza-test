import * as S from './styles'

type ContainerProps = {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => (
  <S.Wrapper>
    <S.Content>{children}</S.Content>
  </S.Wrapper>
)
