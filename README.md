This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# Try it out! https://simple-bananas.herokuapp.com/

## How it works:
- startDate - Provide a query string of the desired start date in the format of MM-DD-YYYY. This field is required.
- numberOfDays = Provide a query in the form of an integer. This field is required.
#### Output
- Render the "totalCost" as the output by solving this “Bob’s Banana Budget” problem:
- Every day, Bob buys a banana from the same grocery store on his way to work. At this grocery store, bananas are priced in a dynamic, yet predictable way: the first 7 days of the month, bananas cost $0.05; the second 7 days of the month, bananas cost $0.10; the third 7 days of the month, bananas cost $0.15; the fourth 7 days of the month, bananas cost $0.20; and any remaining days of the month after that, bananas cost $0.25. Bob wants a tool built that will allow him to budget properly for any span of time. All he should need to do is provide the date for the calculation to begin and how many days to calculate (including the beginning date), and the tool should tell him how much he’ll spend during that time. 
_NOTE: Bob only buys bananas on his work days. You can assume he works a typical Monday-Friday work week._

#### Note: The app may take a long time if you input a large number for the number of days input (365000 took about 10-15 seconds)
