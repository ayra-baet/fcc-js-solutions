function getAverage(scores) {

    let sum = 0;

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }

    return sum / scores.length;
}

function getGrade(score) {
    if (score === 100) {
        return "A+";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function hasPassingGrade(score) {
    return getGrade !== "F";
}

function studentMsg(scores, score) {

    let courseOutcome = "";

    if (hasPassingGrade(score)) {
        courseOutcome = "You passed the course.";
    } else {
        courseOutcome = "You failed the course.";
    }

    return `Class Average: ${getAverage(scores)}. Your grade: ${getGrade(score)}. ${courseOutcome}`;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getGrade(79));
console.log(hasPassingGrade(79));
console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75))