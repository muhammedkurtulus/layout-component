import Head from "next/head";

const HomePage = () => {
  return (
    <main className="d-flex flex-column min-vh-100">
      <Head>
        <title>Next App</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-4 py-5 my-5 text-center flex-grow-1">
        <h1 className="display-5 fw-bold">Next.js + TypeScript + Bootstrap </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            A boilerplate template for application layout.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a className="btn btn-primary" href="/test" role="button">
              Click to Test Page
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
