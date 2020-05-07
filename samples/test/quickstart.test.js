// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const {execSync} = require('child_process');
const {assert} = require('chai');
const {describe, it} = require('mocha');
const exec = (cmd) => execSync(cmd, {encoding: 'utf8'});

describe('should make some API calls', () => {
  it('should run quickstart', () => {
    const output = exec('node quickstart.js');
    assert.include(output, 'Entered new data into the document');
    assert.include(output, 'Updated an existing document');
    assert.include(output, 'Read the document');
    assert.include(output, 'Deleted the document');
  });
});
