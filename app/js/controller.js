let controllers = {};

controllers.instrController = function($scope, instructeurFactory) {
    $scope.instructeurs = instructeurFactory.getInstructeurs();
    $scope.addInstructeur = function() {
        instructeurFactory.postInstructeurs({naam: $scope.nieuw.naam, stad: $scope.nieuw.stad})
    }
};

controllers.oplController = function ($scope) {
    $scope.opleidingen = [
        {naam:'PHP',code:'750414',categorie:'ontwikkeling'},
        {naam:'Front End',code:'75415',categorie:'ontwikkeling'},
        {naam:'C#',code:'750412',categorie:'ontwikkeling'},
        {naam:'Java',code:'750413',categorie:'ontwikkeling'},
        {naam:'Systeembeheerder',code:'750422',categorie:'infrastructuur'},
        {naam:'IT medewerker',code:'750601',categorie:'infrastructuur'},
    ]
};


oplApp.controller(controllers);
