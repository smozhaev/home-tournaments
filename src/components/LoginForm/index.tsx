import { SubmitHandler, useForm } from "react-hook-form";
import { IMyForm } from "./type.ts";

const LoginForm = () => {
  const {
    register, // метод для регистрации вашего инпута, для дальнейшей работы с ним
    handleSubmit, // метод для получения данных формы, если валидация прошла успешна
    formState: { errors }, // errors - список ошибок валидации для всех полей формы
    reset, // метод для очистки полей формы
  } = useForm<IMyForm>({
    mode: "onBlur", // парметр onBlur - отвечает за запуск валидации при не активном состоянии поля
  });

  const saveElement = (data: IMyForm) => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(saveElement)}>
      <input
        {...register("name", {
          required: "Поле обязательно для заполнения",
          minLength: {
            value: 5,
            message: "Нужно больше символов",
          },
        })}
      />
      <div>{errors.name?.message}</div>
      <input
        {...register("age", {
          required: "Поле обязательно для заполнения",
          minLength: {
            value: 10,
            message: "Нужно больше символов",
          },
        })}
      />
      <div>{errors.age?.message}</div>
      <button type="submit">Сохранить</button>
    </form>
  );
};
export default LoginForm;
