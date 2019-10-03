# Angular Count-To

This project is an animated counter for AngularJS. 
The directive counts from one number to another over a configured duration.
This forked version updates the original repository by including
[AngularJS filter](https://docs.angularjs.org/api/ng/filter)
options as well as the ability to display floating values.
[Demo](http://slackero.github.io/angularjs-count-to/)

## Install via npm

```
$ npm install angularjs-count-to
```

## How to use angular count-to


Include the javascript file.

```
<script src="dist/angularjs.count-to.min.js"></script>
```

Inject the `count-to` directive in your app.

```
var myApp = angular.module('myApp', ['countTo']);
```

Apply the directive to a dom element.
```
 <!-- Number filter -->
 <span ng-count-to="{{countTo}}" value="{{countFrom}}" duration="4" filter="number"></span>
```

```
 <!-- Currency filter -->
 <span ng-count-to="{{countTo}}" value="{{countFrom}}" duration="4" filter="currency" params="$"></span>
```

### Attributes

The following attributes can be set as numbers on the directive element.

- ```count-to```  the number to count to.
- ```value```  the number to start counting from.
- ```duration```  how long the count should take in seconds.
- ```filter```  the [AngularJS filter](https://docs.angularjs.org/api/ng/filter).
- ```params```  the string of filter options.
- ```fraction-size```  the decimal formatting.
