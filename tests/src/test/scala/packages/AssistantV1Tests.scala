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

    //assistant-v1 action definitions
    val packageName = "assistant-v1"
    val create_workspace = packageName + "/create-workspace"
    val delete_workspace = packageName + "/delete-workspace"
    val get_workspace = packageName + "/get-workspace"
    val list_workspaces = packageName + "/list-workspaces"
    val update_workspace = packageName + "/update-workspace"
    val create_intent = packageName + "/create-intent"
    val delete_intent = packageName + "/delete-intent"
    val get_intent = packageName + "/get-intent"
    val list_intents = packageName + "/list-intents"
    val update_intent = packageName + "/update-intent"
    val create_example = packageName + "/create-example"
    val delete_example = packageName + "/delete-example"
    val get_example = packageName + "/get-example"
    val list_examples = packageName + "/list-examples"
    val update_example = packageName + "/update-example"
    val create_counterexample = packageName + "/create-counterexample"
    val delete_counterexample = packageName + "/delete-counterexample"
    val get_counterexample = packageName + "/get-counterexample"
    val list_counterexamples = packageName + "/list-counterexamples"
    val update_counterexample = packageName + "/update-counterexample"
    val create_entity = packageName + "/create-entity"
    val delete_entity = packageName + "/delete-entity"
    val get_entity = packageName + "/get-entity"
    val list_entities = packageName + "/list-entities"
    val update_entity = packageName + "/update-entity"
    val create_value = packageName + "/create-value"
    val delete_value = packageName + "/delete-value"
    val get_value = packageName + "/get-value"
    val list_values = packageName + "/list-values"
    val update_value = packageName + "/update-value"
    val create_synonym = packageName + "/create-synonym"
    val delete_synonym = packageName + "/delete-synonym"
    val get_synonym = packageName + "/get-synonym"
    val list_synonyms = packageName + "/list-synonyms"
    val update_synonym = packageName + "/update-synonym"
    val create_dialog_node = packageName + "/create-dialog-node"
    val delete_dialog_node = packageName + "/delete-dialog-node"
    val get_dialog_node = packageName + "/get-dialog-node"
    val list_dialog_nodes = packageName + "/list-dialog-nodes"
    val update_dialog_node = packageName + "/update-dialog-node"
    val list_all_logs = packageName + "/list-all-logs"
    val list_logs = packageName + "/list-logs"
    val delete_user_data = packageName + "/delete-user-data"

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

     //clean up after test
     wsk.action.delete(create_workspace)
     wsk.action.delete(delete_workspace)
     wsk.action.delete(get_workspace)
     wsk.action.delete(list_workspaces)
     wsk.action.delete(update_workspace)
     wsk.action.delete(create_intent)
     wsk.action.delete(delete_intent)
     wsk.action.delete(get_intent)
     wsk.action.delete(list_intents)
     wsk.action.delete(update_intent)
     wsk.action.delete(create_example)
     wsk.action.delete(delete_example)
     wsk.action.delete(get_example)
     wsk.action.delete(list_examples)
     wsk.action.delete(update_example)
     wsk.action.delete(create_counterexample)
     wsk.action.delete(delete_counterexample)
     wsk.action.delete(get_counterexample)
     wsk.action.delete(list_counterexamples)
     wsk.action.delete(update_counterexample)
     wsk.action.delete(create_entity)
     wsk.action.delete(delete_entity)
     wsk.action.delete(get_entity)
     wsk.action.delete(list_entities)
     wsk.action.delete(update_entity)
     wsk.action.delete(create_value)
     wsk.action.delete(delete_value)
     wsk.action.delete(get_value)
     wsk.action.delete(list_values)
     wsk.action.delete(update_value)
     wsk.action.delete(create_synonym)
     wsk.action.delete(delete_synonym)
     wsk.action.delete(get_synonym)
     wsk.action.delete(list_synonyms)
     wsk.action.delete(update_synonym)
     wsk.action.delete(create_dialog_node)
     wsk.action.delete(delete_dialog_node)
     wsk.action.delete(get_dialog_node)
     wsk.action.delete(list_dialog_nodes)
     wsk.action.delete(update_dialog_node)
     wsk.action.delete(list_all_logs)
     wsk.action.delete(list_logs)
     wsk.action.delete(delete_user_data)
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
