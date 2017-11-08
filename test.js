const index = require('./index');

const body = {
	result: {
		resolvedQuery: 'examine door',
	}
}
const event = {
	httpMethod: 'POST',
	body: JSON.stringify(body),
}

const callback = (something, result) => {
	console.log('RESULT:', result);
	process.exit();
}

index.handler(event, {}, callback);
