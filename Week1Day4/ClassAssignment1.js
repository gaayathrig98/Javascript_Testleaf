// Print odd Numbers between 1 and 25
function oddNumbers()
 {
  console.log('Odd Numbers between 1 to 25 are');

  for (let i = 1; i <= 25; i++)
{
    if (i % 2 !== 0) 
     {
      console.log(i);
     }
}
}

// calling the function
oddNumbers();