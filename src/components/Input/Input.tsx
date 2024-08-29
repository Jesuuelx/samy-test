import { WrapperInput } from "./Input.style";
import { removeEspecialCharacters } from "../../helpers/utils";
import { useNavigate } from "react-router-dom";

interface InputProps {
  setValue: (value: string) => void;
  value: string;
  page: number;
}

const Input = ({ value, setValue, page }: InputProps) => {
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = removeEspecialCharacters(e.target.value);
    setValue(inputValue);
    navigate(`?page=${page}&search=${inputValue}`);
  };

  return (
    <WrapperInput>
      <span className="input__icon">🔍</span>
      <input
        type="text"
        placeholder="You're looking for something?"
        className="input__field"
        value={value}
        onChange={handleChange}
      />
    </WrapperInput>
  );
};

export default Input;
