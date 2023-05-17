import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from '../api/postApi'
import Post from '../components/Post'






const PostList = () => {
  const { data: posts, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts
  })
  

  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <h1>Error:{error.message}</h1>


  return (
    <section> 
        <h1 className='font-bold mb-3'>Post List:</h1>
        
        <div className='flex flex-col-reverse gap-3'>
          {
            posts?.map(post => <Post key={post.id} {...post} /> )
          }
        </div>
    </section>
  )
}

export default PostList