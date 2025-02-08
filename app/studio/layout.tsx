import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-shop",
  description: "This is for our GIAIC Students",
};

const RootLayout = ({children} :{children:React.ReactNode}) => {
  return(
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout;