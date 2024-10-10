
module.exports = {
    meta: {
        type: 'problem',
        messages: {
            errorMessage: 'Use Logger Service instead of Console methods'
        },
        schema: [],
        // fixable: 'code'
    },
    create: (context) => {
        const identifier = 'loggerService';
        return {
            "CallExpression > MemberExpression > Identifier[name='console']": (node) => {
                if (node) {
                    context.report({
                        node,
                        messageId: "errorMessage"
                        // fix(fixer) {
                        //     fixer.replaceText(node, identifier);
                        // }
                    })
                }
            }
        }
    }
}
