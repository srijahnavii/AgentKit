// Flow: research-paper-roadmap

// -- Meta --
export const meta = {
  "name": "research paper roadmap",
  "description": "",
  "tags": [],
  "testInput": null,
  "githubUrl": "",
  "documentationUrl": "",
  "deployUrl": "",
  "author": {
    "name": "Sri Jahnavi",
    "email": "srijahnavi@gmail.com"
  }
};

// -- Inputs --
export const inputs = {
  "InstructorLLMNode_651": [
    {
      "name": "generativeModelName",
      "label": "Generative Model Name",
      "type": "model"
    }
  ],
  "InstructorLLMNode_854": [
    {
      "name": "generativeModelName",
      "label": "Generative Model Name",
      "type": "model"
    }
  ]
};

// -- References --
export const references = {
  "constitutions": {
    "default": "@constitutions/default.md"
  },
  "prompts": {
    "research_paper_roadmap_instructor_llmnode_651_system_0": "@prompts/research-paper-roadmap_instructor-llmnode-651_system_0.md",
    "research_paper_roadmap_instructor_llmnode_651_user_1": "@prompts/research-paper-roadmap_instructor-llmnode-651_user_1.md",
    "research_paper_roadmap_instructor_llmnode_854_system_0": "@prompts/research-paper-roadmap_instructor-llmnode-854_system_0.md",
    "research_paper_roadmap_instructor_llmnode_854_user_1": "@prompts/research-paper-roadmap_instructor-llmnode-854_user_1.md"
  },
  "modelConfigs": {
    "research_paper_roadmap_instructor_llmnode_651_generative_model_name": "@model-configs/research-paper-roadmap_instructor-llmnode-651_generative-model-name.ts",
    "research_paper_roadmap_instructor_llmnode_854_generative_model_name": "@model-configs/research-paper-roadmap_instructor-llmnode-854_generative-model-name.ts"
  }
};

// -- Nodes & Edges --
export const nodes = [
  {
    "id": "triggerNode_1",
    "type": "triggerNode",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "nodeId": "webhookTriggerNode",
      "trigger": true,
      "values": {
        "nodeName": "Webhook"
      }
    }
  },
  {
    "id": "InstructorLLMNode_651",
    "type": "dynamicNode",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "nodeId": "InstructorLLMNode",
      "values": {
        "tools": [],
        "schema": "{\n  \"type\": \"object\",\n  \"properties\": {\n    \"paper_problem\": {\n      \"type\": \"string\",\n      \"description\": \"The problem the research paper is trying to solve\"\n    },\n    \"main_contribution\": {\n      \"type\": \"string\",\n      \"description\": \"the main contribution or novelty proposed by the paper\"\n    },\n    \"method_summary\": {\n      \"type\": \"string\",\n      \"description\": \"A concise summary of the proposed method and how it works\"\n    },\n    \"inputs\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"string\"\n      },\n      \"description\": \"Inputs required by the method\"\n    },\n    \"outputs\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"string\"\n      },\n      \"description\": \"Outputs produced by the method\"\n    },\n    \"method_components\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"string\"\n      },\n      \"description\": \"Major components to implement\"\n    },\n    \"algorithm_steps\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"string\"\n      },\n      \"description\": \"Main algorithm steps\"\n    },\n    \"mathematical_concepts\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"string\"\n      },\n      \"description\": \"Required mathematical concepts\"\n    },\n    \"architecture_details\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"string\"\n      },\n      \"description\": \"Model or system architecture details\"\n    },\n    \"training_procedure\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"string\"\n      },\n      \"description\": \"Training or execution procedure\"\n    },\n    \"dataset_requirements\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"string\"\n      },\n      \"description\": \"Dataset and preprocessing requirements\"\n    },\n    \"evaluation_details\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"string\"\n      },\n      \"description\": \"Evaluation metrics and procedure\"\n    },\n    \"missing_or_unclear_details\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"string\"\n      },\n      \"description\": \"Missing or ambiguous reproduction details\"\n    }\n  }\n}",
        "prompts": [
          {
            "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
            "role": "system",
            "content": "@prompts/research-paper-roadmap_instructor-llmnode-651_system_0.md"
          },
          {
            "id": "187c2f4b-c23d-4545-abef-73dc897d6b7d",
            "role": "user",
            "content": "@prompts/research-paper-roadmap_instructor-llmnode-651_user_1.md"
          }
        ],
        "memories": "[]",
        "messages": "[]",
        "nodeName": "Generate JSON",
        "attachments": "",
        "generativeModelName": "@model-configs/research-paper-roadmap_instructor-llmnode-651_generative-model-name.ts"
      }
    }
  },
  {
    "id": "InstructorLLMNode_854",
    "type": "dynamicNode",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "nodeId": "InstructorLLMNode",
      "values": {
        "tools": [],
        "schema": "{\n  \"type\": \"object\",\n  \"properties\": {\n    \"implementation_overview\": {\n      \"type\": \"string\"\n    },\n    \"what_to_implement\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"string\"\n      }\n    },\n    \"required_concepts\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"string\"\n      }\n    },\n    \"required_tools\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"string\"\n      }\n    },\n    \"dataset_plan\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"string\"\n      }\n    },\n    \"implementation_phases\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"string\"\n      }\n    },\n    \"main_algorithm_pseudocode\": {\n      \"type\": \"string\"\n    },\n    \"project_folder_structure\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"string\"\n      }\n    },\n    \"evaluation_plan\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"string\"\n      }\n    },\n    \"common_difficulties\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"string\"\n      }\n    },\n    \"mvp_plan\": {\n      \"type\": \"array\",\n      \"items\": {\n        \"type\": \"string\"\n      }\n    }\n  }\n}",
        "prompts": [
          {
            "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
            "role": "system",
            "content": "@prompts/research-paper-roadmap_instructor-llmnode-854_system_0.md"
          },
          {
            "id": "187c2f4b-c23d-4545-abef-73dc897d6b7d",
            "role": "user",
            "content": "@prompts/research-paper-roadmap_instructor-llmnode-854_user_1.md"
          }
        ],
        "memories": "[]",
        "messages": "[]",
        "nodeName": "Generate JSON",
        "attachments": "",
        "generativeModelName": "@model-configs/research-paper-roadmap_instructor-llmnode-854_generative-model-name.ts"
      }
    }
  },
  {
    "id": "plus-node-addNode_525834",
    "type": "addNode",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "nodeId": "addNode",
      "values": {}
    }
  }
];

export const edges = [
  {
    "id": "triggerNode_1-InstructorLLMNode_651-229",
    "source": "triggerNode_1",
    "target": "InstructorLLMNode_651",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "type": "defaultEdge"
  },
  {
    "id": "InstructorLLMNode_651-InstructorLLMNode_854-377",
    "source": "InstructorLLMNode_651",
    "target": "InstructorLLMNode_854",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "type": "defaultEdge"
  },
  {
    "id": "InstructorLLMNode_854-plus-node-addNode_525834-831",
    "source": "InstructorLLMNode_854",
    "target": "plus-node-addNode_525834",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "type": "defaultEdge"
  }
];

export default { meta, inputs, references, nodes, edges };
