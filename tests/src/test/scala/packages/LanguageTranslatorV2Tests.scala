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
class LanguageTranslatorV2Tests extends WatsonPackages
  with WskTestHelpers
  with BeforeAndAfterAll {
    val deployTestRepo = "https://github.com/watson-developer-cloud/openwhisk-sdk";
    val manifestPath = "packages/language-translator-v2"
    val successStatus = """"status":"success""""
    val nodejs8kind = "nodejs:8"

    //language-translator-v2 action definitions
    val packageName = "language-translator-v2"
    val createModel = packageName + "/create-model"
    val deleteModel = packageName + "/delete-model"
    val getModel = packageName + "/get-model"
    val identify = packageName + "/identify"
    val listIdentifiableLanguages = packageName + "/list-identifiable-languages"
    val listModels = packageName + "/list-models"
    val translate = packageName + "/translate"

    behavior of "Language Translator V2 Package"

    // test to create the language translator v2 package from github url. Will use preinstalled folder.
    it should "create the language translator v2 package from github url" in {

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
     val createModelAction = wsk.action.get(createModel)
     verifyAction(createModelAction, createModel, JsString(nodejs8kind))

     val deleteModelAction = wsk.action.get(deleteModel)
     verifyAction(deleteModelAction, deleteModel, JsString(nodejs8kind))

     val getModelAction = wsk.action.get(getModel)
     verifyAction(getModelAction, getModel, JsString(nodejs8kind))

     val identifyAction = wsk.action.get(identify)
     verifyAction(identifyAction, identify, JsString(nodejs8kind))

     val listIdentifiableLanguagesAction = wsk.action.get(listIdentifiableLanguages)
     verifyAction(listIdentifiableLanguagesAction, listIdentifiableLanguages, JsString(nodejs8kind))

     val listModelsAction = wsk.action.get(listModels)
     verifyAction(listModelsAction, listModels, JsString(nodejs8kind))

     val translateAction = wsk.action.get(translate)
     verifyAction(translateAction, translate, JsString(nodejs8kind))

     //clean up after test
     wsk.action.delete(createModel)
     wsk.action.delete(deleteModel)
     wsk.action.delete(getModel)
     wsk.action.delete(identify)
     wsk.action.delete(listIdentifiableLanguages)
     wsk.action.delete(listModels)
     wsk.action.delete(translate)
     wsk.pkg.delete(packageName)
   }
}
