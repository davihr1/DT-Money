import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/defaulTheme";
import { GlobalStayle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStayle />
      <h1>hello world</h1>
    </ThemeProvider>
  )
}
