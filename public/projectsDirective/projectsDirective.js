/**
 * Created by beebe on 4/19/2017.
 */
angular.module(`app`).directive(`projects`, ()=>{
   return {
       restrict: `E`,
       templateUrl:`projectsDirective/projects.html`,
       link: (scope,ele,attr)=>{
           scope.slides = [{
               name:`Board Game Shelf`,
               img:`projectsDirective/img/Capture.PNG`,
               link:`http://www.boardgameshelf.net/`,
               id:0
           },{
               name:`W3schools Clone`,
               img:`projectsDirective/img/Capture5.PNG`,
               link:`https://codepen.io/bolty/full/WjrEVy`,
               id:1
           },{
               name:`Weather App`,
               img:`projectsDirective/img/Capture2.PNG`,
               link:`https://codepen.io/bolty/full/WRKRbO/`,
               id:2
           },{
               name:`Tribute Page`,
               img:`projectsDirective/img/Capture3.PNG`,
               link:`http://codepen.io/bolty/full/VmxRQo`,
               id:3
           },{
               name:`Wiki Search Engine`,
               img:`projectsDirective/img/Capture4.PNG`,
               link:`http://codepen.io/bolty/full/MJqaGq/`,
               id:4
           }]
       }
   }
});