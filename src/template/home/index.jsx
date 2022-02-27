import Image from 'next/image';
import * as S from './style';
import LebreLogo from '../../public/images/LabreLogo500.svg';
export const HomeTemplate = () => {
  return (
    <S.HomeWrapper>
      <div>
        <h1>
          LEBRE <br />
          CREATOR
        </h1>
      </div>
      <div>
        <Image width={180} height={180} src={LebreLogo} />
      </div>
    </S.HomeWrapper>
  );
};
