/**
 * Copyright 2017 IBM All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const webpack = require('webpack');
const path = require('path');

module.exports = env => ({
  stats: {
    chunks: false,
    errors: false,
    assets: false,
    hash: false,
    version: false,
    timings: false,
    modules: false,
    warnings: false
  },
  entry: path.join(__dirname, env),
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: `${env.split('/')[2]}.js`
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  target: 'node',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        // Useful to reduce the size of libraries
        NODE_ENV: JSON.stringify('production')
      }
    }),
    // optimizations
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
});
