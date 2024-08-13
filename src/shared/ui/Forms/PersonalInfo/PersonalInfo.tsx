import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Select, TextInput } from "@mantine/core";
import { FormWrapper } from "../FormWrapper";
import { useLoanApplication } from "../../../../features/LoanApplication/LoanApplicationContext";
import { FormData } from "../../../types";
import { FormButtons } from "../FormButtons";

export const PersonalInfo = () => {
  const { control, handleSubmit } = useForm();

  const navigate = useNavigate();

  const { updateFormData, formData } = useLoanApplication();

  const onSubmit = (data: Partial<FormData>) => {
    updateFormData(data);
    navigate("/step1");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormWrapper title="Личные данные">
        <Controller
          name="firstName"
          control={control}
          defaultValue={formData?.firstName}
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput
              label="Имя"
              autoFocus
              required
              type="text"
              {...field}
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          defaultValue={formData?.lastName}
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput
              label="Фамилия"
              required
              type="text"
              {...field}
            />
          )}
        />
        <Controller
          name="gender"
          control={control}
          defaultValue={formData?.gender}
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              label="Пол"
              required
              data={["Мужской", "Женский"]}
              {...field}
              onChange={(value) => field.onChange(value)}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          defaultValue={formData?.phone}
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput
              label="Телефон"
              required
              min={1}
              type="tel"
              {...field}
            />
          )}
        />
        <FormButtons showButtonForward />
      </FormWrapper>
    </form>
  );
};
