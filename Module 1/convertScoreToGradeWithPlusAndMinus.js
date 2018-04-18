function convertScoreToGradeWithPlusAndMinus(score) {
  grade = 'INVALID SCORE';

  pm = '';
  var score_mod = score % 10;
  if (score_mod <= 9 && score_mod >= 8) {
    pm = '+';
  } else if (score_mod <= 2 && score_mod >= 0) {
    pm = '-';
  }

  if (score <= 100 && score >= 90) {
    grade = 'A';
  } else if (score <= 89 && score >= 80) {
    grade = 'B';
  } else if (score <= 79 && score >= 70) {
    grade = 'C';
  } else if (score <= 69 && score >= 60) {
    grade = 'D';
  } else if (score <= 59 && score >= 0) {
    grade = 'F';
  }

  if (grade === 'F' || grade === 'INVALID SCORE') return grade;
  else if (score === 100) return grade + '+';
  else return grade + pm;
}

var output = convertScoreToGradeWithPlusAndMinus(100);
console.log(output); // --> 'A-'
