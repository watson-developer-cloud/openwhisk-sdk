#!/bin/bash
# author : Ammar Dodin
#
# use the command line interface to install standard actions deployed
# automatically
#
# To run this command
# ./install_tone_analyzer_v3.sh  <AUTH> <APIHOST>
# AUTH and APIHOST are found in $HOME/.wskprops

set -e
set -x

if [ $# -eq 0 ]
then
echo "Usage: ./install_tone_analyzer_v3.sh <authkey> <apihost> <wskcli>"
exit
fi

AUTH=$1
APIHOST=$2
WSK_CLI=$3

PACKAGE_NAME="tone-analyzer-v3"

# If the auth key file exists, read the key in the file. Otherwise, take the
# first argument as the key itself.
if [ -f "$AUTH" ]; then
    AUTH=`cat $AUTH`
fi

PACKAGE_HOME="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

export WSK_CONFIG_FILE= # override local property file to avoid namespace clashes

# watson tone analyzer actions

echo Installing Tone Analyzer V3 package

$WSK_CLI package update ${PACKAGE_NAME} --shared yes --auth "$AUTH"  --apihost "$APIHOST" \
-a description "Actions for Watson Tone Analyzer V3" \
-a parameters \
'[
  {"name":"username", "required":false, "bindTime":true, "description":"The Tone Analyzer service username"},
  {"name":"password", "required":false, "bindTime":true, "description":"The Tone Analyzer service password"}
]' \
-a prettyName "Watson Tone Analyzer V3"

$WSK_CLI -i --apihost "$APIHOST" action update --auth "$AUTH" "${PACKAGE_NAME}/tone" "$PACKAGE_HOME/actions/tone-analyzer-v3/tone.js" \
-a description "Analyzes the tone of text" \
-a parameters \
'[
  {"name":"username", "required":false, "bindTime":true, "description":"The Tone Analyzer service username"},
  {"name":"password", "required":false, "bindTime":true, "description":"The Tone Analyzer service password"},
  {"name":"version_date", "required":true, "bindTime":false,"description":"The Tone Analyzer service version date"},
  {"name":"headers.X-Watson-Learning-Opt-Out", "required":false, "bindTime":false,"description":"Opt-out of data collection"},
  {"name":"use_unauthenticated", "required":false, "bindTime":false,"description":"Skip credentials requirement"},
  {"name":"url", "required":false, "bindTime":false,"description":"Override default service base url"},
  {"name":"text", "required":true, "bindTime":false,"description":"The text to be analyzed for tone"},
  {"name":"tone", "required":false, "bindTime":false,"description":"A list of tones for which the service to return its analysis of the input"},
  {"name":"sentences", "required":false, "bindTime":false,"description":"Indicates whether the service is to return an analysis of each individual sentence in addition to its analysis of the full document"},
  {"name":"isHTML", "required":false, "bindTime":false,"description":"Indicates the text parameter provides HTML input"},
  {"name":"headers", "required":false, "bindTime":false}
]' \
-a sampleInput '{"username" : "XXX", "password":"XXX", "version_date":"2016-05-09", "text": "Team, I know that times are tough! Product sales have been disappointing for the past three quarters. We have a competitive product, but we need to do a better job of selling it!"}' \
-a sampleOutput \
'{
  "document_tone": {
    "tone_categories": [
      {
        "tones": [
          {
            "score": 0.134622,
            "tone_id": "anger",
            "tone_name": "Anger"
          },
          {
            "score": 0.013182,
            "tone_id": "disgust",
            "tone_name": "Disgust"
          },
          {
            "score": 0.092403,
            "tone_id": "fear",
            "tone_name": "Fear"
          },
          {
            "score": 0.013411,
            "tone_id": "joy",
            "tone_name": "Joy"
          },
          {
            "score": 0.635069,
            "tone_id": "sadness",
            "tone_name": "Sadness"
          }
        ],
        "category_id": "emotion_tone",
        "category_name": "Emotion Tone"
      }
    ]
  },
  "sentences_tone": [
    {
      "sentence_id": 0,
      "text": "Team, I know that times are tough!",
      "input_from": 0,
      "input_to": 34,
      "tone_categories": [
        {
          "tones": [
            {
              "score": 0.150882,
              "tone_id": "anger",
              "tone_name": "Anger"
            },
            {
              "score": 0.410121,
              "tone_id": "sadness",
              "tone_name": "Sadness"
            }
          ],
          "category_id": "emotion_tone",
          "category_name": "Emotion Tone"
        }
      ]
    },
    {
      "sentence_id": 1,
      "text": "Product sales have been disappointing for the past three quarters.",
      "input_from": 35,
      "input_to": 101,
      "tone_categories": [
        {
          "tones": [
            {
              "score": 0.106857,
              "tone_id": "anger",
              "tone_name": "Anger"
            },
            {
              "score": 0.758459,
              "tone_id": "sadness",
              "tone_name": "Sadness"
            }
          ],
          "category_id": "emotion_tone",
          "category_name": "Emotion Tone"
        }
      ]
    },
    {
      "sentence_id": 2,
      "text": "We have a competitive product, but we need to do a better job of selling it!",
      "input_from": 102,
      "input_to": 178,
      "tone_categories": [
        {
          "tones": [
            {
              "score": 0.094095,
              "tone_id": "anger",
              "tone_name": "Anger"
            },
            {
              "score": 0.193997,
              "tone_id": "sadness",
              "tone_name": "Sadness"
            }
          ],
          "category_id": "emotion_tone",
          "category_name": "Emotion Tone"
        }
      ]
    }
  ]
}'

