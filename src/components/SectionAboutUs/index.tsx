import React from 'react';

import Heading from 'components/Heading';
import Container from 'components/Container';
import ProfileCard from 'components/ProfileCard';

import * as S from './styles';
import { SectionAboutUsProps } from 'types/api';

const SectionAboutUs = ({ title, authors }: SectionAboutUsProps) => {
  const { data: authorsList } = authors;

  return (
    <Container>
      <Heading reverseColor>{title}</Heading>

      <S.Content>
        {Object.values(authorsList).map(
          ({
            attributes: {
              name,
              description,
              role,
              photo: {
                data: {
                  attributes: { url },
                },
              },
              socialLinks,
            },
          }) => (
            <ProfileCard
              key={name}
              name={name}
              role={role}
              image={url}
              socialLinks={socialLinks}
              description={description}
            />
          )
        )}
      </S.Content>
    </Container>
  );
};

export default SectionAboutUs;
