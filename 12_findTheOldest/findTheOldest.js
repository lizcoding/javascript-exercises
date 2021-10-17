const findTheOldest = function(people) {
    const oldest = people.sort(function(a, b) {
        aDeceased = 'yearOfDeath' in a;
        bDeceased = 'yearOfDeath' in b;
        aAge = 0;
        bAge = 0;
        let today = new Date();
        let year = today.getFullYear();

        if (aDeceased) {
            aAge = a.yearOfDeath - a.yearOfBirth;
        } else {
            aAge = year - a.yearOfBirth;
        };
        if (bDeceased) {
            bAge = b.yearOfDeath - b.yearOfBirth;
        } else {
            bAge = year - b.yearOfBirth;
        };

        if (aAge < bAge) {
            return 1;
        } else {
            return -1;
        };
    });
    return oldest[0];
}

// Do not edit below this line
module.exports = findTheOldest;
