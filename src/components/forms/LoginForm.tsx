import { useForm } from "react-hook-form";
import { Input } from "../ui/Input/Input";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <form onSubmit={onSubmit}>
      <Input
        label="email"
        register={register}
        errors={errors}
        options={{
          required: true,
          pattern:
            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
        }}
      />
      <button>dale</button>
      {errors.email && <p>Invalid email</p>}
    </form>
  );
}
