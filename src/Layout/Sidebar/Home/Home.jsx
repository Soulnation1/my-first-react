import CountingApp from "../../../counter/CountingApp";
import Users from "../../../Users/Users";
import ParentModal from "../../../ParentModal/ParentModal"
import StudentGradStatus from "../../../StudentGradStatus";
const Home = () => {
  return (
    <div className="flex flex-col">
      <StudentGradStatus/>
      <ParentModal/>
      <CountingApp/>
      <Users/>
    </div>
  );
};

export default Home;
