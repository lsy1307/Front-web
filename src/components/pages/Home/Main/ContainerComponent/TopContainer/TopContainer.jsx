import React from 'react';
import { Container, ContentContainer, Title, Count, ShowMore } from './style';
import Button from '../../../../../common/Button/Button';
import FilterButtons from '../../../../../common/Filter/Buttons/FilterButtons';

const TopContainer = (props) => {
  return (
    <Container>
      <ContentContainer>
        <Title>{props.text}</Title>
        {props.isRequest ? (
          <Button
            text={'프로젝트 등록하기'}
            onClickHandler={props.onClickHandler}
          />
        ) : (
          <Button
            text={'질문 등록하기'}
            onClickHandler={props.onClickHandler}
          />
        )}
      </ContentContainer>
      <ContentContainer>
        <Count>
          {props.isRequest
            ? `${props.count} requests`
            : `${props.count} questions`}
        </Count>
        {props.isNotHome ? (
          <FilterButtons />
        ) : (
          <ShowMore onClick={props.showMore}>{'더보기 >'}</ShowMore>
        )}
      </ContentContainer>
    </Container>
  );
};

export default TopContainer;
