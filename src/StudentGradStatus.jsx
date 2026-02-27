const StudentGradStatus = () => {
  const students = [
    { name: "Ade", math: 70, english: 60, science: 70, social: 90 },
    { name: "Bola", math: 50, english: 70, science: 60, social: 80 },
    { name: "Chidi", math: 30, english: 50, science: 40, social: 60 },
  ];

  students.forEach((student) => {
    const StudentTotalScore = (student) => {
      const total =
        student.math + student.english + student.science + student.social;
      return total;
    };
    const StudentAvgScore = (total) => {
      const avg = total / 4;
      return avg;
    };
    let AvgScore = StudentAvgScore(StudentTotalScore(student));
    if (AvgScore < 50) {
      console.log(student.name, " is below average");
    } else if (AvgScore >= 50 && AvgScore < 70) {
      console.log(student.name, "you are on probation");
    } else {
      console.log(student.name, "congratulations,you have been promoted");
    }
  });

  return <div></div>;
};

export default StudentGradStatus;
