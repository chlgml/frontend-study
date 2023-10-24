export const checkTitleAndContent = (
  title,
  setTitleWarning,
  titleRef,
  content,
  setContentWarning,
  contentRef
) => {
  if (title.length < 1 || content.length < 5) {
    if (content.length < 5) {
      contentRef.current.focus();
      setContentWarning(true);
    } else setContentWarning(false);

    if (title.length < 1) {
      titleRef.current.focus();
      setTitleWarning(true);
    } else setTitleWarning(false);

    return;
  } else {
    setContentWarning(false);
    setTitleWarning(false);
  }
};
