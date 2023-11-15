'use client'

import { useRouter } from "next/navigation"

const RemoveTopic = ({id}) => {
  const router = useRouter();

  const removeTopic = async() =>{
    const confirmed = confirm('Are u sure to delete?')
    if(confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: 'Delete'
      })

      if(res.ok) {
        router.refresh();
      }
    }
  } 
  return (
    <div>
       <button  className="text-red-400" onClick={removeTopic}>
      Delete
    </button>
    </div>
  )
}

export default RemoveTopic
