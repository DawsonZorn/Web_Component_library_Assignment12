export interface DropdownItemProps {
  label: string;
  value: string;
}

export interface DropdownProps {
  items: DropdownItemProps[]; // Array of items with label and value
  disabled?: boolean; // Optional prop to disable the dropdown
}