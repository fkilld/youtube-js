

### SUM Formula in Excel

**Syntax:**
```excel
=SUM(number1, [number2], ...)
```

- `number1`, `number2`, ... : These are the numbers you want to sum. You can input individual numbers, cell references, or ranges of cells.

### 10 Examples of SUM Formula

1. **Sum of Individual Numbers:**
   ```excel
   =SUM(1, 2, 3, 4, 5)
   ```
   **Explanation:** Adds the numbers 1, 2, 3, 4, and 5 to get the result 15.

2. **Sum of a Range of Cells:**
   ```excel
   =SUM(A1:A5)
   ```
   **Explanation:** Adds all the numbers in the cells from A1 to A5.

3. **Sum of Non-Contiguous Cells:**
   ```excel
   =SUM(A1, B1, C1)
   ```
   **Explanation:** Adds the values in cells A1, B1, and C1.

4. **Sum of a Range and Individual Cells:**
   ```excel
   =SUM(A1:A3, B1, C1:C3)
   ```
   **Explanation:** Adds the values in the range A1 to A3, the cell B1, and the range C1 to C3.

5. **Sum of Entire Columns:**
   ```excel
   =SUM(A:A)
   ```
   **Explanation:** Adds all the numbers in column A.

6. **Sum with Conditional Formatting:**
   ```excel
   =SUM(A1:A10)
   ```
   **Explanation:** Adds all the numbers in the range A1 to A10. If some cells are highlighted based on certain conditions, it does not affect the sum.

7. **Sum of Cells Matching a Condition:**
   ```excel
   =SUMIF(B1:B10, ">20")
   ```
   **Explanation:** Adds all the numbers in the range B1 to B10 that are greater than 20.

8. **Sum of Cells Based on Multiple Conditions:**
   ```excel
   =SUMIFS(C1:C10, B1:B10, ">20", A1:A10, "<100")
   ```
   **Explanation:** Adds the numbers in C1 to C10 where the corresponding B cells are greater than 20 and the corresponding A cells are less than 100.

9. **Sum of Values with Errors Ignored:**
   ```excel
   =SUMIF(A1:A10, ">0")
   ```
   **Explanation:** Adds all positive numbers in the range A1 to A10, ignoring any errors in the range.

10. **Sum of Inventory Value:**
    ```excel
    =SUM(F5:F10)
    ```
    **Explanation:** Adds the inventory values in cells F5 to F10, assuming this range contains the inventory value data.




<!--  -->

### SUMIF Formula in Excel

**Syntax:**
```excel
=SUMIF(range, criteria, [sum_range])
```

- `range`: The range of cells that you want to apply the criteria to.
- `criteria`: The condition that must be met for a cell to be included in the sum.
- `[sum_range]`: The range of cells to sum if different from `range`. If omitted, Excel sums the cells in `range`.

### 10 Examples of SUMIF Formula

1. **Sum of Values Greater Than a Number:**
   ```excel
   =SUMIF(A1:A10, ">50")
   ```
   **Explanation:** Adds all the values in the range A1 to A10 that are greater than 50.

2. **Sum of Values Less Than a Number:**
   ```excel
   =SUMIF(B1:B10, "<30")
   ```
   **Explanation:** Adds all the values in the range B1 to B10 that are less than 30.

3. **Sum of Values Equal to a Specific Number:**
   ```excel
   =SUMIF(C1:C10, "=100")
   ```
   **Explanation:** Adds all the values in the range C1 to C10 that are exactly 100.

4. **Sum of Values Not Equal to a Specific Number:**
   ```excel
   =SUMIF(D1:D10, "<>200")
   ```
   **Explanation:** Adds all the values in the range D1 to D10 that are not equal to 200.

5. **Sum of Values Greater Than or Equal to a Number:**
   ```excel
   =SUMIF(E1:E10, ">=75")
   ```
   **Explanation:** Adds all the values in the range E1 to E10 that are greater than or equal to 75.

6. **Sum of Values Less Than or Equal to a Number:**
   ```excel
   =SUMIF(F1:F10, "<=60")
   ```
   **Explanation:** Adds all the values in the range F1 to F10 that are less than or equal to 60.

7. **Sum of Values Based on Text Criteria:**
   ```excel
   =SUMIF(P2:P11, "Apple", Q2:Q11)
   ```
   **Explanation:** Adds all the values in the range G1 to G10 that are equal to "Apple".

8. **Sum of Values with Wildcards (Partial Match):**
   ```excel
   =SUMIF(P1:P10, "A*",Q2:Q11)
   ```
   **Explanation:** Adds all the values in the range H1 to H10 where the text starts with "A".

9. **Sum of Values Based on Another Range:**
   ```excel
   =SUMIF(I1:I10, ">10", J1:J10)
   ```
   **Explanation:** Adds the values in the range J1 to J10 where the corresponding values in I1 to I10 are greater than 10.

10. **Sum of Inventory Value for Reorder:**
    ```excel
    =SUMIF(G5:G10, ">20", F5:F10)
    ```
    **Explanation:** Adds the inventory values in the range F5 to F10 where the reorder level in the range G5 to G10 is greater than 20.

<!--  -->
### SUMPRODUCT Formula in Excel

**Syntax:**
```excel
=SUMPRODUCT(array1, [array2], [array3], ...)
```

- `array1`, `array2`, `array3`, ...: The arrays or ranges you want to multiply and then sum. Each array must have the same dimensions.

### 10 Examples of SUMPRODUCT Formula

1. **Basic SUMPRODUCT:**
   ```excel
   =SUMPRODUCT(A1:A5, B1:B5)
   ```
   **Explanation:** Multiplies each corresponding pair of numbers in the ranges A1:A5 and B1:B5, then sums the results. For example, (A1*B1 + A2*B2 + ... + A5*B5).

2. **Sum of Products with One Range:**
   ```excel
   =SUMPRODUCT(A1:A5)
   ```
   **Explanation:** Simply sums the values in the range A1:A5, as there is only one array provided.

3. **Sum of Products with Multiple Arrays:**
   ```excel
   =SUMPRODUCT(A1:A5, B1:B5, C1:C5)
   ```
   **Explanation:** Multiplies each corresponding set of numbers in the ranges A1:A5, B1:B5, and C1:C5, then sums the results. For example, (A1*B1*C1 + A2*B2*C2 + ... + A5*B5*C5).

