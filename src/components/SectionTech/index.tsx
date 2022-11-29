import React from 'react';

import Heading from 'components/Heading';
import Container from 'components/Container';

import * as S from './styles';
import { SectionTechProps } from 'types/api';
import { getImageUrl } from 'utils/get-image-url';

const SectionTech = ({ title, techIcons }: SectionTechProps) => {
  return (
    <S.Wrapper>
      <Container>
        <Heading reverseColor>{title}</Heading>
        <S.IconsContainer>
          {Object.values(techIcons).map(
            (
              {
                title,
                icon: {
                  data: {
                    attributes: { alternativeText, url },
                  },
                },
              },
              index
            ) => (
              <S.Icon key={`${title}.${index}`}>
                <S.Icons
                  src={getImageUrl(url)}
                  alt={alternativeText}
                  loading="lazy"
                />
                <S.IconsName>{title}</S.IconsName>
              </S.Icon>
            )
          )}
        </S.IconsContainer>
      </Container>
    </S.Wrapper>
  );
};

export default SectionTech;
