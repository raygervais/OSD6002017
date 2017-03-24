var seneca = require('./seneca');

describe('seneca.isValidNode()', function() {
    test('isValidEmail returns true for simple myseneca address', function() {
        var simpleEmail = 'someone@myseneca.ca';
        expect(seneca.isValidEmail(simpleEmail)).toBe(true);
    });

    test('Returns falise for a invalid myseneca address', function() {
        var invalidEmail = 'someone@hotmail.ca';
        expect(seneca.isValidEmail(invalidEmail)).toBe(false);
    });
});
test('formatSenecaEmail returns the formatted email address', function() {
    var simpleName = "rmgervais";
    expect(seneca.formatSenecaEmail(simpleName)).toBe("rmgervais@myseneca.ca");
});