4. **Weighted Average Calculation:**
   ```excel
   =SUMPRODUCT(A1:A5, B1:B5) / SUM(B1:B5)
   ```
   **Explanation:** Calculates the weighted average of the values in A1:A5, with weights in B1:B5. For example, ((A1*B1 + A2*B2 + ... + A5*B5) / (B1 + B2 + ... + B5)).

5. **Sum of Products with Conditional Array:**
   ```excel
   =SUMPRODUCT((A1:A5 > 10) * B1:B5)
   ```
   **Explanation:** Multiplies the values in B1:B5 by 1 if the corresponding values in A1:A5 are greater than 10, otherwise by 0, then sums the results.

6. **Sum of Products with Boolean Logic:**
   ```excel
   =SUMPRODUCT((A1:A5 > 10) * (B1:B5 < 20) * C1:C5)
   ```
   **Explanation:** Multiplies the values in C1:C5 by 1 if the corresponding values in A1:A5 are greater than 10 and B1:B5 are less than 20, otherwise by 0, then sums the results.

7. **Sum of Products with Text Criteria:**
   ```excel
   =SUMPRODUCT((A1:A5 = "Apple") * B1:B5)
   ```
   **Explanation:** Multiplies the values in B1:B5 by 1 if the corresponding values in A1:A5 are "Apple", otherwise by 0, then sums the results.

8. **Sum of Products Ignoring Errors:**
   ```excel
   =SUMPRODUCT(IF(ISERROR(A1:A5), 0, A1:A5), B1:B5)
   ```
   **Explanation:** Multiplies the values in B1:B5 by the values in A1:A5 if they are not errors, otherwise by 0, then sums the results.

9. **Sum of Products with Two Ranges and Constants:**
   ```excel
   =SUMPRODUCT(A1:A5, B1:B5, 2)
   ```
   **Explanation:** Multiplies each corresponding pair of numbers in the ranges A1:A5 and B1:B5 by 2, then sums the results.

10. **Sum of Inventory Value Based on Quantity:**
    ```excel
    =SUMPRODUCT(F5:F10, G5:G10)
    ```
    **Explanation:** Multiplies the unit price in F5:F10 by the quantity in stock in G5:G10, then sums the results to get the total inventory value.


<!--  -->
### RANDBETWEEN Formula in Excel

**Syntax:**
```excel
=RANDBETWEEN(bottom, top)
```

- `bottom`: The smallest integer that RANDBETWEEN can return.
- `top`: The largest integer that RANDBETWEEN can return.

### 10 Examples of RANDBETWEEN Formula

1. **Random Integer Between 1 and 10:**
   ```excel
   =RANDBETWEEN(1, 10)
   ```
   **Explanation:** Returns a random integer between 1 and 10, inclusive.

2. **Random Integer Between 100 and 200:**
   ```excel
   =RANDBETWEEN(100, 200)
   ```
   **Explanation:** Returns a random integer between 100 and 200, inclusive.

3. **Random Integer Between -50 and 50:**
   ```excel
   =RANDBETWEEN(-50, 50)
   ```
   **Explanation:** Returns a random integer between -50 and 50, inclusive.

4. **Random Integer Between 0 and 1 (Simulating a Coin Toss):**
   ```excel
   =RANDBETWEEN(0, 1)
   ```
   **Explanation:** Returns either 0 or 1, simulating a coin toss where 0 could represent heads and 1 could represent tails.

5. **Random Integer Between 5 and 15:**
   ```excel
   =RANDBETWEEN(5, 15)
   ```
   **Explanation:** Returns a random integer between 5 and 15, inclusive.

6. **Random Integer Between 1000 and 5000:**
   ```excel
   =RANDBETWEEN(1000, 5000)
   ```
   **Explanation:** Returns a random integer between 1000 and 5000, inclusive.

7. **Random Date Between January 1, 2022, and December 31, 2022:**
   ```excel
   =RANDBETWEEN(DATE(2022,1,1), DATE(2022,12,31))
   ```
   **Explanation:** Returns a random serial number representing a date between January 1, 2022, and December 31, 2022. Format the cell as a date to see the result as a date.

8. **Random Time Between 8:00 AM and 5:00 PM:**
   ```excel
   =RANDBETWEEN(TIME(8,0,0)*100000, TIME(17,0,0)*100000)/100000
   ```
   **Explanation:** Returns a random serial number representing a time between 8:00 AM and 5:00 PM. Format the cell as a time to see the result as a time.

9. **Random Integer Between 1 and 1000 in a List:**
   ```excel
   =RANDBETWEEN(1, 1000)
   ```
   **Explanation:** Returns a random integer between 1 and 1000, inclusive. Useful for generating a list of random numbers.

10. **Random Integer Between -100 and 100:**
    ```excel
    =RANDBETWEEN(-100, 100)
    ```
    **Explanation:** Returns a random integer between -100 and 100, inclusive.



<!--  -->
### IF Formula in Excel

**Syntax:**
```excel
=IF(logical_test, [value_if_true], [value_if_false])
```

- `logical_test`: The condition you want to test.
- `[value_if_true]`: The value to return if the condition is true.
- `[value_if_false]`: The value to return if the condition is false.

### 10 Examples of IF Formula

1. **Simple Condition:**
   ```excel
   =IF(A1 > 10, "Greater", "Less or Equal")
   ```
   **Explanation:** Checks if the value in A1 is greater than 10. If true, returns "Greater"; otherwise, returns "Less or Equal".

2. **Checking for Equality:**
   ```excel
   =IF(B1 = "Apple", "Fruit", "Not Fruit")
   ```
   **Explanation:** Checks if the value in B1 is "Apple". If true, returns "Fruit"; otherwise, returns "Not Fruit".

3. **Nested IF Statements:**
   ```excel
   =IF(C1 > 100, "High", IF(C1 > 50, "Medium", "Low"))
   ```
   **Explanation:** Checks if the value in C1 is greater than 100. If true, returns "High"; otherwise, checks if C1 is greater than 50. If true, returns "Medium"; otherwise, returns "Low".

4. **Using AND Function:**
   ```excel
   =IF(AND(D1 > 10, D1 < 20), "Between 10 and 20", "Out of Range")
   ```
   **Explanation:** Checks if the value in D1 is between 10 and 20. If true, returns "Between 10 and 20"; otherwise, returns "Out of Range".

5. **Using OR Function:**
   ```excel
   =IF(OR(E1 < 5, E1 > 15), "Out of Range", "Within Range")
   ```
   **Explanation:** Checks if the value in E1 is less than 5 or greater than 15. If true, returns "Out of Range"; otherwise, returns "Within Range".

