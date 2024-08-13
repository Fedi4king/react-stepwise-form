import { FC } from "react";
import { Button } from "@mantine/core";

interface FormButtonsProps {
  onClick?(): void,
  onSubmit?(): void,
  showButtonBack?: boolean,
  showButtonForward?: boolean,
  showButtonSubmit?: boolean,
};

export const FormButtons: FC<FormButtonsProps> = ({
  showButtonBack,
  showButtonSubmit,
  onClick,
  showButtonForward,
  onSubmit
}) => {
  return (
    <>
      {showButtonBack && <Button variant="outline" onClick={onClick}>
        Назад
      </Button>}
      {showButtonForward && <Button variant="outline" type="submit">
        Далее
      </Button>}
      {showButtonSubmit && <Button variant="outline" type="submit" onClick={onSubmit}>
        Подать заявку
      </Button>}
    </>
  );
};
