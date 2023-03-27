export interface IButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  color?: string;
}
