import { useContext } from "react";
import FpsGame from "../components/FpsGame";
import { PageTitleContext } from "../contexts/pageTitleContext";

export default function Expenses() {
  const { setTitle } = useContext(PageTitleContext);
  setTitle("FPS Game");

  return <FpsGame />;
}
