/*
VALUES, SERVICES, FACTORIES voor NGOpleidingen
 */

oplApp.factory("instructeurFactory", function(){
    let fact = {};
    let instructeurs = [
        {naam: 'Adinda', stad: 'Dendermonde'},
        {naam: 'Siska', stad: 'Wevelgem'},
        {naam: 'Paul', stad: 'Antwerpen'},
        {naam: 'Ilse', stad: 'Genk'},
        {naam: 'Jan', stad: 'Oostende'}
    ];

    fact.getInstructeurs = function(){
        return instructeurs;
    };

    fact.postInstructeurs = function(oInstr) {
        instructeurs.push(oInstr)
    };

    return fact;
});

