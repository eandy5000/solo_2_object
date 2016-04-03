$(document).ready(function(){

var array = [];
//constructor
function Employee (eName, eNumber, eBase, eReview) {
    this.eName = eName;
    this.eNumber = eNumber;
    this.eBase = eBase;
    this.eReview = eReview;
    
    
    
   //functions
   
   this.getIncomeAdjustment = function (eBase) {
    var incomeAdjustment = 0;
        salary = parseInt(this.eBase);
        if(salary > 65000){
            incomeAdjustment = 0.01;
         }
            return incomeAdjustment;
    } 
    
   this.getYearAdjustment = function (eNumber){
    var yearAdjustment = 0;
        if(this.eNumber.length == 4){
            yearAdjustment = 0.05;
        }
        return yearAdjustment;
    }
    
    this.getBaseSTI = function (eReview){
        var basePercent;
            switch(this.eReview){
                case 1:
                basePercent = 0;
                break;
                case 2:
                basePercent = 0;
                break;
                case 3:
                basePercent = 0.04;
                break;
                case 4:
                basePercent = 0.06;
                break;
                case 5:
                basePercent = 0.10;
                break;
            }
            return basePercent;
  
        }
        
    
}

   var calcBonus = function(baseSTI, yearAdjustment, incomeAdjustment) {
            var bonus = baseSTI + yearAdjustment - incomeAdjustment;
            if (bonus > 0.13){
                bonus = 0.13;
            }
            return  bonus;
        }

var atticus = new Employee("Atticus", "2405", "47000", 3);
array.push(atticus);

var jem = new Employee("Jem", "62347", "63500", 4);
array.push(jem);

var scout = new Employee("Scout", "6234", "74750", 5);
array.push(scout);

var boo = new Employee("Boo", "11435", "54000", 3);
array.push(boo);

for (var i = 0; i < array.length; i++) {
    array[i].bonus = calcBonus(array[i].getBaseSTI(), array[i].getYearAdjustment(), array[i].getIncomeAdjustment());
    array[i].newSalary = Math.floor((array[i].bonus * parseInt(array[i].eBase)) + parseInt(array[i].eBase));
}


// dom 
for (var i = 0; i < array.length; i++) {

$("#table-heading").append('<tr>' +
'<td>'+array[i].eName+'</td>' + 
'<td>$'+array[i].eBase+'</td>' + 
'<td>'+array[i].bonus+'%</td>' +
'<td>$'+array[i].newSalary+'</td>' +  
'</tr>');
}


});

