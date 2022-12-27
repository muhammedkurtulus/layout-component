import Link from "next/link";
const Test = () => {
  return (
    <main className="d-flex flex-column min-vh-100">
      <div className="px-4 py-5 my-5 text-center flex-grow-1">
        <h1 className="display-5 fw-bold">Test Page</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Our layout component is visible on all the pages.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link className="btn btn-primary" href="/" role="button">
              Click to Home Page
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Test;
