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
class AssistantV2Tests extends WatsonPackages
  with WskTestHelpers
  with BeforeAndAfterAll {
    val deployTestRepo = "https://github.com/watson-developer-cloud/openwhisk-sdk";
    val manifestPath = "packages/assistant-v2"
    val successStatus = """"status": "success""""
    val nodejs8kind = "nodejs:8"

    //assistant-v2 action definitions
    val packageName = "assistant-v2"
    val message = packageName + "/message"
    val createSession = packageName + "/create-session"
    val deleteSession = packageName + "/delete-session"


    behavior of "Assistant V2 Package"

    // test to create the assistant v2 package from github url. Will use preinstalled folder.
    it should "create the assistant v2 package from github url" in {

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
     val messageAction = wsk.action.get(message)
     verifyAction(messageAction, message, JsString(nodejs8kind))

     val deleteSessionAction = wsk.action.get(deleteSession)
     verifyAction(deleteSessionAction, deleteSession, JsString(nodejs8kind))

     val createSessionAction = wsk.action.get(createSession)
     verifyAction(createSessionAction, createSession, JsString(nodejs8kind))

    

     //clean up after test
     wsk.action.delete(message)
     wsk.action.delete(createSession)
     wsk.action.delete(deleteSession)
     wsk.pkg.delete(packageName)
   }
}
