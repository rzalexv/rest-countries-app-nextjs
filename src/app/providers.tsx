"use client";
import { ReactNode, FC } from "react";
import { ThemeProvider } from "next-themes";

interface Props {
  children?: ReactNode;
}

export const Providers: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
};
