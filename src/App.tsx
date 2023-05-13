import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/defaulTheme";
import { GlobalStayle } from "./styles/global";
import { Transactions } from "./pages/transactions";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStayle />
      <Transactions />
    </ThemeProvider>
  )
}
