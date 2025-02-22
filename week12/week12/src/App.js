import styled from "styled-components";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import BookDetail from "./pages/BookDetail";
import TestList from "./pages/TestList";
import TestResult from "./pages/TestResult";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  return (
    <AppDom>
      <Routes>
        <Route path ="/" element ={<Home />}/>
        <Route path ="/books" element ={<BookList/>}>
          <Route path= ":id" element={<BookDetail/>}/>
        </Route>
        <Route path="/liontest" element={
          <PrivateRoute>
          <TestList />
          </PrivateRoute>
          }></Route>{" "}
        <Route
          path="/liontest/result/:num"
          element={<TestResult></TestResult>}
        ></Route>
      </Routes>
    </AppDom>
  );
}

export default App;

const AppDom = styled.div`
  display: flex;
  width: 100%;
  min-height: 95vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;