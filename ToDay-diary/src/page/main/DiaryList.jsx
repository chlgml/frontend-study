import styled from "styled-components";
import DiaryItemList from "../../components/list/DiaryItemList";

const DiaryList = ({ inputForm, data }) => {
  return (
    <ListWrapper ref={inputForm}>
      <DiaryItemList data = {data} />
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  background-color: #eeed9a;
  height: 100vh;
`;

export default DiaryList;
