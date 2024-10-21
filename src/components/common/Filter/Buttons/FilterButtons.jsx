import React, { useState, useEffect } from 'react';
import useStore from '../../../../zustand/Store';
import {
  Container,
  SortButtonContainer,
  SortButton,
  FilterButton,
  DisabledButton,
  FilterIcon,
} from './style';

const FilterButtons = () => {
  const { sortingCriteria, setSorting } = useStore();
  const setSortingToNew = () => {
    setSorting('new');
  };
  const setSortingToBest = () => {
    setSorting('best');
  };
  return (
    <Container>
      <SortButtonContainer>
        {sortingCriteria === 'best' ? (
          <>
            <DisabledButton>Best</DisabledButton>
            <SortButton onClick={setSortingToNew}>New</SortButton>
          </>
        ) : (
          <>
            <SortButton onClick={setSortingToBest}>Best</SortButton>
            <DisabledButton>New</DisabledButton>
          </>
        )}
      </SortButtonContainer>
      <FilterButton>
        <FilterIcon src="src/assets/svgs/filter_icon.svg" />
        Filter
      </FilterButton>
    </Container>
  );
};

export default FilterButtons;
