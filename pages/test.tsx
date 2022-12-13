import Link from "next/link";

const Test = () => {
  return (
    <div>
      <p>this is test page.</p>
      <p>
        <Link href="/">click to home page</Link>
      </p>
    </div>
  );
};

export default Test;
