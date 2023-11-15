import Link from "next/link"


const Navbar = () => {
    return (
      <div>
       <Link href={`/addTopic`} className="bg-red-500 text-white px-8 py-3">Add Topic</Link>
      </div>
    )
  }
  
  export default Navbar
  