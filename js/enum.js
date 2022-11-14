var MemberShip;
(function (MemberShip) {
    MemberShip["Simple"] = "Simple";
    MemberShip["Standard"] = "Standart";
    MemberShip["Premium"] = "Prem";
})(MemberShip || (MemberShip = {}));
var members = MemberShip.Standard;
console.log(members);
console.log(MemberShip);