$WSK_CLI -i --apihost "$APIHOST" action update --auth "$AUTH" "${PACKAGE_NAME}/tone_chat" "$PACKAGE_HOME/actions/toneanalyzer-v3/tone_chat.js" \
-a description 'Analyzes customer engagement tone' \
-a parameters \
'[
  {"name":"username", "required":false, "bindTime":true, "description":"The Tone Analyzer service username"},
  {"name":"password", "required":false, "bindTime":true, "description":"The Tone Analyzer service password"},
  {"name":"version_date", "required":true, "bindTime":false,"description":"The Tone Analyzer service version date"},
  {"name":"headers.X-Watson-Learning-Opt-Out", "required":false, "bindTime":false,"description":"Opt-out of data collection"},
  {"name":"use_unauthenticated", "required":false, "bindTime":false,"description":"Skip credentials requirement"},
  {"name":"url", "required":false, "bindTime":false,"description":"Override default service base url"},
  {"name":"utterances", "required":true, "bindTime":false,"description":"An array of Utterances objects to analyze"},
  {"name":"tone", "required":false, "bindTime":false,"description":"A list of tones for which the service to return its analysis of the input"},
  {"name":"sentences", "required":false, "bindTime":false,"description":"Indicates whether the service is to return an analysis of each individual sentence in addition to its analysis of the full document"},
  {"name":"isHTML", "required":false, "bindTime":false,"description":"Indicates the text parameter provides HTML input"},
  {"name":"headers", "required":false, "bindTime":false}
]' \
-a sampleInput \
'{
  "username" : "XXX",
  "password":"XXX",
  "version_date":"2016-05-09",
  "utterances": 
  [
    {
      "text": "Hello, I am having a problem with your product.",
      "user": "customer"
    },
    {
      "text": "OK, let me know what is going on, please.",
      "user": "agent"
    },
    {
      "text": "Well, nothing is working :(",
      "user": "customer"
    },
    {
      "text": "Sorry to hear that.",
      "user": "agent"
    }
  ]
}' \
-a sampleOutput \
'{
  "utterances_tone": 
  [
    {
      "utterance_id": 0,
      "utterance_text": "Hello, I am having a problem with your product.",
      "tones": 
      [
        {
          "score": 0.711722,
          "tone_id": "polite",
          "tone_name": "polite"
        }
      ]
    },
    {
      "utterance_id": 1,
      "utterance_text": "OK, let me know what is going on, please.",
      "tones": 
      [
        {
          "score": 0.814275,
          "tone_id": "polite",
          "tone_name": "polite"
        }
      ]
    },
    {
      "utterance_id": 2,
      "utterance_text": "Well, nothing is working :(",
      "tones": 
      [
        {
          "score": 0.753187,
          "tone_id": "frustrated",
          "tone_name": "frustrated"
        },
        {
          "score": 0.940611,
          "tone_id": "sad",
          "tone_name": "sad"
        }
      ]
    },
    {
      "utterance_id": 3,
      "utterance_text": "Sorry to hear that.",
      "tones": 
      [
        {
          "score": 0.992159,
          "tone_id": "polite",
          "tone_name": "polite"
        },
        {
          "score": 0.772394,
          "tone_id": "sympathetic",
          "tone_name": "sympathetic"
        }
      ]
    }
  ]
}'