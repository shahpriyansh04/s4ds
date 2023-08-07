import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@smastrom/react-rating/style.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { Reem_Kufi } from "next/font/google";

const font = Reem_Kufi({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
      },
    },
  });

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <main className={font.className}>
          <Component {...pageProps} />
        </main>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
