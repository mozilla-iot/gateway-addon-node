const fs = require('fs');
const { compileFromFile } = require('json-schema-to-typescript');
const path = require('path');

compileFromFile('schema/schema.json', { cwd: 'schema' }).then((ts) =>
  fs.writeFileSync('src/schema.ts', ts)
);

const dname = path.resolve(path.join(__dirname, 'schema', 'messages'));

const lines = [];

for (const fname of fs.readdirSync(dname)) {
  const schemaPath = path.join(dname, fname);
  const schema = JSON.parse(fs.readFileSync(schemaPath).toString());

  if (!schema.hasOwnProperty('properties') || !schema.properties.hasOwnProperty('messageType')) {
    continue;
  }

  const name = fname.split('.')[0].toUpperCase().replace(/-/g, '_');
  const value = schema.properties.messageType.const;
  lines.push(`  ${name} = ${value}`);
}

let content = '';
content += 'export enum MessageType {\n';
content += lines.reduce((prev, cur) => `${prev},\n${cur}`);
content += '\n}\n';

const outputFile = path.resolve(path.join(__dirname, 'src', 'message-type.ts'));

fs.writeFileSync(outputFile, content);
