export interface DropdownProps {
  options: string[];  // Options to display in the dropdown
  onSelect: (value: string) => void;  // Function to call when an option is selected
}