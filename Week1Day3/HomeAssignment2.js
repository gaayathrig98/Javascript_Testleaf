// Function 1:Launch Browser using if else
    function launchBrowser(browserName)
{
    if (browserName=="Chrome")
    {
        console.log("The launch browser name is Chrome")
    }
    else {
        console.log ("The Launch Broswer is not chrome ")
    }
}
launchBrowser("Chrome")
launchBrowser("Firefox")


// Function 2: Run test type using switch
function runTests(testType)
 {
    switch (testType) 
    {
        case "smoke":
            console.log("Running Smoke tests");
            break;

        case "sanity":
            console.log("Running Sanity tests");
            break;

        case "regression":
            console.log("Running Regression tests");
            break;

        default:
            console.log("Running Default (Smoke) tests");
    }
}

runTests("smoke")
runTests("sanity")
runTests("regression")
runTests("Smoke")