6. **Checking for Blank Cells:**
   ```excel
   =IF(F1 = "", "Blank", "Not Blank")
   ```
   **Explanation:** Checks if the cell F1 is blank. If true, returns "Blank"; otherwise, returns "Not Blank".

7. **Returning Numeric Values:**
   ```excel
   =IF(G1 > 0, 100, 0)
   ```
   **Explanation:** Checks if the value in G1 is greater than 0. If true, returns 100; otherwise, returns 0.

8. **Combining Text and Numbers:**
   ```excel
   =IF(H1 = "Pass", "Score: " & I1, "Failed")
   ```
   **Explanation:** Checks if the value in H1 is "Pass". If true, returns "Score: " followed by the value in I1; otherwise, returns "Failed".

9. **Conditional Formatting Helper:**
   ```excel
   =IF(J1 > 50, "Red", "Green")
   ```
   **Explanation:** Checks if the value in J1 is greater than 50. If true, returns "Red"; otherwise, returns "Green". This can be used with conditional formatting to change cell colors based on the result.

10. **Logical Test with Dates:**
    ```excel
    =IF(K1 > TODAY(), "Future Date", "Past or Today")
    ```
    **Explanation:** Checks if the date in K1 is after today's date. If true, returns "Future Date"; otherwise, returns "Past or Today".


<!--  -->
### COUNTIF Formula in Excel

**Syntax:**
```excel
=COUNTIF(range, criteria)
```

- `range`: The range of cells that you want to apply the criteria to.
- `criteria`: The condition that must be met for a cell to be counted.

### 10 Examples of COUNTIF Formula

1. **Count Cells Equal to a Specific Number:**
   ```excel
   =COUNTIF(A1:A10, 5)
   ```
   **Explanation:** Counts the number of cells in the range A1 to A10 that are equal to 5.

2. **Count Cells Greater Than a Specific Number:**
   ```excel
   =COUNTIF(B1:B10, ">10")
   ```
   **Explanation:** Counts the number of cells in the range B1 to B10 that are greater than 10.

3. **Count Cells Less Than a Specific Number:**
   ```excel
   =COUNTIF(C1:C10, "<20")
   ```
   **Explanation:** Counts the number of cells in the range C1 to C10 that are less than 20.

4. **Count Cells Equal to a Specific Text:**
   ```excel
   =COUNTIF(D1:D10, "Apple")
   ```
   **Explanation:** Counts the number of cells in the range D1 to D10 that are equal to "Apple".

5. **Count Cells Not Equal to a Specific Text:**
   ```excel
   =COUNTIF(E1:E10, "<>Banana")
   ```
   **Explanation:** Counts the number of cells in the range E1 to E10 that are not equal to "Banana".

6. **Count Cells Containing Specific Text (Using Wildcards):**
   ```excel
   =COUNTIF(F1:F10, "*berry")
   ```
   **Explanation:** Counts the number of cells in the range F1 to F10 that end with "berry".

7. **Count Cells with Text Starting with a Specific Letter:**
   ```excel
   =COUNTIF(G1:G10, "A*")
   ```
   **Explanation:** Counts the number of cells in the range G1 to G10 that start with the letter "A".

8. **Count Blank Cells:**
   ```excel
   =COUNTIF(H1:H10, "")
   ```
   **Explanation:** Counts the number of blank cells in the range H1 to H10.

9. **Count Non-Blank Cells:**
   ```excel
   =COUNTIF(I1:I10, "<>")
   ```
   **Explanation:** Counts the number of non-blank cells in the range I1 to I10.

10. **Count Cells Based on Date Criteria:**
    ```excel
    =COUNTIF(J1:J10, ">=" & DATE(2023, 1, 1))
    ```
    **Explanation:** Counts the number of cells in the range J1 to J10 that contain dates on or after January 1, 2023.


<!--  -->
### Nested IF Formula in Excel

**Syntax:**
```excel
=IF(logical_test1, value_if_true1, IF(logical_test2, value_if_true2, IF(logical_test3, value_if_true3, value_if_false)))
```

Nested IF formulas are used to test multiple conditions sequentially. The structure involves placing an IF function inside another IF function.

### 10 Examples of Nested IF Formula

1. **Grade Assignment Based on Score:**
   ```excel
   =IF(A1 >= 90, "A", IF(A1 >= 80, "B", IF(A1 >= 70, "C", IF(A1 >= 60, "D", "F"))))
   ```
   **Explanation:** Assigns a grade based on the value in A1. If A1 is 90 or higher, returns "A". If A1 is between 80 and 89, returns "B". If A1 is between 70 and 79, returns "C". If A1 is between 60 and 69, returns "D". Otherwise, returns "F".

2. **Performance Evaluation:**
   ```excel
   =IF(B1 >= 100, "Excellent", IF(B1 >= 80, "Good", IF(B1 >= 50, "Average", "Poor")))
   ```
   **Explanation:** Evaluates performance based on the value in B1. If B1 is 100 or higher, returns "Excellent". If B1 is between 80 and 99, returns "Good". If B1 is between 50 and 79, returns "Average". Otherwise, returns "Poor".

3. **Shipping Cost Calculation:**
   ```excel
   =IF(C1 < 5, 5, IF(C1 < 20, 10, IF(C1 < 50, 20, 50)))
   ```
   **Explanation:** Calculates shipping cost based on the value in C1. If C1 is less than 5, returns 5. If C1 is between 5 and 19, returns 10. If C1 is between 20 and 49, returns 20. Otherwise, returns 50.

4. **Salary Adjustment:**
   ```excel
   =IF(D1 > 100000, D1 * 1.1, IF(D1 > 50000, D1 * 1.05, D1 * 1.02))
   ```
   **Explanation:** Adjusts salary based on the value in D1. If D1 is greater than 100,000, increases by 10%. If D1 is between 50,000 and 100,000, increases by 5%. Otherwise, increases by 2%.

5. **Custom Message Based on Age:**
   ```excel
   =IF(E1 >= 65, "Senior", IF(E1 >= 18, "Adult", IF(E1 >= 13, "Teenager", "Child")))
   ```
   **Explanation:** Returns a custom message based on the age in E1. If E1 is 65 or older, returns "Senior". If E1 is between 18 and 64, returns "Adult". If E1 is between 13 and 17, returns "Teenager". Otherwise, returns "Child".

