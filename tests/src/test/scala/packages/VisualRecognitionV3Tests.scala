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
class VisualRecognitionV3Tests extends WatsonPackages
  with WskTestHelpers
  with BeforeAndAfterAll {
    val deployTestRepo = "https://github.com/watson-developer-cloud/openwhisk-sdk";
    val manifestPath = "packages/visual-recognition-v3"
    val successStatus = """"status": "success""""
    val nodejs8kind = "nodejs:8"

    //visual-recognition-v3 action definitions
    val packageName = "visual-recognition-v3"
    val classify = packageName + "/classify"
    val createClassifier = packageName + "/create-classifier"
    val deleteClassifier = packageName + "/delete-classifier"
    val deleteUserData = packageName + "/delete-user-data"
    val detectFaces = packageName + "/detect-faces"
    val getClassifier = packageName + "/get-classifier"
    val getCoreMlModel = packageName + "/get-core-ml-model"
    val listClassifiers = packageName + "/list-classifiers"
    val updateClassifier = packageName + "/update-classifier"

    behavior of "Visual Recognition V3 Package"

    // test to create the visual recognition v3 package from github url. Will use preinstalled folder.
    it should "create the visual recognition v3 package from github url" in {

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
     val classifyAction = wsk.action.get(classify)
     verifyAction(classifyAction, classify, JsString(nodejs8kind))

     val createClassifierAction = wsk.action.get(createClassifier)
     verifyAction(createClassifierAction, createClassifier, JsString(nodejs8kind))

     val deleteClassifierAction = wsk.action.get(deleteClassifier)
     verifyAction(deleteClassifierAction, deleteClassifier, JsString(nodejs8kind))

     val deleteUserDataAction = wsk.action.get(deleteUserData)
     verifyAction(deleteUserDataAction, deleteUserData, JsString(nodejs8kind))

     val detectFacesAction = wsk.action.get(detectFaces)
     verifyAction(detectFacesAction, detectFaces, JsString(nodejs8kind))

     val getClassifierAction = wsk.action.get(getClassifier)
     verifyAction(getClassifierAction, getClassifier, JsString(nodejs8kind))

     val getCoreMlModelAction = wsk.action.get(getCoreMlModel)
     verifyAction(getCoreMlModelAction, getCoreMlModel, JsString(nodejs8kind))

     val listClassifiersAction = wsk.action.get(listClassifiers)
     verifyAction(listClassifiersAction, listClassifiers, JsString(nodejs8kind))

     val updateClassifierAction = wsk.action.get(updateClassifier)
     verifyAction(updateClassifierAction, updateClassifier, JsString(nodejs8kind))

     //clean up after test
     wsk.action.delete(classify)
     wsk.action.delete(createClassifier)
     wsk.action.delete(deleteClassifier)
     wsk.action.delete(deleteUserData)
     wsk.action.delete(detectFaces)
     wsk.action.delete(getClassifier)
     wsk.action.delete(getCoreMlModel)
     wsk.action.delete(listClassifiers)
     wsk.action.delete(updateClassifier)
     wsk.pkg.delete(packageName)
   }
}
