import styled from "styled-components";
import { useContext, useRef, useState } from "react";
import { createDiary } from "../../api/api";
import { FetchDataContext } from "../../page/main";
import { checkTitleAndContent } from "../checkState";

const DiaryEditor = () => {
  const fetchData = useContext(FetchDataContext);

  const titleRef = useRef();
  const [titleWarning, setTitleWarning] = useState(false);
  const contentRef = useRef();
  const [contentWarning, setContentWarning] = useState(false);

  const [state, setState] = useState({
    title: "",
    content: "",
    emotion: 1,
  });

  const handleChangesState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    checkTitleAndContent(
      state.title,
      setTitleWarning,
      titleRef,
      state.content,
      setContentWarning,
      contentRef
    );

    console.log("저장 전", state);
    await createDiary(state);
    console.log("저장 후");
    fetchData();
    setState({
      title: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <DiaryBody>
      <SpringWrapper>
        <Spring />
        <Spring />
        <Spring />
        <Spring />
      </SpringWrapper>
      <Wrapper>
        <p>✦ 오늘의 일기 ✦</p>
        <TitleWarpper>
          <span>제목</span>
          <Title
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
          <Content
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
        <EmotionWrapper>
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
        </EmotionWrapper>
        <div>
          <button onClick={handleSubmit}>일기 저장하기</button>
        </div>
      </Wrapper>
    </DiaryBody>
  );
};

const DiaryBody = styled.div`
  text-align: center;
  padding-bottom: 20px;

  display: flex;
  justify-content: space-around;
  align-items: start;
`;

const SpringWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
`;

const Spring = styled.div`
  background-color: gray;
  width: 25px;
  height: 50px;

  border-radius: 30px;

  margin-right: 40px;
  margin-left: 40px;
  margin-top: 50px;
`;

const Wrapper = styled.div`
  margin-top: 70px;
  width: 600px;
  background-color: #e9e76e;
  border-radius: 20px;
  font-family: "ONE-Mobile-Title";

  > p {
    margin-top: 50px;
    margin-bottom: 20px;

    color: white;
    font-size: 40px;
    font-family: "PyeongChangPeace-Bold";
  }

  > div > span {
    padding-bottom: 5px;
    align-self: flex-start;
    font-weight: 400px;
    font-size: 16px;
  }

  > div > button {
    all: unset;

    margin-bottom: 40px;
    padding: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 500px;

    cursor: pointer;

    color: white;
    background-color: #cbc95f;
    border-radius: 10px;

    font-weight: bold;

    &:hover {
      background-color: #bcba5a;
    }
  }
`;

const TitleWarpper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 50px;
  padding-right: 50px;
  margin-bottom: 10px;
  position: relative;

  > div {
    position: absolute;
    display: flex;
    align-items: flex-start;
    width: 100%;
    left: 50px;
    top: 70px;
  }

  > div > p {
    color: #ea1b1b;
    font-size: 10px;
    font-family: "ONE-Mobile-Title";
  }
`;

const ContentWarpper = styled(TitleWarpper)`
  > div {
    top: 205px;
  }
`;

const Title = styled.input`
  outline: none;
  border: none;
  position: relative;

  width: 100%;
  padding: 10px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 20px;

  text-align: start;
  font-size: 15px;
  font-family: "ONE-Mobile-Title";

  border-radius: 10px;
  background-color: white;
  outline: ${(props) => (props.titleWarning ? "1px solid #ea1b1b" : "none")};
`;

const Content = styled.textarea`
  all: unset;
  text-align: start;
  font-size: 15px;

  width: 500px;
  height: 150px;

  padding: 10px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 20px;

  background-color: white;
  border-radius: 10px;
  outline: ${(props) => (props.contentWarning ? "1px solid #ea1b1b" : "none")};
`;

const EmotionWrapper = styled.div`
  padding-bottom: 10px;

  > span {
    padding-right: 10px;
  }

  > select {
    all: unset;

    width: 300px;
    padding: 10px;
    margin-bottom: 20px;

    background-color: white;
    border-radius: 10px;
  }
`;

export default DiaryEditor;
