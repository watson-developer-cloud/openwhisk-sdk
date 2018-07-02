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
class SpeechToTextV1Tests extends WatsonPackages
  with WskTestHelpers
  with BeforeAndAfterAll {
    val deployTestRepo = "https://github.com/watson-developer-cloud/openwhisk-sdk";
    val manifestPath = "packages/speech-to-text-v1"
    val successStatus = """"status":"success""""
    val nodejs8kind = "nodejs:8"

    //speech-to-text-v1 action definitions
    val packageName = "speech-to-text-v1"
    val getModel = packageName + "/get-model"
    val listModels = packageName + "/list-models"
    val recognize = packageName + "/recognize"
    val checkJob = packageName + "/check-job"
    val checkJobs = packageName + "/check-jobs"
    val createJob = packageName + "/create-job"
    val deleteJob = packageName + "/delete-job"
    val registerCallback = packageName + "/register-callback"
    val unregisterCallback = packageName + "/unregister-callback"
    val createLanguageModel = packageName + "/create-language-model"
    val deleteLanguageModel = packageName + "/delete-language-model"
    val getLanguageModel = packageName + "/get-language-model"
    val listLanguageModels = packageName + "/list-language-models"
    val resetLanguageModel = packageName + "/reset-language-model"
    val trainLanguageModel = packageName + "/train-language-model"
    val upgradeLanguageModel = packageName + "/upgrade-language-model"
    val addCorpus = packageName + "/add-corpus"
    val deleteCorpus = packageName + "/delete-corpus"
    val getCorpus = packageName + "/get-corpus"
    val listCorpora = packageName + "/list-corpora"
    val addWord = packageName + "/add-word"
    val addWords = packageName + "/add-words"
    val deleteWord = packageName + "/delete-word"
    val getWord = packageName + "/get-word"
    val listWords = packageName + "/list-words"
    val createAcousticModel = packageName + "/create-acoustic-model"
    val deleteAcousticModel = packageName + "/delete-acoustic-model"
    val getAcousticModel = packageName + "/get-acoustic-model"
    val listAcousticModels = packageName + "/list-acoustic-models"
    val resetAcousticModel = packageName + "/reset-acoustic-model"
    val trainAcousticModel = packageName + "/train-acoustic-model"
    val upgradeAcousticModel = packageName + "/upgrade-acoustic-model"
    val addAudio = packageName + "/add-audio"
    val deleteAudio = packageName + "/delete-audio"
    val getAudio = packageName + "/get-audio"
    val listAudio = packageName + "/list-audio"
    val deleteUserData = packageName + "/delete-user-data"

    behavior of "Speech To Text V1 Package"

    // test to create the speech to text v1 package from github url. Will use preinstalled folder.
    it should "create the speech to text v1 package from github url" in {

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
     val getModelAction = wsk.action.get(getModel)
     verifyAction(getModelAction, getModel, JsString(nodejs8kind))

     val listModelsAction = wsk.action.get(listModels)
     verifyAction(listModelsAction, listModels, JsString(nodejs8kind))

     val recognizeAction = wsk.action.get(recognize)
     verifyAction(recognizeAction, recognize, JsString(nodejs8kind))

     val checkJobAction = wsk.action.get(checkJob)
     verifyAction(checkJobAction, checkJob, JsString(nodejs8kind))

     val checkJobsAction = wsk.action.get(checkJobs)
     verifyAction(checkJobsAction, checkJobs, JsString(nodejs8kind))

     val createJobAction = wsk.action.get(createJob)
     verifyAction(createJobAction, createJob, JsString(nodejs8kind))

     val deleteJobAction = wsk.action.get(deleteJob)
     verifyAction(deleteJobAction, deleteJob, JsString(nodejs8kind))

     val registerCallbackAction = wsk.action.get(registerCallback)
     verifyAction(registerCallbackAction, registerCallback, JsString(nodejs8kind))

     val unregisterCallbackAction = wsk.action.get(unregisterCallback)
     verifyAction(unregisterCallbackAction, unregisterCallback, JsString(nodejs8kind))

     val createLanguageModelAction = wsk.action.get(createLanguageModel)
     verifyAction(createLanguageModelAction, createLanguageModel, JsString(nodejs8kind))

     val deleteLanguageModelAction = wsk.action.get(deleteLanguageModel)
     verifyAction(deleteLanguageModelAction, deleteLanguageModel, JsString(nodejs8kind))

     val getLanguageModelAction = wsk.action.get(getLanguageModel)
     verifyAction(getLanguageModelAction, getLanguageModel, JsString(nodejs8kind))

     val listLanguageModelsAction = wsk.action.get(listLanguageModels)
     verifyAction(listLanguageModelsAction, listLanguageModels, JsString(nodejs8kind))

     val resetLanguageModelAction = wsk.action.get(resetLanguageModel)
     verifyAction(resetLanguageModelAction, resetLanguageModel, JsString(nodejs8kind))

     val trainLanguageModelAction = wsk.action.get(trainLanguageModel)
     verifyAction(trainLanguageModelAction, trainLanguageModel, JsString(nodejs8kind))

     val upgradeLanguageModelAction = wsk.action.get(upgradeLanguageModel)
     verifyAction(upgradeLanguageModelAction, upgradeLanguageModel, JsString(nodejs8kind))

     val addCorpusAction = wsk.action.get(addCorpus)
     verifyAction(addCorpusAction, addCorpus, JsString(nodejs8kind))

     val deleteCorpusAction = wsk.action.get(deleteCorpus)
     verifyAction(deleteCorpusAction, deleteCorpus, JsString(nodejs8kind))

     val getCorpusAction = wsk.action.get(getCorpus)
     verifyAction(getCorpusAction, getCorpus, JsString(nodejs8kind))

     val listCorporaAction = wsk.action.get(listCorpora)
     verifyAction(listCorporaAction, listCorpora, JsString(nodejs8kind))

     val addWordAction = wsk.action.get(addWord)
     verifyAction(addWordAction, addWord, JsString(nodejs8kind))

     val addWordsAction = wsk.action.get(addWords)
     verifyAction(addWordsAction, addWords, JsString(nodejs8kind))

     val deleteWordAction = wsk.action.get(deleteWord)
     verifyAction(deleteWordAction, deleteWord, JsString(nodejs8kind))

     val getWordAction = wsk.action.get(getWord)
     verifyAction(getWordAction, getWord, JsString(nodejs8kind))

     val listWordsAction = wsk.action.get(listWords)
     verifyAction(listWordsAction, listWords, JsString(nodejs8kind))

     val createAcousticModelAction = wsk.action.get(createAcousticModel)
     verifyAction(createAcousticModelAction, createAcousticModel, JsString(nodejs8kind))

     val deleteAcousticModelAction = wsk.action.get(deleteAcousticModel)
     verifyAction(deleteAcousticModelAction, deleteAcousticModel, JsString(nodejs8kind))

     val getAcousticModelAction = wsk.action.get(getAcousticModel)
     verifyAction(getAcousticModelAction, getAcousticModel, JsString(nodejs8kind))

     val listAcousticModelsAction = wsk.action.get(listAcousticModels)
     verifyAction(listAcousticModelsAction, listAcousticModels, JsString(nodejs8kind))

     val resetAcousticModelAction = wsk.action.get(resetAcousticModel)
     verifyAction(resetAcousticModelAction, resetAcousticModel, JsString(nodejs8kind))

     val trainAcousticModelAction = wsk.action.get(trainAcousticModel)
     verifyAction(trainAcousticModelAction, trainAcousticModel, JsString(nodejs8kind))

     val upgradeAcousticModelAction = wsk.action.get(upgradeAcousticModel)
     verifyAction(upgradeAcousticModelAction, upgradeAcousticModel, JsString(nodejs8kind))

     val addAudioAction = wsk.action.get(addAudio)
     verifyAction(addAudioAction, addAudio, JsString(nodejs8kind))

     val deleteAudioAction = wsk.action.get(deleteAudio)
     verifyAction(deleteAudioAction, deleteAudio, JsString(nodejs8kind))

     val getAudioAction = wsk.action.get(getAudio)
     verifyAction(getAudioAction, getAudio, JsString(nodejs8kind))

     val listAudioAction = wsk.action.get(listAudio)
     verifyAction(listAudioAction, listAudio, JsString(nodejs8kind))

     val deleteUserDataAction = wsk.action.get(deleteUserData)
     verifyAction(deleteUserDataAction, deleteUserData, JsString(nodejs8kind))

     //clean up after test
     wsk.action.delete(getModel)
     wsk.action.delete(listModels)
     wsk.action.delete(recognize)
     wsk.action.delete(checkJob)
     wsk.action.delete(checkJobs)
     wsk.action.delete(createJob)
     wsk.action.delete(deleteJob)
     wsk.action.delete(registerCallback)
     wsk.action.delete(unregisterCallback)
     wsk.action.delete(createLanguageModel)
     wsk.action.delete(deleteLanguageModel)
     wsk.action.delete(getLanguageModel)
     wsk.action.delete(listLanguageModels)
     wsk.action.delete(resetLanguageModel)
     wsk.action.delete(trainLanguageModel)
     wsk.action.delete(upgradeLanguageModel)
     wsk.action.delete(addCorpus)
     wsk.action.delete(deleteCorpus)
     wsk.action.delete(getCorpus)
     wsk.action.delete(listCorpora)
     wsk.action.delete(addWord)
     wsk.action.delete(addWords)
     wsk.action.delete(deleteWord)
     wsk.action.delete(getWord)
     wsk.action.delete(listWords)
     wsk.action.delete(createAcousticModel)
     wsk.action.delete(deleteAcousticModel)
     wsk.action.delete(getAcousticModel)
     wsk.action.delete(listAcousticModels)
     wsk.action.delete(resetAcousticModel)
     wsk.action.delete(trainAcousticModel)
     wsk.action.delete(upgradeAcousticModel)
     wsk.action.delete(addAudio)
     wsk.action.delete(deleteAudio)
     wsk.action.delete(getAudio)
     wsk.action.delete(listAudio)
     wsk.action.delete(deleteUserData)
     wsk.pkg.delete(packageName)

   }
}
