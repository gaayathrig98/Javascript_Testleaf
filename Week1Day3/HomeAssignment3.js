function studentScore(score)
{
switch(true)
{
    case (score >=90):
    console.log("Student grade is S")
    break

    case (score >=70):
    console.log("Student Grade is A");
    break

    case (score >=50):
    console.log("Student Grade is B");
    break

    default: (score < 50)
    console.log("Student Grade is E");
    
}
}
studentScore (95)
studentScore (75)
studentScore (55)
studentScore (40)