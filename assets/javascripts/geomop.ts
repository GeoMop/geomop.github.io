interface ReleaseItem {
  version: string;
  display: string;
  links?:  string[];
  visible: any;
}


interface Window {
    geomop: Geomop;
}


interface Geomop {
    packageRoot: string;
    defaultVersion: string;
    version: string;

    subpage: string;

    releaseList: ReleaseItem[];
    current: ReleaseItem;
}


for (let item of window.geomop.releaseList) {
    item.visible = {};
    for (let link of item.links) {
        item.visible[link] = true;
    }
}


const version_regex = /\/releases\/(.+)\/(.+)\//gm;
const matches = version_regex.exec(document.location.pathname);
if (matches) {
  window.geomop.version = matches[1];
  window.geomop.subpage = matches[2];
} else {
  window.geomop.version = window.geomop.defaultVersion;
  window.geomop.subpage = null;
}


var app = angular.module('geomop', []);
app.config(function($locationProvider,$interpolateProvider){
    $locationProvider.html5Mode({
        enabled:true
    });
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
 });


app.controller('geomopCtrl', function($scope) {
  $scope.geomop = window.geomop;
  $scope.version = window.geomop.version;
  $scope.versionRoot = window.geomop.packageRoot + '/' + $scope.version;
  $scope.options = window.geomop.releaseList;
  $scope.item = window.geomop.releaseList.filter(o => {return o.version == $scope.version})[0];
  $scope.edited = false;

  $scope.versionChanged = function(e) {
    if (window.geomop.subpage) {
        window.location.pathname = '/releases/' + $scope.version + '/' + window.geomop.subpage;
    } else {
      $scope.versionRoot = window.geomop.packageRoot + '/' + $scope.version;
      $scope.item =  window.geomop.releaseList.filter(o => {return o.version == $scope.version})[0];
      $('.downloads .button').finish().hide().fadeIn('slow');
    }
  };
});


$(document).ready(function(){
  var geomop = window.geomop;
  $('.gravatar').each(function(index, item) {
    var $this = $(this);
    if ($this.data('gravatar')) {
      $this.prepend((<any> $).gravatar($this.data('gravatar') + '@tul.cz'));
    }else{
      $this.prepend('<i class="fa fa-user-o img" aria-hidden="true"></i>');
    }
    $this.attr('data-gravatar', null);
  });
});
