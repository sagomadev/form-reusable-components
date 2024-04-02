import { useForm } from "react-hook-form";
import { Input } from "../ui/Input/Input";

export default function App() {
  const {
    clearErrors,
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const onSubmit = handleSubmit((data) => console.log(data));
  console.log("Reendering...");
  return (
    <form onSubmit={onSubmit}>
      <Input
        label="email"
        register={register}
        errors={errors}
        clearErrors={clearErrors}
        options={{
          required: true,
          pattern:
            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
        }}
        watch={watch}
      />
      <button>dale</button>
    </form>
  );
}
