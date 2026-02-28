import scoreRange from "./scoreRange";
const studentScore = {
  name: "sade",
  math: 70,
  english: 60,
  science: 70,
  social: 90,
};

const subject = ["math", "english", "science", "social"];

const studentGradStatus = () => {
  studentScore.forEach((studentScore) => {
    const studentTotalScore = (studentScore) => {
      let total = 0;
      total += studentScore.math;
      total += studentScore.english;
      total += studentScore.science;
      total += studentScore.social;

      return total;
    };
    const studentAvgScore = (total) => {
      const avg = total / subject.length;
      return avg;
    };
    let AvgScore = studentAvgScore(studentTotalScore(studentScore));
    if (AvgScore < scoreRange.minScore) {
      console.log(studentScore.name, "is below average");
    } else if (
      AvgScore >= scoreRange.minScore &&
      AvgScore < scoreRange.maxScore
    ) {
      console.log(studentScore.name, "you are on probation");
    } else {
      console.log("congratulations,you have been promoted");
    }
  });
};
studentGradStatus();
