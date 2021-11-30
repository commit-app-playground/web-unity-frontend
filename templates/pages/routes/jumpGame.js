import { useContext } from "react";
import { PageTitleContext } from "../contexts/pageTitleContext";
import JumpGame from "../components/JumpGame";

export default function Expenses() {
  const { setTitle } = useContext(PageTitleContext);
  setTitle("Jump Game");

  return <JumpGame />;
}
