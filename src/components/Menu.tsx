import * as React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const StyledHr = styled.hr`
  width: 100%;
  border: 1px solid #bdbdbd;
`;

const SelectedItem = styled.div`
  background-color: #2f80ed;
  border-radius: 4px 4px 0px 0px;
  width: 90px;
  height: 4px;
  margin-top: 8px;
  margin-bottom: -9px;
`;

const StyledText = styled.div`
  width: 90px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

interface IMenuProps {
  selectedMenu: selectedMenuType;
  setSelectedMenu: React.Dispatch<
    React.SetStateAction<'All' | 'Active' | 'Completed'>
  >;
}

const menuItems: selectedMenuType[] = ['All', 'Active', 'Completed'];

function Menu({ selectedMenu, setSelectedMenu }: IMenuProps) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const selected: selectedMenuType = e.currentTarget.id as selectedMenuType;
    setSelectedMenu(selected);
  };

  const renderMenuItems = (menuItems: selectedMenuType[]) => {
    return menuItems.map((item) => {
      return (
        <StyledText key={item} id={item} onClick={(e) => handleClick(e)}>
          {item}
        </StyledText>
      );
    });
  };

  const highlightedItem = (menuItems: selectedMenuType[]) => {
    return menuItems.map((item) => {
      return (
        <SelectedItem
          key={item}
          style={{ visibility: selectedMenu === item ? 'visible' : 'hidden' }}
        />
      );
    });
  };

  return (
    <>
      <StyledDiv>{renderMenuItems(menuItems)}</StyledDiv>
      <StyledDiv>{highlightedItem(menuItems)}</StyledDiv>
      <StyledHr />
    </>
  );
}

export default Menu;
