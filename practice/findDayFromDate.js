
/* 
Several lines of input containing dates in MM/DD/YYYY format.
The program should end when it encounters .

Output Format

Print the day of the week indicated by the date for each line of input on a separate line.

Sample Input

10/11/2009
11/10/2010
-1
Sample Output

Sunday
Wednesday
*/

function findDay(myDate) {
    // Return day for date myDate(MM/DD/YYYY)
    // Note that myDate contains the date in string format
    if(myDate === "-1")
        return;
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date(myDate);
    let dayName = days[d.getDay()];
    console.log(dayName);
}

findDay("10/11/2009");

