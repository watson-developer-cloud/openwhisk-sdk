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
class TextToSpeechV1Tests extends WatsonPackages
  with WskTestHelpers
  with BeforeAndAfterAll {
    val deployTestRepo = "https://github.com/watson-developer-cloud/openwhisk-sdk";
    val manifestPath = "packages/text-to-speech-v1"
    val successStatus = """"status":"success""""
    val nodejs8kind = "nodejs:8"

    //text-to-speech-v1 action definitions
    val packageName = "text-to-speech-v1"
    val addWord = "add-word"
    val addWords = packageName + "/add-words"
    val createVoiceModel = packageName + "/create-voice-model"
    val deleteUserData = packageName + "/delete-user-data"
    val deleteVoiceModel = packageName + "/delete-voice-model"
    val deleteWord = packageName + "/delete-word"
    val getPronunciation = packageName + "/get-pronunciation"
    val getVoiceModel = packageName + "/get-voice-model"
    val getVoice = packageName + "/get-voice"
    val getWord = packageName + "/get-word"
    val listVoiceModels = packageName + "/list-voice-models"
    val listVoices = packageName + "/list-voices"
    val listWords = packageName + "/list-words"
    val synthesize = packageName + "/synthesize"
    val updateVoiceModel = packageName + "/update-voice-model"

    behavior of "Text To Speech V1 Package"

    // test to create the text to speech v1 package from github url. TODO: should use preinstalled folder
    it should "create the text to speech v1 package from github url" in {

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

     val packageNameAction = wsk.action.get(packageName)
     verifyAction(packageNameAction, packageName, JsString(nodejs8kind))

     val addWordAction = wsk.action.get(addWord)
     verifyAction(addWordAction, addWord, JsString(nodejs8kind))

     val addWordsAction = wsk.action.get(addWords)
     verifyAction(addWordsAction, addWords, JsString(nodejs8kind))

     val createVoiceModelAction = wsk.action.get(createVoiceModel)
     verifyAction(createVoiceModelAction, createVoiceModel, JsString(nodejs8kind))

     val deleteUserDataAction = wsk.action.get(deleteUserData)
     verifyAction(deleteUserDataAction, deleteUserData, JsString(nodejs8kind))

     val deleteVoiceModelAction = wsk.action.get(deleteVoiceModel)
     verifyAction(deleteVoiceModelAction, deleteVoiceModel, JsString(nodejs8kind))

     val deleteWordAction = wsk.action.get(deleteWord)
     verifyAction(deleteWordAction, deleteWord, JsString(nodejs8kind))

     val getPronunciationAction = wsk.action.get(getPronunciation)
     verifyAction(getPronunciationAction, getPronunciation, JsString(nodejs8kind))

     val getVoiceModelAction = wsk.action.get(getVoiceModel)
     verifyAction(getVoiceModelAction, getVoiceModel, JsString(nodejs8kind))

     val getVoiceAction = wsk.action.get(getVoice)
     verifyAction(getVoiceAction, getVoice, JsString(nodejs8kind))

     val getWordAction = wsk.action.get(getWord)
     verifyAction(getWordAction, getWord, JsString(nodejs8kind))

     val listVoiceModelsAction = wsk.action.get(listVoiceModels)
     verifyAction(listVoiceModelsAction, listVoiceModels, JsString(nodejs8kind))

     val listVoicesAction = wsk.action.get(listVoices)
     verifyAction(listVoicesAction, listVoices, JsString(nodejs8kind))

     val listWordsAction = wsk.action.get(listWords)
     verifyAction(listWordsAction, listWords, JsString(nodejs8kind))

     val synthesizeAction = wsk.action.get(synthesize)
     verifyAction(synthesizeAction, synthesize, JsString(nodejs8kind))

     val updateVoiceModelAction = wsk.action.get(updateVoiceModel)
     verifyAction(updateVoiceModelAction, updateVoiceModel, JsString(nodejs8kind))

     //clean up after test
     wsk.action.delete(packageName)
     wsk.action.delete(addWord)
     wsk.action.delete(addWords)
     wsk.action.delete(createVoiceModel)
     wsk.action.delete(deleteUserData)
     wsk.action.delete(deleteVoiceModel)
     wsk.action.delete(deleteWord)
     wsk.action.delete(getPronunciation)
     wsk.action.delete(getVoiceModel)
     wsk.action.delete(getVoice)
     wsk.action.delete(getWord)
     wsk.action.delete(listVoiceModels)
     wsk.action.delete(listVoices)
     wsk.action.delete(listWords)
     wsk.action.delete(synthesize)
     wsk.action.delete(updateVoiceModel)
   }
}