6. **Discount Calculation:**
   ```excel
   =IF(F1 >= 1000, F1 * 0.2, IF(F1 >= 500, F1 * 0.1, IF(F1 >= 100, F1 * 0.05, 0)))
   ```
   **Explanation:** Calculates discount based on the value in F1. If F1 is 1000 or higher, returns 20% of F1. If F1 is between 500 and 999, returns 10% of F1. If F1 is between 100 and 499, returns 5% of F1. Otherwise, returns 0.

7. **Tax Bracket Determination:**
   ```excel
   =IF(G1 > 100000, "High", IF(G1 > 50000, "Medium", "Low"))
   ```
   **Explanation:** Determines tax bracket based on the value in G1. If G1 is greater than 100,000, returns "High". If G1 is between 50,000 and 100,000, returns "Medium". Otherwise, returns "Low".

8. **Stock Status:**
   ```excel
   =IF(H1 = "Discontinued", "No longer available", IF(H1 = "Limited", "Limited stock", "In stock"))
   ```
   **Explanation:** Checks stock status based on the value in H1. If H1 is "Discontinued", returns "No longer available". If H1 is "Limited", returns "Limited stock". Otherwise, returns "In stock".

9. **Project Phase Identification:**
   ```excel
   =IF(I1 >= 90, "Final Phase", IF(I1 >= 50, "Mid Phase", "Initial Phase"))
   ```
   **Explanation:** Identifies project phase based on the percentage completion in I1. If I1 is 90% or higher, returns "Final Phase". If I1 is between 50% and 89%, returns "Mid Phase". Otherwise, returns "Initial Phase".

10. **Loan Approval:**
    ```excel
    =IF(J1 >= 750, "Approved", IF(J1 >= 600, "Pending Review", "Denied"))
    ```
    **Explanation:** Determines loan approval status based on the credit score in J1. If J1 is 750 or higher, returns "Approved". If J1 is between 600 and 749, returns "Pending Review". Otherwise, returns "Denied".


<!--  -->
### IFERROR Formula in Excel

**Syntax:**
```excel
=IFERROR(value, value_if_error)
```

- `value`: The formula or expression to be evaluated.
- `value_if_error`: The value to return if the formula evaluates to an error.

### 10 Examples of IFERROR Formula

1. **Basic Division Error Handling:**
   ```excel
   =IFERROR(A1/B1, "Error")
   ```
   **Explanation:** Attempts to divide A1 by B1. If an error occurs (e.g., division by zero), returns "Error".

2. **Handling #N/A Errors:**
   ```excel
   =IFERROR(VLOOKUP(C1, D1:E10, 2, FALSE), "Not Found")
   ```
   **Explanation:** Performs a VLOOKUP to find the value in C1 within the range D1:E10. If the value is not found, returns "Not Found".

3. **Replacing Errors with Zero:**
   ```excel
   =IFERROR(SUM(F1:F10), 0)
   ```
   **Explanation:** Attempts to sum the range F1:F10. If an error occurs, returns 0.

4. **Handling Errors in Date Calculations:**
   ```excel
   =IFERROR(DATEDIF(G1, H1, "D"), "Invalid Date")
   ```
   **Explanation:** Calculates the difference in days between G1 and H1 using DATEDIF. If an error occurs (e.g., invalid date), returns "Invalid Date".

5. **Handling Errors in Concatenation:**
   ```excel
   =IFERROR(A1 & B1, "Concatenation Error")
   ```
   **Explanation:** Concatenates the values in A1 and B1. If an error occurs, returns "Concatenation Error".

6. **Handling Errors in Array Formulas:**
   ```excel
   =IFERROR(INDEX(J1:J10, MATCH("Value", K1:K10, 0)), "Not Found")
   ```
   **Explanation:** Uses INDEX and MATCH to find "Value" in the range K1:K10 and return the corresponding value from J1:J10. If an error occurs, returns "Not Found".

7. **Handling Errors in Average Calculation:**
   ```excel
   =IFERROR(AVERAGE(L1:L10), "Calculation Error")
   ```
   **Explanation:** Attempts to calculate the average of the range L1:L10. If an error occurs, returns "Calculation Error".

8. **Handling Errors in Product Calculation:**
   ```excel
   =IFERROR(M1 * N1, "Multiplication Error")
   ```
   **Explanation:** Attempts to multiply M1 by N1. If an error occurs, returns "Multiplication Error".

9. **Handling Errors in Percentage Calculation:**
   ```excel
   =IFERROR(O1/P1, "Percentage Error")
   ```
   **Explanation:** Attempts to calculate the percentage by dividing O1 by P1. If an error occurs, returns "Percentage Error".

10. **Handling Errors in Conditional Formatting Helper:**
    ```excel
    =IFERROR(IF(Q1 > 100, "Above 100", "Below 100"), "Error in Comparison")
    ```
    **Explanation:** Checks if the value in Q1 is greater than 100. If an error occurs, returns "Error in Comparison".


<!--  -->

### EXACT Formula in Excel

**Syntax:**
```excel
=EXACT(text1, text2)
```

- `text1`: The first text string.
- `text2`: The second text string.

The `EXACT` function checks if two text strings are exactly the same, including case sensitivity. It returns `TRUE` if they are identical and `FALSE` otherwise.

### 10 Examples of EXACT Formula

1. **Simple Case-Sensitive Match:**
   ```excel
   =EXACT("Apple", "Apple")
   ```
   **Explanation:** Returns `TRUE` because both text strings are exactly the same, including case.

2. **Case-Sensitive Non-Match:**
   ```excel
   =EXACT("Apple", "apple")
   ```
   **Explanation:** Returns `FALSE` because the case of the letters differs.

3. **Matching Numeric Strings:**
   ```excel
   =EXACT("123", "123")
   ```
   **Explanation:** Returns `TRUE` because both numeric strings are identical.

4. **Non-Matching Numeric Strings:**
   ```excel
   =EXACT("123", "124")
   ```
   **Explanation:** Returns `FALSE` because the numeric strings are not the same.

5. **Exact Match with Spaces:**
   ```excel
   =EXACT("Hello ", "Hello ")
   ```
   **Explanation:** Returns `TRUE` because both strings are identical, including the trailing space.

6. **Non-Match with Different Spaces:**
   ```excel
   =EXACT("Hello", "Hello ")
   ```
   **Explanation:** Returns `FALSE` because one string has a trailing space and the other does not.

7. **Exact Match of Empty Strings:**
   ```excel
   =EXACT("", "")
   ```
   **Explanation:** Returns `TRUE` because both strings are empty and identical.

8. **Non-Match of Different Text Lengths:**
   ```excel
   =EXACT("Hello", "HelloWorld")
   ```
   **Explanation:** Returns `FALSE` because the lengths of the strings differ.

