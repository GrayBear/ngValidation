#ngValidation
An AngularJS library for easier form validation.

[![Build Status](https://travis-ci.org/GrumpyWizards/ngValidation.svg?branch=master)](https://travis-ci.org/GrumpyWizards/ngValidation)

##Install it
1. Grab the `wizValidation.min.js` file and drop it into your application
2. Add `'wiz.validation'` as a required module

Example:

    angular.module('myApp', [
      'wiz.validation'
    ]);


##Validators
There are currently 14 validators available:

- integer
- decimal
- starts with
- ends with
- postcode
- zip code
- at least one
- equal to
- not equal to
- unique
- date of birth
- blacklist
- whitelist
- file

All the validators follow the same pattern of prefixing, as an example for **Zipcode**:

- the directive is **wiz-val-zipcode**
- the ngClass is **ng-valid-wiz-val-zipcode** and **ng-invalid-wiz-val-zipcode**
- and the form `$error` property is **formName.inputName.$error.wizValZipcode**

##Use
To use the validators simply add `wiz-val-[validator-name]` as an attribute to HTML inputs:

    <input type="number"
           step=".5"
           name="decimal"
           ng-model="demo.decimal"
           wiz-val-decimal
           ng-class="{invalid: demoForm.decimal.$error.wizValDecimal}" />

The validators don't check required logic, that is done by standard HTML validation.

###At least one and Equal to
Both of these validators have an extra option. Add the directive `wiz-val-at-least-one` or `wiz-val-equal-to` to each input you want to validate as a group. E.g.

    <input type="text" ng-model="user.email" wiz-val-equal-to />
    <input type="text" ng-model="user.confirmEmail" wiz-val-equal-to />
    
However if you want more than one grouping specify the group name like this: `wiz-val-at-least-one="myGroup"` e.g.

    <input type="text" ng-model="user.email" wiz-val-equal-to="firstSet" />
    <input type="text" ng-model="user.confirmEmail" wiz-val-equal-to="firstSet" />

    <input type="text" ng-model="user.email" wiz-val-equal-to="secondSet" />
    <input type="text" ng-model="user.confirmEmail" wiz-val-equal-to="secondSet" />

###Equal to, Not equal to and Unique
These three validators are rather similar in nature however they behave differently, please choose wisely:

####Equal to
All the fields within the group must be the same.

####Not equal to
At least one field within the group must be different.

####Unique
*Every* field within the group must be different from the rest.

###Date of birth
The date of birth validator works by calculating the latest date you can enter given the minimum age supplied to the directive:

    <input type="date" name"dateOfBirth" wiz-val-date-of-birth="18" />

In the above example your date of birth must be 18 or more years ago.

###Blacklist and Whitelist
The values in a blacklist validated field must not equal any of the values provided to the validator. e.g.

    <input type="text" name="blacklist" wiz-val-blacklist="['red', 'orange', 'yellow']" />

If you enter "red", "orange" or "yellow" into this input the field will be invalid.

Conversely if you are using the whitelist validator you must use one of the values in the array, anything else would be invalid.

###File upload validation
The file validation field has a number of properties to turn on various features. 

To validate the file upload HTML element add the tag

          <input type="file" name="fileUpload" wiz-val-file/>

Each subsequent validation option is added individually by individual attributes. 

if the attributes are not added they are not checked. 

####File type
File types are specified by adding the wiz-val-file-type of the file being added. 

The file type is the MIME type of the file e.g. "image/jpeg". This is not the file extension. 

Multiple file types can be checked by chaining extra mime types in an array e.g ['image/jpeg','image/gif'].

This example checks for jpeg and gif files. 

      <input type="file" name="file" wiz-val-file wiz-val-file-types="['image/jpeg','image/gif']"/>

####File size
To specify the maximum file size in bytes add the file size attribute e.g. 

      <input type="file" name="file" wiz-val-file  wiz-val-file-size="1000000"/>

####File number
When a file input field is set to "multiple" it is possible to upload multiple files. 

To specify the number of files required add the file number attribute e.g. 

      <input type="file" name="file" multiple wiz-val-file  wiz-val-file-number="2">

##Contributing
Feel free to contribute. That's it.

##Licence

ngValidation is covered by the MIT Licence

Copyright (c) 2014 Grumpy Wizards

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
