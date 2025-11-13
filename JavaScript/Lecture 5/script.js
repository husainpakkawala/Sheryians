//first class function aa hoi che ke jai maa bi value pass thai sake che aa ma apne function pass kari sakye che

//higher order function bi ek function che je yaato apna parameter maa function accept kare yaa function return kare

//closure:- ek aavo function je return kare function ane je function return thayo che aa ma parent function to variable use thavo joiye.

//lexical scoping : suppose karo ke ek function anee tame aa function maa ek variable banavo che ane aane value assign kari che to tame aa che function no scope che aana andaraj variable no use kari sako cho

function abcd(val) {
  val();
}
abcd(function () {
  console.log("heyy");
});
