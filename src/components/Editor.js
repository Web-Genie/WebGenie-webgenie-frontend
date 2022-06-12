import React, { useContext, useEffect, useState } from "react";
import { FaArrowLeft, FaRegEdit } from "react-icons/fa";
import styled from "styled-components";

import {
  ID_TOKEN,
  REQUEST_DATA_INFORMATION_EDITOR,
} from "../constants/constants";
import { UserContext } from "../context/userContext";
import useAxios from "../hooks/useAxios";
import useInput from "../hooks/useInput";
import useLogout from "../hooks/useLogout";
import useModal from "../hooks/useModal";
import Button from "./Button";
import EditorTemplate from "./EditorTemplate";
import Header from "./Header";
import LeftToolbar from "./LeftToolbar";
import Loader from "./Loader";
import Modal from "./Modal";
import ModalContent from "./ModalContent";
import Navigation from "./Navigation";
import RightToolbar from "./RightToolbar";

function Editor() {
  const { editor } = useContext(UserContext);
  const { handleLogout } = useLogout();
  let currentEditorId = window.location.pathname
    .split("/")
    .filter((item) => item !== "editor")
    .join("");
  const {
    userTitle,
    shouldEditValue,
    handleInputChange,
    toggleInputChange,
    setUserTitle,
  } = useInput("editor", editor);
  const [shouldShowWideView, setShouldShowWideView] = useState(false);
  const {
    shouldDisplayModal,
    saveModalToggle,
    publishModalToggle,
    closeModal,
    message,
  } = useModal(userTitle, currentEditorId);
  const toggleWideView = () => {
    setShouldShowWideView((state) => !state);
  };

  const [backgroundColor, setBackgroundColor] = useState("");
  const [imageOpacity, setImageOpacity] = useState(1);
  const [imageBrightness, setImageBrightness] = useState(1);
  const [imageBlur, setImageBlur] = useState(0);

  const handleImgOpacity = (event) => {
    setImageOpacity(event.target.value);
  };

  const handleImgBrightness = (event) => {
    setImageBrightness(event.target.value);
  };

  const handleImgBlur = (event) => {
    setImageBlur(event.target.value);
  };
  const { fetchData } = useAxios(
    {
      method: "get",
      url: `/websites/${currentEditorId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem(ID_TOKEN)}`,
        params: currentEditorId,
      },
    },
    ID_TOKEN,
    REQUEST_DATA_INFORMATION_EDITOR
  );

  useEffect(() => {
    if (editor) return;

    setUserTitle(null);
    fetchData();
  }, []);

  if (!editor) {
    return <Loader />;
  }

  if (!userTitle && !shouldEditValue) {
    return <Loader />;
  }

  return (
    <>
      {shouldDisplayModal && (
        <Modal>
          <ModalContent
            modalText={message.titleMessage}
            primaryButtonText={message.proceedButtonText}
            secondaryButtonText={message.denyButtonText}
            modalIconState={message.iconType}
            currentTitle={userTitle}
            params={message.params}
            requestType={message.requestType}
            handleClick={closeModal}
          />
        </Modal>
      )}
      <Header>
        <h1>WebGenie</h1>
        <LogoutSection>
          <img src={localStorage.getItem("avatar")} />
          <Button handleClick={handleLogout}>logout</Button>
        </LogoutSection>
      </Header>
      <Navigation>
        <div className="editorNavbar">
          <a href="/">
            <FaArrowLeft />
          </a>
          <div className="titleNavbar">
            {!shouldEditValue ? (
              <h3>{userTitle}</h3>
            ) : (
              <input onChange={handleInputChange} />
            )}
            <span onClick={toggleInputChange}>
              <FaRegEdit />
            </span>
          </div>
        </div>
        <div>
          <Button handleClick={saveModalToggle} mainButton={false}>
            Save
          </Button>
          <Button handleClick={toggleWideView} mainButton={false}>
            Wide View
          </Button>
          <Button handleClick={publishModalToggle} mainButton={true}>
            Publish
          </Button>
        </div>
      </Navigation>
      <EditorBody>
        {!shouldShowWideView && <LeftToolbar />}
        <EditorTemplate displayWideView={shouldShowWideView} />
        {!shouldShowWideView && <RightToolbar />}
      </EditorBody>
    </>
  );
}

const EditorBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 84vh;
  overflow: hidden;
  background-color: #f5f5f5;
`;

const LogoutSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
`;

export default Editor;
