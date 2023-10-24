import DiaryEditor from "../../components/create/DiaryEditor";
import styled from "styled-components";

const CreateDiary = ({ onMoveToForm }) => {
  return (
    <DiaryEditorWrapper>
      <DiaryEditor />

      <ButtonWrapper>
        <ScrollButton onClick={onMoveToForm}>
          <span>작성한 일기 확인하기</span>
          <p>⌵</p>
        </ScrollButton>
      </ButtonWrapper>
    </DiaryEditorWrapper>
  );
};

const DiaryEditorWrapper = styled.div`
  height: 100vh;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScrollButton = styled.button`
  all: unset;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 10px;

  > span {
    font-family: "ONE-Mobile-Title";
    font-size: 17px;
  }

  > p {
    font-family: "ONE-Mobile-Title";
    font-size: 20px;
    font-weight: bold;
  }
`;

export default CreateDiary;
