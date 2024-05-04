import "./App.css";
import { Header, Footer } from "./components";
import { MainRouter } from "./routes/index";
import { useGetUserQuery } from "./redux/apiQueries";
import { getUser } from "./redux/selectors/auth/auth";
import { useSelector } from "react-redux";

function App() {
  const { isLoading } = useGetUserQuery();
  const user = useSelector((state) => getUser(state));
  console.log(user);

  if (isLoading) {
    // Display some loading text or spinner here
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header user={user} />
      <MainRouter user={user}></MainRouter>
      <Footer />
    </>
  );
}

export default App;
