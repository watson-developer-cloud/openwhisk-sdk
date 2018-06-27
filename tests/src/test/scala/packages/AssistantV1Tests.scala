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
    val deployTestRepo = "https://github.com/beemarie/openwhisk-sdk";
    val manifestPath = "packages/assistant-v1"
    val successStatus = """"status":"success""""

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
