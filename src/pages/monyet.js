import Head from 'next/head';
import Image from "next/image";

const MonyetPage = () => {
  return (
    <div>
      <Head>
        <title>Monyet Page</title>
        <meta name="description" content="Tampilan full gambar monyet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen py-20 flex justify-center items-center bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center ">hadeh dibilang jangan diklik blokkkkk</h1>
          <div className="flex justify-center">
          <Image
            src="/images/monyet.png"
            alt="Monyet"
            width={500} // Set the width of the image
            height={400} // Set the height of the image
            className="rounded-lg shadow-xl"
                />
                 </div>
        </div>
      </main>
    </div>
  );
};

export default MonyetPage;
