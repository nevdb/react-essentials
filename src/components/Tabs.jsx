export default function Tabs({ children, buttons, buttonsContainer = "menu" }) {
  const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer className="flex justify-center">
        {buttons}
      </ButtonsContainer>
      {children}
    </>
  );
}
