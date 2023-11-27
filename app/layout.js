
import Navbar from '@/components/Navbar';
import './globals.css';
import Head from 'next/head';

export const metadata = {
  title: 'Udemy Course',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <div className="container">
        <Navbar />
        {children}
      </div>
    </>
  );
}
