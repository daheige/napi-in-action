import test from 'ava'

import { sum,sayHello } from '../index.js'

test('sum from native', (t) => {
  t.is(sum(1, 2), 3)
})

test('say_hello from native',(t)=>{
  sayHello("daheige");
  t.is(1, 1);
})
