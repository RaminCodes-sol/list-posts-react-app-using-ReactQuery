import { useQuery } from "@tanstack/react-query"
import { useNavigate, useParams } from "react-router-dom"
import { fetchPost, fetchUser } from "../api/postApi"




const PostPage = () => {
  const navigate = useNavigate()
  const params = useParams()
  const id = Number(params.id)
  

  /*-------Get-Post-------*/
  const { data: post, isLoading, isError, error } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchPost(id)
  })

  /*-------Get-User-------*/
  const { data: user, status: userStatus} = useQuery({
    enabled: post?.id != null, 
    queryKey: ['user', post?.id],
    queryFn: () => fetchUser(post?.id),
  })


  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <h1>Error: {error.massage}</h1>


  let userName = user?.name
  if (userStatus === 'loading') userName = 'Loading...'
  if (userStatus === 'error') userName = 'Error...'


  return (
    <div>

        <div className="flex justify-between items-center">
          <h1 className="font-bold text-3xl mb-6">Post:</h1>
          <button onClick={() => navigate('/')} className="bg-black text-white p-2 rounded">Home</button>
        </div>

        <div className="flex gap-1 mb-2">
            <span className="text-blue-500">Title: </span>
            <h1>{post.title}</h1>
        </div>

        <div className="flex gap-1 mb-2">
            <span className="text-green-600">Name: </span>
            <h1>{userName}</h1>
        </div>

        <div className="flex gap-1">
            <span className="text-red-500">Body: </span>
            <p>{post.body}</p>
        </div>
        
    </div>
  )
}

export default PostPage