import { createContext, FC, ReactNode, useContext, useState } from "react";
import { FormData } from "../../shared/types";

export const INITIAL_DATA: FormData = {
  firstName: "",
  phone: "",
  lastName: "",
  address: "",
  place_of_work: "",
  gender: "",
  loan_amount: 0,
  loan_term: 0,
};

interface LoanApplicationContextProps {
  children: ReactNode;
};

const LoanApplicationContext = createContext<{
  formData: FormData | null;
  selectData: string[],
  toggle: boolean;
  updateFormData: (data: Partial<FormData>) => void;
  setCategoryListSelect: (data: string[]) => void,
  toggleOpenCloseModal: (val: boolean) => void,
}>({
  formData: INITIAL_DATA,
  selectData: [],
  toggle: false,
  updateFormData: () => {},
  setCategoryListSelect: () => {},
  toggleOpenCloseModal: () => {},
});

export const LoanApplicationProvider: FC<LoanApplicationContextProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);

  const [selectData, setSelectData] = useState<string[]>([]);

  const [toggle, setToggle] = useState<boolean>(false);

  const updateFormData = (data: Partial<FormData>) => setFormData((prevData) => ({ ...prevData, ...data }));

  const setCategoryListSelect = (data: string[]) => setSelectData(data);

  const toggleOpenCloseModal = (val: boolean) => setToggle(val);

  return (
    <LoanApplicationContext.Provider value={{ formData, selectData, updateFormData, setCategoryListSelect, toggleOpenCloseModal, toggle }}>
      {children}
    </LoanApplicationContext.Provider>
  );
};

export const useLoanApplication = () => useContext(LoanApplicationContext);
