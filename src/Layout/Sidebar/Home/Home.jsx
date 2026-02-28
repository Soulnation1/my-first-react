import CountingApp from "../../../counter/CountingApp";
import Users from "../../../Users/Users";
import ParentModal from "../../../ParentModal/ParentModal"
import studentGradStatus from "../../../StudentGradStatus";
const Home = () => {
  return (
    <div className="flex flex-col">
      
      <ParentModal/>
      <CountingApp/>
      <Users/>
    </div>
  );
};

export default Home;
