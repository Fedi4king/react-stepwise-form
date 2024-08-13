import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import { LoanApplicationProvider } from "./features/LoanApplication/LoanApplicationContext";
import { App } from "./app/App";

import "@mantine/core/styles/global.css";
import "@mantine/core/styles.css";

createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <LoanApplicationProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LoanApplicationProvider>
  </MantineProvider>
);
