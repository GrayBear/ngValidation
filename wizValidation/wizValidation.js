﻿angular.module('wiz.validation', [
	'wiz.validation.integer',
	'wiz.validation.decimal',
	'wiz.validation.postcode'
]);
angular.module('wiz.validation.integer', []);
angular.module('wiz.validation.integer')

.directive('wizValidInteger', function () {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function (scope, elem, attr, ngModel) {

			//For DOM -> model validation
			ngModel.$parsers.unshift(function (value) {
				return validate(value);
			});

			//For model -> DOM validation
			ngModel.$formatters.unshift(function (value) {
				return validate(value);
			});

			function validate(value) {
				// Don't test for required
				var valid = /^-?[0-9]+$/.test(value);
				ngModel.$setValidity('wizInteger', valid);
				return value;
			}
		}
	};
});
angular.module('wiz.validation.decimal', []);
angular.module('wiz.validation.decimal')

.directive('wizValidDecimal', function () {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function (scope, elem, attr, ngModel) {

			//For DOM -> model validation
			ngModel.$parsers.unshift(function (value) {
				return validate(value);
			});

			//For model -> DOM validation
			ngModel.$formatters.unshift(function (value) {
				return validate(value);
			});

			function validate(value) {
				var valid = /^-?([0-9]+(\.[0-9]+))$/.test(value);
				ngModel.$setValidity('wizDecimal', valid);
				return value;
			}
		}
	};
});
angular.module('wiz.validation.postcode', []);
angular.module('wiz.validation.postcode')

.directive('wizValidPostcode', function () {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function (scope, elem, attr, ngModel) {

			//For DOM -> model validation
			ngModel.$parsers.unshift(function (value) {
				return validate(value);
			});

			//For model -> DOM validation
			ngModel.$formatters.unshift(function (value) {
				return validate(value);
			});

			function validate(value) {
				var valid = /^\b(GIR ?0AA|SAN ?TA1|(?:[A-PR-UWYZ](?:\d{0,2}|[A-HK-Y]\d|[A-HK-Y]\d\d|\d[A-HJKSTUW]|[A-HK-Y]\d[ABEHMNPRV-Y])) ?\d[ABD-HJLNP-UW-Z]{2})\b$/i.test(value);
				ngModel.$setValidity('wizPostcode', valid);
				return value;
			}
		}
	};
});