9. **Checking for Identical Cell Values:**
   ```excel
   =EXACT(A1, B1)
   ```
   **Explanation:** Returns `TRUE` if the text in cell A1 is exactly the same as the text in cell B1, including case.

10. **Using EXACT in Conditional Formatting:**
    ```excel
    =EXACT(C1, D1)
    ```
    **Explanation:** Can be used in conditional formatting to highlight cells where the text in C1 matches the text in D1 exactly.

<!--  -->

### TEXT Formula in Excel

**Syntax:**
```excel
=TEXT(value, format_text)
```

- `value`: The number or date you want to format.
- `format_text`: The format code that specifies the number format.

The `TEXT` function allows you to change the way a number or date is displayed by applying a custom format.

### 10 Examples of TEXT Formula

1. **Formatting a Number with Commas:**
   ```excel
   =TEXT(1234567.89, "#,##0.00")
   ```
   **Explanation:** Formats the number 1234567.89 to "1,234,567.89".

2. **Formatting a Date:**
   ```excel
   =TEXT(A1, "dd-mm-yyyy")
   ```
   **Explanation:** Formats the date in cell A1 to display as "dd-mm-yyyy".

3. **Formatting a Time:**
   ```excel
   =TEXT(B1, "hh:mm AM/PM")
   ```
   **Explanation:** Formats the time in cell B1 to display as "hh:mm AM/PM".

4. **Formatting a Number as a Percentage:**
   ```excel
   =TEXT(C1, "0.00%")
   ```
   **Explanation:** Formats the number in cell C1 as a percentage with two decimal places.

5. **Formatting a Number as Currency:**
   ```excel
   =TEXT(1000, "$#,##0.00")
   ```
   **Explanation:** Formats the number 1000 as "$1,000.00".

6. **Adding Text to a Number:**
   ```excel
   =TEXT(D1, "0.00") & " units"
   ```
   **Explanation:** Formats the number in cell D1 to two decimal places and adds the text " units" to the result.

7. **Formatting a Date with Full Month Name:**
   ```excel
   =TEXT(E1, "mmmm dd, yyyy")
   ```
   **Explanation:** Formats the date in cell E1 to display the full month name, day, and year (e.g., "July 25, 2024").

8. **Formatting a Number with Leading Zeros:**
   ```excel
   =TEXT(F1, "00000")
   ```
   **Explanation:** Formats the number in cell F1 with leading zeros to ensure it has at least five digits.

9. **Formatting a Phone Number:**
   ```excel
   =TEXT(1234567890, "(###) ###-####")
   ```
   **Explanation:** Formats the number 1234567890 as a phone number "(123) 456-7890".

10. **Formatting a Date and Time:**
    ```excel
    =TEXT(G1, "dd/mm/yyyy hh:mm:ss")
    ```
    **Explanation:** Formats the date and time in cell G1 to display as "dd/mm/yyyy hh:mm:ss".


### CONCATENATE Formula in Excel

**Syntax:**
```excel
=CONCATENATE(text1, [text2], ...)
```

- `text1`, `text2`, ... : The text strings to be joined together.

The `CONCATENATE` function joins two or more text strings into one string.

### 10 Examples of CONCATENATE Formula

1. **Simple Concatenation of Two Strings:**
   ```excel
   =CONCATENATE("Hello", " ", "World")
   ```
   **Explanation:** Joins the strings "Hello", " ", and "World" to produce "Hello World".

2. **Concatenation of Cell Values:**
   ```excel
   =CONCATENATE(A1, B1)
   ```
   **Explanation:** Joins the values in cells A1 and B1.

3. **Concatenation with Text and Cell Values:**
   ```excel
   =CONCATENATE("Value: ", A1)
   ```
   **Explanation:** Joins the string "Value: " with the value in cell A1.

4. **Concatenation of Multiple Cell Values:**
   ```excel
   =CONCATENATE(A1, B1, C1)
   ```
   **Explanation:** Joins the values in cells A1, B1, and C1.

5. **Concatenation with a Space Separator:**
   ```excel
   =CONCATENATE(A1, " ", B1)
   ```
   **Explanation:** Joins the values in cells A1 and B1 with a space in between.

6. **Concatenation with a Comma Separator:**
   ```excel
   =CONCATENATE(A1, ", ", B1)
   ```
   **Explanation:** Joins the values in cells A1 and B1 with a comma and space in between.

7. **Concatenation of Text and Date:**
   ```excel
   =CONCATENATE("Date: ", TEXT(B1, "mm/dd/yyyy"))
   ```
   **Explanation:** Joins the string "Date: " with the formatted date in cell B1.

8. **Concatenation of Text and Number with Formatting:**
   ```excel
   =CONCATENATE("Total: $", TEXT(C1, "#,##0.00"))
   ```
   **Explanation:** Joins the string "Total: $" with the formatted number in cell C1.

9. **Concatenation of Text with Leading Zeros:**
   ```excel
   =CONCATENATE("Order Number: ", TEXT(D1, "0000"))
   ```
   **Explanation:** Joins the string "Order Number: " with the value in cell D1, formatted with leading zeros.

10. **Concatenation of Different Data Types:**
    ```excel
    =CONCATENATE("Name: ", A1, ", Age: ", B1, ", Score: ", C1)
    ```
    **Explanation:** Joins the strings and cell values to produce a complete sentence such as "Name: John, Age: 30, Score: 85".

Note: In newer versions of Excel, the `CONCAT` function or the `&` operator can be used instead of `CONCATENATE` for similar functionality.


<!--  -->
### SUBSTITUTE Formula in Excel

**Syntax:**
```excel
=SUBSTITUTE(text, old_text, new_text, [instance_num])
```

- `text`: The text or cell reference containing the text you want to change.
- `old_text`: The text you want to replace.
- `new_text`: The text you want to replace the old text with.
- `[instance_num]`: Optional. Specifies which occurrence of old_text you want to replace. If omitted, all occurrences of old_text are replaced.

### 10 Examples of SUBSTITUTE Formula

1. **Replacing a Specific Word:**
   ```excel
   =SUBSTITUTE("Hello World", "World", "Excel")
   ```
   **Explanation:** Replaces "World" with "Excel" to produce "Hello Excel".

2. **Replacing Text in a Cell:**
   ```excel
   =SUBSTITUTE(A1, "apple", "orange")
   ```
   **Explanation:** Replaces "apple" with "orange" in the text contained in cell A1.

