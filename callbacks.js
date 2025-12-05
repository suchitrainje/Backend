function getUserDetails(id,getUserSubjects){
    console.log("getting user details by userId", id);
    getUserSubjects({userroll: "678"})
}
function getUserSubjects(userRoll, getUSerMarks){
    console.log("getting user subjects by roll number", userRoll);
    getUSerMarks({subid: "en-1"})
}
function getUSerMarks(userSubId){
    console.log("getting user marks with subid", userSubId)
}
getUserDetails("123", function(userRoll){
    getUserSubjects(userRoll, function(userSubId){
        getUSerMarks(userSubId)
    })
});