import { createContext } from "react";

const PageTitleContext = createContext();

function PageTitleProvider({ children, title, setTitle }) {
  return (
    <PageTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
}

export { PageTitleContext, PageTitleProvider };
