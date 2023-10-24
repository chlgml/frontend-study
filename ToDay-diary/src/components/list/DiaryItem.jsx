import { useState } from "react";
import styled from "styled-components";
import DiaryEditModal from "../edit/DiaryEditModal";
import DeleteModal from "../delete/DeleteModal";

const DiaryItem = ({ title, content, createDate, emotion, id}) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const toggleIsDeleteModal = () => setIsDeleteModal(!isDeleteModal);

  return (
    <DiaryItemDiv>
      {isEdit ? (
        <>
          <DiaryEditModal
            key={id}
            id={id}
            title={title}
            content={content}
            emotion={emotion}
            toggleIsEdit={toggleIsEdit}
          />
        </>
      ) : (
        <></>
      )}
      {isDeleteModal ? (
        <>
          <DeleteModal
            id={id}
            toggleIsDeleteModal={toggleIsDeleteModal}
          />
        </>
      ) : (
        <></>
      )}

      <Info>
        <Title>{title}</Title>
        <span>감정점수 : {emotion}</span>
        <span>작성일 : {new Date(createDate).toLocaleDateString()}</span>
      </Info>
      <Content>
        <div>
          {content.split("\n").map((line) => {
            return (
              <span>
                {line}
                <br />
              </span>
            );
          })}
        </div>
      </Content>
      <ButtonWrapper>
        <CancelButton onClick={toggleIsDeleteModal}>삭제하기</CancelButton>
        <Button onClick={toggleIsEdit}>수정하기</Button>
      </ButtonWrapper>
    </DiaryItemDiv>
  );
};

const Button = styled.div`
  all: unset;
  cursor: pointer;

  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 10px;

  border: 1px solid black;
  border-radius: 5px;

  &:hover {
    background-color: #cbc95f;
    border: 1px solid #cbc95f;
    color: white;
  }
`;

const CancelButton = styled(Button)`
  &:hover {
    background-color: #cb5f5f;
    border: 1px solid #cb5f5f;
  }
`;

const DiaryItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  background-color: white;
  border-radius: 10px;

  margin-bottom: 10px;
  padding: 20px;
  margin: 10px;
  width: 28%;

  font-family: "ONE-Mobile-Title";
`;

const Info = styled.div`
  width: 100%;

  border-bottom: 1px solid gray;
  padding-bottom: 14px;
  margin-bottom: 5px;

  > span {
    padding-right: 30px;
    font-size: 14px;
    color: #6c6c6c;
  }
`;

const Title = styled.div`
  padding-bottom: 7px;
  font-size: 20px;
  word-break: break-all;
`;

const Content = styled.div`
  margin-top: 15px;
  margin-bottom: 30px;
  word-break: break-all;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export default DiaryItem;