3. **Replacing All Occurrences of a Character:**
   ```excel
   =SUBSTITUTE("1,234,567", ",", "")
   ```
   **Explanation:** Removes all commas from the string "1,234,567" to produce "1234567".

4. **Replacing a Specific Occurrence:**
   ```excel
   =SUBSTITUTE("apple, banana, apple", "apple", "orange", 2)
   ```
   **Explanation:** Replaces the second occurrence of "apple" with "orange" to produce "apple, banana, orange".

5. **Replacing a Word in a Sentence:**
   ```excel
   =SUBSTITUTE("The quick brown fox", "quick", "slow")
   ```
   **Explanation:** Replaces "quick" with "slow" to produce "The slow brown fox".

6. **Replacing a Substring:**
   ```excel
   =SUBSTITUTE("abc123", "123", "456")
   ```
   **Explanation:** Replaces "123" with "456" to produce "abc456".

7. **Replacing Multiple Spaces with a Single Space:**
   ```excel
   =SUBSTITUTE("This  is  a  test", "  ", " ")
   ```
   **Explanation:** Replaces double spaces with single spaces to produce "This is a test".

8. **Replacing Text with an Empty String:**
   ```excel
   =SUBSTITUTE("RemoveMe123", "RemoveMe", "")
   ```
   **Explanation:** Removes "RemoveMe" from the text to produce "123".

9. **Replacing a Character in a Number String:**
   ```excel
   =SUBSTITUTE("123-456-7890", "-", "")
   ```
   **Explanation:** Removes all dashes from the phone number to produce "1234567890".

10. **Replacing Part of a File Path:**
    ```excel
    =SUBSTITUTE("C:\Users\John\Documents\file.txt", "John", "Jane")
    ```
    **Explanation:** Replaces "John" with "Jane" in the file path to produce "C:\Users\Jane\Documents\file.txt".


<!--  -->

### LEFT Formula in Excel

**Syntax:**
```excel
=LEFT(text, [num_chars])
```

- `text`: The text string or cell reference from which you want to extract characters.
- `[num_chars]`: Optional. The number of characters you want to extract from the start of the text. If omitted, the default is 1.

### 10 Examples of LEFT Formula

1. **Extract the First Character:**
   ```excel
   =LEFT("Excel", 1)
   ```
   **Explanation:** Extracts the first character from the string "Excel" to produce "E".

2. **Extract the First Three Characters:**
   ```excel
   =LEFT("Hello World", 3)
   ```
   **Explanation:** Extracts the first three characters from the string "Hello World" to produce "Hel".

3. **Extract the First Five Characters:**
   ```excel
   =LEFT("123456789", 5)
   ```
   **Explanation:** Extracts the first five characters from the string "123456789" to produce "12345".

4. **Extract Characters from a Cell:**
   ```excel
   =LEFT(A1, 4)
   ```
   **Explanation:** Extracts the first four characters from the text in cell A1.

5. **Extract Initials from a Full Name:**
   ```excel
   =LEFT("John Doe", 4)
   ```
   **Explanation:** Extracts the first four characters from "John Doe" to produce "John".

6. **Extract a Substring Without Specifying Length:**
   ```excel
   =LEFT("Data Science")
   ```
   **Explanation:** Extracts the first character from "Data Science" to produce "D" because the length is omitted, so it defaults to 1.

7. **Extract Leading Digits from a Mixed String:**
   ```excel
   =LEFT("123ABC", 3)
   ```
   **Explanation:** Extracts the first three characters from "123ABC" to produce "123".

8. **Extract Part of a Date String:**
   ```excel
   =LEFT("2024-07-25", 4)
   ```
   **Explanation:** Extracts the first four characters from "2024-07-25" to produce "2024".

9. **Extract Characters from a File Name:**
   ```excel
   =LEFT("report2024.docx", 6)
   ```
   **Explanation:** Extracts the first six characters from "report2024.docx" to produce "report".

10. **Extract Text with Leading Spaces:**
    ```excel
    =LEFT("   Excel", 4)
    ```
    **Explanation:** Extracts the first four characters from "   Excel" (including leading spaces) to produce "   E".

<!--  -->
### MID Formula in Excel

**Syntax:**
```excel
=MID(text, start_num, num_chars)
```

- `text`: The text string or cell reference from which you want to extract characters.
- `start_num`: The position of the first character you want to extract.
- `num_chars`: The number of characters you want to extract.

### 10 Examples of MID Formula

1. **Extract Characters from the Middle:**
   ```excel
   =MID("Hello World", 7, 5)
   ```
   **Explanation:** Extracts 5 characters starting from the 7th character in "Hello World", producing "World".

2. **Extract a Substring from a Cell:**
   ```excel
   =MID(A1, 2, 3)
   ```
   **Explanation:** Extracts 3 characters starting from the 2nd character in the text in cell A1.

3. **Extract a Word from a Sentence:**
   ```excel
   =MID("The quick brown fox", 5, 5)
   ```
   **Explanation:** Extracts 5 characters starting from the 5th character in "The quick brown fox", producing "quick".

4. **Extract Characters from a Number String:**
   ```excel
   =MID("123456789", 4, 3)
   ```
   **Explanation:** Extracts 3 characters starting from the 4th character in "123456789", producing "456".

5. **Extract Part of a Date String:**
   ```excel
   =MID("2024-07-25", 6, 2)
   ```
   **Explanation:** Extracts 2 characters starting from the 6th character in "2024-07-25", producing "07".

6. **Extract Characters from a File Name:**
   ```excel
   =MID("report2024.docx", 7, 4)
   ```
   **Explanation:** Extracts 4 characters starting from the 7th character in "report2024.docx", producing "2024".

7. **Extract Substring with Leading and Trailing Spaces:**
   ```excel
   =MID("   Excel   ", 4, 5)
   ```
   **Explanation:** Extracts 5 characters starting from the 4th character in "   Excel   ", producing "Excel".

8. **Extract Characters from an Alphanumeric String:**
   ```excel
   =MID("A1B2C3D4", 3, 4)
   ```
   **Explanation:** Extracts 4 characters starting from the 3rd character in "A1B2C3D4", producing "B2C3".

9. **Extract Specific Text from a Sentence:**
   ```excel
   =MID("Data Science is fun", 6, 7)
   ```
   **Explanation:** Extracts 7 characters starting from the 6th character in "Data Science is fun", producing "Science".

10. **Extract Middle Name from Full Name:**
    ```excel
    =MID("John Michael Doe", 6, 7)
    ```
    **Explanation:** Extracts 7 characters starting from the 6th character in "John Michael Doe", producing "Michael".


