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
// import common.TestUtils.RunResult
import spray.json._

@RunWith(classOf[JUnitRunner])
class AssistantV1Tests extends WatsonPackages
  with WskTestHelpers
  with BeforeAndAfterAll {
    val deployTestRepo = "https://github.com/watson-developer-cloud/openwhisk-sdk";
    val manifestPath = "packages/assistant-v1"
    val successStatus = """"status":"success""""
    val nodejs8kind = "nodejs:8"

    //assistant-v1 action definitions
    val packageName = "assistant-v1"
    val createWorkspace = packageName + "/create-workspace"
    val deleteWorkspace = packageName + "/delete-workspace"
    val getWorkspace = packageName + "/get-workspace"
    val listWorkspaces = packageName + "/list-workspaces"
    val updateWorkspace = packageName + "/update-workspace"
    val createIntent = packageName + "/create-intent"
    val deleteIntent = packageName + "/delete-intent"
    val getIntent = packageName + "/get-intent"
    val listIntents = packageName + "/list-intents"
    val updateIntent = packageName + "/update-intent"
    val createExample = packageName + "/create-example"
    val deleteExample = packageName + "/delete-example"
    val getExample = packageName + "/get-example"
    val listExamples = packageName + "/list-examples"
    val updateExample = packageName + "/update-example"
    val createCounterexample = packageName + "/create-counterexample"
    val deleteCounterexample = packageName + "/delete-counterexample"
    val getCounterexample = packageName + "/get-counterexample"
    val listCounterexamples = packageName + "/list-counterexamples"
    val updateCounterexample = packageName + "/update-counterexample"
    val createEntity = packageName + "/create-entity"
    val deleteEntity = packageName + "/delete-entity"
    val getEntity = packageName + "/get-entity"
    val listEntities = packageName + "/list-entities"
    val updateEntity = packageName + "/update-entity"
    val createValue = packageName + "/create-value"
    val deleteValue = packageName + "/delete-value"
    val getValue = packageName + "/get-value"
    val listValues = packageName + "/list-values"
    val updateValue = packageName + "/update-value"
    val createSynonym = packageName + "/create-synonym"
    val deleteSynonym = packageName + "/delete-synonym"
    val getSynonym = packageName + "/get-synonym"
    val listSynonyms = packageName + "/list-synonyms"
    val updateSynonym = packageName + "/update-synonym"
    val createDialogNode = packageName + "/create-dialog-node"
    val deleteDialogNode = packageName + "/delete-dialog-node"
    val getDialogNode = packageName + "/get-dialog-node"
    val listDialogNodes = packageName + "/list-dialog-nodes"
    val updateDialogNode = packageName + "/update-dialog-node"
    val listAllLogs = packageName + "/list-all-logs"
    val listLogs = packageName + "/list-logs"
    val deleteUserData = packageName + "/delete-user-data"

    behavior of "Assistant V1 Package"

    // test to create the assistant v1 package from github url. TODO: should use preinstalled folder
    it should "create the assistant v1 package from github url" in {

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

     val createWorkspaceAction = wsk.action.get(createWorkspace)
     verifyAction(createWorkspaceAction, createWorkspace, JsString(nodejs8kind))

     val deleteWorkspaceAction = wsk.action.get(deleteWorkspace)
     verifyAction(deleteWorkspaceAction, deleteWorkspace, JsString(nodejs8kind))

     val getWorkspaceAction = wsk.action.get(getWorkspace)
     verifyAction(getWorkspaceAction, getWorkspace, JsString(nodejs8kind))

     val listWorkspacesAction = wsk.action.get(listWorkspaces)
     verifyAction(listWorkspacesAction, listWorkspaces, JsString(nodejs8kind))

     val updateWorkspaceAction = wsk.action.get(updateWorkspace)
     verifyAction(updateWorkspaceAction, updateWorkspace, JsString(nodejs8kind))

     val createIntentAction = wsk.action.get(createIntent)
     verifyAction(createIntentAction, createIntent, JsString(nodejs8kind))

     val deleteIntentAction = wsk.action.get(deleteIntent)
     verifyAction(deleteIntentAction, deleteIntent, JsString(nodejs8kind))

     val getIntentAction = wsk.action.get(getIntent)
     verifyAction(getIntentAction, getIntent, JsString(nodejs8kind))

     val listIntentsAction = wsk.action.get(listIntents)
     verifyAction(listIntentsAction, listIntents, JsString(nodejs8kind))

     val updateIntentAction = wsk.action.get(updateIntent)
     verifyAction(updateIntentAction, updateIntent, JsString(nodejs8kind))

     val createExampleAction = wsk.action.get(createExample)
     verifyAction(createExampleAction, createExample, JsString(nodejs8kind))

     val deleteExampleAction = wsk.action.get(deleteExample)
     verifyAction(deleteExampleAction, deleteExample, JsString(nodejs8kind))

     val getExampleAction = wsk.action.get(getExample)
     verifyAction(getExampleAction, getExample, JsString(nodejs8kind))

     val listExamplesAction = wsk.action.get(listExamples)
     verifyAction(listExamplesAction, listExamples, JsString(nodejs8kind))

     val updateExampleAction = wsk.action.get(updateExample)
     verifyAction(updateExampleAction, updateExample, JsString(nodejs8kind))

     val createCounterexampleAction = wsk.action.get(createCounterexample)
     verifyAction(createCounterexampleAction, createCounterexample, JsString(nodejs8kind))

     val deleteCounterexampleAction = wsk.action.get(deleteCounterexample)
     verifyAction(deleteCounterexampleAction, deleteCounterexample, JsString(nodejs8kind))

     val getCounterexampleAction = wsk.action.get(getCounterexample)
     verifyAction(getCounterexampleAction, getCounterexample, JsString(nodejs8kind))

     val listCounterexamplesAction = wsk.action.get(listCounterexamples)
     verifyAction(listCounterexamplesAction, listCounterexamples, JsString(nodejs8kind))

     val updateCounterexampleAction = wsk.action.get(updateCounterexample)
     verifyAction(updateCounterexampleAction, updateCounterexample, JsString(nodejs8kind))

     val createEntityAction = wsk.action.get(createEntity)
     verifyAction(createEntityAction, createEntity, JsString(nodejs8kind))

     val deleteEntityAction = wsk.action.get(deleteEntity)
     verifyAction(deleteEntityAction, deleteEntity, JsString(nodejs8kind))

     val getEntityAction = wsk.action.get(getEntity)
     verifyAction(getEntityAction, getEntity, JsString(nodejs8kind))

     val listEntitiesAction = wsk.action.get(listEntities)
     verifyAction(listEntitiesAction, listEntities, JsString(nodejs8kind))

     val updateEntityAction = wsk.action.get(updateEntity)
     verifyAction(updateEntityAction, updateEntity, JsString(nodejs8kind))

     val createValueAction = wsk.action.get(createValue)
     verifyAction(createValueAction, createValue, JsString(nodejs8kind))

     val deleteValueAction = wsk.action.get(deleteValue)
     verifyAction(deleteValueAction, deleteValue, JsString(nodejs8kind))

     val getValueAction = wsk.action.get(getValue)
     verifyAction(getValueAction, getValue, JsString(nodejs8kind))

     val listValuesAction = wsk.action.get(listValues)
     verifyAction(listValuesAction, listValues, JsString(nodejs8kind))

     val updateValueAction = wsk.action.get(updateValue)
     verifyAction(updateValueAction, updateValue, JsString(nodejs8kind))

     val createSynonymAction = wsk.action.get(createSynonym)
     verifyAction(createSynonymAction, createSynonym, JsString(nodejs8kind))

     val deleteSynonymAction = wsk.action.get(deleteSynonym)
     verifyAction(deleteSynonymAction, deleteSynonym, JsString(nodejs8kind))

     val getSynonymAction = wsk.action.get(getSynonym)
     verifyAction(getSynonymAction, getSynonym, JsString(nodejs8kind))

     val listSynonymsAction = wsk.action.get(listSynonyms)
     verifyAction(listSynonymsAction, listSynonyms, JsString(nodejs8kind))

     val updateSynonymAction = wsk.action.get(updateSynonym)
     verifyAction(updateSynonymAction, updateSynonym, JsString(nodejs8kind))

     val createDialogNodeAction = wsk.action.get(createDialogNode)
     verifyAction(createDialogNodeAction, createDialogNode, JsString(nodejs8kind))

     val deleteDialogNodeAction = wsk.action.get(deleteDialogNode)
     verifyAction(deleteDialogNodeAction, deleteDialogNode, JsString(nodejs8kind))

     val getDialogNodeAction = wsk.action.get(getDialogNode)
     verifyAction(getDialogNodeAction, getDialogNode, JsString(nodejs8kind))

     val listDialogNodesAction = wsk.action.get(listDialogNodes)
     verifyAction(listDialogNodesAction, listDialogNodes, JsString(nodejs8kind))

     val updateDialogNodeAction = wsk.action.get(updateDialogNode)
     verifyAction(updateDialogNodeAction, updateDialogNode, JsString(nodejs8kind))

     val listAllLogsAction = wsk.action.get(listAllLogs)
     verifyAction(listAllLogsAction, listAllLogs, JsString(nodejs8kind))

     val listLogsAction = wsk.action.get(listLogs)
     verifyAction(listLogsAction, listLogs, JsString(nodejs8kind))

     val deleteUserDataAction = wsk.action.get(deleteUserData)
     verifyAction(deleteUserDataAction, deleteUserData, JsString(nodejs8kind))
     //clean up after test

     wsk.action.delete(createWorkspace)
     wsk.action.delete(deleteWorkspace)
     wsk.action.delete(getWorkspace)
     wsk.action.delete(listWorkspaces)
     wsk.action.delete(updateWorkspace)
     wsk.action.delete(createIntent)
     wsk.action.delete(deleteIntent)
     wsk.action.delete(getIntent)
     wsk.action.delete(listIntents)
     wsk.action.delete(updateIntent)
     wsk.action.delete(createExample)
     wsk.action.delete(deleteExample)
     wsk.action.delete(getExample)
     wsk.action.delete(listExamples)
     wsk.action.delete(updateExample)
     wsk.action.delete(createCounterexample)
     wsk.action.delete(deleteCounterexample)
     wsk.action.delete(getCounterexample)
     wsk.action.delete(listCounterexamples)
     wsk.action.delete(updateCounterexample)
     wsk.action.delete(createEntity)
     wsk.action.delete(deleteEntity)
     wsk.action.delete(getEntity)
     wsk.action.delete(listEntities)
     wsk.action.delete(updateEntity)
     wsk.action.delete(createValue)
     wsk.action.delete(deleteValue)
     wsk.action.delete(getValue)
     wsk.action.delete(listValues)
     wsk.action.delete(updateValue)
     wsk.action.delete(createSynonym)
     wsk.action.delete(deleteSynonym)
     wsk.action.delete(getSynonym)
     wsk.action.delete(listSynonyms)
     wsk.action.delete(updateSynonym)
     wsk.action.delete(createDialogNode)
     wsk.action.delete(deleteDialogNode)
     wsk.action.delete(getDialogNode)
     wsk.action.delete(listDialogNodes)
     wsk.action.delete(updateDialogNode)
     wsk.action.delete(listAllLogs)
     wsk.action.delete(listLogs)
     wsk.action.delete(deleteUserData)
     wsk.pkg.delete(packageName)
   }
}

