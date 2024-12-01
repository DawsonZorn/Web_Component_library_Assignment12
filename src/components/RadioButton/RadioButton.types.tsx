export interface RadioButtonItemProps {
  label: string;
  value: string;
}

export interface RadioButtonProps {
  items: RadioButtonItemProps[];
  disabled?: boolean;
}
