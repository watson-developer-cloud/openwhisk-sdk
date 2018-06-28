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
    val create-workspace = packageName + "/create-workspace"
    val delete-workspace = packageName + "/delete-workspace"
    val get-workspace = packageName + "/get-workspace"
    val list-workspaces = packageName + "/list-workspaces"
    val update-workspace = packageName + "/update-workspace"
    val create-intent = packageName + "/create-intent"
    val delete-intent = packageName + "/delete-intent"
    val get-intent = packageName + "/get-intent"
    val list-intents = packageName + "/list-intents"
    val update-intent = packageName + "/update-intent"
    val create-example = packageName + "/create-example"
    val delete-example = packageName + "/delete-example"
    val get-example = packageName + "/get-example"
    val list-examples = packageName + "/list-examples"
    val update-example = packageName + "/update-example"
    val create-counterexample = packageName + "/create-counterexample"
    val delete-counterexample = packageName + "/delete-counterexample"
    val get-counterexample = packageName + "/get-counterexample"
    val list-counterexamples = packageName + "/list-counterexamples"
    val update-counterexample = packageName + "/update-counterexample"
    val create-entity = packageName + "/create-entity"
    val delete-entity = packageName + "/delete-entity"
    val get-entity = packageName + "/get-entity"
    val list-entities = packageName + "/list-entities"
    val update-entity = packageName + "/update-entity"
    val create-value = packageName + "/create-value"
    val delete-value = packageName + "/delete-value"
    val get-value = packageName + "/get-value"
    val list-values = packageName + "/list-values"
    val update-value = packageName + "/update-value"
    val create-synonym = packageName + "/create-synonym"
    val delete-synonym = packageName + "/delete-synonym"
    val get-synonym = packageName + "/get-value"
    val list-synonyms = packageName + "/list-synonyms"
    val update-synonym = packageName + "/update-synonym"
    val create-dialog-node = packageName + "/create-dialog-node"
    val delete-dialog-node = packageName + "/delete-dialog-node"
    val get-dialog-node = packageName + "/get-dialog-node"
    val list-dialog-nodes = packageName + "/list-dialog-nodes"
    val update-dialog-node = packageName + "/update-dialog-node"
    val list-all-logs = packageName + "/list-all-logs"
    val list-logs = packageName + "/list-logs"
    val delete-user-data = packageName + "/delete-user-data"

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
     wsk.action.delete(create-workspace)
     wsk.action.delete(delete-workspace)
     wsk.action.delete(get-workspace)
     wsk.action.delete(list-workspaces)
     wsk.action.delete(update-workspace)
     wsk.action.delete(create-intent)
     wsk.action.delete(delete-intent)
     wsk.action.delete(get-intent)
     wsk.action.delete(list-intents)
     wsk.action.delete(update-intent)
     wsk.action.delete(create-example)
     wsk.action.delete(delete-example)
     wsk.action.delete(get-example)
     wsk.action.delete(list-examples)
     wsk.action.delete(update-example)
     wsk.action.delete(create-counterexample)
     wsk.action.delete(delete-counterexample)
     wsk.action.delete(get-counterexample)
     wsk.action.delete(list-counterexamples)
     wsk.action.delete(update-counterexample)
     wsk.action.delete(create-entity)
     wsk.action.delete(delete-entity)
     wsk.action.delete(get-entity)
     wsk.action.delete(list-entities)
     wsk.action.delete(update-entity)
     wsk.action.delete(create-value)
     wsk.action.delete(delete-value)
     wsk.action.delete(get-value)
     wsk.action.delete(list-values)
     wsk.action.delete(update-value)
     wsk.action.delete(create-synonym)
     wsk.action.delete(delete-synonym)
     wsk.action.delete(get-synonym)
     wsk.action.delete(list-synonyms)
     wsk.action.delete(update-synonym)
     wsk.action.delete(create-dialog-node)
     wsk.action.delete(delete-dialog-node)
     wsk.action.delete(get-dialog-node)
     wsk.action.delete(list-dialog-nodes)
     wsk.action.delete(update-dialog-node)
     wsk.action.delete(list-all-logs)
     wsk.action.delete(list-logs)
     wsk.action.delete(delete-user-data)
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
