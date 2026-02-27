import Home from "./Layout/Sidebar/Home/Home";
import About from "./Layout/Sidebar/About/About";
import Portfolio from "./Layout/Sidebar/Portfolio/Portfolio";
import Pages from "./Layout/Sidebar/Pages/Pages";
import TodoApp from "./TodoApp/TodoApp";
import Kalculator from "./kalculator/KalculatorApp";
import SignUp from "./Forms/SignUp";

const routes = [
{
    path : "/",
    element : <Home/>,
},
{
        path : "/About",
    element : <About/>,

},
{
        path : "/Portfolio",
    element : <Portfolio/>,

},
{
        path : "/Pages",
    element : <Pages/>,

},
{
        path : "/Kalculator",
    element : <Kalculator/>,

},
{
        path : "/TodoApp",
    element : <TodoApp/>,

},
{
    path : "/SignUp",
    element : <SignUp/>
}

]

export default routes;