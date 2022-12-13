import React from 'react'
import Link from "next/link";
  
const HomePage = () => {
  return (
    <div>
      <p>This is home page.</p>
        <p>
      <Link href="/test">
      Click to test page.
      </Link>
        </p>
    </div>
  
  )
}
  
export default HomePage