<!--  -->
### DATE Formula in Excel

**Syntax:**
```excel
=DATE(year, month, day)
```

- `year`: The year component of the date.
- `month`: The month component of the date.
- `day`: The day component of the date.

The `DATE` function returns a date value given the year, month, and day. It can be used to create a date from individual year, month, and day values or to perform date calculations.

### 10 Examples of DATE Formula

1. **Create a Specific Date:**
   ```excel
   =DATE(2024, 7, 25)
   ```
   **Explanation:** Returns the date July 25, 2024.

2. **Create a Date from Cell Values:**
   ```excel
   =DATE(A1, B1, C1)
   ```
   **Explanation:** Returns a date using the values in cells A1 (year), B1 (month), and C1 (day).

3. **Add Months to a Date:**
   ```excel
   =DATE(2024, 7 + 6, 25)
   ```
   **Explanation:** Adds 6 months to July 2024, resulting in the date January 25, 2025.

4. **Subtract Months from a Date:**
   ```excel
   =DATE(2024, 7 - 3, 25)
   ```
   **Explanation:** Subtracts 3 months from July 2024, resulting in the date April 25, 2024.

5. **Create a Date with Negative Day Values:**
   ```excel
   =DATE(2024, 1, -5)
   ```
   **Explanation:** Subtracts 5 days from January 1, 2024, resulting in the date December 27, 2023.

6. **Create a Date with Day Overflow:**
   ```excel
   =DATE(2024, 1, 35)
   ```
   **Explanation:** Adds 35 days to January 1, 2024, resulting in the date February 4, 2024.

7. **Create a Date from Year and Day of Year:**
   ```excel
   =DATE(2024, 1, A1)
   ```
   **Explanation:** Returns the date using the year 2024 and the day of the year from cell A1. If A1 is 100, it returns April 9, 2024.

8. **Create a Date from Text Concatenation:**
   ```excel
   =DATE(LEFT(A1, 4), MID(A1, 5, 2), RIGHT(A1, 2))
   ```
   **Explanation:** Extracts year, month, and day from a text string in A1 (e.g., "20240725") and returns the date July 25, 2024.

9. **Create a Date for the Last Day of a Month:**
   ```excel
   =DATE(2024, 2 + 1, 0)
   ```
   **Explanation:** Returns the last day of February 2024, resulting in the date February 29, 2024 (leap year).

10. **Create a Date with Leap Year Calculation:**
    ```excel
    =DATE(2024, 2, 29)
    ```
    **Explanation:** Returns the date February 29, 2024, which is valid because 2024 is a leap year.

<!--  -->
### DATEVALUE Formula in Excel

**Syntax:**
```excel
=DATEVALUE(date_text)
```

- `date_text`: A text string representing a date.

The `DATEVALUE` function converts a date in text format to an Excel serial number, which represents a date. This is useful for converting dates stored as text into proper date values that Excel can recognize for calculations.

### 10 Examples of DATEVALUE Formula

1. **Convert a Simple Date Text:**
   ```excel
   =DATEVALUE("7/25/2024")
   ```
   **Explanation:** Converts the text "7/25/2024" to the Excel serial number for July 25, 2024.

2. **Convert Date Text in a Cell:**
   ```excel
   =DATEVALUE(A1)
   ```
   **Explanation:** Converts the text date in cell A1 to an Excel serial number. If A1 contains "2024-07-25", it converts it to July 25, 2024.

3. **Convert Date Text with Different Formats:**
   ```excel
   =DATEVALUE("July 25, 2024")
   ```
   **Explanation:** Converts the text "July 25, 2024" to the Excel serial number for July 25, 2024.

4. **Convert Text with Day-Month-Year Format:**
   ```excel
   =DATEVALUE("25-Jul-2024")
   ```
   **Explanation:** Converts the text "25-Jul-2024" to the Excel serial number for July 25, 2024.

5. **Convert Date and Time Text (Date Part Only):**
   ```excel
   =DATEVALUE("7/25/2024 15:30")
   ```
   **Explanation:** Converts the text "7/25/2024 15:30" to the Excel serial number for July 25, 2024, ignoring the time part.

6. **Convert Date Text with Leading Zeros:**
   ```excel
   =DATEVALUE("07/25/2024")
   ```
   **Explanation:** Converts the text "07/25/2024" to the Excel serial number for July 25, 2024.

7. **Using DATEVALUE with CONCATENATE:**
   ```excel
   =DATEVALUE(CONCATENATE("7/", "25/", "2024"))
   ```
   **Explanation:** Joins the text parts to form "7/25/2024" and converts it to the Excel serial number for July 25, 2024.

8. **Convert a Date Text in Year-Month-Day Format:**
   ```excel
   =DATEVALUE("2024-07-25")
   ```
   **Explanation:** Converts the text "2024-07-25" to the Excel serial number for July 25, 2024.

9. **Convert a Text Date in Different Languages (Locale Dependent):**
   ```excel
   =DATEVALUE("25-Jul-2024")
   ```
   **Explanation:** Converts the text "25-Jul-2024" to the Excel serial number for July 25, 2024. The format may need to be adjusted based on your regional settings.

10. **Handling Date Text with Dashes:**
    ```excel
    =DATEVALUE("25-07-2024")
    ```
    **Explanation:** Converts the text "25-07-2024" to the Excel serial number for July 25, 2024.


<!--  -->

### VLOOKUP Formula in Excel

**Syntax:**
```excel
=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])
```

- `lookup_value`: The value you want to search for in the first column of the table_array.
- `table_array`: The range of cells that contains the data. The lookup value should be in the first column of this range.
- `col_index_num`: The column number in the table_array from which to retrieve the value.
- `[range_lookup]`: Optional. A logical value that specifies whether you want an exact match (FALSE) or an approximate match (TRUE). If omitted, the default is TRUE.

### 10 Examples of VLOOKUP Formula

1. **Basic VLOOKUP for an Exact Match:**
   ```excel
   =VLOOKUP("Apple", A1:C10, 2, FALSE)
   ```
   **Explanation:** Searches for "Apple" in the first column of the range A1:C10 and returns the value from the second column of the row where the match is found. The `FALSE` argument specifies an exact match.

2. **VLOOKUP with an Approximate Match:**
   ```excel
   =VLOOKUP(85, A1:B10, 2, TRUE)
   ```
   **Explanation:** Searches for the value 85 in the first column of the range A1:B10. If an exact match is not found, it returns the closest smaller value from the second column. The `TRUE` argument specifies an approximate match.

