import { useContext } from "react";
import { PageTitleContext } from "../contexts/pageTitleContext";
import LegoGame from "../components/LegoGame";

export default function Expenses() {
  const { setTitle } = useContext(PageTitleContext);
  setTitle("LEGO Game");

  return <LegoGame />;
}
