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
class PersonalityInsightsV3Tests extends WatsonPackages
  with WskTestHelpers
  with BeforeAndAfterAll {
    val deployTestRepo = "https://github.com/watson-developer-cloud/openwhisk-sdk";
    val manifestPath = "packages/personality-insights-v3"
    val successStatus = """"status":"success""""
    val nodejs8kind = "nodejs:8"

    //personality-insights-v3 action definitions
    val packageName = "personality-insights-v3"
    val profileAsCsv = packageName + "/profile-as-csv"
    val profile = packageName + "/profile"

    behavior of "Personality Insights V3 Package"

    // test to create the personality insights v3 package from github url. TODO: should use preinstalled folder
    it should "create the personality insights v3 package from github url" in {

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

     val profileAsCsvAction = wsk.action.get(profileAsCsv)
     verifyAction(profileAsCsvAction, profileAsCsv, JsString(nodejs8kind))

     val profileAction = wsk.action.get(profile)
     verifyAction(profileAction, profile, JsString(nodejs8kind))

     //clean up after test
     wsk.action.delete(profileAsCsv)
     wsk.action.delete(profile)
     wsk.pkg.delete(packageName)
   }
}
