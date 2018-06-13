
# Watson Assistant V1 Package

## Deploy Watson Assistant Package with IBM Cloud Command Line Interface (CLI):

### Configure CLI
- Make sure to execute `bx login` if not already logged in
- Install IBM Functions CLI plugin

```
bx plugin install cloud-functions
```
- Make sure you are authenticated with IBM Functions and can list entities without errors

```
bx wsk list
```
### Deploy

- Use `wskdeploy` to deploy using [`manifest.yml`](./manifest.yml).

```
pushd runtimes/nodejs/
wskdeploy
popd
```

## Using the Watson Assistant Package
###Parameters for the Package and Actions
This will create a new package `watson-assistant-package` with the following entities.  Find additional details at the API Reference by clicking the entity name.

| Entity | Type | Parameters | Description |
| --- | --- | --- | --- |
| [`assistant-v1`](#assistant-v1) [LINK TO API REFERENCE] | package | username, password, iam\_access\_token, iam_apikey, iam\_url, headers, headers[X-Watson-Learning-Opt-Out], url  | Add a natural language interface to your application |
| [`assistant-v1/message`](#message) | action | username, password, iam\_access, headers, iam_apikey | Get response to user input. |
| [`assistant-v1/create-workspace`](#create-workspace) | action | username, password, iam\_access, headers, iam_apikey | Create workspace |
| [`assistant-v1/delete-workspace`](#delete-workspace) | action | username, password, iam\_access, headers, iam_apikey | Delete workspace |
| [`assistant-v1/get-workspace`](#get-workspace) | action | username, password, iam\_access, headers, iam_apikey | Get workspace |
| [`assistant-v1/list-workspaces`](#list-workspaces) | action | username, password, iam\_access, headers, iam_apikey | List workspaces |
| [`assistant-v1/update-workspace`](#update-workspace) | action | username, password, iam\_access, headers, iam_apikey | Update workspace |
| [`assistant-v1/create-intent`](#create-intent) | action | username, password, iam\_access, headers, iam_apikey | Create Intent |
