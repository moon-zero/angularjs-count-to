/**
 * @see http://docs.angularjs.org/guide/concepts
 * @see http://docs.angularjs.org/api/ng.directive:ngModel.NgModelController
 * @see https://github.com/angular/angular.js/issues/528#issuecomment-7573166
 */
(function(window, angular, undefined) {
    'use strict';

    angular.module('countTo', [])
        .directive('countTo', ['$filter', '$timeout', function ($filter, $timeout) {
            return {
                replace: false,
                scope: true,
                link: function (scope, element, attrs) {

                    var e = element[0],
                        num,
                        refreshInterval,
                        duration,
                        steps,
                        step,
                        countTo,
                        increment;

                    var calculate = function () {
                        refreshInterval = 30;
                        step = 0;
                        scope.timoutId = null;
                        scope.filter = attrs.filter;
                        scope.fractionSize = attrs.fractionSize ? attrs.fractionSize : 0;
                        scope.params = attrs.params ? attrs.params : scope.fractionSize;
                        countTo = parseFloat(attrs.countTo) || 0;
                        scope.value = parseFloat(attrs.value) || 0;
                        duration = (parseFloat(attrs.duration) * 1000) || 0;

                        steps = Math.ceil(duration / refreshInterval);
                        increment = ((countTo - scope.value) / steps);
                        num = scope.value;
                    };

                    var tick = function () {
                        scope.timoutId = $timeout(function () {
                            num += increment;
                            step++;
                            if (step >= steps) {
                                $timeout.cancel(scope.timoutId);
                                num = countTo;
                                e.textContent = scope.filter ? $filter(scope.filter)(countTo, scope.params, scope.fractionSize) : Math.round(countTo);
                            } else {
                                e.textContent = scope.filter ?  $filter(scope.filter)(num, scope.params, scope.fractionSize) : Math.round(num);
                                tick();
                            }
                        }, refreshInterval);
                    };

                    var start = function () {
                        if (scope.timoutId) {
                            $timeout.cancel(scope.timoutId);
                        }
                        calculate();
                        tick();
                    };

                    attrs.$observe('countTo', function (val) {
                        if (val) {
                            start();
                        }
                    });

                    attrs.$observe('value', function () {
                        start();
                    });

                    return true;
                }
            }
        }]);

}(window, window.angular));