//     deployNodeJS8
//     // create unique asset names
//
//     // ensure actions exist and are of expected kind
//     val testActionWrite =
//       wsk.action.get(actionWrite)
//     verifyAction(testActionWrite, actionWrite, JsString(nodejs8kind))
//
//     val testActionRead = wsk.action.get(actionRead)
//     verifyAction(testActionRead, actionRead, JsString(nodejs8kind))
//
//     val testActionDelete = wsk.action.get(actionDelete)
//     verifyAction(testActionDelete, actionDelete, JsString(nodejs8kind))
//
//     val testActionGetSignedUrl = wsk.action.get(actionGetSignedUrl)
//     verifyAction(testActionGetSignedUrl,
//                  actionGetSignedUrl,
//                  JsString(nodejs8kind))
//
//     val testActionBucketCorsGet = wsk.action.get(actionBucketCorsGet)
//     verifyAction(testActionBucketCorsGet,
//                  actionBucketCorsGet,
//                  JsString(nodejs8kind))
//
//     val testActionBucketCorsPut = wsk.action.get(actionBucketCorsPut)
//     verifyAction(testActionBucketCorsPut,
//                  actionBucketCorsPut,
//                  JsString(nodejs8kind))
//
//     val testActionBucketCorsDelete =
//       wsk.action.get(actionBucketCorsDelete)
//     verifyAction(testActionBucketCorsDelete,
//                  actionBucketCorsDelete,
//                  JsString(nodejs8kind))
//     // clean up after test
//     deleteNodeJS8
//   }
//
//   // test to create the python Cloud Object Storage package from github url.  Will use preinstalled folder.
//   it should "create the python Cloud Object Storage package from github url" in {
//     deployPython
//
//     // ensure actions exist and are of expected kind
//     val testActionWrite = wsk.action.get(actionWrite)
//     verifyAction(testActionWrite, actionWrite, JsString(pythonkind))
//
//     val testActionRead = wsk.action.get(actionRead)
//     verifyAction(testActionRead, actionRead, JsString(pythonkind))
//
//     val testActionDelete = wsk.action.get(actionDelete)
//     verifyAction(testActionDelete, actionDelete, JsString(pythonkind))
//
//     val testActionGetSignedUrl = wsk.action.get(actionGetSignedUrl)
//     verifyAction(testActionGetSignedUrl,
//                  actionGetSignedUrl,
//                  JsString(pythonkind))
//
//     val testActionBucketCorsGet = wsk.action.get(actionBucketCorsGet)
//     verifyAction(testActionBucketCorsGet,
//                  actionBucketCorsGet,
//                  JsString(pythonkind))
//
//     val testActionBucketCorsPut = wsk.action.get(actionBucketCorsPut)
//     verifyAction(testActionBucketCorsPut,
//                  actionBucketCorsPut,
//                  JsString(pythonkind))
//
//     val testActionBucketCorsDelete =
//       wsk.action.get(actionBucketCorsDelete)
//     verifyAction(testActionBucketCorsDelete,
//                  actionBucketCorsDelete,
//                  JsString(pythonkind))
//
//     // clean up after test
//     deletePython
//   }
//
//   private def verifyAction(action: RunResult,
//                            name: String,
//                            kindValue: JsString): Unit = {
//     val stdout = action.stdout
//     assert(stdout.startsWith(s"ok: got action $name\n"))
//     wsk
//       .parseJsonString(stdout)
//       .fields("exec")
//       .asJsObject
//       .fields("kind") shouldBe kindValue
//   }
// }
