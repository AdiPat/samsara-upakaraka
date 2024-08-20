"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppRouterCacheProvider from "@mui/material-nextjs/v13-appRouter/appRouterV13";

const theme = createTheme({
  typography: {
    fontFamily: "Lexend, Arial, sans-serif",
  },
});

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
}
