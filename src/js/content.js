import $ from 'jquery';
import msg from './modules/msg';

// here we use SHARED message handlers, so all the contexts support the same
// commands. but this is NOT typical messaging system usage, since you usually
// want each context to handle different commands. for this you don't need
// handlers factory as used below. simply create individual `handlers` object
// for each context and pass it to msg.init() call. in case you don't need the
// context to support any commands, but want the context to cooperate with the
// rest of the extension via messaging system (you want to know when new
// instance of given context is created / destroyed, or you want to be able to
// issue command requests from this context), you may simply omit the
// `handlers` parameter for good when invoking msg.init()

const getSchemaHandler = () => {
    var schemas = document.querySelectorAll("script[type='application/ld+json']");

    var schemaTexts = [];

    schemas.forEach(function (ele, i, _) {
        schemaTexts.push(ele.text);
    });

    messages.bcast('schemaList', schemaTexts);
}

const handlers = { getSchemas: getSchemaHandler }

var messages = msg.init('ct', handlers);