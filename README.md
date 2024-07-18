<a name="readme-top"></a>
# PERFORMANCE TEST LOCAL 18.21 ADAMLABS

## Table Of Contents

- [PERFORMANCE TEST DEMO ADAMLABS](#performance-test-demo-adamlabs)
    - [Table Of Contents](#table-of-contents)
    - [Author](#author)
- [Documentation](#documentation)
    - [How To Run?](#how-to-run)
    - [Notes](#notes)
- [Tester](#tester)

## Author

- [@nadiaalnd](https://github.com/nadiaalnd)

# Documentation

## How To Run?

- Open Terminal or Command Prompt
- Change to the Performance-Test-Adamlabs-Test Directory
  > ```
  > cd Performance-Test-Adamlabs-Test
  > ```
- Install K6
  > ```
  > winget install k6 --source winget
  > ```
- Install Dependencies
  > ```
  > npm install k6
  > ```
- Run the Tests 
  For example, to run the `auth` module:
    > ```
    > k6 run scripts/auth/Test.js
    > ```

## Notes

- Ensure you have Node.js installed on your system to manage K6 dependencies.
- Make sure you have K6 installed to run the performance tests.

---

## Tester

- Nadila Aulya S.M

<p align="right">(<a href="#readme-top">back to top</a>)</p>
