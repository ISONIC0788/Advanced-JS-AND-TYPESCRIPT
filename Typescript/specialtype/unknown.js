/*******
 * unknown specialtype is similar but safer altenative to any
 * TypeScript will prevent unknown types from being used
 *
 *
 *
 *
 */
var w = 1;
w = "string";
w = {
    runANonExistentMethod: function () {
        console.log("I think before there iam");
    }
};
if (typeof w === 'object' && w !== null) {
    w.runANonExistentMethod();
}
