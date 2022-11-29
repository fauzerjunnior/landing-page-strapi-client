import React from 'react';

import Logo from 'components/Logo';
import Button from 'components/Button';
import * as S from './styles';

import { gaEvent } from 'utils/ga';
import Container from 'components/Container';
import { HeaderProps, LogoProps } from 'types/api';
import { getImageUrl } from 'utils/get-image-url';

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' });

type Props = {
  logo: LogoProps;
  header: HeaderProps;
};

const SectionHero = ({ logo, header }: Props) => {
  const {
    image: {
      data: {
        attributes: { alternativeText, url },
      },
    },
  } = header;

  return (
    <S.Wrapper>
      <Container>
        <Logo {...logo} />

        <S.Content>
          <S.TextBlock>
            <S.Title>{header.title}</S.Title>
            <S.Description>{header.description}</S.Description>
            <S.ButtonWrapper>
              <Button href={header.button.url} onClick={onClick} wide>
                {header.button.label}
              </Button>
            </S.ButtonWrapper>
          </S.TextBlock>

          <S.Image src={getImageUrl(url)} alt={alternativeText} />
        </S.Content>
      </Container>
    </S.Wrapper>
  );
};

export default SectionHero;
