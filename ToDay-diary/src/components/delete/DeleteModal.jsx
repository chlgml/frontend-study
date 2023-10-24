import styled from "styled-components";
import {
  Wrapper,
  ModalButton,
  ModalCancelButton,
} from "../edit/DiaryEditModal";
import { deleteDiary } from "../../api/api";
import { useContext, useEffect } from "react";
import { FetchDataContext } from "../../page/main";
import { modalFixed } from "../modal";

const DeleteModal = ({ id, toggleIsDeleteModal }) => {
  const fetchData = useContext(FetchDataContext);

  useEffect(() => {
    modalFixed();
    return () => {
      document.body.style.cssText = "";
      window.scrollTo(0, window.innerHeight);
    };
  }, []);

  const onDeleteDiary = async () => {
    await deleteDiary(id);
    fetchData();
    toggleIsDeleteModal();
  };

  return (
    <DeleteModalWrapper>
      <Modal>
        <TextWrapper>
          <div>정말 삭제 하시겠습니까?</div>
          <p>한 번 삭제된 일기는 되돌릴 수 없습니다</p>
        </TextWrapper>
        <ButtonWarpper>
          <Button onClick={onDeleteDiary}>예, 삭제합니다</Button>
          <CancelButton onClick={toggleIsDeleteModal}>아니요</CancelButton>
        </ButtonWarpper>
      </Modal>
    </DeleteModalWrapper>
  );
};

const DeleteModalWrapper = styled(Wrapper)``;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 35%;
  height: 25%;

  background-color: white;

  border-radius: 10px;
`;

const TextWrapper = styled.div`
  margin-left: 35px;
  margin-bottom: 30px;

  > div {
    font-size: 30px;
    padding-bottom: 10px;
    font-family: "PyeongChangPeace-Bold";
  }

  > p {
    font-size: 20px;
  }
`;

const ButtonWarpper = styled.div`
  margin-right: 15px;

  display: flex;
  justify-content: flex-end;

  > button {
    margin-left: 10px;
  }
`;

const Button = styled(ModalCancelButton)`
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: 10px;
`;

const CancelButton = styled(ModalButton)`
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: 10px;
`;

export default DeleteModal;
