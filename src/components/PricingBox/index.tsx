import React from 'react';

import Button from 'components/Button';
import { gaEvent } from 'utils/ga';

import * as S from './styles';
import { PricingBoxProps } from 'types/api';

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' });

const PricingBox = ({
  totalPrice,
  priceInstallment,
  numberInstallments,
  benefits,
  button: { label, url },
}: PricingBoxProps) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>R$ {totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>R$ {priceInstallment}</S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList dangerouslySetInnerHTML={{ __html: benefits }} />

    <Button href={url} onClick={onClick} withPrice>
      <p>{label}</p>
      <div>
        <S.ButtonFullPrice>R${totalPrice}</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>
          R${Number(numberInstallments) * Number(priceInstallment)}
        </S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
);

export default PricingBox;
