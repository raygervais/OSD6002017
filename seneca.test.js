var seneca = require('./seneca');

test('isValidEmail returns true for simple myseneca address', function() {
    var simpleEmail = 'someone@myseneca.ca';
    expect(seneca.isValidEmail(simpleEmail)).toBe(true);
});

test('formatSenecaEmail returns the formatted email address', function() {
    var simpleName = "rmgervais";
    expect(seneca.formatSenecaEmail(simpleName)).toBe("rmgervais@myseneca.ca");
});
