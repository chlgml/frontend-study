import styled from "styled-components";
import { useContext, useEffect, useRef, useState } from "react";
import { updateDiary } from "../../api/api";
import { FetchDataContext } from "../../page/main";
import { checkTitleAndContent } from "../checkState";
import { modalFixed } from "../modal";

const DiaryEditModal = ({ id, title, content, emotion, toggleIsEdit }) => {
  const fetchData = useContext(FetchDataContext);

  useEffect(() => {
    modalFixed();
    return () => {
      document.body.style.cssText = "";
      window.scrollTo(0, window.innerHeight);
    };
  }, []);

  const [state, setState] = useState({
    title: title,
    content: content,
    emotion: emotion,
  });

  const handleChangesState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const titleRef = useRef();
  const [titleWarning, setTitleWarning] = useState(false);
  const contentRef = useRef();
  const [contentWarning, setContentWarning] = useState(false);

  const handleEdit = async () => {
    checkTitleAndContent(
      state.title,
      setTitleWarning,
      titleRef,
      state.content,
      setContentWarning,
      contentRef
    );

    if (window.confirm(`일기를 정말 수정하시겠습니까?`)) {
      await updateDiary(id, state);
      fetchData();
      toggleIsEdit();
    }
  };

  return (
    <Wrapper onClick={toggleIsEdit}>
      <Modal
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <span>수정하기</span>
        <InputWrapper>
          <TitleWarpper>
            <span>제목</span>
            <TilteInput
              ref={titleRef}
              name="title"
              value={state.title}
              onChange={handleChangesState}
              placeholder="제목을 입력해주세요"
              titleWarning={titleWarning}
            />
            {titleWarning ? (
              <div>
                <p>제목을 입력해주세요</p>
              </div>
            ) : (
              <></>
            )}
          </TitleWarpper>
          <ContentWarpper>
            <span>내용</span>
            <ContentTextarea
              ref={contentRef}
              name="content"
              value={state.content}
              onChange={handleChangesState}
              placeholder="내용을 입력해주세요"
              contentWarning={contentWarning}
            />
            {contentWarning ? (
              <div>
                <p>내용을 5자이상 입력해주세요</p>
              </div>
            ) : (
              <></>
            )}
          </ContentWarpper>
          <EmotionWarpper>
            <span>오늘의 감정 점수 : </span>
            <select
              name="emotion"
              value={state.emotion}
              onChange={handleChangesState}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </EmotionWarpper>
        </InputWrapper>
        <ButtonWrapper>
          <ModalCancelButton onClick={toggleIsEdit}>취소</ModalCancelButton>
          <ModalButton onClick={handleEdit}>완료</ModalButton>
        </ButtonWrapper>
      </Modal>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  font-family: "ONE-Mobile-Title";

  background-color: rgba(0, 0, 0, 0.2);
  left: 0;
  top: 100vh;

  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

const Modal = styled.div`
  position: absolute;

  width: 50%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: white;
  border-radius: 10px;

  > span {
    font-family: "PyeongChangPeace-Bold";
    font-size: 30px;
  }
`;

const InputWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const TitleWarpper = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    font-size: 15px;
    padding-top: 20px;
    padding-bottom: 5px;
    margin-left: 70px;
  }

  > div {
    position: absolute;
    display: flex;
    align-items: flex-start;
    width: 100%;
    left: 70px;
    top: 170px;
  }

  > div > p {
    color: #ea1b1b;
    font-size: 10px;
    font-family: "ONE-Mobile-Title";
  }
`;

const TilteInput = styled.input`
  all: unset;

  font-size: 15px;

  padding: 10px;
  margin-right: 60px;
  margin-left: 60px;
  margin-bottom: 5px;

  border-radius: 5px;
  border: ${(props) =>
    props.titleWarning ? "1px solid #ea1b1b" : "1px solid black"};
`;

const ContentTextarea = styled.textarea`
  all: unset;

  font-size: 15px;

  height: 200px;
  padding: 10px;
  margin-right: 60px;
  margin-left: 60px;

  border-radius: 5px;
  border: ${(props) =>
    props.contentWarning ? "1px solid #ea1b1b" : "1px solid black"};
`;

const ContentWarpper = styled(TitleWarpper)`
  > div {
    top: 440px;
  }
`;

const EmotionWarpper = styled(TitleWarpper)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-top: 25px;

  > span {
    padding-top: 0px;
    padding-bottom: 0px;
    margin-left: 0px;

    margin-right: 20px;
  }

  > select {
    all: unset;
    text-align: center;

    width: 300px;
    padding: 10px;

    background-color: white;
    border-radius: 5px;
    border: 1px solid black;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 35px;
  margin-bottom: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalButton = styled.button`
  all: unset;
  cursor: pointer;

  padding: 10px;
  padding-left: 110px;
  padding-right: 110px;

  border-radius: 5px;
  background-color: #cbc95f;
  color: white;

  &:hover {
    background-color: #bcba5a;
  }
`;

export const ModalCancelButton = styled(ModalButton)`
  margin-right: 20px;
  background-color: #cb5f5f;

  &:hover {
    background-color: #ae5151;
  }
`;

export default DiaryEditModal;
