import { FC } from "react"

import { IButtonProps } from "./interface"

const Button: FC<IButtonProps> = ({ label, type = "button", onClick, color = "blue" }) => {
  return (
    <button type={type} onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {label}
    </button>
  )
}

export default Button
