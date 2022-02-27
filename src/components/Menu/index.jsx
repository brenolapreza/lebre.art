import React from 'react';
import * as S from './style';

import { IoMdClose, IoMdMenu } from 'react-icons/io';
import Link from 'next/link';

export const MenuComponent = () => {
  const [menu, setMenu] = React.useState(true);

  const handleClickMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <S.MenuIcon onClick={handleClickMenu}>
        {menu === true ? <IoMdMenu size={32} /> : <IoMdClose size={32} />}
      </S.MenuIcon>
      <S.MenuWrapper
        className={menu === true ? 'menuOpen' : 'menuClose'}
        style={
          menu === true ? { visibility: 'hidden' } : { visibility: 'visible' }
        }
      >
        <S.ItemsMenu>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
        </S.ItemsMenu>
      </S.MenuWrapper>
    </>
  );
};
