import { FormWrapper } from "../FormWrapper";
import { TextInput } from "@mantine/core";
import { PlaceOfWorkSelect } from "../../PlaceOfWorkSelect";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLoanApplication } from "../../../../features/LoanApplication/LoanApplicationContext.tsx";
import { FormData } from "../../../types";
import { FormButtons } from "../FormButtons";

export const AddressInfo = () => {
  const {control, handleSubmit} = useForm();
  const navigate = useNavigate();

  const { updateFormData, formData } = useLoanApplication();

  const onSubmit = (data: Partial<FormData>) => {
    updateFormData(data);
    navigate("/step2");
  };

  const handleClickGoBackStep = () => navigate("/");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormWrapper title="Адресс и место работы">
        <Controller
          name="address"
          control={control}
          defaultValue={formData?.address}
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput
              label="Адрес проживания"
              autoFocus
              required
              type="text"
              {...field}
            />
          )}
        />
        <Controller
          name="place_of_work"
          control={control}
          defaultValue={formData?.place_of_work}
          rules={{ required: true }}
          render={({ field }) => (
            <PlaceOfWorkSelect
                label="Место работы"
                required
                type="text"
                {...field}
            />
          )}
        />
        <FormButtons
          onClick={handleClickGoBackStep}
          showButtonBack
          showButtonForward
        />
      </FormWrapper>
    </form>
  );
};
