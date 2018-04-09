import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'ie11-canjs-demo/models/test';

F.attach(QUnit);

QUnit.module('ie11-canjs-demo functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('ie11-canjs-demo main page shows up', function() {
  F('title').text('ie11-canjs-demo', 'Title is set');
});
