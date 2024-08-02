// // ### Scenario:

// // Alex and Brian are curious about comparing their Body Mass Index (BMI) to see who is healthier. The BMI is calculated using the formula:

// // \[ \text{BMI} = \frac{\text{weight}}{\text{height}^2} = \frac{\text{weight}}{(\text{height} \times \text{height})} \]

// // where weight is in kilograms and height is in meters.

// // ### Task:

// // 1. **Variable Assignment:** Store Alex's and Brian's weights and heights in separate variables.
// // 2. **BMI Calculation:** Calculate both their BMIs using the formula provided (implement both versions of the formula for practice).
// // 3. **Comparison:** Create a boolean variable `alexHigherBMI` to store whether Alex's BMI is higher than Brian's.

// // ### Example Data:

// // **Test Case 1:**
// // - Alex weighs 78 kg and his height is 1.69 meters.
// // - Brian weighs 92 kg and his height is 1.95 meters.

// // **Test Case 2:**
// // - Alex weighs 95 kg and his height is 1.88 meters.
// // - Brian weighs 85 kg and his height is 1.76 meters.

// // ### Instructions:

// // 1. Assign the given weights and heights to variables named `alexWeight`, `alexHeight`, `brianWeight`, and `brianHeight`.
// // 2. Use the formula to calculate Alex's and Brian's BMI and store them in variables `alexBMI` and `brianBMI`.
// // 3. Determine if Alex's BMI is higher than Brian's and store the result in a variable `alexHigherBMI`.

// // ### Example Code Structure:

// // ```python
// // # Test Case 1
// // alexWeight1 = 78
// // alexHeight1 = 1.69
// // brianWeight1 = 92
// // brianHeight1 = 1.95

// // # Calculate BMI for Alex and Brian
// // alexBMI1 = alexWeight1 / (alexHeight1 ** 2)
// // brianBMI1 = brianWeight1 / (brianHeight1 ** 2)

// // # Check if Alex's BMI is higher
// // alexHigherBMI1 = alexBMI1 > brianBMI1

// // # Output the results
// // print("Test Case 1:")
// // print("Alex's BMI:", alexBMI1)
// // print("Brian's BMI:", brianBMI1)
// // print("Is Alex's BMI higher than Brian's?", alexHigherBMI1)

// // # Test Case 2
// // alexWeight2 = 95
// // alexHeight2 = 1.88
// // brianWeight2 = 85
// // brianHeight2 = 1.76

// // # Calculate BMI for Alex and Brian
// // alexBMI2 = alexWeight2 / (alexHeight2 ** 2)
// // brianBMI2 = brianWeight2 / (brianHeight2 ** 2)

// // # Check if Alex's BMI is higher
// // alexHigherBMI2 = alexBMI2 > brianBMI2

// // # Output the results
// // print("\nTest Case 2:")
// // print("Alex's BMI:", alexBMI2)
// // print("Brian's BMI:", brianBMI2)
// // print("Is Alex's BMI higher than Brian's?", alexHigherBMI2)
// // ```

// // Good luck with your calculations and comparison! 😊

// // ### Advanced Challenge:
// // alexWeight1 = 78
// // alexHeight1 = 1.69
// // brianWeight1 = 92
// // brianHeight1 = 1.95

// // let alexWeight1 = 78
// // let alexHeight1 = 1.69
// // let brianWeight1 = 92
// // let brianHeight1 = 1.95

// // let alexBMI1 = alexWeight1 / (alexHeight1 ** 2)
// // let brianBMI1 = brianWeight1 / (brianHeight1 ** 2)
// // console.log("Test Case 1:");
// // console.log("Alex's BMI:", alexBMI1);
// // console.log("Brian's BMI:", brianBMI1);
// // let alexHigherBMI1 = alexBMI1 < brianBMI1;
// // console.log("Is Alex's BMI higher than Brian's?", alexHigherBMI1);

// // # Output the results
// // print("\nTest Case 2:")
// // print("Alex's BMI:", alexBMI2)
// // print("Brian's BMI:", brianBMI2)
// // print("Is Alex's BMI higher than Brian's?", alexHigherBMI2)

// // Type Conversion and Coercion

// // // type conversion
// // const input = '1991';
// // console.log(input);
// // console.log('azad');

// // console.log(Number(input))

// // console.log(Number(input) + 18)
// // console.log(typeof( input + 18))
// // console.log(typeof Number('azad'))

// // console.log(typeof String(29), typeof 29)

// // console.log(typeof String(987), typeof 987)
// // console.log( typeof 987)

// // // type coercion
// // console.log(typeof ('I am ' + 29 + ' years old'))

// // console.log('29' - '10' - 5)

// // console.log(30/2);
// // console.log(typeof ('30' / '2'))
// //  truthy and falsy values

// //  falsy values: 0, '', undefined, null, NaN
// // console.log(Boolean('-1'))

// // const money = -0
// // if (money) {
// //     console.log("Don't spend it all on playing ps5")
// // }else {
// //     console.log('mom i dont have money to play ps5');

// // }

// // == vs === operators
// // console.log(NaN === NaN);
// // let a = 4
// // let b = '4'
// // console.log(a == b)
// // let age = 29
// // if (age === 28) {
// //   console.log('You are 29 years old')
// // } else {
// //   console.log('You are not 29 years old')
// // }

// // even or odd number
// // let number = 11
// // if (number % 2 === 0) {
// //   console.log('This is an odd number')
// // } else {
// //   console.log('This is an even number')
// // }

// // if (number % 2 === 0) {
// //   console.log('This is an even number')
// // }
// // if (number % 2 !== 0) {
// //   console.log('This is an odd number')
// // }
// let number = '11'
// if (number % 2 == 0) {
//   console.log('This is an even number')
// } else {
//   console.log('This is an odd number')
// }