import { Input } from "antd";
import { Label } from "../../core/styled";
import { FC } from "react";

type Props = {
  label: string;
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const StyledInput: FC<Props> = ({ label, value, onChange }) => {
  return (
    <>
      <Label $bold>{label}</Label>
      <Input value={value} placeholder="Name" onChange={onChange} />
    </>
  );
};

export default StyledInput;
