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
class NaturalLanguageUnderstandingV1Tests extends WatsonPackages
  with WskTestHelpers
  with BeforeAndAfterAll {
    val deployTestRepo = "https://github.com/watson-developer-cloud/openwhisk-sdk";
    val manifestPath = "packages/natural-language-understanding-v1"
    val successStatus = """"status":"success""""
    val nodejs8kind = "nodejs:8"

    //natural-language-understanding-v1 action definitions
    val packageName = "natural-language-understanding-v1"
    val analyze = packageName + "/analyze"
    val deleteModel = packageName + "/delete-model"
    val listModels = packageName + "/list-models"

    behavior of "Natural Language Understanding V1 Package"

    // test to create the natural language understanding v1 package from github url. TODO: should use preinstalled folder
    it should "create the natural language understanding v1 package from github url" in {

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

     val analyzeAction = wsk.action.get(analyze)
     verifyAction(analyzeAction, analyze, JsString(nodejs8kind))

     val deleteModelAction = wsk.action.get(deleteModel)
     verifyAction(deleteModelAction, deleteModel, JsString(nodejs8kind))

     val listModelsAction = wsk.action.get(listModels)
     verifyAction(listModelsAction, listModels, JsString(nodejs8kind))

     //clean up after test
     wsk.action.delete(analyze)
     wsk.action.delete(deleteModel)
     wsk.action.delete(listModels)
     wsk.pkg.delete(packageName)
   }
}
