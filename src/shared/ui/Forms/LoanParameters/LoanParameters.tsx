import { FormButtons, FormWrapper } from "../..";
import { Slider } from "@mantine/core";
import { marksAmount, marksDate } from "../../../lib/helpers";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLoanApplication } from "../../../../features/LoanApplication/LoanApplicationContext.tsx";
import { FormData } from "../../../types";
import { fetchService } from "../../../../entities/api/http/request";

export const LoanParameters = () => {
  const { control, handleSubmit} = useForm();
  const navigate = useNavigate();
  const { updateFormData, formData, toggleOpenCloseModal } = useLoanApplication();
  const personalService  = fetchService;

  const onSubmit = (data: Partial<FormData>) => {
    updateFormData(data);
  };

  const handleClickGoBackStep = () => navigate("/step1");

  const handleSubmitForm = async () => {
    await personalService.postCategoryAdd({title: `${formData?.firstName} ${formData?.lastName}`});
    toggleOpenCloseModal(true);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormWrapper title="Параметры займа">
        <label>Сумма займа</label>
        <Controller
          name="loan_amount"
          control={control}
          defaultValue=""
          rules={{required: true}}
          render={({field}) => (
            <Slider
              min={200}
              max={1000}
              step={100}
              defaultValue={0}
              value={field.value || 200}
              onChange={field.onChange}
              label={(val) => marksAmount.find((mark) => mark.value === val)!.label || ""}
              marks={marksAmount}
            />
          )}
        />
        <label>Срок займа</label>
        <Controller
          name="loan_term"
          control={control}
          defaultValue=""
          rules={{required: true}}
          render={({field}) => (
            <Slider
              labelAlwaysOn
              min={1}
              max={30}
              step={1}
              defaultValue={0}
              value={field.value || 1}
              onChange={field.onChange}
              label={(val) => marksDate.find((mark) => mark.value === val)?.label || ""}
            />
          )}
        />
        <FormButtons
          onClick={handleClickGoBackStep}
          onSubmit={handleSubmitForm}
          showButtonBack
          showButtonSubmit
        />
      </FormWrapper>
    </form>
  );
};
