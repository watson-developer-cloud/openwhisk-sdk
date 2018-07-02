/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package packages

import org.junit.runner.RunWith
import org.scalatest.BeforeAndAfterAll
import org.scalatest.junit.JUnitRunner
import common.{WskTestHelpers}
import spray.json._

@RunWith(classOf[JUnitRunner])
class DiscoveryV1Tests extends WatsonPackages
  with WskTestHelpers
  with BeforeAndAfterAll {
    val deployTestRepo = "https://github.com/watson-developer-cloud/openwhisk-sdk";
    val manifestPath = "packages/discovery-v1"
    val successStatus = """"status":"success""""
    val nodejs8kind = "nodejs:8"

    //discovery-v1 action definitions
    val packageName = "discovery-v1"
    val createEnvironment = packageName + "/create-environment"
    val deleteEnvironment = packageName + "/delete-environment"
    val getEnvironment = packageName + "/get-environment"
    val listEnvironments = packageName + "/list-environments"
    val updateEnvironment = packageName + "/update-environment"
    val createConfiguration = packageName + "/create-configuration"
    val deleteConfiguration = packageName + "/delete-configuration"
    val getConfiguration = packageName + "/get-configuration"
    val listConfigurations = packageName + "/list-configurations"
    val updateConfiguration = packageName + "/update-configuration"
    val createCollection = packageName + "/create-collection"
    val deleteCollection = packageName + "/delete-collection"
    val getCollection = packageName + "/get-collection"
    val listCollections = packageName + "/list-collections"
    val updateCollection = packageName + "/update-collection"
    val listCollectionFields = packageName + "/list-collection-fields"
    val listFields = packageName + "/list-fields"
    val testConfigurationInEnvironment = packageName + "/test-configuration-in-environment"
    val createExpansions = packageName + "/create-expansions"
    val deleteExpansions = packageName + "/delete-expansions"
    val listExpansions = packageName + "/list-expansions"
    val addDocument = packageName + "/add-document"
    val deleteDocument = packageName + "/delete-document"
    val getDocumentStatus = packageName + "/get-document-status"
    val updateDocument = packageName + "/update-document"
    val federatedQuery = packageName + "/federated-query"
    val federatedQueryNotices = packageName + "/federated-query-notices"
    val query = packageName + "/query"
    val queryEntities = packageName + "/query-entities"
    val queryNotices = packageName + "/query-notices"
    val queryRelations = packageName + "/query-relations"
    val addTrainingData = packageName + "/add-training-data"
    val deleteTrainingData = packageName + "/delete-training-data"
    val deleteAllTrainingData = packageName + "/delete-all-training-data"
    val getTrainingData = packageName + "/get-training-data"
    val createTrainingExample = packageName + "/create-training-example"
    val deleteTrainingExample = packageName + "/delete-training-example"
    val getTrainingExample = packageName + "/get-training-example"
    val listTrainingData = packageName + "/list-training-data"
    val listTrainingExamples = packageName + "/list-training-examples"
    val updateTrainingExample = packageName + "/update-training-example"
    val deleteUserData = packageName + "/delete-user-data"

    behavior of "Discovery V1 Package"

    // test to create the discovery v1 package from github url. Will use preinstalled folder.
    it should "create the discovery v1 package from github url" in {

      makeWskdeployCallWithExpectedResult(
       JsObject(
         "gitUrl" -> JsString(deployTestRepo),
         "manifestPath" -> JsString(manifestPath),
         "wskApiHost" -> JsString(wskprops.apihost),
         "wskAuth" -> JsString(wskprops.authKey)
       ),
       successStatus,
       200
     );

     // ensure actions exist and are of expected kind
     val createEnvironmentAction = wsk.action.get(createEnvironment)
     verifyAction(createEnvironmentAction, createEnvironment, JsString(nodejs8kind))

     val deleteEnvironmentAction = wsk.action.get(deleteEnvironment)
     verifyAction(deleteEnvironmentAction, deleteEnvironment, JsString(nodejs8kind))

     val getEnvironmentAction = wsk.action.get(getEnvironment)
     verifyAction(getEnvironmentAction, getEnvironment, JsString(nodejs8kind))

     val listEnvironmentsAction = wsk.action.get(listEnvironments)
     verifyAction(listEnvironmentsAction, listEnvironments, JsString(nodejs8kind))

     val updateEnvironmentAction = wsk.action.get(updateEnvironment)
     verifyAction(updateEnvironmentAction, updateEnvironment, JsString(nodejs8kind))

     val createConfigurationAction = wsk.action.get(createConfiguration)
     verifyAction(createConfigurationAction, createConfiguration, JsString(nodejs8kind))

     val deleteConfigurationAction = wsk.action.get(deleteConfiguration)
     verifyAction(deleteConfigurationAction, deleteConfiguration, JsString(nodejs8kind))

     val getConfigurationAction = wsk.action.get(getConfiguration)
     verifyAction(getConfigurationAction, getConfiguration, JsString(nodejs8kind))

     val listConfigurationsAction = wsk.action.get(listConfigurations)
     verifyAction(listConfigurationsAction, listConfigurations, JsString(nodejs8kind))

     val updateConfigurationAction = wsk.action.get(updateConfiguration)
     verifyAction(updateConfigurationAction, updateConfiguration, JsString(nodejs8kind))

     val createCollectionAction = wsk.action.get(createCollection)
     verifyAction(createCollectionAction, createCollection, JsString(nodejs8kind))

     val deleteCollectionAction = wsk.action.get(deleteCollection)
     verifyAction(deleteCollectionAction, deleteCollection, JsString(nodejs8kind))

     val getCollectionAction = wsk.action.get(getCollection)
     verifyAction(getCollectionAction, getCollection, JsString(nodejs8kind))

     val listCollectionsAction = wsk.action.get(listCollections)
     verifyAction(listCollectionsAction, listCollections, JsString(nodejs8kind))

     val updateCollectionAction = wsk.action.get(updateCollection)
     verifyAction(updateCollectionAction, updateCollection, JsString(nodejs8kind))

     val createExpansionsAction = wsk.action.get(createExpansions)
     verifyAction(createExpansionsAction, createExpansions, JsString(nodejs8kind))

     val deleteExpansionsAction = wsk.action.get(deleteExpansions)
     verifyAction(deleteExpansionsAction, deleteExpansions, JsString(nodejs8kind))

     val listExpansionsAction = wsk.action.get(listExpansions)
     verifyAction(listExpansionsAction, listExpansions, JsString(nodejs8kind))

     val listCollectionFieldsAction = wsk.action.get(listCollectionFields)
     verifyAction(listCollectionFieldsAction, listCollectionFields, JsString(nodejs8kind))

     val listFieldsAction = wsk.action.get(listFields)
     verifyAction(listFieldsAction, listFields, JsString(nodejs8kind))

     val testConfigurationInEnvironmentAction = wsk.action.get(testConfigurationInEnvironment)
     verifyAction(testConfigurationInEnvironmentAction, testConfigurationInEnvironment, JsString(nodejs8kind))

     val addDocumentAction = wsk.action.get(addDocument)
     verifyAction(addDocumentAction, addDocument, JsString(nodejs8kind))

     val deleteDocumentAction = wsk.action.get(deleteDocument)
     verifyAction(deleteDocumentAction, deleteDocument, JsString(nodejs8kind))

     val getDocumentStatusAction = wsk.action.get(getDocumentStatus)
     verifyAction(getDocumentStatusAction, getDocumentStatus, JsString(nodejs8kind))

     val updateDocumentAction = wsk.action.get(updateDocument)
     verifyAction(updateDocumentAction, updateDocument, JsString(nodejs8kind))

     val federatedQueryAction = wsk.action.get(federatedQuery)
     verifyAction(federatedQueryAction, federatedQuery, JsString(nodejs8kind))

     val federatedQueryNoticesAction = wsk.action.get(federatedQueryNotices)
     verifyAction(federatedQueryNoticesAction, federatedQueryNotices, JsString(nodejs8kind))

     val queryAction = wsk.action.get(query)
     verifyAction(queryAction, query, JsString(nodejs8kind))

     val queryEntitiesAction = wsk.action.get(queryEntities)
     verifyAction(queryEntitiesAction, queryEntities, JsString(nodejs8kind))

     val queryNoticesAction = wsk.action.get(queryNotices)
     verifyAction(queryNoticesAction, queryNotices, JsString(nodejs8kind))

     val queryRelationsAction = wsk.action.get(queryRelations)
     verifyAction(queryRelationsAction, queryRelations, JsString(nodejs8kind))

     val addTrainingDataAction = wsk.action.get(addTrainingData)
     verifyAction(addTrainingDataAction, addTrainingData, JsString(nodejs8kind))

     val deleteTrainingDataAction = wsk.action.get(deleteTrainingData)
     verifyAction(deleteTrainingDataAction, deleteTrainingData, JsString(nodejs8kind))

     val deleteAllTrainingDataAction = wsk.action.get(deleteAllTrainingData)
     verifyAction(deleteAllTrainingDataAction, deleteAllTrainingData, JsString(nodejs8kind))

     val getTrainingDataAction = wsk.action.get(getTrainingData)
     verifyAction(getTrainingDataAction, getTrainingData, JsString(nodejs8kind))

     val createTrainingExampleAction = wsk.action.get(createTrainingExample)
     verifyAction(createTrainingExampleAction, createTrainingExample, JsString(nodejs8kind))

     val deleteTrainingExampleAction = wsk.action.get(deleteTrainingExample)
     verifyAction(deleteTrainingExampleAction, deleteTrainingExample, JsString(nodejs8kind))

     val getTrainingExampleAction = wsk.action.get(getTrainingExample)
     verifyAction(getTrainingExampleAction, getTrainingExample, JsString(nodejs8kind))

     val listTrainingDataAction = wsk.action.get(listTrainingData)
     verifyAction(listTrainingDataAction, listTrainingData, JsString(nodejs8kind))

     val listTrainingExamplesAction = wsk.action.get(listTrainingExamples)
     verifyAction(listTrainingExamplesAction, listTrainingExamples, JsString(nodejs8kind))

     val updateTrainingExampleAction = wsk.action.get(updateTrainingExample)
     verifyAction(updateTrainingExampleAction, updateTrainingExample, JsString(nodejs8kind))

     val deleteUserDataAction = wsk.action.get(deleteUserData)
     verifyAction(deleteUserDataAction, deleteUserData, JsString(nodejs8kind))

     //clean up after test
     wsk.action.delete(createEnvironment)
     wsk.action.delete(deleteEnvironment)
     wsk.action.delete(getEnvironment)
     wsk.action.delete(listEnvironments)
     wsk.action.delete(updateEnvironment)
     wsk.action.delete(createConfiguration)
     wsk.action.delete(deleteConfiguration)
     wsk.action.delete(getConfiguration)
     wsk.action.delete(listConfigurations)
     wsk.action.delete(updateConfiguration)
     wsk.action.delete(createCollection)
     wsk.action.delete(deleteCollection)
     wsk.action.delete(getCollection)
     wsk.action.delete(listCollections)
     wsk.action.delete(updateCollection)
     wsk.action.delete(listCollectionFields)
     wsk.action.delete(listFields)
     wsk.action.delete(testConfigurationInEnvironment)
     wsk.action.delete(createExpansions)
     wsk.action.delete(deleteExpansions)
     wsk.action.delete(listExpansions)
     wsk.action.delete(addDocument)
     wsk.action.delete(deleteDocument)
     wsk.action.delete(getDocumentStatus)
     wsk.action.delete(updateDocument)
     wsk.action.delete(federatedQuery)
     wsk.action.delete(federatedQueryNotices)
     wsk.action.delete(query)
     wsk.action.delete(queryEntities)
     wsk.action.delete(queryNotices)
     wsk.action.delete(queryRelations)
     wsk.action.delete(addTrainingData)
     wsk.action.delete(deleteTrainingData)
     wsk.action.delete(deleteAllTrainingData)
     wsk.action.delete(getTrainingData)
     wsk.action.delete(createTrainingExample)
     wsk.action.delete(deleteTrainingExample)
     wsk.action.delete(getTrainingExample)
     wsk.action.delete(listTrainingData)
     wsk.action.delete(listTrainingExamples)
     wsk.action.delete(updateTrainingExample)
     wsk.action.delete(deleteUserData)
     wsk.pkg.delete(packageName)
   }
}
