import styled from "styled-components";
import DiaryItem from "./DiaryItem";

const DiaryItemList = ({ data }) => {

  return (
    <DiaryListDiv>
      <span>일기 리스트</span>
      <DiaryNumber>
        <span>{data.totalDiary}개의 일기가 있습니다.</span>
      </DiaryNumber>
      <DiaryItemWrapper>
        {data.diaryResponse ? (
          data.diaryResponse.map((it) => (
            <DiaryItem key={it.id} {...it} />
          ))
        ) : (
          <></>
        )}
      </DiaryItemWrapper>
    </DiaryListDiv>
  );
};

const DiaryListDiv = styled.div`
  background-color: #eeed9a;
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 40px;

  > span {
    text-align: center;
    font-family: "PyeongChangPeace-Bold";
    font-size: 35px;
  }
`;

const DiaryNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 5px;
  margin-bottom: 30px;

  > span {
    font-size: 14px;
    font-family: "ONE-Mobile-Title";
  }
`;

const DiaryItemWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export default DiaryItemList;
