let seneca = require('./seneca');

describe('seneca.isValidNode()', function() {
    test('isValidEmail returns true for simple myseneca address', function() {
        expect(seneca.isValidEmail('someone@myseneca.ca')).toBe(true);
    });

    test('Returns true for a staff email address', function () {
        expect(seneca.isValidEmail('david.humphrey@senecacollege.ca')).toBe(true);
    });

    test('Returns false for a invalid myseneca address', function() {
        expect(seneca.isValidEmail('someone@hotmail.ca')).toBe(false);
    });

    test('Returns false for a malformed myseneca address', function() {
        expect(seneca.isValidEmail('  rmgervais@senecacollege.ca')).toBe(false);
    });

    test('Returns false for invalid argument being passed', function() {
        expect(seneca.isValidEmail(123)).toBe(false);
    });

    test('Returns false for an array argument being passed', function() {
        expect(seneca.isValidEmail([1, 'rmgervais@myseneca.ca'])).toBe(false);
    });
});

describe('seneca.formatSenecaEmail()', function() {
    test('formatSenecaEmail returns the formatted email address', function() {
        expect(seneca.formatSenecaEmail('rmgervais')).toBe('rmgervais@myseneca.ca');
    });

    test('Returns a thrown error due to name being null', function() {
        expect(seneca.formatSenecaEmail()).toBe("Error: Invalid Argument");
    });
});

