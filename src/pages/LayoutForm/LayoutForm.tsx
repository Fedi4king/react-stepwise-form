import { Route, Routes, useNavigate } from "react-router-dom";
import { PersonalInfo, AddressInfo, LoanParameters } from "../../shared/ui";
import { fetchService } from "../../entities/api/http/request";
import { useEffect } from "react";
import { INITIAL_DATA, useLoanApplication } from "../../features/LoanApplication/LoanApplicationContext.tsx";
import { Modal } from "@mantine/core";
import styles from "./LayoutForm.module.css";

export const LayoutForm = () => {
  const { setCategoryListSelect, toggle, toggleOpenCloseModal, formData, updateFormData } = useLoanApplication();
  const navigate = useNavigate();
  const personalService  = fetchService;

  const fetchData = async () => {
    const result =  await personalService.getCategoryList();
    setCategoryListSelect(result ?? []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnClose = () => {
    toggleOpenCloseModal(false);
    navigate("/");
    updateFormData(INITIAL_DATA);
  };

  return (
    <div className={styles.wrapper}>
      <Modal centered opened={toggle} onClose={handleOnClose}>
        <p>Поздравляем {formData?.lastName} {formData?.firstName}.</p>
        <p>Вам одобрена {formData?.loan_amount}$ на {formData?.loan_term} дней.</p>
      </Modal>
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="/step1" element={<AddressInfo />} />
        <Route path="/step2" element={<LoanParameters />} />
      </Routes>
    </div>
  );
};
