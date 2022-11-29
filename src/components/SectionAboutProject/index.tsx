import React from 'react';

import Heading from 'components/Heading';
import Container from 'components/Container';

import * as S from './styles';
import { getImageUrl } from 'utils/get-image-url';
import { SectionAboutProjectProps } from 'types/api';

const SectionAboutProject = ({
  title,
  description,
  image: {
    data: {
      attributes: { alternativeText, url },
    },
  },
}: SectionAboutProjectProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image>
          <source srcSet={getImageUrl(url)} type="image/webp" />
          <source srcSet={getImageUrl(url)} type="image/png" />
          <img src={getImageUrl(url)} loading="lazy" alt={alternativeText} />
        </S.Image>
        <div>
          <Heading>{title}</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
);

export default SectionAboutProject;
