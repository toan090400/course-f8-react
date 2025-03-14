import MyContextProvider from "./asset/useContext/useContext";
import Page1 from "./asset/useContext/page_1";
import Image from "./asset/useEffect/image";
import Todo from "./asset/useReducer/todo";
function App() {
  return (
    <>
      {/* thực hành sử dụng useEffect hiển thị hình ảnh */}
      <Image />
      {/* thực hành chức nằng useReducer với ứng dụng todo list */}
      <Todo />
      {/* thực hành chức nằng useContext  */}
      <MyContextProvider>
        <Page1 />
      </MyContextProvider>
    </>
  );
}

export default App;
