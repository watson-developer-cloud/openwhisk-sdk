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

import org.scalatest.BeforeAndAfterAll
import common.{TestHelpers, Wsk, WskActorSystem, WskProps, WskTestHelpers}
import common.rest.WskRestOperations
import common.TestUtils.RunResult
import com.jayway.restassured.RestAssured
import com.jayway.restassured.config.SSLConfig
import spray.json._

import scala.concurrent.duration.DurationInt
import scala.language.postfixOps

class WatsonPackages
    extends TestHelpers
    with WskActorSystem
    with WskTestHelpers
    with BeforeAndAfterAll {

  implicit val wskprops = WskProps()
  print(wskprops)
  val wsk = new Wsk()
  val wskRest: common.rest.WskRestOperations = new WskRestOperations
  val allowedActionDuration = 120 seconds

  val deployAction = "/whisk.system/deployWeb/wskdeploy"
  val deployActionURL = s"https://${wskprops.apihost}/api/v1/web${deployAction}.http"

  behavior of "Watson Packages"

  def makeWskdeployCallWithExpectedResult(params: JsObject, expectedResult: String, expectedCode: Int) = {
    print(params)
    val response = RestAssured.given()
      .contentType("application/json\r\n")
      .config(RestAssured.config().sslConfig(new SSLConfig().relaxedHTTPSValidation()))
      .body(params.toString())
      .post(deployActionURL)
    print("response")
    print(response.body.asString)
    print(response.statusCode())
    assert(response.statusCode() == expectedCode)
    response.body.asString should include(expectedResult)
    response.body.asString.parseJson.asJsObject.getFields("activationId") should have length 1
    print(response)
  }

  def verifyAction(action: RunResult, name: String, kindValue: JsString): Unit = {
    val stdout = action.stdout
    assert(stdout.startsWith(s"ok: got action $name\n"))
    wsk
      .parseJsonString(stdout)
      .fields("exec")
      .asJsObject
      .fields("kind") shouldBe kindValue
  }
}
