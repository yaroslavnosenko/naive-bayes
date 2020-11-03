# Naive Bayes

This solution can find the class of the test element based on train set.

## Structure

The solution requires 4 files to work:
1. `index.js` - entire point
2. `src/bayes.js` - bayes library
3. `data/test.data` - file with the test data
4. `data/train.data` - file with the train data

## Train set

Train set can be defined as text file with attributes devided by ' ' (space). The last attribute in the line will be definde as class.

## Test set

Test set can be defined as text file with attributes devided by ' ' (space). The size of the line must match the size of the test line except for the last attribute (class).

## Reqiurements

* node.js

## Usage

Run the program from the terminal by executing command `node index`.

## Result

Result of the program will be printed to the console. The last line will contain the array with classes mathced with each line from `test set`.


## Example

```
---
Naive Bayes
---

Read train data from data/train.data
---

Read test data from data/test.data
---

Result:

[ 'no', 'yes' ]
```