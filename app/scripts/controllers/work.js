'use strict';
// WORK CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Work" section to display items and filter them
//var app = angular.module("myApp",[]);  
    app.controller('work', function($scope,$http, $filter) {
        
 
        
        $http({
            
            method:"GET",
            url:"/api/work"
        
            }).then(function mySuccess(response){
            
            
             $scope.works=response.data.works;
             console.log(response);
             
            
            
        }, function myError(response){
        
        console.log("error");
    });
    

        
        $scope.deleteItem = function(item) {
        
          
            $scope.removeIndex = -1;
            $scope.removeIndex=$scope.works.indexOf(item);
        
        
        };
        
        $scope.deleteConfirm = function() {
  
            $scope.works.splice($scope.removeIndex, 1);
         
        };
        
        
        $scope.addItems=function(){
     
            var newItem={
                
                firstname: $scope.addfirstname,
                lastname:$scope.addlastname,
                email:$scope.addemail,
                phonenumber:$scope.addphonenumber,
                address:$scope.addaddress
                  
            }
           // alert($scope.addTitle);
            $scope.works.push(newItem);
            $scope.addfirstname="";
            $scope.addlastname="";
            $scope.addemail="";
            $scope.addphonenumber="";
            $scope.addaddress="";  
        };
        $scope.clearItems=function(){
            $scope.addfirstname="";
            $scope.addlastname="";
            $scope.addemail="";
            $scope.addphonenumber="";
            $scope.addaddress="";
        };
        
         $scope.editItems=function(item){
             $scope.editIndex = -1;
            $scope.editIndex=$scope.works.indexOf(item);
             $scope.editfirstname=item.firstname;
            $scope.editlastname=item.lastname;
            $scope.editemail=item.email;
            $scope.editphonenumber=item.phonenumber;
            $scope.editaddress=item.address;   
         }
         
         $scope.editConfirm = function() {
             var i=$scope.editIndex;
            $scope.works[i].firstname=$scope.editfirstname;
            $scope.works[i].lastname=$scope.editlastname;
             $scope.works[i].email=$scope.editemail;
             $scope.works[i].phonenumber=$scope.editphonenumber;
             $scope.works[i].address=$scope.editaddress;
            
        };
    
        
        

         
        
    });

