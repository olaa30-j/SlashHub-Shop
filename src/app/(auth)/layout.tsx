import Layout from "@/components/auth/UnAuthLayout";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
        {children}
    </Layout>
  );
}