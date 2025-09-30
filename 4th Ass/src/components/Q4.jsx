import { useGetPostsQuery } from '../store/postsApi'

function Q4() {
  const { data: posts, error, isLoading } = useGetPostsQuery()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <div>
      <h2>Q4: RTK Query</h2>
      {posts?.slice(0, 5).map(post => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Q4