function App() {
  const [posts, setPosts] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function getPosts() {
      setLoading(true);
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let posts = await response.json();
      setPosts(posts);
      setLoading(false);
    }

    getPosts();
  }, []);

  const lastPostIndex = postsPerPage * currentPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  function changePage(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="container mt-4">
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsCount={posts.length}
        postsPerPage={postsPerPage}
        changePage={changePage}
      />
    </div>
  );
}

function Posts({ posts, loading }) {
  if (loading) return <h1>Loading...</h1>;

  return (
    <ul className="list-group">
      {posts.map((post) => {
        return (
          <li key={post.id} className="list-group-item">
            id: {post.id} {post.title}
          </li>
        );
      })}
    </ul>
  );
}

function Pagination({ postsPerPage, postsCount, changePage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.floor(postsCount / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  return (
    <ul className="pagination mt-2">
      {pageNumbers.map((number) => {
        return (
          <li key={number} className="page-item">
            <a
              href="#"
              className="page-link"
              onClick={() => changePage(number)}
            >
              {number}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
