import React from 'react';

import { GrGithub } from 'react-icons/gr';
import { FaDribbble, FaTwitter } from 'react-icons/fa';

import * as S from './styles';
import { getImageUrl } from 'utils/get-image-url';

const icons = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  dribbble: <FaDribbble />,
};

type socialLinks = {
  title: string;
};

type Props = {
  name: string;
  role: string;
  image: string;
  socialLinks: socialLinks[];
  description: string;
};

const ProfileCard: React.FC<Props> = ({
  name,
  role,
  image,
  socialLinks,
  description,
}) => (
  <S.Card key={name}>
    <S.Image>
      <source srcSet={getImageUrl(image)} type="image/webp" />
      <source srcSet={getImageUrl(image)} type="image/png" />
      <img src={getImageUrl(image)} loading="lazy" alt={name} />
    </S.Image>
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map((item, index) => (
        <S.Link key={`${item}.${index}`}>
          <a href="#" title={item.title}>
            {icons[item.title]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
);

export default ProfileCard;
