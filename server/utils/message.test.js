var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', function () {

    it('should generate correct message object', function () {

        var from = 'Murtaza';
        var text = 'Some message';
        var message = generateMessage(from, text);


        // expect(message.from).toBe(from);
        // expect(message.text).toBe(text);
        expect(message).toMatchObject({from, text});
        expect(typeof message.createdAt).toBe('number');

    });

});