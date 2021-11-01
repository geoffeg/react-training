import React from "react";

type InputProps = {
  id: string;
  error: string;
  label: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type: "text" | "email" | "number" | "date" | "textArea";
  value: string;
};

function TextAreaOrInput({ id, type, value, onChange }: InputProps) {
  if (type === "textArea") {
    return <textarea id={id} value={value} onChange={onChange} />;
  }
  return <input type={type} id={id} value={value} onChange={onChange} />;
}

export function Input(props: InputProps) {
  const { id, error, label, type = "text", value, onChange } = props;
  if (!id) throw new Error("ID must be populated");
  return (
    <>
      <div>
        <label htmlFor={id}>{label}</label>
        <br />
        <TextAreaOrInput
          id={id}
          type={type}
          label={label}
          value={value}
          error={error}
          onChange={onChange}
        />
      </div>
      <div style={{ color: "red" }}>{error}</div>
    </>
  );
}
