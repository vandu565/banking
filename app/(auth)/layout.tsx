import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image
            src="/icons/auth-image.png"
            alt="Auth image"
            width={900}
            height={1800}
            className="rounded-l-xl object-contain border border-gray-300 shadow-lg"
          />
        </div>
      </div>
    </main>
  );
}
