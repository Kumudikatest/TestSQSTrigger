exports.handler = function (event, context, callback) {

    event.Records.forEach(({ messageId, body }) => {
        console.log('SQS message %s: %j', messageId, body);
    });
    return `Successfully processed ${event.Records.length} messages.`;
};




















