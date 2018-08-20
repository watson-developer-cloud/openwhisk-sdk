/**
 * Copyright 2018 IBM All Rights Reserved.
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

const DiscoveryV1 = require('watson-developer-cloud/discovery/v1');
const extend = require('extend');

/**
 * Query your collection.
 *
 * After your content is uploaded and enriched by the Discovery service, you can build queries to search your content.
 * For details, see the [Discovery service
 * documentation](https://console.bluemix.net/docs/services/discovery/using.html).
 *
 * @param {Object} params - The parameters to send to the service.
 * @param {string} [params.username] - The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
 * @param {string} [params.password] - The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
 * @param {string} [params.iam_access_token] - An IAM access token fully managed by the application. Responsibility falls on the application to refresh the token, either before it expires or reactively upon receiving a 401 from the service, as any requests made with an expired token will fail.
 * @param {string} [params.iam_apikey] - An API key that can be used to request IAM tokens. If this API key is provided, the SDK will manage the token and handle the refreshing.
 * @param {string} [params.iam_url] - An optional URL for the IAM service API. Defaults to 'https://iam.bluemix.net/identity/token'.
 * @param {Object} [params.headers] - Custom HTTP request headers
 * @param {boolean} [params.headers.X-Watson-Learning-Opt-Out=false] - opt-out of data collection
 * @param {string} [params.url] - override default service base url
 * @param {string} params.version - Release date of the API version in YYYY-MM-DD format.
 * @param {string} params.environment_id - The ID of the environment.
 * @param {string} params.collection_id - The ID of the collection.
 * @param {string} [params.filter] - A cacheable query that limits the documents returned to exclude any documents that
 * don't mention the query content. Filter searches are better for metadata type searches and when you are trying to get
 * a sense of concepts in the data set.
 * @param {string} [params.query] - A query search returns all documents in your data set with full enrichments and full
 * text, but with the most relevant documents listed first. Use a query search when you want to find the most relevant
 * search results. You cannot use **natural_language_query** and **query** at the same time.
 * @param {string} [params.natural_language_query] - A natural language query that returns relevant documents by
 * utilizing training data and natural language understanding. You cannot use **natural_language_query** and **query**
 * at the same time.
 * @param {boolean} [params.passages] - A passages query that returns the most relevant passages from the results.
 * @param {string} [params.aggregation] - An aggregation search uses combinations of filters and query search to return
 * an exact answer. Aggregations are useful for building applications, because you can use them to build lists, tables,
 * and time series. For a full list of possible aggregrations, see the Query reference.
 * @param {number} [params.count] - Number of results to return.
 * @param {string[]} [params.return_fields] - A comma separated list of the portion of the document hierarchy to return.
 * @param {number} [params.offset] - The number of query results to skip at the beginning. For example, if the total
 * number of results that are returned is 10, and the offset is 8, it returns the last two results.
 * @param {string[]} [params.sort] - A comma separated list of fields in the document to sort on. You can optionally
 * specify a sort direction by prefixing the field with `-` for descending or `+` for ascending. Ascending is the
 * default sort direction if no prefix is specified.
 * @param {boolean} [params.highlight] - When true a highlight field is returned for each result which contains the
 * fields that match the query with `<em></em>` tags around the matching query terms. Defaults to false.
 * @param {string[]} [params.passages_fields] - A comma-separated list of fields that passages are drawn from. If this
 * parameter not specified, then all top-level fields are included.
 * @param {number} [params.passages_count] - The maximum number of passages to return. The search returns fewer passages
 * if the requested total is not found. The default is `10`. The maximum is `100`.
 * @param {number} [params.passages_characters] - The approximate number of characters that any one passage will have.
 * The default is `400`. The minimum is `50`. The maximum is `2000`.
 * @param {boolean} [params.deduplicate] - When `true` and used with a Watson Discovery News collection, duplicate
 * results (based on the contents of the **title** field) are removed. Duplicate comparison is limited to the current
 * query only; **offset** is not considered. This parameter is currently Beta functionality.
 * @param {string} [params.deduplicate_field] - When specified, duplicate results based on the field specified are
 * removed from the returned results. Duplicate comparison is limited to the current query only, **offset** is not
 * considered. This parameter is currently Beta functionality.
 * @param {boolean} [params.similar] - When `true`, results are returned based on their similarity to the document IDs
 * specified in the **similar.document_ids** parameter.
 * @param {string[]} [params.similar_document_ids] - A comma-separated list of document IDs that will be used to find
 * similar documents.
 *
 * **Note:** If the **natural_language_query** parameter is also specified, it will be used to expand the scope of the
 * document similarity search to include the natural language query. Other query parameters, such as **filter** and
 * **query** are subsequently applied and reduce the query scope.
 * @param {string[]} [params.similar_fields] - A comma-separated list of field names that will be used as a basis for
 * comparison to identify similar documents. If not specified, the entire document is used for comparison.
 * @param {boolean} [params.logging_opt_out] - If `true`, queries are not stored in the Discovery **Logs** endpoint.
 * @return {Promise} - The Promise that the action returns.
 */
function main(params) {
  return new Promise((resolve, reject) => {
    const _params = getParams(params, 'discovery');
    _params.headers = extend(
      {},
      _params.headers,
      { 'User-Agent': 'openwhisk' }
    );
    let service;
    try {
      service = new DiscoveryV1(_params);
      service.query(_params, (err, response) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(response);
        }
      });
    } catch (err) {
      reject(err.message);
      return;
    }
  });
}


/**
* Helper function used to authenticate credentials bound to package using wsk service bind
*
* @param {Object} theParams - parameters sent to service
* @param {string} service - name of service in bluemix used to retrieve credentials, used for IAM instances
*/
function getParams(theParams, service) {
  if (Object.keys(theParams).length === 0) {
    return theParams;
  }
  let bxCreds;
  // Code that checks parameters bound using service bind
  if (theParams.__bx_creds) {
    // If user has instance of service
    if (theParams.__bx_creds[service]) {
      bxCreds = theParams.__bx_creds[service];
    } else {
      // User has no instances of service
      bxCreds = {};
    }
  } else {
    bxCreds = {};
  }
  const _params = Object.assign({}, bxCreds, theParams);
  if (_params.apikey) {
    _params.iam_apikey = _params.apikey;
    delete _params.apikey;
  }
  delete _params.__bx_creds;
  return _params;
}
global.main = main;
module.exports.test = main;
