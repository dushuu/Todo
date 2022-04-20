import React from "react";
import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Todo from "./component/Todo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage";
import Login from "./component/Login";
import { PrivateRoute } from "./component/privateRoute";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/todo"
              element={
                <PrivateRoute>
                  <Todo />
                </PrivateRoute>
              }
            />
            {/* <Route path='/Login' element={<Login/>}/> */}
          </Routes>
          <ReactQueryDevtools initialIsopen={false} />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
