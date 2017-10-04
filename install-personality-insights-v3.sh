#!/bin/bash
# author : Ammar Dodin
#
# use the command line interface to install standard actions deployed
# automatically
#
# To run this command
# ./personality-insights-v3.sh  <AUTH> <APIHOST>
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

PACKAGE_NAME="personality-insights-v3"

# If the auth key file exists, read the key in the file. Otherwise, take the
# first argument as the key itself.
if [ -f "$AUTH" ]; then
    AUTH=`cat $AUTH`
fi

PACKAGE_HOME="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

export WSK_CONFIG_FILE= # override local property file to avoid namespace clashes

# watson personality insights actions

echo Installing Personality Insights V3 package

$WSK_CLI package update ${PACKAGE_NAME} --shared yes --auth "$AUTH"  --apihost "$APIHOST" \
-a description "Actions for Watson Personality Insights V3" \
-a parameters \
'[
  {"name":"username", "required":false, "bindTime":true, "description":"The Personality Insights service username"},
  {"name":"password", "required":false, "bindTime":true, "description":"The Personality Insights service password"}
]' \
-a prettyName "Watson Personality Insights V3"

$WSK_CLI -i --apihost "$APIHOST" action update --auth "$AUTH" "${PACKAGE_NAME}/profile" "$PACKAGE_HOME/actions/personality-insights-v3/profile.js" \
-a description "Generates a personality profile for the author of the input text" \
-a parameters \
'[
  {"name":"username", "required":false, "bindTime":true, "description":"The Personality Insights service username"},
  {"name":"password", "required":false, "bindTime":true, "description":"The Personality Insights service password"},
  {"name":"version_date", "required":true, "bindTime":false, "description":"The service version date"},
  {"name":"use_unauthenticated", "required":false, "bindTime":false,"description":"Skip credentials requirement"},
  {"name":"url", "required":false, "bindTime":false,"description":"Override default service base url"},
  {"name":"text", "required":true, "bindTime":false,"description":"The text to analyze"},
  {"name":"content_items", "required":false, "bindTime":false, "description":"A JSON input (if text not provided)"},
  {"name":"raw_scores", "required":false, "bindTime":false, "description":"Include raw results"},
  {"name":"language", "required":false, "bindTime":false, "description":"The language of the input"},
  {"name":"headers", "required":false, "bindTime":false},
  {"name":"headers.X-Watson-Learning-Opt-Out", "required":false, "bindTime":false,"description":"Opt-out of data collection"},
  {"name":"headers.accept_language", "required":false, "bindTime":false, "description":"The language expected for the output"},
  {"name":"headers.content_type", "required":false, "bindTime":false, "description":"The content type of the request: text/plain (the default), text/html, or application/json"},
  {"name":"headers.accept", "required":false, "bindTime":false, "description":"The desired content type of the response: application/json (the default) or text/csv"},
  {"name":"csv_headers", "required":false, "bindTime":false, "description":"If true, column labels are returned with a CSV response: if false (the default), they are not. Applies only when the Accept header is set to text/csv"},
  {"name":"consumption_preferences", "required":false, "bindTime":false, "description":"If true, information about consumption preferences is returned with the results"}
]' \
-a sampleInput \
'{
  "username" : "XXX", 
  "password": "XXX",
  "version_date": "2016-10-19",
  "text": "For more than twenty years past I have been paying special attention to the question of Health. While in England, I had to make my own arrangements for food and drink, and I can say, therefore, that my experience is quite reliable. I have arrived at certain definite conclusions from that experience, and I now set them down for the benefit of my readers. As the familiar saying goes, ‘Prevention is better than cure.’ It is far easier and safer to prevent illness by the observance of the laws of health than to set about curing the illness which has been brought on by our own ignorance and carelessness. Hence it is the duty of all thoughtful men to understand aright the laws of health, and the object of the following pages is to give an account of these laws."
}' \
-a sampleOutput \
'{
  "id":"*UNKNOWN*",
  "source":"*UNKNOWN*",
  "word_count":140,
  "word_count_message":"There were 140 words in the input. We need a minimum of 600, preferably 1,200 or more, to compute statistically significant estimates",
  "processed_lang":"en",
  "tree":
  {
    "id":"r",
    "name":"root",
    "children":
    [
      {
        "id":"personality",
        "name":"Big 5",
        "children":
        [
          {
            "id":
            "Openness_parent",
            "name":"Openness",
            "category":"personality",
            "percentage":0.999674337951248,
            "children":
            [
              {
                "id":"Openness",
                "name":"Openness",
                "category":"personality",
                "percentage":0.999674337951248,
                "sampling_error":0.065334958,
                "children":
                [
                  {
                    "id":"Adventurousness",
                    "name":"Adventurousness",
                    "category":"personality",
                    "percentage":0.393158459004456,
                    "sampling_error":0.054534382
                  },
                  {
                    "id":"Artistic interests",
                    "name":"Artistic interests",
                    "category":"personality",
                    "percentage":0.9048348546305579,
                    "sampling_error":0.110605472
                  },
                  {
                    "id":"Emotionality",
                    "name":"Emotionality",
                    "category":"personality",
                    "percentage":0.7205916867238179,
                    "sampling_error":0.051171832
                  },
                  {
                    "id":"Imagination",
                    "name":"Imagination",
                    "category":"personality",
                    "percentage":0.5429807274265042,
                    "sampling_error":0.068760482
                  },
                  {
                    "id":"Intellect",
                    "name":"Intellect",
                    "category":"personality",
                    "percentage":0.9947655416209745,
                    "sampling_error":0.060455328
                  },
                  {
                    "id":"Liberalism",
                    "name":"Authority-challenging",
                    "category":"personality",
                    "percentage":0.9995079798721823,
                    "sampling_error":0.088476794
                  }
                ]
              },
              {
                "id":"Conscientiousness",
                "name":"Conscientiousness",
                "category":"personality",
                "percentage":0.746918216763705,
                "sampling_error":0.08161881600000001,
                "children":
                [
                  {
                    "id":"Achievement striving",
                    "name":"Achievement striving",
                    "category":"personality",
                    "percentage":0.8321729649056452,
                    "sampling_error":0.104815324
                  },
                  {
                    "id":"Cautiousness",
                    "name":"Cautiousness",
                    "category":"personality",
                    "percentage":0.9217047270667802,
                    "sampling_error":0.096948942
                  },
                  {
                    "id":"Dutifulness",
                    "name":"Dutifulness",
                    "category":"personality",
                    "percentage":0.8232848335095543,
                    "sampling_error":0.06612136
                  },
                  {
                    "id":"Orderliness",
                    "name":"Orderliness",
                    "category":"personality",
                    "percentage":0.13000857957268747,
                    "sampling_error":0.074579154
                  },
                  {
                    "id":"Self-discipline",
                    "name":"Self-discipline",
                    "category":"personality",
                    "percentage":0.30966986916449063,
                    "sampling_error":0.050195448000000004
                  },
                  {
                    "id":"Self-efficacy",
                    "name":"Self-efficacy",
                    "category":"personality",
                    "percentage":0.6957154085563901,
                    "sampling_error":0.09787849800000001
                  }
                ]
              },
              {
                "id":"Extraversion",
                "name":"Extraversion",
                "category":"personality",
                "percentage":0.03440036690750109,
                "sampling_error":0.061123108,
                "children":
                [
                  {
                    "id":"Activity level",
                    "name":"Activity level",
                    "category":"personality",
                    "percentage":0.730406726610687,
                    "sampling_error":0.083166952
                  },
                  {
                    "id":"Assertiveness",
                    "name":"Assertiveness",
                    "category":"personality",
                    "percentage":0.6546303026625929,
                    "sampling_error":0.088534336
                  },
                  {
                    "id":"Cheerfulness",
                    "name":"Cheerfulness",
                    "category":"personality",
                    "percentage":0.0018175800010375998,
                    "sampling_error":0.111226424
                  },
                  {
                    "id":"Excitement-seeking",
                    "name":"Excitement-seeking",
                    "category":"personality",
                    "percentage":0.028335556807663642,
                    "sampling_error":0.084889824
                  },
                  {
                    "id":"Friendliness",
                    "name":"Outgoing",
                    "category":"personality",
                    "percentage":0.01800693430592859,
                    "sampling_error":0.079975428
                  },
                  {
                    "id":"Gregariousness",
                    "name":"Gregariousness",
                    "category":"personality",
                    "percentage":0.0012059985025243414,
                    "sampling_error":0.061304357999999996
                  }
                ]
              },
              {
                "id":"Agreeableness",
                "name":"Agreeableness",
                "category":"personality",
                "percentage":0.07095149862267996,
                "sampling_error":0.10196925,
                "children":
                [
                  {
                    "id":"Altruism",
                    "name":"Altruism",
                    "category":"personality",
                    "percentage":0.6181613812257354,
                    "sampling_error":0.075481712
                  },
                  {
                    "id":"Cooperation",
                    "name":"Cooperation",
                    "category":"personality",
                    "percentage":0.8427310359718222,
                    "sampling_error":0.084082158
                  },
                  {
                    "id":"Modesty",
                    "name":"Modesty",
                    "category":"personality",
                    "percentage":0.43490245411976436,
                    "sampling_error":0.060342298
                  },
                  {
                    "id":"Morality",
                    "name":"Uncompromising",
                    "category":"personality",
                    "percentage":0.7895302958259603,
                    "sampling_error":0.06707197
                  },
                  {
                    "id":"Sympathy",
                    "name":"Sympathy",
                    "category":"personality",
                    "percentage":0.9183666122667833,
                    "sampling_error":0.103259962
                  },
                  {
                    "id":"Trust",
                    "name":"Trust",
                    "category":"personality",
                    "percentage":0.5469490708845851,
                    "sampling_error":0.061568792
                  }
                ]
              },
              {
                "id":"Neuroticism",
                "name":"Emotional range",
                "category":"personality",
                "percentage":0.6338732535908385,
                "sampling_error":0.09655475,
                "children":
                [
                  {
                    "id":"Anger",
                    "name":"Fiery",
                    "category":"personality",
                    "percentage":0.25689107050794335,
                    "sampling_error":0.099386136
                  },
                  {
                    "id":"Anxiety",
                    "name":"Prone to worry",
                    "category":"personality",
                    "percentage":0.5611296282668162,
                    "sampling_error":0.059094974
                  },
                  {
                    "id":"Depression",
                    "name":"Melancholy",
                    "category":"personality",
                    "percentage":0.9120394127144453,
                    "sampling_error":0.063397438
                  },
                  {
                    "id":"Immoderation",
                    "name":"Immoderation",
                    "category":"personality",
                    "percentage":0.6313336964778596,
                    "sampling_error":0.05708286
                  },
                  {
                    "id":"Self-consciousness",
                    "name":"Self-consciousness",
                    "category":"personality",
                    "percentage":0.9119195935689333,
                    "sampling_error":0.061209236
                  },
                  {
                    "id":"Vulnerability",
                    "name":"Susceptible to stress",
                    "category":"personality",
                    "percentage":0.5181220709712123,
                    "sampling_error":0.09090632
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id":"needs",
        "name":"Needs",
        "children":
        [
          {
            "id":"Challenge_parent",
            "name":"Challenge",
            "category":"needs",
            "percentage":2.1835339350023686E-4,
            "children":
            [
              {
                "id":"Challenge",
                "name":"Challenge",
                "category":"needs",
                "percentage":2.1835339350023686E-4,
                "sampling_error":0.08781638
              },
              {
                "id":"Closeness",
                "name":"Closeness",
                "category":"needs",
                "percentage":0.044019127061698804,
                "sampling_error":0.08663119600000001
              },
              {
                "id":"Curiosity",
                "name":"Curiosity",
                "category":"needs",
                "percentage":0.9702834075285074,
                "sampling_error":0.125134534
              },
              {
                "id":"Excitement",
                "name":"Excitement",
                "category":"needs",
                "percentage":0.004594810310760089,
                "sampling_error":0.114429608
              },
              {
                "id":"Harmony",
                "name":"Harmony",
                "category":"needs",
                "percentage":0.04216784518252209,
                "sampling_error":0.11472112
              },
              {
                "id":"Ideal",
                "name":"Ideal",
                "category":"needs",
                "percentage":0.010386742823096262,
                "sampling_error":0.103974942
              },
              {
                "id":"Liberty",
                "name":"Liberty",
                "category":"needs",
                "percentage":0.014437432159555508,
                "sampling_error":0.15104135400000002
              },
              {
                "id":"Love",
                "name":"Love",
                "category":"needs",
                "percentage":0.011782496449944058,
                "sampling_error":0.105532742
              },
              {
                "id":"Practicality",
                "name":"Practicality",
                "category":"needs",
                "percentage":0.008423672231916812,
                "sampling_error":0.091879854
              },
              {
                "id":"Self-expression",
                "name":"Self-expression",
                "category":"needs",
                "percentage":0.04162222913118435,
                "sampling_error":0.085340202
              },
              {
                "id":"Stability",
                "name":"Stability",
                "category":"needs",
                "percentage":0.03815933738168659,
                "sampling_error":0.11160478800000001
              },
              {
                "id":"Structure",
                "name":"Structure",
                "category":"needs",
                "percentage":0.4073965770054886,
                "sampling_error":0.083925284
              }
            ]
          }
        ]
      },
      {
        "id":"values",
        "name":"Values",
        "children":
        [
          {
            "id":"Hedonism_parent",
            "name":"Hedonism",
            "category":"values",
            "percentage":0.003933813323213076,
            "children":
            [
              {
                "id":"Conservation",
                "name":"Conservation",
                "category":"values",
                "percentage":0.03824328818677347,
                "sampling_error":0.071314294
              },
              {
                "id":"Openness to change",
                "name":"Openness to change",
                "category":"values",
                "percentage":0.3990735076883021,
                "sampling_error":0.06877739
              },
              {
                "id":"Hedonism",
                "name":"Hedonism",
                "category":"values",
                "percentage":0.003933813323213076,
                "sampling_error":0.142899082
              },
              {
                "id":"Self-enhancement",
                "name":"Self-enhancement",
                "category":"values",
                "percentage":0.00547612900792338,
                "sampling_error":0.108707818
              },
              {
                "id":"Self-transcendence",
                "name":"Self-transcendence",
                "category":"values",
                "percentage":0.4130235862643775,
                "sampling_error":0.08673217
              }
            ]
          }
        ]
      }
    ]
  }
}' \