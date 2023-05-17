import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import { fetchDeletePost } from "../api/postApi"




const Post = ({ id, title, body }) => {
  const queryClient = useQueryClient()


  /*-------Delete-Post-------*/
  const mutation = useMutation({
    mutationFn: fetchDeletePost,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] })
  })


  /*-------Handle-DeletePost-------*/
  const deletePost = (id) => {
    mutation.mutate(id)
  }


  return (
    <div className="border-b-2 border-[#141414] p-4 flex justify-between items-center">
      
      <Link to={`post/${id}`}>
        <div className="flex gap-1">
          <span className='text-blue-500'>id: </span>
          <h1>{id}</h1>
        </div>
        <div className="flex gap-1">
          <span className='text-green-600'>Title: </span>
          <h1>{title}</h1>
        </div>
        <div className="flex gap-1">
          <span className='text-red-500'>body: </span>
          <p>{body}</p>
        </div>
      </Link>

      <button onClick={() => deletePost(id)} className="bg-red-500 rounded p-2">Delete</button>

    </div>
  )
}

export default Post