3. **VLOOKUP with a Cell Reference:**
   ```excel
   =VLOOKUP(E1, A1:D20, 3, FALSE)
   ```
   **Explanation:** Searches for the value in cell E1 within the first column of the range A1:D20 and returns the value from the third column of the row where the match is found. The `FALSE` argument specifies an exact match.

4. **VLOOKUP for Text and Numbers:**
   ```excel
   =VLOOKUP("12345", A1:C100, 2, FALSE)
   ```
   **Explanation:** Searches for the text "12345" in the first column of the range A1:C100 and returns the value from the second column of the row where the match is found. The `FALSE` argument specifies an exact match.

5. **VLOOKUP to Find a Price:**
   ```excel
   =VLOOKUP("Banana", A1:B10, 2, FALSE)
   ```
   **Explanation:** Searches for "Banana" in the first column of the range A1:B10 and returns the price from the second column of the row where the match is found. The `FALSE` argument specifies an exact match.

6. **VLOOKUP with Wildcards for Partial Match:**
   ```excel
   =VLOOKUP("A*", A1:B10, 2, FALSE)
   ```
   **Explanation:** Searches for any value that starts with "A" in the first column of the range A1:B10 and returns the value from the second column of the row where the match is found. The `FALSE` argument specifies an exact match, and the wildcard character `*` is used for partial matches.

7. **VLOOKUP for Employee Information:**
   ```excel
   =VLOOKUP("John Doe", A1:E100, 4, FALSE)
   ```
   **Explanation:** Searches for "John Doe" in the first column of the range A1:E100 and returns the value from the fourth column of the row where the match is found. The `FALSE` argument specifies an exact match.

8. **VLOOKUP with Named Range:**
   ```excel
   =VLOOKUP("Product1", Products, 3, FALSE)
   ```
   **Explanation:** Searches for "Product1" in the first column of the named range "Products" and returns the value from the third column of the row where the match is found. The `FALSE` argument specifies an exact match.

9. **VLOOKUP to Find a Date:**
   ```excel
   =VLOOKUP(DATE(2024,7,25), A1:B365, 2, FALSE)
   ```
   **Explanation:** Searches for the date July 25, 2024, in the first column of the range A1:B365 and returns the value from the second column of the row where the match is found. The `FALSE` argument specifies an exact match.

10. **VLOOKUP with Error Handling:**
    ```excel
    =IFERROR(VLOOKUP("Orange", A1:B10, 2, FALSE), "Not Found")
    ```
    **Explanation:** Searches for "Orange" in the first column of the range A1:B10 and returns the value from the second column of the row where the match is found. If an exact match is not found, the formula returns "Not Found" instead of an error.
<!--  -->

### HLOOKUP Formula in Excel

**Syntax:**
```excel
=HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])
```

- `lookup_value`: The value you want to search for in the first row of the table_array.
- `table_array`: The range of cells that contains the data. The lookup value should be in the first row of this range.
- `row_index_num`: The row number in the table_array from which to retrieve the value.
- `[range_lookup]`: Optional. A logical value that specifies whether you want an exact match (FALSE) or an approximate match (TRUE). If omitted, the default is TRUE.

### 10 Examples of HLOOKUP Formula

1. **Basic HLOOKUP for an Exact Match:**
   ```excel
   =HLOOKUP("Product", A1:D10, 2, FALSE)
   ```
   **Explanation:** Searches for "Product" in the first row of the range A1:D10 and returns the value from the second row of the column where the match is found. The `FALSE` argument specifies an exact match.

2. **HLOOKUP with an Approximate Match:**
   ```excel
   =HLOOKUP(85, A1:D10, 3, TRUE)
   ```
   **Explanation:** Searches for the value 85 in the first row of the range A1:D10. If an exact match is not found, it returns the closest smaller value from the third row. The `TRUE` argument specifies an approximate match.

3. **HLOOKUP with a Cell Reference:**
   ```excel
   =HLOOKUP(E1, A1:D20, 4, FALSE)
   ```
   **Explanation:** Searches for the value in cell E1 within the first row of the range A1:D20 and returns the value from the fourth row of the column where the match is found. The `FALSE` argument specifies an exact match.

4. **HLOOKUP for Text and Numbers:**
   ```excel
   =HLOOKUP("12345", A1:D10, 2, FALSE)
   ```
   **Explanation:** Searches for the text "12345" in the first row of the range A1:D10 and returns the value from the second row of the column where the match is found. The `FALSE` argument specifies an exact match.

5. **HLOOKUP to Find a Price:**
   ```excel
   =HLOOKUP("Banana", A1:D5, 3, FALSE)
   ```
   **Explanation:** Searches for "Banana" in the first row of the range A1:D5 and returns the price from the third row of the column where the match is found. The `FALSE` argument specifies an exact match.

6. **HLOOKUP with Wildcards for Partial Match:**
   ```excel
   =HLOOKUP("A*", A1:D5, 2, FALSE)
   ```
   **Explanation:** Searches for any value that starts with "A" in the first row of the range A1:D5 and returns the value from the second row of the column where the match is found. The `FALSE` argument specifies an exact match, and the wildcard character `*` is used for partial matches.

7. **HLOOKUP for Employee Information:**
   ```excel
   =HLOOKUP("John Doe", A1:E10, 5, FALSE)
   ```
   **Explanation:** Searches for "John Doe" in the first row of the range A1:E10 and returns the value from the fifth row of the column where the match is found. The `FALSE` argument specifies an exact match.

8. **HLOOKUP with Named Range:**
   ```excel
   =HLOOKUP("Product1", Products, 3, FALSE)
   ```
   **Explanation:** Searches for "Product1" in the first row of the named range "Products" and returns the value from the third row of the column where the match is found. The `FALSE` argument specifies an exact match.

9. **HLOOKUP to Find a Date:**
   ```excel
   =HLOOKUP(DATE(2024,7,25), A1:D5, 4, FALSE)
   ```
   **Explanation:** Searches for the date July 25, 2024, in the first row of the range A1:D5 and returns the value from the fourth row of the column where the match is found. The `FALSE` argument specifies an exact match.

10. **HLOOKUP with Error Handling:**
    ```excel
    =IFERROR(HLOOKUP("Orange", A1:D5, 2, FALSE), "Not Found")
    ```
    **Explanation:** Searches for "Orange" in the first row of the range A1:D5 and returns the value from the second row of the column where the match is found. If an exact match is not found, the formula returns "Not Found" instead of an error.
