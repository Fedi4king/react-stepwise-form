import { FC, forwardRef } from "react";
import { Select, SelectProps } from "@mantine/core";
import {useLoanApplication} from "../../../features/LoanApplication/LoanApplicationContext.tsx";

export const PlaceOfWorkSelect: FC<SelectProps> = forwardRef<HTMLInputElement, SelectProps>( ({ label, type, onChange, required, value}, ref) => {
  const { selectData} = useLoanApplication();
  return (
    <Select
      ref={ref}
      label={label}
      required={required}
      type={type}
      value={value}
      onChange={(value, option) => onChange?.( value ?? "", option)}
      data={selectData}
    />
  );
});
