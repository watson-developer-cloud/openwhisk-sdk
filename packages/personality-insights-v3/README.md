# Watson Personality Insights V3 Package

The IBM Watson Personality Insights service enables applications to derive insights from social media, enterprise data, or other digital communications. The service uses linguistic analytics to infer individuals' intrinsic personality characteristics, including Big Five, Needs, and Values, from digital communications such as email, text messages, tweets, and forum posts.

The service can automatically infer, from potentially noisy social media, portraits of individuals that reflect their personality characteristics. The service can infer consumption preferences based on the results of its analysis and, for JSON content that is timestamped, can report temporal behavior.
* For information about the meaning of the models that the service uses to describe personality characteristics, see [Personality models](https://console.bluemix.net/docs/services/personality-insights/models.html).
* For information about the meaning of the consumption preferences, see [Consumption preferences](https://console.bluemix.net/docs/services/personality-insights/preferences.html). 

**Note:** Request logging is disabled for the Personality Insights service. The service neither logs nor retains data from requests and responses, regardless of whether the `X-Watson-Learning-Opt-Out` request header is set.

The Watson Personality Insights V3 Package will contain the following entities. Find additional details at the API Reference by clicking the entity name.

| Entity | Type | Parameters | Description |
| --- | --- | --- | --- |
| [`personality-insights-v3`](https://www.ibm.com/watson/developercloud/PersonalityInsightsV3/api/v3/curl.html) | package | username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,  | Watson Personality Insights V3 Service |
| [profile](https://www.ibm.com/watson/developercloud/PersonalityInsightsV3/api/v3/curl.html?curl#) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    content,     content_type,     content_language,     accept_language,     raw_scores,     csv_headers,     consumption_preferences,  | Get profile. |
| [profile-as-csv](https://www.ibm.com/watson/developercloud/PersonalityInsightsV3/api/v3/curl.html?curl#) | action |  username, password,  iam_access_token, iam_apikey, iam_url,  headers, headers[X-Watson-Learning-Opt-Out], url,    content,     content_type,     content_language,     accept_language,     raw_scores,     csv_headers,     consumption_preferences,  | Get profile. as csv |


## Deploy the Watson Personality Insights V3 Package with IBM Cloud Command Line Interface (CLI):
### Creating a Watson Personality Insights V3 Service Instance

Before you install the package, you must create a Watson Personality Insights V3 service instance and create the credentials.

1. [Create an Watson Personality Insights V3 service instance.](https://console.bluemix.net/catalog/services/personality_insights)

### Configure CLI
1. Make sure to execute `ibmcloud login` if you're not already logged in.
2. Install the IBM Cloud Functions CLI plugin:

```
ibmcloud plugin install cloud-functions
```
3. Make sure you are authenticated with IBM Functions and can list entities without errors:

```
ibmcloud wsk list
```

### Installing the Package
1. To install the Watson Personality Insights V3 package, first clone the package repo.

```
git clone https://github.com/watson-developer-cloud/openwhisk-sdk
```
2. Navigate to the packages/personality-insights-v3 folder.
3. Use `wskdeploy` to install the package using the [`manifest.yml`](./manifest.yml).

```
wskdeploy
```

**In the future,** the utility `wskdeploy` will be integrated into a new `wsk` plugin command `ibmcloud wsk deploy`.
For now download [wskdeploy](https://github.com/apache/incubator-openwhisk-wskdeploy/releases) and add the downloaded binary to your PATH

### Bind Service Credentials
You will need to bind your Watson Personality Insights V3 service to the `personality-insights-v3` package, so that the Actions will have access to the service credentials.

```
bx wsk service bind personality_insights personality-insights-v3
```
## Using the Watson Personality Insights V3 Package

### Example usage with Watson Personality Insights V3

```
bx wsk action invoke personality-insights-v3/<action-name> -b -p <param name> <param>
```

